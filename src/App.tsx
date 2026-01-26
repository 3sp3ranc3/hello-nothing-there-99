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

// Lazy load batch page
const Batch001Page = lazy(() => import("./pages/Batch001Page"));

// Lazy load The Architect product page
const TheArchitect = lazy(() => import("./pages/products/TheArchitect"));

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
  <div className="min-h-screen bg-tempo-bone flex items-center justify-center">
    <div className="text-center">
      <div className="text-3xl font-black tracking-[0.2em] uppercase animate-pulse text-tempo-carbon">
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
            {/* Home - Batch 002 */}
            <Route path="/" element={<Index />} />
            
            {/* Batch 001 - Sold Out */}
            <Route path="/batch-001" element={<Batch001Page />} />
            
            {/* Product Pages */}
            <Route path="/products/the-architect" element={<TheArchitect />} />
            
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
