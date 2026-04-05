import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface StickyReserveButtonProps {
  onAddToCart: () => void | Promise<void>;
  isLoading: boolean;
  disabled: boolean;
}

const StickyReserveButton = forwardRef<HTMLDivElement, StickyReserveButtonProps>(({ onAddToCart, isLoading, disabled }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 md:hidden"
        >
          <motion.button
            onClick={onAddToCart}
            disabled={isLoading || disabled}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-4 bg-tempo-carbon text-tempo-bone text-sm uppercase tracking-widest font-bold rounded-full shadow-lg hover:bg-tempo-navy transition-colors disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Reserve Now — $105"}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

StickyReserveButton.displayName = "StickyReserveButton";

export default StickyReserveButton;
