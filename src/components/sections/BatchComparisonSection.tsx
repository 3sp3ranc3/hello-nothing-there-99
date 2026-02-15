import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const BatchComparisonSection = () => {
  return (
    <section className="py-12 lg:py-16 border-y border-tempo-carbon/10">
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
        <div className="grid md:grid-cols-2 gap-0 md:divide-x divide-tempo-carbon/10">
          {/* Batch 001 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true }}
            className="text-center py-10 px-8 lg:px-14 border-b md:border-b-0 border-tempo-carbon/10"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-tempo-carbon/40 mb-3 block">
              Batch 001
            </span>

            <h3 className="text-xl lg:text-2xl font-black uppercase tracking-wide text-tempo-carbon mb-6">
              Sydney Exclusive
            </h3>

            <p className="text-sm text-tempo-carbon/50 leading-relaxed mb-2">100 units · Limited run</p>
            <p className="text-sm text-tempo-carbon/50 leading-relaxed mb-2">Athlete-tested in Sydney</p>
            <p className="text-sm text-tempo-carbon/50 leading-relaxed mb-8">Foundation build</p>

            <span className="inline-block px-5 py-2 rounded-full border border-tempo-crimson/20 text-xs uppercase tracking-widest font-medium text-tempo-crimson/50">
              Allocation Exhausted
            </span>
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
            <p className="text-sm text-tempo-carbon/70 leading-relaxed mb-8">Open to all players nationwide</p>

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
