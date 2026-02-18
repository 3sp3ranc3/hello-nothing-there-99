import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, ArrowRight } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";

const Batch001Page = () => {
  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />

      <section className="pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="max-w-[700px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                <Package className="w-8 h-8 text-amber-700" />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-200 rounded-full text-xs uppercase tracking-widest font-medium text-amber-800">
              Allocation Exhausted
            </div>

            {/* Headline */}
            <div>
              <h1 className="tempo-headline text-4xl md:text-5xl lg:text-6xl mb-2">
                The Architect
              </h1>
              <p className="text-lg text-tempo-carbon/40 font-light">Batch 001</p>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-tempo-carbon/15 mx-auto" />

            {/* Status */}
            <p className="text-sm uppercase tracking-widest text-amber-700 font-medium">
              Closed December 31st · 100 units delivered
            </p>

            {/* Message */}
            <p className="text-tempo-carbon/70 text-base leading-relaxed max-w-lg mx-auto">
              Batch 002 is now available for preorder — featuring refinements informed by real player feedback from our first 100 paddles.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/products/the-architect">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-tempo-carbon text-tempo-bone text-sm uppercase tracking-widest font-medium rounded-full hover:bg-tempo-navy transition-colors duration-300"
                >
                  View Batch 002
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default Batch001Page;
