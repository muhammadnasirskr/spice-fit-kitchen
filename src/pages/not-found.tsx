import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background px-4">
      <Seo
        title="404 - Page Not Found | SpiceFitKitchen"
        description="The page you are looking for could not be found."
        noindex
      />
      
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold font-heading text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold font-heading mb-4">Oops! The kitchen is closed here.</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          We couldn't find the recipe or page you were looking for. It might have been moved or removed.
        </p>
        <Button size="lg" asChild>
          <Link href="/">Back to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
