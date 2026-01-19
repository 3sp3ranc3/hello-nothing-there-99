import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TempoButton from "@/components/ui/TempoButton";
import ProductPlaceholder from "@/components/ui/ProductPlaceholder";

const TheAirSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <>
      <div className="tempo-divider" />
      <section 
        ref={sectionRef}
        className="tempo-section relative overflow-hidden"
      >
        <div className="tempo-container min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
            {/* Image - Sticky feel */}
            <motion.div 
              style={{ y: imageY }}
              className="relative lg:sticky lg:top-32"
            >
              <ProductPlaceholder 
                aspectRatio="3/4" 
                className="w-full max-w-lg mx-auto"
                label="THE AIR"
              />
              
              {/* Background text bleed */}
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 -left-8 lg:-left-20">
                <span className="tempo-headline text-[8rem] lg:text-[12rem] text-foreground/5 select-none whitespace-nowrap">
                  AIR
                </span>
              </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="tempo-spec text-tempo-navy block mb-4">Speed Focus</span>
                <h2 className="tempo-headline text-4xl md:text-5xl lg:text-6xl mb-6">
                  The Air
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="space-y-6"
              >
                <div className="tempo-body space-y-4">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Featherweight Design.</span> Engineered 
                    to eliminate resistance, allowing for lightning-fast reactions at the net.
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Aerodynamic Core.</span> Our proprietary 
                    honeycomb structure reduces drag while maintaining structural integrity.
                  </p>
                </div>

                <div className="pt-4">
                  <TempoButton variant="ghost" href="/products/the-air">
                    Learn More
                  </TempoButton>
                </div>
              </motion.div>

              {/* Specs Preview */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-8 border-t border-border"
              >
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <span className="tempo-spec text-muted-foreground block mb-1">Weight</span>
                    <span className="font-medium">7.4 oz</span>
                  </div>
                  <div>
                    <span className="tempo-spec text-muted-foreground block mb-1">Core</span>
                    <span className="font-medium">14mm</span>
                  </div>
                  <div>
                    <span className="tempo-spec text-muted-foreground block mb-1">Surface</span>
                    <span className="font-medium">Carbon</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheAirSection;
