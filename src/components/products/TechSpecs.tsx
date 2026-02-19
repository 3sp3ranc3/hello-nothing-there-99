import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import iconHoneycomb from "@/assets/icon-honeycomb.png";
import iconSurface from "@/assets/icon-surface.png";
import iconTapeMeasure from "@/assets/icon-tape-measure.png";
import iconBalance from "@/assets/icon-balance.png";
import iconPaddle from "@/assets/icon-paddle.png";

export type SpecIconKey = "honeycomb" | "surface" | "tape-measure" | "balance" | "paddle" | "warranty";

const iconMap: Record<SpecIconKey, React.ReactNode> = {
  honeycomb: <img src={iconHoneycomb} alt="Core" className="w-10 h-10 object-contain invert opacity-70" />,
  surface: <img src={iconSurface} alt="Surface" className="w-10 h-10 object-contain invert opacity-70" />,
  "tape-measure": <img src={iconTapeMeasure} alt="Dimensions" className="w-10 h-10 object-contain invert opacity-70" />,
  balance: <img src={iconBalance} alt="Weight" className="w-10 h-10 object-contain invert opacity-70" />,
  paddle: <img src={iconPaddle} alt="Grip" className="w-10 h-10 object-contain invert opacity-70" />,
  warranty: <ShieldCheck className="w-10 h-10 opacity-70" strokeWidth={1.5} />,
};

interface Spec {
  label: string;
  value: string;
  description?: string;
  icon?: SpecIconKey;
}

interface TechSpecsProps {
  headline?: string;
  description?: string;
  specs: Spec[];
  variant?: "full" | "grid-only";
  dark?: boolean;
}

const SpecCard = ({ spec, index, dark }: { spec: Spec; index: number; dark: boolean }) => {
  const [revealed, setRevealed] = useState(false);

  const isRevealed = revealed;

  return (
    <motion.div
      key={spec.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      onMouseEnter={() => setRevealed(true)}
      className={`aspect-[4/3] flex flex-col items-center justify-center p-6 text-center transition-colors duration-400 cursor-default relative overflow-hidden ${
        dark
          ? isRevealed
            ? "bg-[#245080]"
            : "bg-[#1e3a5f]"
          : isRevealed
          ? "bg-[#E0E0E0]"
          : "bg-tempo-mist"
      }`}
    >
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          /* DEFAULT STATE: icon + label + value */
          <motion.div
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center gap-3"
          >
            {spec.icon && (
              <div className={dark ? "text-tempo-bone/70" : "text-tempo-carbon/60"}>
                {iconMap[spec.icon]}
              </div>
            )}
            <span className={`tempo-spec block text-xs ${dark ? "text-tempo-bone/60" : "text-muted-foreground"}`}>
              {spec.label}
            </span>
            <span className={`text-xl lg:text-2xl font-medium block ${dark ? "text-tempo-bone" : "text-tempo-carbon"}`}>
              {spec.value}
            </span>
          </motion.div>
        ) : (
          /* REVEALED STATE: label + value + description */
          <motion.div
            key="revealed"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-2"
          >
            <span className={`tempo-spec block text-xs ${dark ? "text-tempo-bone/70" : "text-muted-foreground"}`}>
              {spec.label}
            </span>
            <span className={`text-lg lg:text-xl font-semibold block ${dark ? "text-white" : "text-tempo-navy"}`}>
              {spec.value}
            </span>
            {spec.description && (
              <span className={`text-xs mt-1 leading-relaxed max-w-[200px] ${dark ? "text-tempo-bone/60" : "text-tempo-carbon/60"}`}>
                {spec.description}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TechSpecs = ({ headline, description, specs, variant = "full", dark = false }: TechSpecsProps) => {
  return (
    <section id="tech-specs" className={variant === "full" ? "py-24 lg:py-32" : "py-0"}>
      {variant === "full" && headline && (
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="tempo-headline text-4xl md:text-5xl lg:text-7xl text-center mb-8"
        >
          {headline}
        </motion.h2>
      )}

      {variant === "full" && description && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="tempo-body text-muted-foreground text-center max-w-2xl mx-auto mb-16 lg:mb-24 leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specs.map((spec, index) => (
          <SpecCard key={spec.label} spec={spec} index={index} dark={dark} />
        ))}
      </div>
    </section>
  );
};

export default TechSpecs;
