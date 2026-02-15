import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";
import FounderStoryModal from "@/components/ui/FounderStoryModal";
import HeroSection from "@/components/sections/HeroSection";
import BatchComparisonSection from "@/components/sections/BatchComparisonSection";

const HomePage = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);

  return (
    <main className="bg-tempo-bone">
      <BatchNavbar />
      <HeroSection />
      <BatchComparisonSection />

      {/* Discovery CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link to="/products/the-architect" className="group block">
              <div className="relative py-12 lg:py-16 px-8 lg:px-16 border border-tempo-carbon/20 rounded-sm bg-tempo-navy/[0.02] hover:bg-tempo-navy/[0.05] transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tempo-navy/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <span className="inline-block text-xs uppercase tracking-widest font-medium text-tempo-navy mb-4">
                    The Tactician's Instrument
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide text-tempo-carbon mb-6" style={{ lineHeight: 1.1 }}>
                    Discover Architect<br />Batch 002
                  </h2>
                  <p className="text-tempo-carbon/60 max-w-md mx-auto mb-8">
                    Engineered for absolute placement, vibration control, and neutralizing opponent power.
                  </p>
                  <motion.div
                    className="inline-flex items-center gap-3 px-8 py-4 bg-tempo-carbon text-tempo-bone rounded-full text-sm uppercase tracking-widest font-medium group-hover:gap-5 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Full Details
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
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
