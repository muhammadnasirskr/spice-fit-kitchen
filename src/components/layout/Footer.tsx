import { Link } from "wouter";
import { Leaf } from "lucide-react";
import { SiPinterest, SiFacebook, SiInstagram, SiYoutube, SiTiktok, SiX } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight text-foreground">
                SpiceFit<span className="text-primary">Kitchen</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Healthy Flavors. Balanced Living. Your trusted source for nutritious, accessible, and cinematic South Asian and fusion recipes.
            </p>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Explore</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/category/south-asian" className="text-muted-foreground hover:text-primary transition-colors text-sm">South Asian</Link></li>
              <li><Link href="/category/american" className="text-muted-foreground hover:text-primary transition-colors text-sm">American Favorites</Link></li>
              <li><Link href="/category/high-protein" className="text-muted-foreground hover:text-primary transition-colors text-sm">High Protein</Link></li>
              <li><Link href="/category/weight-loss" className="text-muted-foreground hover:text-primary transition-colors text-sm">Weight Loss</Link></li>
              <li><Link href="/recipes" className="text-muted-foreground hover:text-primary transition-colors text-sm">All Recipes</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Company</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-lg mb-4 font-heading">Stay Inspired</h3>
              <p className="text-sm text-muted-foreground mb-4">Get our latest recipes and a free healthy eating eBook.</p>
              <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Email address" type="email" required className="bg-background" />
                <Button className="w-full">Subscribe</Button>
              </form>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-[#E60023] transition-colors" aria-label="Pinterest"><SiPinterest className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-[#E1306C] transition-colors" aria-label="Instagram"><SiInstagram className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-[#1877F2] transition-colors" aria-label="Facebook"><SiFacebook className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-[#FF0000] transition-colors" aria-label="YouTube"><SiYoutube className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok"><SiTiktok className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X (Twitter)"><SiX className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} SpiceFitKitchen. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            Designed for healthy, flavorful living.
          </p>
        </div>
      </div>
    </footer>
  );
}
