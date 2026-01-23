import { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import MegaFooter from "@/components/layout/MegaFooter";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import TechSpecs from "@/components/products/TechSpecs";
import ProductFAQ from "@/components/products/ProductFAQ";
const images = [
  { label: "Image 1: Front" },
  { label: "Image 2: Side" },
  { label: "Image 3: Handle Detail" },
  { label: "Image 4: Bottom Cap" },
  { label: "Image 5: Tech Layer" },
  { label: "Image 6: Tech Core" },
];

const features = [
  "Iso-Static™ Carbon Face (45° Weave)",
  "Zero-Resonance Polypropylene Core",
  "Hydro-Wick Octagonal Grip",
  "Muted Acoustic Profile",
];

const specs = [
  { label: "CORE", value: "Polypropylene", description: "(Vibration Control)" },
  { label: "WEIGHT", value: "8.10 oz", description: "(Optimized for Hand Speed)" },
  { label: "GRIP", value: "5.5 in", description: "(Elongated)" },
  { label: "BALANCE", value: "Central/Neutral" },
  { label: "SURFACE", value: "Raw T700 Carbon" },
  { label: "WARRANTY", value: "30 Days", description: "(Performance Guarantee)" },
];

const faqItems = [
  {
    question: "What is the 30-day trial?",
    answer: "We believe in The Architect. If it doesn't improve your game within 30 days, return it for a full refund. No questions asked. We'll even cover return shipping.",
  },
  {
    question: "How is The Architect different from The Ace?",
    answer: "The Architect is engineered for control and precision. It features a larger sweet spot, dampened core, and balanced weight distribution. The Ace, in contrast, is optimized for raw power with a head-heavy balance and stiffer face.",
  },
  {
    question: "Is this paddle tournament approved?",
    answer: "Yes. The Architect is fully approved by the USA Pickleball Association (USAPA) for tournament play. Its specifications meet all regulatory requirements.",
  },
  {
    question: "What is the shipping time?",
    answer: "Orders placed before 2PM EST ship same-day. Standard delivery is 3-5 business days. Expedited shipping options are available at checkout.",
  },
  {
    question: "What grip size should I choose?",
    answer: "The Architect features a 5.5 inch elongated grip, suitable for most hand sizes. If you prefer a smaller grip, overgrips can be removed. For larger hands, consider adding an overgrip for additional circumference.",
  },
];

const TheArchitect = () => {
  const techSectionRef = useRef<HTMLElement>(null);

  const scrollToSpecs = () => {
    techSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* PART 1: THE SPLIT SECTION */}
      <section className="pt-20 lg:pt-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Scrollable Gallery (60%) */}
            <div className="w-full lg:w-[60%] py-8">
              <ProductGallery images={images} />
            </div>

            {/* Right Column - Sticky Buy Box (40%) */}
            <div className="w-full lg:w-[40%] lg:sticky lg:top-0 lg:h-screen flex items-center">
              <ProductInfo
                title="THE ARCHITECT"
                description="The tactician's instrument. Engineered for absolute placement, vibration control, and neutralizing opponent power."
                price="$145.00"
                features={features}
                onViewSpecs={scrollToSpecs}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: THE TECH SECTION */}
      <section ref={techSectionRef} className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <TechSpecs
            headline="IMPOSE ORDER ON CHAOS"
            description="Power without direction is wasted energy. The Architect is calibrated to neutralize kinetic energy at the kitchen line, turning your opponent's aggression into your opportunity. A chassis so rigid it feels less like a trampoline, and more like a wall."
            specs={specs}
          />
        </div>
      </section>

      {/* PART 3: FAQ SECTION */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <ProductFAQ items={faqItems} />
      </div>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background py-4 px-12 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-tempo-navy transition-colors duration-300"
          >
            Add to Cart — $145.00
          </motion.button>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default TheArchitect;
