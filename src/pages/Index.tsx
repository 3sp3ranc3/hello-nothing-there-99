import { useState } from "react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";
import Batch002HeroSection from "@/components/sections/Batch002HeroSection";
import AnimatedStatsSection from "@/components/sections/AnimatedStatsSection";
import ProductSection from "@/components/sections/ProductSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Batch002FAQSection from "@/components/sections/Batch002FAQSection";
import StickyReserveButton from "@/components/ui/StickyReserveButton";
import FounderStoryModal from "@/components/ui/FounderStoryModal";

const Index = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);

  return (
    <main className="bg-tempo-bone">
      <BatchNavbar />
      <Batch002HeroSection />
      <AnimatedStatsSection />
      <ProductSection />
      <TestimonialsSection />
      <Batch002FAQSection />
      <MegaFooter onFounderStoryClick={() => setIsFounderModalOpen(true)} />
      <StickyReserveButton />
      <FounderStoryModal 
        isOpen={isFounderModalOpen} 
        onClose={() => setIsFounderModalOpen(false)} 
      />
    </main>
  );
};

export default Index;
