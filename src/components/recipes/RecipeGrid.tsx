import { Recipe } from "@/data/recipes";
import { RecipeCard } from "./RecipeCard";
import { motion } from "framer-motion";

export function RecipeGrid({ recipes, className = "" }: { recipes: Recipe[], className?: string }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  if (!recipes.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No recipes found matching your criteria.</p>
      </div>
    );
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}
    >
      {recipes.map((recipe) => (
        <motion.div key={recipe.id} variants={item}>
          <RecipeCard recipe={recipe} />
        </motion.div>
      ))}
    </motion.div>
  );
}
