import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Helmet>
        <title>Terms of Service | SpiceFitKitchen</title>
      </Helmet>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="font-heading">Terms of Service</h1>
        <p>Last updated: November 2023</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using SpiceFitKitchen, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2>2. Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, images, and recipes, is the property of SpiceFitKitchen and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission.</p>
        
        <h2>3. User Conduct</h2>
        <p>You agree to use the site for lawful purposes only and not to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the site.</p>
        
        <h2>4. Modifications</h2>
        <p>We reserve the right to modify these terms at any time. Your continued use of the site constitutes your acceptance of the modified terms.</p>
      </div>
    </div>
  );
}
