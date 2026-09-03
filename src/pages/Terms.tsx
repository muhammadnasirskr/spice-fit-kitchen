import { Link } from "wouter";
import { Seo } from "@/components/Seo";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Seo
        title="Terms of Service | SpiceFitKitchen"
        description="The terms and conditions that govern your use of the SpiceFitKitchen website and its content."
        path="/terms"
      />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="font-heading">Terms of Service</h1>
        <p>Last updated: August 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using SpiceFitKitchen, you accept and agree to be bound
          by these terms and conditions. If you do not agree, please do not use
          the website.
        </p>

        <h2>2. Use of Content</h2>
        <p>
          The recipes, articles, and information on this website are provided for
          general informational and educational purposes only. You are welcome to
          cook our recipes for personal use.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, images,
          and recipes, is the property of SpiceFitKitchen and is protected by
          intellectual property laws. You may not reproduce, republish,
          distribute, or create derivative works from our content without our
          prior written permission.
        </p>

        <h2>4. User Conduct</h2>
        <p>
          You agree to use the site for lawful purposes only and not to engage in
          any conduct that could damage, disable, or impair the website or
          interfere with anyone else's use of it.
        </p>

        <h2>5. Disclaimer</h2>
        <p>
          The nutritional and health information on this site is provided for
          general purposes only and is not a substitute for professional medical
          advice. Please see our{" "}
          <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link> for more details.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          SpiceFitKitchen is provided on an "as is" basis. We are not liable for
          any losses or damages arising from your use of the website or reliance
          on its content.
        </p>

        <h2>7. Changes to These Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Your continued
          use of the site after changes are posted constitutes your acceptance of
          the updated terms.
        </p>

        <h2>8. Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:admin@spicefitkitchen.com">admin@spicefitkitchen.com</a>.
        </p>
      </div>
    </div>
  );
}
