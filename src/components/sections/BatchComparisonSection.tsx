import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const BatchComparisonSection = () => {
  return (
    <section className="py-20 lg:py-28 border-y border-tempo-carbon/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-tempo-carbon/50 mb-4">
            The Evolution
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide text-tempo-carbon">
            The Journey: From Batch 001 to Batch 002
          </h2>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Batch 001 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true }}
            className="border border-tempo-carbon/10 p-8 lg:p-10 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-tempo-carbon/10" />

            <span className="text-xs uppercase tracking-[0.2em] font-medium text-tempo-carbon/40 mb-6 block">
              Batch 001
            </span>

            <h3 className="text-xl lg:text-2xl font-black uppercase tracking-wide text-tempo-carbon mb-8">
              Sydney Athletes Exclusive
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-tempo-carbon/30 mt-2 flex-shrink-0" />
                <span className="text-tempo-carbon/60">100 units — limited run</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-tempo-carbon/30 mt-2 flex-shrink-0" />
                <span className="text-tempo-carbon/60">Sydney-only athlete testing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-tempo-carbon/30 mt-2 flex-shrink-0" />
                <span className="text-tempo-carbon/60">Foundation build</span>
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-tempo-carbon/10">
              <span className="inline-block px-5 py-2 rounded-full border border-tempo-carbon/20 text-xs uppercase tracking-widest font-medium text-tempo-carbon/40">
                Allocation Exhausted
              </span>
            </div>
          </motion.div>

          {/* Batch 002 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            viewport={{ once: true }}
            className="border border-tempo-carbon/10 p-8 lg:p-10 relative bg-tempo-carbon text-tempo-bone"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-tempo-navy" />

            <span className="text-xs uppercase tracking-[0.2em] font-medium text-tempo-bone/50 mb-6 block">
              Batch 002
            </span>

            <h3 className="text-xl lg:text-2xl font-black uppercase tracking-wide text-tempo-bone mb-8">
              National Release
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-tempo-navy mt-2 flex-shrink-0" />
                <span className="text-tempo-bone/70">250 units — limited run</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-tempo-navy mt-2 flex-shrink-0" />
                <span className="text-tempo-bone/70">Enhanced build quality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-tempo-navy mt-2 flex-shrink-0" />
                <span className="text-tempo-bone/70">67 of 250 units remaining</span>
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-tempo-bone/20">
              <Link to="/products/the-architect">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-6 py-2.5 rounded-full bg-tempo-bone text-tempo-carbon text-xs uppercase tracking-widest font-medium cursor-pointer hover:bg-white transition-colors"
                >
                  Available for Preorder Now
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BatchComparisonSection;
