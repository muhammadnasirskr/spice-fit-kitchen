import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function MealPlans() {
  const plans = [
    {
      title: "High-Protein Vegetarian",
      desc: "Protein-rich meals without meat, built around whole foods.",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop",
      href: "/category/high-protein",
    },
    {
      title: "30-Minute Dinners",
      desc: "Fast, family-friendly meals for busy weeknights.",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop",
      href: "/category/dinner",
    },
    {
      title: "Low-Carb South Asian",
      desc: "Classic desi flavors with lighter, low-carb macros.",
      img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop",
      href: "/category/south-asian",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <Seo
        title="Meal Plans | SpiceFitKitchen"
        description="Curated healthy meal plans — high-protein, weight-loss, and balanced weekly menus built from our recipe collection."
        path="/meal-plans"
      />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Done-For-You Meal Plans</h1>
        <p className="text-xl text-muted-foreground">Take the stress out of eating healthy. Our balanced, chef-crafted meal plans are designed for flavor, balance, and busy schedules.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src={plan.img} alt={plan.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col items-start gap-4">
              <h3 className="text-2xl font-bold font-heading">{plan.title}</h3>
              <p className="text-muted-foreground flex-1">{plan.desc}</p>
              <Button asChild>
                <Link href={plan.href}>Explore Recipes</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-12">
        Full downloadable weekly meal plans with grocery lists are coming soon.
      </p>
    </div>
  );
}
