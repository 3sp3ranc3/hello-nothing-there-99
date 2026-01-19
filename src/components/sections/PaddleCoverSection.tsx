import { motion } from "framer-motion";
import TempoButton from "@/components/ui/TempoButton";
import ProductPlaceholder from "@/components/ui/ProductPlaceholder";

const PaddleCoverSection = () => {
  return (
    <>
      <div className="tempo-divider" />
      <section className="tempo-section relative overflow-hidden">
        <div className="tempo-container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center min-h-[60vh]">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:text-right"
            >
              <span className="tempo-spec text-muted-foreground block mb-4">The Essential</span>
              <h2 className="tempo-headline text-3xl md:text-4xl lg:text-5xl">
                Paddle Cover
              </h2>
            </motion.div>

            {/* Center - Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <ProductPlaceholder 
                aspectRatio="4/3" 
                className="w-full"
                label="COVER"
              />
            </motion.div>

            {/* Right - Details & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="space-y-6"
            >
              <div className="tempo-body space-y-3">
                <p className="text-muted-foreground">
                  Premium neoprene construction with reinforced stitching.
                </p>
                <p className="text-muted-foreground">
                  The essential companion for protecting your investment.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="tempo-headline text-2xl">$29</span>
                <TempoButton variant="primary" onClick={() => alert("Added to cart!")}>
                  Add to Cart
                </TempoButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Divider */}
      <div className="tempo-divider" />
      
      {/* Simple Footer */}
      <footer className="py-16">
        <div className="tempo-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="tempo-headline text-lg tracking-[0.2em]">TEMPO</span>
            <p className="tempo-spec text-muted-foreground">
              © 2024 Tempo Pickleball. Engineered for the modern game.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PaddleCoverSection;
