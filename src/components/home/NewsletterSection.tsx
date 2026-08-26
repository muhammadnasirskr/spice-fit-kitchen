import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export function NewsletterSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 dark:bg-primary/5" />
      
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-card border border-border shadow-xl rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
                Get Your Free <span className="text-primary">Healthy Eating eBook</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join our community and receive weekly recipes, meal prep tips, and our comprehensive guide to balanced South Asian cooking.
              </p>
              
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    placeholder="Enter your email address" 
                    type="email" 
                    required 
                    className="h-12 text-base flex-1"
                  />
                  <Button size="lg" className="h-12 px-8">Subscribe</Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" required />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground font-normal cursor-pointer">
                    I agree to receive emails and accept the Privacy Policy.
                  </Label>
                </div>
              </form>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/3 max-w-[250px] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {/* Mock Book Cover */}
              <div className="aspect-[3/4] bg-gradient-to-br from-primary to-secondary rounded-lg shadow-2xl p-6 text-white flex flex-col justify-between transform rotate-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">SpiceFitKitchen</div>
                  <h3 className="font-heading font-bold text-2xl leading-tight">The Balanced Kitchen</h3>
                </div>
                <div className="text-sm font-medium opacity-90">50 Essential Recipes for Everyday Health</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
