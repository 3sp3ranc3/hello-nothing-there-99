import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const BatchComparisonSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-tempo-carbon/50 mb-4">
            The Journey
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide text-tempo-carbon">
            From Batch 001 to Batch 002
          </h2>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0">
          {/* Batch 001 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true }}
            className="text-center py-10 px-8 lg:px-14"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-tempo-carbon/40 mb-3 block">
              Batch 001
            </span>

            <h3 className="text-xl lg:text-2xl font-black uppercase tracking-wide text-tempo-carbon mb-6">
              Sydney Exclusive
            </h3>

            <p className="text-sm text-tempo-carbon/50 leading-relaxed mb-2">100 units · Limited run</p>
            <p className="text-sm text-tempo-carbon/50 leading-relaxed mb-2">Athlete-tested in Sydney</p>
            <p className="text-sm text-tempo-carbon/50 leading-relaxed mb-4">Foundation build</p>
            <p className="text-lg font-bold text-tempo-carbon/40 mb-8">$245</p>

            <span className="inline-block px-5 py-2 rounded-full border border-tempo-crimson/20 text-xs uppercase tracking-widest font-medium text-tempo-crimson/50">
              Allocation Exhausted
            </span>
          </motion.div>

          {/* Divider + Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            viewport={{ once: true }}
            className="flex items-center justify-center py-6 md:py-0 relative"
          >
            {/* Vertical line on desktop */}
            <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-px w-px bg-tempo-carbon/10" />
            {/* Horizontal line on mobile */}
            <div className="md:hidden absolute inset-x-0 top-1/2 -translate-y-px h-px bg-tempo-carbon/10" />

            <div className="relative z-10 w-10 h-10 rounded-full border border-tempo-carbon/15 bg-tempo-bone hidden md:flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-tempo-carbon/40" />
            </div>
            <div className="relative z-10 w-10 h-10 rounded-full border border-tempo-carbon/15 bg-tempo-bone flex items-center justify-center md:hidden">
              <ArrowDown className="w-4 h-4 text-tempo-carbon/40" />
            </div>
          </motion.div>

          {/* Batch 002 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            viewport={{ once: true }}
            className="text-center py-10 px-8 lg:px-14"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-tempo-navy mb-3 block">
              Batch 002
            </span>

            <h3 className="text-xl lg:text-2xl font-black uppercase tracking-wide text-tempo-carbon mb-6">
              National Release
            </h3>

            <p className="text-sm text-tempo-carbon/70 leading-relaxed mb-2">250 units · Enhanced build</p>
            <p className="text-sm text-tempo-carbon/70 leading-relaxed mb-2">Refined from 300+ hours of feedback</p>
            <p className="text-sm text-tempo-carbon/70 leading-relaxed mb-4">Open to all players nationwide</p>
            <p className="text-lg font-bold text-tempo-carbon mb-8">$135 <span className="text-xs font-medium text-tempo-carbon/40 line-through ml-1">$195</span></p>

            <Link to="/products/the-architect">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-6 py-2.5 rounded-full bg-tempo-navy text-tempo-bone text-xs uppercase tracking-widest font-medium cursor-pointer hover:bg-tempo-navy/90 transition-colors"
              >
                Available for Preorder
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BatchComparisonSection;
