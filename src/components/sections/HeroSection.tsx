import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="tempo-section flex items-center justify-center relative overflow-hidden"
    >
      <motion.div 
        style={{ y, opacity }}
        className="text-center tempo-container"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="tempo-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6"
        >
          Precision in Motion.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="tempo-body text-lg md:text-xl text-muted-foreground mx-auto"
        >
          Engineered for the modern game.
        </motion.p>
      </motion.div>

      {/* Subtle background element */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-foreground/10"
      />
    </section>
  );
};

export default HeroSection;
