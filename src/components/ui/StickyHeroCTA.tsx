import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * A floating CTA that appears in the bottom-right on desktop
 * when the hero's main CTA scrolls out of view (homepage only).
 */
const StickyHeroCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-50 hidden md:block"
        >
          <Link
            to="/products/the-architect"
            className="group relative inline-flex items-center bg-tempo-carbon text-tempo-bone rounded-full overflow-hidden shadow-xl hover:scale-[1.03] transition-transform duration-300"
          >
            <span className="px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] font-semibold">
              Pre-order now
            </span>
            <span className="px-5 py-3.5 text-sm font-bold tracking-tight border-l border-white/10">
              $119
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyHeroCTA;
