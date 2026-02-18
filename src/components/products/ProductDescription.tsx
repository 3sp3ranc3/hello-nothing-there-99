import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ProductDescriptionProps {
  onScrollToSpecs?: () => void;
}

const ProductDescription = ({ onScrollToSpecs }: ProductDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4">
      {/* Default visible description */}
      <p className="text-sm text-tempo-carbon/80 leading-relaxed">
        We designed The Architect for players who demand complete control over every element of their game. This isn't just another paddle; it's a meticulously engineered tool built on the principles of balance, precision, and intelligent design. Every specification, every material choice, every dimensional detail exists for one purpose: to give you the technical edge when it matters most.
      </p>

      {/* Expandable content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 text-sm text-tempo-carbon/80 leading-relaxed pt-2 max-w-prose">
              <p className="font-semibold text-tempo-carbon">Why choose The Architect?</p>

              <ul className="space-y-1.5 list-disc list-inside text-tempo-carbon/70">
                <li>Engineered for players who think strategically and execute precisely</li>
                <li>Delivers exceptional spin generation with tournament-grade durability</li>
                <li>Built with next-generation core technology for optimal energy transfer</li>
                <li>Designed for versatile, all-court play with extended grip options</li>
              </ul>

              <div>
                <p className="font-semibold text-tempo-carbon mb-1">T700 Carbon Fiber with Sandblasted Texture</p>
                <p>The face of The Architect features aerospace-grade T700 carbon fiber, known for its exceptional strength-to-weight ratio and consistent response characteristics. We've finished the surface with a sandblasted texture that creates microscopic grip points across the entire face, generating reliable spin on every shot without compromising USAP compliance. This isn't gimmick texture; it's engineered friction that lasts.</p>
              </div>

              <div>
                <p className="font-semibold text-tempo-carbon mb-1">TRUFOAM 4th Generation Core Technology</p>
                <p>At the core of The Architect lies TRUFOAM, a fourth-generation polymer honeycomb engineered for maximum energy return and extended dwell time. Unlike traditional cores that degrade quickly under competitive play, TRUFOAM maintains its structural integrity and responsive feel thousands of rallies in. The uniform cell structure creates a larger sweet spot and more predictable ball response, giving you the confidence to place shots exactly where you intend them.</p>
              </div>

              <div>
                <p className="font-semibold text-tempo-carbon mb-1">130mm Extended Grip for Two-Handed Versatility</p>
                <p>The Architect features a 130mm elongated grip designed specifically for modern, aggressive play styles. Whether you're driving two-handed backhands with topspin or extending your reach on defensive digs, the extra length gives you options without sacrificing one-handed control. The grip length isn't arbitrary; it's the optimal dimension for players who want adaptability without compromise.</p>
              </div>

              <div>
                <p className="font-semibold text-tempo-carbon mb-1">Perfectly Centered Balance</p>
                <p>Through precise material placement and weight distribution, The Architect achieves a true center balance point. This creates consistent swing weight and paddle head speed across all shot types, from fast hands at the kitchen to full baseline drives. You won't need to adjust your mechanics; the paddle adjusts to you.</p>
              </div>

              <div>
                <p className="font-semibold text-tempo-carbon mb-1">Designed with Intention. Built for Performance.</p>
                <p>Every detail of The Architect, from the matte finish to the minimalist aesthetic, reflects our philosophy: remove everything unnecessary, perfect everything essential. This paddle doesn't shout. It performs.</p>
              </div>

              <p className="italic text-tempo-carbon/60">
                Control the tempo. Design your game.<br />
                Experience The Architect and play with precision.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action row */}
      <div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 px-8 border border-tempo-carbon/20 rounded-full text-xs uppercase tracking-widest font-medium text-tempo-carbon/60 hover:text-tempo-carbon hover:border-tempo-carbon/40 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <span>{isExpanded ? "Less" : "Read More"}</span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.span>
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
