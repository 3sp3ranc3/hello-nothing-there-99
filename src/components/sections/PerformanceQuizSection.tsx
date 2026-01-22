import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PerformanceQuizSection = () => {
  return (
    <Link to="/quiz" className="block">
      <motion.section 
        className="w-full border-y border-foreground cursor-pointer group transition-colors duration-300 hover:bg-foreground/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="tempo-container py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left - Text Content */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-foreground/60 tracking-widest uppercase">
                Algorithm V1.0
              </span>
              <h2 className="tempo-headline text-4xl md:text-5xl tracking-tight">
                Find Your Fit
              </h2>
              <p className="tempo-body text-muted-foreground max-w-md">
                Our engineers designed specific distinct weight distributions for different playstyles. 
                Answer 4 questions to identify your match.
              </p>
            </div>

            {/* Right - CTA Arrow */}
            <div className="flex items-center gap-4 lg:gap-6">
              <span className="tempo-spec text-foreground relative">
                Start Diagnostic
                <span className="absolute left-0 bottom-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight 
                className="w-6 h-6 text-foreground transition-transform duration-300 group-hover:translate-x-4" 
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </Link>
  );
};

export default PerformanceQuizSection;
