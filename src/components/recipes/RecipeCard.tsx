import { Link } from "wouter";
import { Recipe } from "@/data/recipes";
import { Clock, Flame, Star, StarHalf } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
      <div className="flex items-center text-secondary">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
        {hasHalfStar && <StarHalf className="w-4 h-4 fill-current" />}
        <span className="text-xs text-muted-foreground ml-1">
          ({recipe.ratingCount})
        </span>
      </div>
    );
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
    }
  };

  const categoryLabel = recipe.category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div
        className="group cursor-pointer bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
        data-testid={`card-recipe-${recipe.id}`}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={recipe.image}
            alt={recipe.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
            }}
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge className="bg-primary hover:bg-primary text-white font-semibold backdrop-blur-md">
              {categoryLabel}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-2">
            {renderStars(recipe.rating)}
          </div>

          <h3 className="font-heading font-bold text-xl mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {recipe.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
            {recipe.description}
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4 mt-auto">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.totalTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame className="w-4 h-4" />
              <span>{recipe.calories} kcal</span>
            </div>
            <Badge
              variant="outline"
              className={`border-none ${getDifficultyColor(recipe.difficulty)}`}
            >
              {recipe.difficulty}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}
