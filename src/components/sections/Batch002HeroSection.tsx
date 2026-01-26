import { motion } from "framer-motion";

const Batch002HeroSection = () => {
  const improvements = [
    "8% larger sweet spot (increased from 23% to 31% vs. industry standard)",
    "Enhanced edge guard durability (upgraded polymer compound)",
    "Optimized weight distribution (4% improvement in swing stability)",
    "Refined grip texture (based on player feedback sessions)",
  ];

  return (
    <section className="min-h-screen bg-tempo-bone pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-tempo-carbon/5 border border-tempo-carbon/10 rounded-full text-xs uppercase tracking-widest font-medium text-tempo-carbon/80">
            <span className="w-2 h-2 bg-tempo-stock rounded-full animate-pulse" />
            Batch 002 Now Available
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-tempo-carbon mb-4" style={{ lineHeight: 1 }}>
            Architect Batch 002
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-tempo-carbon/70 italic">
            Even Better Based On Your Feedback
          </p>
        </motion.div>

        {/* Letter Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 text-tempo-carbon/80 text-base md:text-lg leading-relaxed"
        >
          <p>
            After countless prototypes, 230+ hours of lab testing, and invaluable feedback from our 
            Batch 001 players, we've refined the Architect.
          </p>

          {/* Improvements List */}
          <div className="py-6">
            <p className="font-semibold text-tempo-carbon mb-4">What's improved in Batch 002:</p>
            <ul className="space-y-3">
              {improvements.map((improvement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-tempo-navy font-bold">→</span>
                  <span>{improvement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <p>
            Same premium T700 carbon fiber. Same 16mm core. Same direct-to-player pricing that 
            cuts out retail markup.
          </p>

          {/* Urgency Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-semibold text-tempo-carbon pt-4 border-t border-tempo-carbon/10"
          >
            Limited to 250 units. Preorder closes Feb 28 or when sold out.
          </motion.p>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-tempo-carbon/10"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-tempo-carbon/10 flex items-center justify-center">
              <span className="text-xl font-bold text-tempo-carbon">AC</span>
            </div>
            <div>
              <p className="font-semibold text-tempo-carbon italic text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                Alex Chen
              </p>
              <p className="text-sm text-tempo-carbon/60">Founder, Tempo Pickleball</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Batch002HeroSection;
