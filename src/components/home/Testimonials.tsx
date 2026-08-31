import { motion } from "framer-motion";
import { FlaskConical, Scale, Leaf, Timer } from "lucide-react";

const principles = [
  {
    id: 1,
    icon: FlaskConical,
    title: "Tested in Our Own Kitchen",
    content:
      "Every recipe is cooked, tweaked and cooked again before it goes up. If a swap makes it taste worse, we do not publish it.",
  },
  {
    id: 2,
    icon: Scale,
    title: "Honest Nutrition Numbers",
    content:
      "Calories and macros are estimates based on standard ingredients, and we say so. No inflated protein claims, no rounding in our favour.",
  },
  {
    id: 3,
    icon: Leaf,
    title: "Flavour First, Always",
    content:
      "We lighten dishes with Greek yogurt, cashews and proper spice technique — never by stripping out taste and calling it healthy.",
  },
  {
    id: 4,
    icon: Timer,
    title: "Built for Real Weeknights",
    content:
      "Most recipes are on the table in under 45 minutes, using ingredients you can find in a regular grocery store.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            How We Cook
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A few things we hold ourselves to, so you know what to expect from every recipe here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-6 rounded-2xl flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                  {p.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
