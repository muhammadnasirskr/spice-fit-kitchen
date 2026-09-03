/**
 * generate-meta.mjs
 * ------------------------------------------------------------------
 * Runs AFTER `vite build`.
 *
 * The site is a client-side SPA: dist/ contains a single index.html, so
 * every URL used to serve the HOMEPAGE's <title>, description and og:image.
 * Google renders JS so it coped, but social scrapers (WhatsApp, Facebook,
 * Pinterest, LinkedIn, Slack) do NOT run JS — they read the raw HTML.
 * Result: every shared link showed the homepage title and homepage image.
 *
 * This script writes a real dist/<route>/index.html for every known route,
 * with that route's own <title>, description, canonical, Open Graph,
 * Twitter Card and JSON-LD structured data baked into the HTML.
 *
 * The <div id="root"> stays empty — React still renders the page in the
 * browser exactly as before. Only the <head> is pre-filled.
 * ------------------------------------------------------------------
 */

// esbuild ships as a direct dependency of Vite, so it is always present in
// node_modules. It is deliberately NOT added to package.json: that would
// change the dependency list and could desync package-lock.json on Vercel.
import { build } from "esbuild";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://spicefitkitchen.com";
const SITE_NAME = "SpiceFitKitchen";
const DEFAULT_IMAGE = `${SITE_URL}/opengraph.jpg`;
const DEFAULT_DESCRIPTION =
  "Healthy South Asian, American, and fusion recipes with easy steps, nutrition info, and meal plans for a balanced, modern lifestyle.";

/* ---------- helpers ---------- */

/** Escape a string so it is safe inside a double-quoted HTML attribute. */
const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Make a site-relative path absolute; leave full URLs alone. */
const abs = (src) => {
  if (!src) return DEFAULT_IMAGE;
  return src.startsWith("http") ? src : `${SITE_URL}${src}`;
};

/** "30 min" / "1 hr 10 min" -> ISO-8601 duration, e.g. "PT30M". */
const isoDuration = (s) => {
  if (!s) return undefined;
  const h = /(\d+)\s*(?:h|hr|hour)/i.exec(s);
  const m = /(\d+)\s*(?:m|min|minute)/i.exec(s);
  if (!h && !m) return undefined;
  return `PT${h ? `${h[1]}H` : ""}${m ? `${m[1]}M` : ""}`;
};

/** "September 1, 2026" or "2024-10-12" -> "2024-10-12". */
const isoDate = (s) => {
  if (!s) return undefined;
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
};

/**
 * Load the .ts data files by bundling them to a temp ESM file with esbuild.
 * (They are plain data modules with no imports, so this is cheap and safe.)
 */
async function loadData(relPath) {
  const outfile = path.join(DIST, `.__data-${path.basename(relPath, ".ts")}.mjs`);
  await build({
    entryPoints: [path.join(ROOT, relPath)],
    outfile,
    bundle: true,
    format: "esm",
    platform: "node",
    logLevel: "silent",
  });
  const mod = await import(pathToFileURL(outfile).href);
  await fs.rm(outfile, { force: true });
  return mod;
}

/* ---------- head injection ---------- */

function buildHead(page) {
  const title = page.title;
  const desc = page.description || DEFAULT_DESCRIPTION;
  const canonical = `${SITE_URL}${page.path === "/" ? "/" : page.path}`;
  const image = abs(page.image);
  const type = page.type || "website";

  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(desc)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  ];

  if (page.publishedTime) {
    tags.push(`<meta property="article:published_time" content="${page.publishedTime}" />`);
  }

  if (page.jsonLd) {
    // "</" is escaped so a stray sequence inside the data can never close the tag early.
    const json = JSON.stringify(page.jsonLd).replace(/</g, "\\u003c");
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }

  return tags.map((t) => `    ${t}`).join("\n");
}

/**
 * Take dist/index.html, strip the head tags this script owns, and splice in
 * the per-page ones. Everything else (gtag, fonts, favicon, hashed asset
 * links) is preserved untouched.
 */
