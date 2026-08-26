import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

export default function MealPlans() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Helmet>
        <title>Meal Plans | SpiceFitKitchen</title>
      </Helmet>
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Done-For-You Meal Plans</h1>
        <p className="text-xl text-muted-foreground">Take the stress out of eating healthy. Our dietitian-approved meal plans are designed for flavor, balance, and busy schedules.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder cards for Meal Plans */}
        {[
          { title: "High-Protein Vegetarian", desc: "100g+ protein daily without meat.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop" },
          { title: "30-Minute Dinners", desc: "Fast, family-friendly meals for weeknights.", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop" },
          { title: "Low-Carb South Asian", desc: "Classic flavors, keto-friendly macros.", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop" },
        ].map((plan, i) => (
          <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src={plan.img} alt={plan.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col items-start gap-4">
              <h3 className="text-2xl font-bold font-heading">{plan.title}</h3>
              <p className="text-muted-foreground flex-1">{plan.desc}</p>
              <Button>View Plan</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
