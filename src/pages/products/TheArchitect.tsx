import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const imagePlaceholders = [
  "Image 1: Front Pic",
  "Image 2: Side Pic",
  "Image 3: Handle Detail",
  "Image 4: Bottom Cap",
  "Image 5: Tech Layer",
  "Image 6: Tech Core",
];

const specs = [
  { label: "CORE", value: "Polypropylene", description: "(Vibration Control)" },
  { label: "WEIGHT", value: "8.10 oz", description: "(Optimized for Hand Speed)" },
  { label: "GRIP", value: "5.5 in", description: "(Elongated)" },
  { label: "BALANCE", value: "Central/Neutral", description: "" },
  { label: "SURFACE", value: "Raw T700 Carbon", description: "" },
  { label: "WARRANTY", value: "30 Days", description: "(Performance Guarantee)" },
];

const TheArchitect = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const techSectionRef = useRef<HTMLElement>(null);

  const scrollToSpecs = () => {
    techSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* PART 1: THE SPLIT SECTION */}
      <section className="pt-20 lg:pt-24 border-b border-foreground">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Scrollable Gallery (60%) */}
          <div className="w-full lg:w-[60%] p-4 lg:p-8 space-y-4">
            {imagePlaceholders.map((label, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="aspect-[4/5] bg-[#E5E5E5] flex items-center justify-center"
              >
                <p className="font-mono text-sm text-foreground/50 text-center px-8">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Sticky Buy Box (40%) */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-0 lg:h-screen border-l border-foreground">
            <div className="p-8 lg:p-12 h-full flex flex-col justify-center space-y-6">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="tempo-headline text-4xl md:text-5xl lg:text-6xl"
              >
                THE ARCHITECT
              </motion.h1>

              {/* Short Description */}
              <p className="tempo-body text-muted-foreground leading-relaxed">
                The tactician's instrument. Engineered for absolute placement, vibration control, and neutralizing opponent power.
              </p>

              {/* Price Block */}
              <div className="space-y-2">
                <p className="text-3xl font-semibold">$145.00</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm text-muted-foreground">Currently in Stock</span>
                </div>
              </div>

              {/* Key Features */}
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/60">•</span>
                  <span>Iso-Static™ Carbon Face (45° Weave)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/60">•</span>
                  <span>Zero-Resonance Polypropylene Core</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/60">•</span>
                  <span>Hydro-Wick Octagonal Grip</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/60">•</span>
                  <span>Muted Acoustic Profile</span>
                </li>
              </ul>

              {/* View Specs Button */}
              <button
                onClick={scrollToSpecs}
                className="w-full py-3 px-6 border border-foreground rounded-full text-sm uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                View Specs
              </button>

              {/* Trust Signals */}
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Try it or Love it - 30 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  <span>Premium Shipping</span>
                </div>
              </div>

              {/* Primary CTA */}
              <motion.button
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-8 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-3 ${
                  isButtonHovered ? "bg-tempo-crimson text-background" : "bg-foreground text-background"
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
                    x: isButtonHovered ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: THE TECH SECTION */}
      <section ref={techSectionRef} id="tech-specs" className="py-24 lg:py-32">
        <div className="tempo-container">
          {/* Banner Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="tempo-headline text-4xl md:text-5xl lg:text-7xl text-center mb-8"
          >
            IMPOSE ORDER ON CHAOS
          </motion.h2>

          {/* Long Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="tempo-body text-muted-foreground text-center max-w-2xl mx-auto mb-16 lg:mb-24 leading-relaxed"
          >
            Power without direction is wasted energy. The Architect is calibrated to neutralize kinetic energy at the kitchen line, turning your opponent's aggression into your opportunity. A chassis so rigid it feels less like a trampoline, and more like a wall.
          </motion.p>

          {/* THE SPEC GRID (3x2) */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-foreground">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`aspect-square flex flex-col items-center justify-center p-6 text-center ${
                  index % 3 !== 2 ? "md:border-r border-foreground" : ""
                } ${index < 3 ? "border-b border-foreground" : ""} ${
                  index < 3 && index % 3 !== 2 ? "" : ""
                }`}
              >
                <span className="tempo-spec text-muted-foreground block mb-3">{spec.label}</span>
                <span className="text-xl lg:text-2xl font-medium block">{spec.value}</span>
                {spec.description && (
                  <span className="text-sm text-muted-foreground mt-1">{spec.description}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 border-t border-foreground">
        <div className="tempo-container text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background py-4 px-12 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-tempo-crimson transition-colors duration-300"
          >
            Add to Cart — $145.00
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default TheArchitect;
