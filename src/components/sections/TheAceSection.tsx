import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TempoButton from "@/components/ui/TempoButton";
import ProductPlaceholder from "@/components/ui/ProductPlaceholder";

const TheAceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <>
      <div className="tempo-divider" />
      <section 
        ref={sectionRef}
        className="tempo-section relative overflow-hidden"
      >
        {/* Background text - massive */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="tempo-headline text-[15rem] md:text-[25rem] lg:text-[35rem] text-foreground/[0.03] select-none">
            ACE
          </span>
        </div>

        <div className="tempo-container min-h-screen flex flex-col items-center justify-center relative z-10">
          {/* Centered Hero Image */}
          <motion.div 
            style={{ scale, opacity }}
            className="w-full max-w-2xl mb-16"
          >
            <ProductPlaceholder 
              aspectRatio="1/1" 
              className="w-full"
              label="THE ACE"
            />
          </motion.div>

          {/* Content fades in from bottom */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl"
          >
            <span className="tempo-spec text-tempo-crimson block mb-4">Power Focus</span>
            <h2 className="tempo-headline text-4xl md:text-5xl lg:text-7xl mb-6">
              The Ace
            </h2>

            <div className="tempo-body mx-auto space-y-4 mb-8">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Impact Drive.</span> Designed 
                for players who dominate from the baseline with powerful groundstrokes.
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Kinetic Energy.</span> Our 
                densest core construction maximizes energy transfer on every drive.
              </p>
            </div>

            <TempoButton variant="ghost" href="/products/the-ace">
              Learn More
            </TempoButton>
          </motion.div>

          {/* Specs - Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-8 border-t border-border w-full max-w-md"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="tempo-spec text-muted-foreground block mb-1">Weight</span>
                <span className="font-medium">8.4 oz</span>
              </div>
              <div>
                <span className="tempo-spec text-muted-foreground block mb-1">Core</span>
                <span className="font-medium">13mm</span>
              </div>
              <div>
                <span className="tempo-spec text-muted-foreground block mb-1">Surface</span>
                <span className="font-medium">Raw Carbon</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TheAceSection;
