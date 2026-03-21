import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface ProductInfoProps {
  title: string;
  description: string;
  price: string;
  retailPrice?: string;
  features: string[];
  onViewSpecs: () => void;
}

const ProductInfo = ({ title, description, price, retailPrice, features, onViewSpecs }: ProductInfoProps) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const isProgressInView = useInView(progressRef, { once: true });

  return (
    <div className="pl-0 lg:pl-12 h-full flex flex-col justify-center space-y-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="tempo-headline text-4xl md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h1>

      {/* Short Description */}
      <p className="tempo-body text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Quote */}
      <blockquote className="text-lg italic text-tempo-carbon/70 border-l-2 border-tempo-navy pl-4">
        "Not every shot is perfect. The Architect forgives the imperfect ones."
      </blockquote>

      {/* Price Block - Updated Format */}
      <div className="bg-tempo-navy/5 border border-tempo-navy/10 rounded-lg p-6 space-y-4">
        <span className="text-xs uppercase tracking-widest text-tempo-navy font-semibold">
          Batch 002 Preorder
        </span>
        
        <div className="space-y-1">
          {retailPrice && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Retail Price:</span>
              <span className="text-sm line-through text-muted-foreground">{retailPrice}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-sm text-tempo-carbon font-medium">Preorder Price:</span>
            <span className="text-3xl font-black text-tempo-navy">{price}</span>
          </div>
        </div>

        <p className="text-sm text-tempo-carbon/70">
          Our best paddle at our lowest price yet
        </p>

        {/* Stock Progress */}
        <div ref={progressRef} className="pt-4 border-t border-tempo-carbon/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-tempo-carbon/60">Batch 002 – Limited to 250 units</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-tempo-carbon/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isProgressInView ? { width: "27%" } : {}}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-full bg-tempo-stock rounded-full"
              />
            </div>
            <span className="text-sm font-semibold text-tempo-carbon">67/250</span>
          </div>
          <p className="text-xs text-tempo-carbon/50 mt-2">
            Closes February 28th or when allocation sells out
          </p>
        </div>
      </div>

      {/* Key Features */}
      <ul className="space-y-2 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-tempo-navy font-bold">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* View Specs Button */}
      <button
        onClick={onViewSpecs}
        className="w-full py-3 px-6 border border-tempo-carbon rounded-full text-sm uppercase tracking-widest font-medium transition-colors duration-300 hover:border-tempo-navy hover:text-tempo-navy"
      >
        View Specs
      </button>

      {/* Trust Signals */}
      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span>12-Month Warranty</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4" />
          <span>Free Shipping</span>
        </div>
      </div>

      {/* Primary CTA */}
      <motion.button
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 px-8 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-3 ${
          isButtonHovered ? "bg-tempo-navy text-tempo-bone" : "bg-tempo-carbon text-tempo-bone"
        }`}
      >
        <motion.span
          animate={{ x: isButtonHovered ? -8 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Reserve Now — {price}
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
  );
};

export default ProductInfo;
