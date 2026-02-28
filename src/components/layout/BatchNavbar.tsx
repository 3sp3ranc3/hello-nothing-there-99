import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { Menu, X } from "lucide-react";

const BatchNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isBatch001 = location.pathname === "/batch-001";
  const isBatch002 = location.pathname === "/products/the-architect";
  const isAbout = location.pathname === "/about";

  const isHome = location.pathname === "/";
  const isDark = isHome && !scrolled;

  const textColor = isDark ? "text-white" : "text-tempo-carbon";
  const textMuted = isDark ? "text-white/60" : "text-tempo-carbon/50";
  const textHover = isDark ? "hover:text-white" : "hover:text-tempo-carbon";

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-tempo-bone backdrop-blur-md border-b border-tempo-vapor"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-12 lg:h-14">
            {/* Logo */}
            <Link
              to="/"
              className={`text-base lg:text-lg font-black tracking-[0.2em] uppercase transition-colors ${textColor}`}
            >
              TEMPO
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              <Link
                to="/products/the-architect"
                className={`relative flex items-center gap-2 py-2 transition-colors duration-300 ${
                  isBatch002 ? textColor : `${textMuted} ${textHover}`
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] lg:text-xs uppercase tracking-[0.12em] font-medium whitespace-nowrap">
                  Batch 002
                </span>
                {isBatch002 && (
                  <div className={`absolute -bottom-0.5 left-0 right-0 h-0.5 ${isDark ? "bg-white" : "bg-tempo-carbon"}`} />
                )}
              </Link>

              <Link
                to="/batch-001"
                className={`relative flex items-center gap-2 py-2 transition-colors duration-300 ${
                  isBatch001 ? textColor : `${textMuted} ${textHover}`
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="text-[10px] lg:text-xs uppercase tracking-[0.12em] font-medium whitespace-nowrap">
                  Batch 001
                </span>
                {isBatch001 && (
                  <div className={`absolute -bottom-0.5 left-0 right-0 h-0.5 ${isDark ? "bg-white" : "bg-tempo-carbon"}`} />
                )}
              </Link>

              <Link
                to="/about"
                className={`relative py-2 transition-colors duration-300 ${
                  isAbout ? textColor : `${textMuted} ${textHover}`
                }`}
              >
                <span className="text-[10px] lg:text-xs uppercase tracking-[0.12em] font-medium whitespace-nowrap">
                  About
                </span>
                {isAbout && (
                  <div className={`absolute -bottom-0.5 left-0 right-0 h-0.5 ${isDark ? "bg-white" : "bg-tempo-carbon"}`} />
                )}
              </Link>
            </div>

            {/* Right Side: Cart + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className={`transition-colors ${textMuted} ${textHover}`}>
                <CartDrawer />
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden transition-colors ${textColor}`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t ${
              scrolled
                ? "bg-tempo-bone border-tempo-vapor"
                : "bg-tempo-carbon/80 backdrop-blur-md border-white/10"
            }`}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link
                to="/products/the-architect"
                className={`flex items-center gap-2 py-2 transition-colors ${
                  isDark ? "text-white/80" : "text-tempo-carbon/70"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs uppercase tracking-[0.12em] font-medium">
                  Batch 002
                </span>
              </Link>

              <Link
                to="/batch-001"
                className={`flex items-center gap-2 py-2 transition-colors ${
                  isDark ? "text-white/80" : "text-tempo-carbon/70"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="text-xs uppercase tracking-[0.12em] font-medium">
                  Batch 001
                </span>
              </Link>

              <Link
                to="/about"
                className={`py-2 transition-colors ${
                  isDark ? "text-white/80" : "text-tempo-carbon/70"
                }`}
              >
                <span className="text-xs uppercase tracking-[0.12em] font-medium">
                  About
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default BatchNavbar;
