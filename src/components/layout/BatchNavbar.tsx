import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BatchNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      }
      
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isBatch001 = location.pathname === "/batch-001";
  const isBatch002 = location.pathname === "/" || location.pathname === "/products/the-architect";

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-tempo-carbon/95 backdrop-blur-md" 
            : "bg-tempo-carbon"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-tempo-bone text-lg lg:text-xl font-black tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
            >
              TEMPO
            </Link>

            {/* Batch Navigation */}
            <div className="flex items-center gap-2 lg:gap-6">
              {/* Batch 001 - Exhausted */}
              <Link
                to="/batch-001"
                className={`relative flex items-center gap-2 px-3 lg:px-4 py-2 text-xs lg:text-sm uppercase tracking-widest font-medium transition-all duration-300 ${
                  isBatch001 
                    ? "text-tempo-bone" 
                    : "text-tempo-bone/60 hover:text-tempo-bone/80"
                }`}
              >
                <span className="hidden sm:inline">Architect</span> Batch 001
                <span className="px-1.5 lg:px-2 py-0.5 bg-tempo-crimson text-tempo-bone text-[10px] lg:text-xs rounded-full font-semibold">
                  EXHAUSTED
                </span>
              </Link>

              {/* Batch 002 - Active */}
              <Link
                to="/"
                className={`relative px-3 lg:px-4 py-2 text-xs lg:text-sm uppercase tracking-widest font-medium transition-all duration-300 ${
                  isBatch002 
                    ? "text-tempo-bone" 
                    : "text-tempo-bone/60 hover:text-tempo-bone/80"
                }`}
              >
                <span className="hidden sm:inline">Architect</span> Batch 002
                {isBatch002 && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-tempo-bone"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </div>

            {/* Reserve CTA - Desktop */}
            <motion.a
              href="#reserve"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-tempo-bone text-tempo-carbon text-sm uppercase tracking-widest font-semibold rounded-full hover:bg-white transition-colors"
            >
              Reserve Now
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default BatchNavbar;
