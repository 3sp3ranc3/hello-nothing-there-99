import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import MegaFooter from "@/components/layout/MegaFooter";
import TempoButton from "@/components/ui/TempoButton";

const TheAce = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Coming Soon Hero */}
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="tempo-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto"
          >
            <span className="tempo-spec text-tempo-crimson block mb-6">Power Focus</span>
            <h1 className="tempo-headline text-5xl md:text-6xl lg:text-7xl mb-6">
              THE ACE
            </h1>
            <p className="tempo-body text-muted-foreground text-lg md:text-xl mb-4">
              Coming Soon
            </p>
            <p className="tempo-body text-muted-foreground mb-12">
              We're crafting something special. Engineered for dominance with 
              maximum power for aggressive drives and put-away shots.
            </p>
            <Link to="/">
              <TempoButton variant="primary">
                Back to Home
              </TempoButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default TheAce;