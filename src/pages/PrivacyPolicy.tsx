import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Helmet>
        <title>Privacy Policy | SpiceFitKitchen</title>
      </Helmet>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="font-heading">Privacy Policy</h1>
        <p>Last updated: November 2023</p>
        
        <h2>1. Introduction</h2>
        <p>Welcome to SpiceFitKitchen. We respect your privacy and are committed to protecting your personal data.</p>
        
        <h2>2. Data We Collect</h2>
        <p>We may collect personal information such as your name and email address when you subscribe to our newsletter or contact us. We also collect anonymous usage data to improve our website.</p>
        
        <h2>3. How We Use Your Data</h2>
        <p>We use your data to send you newsletters, respond to inquiries, and improve our services. We do not sell your personal data to third parties.</p>
        
        <h2>4. Cookies</h2>
        <p>We use cookies to enhance your browsing experience and analyze site traffic.</p>
        
        <h2>5. Contact Us</h2>
        <p>If you have questions about this privacy policy, please contact us at privacy@spicefitkitchen.com.</p>
      </div>
    </div>
  );
}
