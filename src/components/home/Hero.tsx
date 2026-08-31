import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0d1f0d]">

      {/* Full-bleed background texture */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Left gradient fade */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0d1f0d]/95 via-[#0d1f0d]/80 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-20">

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-white flex flex-col items-start"
          >
            {/* Tagline badge */}
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/25 border border-primary/40 text-primary text-sm font-semibold mb-7 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Healthy Flavors. Balanced Living.
            </span>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold font-heading leading-[1.08] mb-6">
              Eat Better.
              <br />
              <span className="text-primary">Live Healthier.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-300 mb-9 max-w-lg leading-relaxed">
              Discover healthy South Asian, American, and Fusion recipes tested
              in our own kitchen — designed for modern families who love great
              flavor without compromise.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="h-13 px-9 text-base font-semibold rounded-full" asChild>
                <Link href="/recipes">Explore Recipes</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-9 text-base font-semibold rounded-full bg-white/10 hover:bg-white/20 border-white/30 text-white"
                asChild
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>

            {/* Newsletter */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-full max-w-md">
              <p className="text-sm font-medium mb-3 text-gray-200">
                Get weekly healthy recipes — free, straight to your inbox
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/90 text-black border-none h-11 placeholder:text-gray-500 flex-1 rounded-xl"
                />
                <Button className="h-11 px-5 rounded-xl font-semibold">Join</Button>
              </form>
            </div>

            {/* Value line */}
            <div className="flex items-center gap-2 mt-8">
              <Leaf className="w-4 h-4 text-primary flex-shrink-0" />
              <p className="text-xs text-gray-400">
                Every recipe tested in our own kitchen — with honest nutrition numbers.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Chef Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative hidden lg:flex items-end justify-center"
          >
            {/* Glowing ring behind chef */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full bg-primary/20 blur-3xl" />
            </div>

            {/* Chef image container */}
            <div className="relative z-10">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border border-primary/30 z-0" />
              <div className="absolute -inset-8 rounded-3xl border border-white/10 z-0" />

              {/* Chef photo */}
              <div className="relative w-[400px] xl:w-[460px] rounded-3xl overflow-hidden shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=920&auto=format&fit=crop&q=85"
                  alt="Professional chef preparing a healthy dish"
                  className="w-full h-[560px] xl:h-[620px] object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1556910103-1c02745a805f?w=920&auto=format&fit=crop";
                  }}
                />
                {/* Bottom gradient on chef photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f0d]/60 via-transparent to-transparent" />
              </div>

              {/* Floating stat card — top left */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -left-14 top-12 bg-white dark:bg-card border border-border rounded-2xl shadow-xl px-4 py-3 z-20"
              >
                <p className="text-2xl font-bold text-primary font-heading">20+</p>
                <p className="text-xs text-muted-foreground font-medium">Healthy Recipes</p>
              </motion.div>

              {/* Floating stat card — bottom right */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="absolute -right-12 bottom-16 bg-white dark:bg-card border border-border rounded-2xl shadow-xl px-4 py-3 z-20"
              >
                <p className="text-2xl font-bold text-[#F97316] font-heading">3</p>
                <p className="text-xs text-muted-foreground font-medium">Cuisines — South Asian, American & Fusion</p>
              </motion.div>

              {/* Floating recipe tag — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-10 bottom-10 bg-primary text-white rounded-2xl shadow-xl px-4 py-3 z-20 max-w-[160px]"
              >
                <p className="text-xs font-semibold uppercase tracking-wide mb-1 opacity-80">Featured Today</p>
                <p className="text-sm font-bold leading-tight">Butter Chicken Bowl</p>
                <p className="text-xs opacity-75 mt-0.5">320 kcal · 35g protein</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
