import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const navLinks = [
    { name: "The Air", href: "/products/the-air" },
    { name: "The Architect", href: "/products/the-architect" },
    { name: "The Ace", href: "/products/the-ace" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="tempo-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="tempo-headline text-lg lg:text-xl tracking-[0.2em] hover:opacity-70 transition-opacity"
          >
            TEMPO
          </button>

          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="tempo-link text-sm uppercase tracking-widest font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Cart */}
          <button className="tempo-link text-sm uppercase tracking-widest font-medium">
            Cart (0)
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
