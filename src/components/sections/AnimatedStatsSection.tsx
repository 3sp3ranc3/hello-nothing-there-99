import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatCardProps {
  mainStat: string;
  subtitle: string;
  finePrint: string;
  icon: React.ReactNode;
  delay: number;
}

const useCountUp = (end: number, duration: number, shouldStart: boolean) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
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

const SweetSpotIcon = ({ inView }: { inView: boolean }) => (
  <div className="relative w-24 h-24 mx-auto">
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
      className="absolute inset-4 rounded-full bg-gradient-to-br from-tempo-navy/20 to-tempo-navy/40"
    />
    <motion.div
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1.2 } : {}}
      transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-6 rounded-full bg-tempo-navy/60"
    />
  </div>
);

const PlayersIcon = ({ inView }: { inView: boolean }) => (
  <div className="flex justify-center gap-1 h-24 items-end">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
        className="w-6 h-14 bg-tempo-navy/30 rounded-t-full"
      />
    ))}
  </div>
);

const PercentIcon = ({ inView, value }: { inView: boolean; value: number }) => (
  <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
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

const StatCard = ({ mainStat, subtitle, finePrint, icon, delay }: StatCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center p-8 lg:p-12"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-tempo-carbon uppercase tracking-wide mb-3">
        {mainStat}
      </h3>
      <p className="text-lg font-medium text-tempo-carbon/80 mb-2">{subtitle}</p>
      <p className="text-sm text-tempo-carbon/50">{finePrint}</p>
    </motion.div>
  );
};

const AnimatedStatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const sweetSpotCount = useCountUp(31, 2000, isInView);
  const playersCount = useCountUp(8, 1500, isInView);
  const ratingCount = useCountUp(92, 2000, isInView);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-tempo-bone border-y border-tempo-carbon/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-tempo-carbon/10">
          <StatCard
            mainStat={`${sweetSpotCount}% LARGER`}
            subtitle="Sweet Spot vs. Industry Average"
            finePrint="Independently lab tested on 50+ paddles"
            icon={<SweetSpotIcon inView={isInView} />}
            delay={0}
          />
          <StatCard
            mainStat={`${playersCount} PLAYERS`}
            subtitle="Competitive players tested in Sydney"
            finePrint="Across 300+ hours of court time"
            icon={<PlayersIcon inView={isInView} />}
            delay={0.2}
          />
          <StatCard
            mainStat={`${ratingCount}% RATING`}
            subtitle="Would recommend to another player"
            finePrint="From Batch 001 customer survey"
            icon={<PercentIcon inView={isInView} value={ratingCount} />}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default AnimatedStatsSection;
