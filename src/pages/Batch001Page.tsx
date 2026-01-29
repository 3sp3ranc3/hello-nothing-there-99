import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";

const testimonials = [
  {
    tag: "Mis-hits / Sweet Spot",
    quote: "The sweet spot is honestly massive. I've hit many off-centre shots that should've been dead but popped nicely over the net. Super forgiving if your aim isn't perfect like mine - it almost feels like cheating. So glad I gave that paddle a shot.",
    name: "Oliver",
  },
  {
    tag: "Spin",
    quote: "I bought this as a backup for my $300 tournament paddle but ended up making it the only one I reach for. The amount of spin you can get with this is crazy, the face bites so hard it feels like you have a whole extra second to place the ball. It just gives you that locked-in confidence that usually takes weeks to build with a new paddle.",
    name: "Lachlan",
  },
  {
    tag: "Dinks",
    quote: "I'm so glad my partner put me onto Tempo. Honestly feels like a hidden gem that hasn't blown up yet. I used to tense up every time I had to dink because I'd always pop it up and eat a smash, but the touch on this feels surgical. It really lets me neutralise the pace and keep my dinks unattackable.",
    name: "Rachel",
  },
  {
    tag: "Manoeuvrability",
    quote: "The swing weight on this is dialled in perfectly. It cuts through the air fast enough to keep up in rapid-fire kitchen rallies, but it still feels very substantial on contact. Plus, the vibration dampening is top tier - I can play 5 sets straight and have zero arm fatigue.",
    name: "Eric",
  },
];

const Batch001Page = () => {
  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />

      {/* Hero Banner - Gold/Sold Out Aesthetic */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-amber-100 to-tempo-bone">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-amber-200/50 flex items-center justify-center">
                <Package className="w-10 h-10 text-amber-700" />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-200/50 border border-amber-300 rounded-full text-sm uppercase tracking-widest font-medium text-amber-800 mb-6">
              Batch 001 — Allocation Exhausted
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-tempo-carbon mb-4" style={{ lineHeight: 1 }}>
              The Architect
            </h1>
            <p className="text-xl md:text-2xl text-tempo-carbon/60 mb-4">
              Batch 001
            </p>

            {/* Status */}
            <p className="text-lg text-amber-700 font-medium mb-8">
              Closed December 31st · All 100 units delivered
            </p>

            {/* Message */}
            <div className="max-w-xl mx-auto mb-10">
              <p className="text-tempo-carbon/80 text-lg leading-relaxed">
                Batch 002 now available for preorder with improvements based on 
                invaluable feedback from Batch 001 players.
              </p>
            </div>

            {/* CTA */}
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-tempo-carbon text-tempo-bone text-sm uppercase tracking-widest font-bold rounded-full hover:bg-tempo-navy transition-colors"
              >
                View Batch 002
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials from Batch 001 */}
      <section className="py-20 lg:py-32 bg-tempo-bone">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-tempo-carbon/60 mb-4 block">
              What Batch 001 Players Said
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-tempo-carbon">
              Real Feedback
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-8 lg:p-10 rounded-lg border border-tempo-carbon/5 shadow-sm"
              >
                <span className="inline-block px-3 py-1 bg-tempo-navy/10 text-tempo-navy text-xs uppercase tracking-widest font-medium rounded-full mb-6">
                  {testimonial.tag}
                </span>

                <blockquote className="text-lg lg:text-xl text-tempo-carbon leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <p className="text-tempo-carbon/70 font-medium">
                  — {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-tempo-carbon/60 mb-6">
              Based on this feedback, we made Batch 002 even better.
            </p>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-tempo-carbon text-tempo-bone text-sm uppercase tracking-widest font-bold rounded-full hover:bg-tempo-navy transition-colors"
              >
                See What's New in Batch 002
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default Batch001Page;
