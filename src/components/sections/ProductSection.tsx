import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProductGallery from "@/components/products/ProductGallery";

const images = [
  { src: "/placeholder.svg", alt: "Image 1: Front" },
  { src: "/placeholder.svg", alt: "Image 2: Side" },
  { src: "/placeholder.svg", alt: "Image 3: Handle Detail" },
  { src: "/placeholder.svg", alt: "Image 4: Bottom Cap" },
];

const features = [
  "Iso-Static™ Carbon Face (45° Weave)",
  "Zero-Resonance Polypropylene Core",
  "Hydro-Wick Octagonal Grip",
  "Muted Acoustic Profile",
];

const ProductSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="product" className="py-16 lg:py-24 bg-tempo-bone">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide text-tempo-carbon mb-4">
            The Architect
          </h2>
          <p className="text-lg text-tempo-carbon/60 max-w-2xl mx-auto">
            The tactician's instrument. Engineered for absolute placement, vibration control, 
            and neutralising opponent power.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Gallery (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[60%]"
          >
            <ProductGallery images={images} />
          </motion.div>

          {/* Right Column - Product Info (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[40%] lg:sticky lg:top-24 lg:self-start"
          >
            <div className="space-y-8">
              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl italic text-tempo-carbon/70 border-l-2 border-tempo-navy pl-6">
                "Not every shot is perfect. The Architect forgives the imperfect ones."
              </blockquote>

              {/* Price Block */}
              <div id="reserve" className="bg-tempo-carbon text-tempo-bone p-8 rounded-lg">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-tempo-bone/60">Batch 002 Preorder</span>
                  
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm line-through text-tempo-bone/40">$195</span>
                    <span className="text-4xl font-black">$135</span>
                  </div>
                  
                  <p className="text-sm text-tempo-bone/70">
                    Our best paddle at our lowest price yet
                  </p>

                  <div className="pt-4 border-t border-tempo-bone/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-tempo-bone/60">Batch 002 – Limited to 250 units</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-tempo-bone/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "27%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-tempo-stock rounded-full"
                        />
                      </div>
                      <span className="text-sm font-semibold">67/250</span>
                    </div>
                    <p className="text-xs text-tempo-bone/50 mt-2">
                      Closes February 28th or when allocation sells out
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-tempo-bone text-tempo-carbon font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors mt-4"
                  >
                    Reserve Now — $135
                  </motion.button>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h4 className="text-sm uppercase tracking-widest font-semibold text-tempo-carbon/60">
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-tempo-carbon">
                      <span className="w-1.5 h-1.5 rounded-full bg-tempo-navy mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 text-sm text-tempo-carbon/60 pt-4 border-t border-tempo-carbon/10">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>12-Month Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span>Free Shipping</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
