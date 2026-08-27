import { useParams, Link } from "wouter";
import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";
import { blogs } from "@/data/blogs";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";
import { Seo } from "@/components/Seo";
import NotFound from "./not-found";
import { Clock, BookOpen, ArrowRight } from "lucide-react";

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);

  if (!category) return <NotFound />;

  const filteredRecipes = recipes.filter(r => r.category === slug);
  const featuredBlogs = blogs.filter(b => b.recipeCategory === slug);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${category.name} Recipes | SpiceFitKitchen`}
        description={category.description}
        path={`/category/${category.slug}`}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{category.name} Recipes</h1>
          <p className="text-xl text-muted-foreground">{category.description}</p>
        </div>

        <RecipeGrid recipes={filteredRecipes} />

        {/* Featured Blogs for this category */}
        {featuredBlogs.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold font-heading">
                Featured Guides & Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredBlogs.map((blog) => (
                <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                  <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&auto=format&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          {blog.readTime}
                        </div>
                        <span className="flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
