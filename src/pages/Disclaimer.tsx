import { Helmet } from "react-helmet-async";

export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Helmet>
        <title>Disclaimer | SpiceFitKitchen</title>
      </Helmet>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="font-heading">Disclaimer</h1>
        <p>Last updated: November 2023</p>
        
        <h2>Medical Disclaimer</h2>
        <p>The nutritional information provided on SpiceFitKitchen is for general informational purposes only. We are not doctors. The content on this website should not be taken as medical advice.</p>
        
        <h2>Nutritional Information</h2>
        <p>While we strive to provide accurate nutritional information, the figures given are estimates. Variables such as product types, brands, and natural fluctuations in fresh produce can change the nutritional information in any given recipe.</p>
        
        <h2>Affiliate Links</h2>
        <p>Some of the links on this website may be affiliate links. This means that if you click on the link and purchase an item, we may receive an affiliate commission at no extra cost to you.</p>
      </div>
    </div>
  );
}
