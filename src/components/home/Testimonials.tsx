import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Working Mom",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    content: "Finally, healthy recipes that actually taste good! The lightened-up butter chicken is now a weekly staple in our house. Even my picky toddlers love it.",
  },
  {
    id: 2,
    name: "Rahul Desai",
    role: "Fitness Enthusiast",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    content: "As someone trying to hit protein macros while craving the flavors of home, SpiceFitKitchen is a lifesaver. The high-protein dal recipes are incredible.",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Home Cook",
    avatar: "https://i.pravatar.cc/150?u=emily",
    content: "The meal plans save me so much time. I love how the recipes are genuinely easy to follow, not just 'easy' for professional chefs. Highly recommend!",
  },
  {
    id: 4,
    name: "Marcus Johnson",
    role: "Health Conscious",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    content: "I've tried many healthy eating blogs, but the depth of flavor in these fusion recipes is unmatched. The quinoa khichdi changed my perspective on healthy food.",
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Loved by Home Cooks</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">See what our community has to say about their SpiceFitKitchen experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-6 rounded-2xl flex flex-col"
            >
              <div className="flex gap-1 mb-4 text-secondary">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-muted-foreground italic mb-6 flex-1">"{t.content}"</p>
              
              <div className="flex items-center gap-3 mt-auto">
                <Avatar>
                  <AvatarImage src={t.avatar} />
                  <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
