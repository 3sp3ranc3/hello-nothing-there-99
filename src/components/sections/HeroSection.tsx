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
          <div className="relative z-10 flex flex-col items-start justify-end h-full text-white px-10 lg:px-20 xl:px-28 pb-28 lg:pb-32">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease }}
              className="text-[clamp(2.8rem,7vw,7rem)] font-extralight tracking-[-0.02em] leading-[1.0] mb-6"
            >
              Elite materials.<br />Honest pricing.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0, ease }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-sm lg:text-base font-medium tracking-[0.15em] uppercase text-white/70">
                The Architect
              </span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-sm lg:text-base font-medium tracking-[0.15em] uppercase text-white/70">
                Batch 002
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4, ease }}
              className="text-[11px] lg:text-xs uppercase tracking-[0.3em] text-white/35 mb-10"
            >
              T700 &nbsp;&middot;&nbsp; 16MM &nbsp;&middot;&nbsp; 4th Gen Core
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8, ease }}
            >
              <Link
                to="/products/the-architect"
                className="group inline-flex items-center bg-white text-tempo-carbon rounded-full overflow-hidden hover:scale-[1.03] transition-transform duration-300"
              >
                <span className="px-8 lg:px-10 py-4 lg:py-[1.1rem] text-[13px] lg:text-sm uppercase tracking-[0.2em] font-semibold">
                  Pre-order now
                </span>
                <span className="px-6 lg:px-7 py-4 lg:py-[1.1rem] text-sm lg:text-base font-bold tracking-tight border-l border-tempo-carbon/10 bg-tempo-carbon/[0.03]">
                  $135
                </span>
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

        <div className="flex flex-col items-center text-center px-6 py-14 bg-tempo-bone">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="text-[2.2rem] font-extralight tracking-[-0.01em] text-tempo-carbon leading-[1.05]"
          >
            Elite materials.<br />Honest pricing.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0, ease }}
            className="flex items-center gap-2.5 mt-5"
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-tempo-carbon/55">
              The Architect
            </span>
            <span className="w-1 h-1 rounded-full bg-tempo-carbon/30" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-tempo-carbon/55">
              Batch 002
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, ease }}
            className="text-[10px] uppercase tracking-[0.3em] mt-3 text-tempo-carbon/30"
          >
            T700 &nbsp;&middot;&nbsp; 16MM &nbsp;&middot;&nbsp; 4th Gen Core
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease }}
            className="mt-9"
          >
            <Link
              to="/products/the-architect"
              className="group inline-flex items-center bg-tempo-carbon rounded-full overflow-hidden hover:scale-[1.03] transition-transform duration-300"
            >
              <span className="px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-tempo-bone">
                Pre-order now
              </span>
              <span className="px-5 py-3.5 text-sm font-bold tracking-tight text-tempo-bone border-l border-white/10 bg-white/[0.05]">
                $135
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
