import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { motion } from "framer-motion";

export function TrendingRecipes() {
  const trending = recipes.slice(9, 15);

  return (
    <section className="py-20 bg-muted/20 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Trending Now</h2>
        <p className="text-muted-foreground text-lg">What everyone is cooking this week.</p>
      </div>
      
      {/* Horizontal Scroll Area */}
      <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar pl-4 md:pl-16 xl:pl-32 gap-6 pr-4 md:pr-16 xl:pr-32">
        {trending.map((recipe, i) => (
          <motion.div 
            key={recipe.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="w-[300px] sm:w-[350px] shrink-0 snap-center"
          >
            <RecipeCard recipe={recipe} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
