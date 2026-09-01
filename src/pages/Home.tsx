import { Hero } from "@/components/home/Hero";
import { FeaturedRecipes } from "@/components/home/FeaturedRecipes";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { TrendingRecipes } from "@/components/home/TrendingRecipes";
import { NutritionGuides } from "@/components/home/NutritionGuides";
import { CookingTips } from "@/components/home/CookingTips";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Testimonials } from "@/components/home/Testimonials";
import { recipes } from "@/data/recipes";
import { blogs } from "@/data/blogs";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Seo } from "@/components/Seo";

export default function Home() {
  const latestRecipes = recipes.slice(3, 9);

  return (
    <>
      <Seo
        title="SpiceFitKitchen | Healthy South Asian, American & Fusion Recipes"
        description="SpiceFitKitchen brings you healthy South Asian, American, and fusion recipes with easy steps, nutrition info, and meal plans — flavorful cooking for a balanced, modern lifestyle."
        path="/"
      />
      
      <Hero />
      <FeaturedRecipes />
      <CategoryGrid />
      
      {/* Latest Recipes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-2">Fresh from the Kitchen</h2>
              <p className="text-muted-foreground">The newest healthy recipes added this week.</p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/recipes">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestRecipes.map((recipe, i) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <RecipeCard recipe={recipe} />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild className="w-full">
              <Link href="/recipes">View All Recipes</Link>
            </Button>
          </div>
        </div>
      </section>

      <TrendingRecipes />

      {/* Meal Plan Teaser */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-xl flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Done-for-you</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Weekly Meal Plans</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Take the guesswork out of healthy eating. Our curated meal plans balance macros, minimize food waste, and maximize flavor. Includes printable grocery lists.
              </p>
              <ul className="space-y-3 mb-10 text-foreground">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> High-Protein Indian Vegetarian</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> 30-Minute Dinner Lifesavers</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Low-Carb Fusion Feasts</li>
              </ul>
              <Button size="lg" asChild className="self-start">
                <Link href="/meal-plans">Browse Meal Plans</Link>
              </Button>
            </div>
            <div className="w-full md:w-1/2 min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1498837167922-41c54bfa353b?w=800&auto=format&fit=crop" 
                alt="Meal prep containers" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <NutritionGuides />
      <CookingTips />
      <Testimonials />
      <NewsletterSection />

      {/* Latest from the blog */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-2">Latest from the Blog</h2>
              <p className="text-muted-foreground">In-depth guides, tips and the stories behind our recipes.</p>
            </div>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link href="/blog">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                <article className="group cursor-pointer bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                      {blog.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{blog.excerpt}</p>
                    <span className="text-xs text-muted-foreground mt-4">{blog.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Button variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
