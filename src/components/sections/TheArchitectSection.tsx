import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TempoButton from "@/components/ui/TempoButton";
import ProductPlaceholder from "@/components/ui/ProductPlaceholder";

const TheArchitectSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <>
      <div className="tempo-divider" />
      <section 
        ref={sectionRef}
        className="tempo-section relative overflow-hidden"
      >
        <div className="tempo-container min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 min-h-screen">
            {/* Image - Left side, Sticky */}
            <div className="lg:sticky lg:top-0 lg:h-screen flex items-center py-24">
              <div className="relative w-full">
                <ProductPlaceholder 
                  aspectRatio="1/1" 
                  className="w-full max-w-md mx-auto lg:mx-0"
                  label="THE ARCHITECT"
                />
                
                {/* Background text bleed */}
                <div className="absolute -z-10 top-0 -right-8 lg:-right-20">
                  <span className="tempo-headline text-[6rem] lg:text-[10rem] text-foreground/5 select-none writing-mode-vertical">
                    CTRL
                  </span>
                </div>
              </div>
            </div>

            {/* Content - Right side, Scrolling */}
            <motion.div 
              className="flex flex-col justify-center py-24 lg:py-48 lg:pl-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <span className="tempo-spec text-tempo-forest block mb-4">Control Focus</span>
                  <h2 className="tempo-headline text-4xl md:text-5xl lg:text-6xl mb-6">
                    The Architect
                  </h2>
                </div>

                <div className="tempo-body space-y-4">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Structural Integrity.</span> Built 
                    with a reinforced edge guard and balanced weight distribution for predictable play.
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Precision Face.</span> Textured 
                    surface technology provides enhanced spin control without sacrificing touch.
                  </p>
                </div>

                <div className="pt-4">
                  <TempoButton variant="ghost" href="/products/the-architect">
                    Learn More
                  </TempoButton>
                </div>

                {/* Specs Preview */}
                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <span className="tempo-spec text-muted-foreground block mb-1">Weight</span>
                      <span className="font-medium">7.9 oz</span>
                    </div>
                    <div>
                      <span className="tempo-spec text-muted-foreground block mb-1">Core</span>
                      <span className="font-medium">16mm</span>
                    </div>
                    <div>
                      <span className="tempo-spec text-muted-foreground block mb-1">Surface</span>
                      <span className="font-medium">Fiberglass</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Additional scroll content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mt-24 lg:mt-48"
              >
                <blockquote className="tempo-body text-xl lg:text-2xl italic text-muted-foreground border-l-2 border-foreground pl-6">
                  "Every shot is intentional. Every placement, calculated."
                </blockquote>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheArchitectSection;
