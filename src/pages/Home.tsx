import { Hero } from "@/components/home/Hero";
import { FeaturedRecipes } from "@/components/home/FeaturedRecipes";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { TrendingRecipes } from "@/components/home/TrendingRecipes";
import { NutritionGuides } from "@/components/home/NutritionGuides";
import { CookingTips } from "@/components/home/CookingTips";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Testimonials } from "@/components/home/Testimonials";
import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const latestRecipes = recipes.slice(3, 9);

  return (
    <>
      <Helmet>
        <title>SpiceFitKitchen | Healthy Flavors. Balanced Living.</title>
        <meta name="description" content="Discover accessible, flavorful South Asian and fusion cooking without guilt." />
      </Helmet>
      
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

      {/* Instagram Placeholder */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-8 hover:text-primary transition-colors cursor-pointer">
            <Instagram className="w-6 h-6" />
            <h2 className="text-2xl font-bold font-heading">@SpiceFitKitchen</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-xl overflow-hidden group">
                <img 
                  src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop&q=60&sig=${i}`} 
                  alt="Instagram feed" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
