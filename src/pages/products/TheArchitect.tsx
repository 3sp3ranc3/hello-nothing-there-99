import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import architectPaddleFront from "@/assets/architect-paddle-front.png";
import architectPaddleRotated from "@/assets/architect-paddle-rotated.png";

const specs = [
  { label: "WEIGHT", value: "8.1 oz", description: "Optimized for Hand Speed" },
  { label: "CORE", value: "16mm Polypropylene", description: "Vibration Control" },
  { label: "GRIP", value: "5.5 inch", description: "Elongated for Reach" },
];

interface PhotoPlaceholderProps {
  aspect: "3/4" | "1/1" | "16/9";
  direction: string;
  overlayText?: string;
  overlaySubtext?: string;
  className?: string;
}

const PhotoPlaceholder = ({ aspect, direction, overlayText, overlaySubtext, className }: PhotoPlaceholderProps) => {
  const aspectClasses = {
    "3/4": "aspect-[3/4]",
    "1/1": "aspect-square",
    "16/9": "aspect-video",
  };

  return (
    <div className={`relative bg-[#E5E5E5] overflow-hidden ${aspectClasses[aspect]} ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <p className="text-center text-foreground/50 text-sm font-mono leading-relaxed max-w-md">
          {direction}
        </p>
      </div>
      {overlayText && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent"
        >
          <p className="tempo-spec text-background tracking-widest mb-1">{overlayText}</p>
          {overlaySubtext && (
            <p className="text-background/80 text-sm">{overlaySubtext}</p>
          )}
        </motion.div>
      )}
    </div>
  );
};

const TheArchitect = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const image1Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const image2Y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const image3Y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Split Section */}
      <section ref={containerRef} className="pt-20 lg:pt-24">
        <div className="tempo-container">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16">
            
            {/* Left Column - Scrollable Images */}
            <div className="space-y-8 lg:space-y-12 order-2 lg:order-1">
              {/* Image 1 - Hero Shot with actual paddle images */}
              <motion.div 
                style={{ y: image1Y }}
                className="relative"
              >
                <div 
                  className="relative aspect-[3/4] bg-[#E5E5E5] overflow-hidden cursor-pointer"
                  onMouseEnter={() => setIsImageHovered(true)}
                  onMouseLeave={() => setIsImageHovered(false)}
                >
                  {/* Front image */}
                  <img
                    src={architectPaddleFront}
                    alt="The Architect Paddle - Front View"
                    className={`absolute inset-0 w-full h-full object-contain p-8 transition-opacity duration-500 ${isImageHovered ? 'opacity-0' : 'opacity-100'}`}
                  />
                  {/* Rotated image - on hover */}
                  <img
                    src={architectPaddleRotated}
                    alt="The Architect Paddle - Rotated View"
                    className={`absolute inset-0 w-full h-full object-contain p-8 transition-opacity duration-500 ${isImageHovered ? 'opacity-100' : 'opacity-0'}`}
                  />
                  {/* Photo direction overlay */}
                  <div className="absolute inset-0 flex items-end p-6 pointer-events-none">
                    <p className="text-foreground/30 text-xs font-mono">
                      PHOTO DIRECTION: High-contrast hero shot of paddle face. Hard light casting sharp shadows.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Image 2 - Texture Shot */}
              <motion.div style={{ y: image2Y }}>
                <PhotoPlaceholder
                  aspect="1/1"
                  direction="PHOTO DIRECTION: Macro extreme close-up of the T-700 Carbon Weave. Lighting highlights the grit and texture."
                  overlayText="ISO-STATIC™ CARBON FACE"
                  overlaySubtext="Maximum friction for surgical spin."
                />
              </motion.div>

              {/* Image 3 - Exploded View */}
              <motion.div style={{ y: image3Y }}>
                <PhotoPlaceholder
                  aspect="16/9"
                  direction="PHOTO DIRECTION: Technical 'Exploded View' diagram. Separating the Honeycomb core, the edge guard, and the face layers."
                  overlayText="ZERO-RESONANCE CORE"
                  overlaySubtext="Dampens vibration without killing your drive."
                />
              </motion.div>
            </div>

            {/* Right Column - Sticky Buy Box */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:h-fit">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Label */}
                <span className="font-mono text-xs text-foreground/60 tracking-widest">
                  CONTROL SERIES | MODEL 02
                </span>

                {/* Title */}
                <h1 className="tempo-headline text-5xl md:text-6xl lg:text-7xl">
                  THE ARCHITECT
                </h1>

                {/* Price */}
                <p className="text-3xl font-medium">$220.00</p>

                {/* Description */}
                <p className="tempo-body text-muted-foreground leading-relaxed max-w-md">
                  Precision-milled for the tactician. The Architect channels your power into absolute placement. A high-friction carbon chassis that turns defensive blocks into offensive counters.
                </p>

                {/* CTA Button */}
                <motion.button
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-8 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-3 ${
                    isButtonHovered 
                      ? 'bg-tempo-navy text-background' 
                      : 'bg-foreground text-background'
                  }`}
                >
                  <motion.span
                    animate={{ x: isButtonHovered ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Add to Cart
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: isButtonHovered ? 1 : 0, 
                      x: isButtonHovered ? 0 : -10 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.button>

                {/* Shipping Note */}
                <p className="text-xs text-muted-foreground text-center">
                  Ships free. 30-day trial.
                </p>

                {/* Divider */}
                <div className="border-t border-border pt-6 mt-8">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Weight</span>
                      <span className="font-medium">8.1 oz</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Core</span>
                      <span className="font-medium">16mm PP</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Surface</span>
                      <span className="font-medium">T-700 Carbon</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Full Width */}
      <section className="py-24 lg:py-32 mt-16 lg:mt-24 border-y border-foreground">
        <div className="tempo-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="tempo-headline text-4xl md:text-5xl lg:text-6xl">
              IMPOSE ORDER ON CHAOS
            </h2>
            <p className="tempo-body text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Power without direction is wasted energy. The Architect is not about sacrificing power; it's about harnessing it. With a swing weight calibrated for stability, this paddle ensures that when you swing hard, the ball goes exactly where you intend. It connects your hand to the ball with zero interference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Specs Grid */}
      <section className="py-16 lg:py-24">
        <div className="tempo-container">
          <div className="grid md:grid-cols-3 border border-foreground">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 lg:p-12 text-center ${
                  index < specs.length - 1 ? 'border-b md:border-b-0 md:border-r border-foreground' : ''
                }`}
              >
                <span className="tempo-spec text-muted-foreground block mb-2">{spec.label}</span>
                <span className="text-2xl lg:text-3xl font-medium block mb-2">{spec.value}</span>
                <span className="text-sm text-muted-foreground">({spec.description})</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="tempo-container text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background py-4 px-12 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-tempo-navy transition-colors duration-300"
          >
            Add to Cart — $220.00
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default TheArchitect;
