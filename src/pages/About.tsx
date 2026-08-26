import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Helmet>
        <title>About Us | SpiceFitKitchen</title>
      </Helmet>
      
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
        <p>SpiceFitKitchen started when our founder, a registered dietitian and passionate home cook, realized her clients were abandoning their cultural foods because they thought they were "unhealthy." We set out to prove that with a few smart swaps, proper portioning, and an understanding of macros, any dish can fit into a balanced lifestyle.</p>
        
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
        <p>We are a small team of recipe developers, nutritionists, and food photographers dedicated to bringing you the best content possible.</p>
      </div>
    </div>
  );
}
