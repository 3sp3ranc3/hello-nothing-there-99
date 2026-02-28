import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import heroImage from "@/assets/hero-image.webp";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="w-full">
      {/* Desktop: fullscreen image with overlaid text */}
      <div className="hidden md:block relative h-screen w-full overflow-hidden bg-tempo-carbon">
        <img
          src={heroImage}
          alt="Tempo Architect paddle held on court"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {imageLoaded && (
          <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-12 lg:px-24 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="text-3xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-tight"
            >
              Engineered for<br />absolute control.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0, ease }}
              className="text-sm tracking-wide mt-5 text-white/60"
            >
              Elite materials. Honest pricing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4, ease }}
              className="text-xs uppercase tracking-[0.25em] mt-3 text-white/40"
            >
              T700 &nbsp;|&nbsp; 16MM &nbsp;|&nbsp; 4th Gen Core
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8, ease }}
              className="mt-8"
            >
              <Link
                to="/products/the-architect"
                className="inline-flex items-center px-8 py-3 bg-white text-tempo-carbon rounded-full text-sm uppercase tracking-widest font-medium hover:scale-105 transition-transform duration-300"
              >
                Pre-order The Architect Now
                <span className="ml-3 pl-3 border-l border-tempo-carbon/20 text-xs font-bold tracking-normal">$135</span>
              </Link>
            </motion.div>
          </div>
        )}

        {/* Trust bar */}
        {imageLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.6 }}
            className="absolute bottom-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-sm border-t border-white/10 py-3"
          >
            <p className="text-center text-[11px] uppercase tracking-[0.2em] font-medium text-white/60">
              Refined from 300+ hours of athlete testing in Sydney
            </p>
          </motion.div>
        )}
      </div>

      {/* Mobile: image then text below */}
      <div className="md:hidden">
        <div className="relative h-[55vh] w-full overflow-hidden bg-tempo-carbon">
          <img
            src={heroImage}
            alt="Tempo Architect paddle held on court"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.0 }}
            className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10 py-3"
          >
            <p className="text-center text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">
              Refined from 300+ hours of athlete testing in Sydney
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center text-center px-6 py-10 bg-tempo-bone">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="text-2xl font-light tracking-tight text-tempo-carbon leading-tight"
          >
            Engineered for<br />absolute control.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0, ease }}
            className="text-xs tracking-wide mt-4 text-tempo-carbon/50"
          >
            Elite materials. Honest pricing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, ease }}
            className="text-[10px] uppercase tracking-[0.25em] mt-3 text-tempo-carbon/40"
          >
            T700 &nbsp;|&nbsp; 16MM &nbsp;|&nbsp; 4th Gen Core
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease }}
            className="mt-6"
          >
            <Link
              to="/products/the-architect"
              className="inline-flex items-center px-8 py-3 bg-tempo-carbon text-tempo-bone rounded-full text-sm uppercase tracking-widest font-medium hover:scale-105 transition-transform duration-300"
            >
              Pre-order The Architect Now
              <span className="ml-3 pl-3 border-l border-white/20 text-xs font-bold tracking-normal">$135</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