function renderHtml(template, page) {
  const OWNED = [
    /^[ \t]*<title>[\s\S]*?<\/title>[ \t]*\r?\n?/im,
    /^[ \t]*<meta\s+name="description"[^>]*>[ \t]*\r?\n?/gim,
    /^[ \t]*<meta\s+name="robots"[^>]*>[ \t]*\r?\n?/gim,
    /^[ \t]*<link\s+rel="canonical"[^>]*>[ \t]*\r?\n?/gim,
    /^[ \t]*<meta\s+property="og:[^"]*"[^>]*>[ \t]*\r?\n?/gim,
    /^[ \t]*<meta\s+name="twitter:[^"]*"[^>]*>[ \t]*\r?\n?/gim,
    /^[ \t]*<meta\s+property="article:[^"]*"[^>]*>[ \t]*\r?\n?/gim,
    /^[ \t]*<script\s+type="application\/ld\+json">[\s\S]*?<\/script>[ \t]*\r?\n?/gim,
    /^[ \t]*<!--\s*Open Graph\s*-->[ \t]*\r?\n?/gim,
    /^[ \t]*<!--\s*Twitter\s*-->[ \t]*\r?\n?/gim,
  ];

  let html = template;
  for (const re of OWNED) html = html.replace(re, "");
  html = html.replace(/\n[ \t]*\n[ \t]*\n+/g, "\n\n"); // tidy the gaps left behind

  const head = buildHead(page);
  if (!/<\/head>/i.test(html)) throw new Error("dist/index.html has no </head>");
  return html.replace(/[ \t]*<\/head>/i, `\n${head}\n  </head>`);
}

/* ---------- route table ---------- */

