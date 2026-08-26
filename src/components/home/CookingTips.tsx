import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";

const tips = [
  {
    title: "Temper Spices in Oil",
    description: "Known as 'Tadka', blooming spices in hot oil extracts their essential oils, resulting in deeper, more complex flavors.",
  },
  {
    title: "Greek Yogurt > Heavy Cream",
    description: "Swap heavy cream for whisked Greek yogurt in your curries to maintain creaminess while dropping fat and boosting protein.",
  },
  {
    title: "Roast Your Veggies",
    description: "Instead of boiling, roast vegetables with a touch of oil and cumin to bring out their natural sweetness before adding them to sauces.",
  }
];

export function CookingTips() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold mb-6">
              <ChefHat className="w-5 h-5" /> Kitchen Secrets
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground">Cook Smarter, Not Harder</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Elevate your home cooking with these simple techniques that maximize flavor without adding unnecessary calories.
            </p>
          </motion.div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card border border-border p-6 rounded-2xl shadow-sm ${i === 2 ? 'sm:col-span-2' : ''}`}
              >
                <h3 className="text-xl font-bold font-heading mb-3 text-primary">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
