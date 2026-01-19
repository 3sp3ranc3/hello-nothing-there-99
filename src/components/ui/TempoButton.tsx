import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TempoButtonProps {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const TempoButton = ({ 
  variant = "primary", 
  children, 
  href, 
  onClick,
  className 
}: TempoButtonProps) => {
  const baseStyles = cn(
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm uppercase tracking-widest font-medium transition-all duration-300",
    variant === "primary" 
      ? "bg-foreground text-background hover:scale-105" 
      : "border border-foreground bg-transparent text-foreground hover:scale-105",
    className
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        <Link to={href} className={baseStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={baseStyles}
    >
      {children}
    </motion.button>
  );
};

export default TempoButton;
