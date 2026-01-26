import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const StickyReserveButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (roughly 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToReserve = () => {
    const reserveSection = document.getElementById("reserve");
    if (reserveSection) {
      reserveSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 md:hidden"
        >
          <motion.button
            onClick={scrollToReserve}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-4 bg-tempo-carbon text-tempo-bone text-sm uppercase tracking-widest font-bold rounded-full shadow-lg hover:bg-tempo-navy transition-colors"
          >
            Reserve Now — $135
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyReserveButton;
