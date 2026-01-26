import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FounderStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FounderStoryModal = ({ isOpen, onClose }: FounderStoryModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-tempo-carbon/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-tempo-bone rounded-lg z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-tempo-carbon/60 hover:text-tempo-carbon transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-tempo-carbon mb-8">
                Why I Built The Architect
              </h2>

              <div className="space-y-6 text-tempo-carbon/80 text-base leading-relaxed">
                <p>
                  I started playing pickleball in 2022. Within six months I was hooked—playing 
                  4x per week, entering tournaments, obsessed with improving.
                </p>

                <p>
                  Like most players, I went down the paddle rabbit hole. Bought a $79 Amazon 
                  paddle. Upgraded to a $140 mid-tier. Then a $199 JOOLA Perseus.
                </p>

                <p className="font-semibold text-tempo-carbon">
                  Here's what frustrated me: The $199 paddle was MAYBE 10% better than the $140. 
                  But it cost 42% more.
                </p>

                <p>
                  I thought: "What if we made a paddle with premium materials—real T700 carbon 
                  fiber, proper 16mm core, professional-grade construction—but sold it direct?"
                </p>

                <ul className="space-y-2 pl-6">
                  <li className="list-disc">No retail markup.</li>
                  <li className="list-disc">No warehouse storage.</li>
                  <li className="list-disc">No distributor cuts.</li>
                </ul>

                <p className="font-semibold text-tempo-carbon">
                  Just honest pricing for honest performance.
                </p>

                <p>
                  That's the Architect. It's the paddle I wanted to exist when I was researching 
                  upgrades—premium materials, transparent pricing, backed on real testing and 
                  player feedback.
                </p>

                <p>
                  It's built for players like you who want serious performance without paying 
                  for brand tax.
                </p>

                <p className="text-tempo-navy font-medium">
                  If that resonates, I'd be honored to have you join Batch 002.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-10 pt-8 border-t border-tempo-carbon/10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-tempo-carbon/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-tempo-carbon">AC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-tempo-carbon italic text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                      Alex Chen
                    </p>
                    <p className="text-sm text-tempo-carbon/60">
                      Founder & 4.0 rated player who still mishits occasionally
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FounderStoryModal;
