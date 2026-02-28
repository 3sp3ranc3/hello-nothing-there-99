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
          onLoad={() => setImageLoaded(true)} />


        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {imageLoaded &&
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-12 lg:px-24 max-w-3xl">
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="text-xs uppercase tracking-[0.3em] font-medium text-white/60 mb-4">

              Batch 002
            </motion.p>

            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="text-6xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight"
            style={{ lineHeight: 0.9 }}>

              TEMPO
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="text-lg lg:text-2xl font-medium uppercase tracking-[0.15em] mt-3 text-white/90">

              The Architect
            </motion.p>

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="text-xs uppercase tracking-[0.25em] mt-5 text-white/50">

              T700 &nbsp;|&nbsp; 16MM &nbsp;|&nbsp; 4th Gen Core
            </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease }}
            className="mt-8">

              <Link
              to="/products/the-architect"
              className="inline-flex items-center gap-2.5 px-8 py-3 border border-white/80 rounded-full text-sm uppercase tracking-widest font-medium text-white hover:bg-white hover:text-tempo-carbon transition-all duration-300">

                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for Preorder Now
              </Link>
            </motion.div>
          </div>
        }

        {/* Trust Bar */}
        {imageLoaded &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 z-10">

            <div className="py-4">
              <p className="text-center text-xs uppercase tracking-[0.25em] font-medium text-white/50">
                Engineered in Sydney
              </p>
            </div>
            <div className="flex justify-center pb-5">
              <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5">

                <div className="w-1 h-1.5 rounded-full bg-white/50" />
              </motion.div>
            </div>
          </motion.div>
        }
      </div>

      {/* Mobile: image then text below */}
      <div className="md:hidden">
        <div className="relative h-[55vh] w-full overflow-hidden bg-tempo-carbon">
          <img
            src={heroImage}
            alt="Tempo Architect paddle held on court"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high" />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-0 right-0 py-3">

            <p className="text-center text-[10px] uppercase tracking-[0.25em] font-medium text-white/50">
              T700 carbon w/ sandblasted face
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center text-center px-6 py-10 bg-tempo-bone">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="text-xs uppercase tracking-[0.3em] font-medium text-tempo-carbon/50 mb-3">

            Batch 002
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="text-4xl font-black uppercase tracking-[0.15em] text-tempo-carbon"
            style={{ lineHeight: 0.9 }}>

            TEMPO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="text-base font-medium uppercase tracking-[0.2em] mt-3 text-tempo-carbon/80">

            The Architect
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="text-[10px] uppercase tracking-[0.25em] mt-4 text-tempo-carbon/40">

            T700 &nbsp;|&nbsp; 16MM &nbsp;|&nbsp; 4th Gen Core
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease }}
            className="mt-6">

            <Link
              to="/products/the-architect"
              className="inline-flex items-center gap-2.5 px-8 py-3 bg-tempo-carbon text-tempo-bone rounded-full text-sm uppercase tracking-widest font-medium hover:scale-105 transition-transform duration-300">

              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Preorder Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;