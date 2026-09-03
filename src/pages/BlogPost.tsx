import { useParams, Link } from "wouter";
import { renderText } from "@/lib/rich-text";
import { Seo } from "@/components/Seo";
import { blogs } from "@/data/blogs";
import NotFound from "./not-found";
import { Clock, Calendar, ChefHat } from "lucide-react";

// renderText now lives in src/lib/rich-text.tsx (shared with recipe pages).

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${blog.title} | SpiceFitKitchen`}
        description={blog.excerpt}
        path={`/blog/${blog.slug}`}
        image={blog.image}
        type="article"
      />

      {/* Hero */}
      {blog.bannerImage ? (
        /* Pre-designed banner (title already in the image) — shown clean, no overlay */
        <div className="container mx-auto px-4 max-w-5xl pt-6">
          <img
            src={blog.bannerImage}
            alt={blog.title}
            className="w-full h-auto rounded-2xl shadow-md"
          />
          {/* Keep the title as real text for SEO/accessibility even though it is in the image */}
          <h1 className="sr-only">{blog.title}</h1>
        </div>
      ) : (
        <div
          className="w-full h-72 md:h-[28rem] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${blog.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 h-full flex flex-col justify-end container mx-auto px-4 pb-10 max-w-5xl">
            <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight mb-2">
              {blog.title}
            </h1>
            <p className="text-white/80 text-lg">{blog.subtitle}</p>
          </div>
        </div>
      )}

      {/* Meta bar */}
      <div className="border-b border-border bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl py-4 flex flex-wrap gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            {blog.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            {blog.readTime}
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="w-4 h-4 text-primary" />
            SpiceFitKitchen Team
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {blog.content.map((section, i) => {

              /* Inline photo */
              if (section.type === "image") {
                return (
                  <figure key={i} className="my-2">
                    <div className="rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={section.image}
                        alt={section.imageAlt ?? ""}
                        className="w-full h-64 md:h-80 object-cover"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).closest("figure")?.remove();
                        }}
                      />
                    </div>
                    {section.imageCaption && (
                      <figcaption className="text-sm text-muted-foreground text-center mt-3 italic">
                        {section.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              /* Intro quote */
              if (section.type === "intro") {
                return (
                  <p key={i} className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-5 italic">
                    {renderText(section.text)}
                  </p>
                );
              }

              /* FAQ-style paragraph with bold sub-heading */
              if (section.type === "paragraph") {
                return (
                  <div key={i} className="space-y-1">
                    {section.heading && (
                      <h3 className="text-base font-bold text-foreground">{section.heading}</h3>
                    )}
                    <p className="text-muted-foreground leading-relaxed">{renderText(section.text)}</p>
                  </div>
                );
              }

              /* Numbered steps */
              if (section.type === "numbered") {
                return (
                  <div key={i} className="space-y-4">
                    {section.heading && (
                      <h2 className="text-2xl font-bold font-heading text-foreground border-b border-border pb-2">
                        {section.heading}
                      </h2>
                    )}
                    {section.text && (
                      <p className="text-sm text-muted-foreground italic">{renderText(section.text)}</p>
                    )}
                    <ol className="space-y-3 list-none">
                      {section.items?.map((item, j) => (
                        <li key={j} className="flex gap-4 items-start bg-muted/40 rounded-xl p-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mt-0.5">
                            {j + 1}
                          </span>
                          <span className="text-foreground leading-relaxed pt-1">{renderText(item)}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              }

              /* Default: heading + bullet list */
              return (
                <div key={i} className="space-y-3">
                  {section.heading && (
                    <h2 className="text-2xl font-bold font-heading text-foreground border-b border-border pb-2">
                      {section.heading}
                    </h2>
                  )}
                  {section.text && (
                    <p className="text-sm text-muted-foreground italic">{renderText(section.text)}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex gap-3 items-start text-muted-foreground leading-relaxed">
                          <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                          {/* renderText returns a mixed array of strings and <Link>s.
                              Without this wrapper each fragment becomes its own flex
                              item, which breaks any bullet that contains a link. */}
                          <span>{renderText(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky sidebar */}
          <div className="space-y-6">
            {/* Nutrition table */}
            {blog.nutrition && (
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold font-heading mb-4 text-foreground flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary inline-block" />
                  Nutrition (Per Serving)
                </h3>
                <div className="space-y-2">
                  {blog.nutrition.map((row, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-2 text-sm ${
                        i !== blog.nutrition!.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="text-muted-foreground">{row.nutrient}</span>
                      <span className="font-semibold text-foreground">{row.amount}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Estimates based on standard ingredients. Values vary by brand.
                </p>
              </div>
            )}

            {/* Quick facts */}
            {blog.quickFacts && (
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h3 className="text-base font-bold font-heading mb-3 text-foreground">Quick Facts</h3>
                <div className="space-y-2 text-sm">
                  {blog.quickFacts.map((fact, i) => (
                    <div key={i} className={`flex justify-between ${i > 0 ? "border-t border-border pt-2" : ""}`}>
                      <span className="text-muted-foreground">{fact.label}</span>
                      <span className={`font-medium ${fact.highlight ? "text-primary" : ""}`}>{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Blog image in sidebar */}
            {blog.sidebarImage && (
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={blog.sidebarImage.src}
                  alt={blog.sidebarImage.alt}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="bg-primary/5 border border-primary/20 p-4 text-sm text-muted-foreground text-center italic">
                  {blog.sidebarImage.caption}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
