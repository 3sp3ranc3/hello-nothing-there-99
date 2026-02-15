import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <>
    <section className="w-full">
      {/* Desktop: image with overlaid text */}
      <div className="hidden md:block relative h-[90vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Tempo Architect paddle held on court"
          className="absolute inset-0 w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-8xl font-black uppercase tracking-[0.15em]"
            style={{ lineHeight: 0.9 }}>
            TEMPO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-2xl font-medium uppercase tracking-[0.2em] mt-4">
            BATCH 002 : ARCHITECT
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6">
            <Link
              to="/products/the-architect"
              className="inline-block px-8 py-3 border border-white rounded-full text-sm uppercase tracking-widest font-medium text-white hover:bg-white hover:text-tempo-carbon transition-all duration-300">
              Available for Preorder Now
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-xs uppercase tracking-[0.3em] mt-6 text-white/70">
            T700 &nbsp;|&nbsp; 16MM &nbsp;|&nbsp; 4th Gen Core
          </motion.p>
        </div>

        {/* Trust Bar - integrated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 z-10"
        >
          <div className="py-4 border-t border-white/15">
            <p className="text-center text-xs uppercase tracking-[0.25em] font-medium text-white/50">
              Engineered in Sydney &nbsp;|&nbsp; Limited Batch Release
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center pb-5">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-1.5 rounded-full bg-white/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile: image then text below */}
      <div className="md:hidden">
        <div className="relative h-[55vh] w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Tempo Architect paddle held on court"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

          {/* Trust Bar - mobile integrated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-0 right-0 py-3"
          >
            <p className="text-center text-[10px] uppercase tracking-[0.25em] font-medium text-white/50">
              Engineered in Sydney &nbsp;|&nbsp; Limited Batch Release
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center text-center px-6 py-10 bg-tempo-bone">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-black uppercase tracking-[0.15em] text-tempo-carbon"
            style={{ lineHeight: 0.9 }}>
            TEMPO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base font-medium uppercase tracking-[0.2em] mt-3 text-tempo-carbon/80">
            Batch 002: Architect
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5">
            <Link
              to="/products/the-architect"
              className="inline-block px-8 py-3 bg-tempo-carbon text-tempo-bone rounded-full text-sm uppercase tracking-widest font-medium hover:scale-105 transition-transform duration-300">
              Available for Preorder Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  </>
  );
};

export default HeroSection;