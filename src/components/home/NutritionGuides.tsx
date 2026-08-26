import { motion } from "framer-motion";
import { BookOpen, HeartPulse, Zap } from "lucide-react";
import { Link } from "wouter";

const guides = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Macros 101",
    description: "Understand proteins, carbs, and fats to build balanced meals without obsessing over numbers.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    title: "Healthy South Asian Eating",
    description: "How to enjoy traditional cultural foods while hitting your health goals.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Protein for Busy Lives",
    description: "Quick, high-protein meal prep strategies for when you have no time to cook.",
  }
];

export function NutritionGuides() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Nutrition & Wellness Guides</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Science-backed advice to help you understand your food better.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                {guide.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">{guide.title}</h3>
              <p className="text-muted-foreground mb-6 flex-1">{guide.description}</p>
              <Link href="/healthy-living" className="text-primary font-semibold group-hover:underline">Read Guide &rarr;</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
