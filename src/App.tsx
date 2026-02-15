import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { useCartSync } from "@/hooks/useCartSync";

// Eager load main pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load pages
const Batch001Page = lazy(() => import("./pages/Batch001Page"));
const TheArchitect = lazy(() => import("./pages/products/TheArchitect"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AthletesPage = lazy(() => import("./pages/AthletesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const TrackOrderPage = lazy(() => import("./pages/TrackOrderPage"));
const WarrantyPage = lazy(() => import("./pages/WarrantyPage"));
const ComparePage = lazy(() => import("./pages/ComparePage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-tempo-bone flex items-center justify-center">
    <div className="text-center">
      <div className="text-3xl font-black tracking-[0.2em] uppercase animate-pulse text-tempo-carbon">
        TEMPO
      </div>
    </div>
  </div>
);

const AppContent = () => {
  useCartSync();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/batch-001" element={<Batch001Page />} />
          <Route path="/products/the-architect" element={<TheArchitect />} />
          <Route path="/collections/:slug" element={<CollectionPage />} />
          <Route path="/pages/about" element={<AboutPage />} />
          <Route path="/pages/athletes" element={<AthletesPage />} />
          <Route path="/pages/contact" element={<ContactPage />} />
          <Route path="/pages/faq" element={<FAQPage />} />
          <Route path="/pages/track-order" element={<TrackOrderPage />} />
          <Route path="/pages/warranty" element={<WarrantyPage />} />
          <Route path="/tools/compare" element={<ComparePage />} />
          <Route path="/pages/:slug" element={<LegalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
