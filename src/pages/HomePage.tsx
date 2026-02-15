import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";
import FounderStoryModal from "@/components/ui/FounderStoryModal";
import HeroSection from "@/components/sections/HeroSection";

// CountUp hook
const useCountUp = (end: number, duration: number, shouldStart: boolean) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);
  
  return count;
};

// Stat Icons
const SweetSpotIcon = ({ inView }: { inView: boolean }) => (
  <div className="relative w-20 h-20 mx-auto">
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 rounded-full border-2 border-tempo-navy/20"
    />
    <motion.div
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : {}}
      transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-3 rounded-full bg-gradient-to-br from-tempo-navy/20 to-tempo-navy/40"
    />
    <motion.div
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1.2 } : {}}
      transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-5 rounded-full bg-tempo-navy/60"
    />
  </div>
);

const PlayersIcon = ({ inView }: { inView: boolean }) => (
  <div className="flex justify-center gap-1 h-20 items-end">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
        className="w-5 h-12 bg-tempo-navy/30 rounded-t-full"
      />
    ))}
  </div>
);

const PercentIcon = ({ inView, value }: { inView: boolean; value: number }) => (
  <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        className="text-tempo-navy/10"
      />
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeDasharray={`${2 * Math.PI * 45}`}
        initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
        animate={inView ? { strokeDashoffset: 2 * Math.PI * 45 * (1 - value / 100) } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-tempo-navy"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const HomePage = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  const sweetSpotCount = useCountUp(31, 2000, isStatsInView);
  const playersCount = useCountUp(8, 1500, isStatsInView);
  const ratingCount = useCountUp(92, 2000, isStatsInView);

  const improvements = [
    "8% larger sweet spot (increased from 23% to 31% vs. industry standard)",
    "Enhanced edge guard durability (upgraded polymer compound)",
    "Optimized weight distribution (4% improvement in swing stability)",
    "Refined grip texture (based on player feedback sessions)",
  ];

  return (
    <main className="bg-tempo-bone">
      <BatchNavbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 lg:py-28 bg-tempo-navy/[0.03] border-y border-tempo-carbon/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide text-tempo-carbon">
              Results From Our First Batch
            </h2>
            <p className="text-tempo-carbon/60 mt-3">Batch 001 Performance Data</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-tempo-carbon/10">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-8 lg:p-10"
            >
              <div className="mb-5"><SweetSpotIcon inView={isStatsInView} /></div>
              <h3 className="text-3xl md:text-4xl font-black text-tempo-carbon uppercase tracking-wide mb-2">
                {sweetSpotCount}% LARGER
              </h3>
              <p className="text-base font-medium text-tempo-carbon/80 mb-1">Sweet Spot vs. Industry Average</p>
              <p className="text-sm text-tempo-carbon/50">Independently lab tested on 50+ paddles</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-8 lg:p-10"
            >
              <div className="mb-5"><PlayersIcon inView={isStatsInView} /></div>
              <h3 className="text-3xl md:text-4xl font-black text-tempo-carbon uppercase tracking-wide mb-2">
                {playersCount} PLAYERS
              </h3>
              <p className="text-base font-medium text-tempo-carbon/80 mb-1">Competitive players tested in Sydney</p>
              <p className="text-sm text-tempo-carbon/50">Across 300+ hours of court time</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-8 lg:p-10"
            >
              <div className="mb-5"><PercentIcon inView={isStatsInView} value={ratingCount} /></div>
              <h3 className="text-3xl md:text-4xl font-black text-tempo-carbon uppercase tracking-wide mb-2">
                {ratingCount}% RATING
              </h3>
              <p className="text-base font-medium text-tempo-carbon/80 mb-1">Would recommend to another player</p>
              <p className="text-sm text-tempo-carbon/50">From Batch 001 customer survey</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discovery CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link
              to="/products/the-architect"
              className="group block"
            >
              <div className="relative py-16 lg:py-20 px-8 lg:px-16 border border-tempo-carbon/20 rounded-sm bg-tempo-navy/[0.02] hover:bg-tempo-navy/[0.05] transition-all duration-500 overflow-hidden">
                {/* Background accent */}
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
