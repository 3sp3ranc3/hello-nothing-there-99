import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import MegaFooter from "@/components/layout/MegaFooter";
import TempoButton from "@/components/ui/TempoButton";
import ProductPlaceholder from "@/components/ui/ProductPlaceholder";
const specs = [
  { label: "Weight", value: "8.4 oz" },
  { label: "Core Thickness", value: "13mm" },
  { label: "Core Material", value: "High-Density Polymer" },
  { label: "Surface", value: "Raw Carbon Fiber" },
  { label: "Handle Length", value: '5.5"' },
  { label: "Grip Circumference", value: '4.5"' },
  { label: "Paddle Length", value: '16.5"' },
  { label: "Paddle Width", value: '7.5"' },
];

const TheAce = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="tempo-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <ProductPlaceholder 
                aspectRatio="3/4" 
                className="w-full"
                label="THE ACE"
              />
            </motion.div>

            {/* Content */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="tempo-spec text-tempo-crimson block mb-4">Power Focus</span>
                <h1 className="tempo-headline text-5xl md:text-6xl lg:text-7xl mb-6">
                  The Ace
                </h1>
                <p className="tempo-body text-muted-foreground text-lg">
                  Engineered for dominance. The Ace delivers maximum power for players 
                  who dictate points with aggressive drives and put-away shots.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="tempo-spec text-foreground">Key Features</h2>
                <ul className="tempo-body space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">—</span>
                    Heavyweight construction at 8.4 oz for momentum
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">—</span>
                    Thin 13mm core for explosive pop
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">—</span>
                    High-density polymer for maximum energy transfer
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">—</span>
                    Elongated handle for two-handed backhand leverage
                  </li>
                </ul>
              </motion.div>

              {/* Specs Table */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="tempo-spec text-foreground mb-6">Specifications</h2>
                <div className="border-t border-border">
                  {specs.map((spec, index) => (
                    <div 
                      key={spec.label}
                      className="flex justify-between py-4 border-b border-border"
                    >
                      <span className="tempo-spec text-muted-foreground">{spec.label}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Buy Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-8 border-t border-foreground"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <span className="tempo-spec text-muted-foreground block mb-1">Price</span>
                    <span className="tempo-headline text-4xl">$219</span>
                  </div>
                  <TempoButton variant="primary" onClick={() => alert("Added to cart!")}>
                    Add to Cart
                  </TempoButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default TheAce;
