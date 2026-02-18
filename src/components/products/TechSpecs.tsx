import { motion } from "framer-motion";

interface Spec {
  label: string;
  value: string;
  description?: string;
}

interface TechSpecsProps {
  headline?: string;
  description?: string;
  specs: Spec[];
  variant?: "full" | "grid-only";
}

const TechSpecs = ({ headline, description, specs, variant = "full" }: TechSpecsProps) => {
  return (
    <section id="tech-specs" className={variant === "full" ? "py-24 lg:py-32" : "py-0"}>
      {/* Banner Headline - Only show in full variant */}
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

      {/* Long Description - Only show in full variant */}
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

      {/* THE SPEC GRID (3x2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specs.map((spec, index) => (
          <motion.div
            key={spec.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="aspect-square flex flex-col items-center justify-center p-6 text-center bg-tempo-mist transition-colors duration-300 hover:bg-[#E0E0E0] group cursor-default"
          >
            <span className="tempo-spec text-muted-foreground block mb-3 transition-colors duration-300 group-hover:text-tempo-navy">
              {spec.label}
            </span>
            <span className="text-xl lg:text-2xl font-medium block transition-colors duration-300 group-hover:text-tempo-navy">
              {spec.value}
            </span>
            {spec.description && (
              <span className="text-sm text-muted-foreground mt-2 max-w-[200px] transition-colors duration-300 group-hover:text-tempo-navy/70">
                {spec.description}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechSpecs;
