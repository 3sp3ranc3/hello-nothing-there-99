import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartDrawer } from "@/components/ui/CartDrawer";

const BatchNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
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
  const isBatch002 = location.pathname === "/products/the-architect";
  const isHome = location.pathname === "/";

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-[#e8e6e0] border-b border-tempo-carbon/10 shadow-sm" 
            : "bg-[#e8e6e0]/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Links to Homepage */}
            <Link
              to="/"
              className={`text-lg lg:text-xl font-black tracking-[0.2em] uppercase transition-colors ${
                isHome ? "text-tempo-navy" : "text-tempo-carbon hover:text-tempo-navy"
              }`}
            >
              TEMPO
            </Link>

            {/* Batch Navigation */}
            <div className="flex items-center gap-6 lg:gap-10">
              {/* Batch 001 - Exhausted */}
              <Link
                to="/batch-001"
                className={`relative flex flex-col items-center px-2 lg:px-4 py-2 transition-all duration-300 ${
                  isBatch001 
                    ? "text-tempo-carbon" 
                    : "text-tempo-carbon/60 hover:text-tempo-carbon"
                }`}
              >
                <span className="text-[10px] lg:text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap">
                  Architect Batch 001
                </span>
                <span className="mt-1 px-2 py-0.5 bg-tempo-crimson text-tempo-bone text-[8px] lg:text-[9px] rounded-full font-semibold tracking-wider">
                  EXHAUSTED
                </span>
              </Link>

              {/* Batch 002 - Product Page */}
              <Link
                to="/products/the-architect"
                className={`relative flex flex-col items-center px-2 lg:px-4 py-2 transition-all duration-300 ${
                  isBatch002 
                    ? "text-tempo-navy" 
                    : "text-tempo-carbon/60 hover:text-tempo-carbon"
                }`}
              >
                <span className="text-[10px] lg:text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap">
                  Architect Batch 002
                </span>
                {isBatch002 && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-tempo-navy" />
                )}
              </Link>
            </div>

            {/* Cart */}
            <div className="w-20 lg:w-24 flex justify-end">
              <CartDrawer />
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default BatchNavbar;
