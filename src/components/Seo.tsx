import { Helmet } from "react-helmet-async";

const SITE_URL = "https://spicefitkitchen.com";
const SITE_NAME = "SpiceFitKitchen";
const DEFAULT_IMAGE = `${SITE_URL}/opengraph.jpg`;
const DEFAULT_DESCRIPTION =
  "Healthy South Asian, American, and fusion recipes with easy steps, nutrition info, and meal plans for a balanced, modern lifestyle.";

interface SeoProps {
  /** Full page title, including the brand (e.g. "About Us | SpiceFitKitchen"). */
  title: string;
  /** Meta description for search engines and social cards. */
  description?: string;
  /** Path only, e.g. "/about" or "/blog/my-post". Defaults to home. */
  path?: string;
  /** Absolute URL or a site-relative path to the share image. */
  image?: string;
  /** "website" (default) or "article". */
  type?: "website" | "article";
  /** Set true on pages that should not be indexed (e.g. 404, search results). */
  noindex?: boolean;
}

export function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noindex = false,
}: SeoProps) {
  const cleanPath = path === "/" ? "" : path;
  const canonical = `${SITE_URL}${cleanPath}`;
  const desc = description || DEFAULT_DESCRIPTION;
  const img = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}
