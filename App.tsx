import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";

import { Layout } from "@/components/layout/Layout";

import Home from "@/pages/Home";
import Recipes from "@/pages/Recipes";
import RecipeDetail from "@/pages/RecipeDetail";
import Category from "@/pages/Category";
import MealPlans from "@/pages/MealPlans";
import HealthyLiving from "@/pages/HealthyLiving";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Search from "@/pages/Search";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import Disclaimer from "@/pages/Disclaimer";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/recipes/:id" component={RecipeDetail} />
      <Route path="/category/:slug" component={Category} />
      <Route path="/meal-plans" component={MealPlans} />
      <Route path="/healthy-living" component={HealthyLiving} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/search" component={Search} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Layout>
              <Router />
            </Layout>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
