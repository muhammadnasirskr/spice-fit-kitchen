import { Seo } from "@/components/Seo";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Seo
        title="About Us | SpiceFitKitchen"
        description="Learn about SpiceFitKitchen — our mission to make healthy South Asian, American, and fusion cooking accessible, nutritious, and genuinely delicious."
        path="/about"
      />
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">About SpiceFitKitchen</h1>
        <p className="text-xl text-muted-foreground">Reimagining South Asian and Fusion cuisine for the modern, health-conscious family.</p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745a805f?w=1200&auto=format&fit=crop" 
          alt="Spices and cooking ingredients" 
          className="w-full rounded-2xl mb-12 shadow-md"
        />
        
        <h2>Our Mission</h2>
        <p>At SpiceFitKitchen, we believe you shouldn't have to choose between your health goals and the foods you grew up loving. Our mission is to make vibrant, spicy, comforting South Asian and fusion meals accessible, nutritious, and absolutely delicious.</p>
        
        <h2>The Story</h2>
        <p>SpiceFitKitchen started with a simple frustration: so many of us grow up loving the foods of our culture, then feel we have to give them up to eat "healthy." Our founder, a lifelong home cook, refused to accept that trade-off. With a few smart swaps, better portions, and a basic understanding of nutrition, we found that almost any dish can fit into a balanced lifestyle — without losing the flavors that make it worth eating.</p>
        
        <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
          <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold font-heading text-primary-foreground mb-4">Quality Ingredients</h3>
            <p className="text-foreground">We prioritize whole foods, lean proteins, healthy fats, and vibrant spices over processed alternatives.</p>
          </div>
          <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
            <h3 className="text-2xl font-bold font-heading text-secondary-foreground mb-4">No Diet Culture</h3>
            <p className="text-foreground">We focus on nourishment and enjoyment, not restriction. Food is meant to be celebrated.</p>
          </div>
        </div>

        <h2>Meet the Team</h2>
        <p>We're a small team of home cooks, recipe developers, and food lovers who test, tweak, and photograph the recipes we publish. We're not doctors or dietitians — for advice tailored to your health, we always recommend speaking with a qualified professional — but we are genuinely obsessed with making healthy food that actually tastes good.</p>
      </div>
    </div>
  );
}
