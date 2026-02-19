import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, LayoutGrid } from "lucide-react";

import iconHoneycomb from "@/assets/icon-honeycomb.png";
import iconSurface from "@/assets/icon-surface.png";
import iconTapeMeasure from "@/assets/icon-tape-measure.png";
import iconBalance from "@/assets/icon-balance.png";
import iconPaddle from "@/assets/icon-paddle.png";

export type SpecIconKey = "honeycomb" | "surface" | "tape-measure" | "balance" | "paddle" | "warranty";

const iconMap: Record<SpecIconKey, { large: React.ReactNode; small: React.ReactNode }> = {
  honeycomb: {
    large: <img src={iconHoneycomb} alt="Core" className="w-14 h-14 object-contain invert opacity-60" />,
    small: <img src={iconHoneycomb} alt="Core" className="w-7 h-7 object-contain invert opacity-50" />,
  },
  surface: {
    large: <img src={iconSurface} alt="Surface" className="w-14 h-14 object-contain invert opacity-60" />,
    small: <img src={iconSurface} alt="Surface" className="w-7 h-7 object-contain invert opacity-50" />,
  },
  "tape-measure": {
    large: <img src={iconTapeMeasure} alt="Dimensions" className="w-14 h-14 object-contain invert opacity-60" />,
    small: <img src={iconTapeMeasure} alt="Dimensions" className="w-7 h-7 object-contain invert opacity-50" />,
  },
  balance: {
    large: <img src={iconBalance} alt="Weight" className="w-14 h-14 object-contain invert opacity-60" />,
    small: <img src={iconBalance} alt="Weight" className="w-7 h-7 object-contain invert opacity-50" />,
  },
  paddle: {
    large: <img src={iconPaddle} alt="Grip" className="w-14 h-14 object-contain invert opacity-60" />,
    small: <img src={iconPaddle} alt="Grip" className="w-7 h-7 object-contain invert opacity-50" />,
  },
  warranty: {
    large: <ShieldCheck className="w-14 h-14 opacity-60" strokeWidth={1.2} />,
    small: <ShieldCheck className="w-7 h-7 opacity-50" strokeWidth={1.2} />,
  },
};

export interface Spec {
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

// Individual card — index 0 auto-flips on scroll; rest are click-to-flip
const SpecCard = ({
  spec,
  isFirst,
  dark,
  forceFlip,
}: {
  spec: Spec;
  isFirst: boolean;
  dark: boolean;
  forceFlip: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [flipped, setFlipped] = useState(false);

  // First card: auto-flip after a pause so the user can register the icon
  useEffect(() => {
    if (!isFirst || !isInView) return;
    const t = setTimeout(() => setFlipped(true), 1600);
    return () => clearTimeout(t);
  }, [isFirst, isInView]);

  // "Reveal All" override
  useEffect(() => {
    if (forceFlip) setFlipped(true);
  }, [forceFlip]);

  const handleClick = () => setFlipped((f) => !f);

  const bgFront = dark ? "#1e3a5f" : "#EEECEA";
  const bgBack  = dark ? "#245080" : "#E3E1DE";

  return (
    <div
      ref={ref}
      className="min-h-[300px] cursor-pointer select-none"
      style={{ perspective: "1200px" }}
      onClick={handleClick}
      title={flipped ? "Click to flip back" : "Click to reveal"}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: "preserve-3d", width: "100%", height: "100%", position: "relative" }}
      >
        {/* FRONT — icon only */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl overflow-hidden"
          style={{ backgroundColor: bgFront, backfaceVisibility: "hidden" }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, transparent 70%)",
            }}
          />
          {spec.icon && (
            <div className={`relative z-10 ${dark ? "text-tempo-bone" : "text-tempo-carbon"}`}>
              {iconMap[spec.icon].large}
            </div>
          )}
        </div>

        {/* BACK — small icon + label + value + description */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-6 text-center rounded-2xl overflow-hidden"
          style={{
            backgroundColor: bgBack,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px opacity-30"
            style={{ backgroundColor: dark ? "#fff" : "#1A1A1A" }}
          />
          {spec.icon && (
            <div className={`mb-0.5 ${dark ? "text-tempo-bone" : "text-tempo-carbon"}`}>
              {iconMap[spec.icon].small}
            </div>
          )}
          <span className={`tempo-spec block text-[10px] tracking-widest ${dark ? "text-tempo-bone/60" : "text-muted-foreground"}`}>
            {spec.label}
          </span>
          <span className={`text-base lg:text-lg font-semibold block leading-tight ${dark ? "text-white" : "text-tempo-carbon"}`}>
            {spec.value}
          </span>
          {spec.description && (
            <span className={`text-xs leading-relaxed max-w-[180px] mt-1 ${dark ? "text-tempo-bone/55" : "text-tempo-carbon/55"}`}>
              {spec.description}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const TechSpecs = ({ headline, description, specs, variant = "full", dark = false }: TechSpecsProps) => {
  const [revealAll, setRevealAll] = useState(false);

  return (
    <section id="tech-specs" className={variant === "full" ? "py-24 lg:py-32" : "py-0"}>
      {variant === "full" && headline && (
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="tempo-headline text-4xl md:text-5xl lg:text-7xl text-center mb-6"
        >
          {headline}
        </motion.h2>
      )}

      {/* Reveal All button */}
      {variant === "full" && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <button
            onClick={() => setRevealAll((v) => !v)}
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-transparent px-5 py-2 text-xs uppercase tracking-widest font-medium text-foreground/60 transition-all duration-300 hover:border-foreground/50 hover:text-foreground"
          >
            <LayoutGrid className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            {revealAll ? "Reset Cards" : "Reveal All"}
          </button>
        </motion.div>
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

      {/* 2 rows × 3 columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
        {specs.map((spec, index) => (
          <SpecCard
            key={spec.label}
            spec={spec}
            isFirst={index === 0}
            dark={dark}
            forceFlip={revealAll}
          />
        ))}
      </div>
    </section>
  );
};

export default TechSpecs;
