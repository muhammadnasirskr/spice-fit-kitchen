import { useParams, Link } from "wouter";
import { recipes } from "@/data/recipes";
import { Seo } from "@/components/Seo";
import { Clock, Users, Flame, ChefHat, Check, Printer, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id || r.slug === id);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());

  if (!recipe) {
    return <div className="text-center py-20 text-2xl font-bold">Recipe not found</div>;
  }

  const toggleIngredient = (idx: number) => {
    const newChecked = new Set(checkedIngredients);
    if (newChecked.has(idx)) newChecked.delete(idx);
    else newChecked.add(idx);
    setCheckedIngredients(newChecked);
  };

  const related = recipes.filter(r => recipe.relatedRecipeIds.includes(r.id));

  return (
    <>
      <Seo
        title={`${recipe.title} | SpiceFitKitchen`}
        description={recipe.description}
        path={`/recipes/${recipe.id}`}
        image={recipe.image}
        type="article"
      />

      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <img 
          src={recipe.heroImage} 
          alt={recipe.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4 max-w-4xl">
            <span className="uppercase tracking-widest text-sm font-semibold mb-4 block text-primary-foreground bg-primary/80 backdrop-blur inline-block px-4 py-1 rounded-full">
              {recipe.category.replace("-", " ")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 drop-shadow-lg">{recipe.title}</h1>
            <p className="text-lg md:text-xl drop-shadow-md text-gray-200">{recipe.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Meta Stats */}
            <div className="flex flex-wrap gap-6 p-6 bg-muted/50 rounded-2xl mb-10 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-semibold">Total Time</div>
                  <div className="font-medium">{recipe.totalTime}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-semibold">Servings</div>
                  <div className="font-medium">{recipe.servings} people</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-semibold">Calories</div>
                  <div className="font-medium">{recipe.calories} kcal</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-semibold">Difficulty</div>
                  <div className="font-medium">{recipe.difficulty}</div>
                </div>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between border-b border-border pb-8 mb-10">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={recipe.author.avatar} />
                  <AvatarFallback>{recipe.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold">Recipe by {recipe.author.name}</div>
                  <div className="text-sm text-muted-foreground">Published on {recipe.publishedDate}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" title="Print Recipe">
                  <Printer className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" title="Share">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Ingredients */}
            <h2 className="text-3xl font-bold font-heading mb-6">Ingredients</h2>
            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl mb-12 shadow-sm">
              <ul className="space-y-4">
                {recipe.ingredients.map((ing, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center gap-4 cursor-pointer group"
                    onClick={() => toggleIngredient(idx)}
                  >
                    <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${checkedIngredients.has(idx) ? 'bg-primary border-primary text-primary-foreground' : 'border-input group-hover:border-primary'}`}>
                      {checkedIngredients.has(idx) && <Check className="w-4 h-4" />}
                    </div>
                    <span className={`text-lg transition-colors ${checkedIngredients.has(idx) ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                      <span className="font-semibold w-16 inline-block">{ing.amount}</span> 
                      <span className="text-muted-foreground mx-1">{ing.unit}</span> 
                      {ing.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <h2 className="text-3xl font-bold font-heading mb-6">Instructions</h2>
            <div className="space-y-8 mb-12">
              {recipe.instructions.map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg font-heading">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <h2 className="text-3xl font-bold font-heading mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full mb-12">
              {recipe.faq.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Nutrition Label */}
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold font-heading mb-4 pb-2 border-b-4 border-foreground">Nutrition Facts</h3>
              <div className="flex justify-between font-bold text-lg border-b border-border py-2">
                <span>Calories</span>
                <span>{recipe.nutritionFacts.calories}</span>
              </div>
              <div className="space-y-2 py-4">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-semibold">Total Fat</span>
                  <span>{recipe.nutritionFacts.totalFat}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2 pl-4 text-muted-foreground">
                  <span>Saturated Fat</span>
                  <span>{recipe.nutritionFacts.saturatedFat}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-semibold">Cholesterol</span>
                  <span>{recipe.nutritionFacts.cholesterol}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-semibold">Sodium</span>
                  <span>{recipe.nutritionFacts.sodium}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-semibold">Total Carbohydrates</span>
                  <span>{recipe.nutritionFacts.totalCarbohydrate}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2 pl-4 text-muted-foreground">
                  <span>Dietary Fiber</span>
                  <span>{recipe.nutritionFacts.dietaryFiber}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2 pl-4 text-muted-foreground">
                  <span>Sugars</span>
                  <span>{recipe.nutritionFacts.sugars}</span>
                </div>
                <div className="flex justify-between font-bold pt-2">
                  <span>Protein</span>
                  <span>{recipe.nutritionFacts.protein}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                *Percent Daily Values are based on a 2000 calorie diet.
              </p>
            </div>

            {/* Tips Box */}
            <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold font-heading mb-4 text-secondary-foreground flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-secondary" /> Expert Tips
              </h3>
              <ul className="space-y-3">
                {recipe.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-secondary">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Recipes */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="text-3xl font-bold font-heading mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map(r => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  );
}
