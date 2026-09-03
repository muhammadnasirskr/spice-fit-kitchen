import { Link } from "wouter";
import { Seo } from "@/components/Seo";

export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Seo
        title="Disclaimer | SpiceFitKitchen"
        description="Important information about the nutritional, medical, and affiliate disclosures for content published on SpiceFitKitchen."
        path="/disclaimer"
      />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="font-heading">Disclaimer</h1>
        <p>Last updated: August 2026</p>

        <h2>Medical Disclaimer</h2>
        <p>
          The information provided on SpiceFitKitchen is for general informational
          and educational purposes only and is not intended as medical or
          nutritional advice. We are not doctors, dietitians, or licensed
          healthcare providers. Always consult a qualified healthcare professional
          before making changes to your diet, especially if you have a medical
          condition, are pregnant, or take medication.
        </p>

        <h2>Nutritional Information</h2>
        <p>
          While we strive to provide accurate nutritional information, all figures
          are estimates. Variables such as product types, brands, portion sizes,
          and natural fluctuations in fresh produce can change the actual
          nutritional values of any recipe. For precise figures, please calculate
          using the specific ingredients you use.
        </p>

        <h2>Results Disclaimer</h2>
        <p>
          Individual results from following any recipe, meal plan, or health tip on
          this website will vary. We make no guarantees regarding weight loss,
          health outcomes, or any other results.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          Some links on this website may be affiliate links. This means that if you
          click on a link and make a purchase, we may earn a small commission at no
          extra cost to you. We only recommend products we genuinely believe add
          value to our readers.
        </p>

        <h2>Advertising</h2>
        <p>
          This website displays advertising from third-party networks such as
          Google AdSense. Please see our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for details on how
          advertising cookies are used.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this disclaimer, contact us at{" "}
          <a href="mailto:admin@spicefitkitchen.com">admin@spicefitkitchen.com</a>.
        </p>
      </div>
    </div>
  );
}
