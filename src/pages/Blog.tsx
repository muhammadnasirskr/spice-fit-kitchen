import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { blogsNewestFirst } from "@/data/blogs";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Blog | SpiceFitKitchen"
        description="Expert guides, nutrition tips, and healthy recipe deep-dives from the SpiceFitKitchen team."
        path="/blog"
      />

      {/* Header banner */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-orange-50 dark:to-orange-950/20 py-16 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4" />
            SpiceFitKitchen Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Guides, Tips & Deep Dives
          </h1>
          <p className="text-xl text-muted-foreground">
            Expert articles on healthy cooking, nutrition science, meal prep, and balanced living.
          </p>
        </div>
      </div>

      {/* Blog cards */}
      <div className="container mx-auto px-4 py-14 max-w-5xl">
        {blogsNewestFirst.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg">No articles yet — check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-10">
            {blogsNewestFirst.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                <article className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-all duration-300 cursor-pointer">
                  {/* Thumbnail */}
                  <div className="w-full md:w-72 lg:w-80 flex-shrink-0 overflow-hidden relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-56 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Hide a broken image rather than swapping in an
                        // unrelated stock photo.
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6 md:p-8 flex-1">
                    <h2 className="text-2xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h2>
                    {blog.subtitle && (
                      <p className="text-primary text-sm font-medium mb-3">{blog.subtitle}</p>
                    )}
                    <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-primary" />
                          {blog.readTime}
                        </div>
                        <span>{blog.date}</span>
                      </div>
                      <span className="flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
