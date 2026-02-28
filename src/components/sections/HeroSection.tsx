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
          <div className="relative z-10 flex flex-col items-start justify-end h-full text-white px-10 lg:px-20 xl:px-28 pb-32 lg:pb-36">
            {/* Batch pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-transparent border border-white/20 rounded-full text-[13px] font-medium text-white/80 tracking-wide">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Batch 002 · 250 units
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease }}
              className="text-[4.5rem] lg:text-[5rem] text-white mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, lineHeight: 0.97 }}
            >
              Elite Materials.<br />Honest Pricing.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0, ease }}
              className="text-base lg:text-lg text-white/60 mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Not a trade-off. Both.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease }}
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
            className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 py-6 px-10 lg:px-20 xl:px-28"
          >
            <div className="flex items-center justify-between">
              {/* Rating badge */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#C9A84C] drop-shadow-[0_0_6px_rgba(201,168,76,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-white tracking-wide">4.9 rating</p>
                  <p className="text-[13px] text-white/50 mt-0.5">Batch 001 · Sold out in Sydney</p>
                </div>
              </div>

              {/* Spec 1 */}
              <div>
                <p className="text-[13px] font-medium text-white tracking-wide">Maximum Legal Power</p>
                <p className="text-[13px] text-white/50 mt-1">Trufoam™ technology</p>
              </div>

              {/* Spec 2 */}
              <div>
                <p className="text-[13px] font-medium text-white tracking-wide">Exceptional spin. Every rally.</p>
                <p className="text-[13px] text-white/50 mt-1">T700 carbon · sandblasted face</p>
              </div>
            </div>
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
            className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-4 px-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-[#C9A84C] drop-shadow-[0_0_4px_rgba(201,168,76,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-medium text-white">4.9 rating</p>
                  <p className="text-[10px] text-white/50 mt-0.5">Batch 001 · Sold out</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-medium text-white">Maximum Legal Power</p>
                <p className="text-[10px] text-white/50 mt-0.5">Trufoam™ technology</p>
              </div>
              <div>
                <p className="text-[10px] font-medium text-white">Exceptional spin</p>
                <p className="text-[10px] text-white/50 mt-0.5">T700 carbon · sandblasted</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-start px-6 py-12 bg-tempo-bone">
          {/* Batch pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-tempo-carbon/5 border border-tempo-carbon/10 rounded-full text-[12px] font-medium text-tempo-carbon/80 tracking-wide">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Batch 002 · 250 units
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="text-[2.5rem] text-tempo-carbon mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, lineHeight: 0.97 }}
          >
            Elite Materials.<br />Honest Pricing.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease }}
            className="text-base text-tempo-carbon/50 mb-9"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Not a trade-off. Both.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease }}
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
