import { Link } from "wouter";
import { categories } from "@/data/categories";
import { motion } from "framer-motion";

const categoryImages: Record<string, string> = {
  "south-asian": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop",
  "american": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop",
  "fusion": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format&fit=crop",
  "weight-loss": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop",
  "high-protein": "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&auto=format&fit=crop",
  "diabetic-friendly": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&auto=format&fit=crop",
  "breakfast": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&auto=format&fit=crop",
  "lunch": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop",
  "dinner": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&auto=format&fit=crop",
  "snacks": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&auto=format&fit=crop",
};

export function CategoryGrid() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Explore by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Find exactly what you're craving, tailored to your dietary needs and taste preferences.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/category/${cat.slug}`}>
                <div className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer">
                  <img 
                    src={categoryImages[cat.slug] || categoryImages["fusion"]} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity group-hover:opacity-90" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-bold font-heading text-lg md:text-xl drop-shadow-md">{cat.name}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