async function collectPages() {
  const { blogs } = await loadData("src/data/blogs.ts");
  const { recipes } = await loadData("src/data/recipes.ts");
  const { categories } = await loadData("src/data/categories.ts");

  const publisher = {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  };

  const pages = [];

  /* --- static pages: titles/descriptions mirror <Seo> in each page component --- */
  pages.push(
    {
      path: "/",
      title: "SpiceFitKitchen | Healthy South Asian, American & Fusion Recipes",
      description:
        "SpiceFitKitchen brings you healthy South Asian, American, and fusion recipes with easy steps, nutrition info, and meal plans — flavorful cooking for a balanced, modern lifestyle.",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        publisher,
        // No SearchAction: /search keeps its query in component state, not in a
        // URL parameter, so a sitelinks searchbox would point at a URL that
        // cannot actually run the search. Add it only if /search ever reads ?q=.
      },
    },
    {
      path: "/recipes",
      title: "All Recipes | SpiceFitKitchen",
      description:
        "Browse our full collection of healthy South Asian, American, and fusion recipes — filter by category, cook time, and dietary needs.",
    },
    {
      path: "/blog",
      title: "Blog | SpiceFitKitchen",
      description:
        "Expert guides, nutrition tips, and healthy recipe deep-dives from the SpiceFitKitchen team.",
    },
    {
      path: "/meal-plans",
      title: "Meal Plans | SpiceFitKitchen",
      description:
        "Curated healthy meal plans — high-protein, weight-loss, and balanced weekly menus built from our recipe collection.",
    },
    {
      path: "/healthy-living",
      title: "Healthy Living | SpiceFitKitchen",
      description:
        "Articles, tips, and science-backed advice to help you live a balanced, healthy life.",
    },
    {
      path: "/about",
      title: "About Us | SpiceFitKitchen",
      description:
        "Learn about SpiceFitKitchen — our mission to make healthy South Asian, American, and fusion cooking accessible, nutritious, and genuinely delicious.",
    },
    {
      path: "/contact",
      title: "Contact Us | SpiceFitKitchen",
      description:
        "Get in touch with the SpiceFitKitchen team — questions, recipe requests, collaborations, or feedback. We reply within 24–48 hours.",
    },
    {
      path: "/privacy-policy",
      title: "Privacy Policy | SpiceFitKitchen",
      description:
        "How SpiceFitKitchen collects, uses, and protects your information, including our use of cookies and third-party advertising such as Google AdSense.",
    },
    {
      path: "/terms",
      title: "Terms of Service | SpiceFitKitchen",
      description:
        "The terms and conditions that govern your use of the SpiceFitKitchen website and its content.",
    },
    {
      path: "/disclaimer",
      title: "Disclaimer | SpiceFitKitchen",
      description:
        "Important information about the nutritional, medical, and affiliate disclosures for content published on SpiceFitKitchen.",
    },
  );

  /* --- category pages --- */
  for (const c of categories) {
    pages.push({
      path: `/category/${c.slug}`,
      title: `${c.name} Recipes | ${SITE_NAME}`,
      description: c.description,
    });
  }

  /* --- blog posts --- */
  for (const b of blogs) {
    const url = `${SITE_URL}/blog/${b.slug}`;
    const published = isoDate(b.date);
    pages.push({
      path: `/blog/${b.slug}`,
      title: `${b.title} | ${SITE_NAME}`,
      description: b.excerpt,
      image: b.image,
      type: "article",
      publishedTime: published,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: b.title,
        description: b.excerpt,
        image: [abs(b.image)],
        datePublished: published,
        dateModified: published,
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
    });
  }

  /* --- recipe pages --- */
  for (const r of recipes) {
    const url = `${SITE_URL}/recipes/${r.id}`;
    // NOTE: `rating` / `ratingCount` exist in the data but are NOT emitted as
    // aggregateRating — they are placeholder values, not real user reviews.
    // Publishing them as structured data would be a Google policy violation.
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Recipe",
      name: r.title,
      description: r.description,
      image: [abs(r.image)],
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      publisher,
      datePublished: isoDate(r.publishedDate),
      dateModified: isoDate(r.updatedDate || r.publishedDate),
      recipeCategory: r.mealType,
      recipeCuisine: r.category,
      keywords: (r.tags || []).join(", "),
      recipeYield: `${r.servings} servings`,
      prepTime: isoDuration(r.prepTime),
      cookTime: isoDuration(r.cookTime),
      totalTime: isoDuration(r.totalTime),
      recipeIngredient: (r.ingredients || []).map((i) =>
        [i.amount, i.unit, i.name].filter(Boolean).join(" ").trim(),
      ),
      recipeInstructions: (r.instructions || []).map((s) => ({
        "@type": "HowToStep",
        name: s.title,
        text: s.description,
      })),
      nutrition: {
        "@type": "NutritionInformation",
        calories: `${r.calories} calories`,
        proteinContent: `${r.protein} g`,
        carbohydrateContent: `${r.carbs} g`,
        fatContent: `${r.fat} g`,
        fiberContent: `${r.fiber} g`,
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };
    // Drop undefined values so we never emit `"prepTime": undefined`.
    for (const k of Object.keys(jsonLd)) if (jsonLd[k] === undefined) delete jsonLd[k];

    pages.push({
      path: `/recipes/${r.id}`,
      title: `${r.title} | ${SITE_NAME}`,
      description: r.description,
      image: r.image,
      type: "article",
      publishedTime: isoDate(r.publishedDate),
      jsonLd,
    });
  }

  return pages;
}

/* ---------- main ---------- */

async function main() {
  const indexPath = path.join(DIST, "index.html");
  const template = await fs.readFile(indexPath, "utf8");

  const pages = await collectPages();
  let written = 0;

  for (const page of pages) {
    const html = renderHtml(template, page);
    const dir = path.join(DIST, page.path.replace(/^\//, ""));
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, "index.html"), html, "utf8");
    written++;
  }

  console.log(`[generate-meta] wrote ${written} pre-rendered HTML files into dist/`);
}

main().catch((err) => {
  console.error("[generate-meta] FAILED:", err);
  process.exit(1);
});
