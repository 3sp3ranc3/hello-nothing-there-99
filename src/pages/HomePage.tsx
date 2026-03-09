import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";
import HeroSection from "@/components/sections/HeroSection";
import WhyArchitectSection from "@/components/sections/WhyArchitectSection";
import JourneyTimelineSection from "@/components/sections/JourneyTimelineSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import architectBackhand from "@/assets/architect-backhand.jpg";

const HomePage = () => {
  return (
    <main className="bg-tempo-bone">
      <BatchNavbar />
      <HeroSection />
      <WhyArchitectSection />
      <BatchComparisonSection />
      <TestimonialsSection linkable />

      {/* Discovery CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden min-h-[55vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={architectBackhand}
            alt="The Architect paddle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-tempo-carbon/65" />
        </div>

        <div className="relative max-w-[1800px] w-full mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs uppercase tracking-widest font-medium text-tempo-bone/70 mb-5">
              The Tactician's Instrument
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-tempo-bone mb-6" style={{ lineHeight: 0.95 }}>
              Discover<br />The Architect
            </h2>
            <p className="text-tempo-bone/60 max-w-md mb-10">
              Engineered for absolute placement, vibration control, and neutralising opponent power.
            </p>
            <Link to="/products/the-architect">
              <motion.span
                className="inline-flex items-center gap-3 px-10 py-4 bg-tempo-bone text-tempo-carbon rounded-full text-sm uppercase tracking-widest font-bold hover:gap-5 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                PREORDER BATCH 002
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default HomePage;
