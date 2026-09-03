/**
 * NOTE ON THE FILE NAME
 * ---------------------
 * This was a newsletter signup section: "Get Your Free Healthy Eating eBook",
 * an email form that stored nothing, and a mock cover for a 50-recipe eBook
 * that does not exist. All three were removed — promising a free eBook that
 * cannot be delivered is exactly the kind of thing an AdSense review flags.
 *
 * The file keeps its old name because the GitHub web upload flow used to ship
 * this project can add and overwrite files but cannot delete them.
 *
 * Bring a real signup form back only when there is an actual email service
 * (Mailchimp, Buttondown, ConvertKit …) behind it.
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { SiPinterest } from "react-icons/si";
import { PINTEREST_URL } from "@/lib/site";
import { recipes } from "@/data/recipes";
import { blogsNewestFirst } from "@/data/blogs";
import { categories } from "@/data/categories";

export function NewsletterSection() {
  // Counted from the real data so these numbers can never drift into a lie.
  const stats = [
    { value: `${recipes.length}`, label: "Tested recipes" },
    { value: `${blogsNewestFirst.length}`, label: "In-depth guides" },
    { value: `${categories.length}`, label: "Categories" },
  ];

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
                New Recipes, <span className="text-primary">Every Week</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Everything here is cooked and tested in our own kitchen, with honest
                nutrition numbers — including the ones that are less flattering. Follow
                along on Pinterest to catch each new recipe and guide as it goes up.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="h-12 px-8">
                  <a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer">
                    <SiPinterest className="w-5 h-5 mr-2" /> Follow on Pinterest
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-8">
                  <Link href="/recipes">Browse All Recipes</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/3 max-w-[250px] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, type: "spring" }}
              className="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl p-6 text-white"
            >
              <div className="text-xs font-bold uppercase tracking-wider mb-5 opacity-80">
                On the site right now
              </div>
              <div className="space-y-4">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold font-heading leading-none">{s.value}</span>
                    <span className="text-sm opacity-90">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
