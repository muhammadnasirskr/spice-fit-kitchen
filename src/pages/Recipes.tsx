import { useState } from "react";
import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

export default function Recipes() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredRecipes = activeCategory === "all" 
    ? recipes 
    : recipes.filter(r => r.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <Seo
        title="All Recipes | SpiceFitKitchen"
        description="Browse our full collection of healthy South Asian, American, and fusion recipes — filter by category, cook time, and dietary needs."
        path="/recipes"
      />
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Recipe Collection</h1>
        <p className="text-lg text-muted-foreground">Browse our entire collection of healthy, flavorful recipes designed to nourish your body without sacrificing taste.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        <Button 
          variant={activeCategory === "all" ? "default" : "outline"}
          onClick={() => setActiveCategory("all")}
          className="rounded-full"
        >
          All Recipes
        </Button>
        {categories.map(cat => (
          <Button
            key={cat.slug}
            variant={activeCategory === cat.slug ? "default" : "outline"}
            onClick={() => setActiveCategory(cat.slug)}
            className="rounded-full"
          >
            {cat.name}
          </Button>
        ))}
      </div>

      <RecipeGrid recipes={filteredRecipes} />
    </div>
  );
}
