import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

interface ProductInfoProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  onViewSpecs: () => void;
}

const ProductInfo = ({ title, description, price, features, onViewSpecs }: ProductInfoProps) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="pl-8 lg:pl-12 h-full flex flex-col justify-center space-y-6">
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

      {/* Price Block */}
      <div className="space-y-2">
        <p className="text-3xl font-semibold">{price}</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tempo-stock" />
          <span className="text-sm text-muted-foreground">Currently in Stock</span>
        </div>
      </div>

      {/* Key Features */}
      <ul className="space-y-2 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-foreground/60">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* View Specs Button */}
      <button
        onClick={onViewSpecs}
        className="w-full py-3 px-6 border border-foreground rounded-full text-sm uppercase tracking-widest font-medium transition-colors duration-300 hover:border-tempo-navy hover:text-tempo-navy"
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
          isButtonHovered ? "bg-tempo-navy text-background" : "bg-foreground text-background"
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
  );
};

export default ProductInfo;
