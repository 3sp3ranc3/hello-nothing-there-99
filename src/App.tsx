import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/layout/ScrollToTop";

// Eager load main pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load product pages
const TheAir = lazy(() => import("./pages/products/TheAir"));
const TheArchitect = lazy(() => import("./pages/products/TheArchitect"));
const TheAce = lazy(() => import("./pages/products/TheAce"));

// Lazy load collection pages
const CollectionPage = lazy(() => import("./pages/CollectionPage"));

// Lazy load support pages
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AthletesPage = lazy(() => import("./pages/AthletesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const TrackOrderPage = lazy(() => import("./pages/TrackOrderPage"));
const WarrantyPage = lazy(() => import("./pages/WarrantyPage"));
const ComparePage = lazy(() => import("./pages/ComparePage"));

// Lazy load legal pages
const LegalPage = lazy(() => import("./pages/LegalPage"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="text-3xl font-black tracking-[0.2em] uppercase animate-pulse">
        TEMPO
      </div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />
            
            {/* Product Pages */}
            <Route path="/products/the-air" element={<TheAir />} />
            <Route path="/products/the-architect" element={<TheArchitect />} />
            <Route path="/products/the-ace" element={<TheAce />} />
            
            {/* Collection Pages */}
            <Route path="/collections/:slug" element={<CollectionPage />} />
            
            {/* Support Pages */}
            <Route path="/pages/about" element={<AboutPage />} />
            <Route path="/pages/athletes" element={<AthletesPage />} />
            <Route path="/pages/contact" element={<ContactPage />} />
            <Route path="/pages/faq" element={<FAQPage />} />
            <Route path="/pages/track-order" element={<TrackOrderPage />} />
            <Route path="/pages/warranty" element={<WarrantyPage />} />
            
            {/* Tools */}
            <Route path="/tools/compare" element={<ComparePage />} />
            
            {/* Legal Pages */}
            <Route path="/pages/:slug" element={<LegalPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
