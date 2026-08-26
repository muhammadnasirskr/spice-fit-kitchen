import { Link } from "wouter";
import { Search, Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { categories } from "@/data/categories";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/0"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="SpiceFitKitchen"
            className="h-14 w-auto object-contain dark:mix-blend-screen mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/recipes" className="text-sm font-medium hover:text-primary transition-colors">
            All Recipes
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              Categories
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-card border border-border rounded-lg shadow-lg p-2 w-48 flex flex-col gap-1">
                {categories.slice(0, 6).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="px-4 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/meal-plans" className="text-sm font-medium hover:text-primary transition-colors">
            Meal Plans
          </Link>
          <Link href="/healthy-living" className="text-sm font-medium hover:text-primary transition-colors">
            Healthy Living
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <Search className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Subscribe
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border py-4 px-4 flex flex-col gap-4 shadow-lg absolute w-full left-0 top-20">
          <Link href="/recipes" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
            All Recipes
          </Link>
          <div className="flex flex-col gap-2 pl-4 border-l-2 border-primary/20">
            {categories.slice(0, 4).map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <Link href="/meal-plans" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
            Meal Plans
          </Link>
          <Link href="/healthy-living" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
            Healthy Living
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
            Blog
          </Link>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button asChild variant="outline">
              <Link href="/search" onClick={() => setMobileMenuOpen(false)}>
                <Search className="w-4 h-4 mr-2" /> Search
              </Link>
            </Button>
            <Button>Subscribe</Button>
          </div>
        </div>
      )}
    </header>
  );
}
