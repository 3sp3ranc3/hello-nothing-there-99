import { useRef, useState } from "react";
import { motion } from "framer-motion";

import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import TechSpecs from "@/components/products/TechSpecs";
import ProductFAQ from "@/components/products/ProductFAQ";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StickyReserveButton from "@/components/ui/StickyReserveButton";
import FounderStoryModal from "@/components/ui/FounderStoryModal";

const images = [
  { label: "Image 1: Front" },
  { label: "Image 2: Side" },
  { label: "Image 3: Handle Detail" },
  { label: "Image 4: Bottom Cap" },
  { label: "Image 5: Tech Layer" },
  { label: "Image 6: Tech Core" },
];

const features = [
  "Thermoformed construction with TRUFOAM Core",
  "T700 Carbon Fiber face with sandblasted finish",
  "Frameless wide body design",
  "130mm elongated grip handle",
];

const specs = [
  { 
    label: "CORE", 
    value: "TRUFOAM", 
    description: "Black TRUFOAM Core Technology for optimal energy transfer and vibration dampening" 
  },
  { 
    label: "WEIGHT", 
    value: "8.2 oz", 
    description: "Balanced weight optimized for both power and control" 
  },
  { 
    label: "GRIP", 
    value: "130mm", 
    description: "Elongated handle for two-handed backhand versatility" 
  },
  { 
    label: "BALANCE", 
    value: "Central", 
    description: "Neutral balance point for consistent swing dynamics" 
  },
  { 
    label: "SURFACE", 
    value: "T700 Carbon Fiber", 
    description: "Full UV print with sandblasted texture for spin generation" 
  },
  { 
    label: "WARRANTY", 
    value: "30-Day Play Test", 
    description: "Full performance guarantee or your money back" 
  },
];

const faqItems = [
  {
    question: "What is the 30-day trial?",
    answer: "We believe in The Architect. If it doesn't improve your game within 30 days, return it for a full refund. No questions asked. We'll even cover return shipping.",
  },
  {
    question: "Why preorder only?",
    answer: "We manufacture in controlled batches to maintain quality standards. By taking preorders, we eliminate retail markup, warehousing costs, and uncertainty—passing savings directly to you.",
  },
  {
    question: "Is this paddle tournament approved?",
    answer: "Yes. The Architect is fully approved by the USA Pickleball Association (USAPA) for tournament play. Its specifications meet all regulatory requirements.",
  },
  {
    question: "What is the shipping time?",
    answer: "Batch 002 paddles begin shipping March 15th, 2026. Orders are fulfilled in the sequence they were placed. You'll receive tracking information via email once your paddle ships.",
  },
  {
    question: "What grip size should I choose?",
    answer: "The Architect features a 130mm elongated grip, suitable for most hand sizes and enabling two-handed backhands. If you prefer a smaller grip, overgrips can be removed. For larger hands, consider adding an overgrip for additional circumference.",
  },
];

const TheArchitect = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const techSectionRef = useRef<HTMLElement>(null);

  const scrollToSpecs = () => {
    techSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />

      {/* PART 1: THE SPLIT SECTION */}
      <section className="pt-20 lg:pt-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Scrollable Gallery (60%) */}
            <div className="w-full lg:w-[60%] py-8">
              <ProductGallery images={images} />
            </div>

            {/* Right Column - Sticky Buy Box (40%) */}
            <div className="w-full lg:w-[40%] lg:sticky lg:top-0 lg:h-screen flex items-center">
              <ProductInfo
                title="THE ARCHITECT"
                description="The tactician's instrument. Engineered for absolute placement, vibration control, and neutralizing opponent power."
                price="$135.00"
                retailPrice="$195.00"
                features={features}
                onViewSpecs={scrollToSpecs}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: SPECS GRID SECTION */}
      <section ref={techSectionRef} className="py-16 lg:py-24 border-t border-tempo-carbon/10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="tempo-headline text-3xl md:text-4xl lg:text-5xl text-center mb-12 lg:mb-16"
          >
            Technical Specifications
          </motion.h2>
          <TechSpecs specs={specs} variant="grid-only" />
        </div>
      </section>

      {/* PART 3: TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* PART 4: FAQ SECTION */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <ProductFAQ items={faqItems} />
      </div>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 border-t border-tempo-carbon/10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-tempo-carbon text-tempo-bone py-4 px-12 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-tempo-navy transition-colors duration-300"
          >
            Reserve Now — $135.00
          </motion.button>
        </div>
      </section>

      <MegaFooter onFounderStoryClick={() => setIsFounderModalOpen(true)} />
      <StickyReserveButton />
      <FounderStoryModal 
        isOpen={isFounderModalOpen} 
        onClose={() => setIsFounderModalOpen(false)} 
      />
    </main>
  );
};

export default TheArchitect;
