import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";
import FounderStoryModal from "@/components/ui/FounderStoryModal";
import HeroSection from "@/components/sections/HeroSection";
import BatchComparisonSection from "@/components/sections/BatchComparisonSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import architectBackhand from "@/assets/architect-backhand.jpg";

const HomePage = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);

  return (
    <main className="bg-tempo-bone">
      <BatchNavbar />
      <HeroSection />
      <BatchComparisonSection />
      <TestimonialsSection linkable />

      {/* Discovery CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={architectBackhand}
            alt="The Architect paddle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-tempo-carbon/60" />
        </div>

        <div className="relative max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link to="/products/the-architect" className="group block">
              <span className="inline-block text-xs uppercase tracking-widest font-medium text-tempo-bone/70 mb-4">
                The Tactician's Instrument
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide text-tempo-bone mb-6" style={{ lineHeight: 1.1 }}>
                Discover The Architect
              </h2>
              <p className="text-tempo-bone/60 max-w-md mx-auto mb-8">
                Engineered for absolute placement, vibration control, and neutralizing opponent power.
              </p>
              <motion.span
                className="inline-flex items-center gap-3 px-8 py-4 bg-tempo-bone text-tempo-carbon rounded-full text-sm uppercase tracking-widest font-medium group-hover:gap-5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Full Details
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <MegaFooter onFounderStoryClick={() => setIsFounderModalOpen(true)} />
      <FounderStoryModal 
        isOpen={isFounderModalOpen} 
        onClose={() => setIsFounderModalOpen(false)} 
      />
    </main>
  );
};

export default HomePage;
