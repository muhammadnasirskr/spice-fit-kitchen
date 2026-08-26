import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const ARTICLES = [
  {
    title: "High Protein Smoothie for Breakfast",
    date: "June 15, 2026",
    category: "High Protein",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop",
    excerpt: "Fuel your mornings with this delicious high protein smoothie. Packed with 28g of protein — quick, healthy, and perfect for weight loss or muscle gain.",
    href: "/blog/high-protein-smoothie-breakfast",
  },
  {
    title: "Understanding Macros in South Asian Food",
    date: "Nov 12, 2023",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop",
    excerpt: "Learn the fundamentals of keeping traditional recipes healthy without losing the authentic taste you love...",
    href: null,
  },
  {
    title: "5 Ways to Lighten Up Traditional Curries",
    date: "Oct 28, 2023",
    category: "Cooking Tips",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop",
    excerpt: "Simple swaps and smart techniques that slash calories while keeping every curry deeply satisfying...",
    href: null,
  },
  {
    title: "The Ultimate Guide to Healthy Oils for Indian Cooking",
    date: "Oct 15, 2023",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop",
    excerpt: "From mustard oil to avocado oil — discover which fats are best for high-heat cooking and everyday flavor...",
    href: null,
  },
  {
    title: "Balancing Flavor and Health: The SpiceFit Way",
    date: "Sep 30, 2023",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop",
    excerpt: "Our philosophy on eating well without restriction — building a sustainable, joyful relationship with food...",
    href: null,
  },
];

export default function HealthyLiving() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthy Living | SpiceFitKitchen</title>
        <meta name="description" content="Articles, tips, and science-backed advice to help you live a balanced, healthy life." />
      </Helmet>

      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-orange-50 dark:to-orange-950/20 py-16 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Healthy Living Guides
          </h1>
          <p className="text-xl text-muted-foreground text-center">
            Articles, tips, and science-backed advice to help you live a balanced life.
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="container mx-auto px-4 py-14 max-w-4xl">
        <div className="grid gap-8">
          {ARTICLES.map((article, i) => {
            const inner = (
              <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                {/* Image */}
                <div className="w-full md:w-80 flex-shrink-0 overflow-hidden relative">
                  {i === 0 && (
                    <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      New
                    </span>
                  )}
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-52 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 flex-1">
                  <span className="text-primary font-semibold text-sm mb-2 text-center">
                    {article.category}
                  </span>
                  <h2 className="text-2xl font-bold font-heading mb-3 text-center group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground mb-5 text-center leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    {article.href && (
                      <span className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );

            return article.href ? (
              <Link key={i} href={article.href}>{inner}</Link>
            ) : (
              <div key={i}>{inner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
