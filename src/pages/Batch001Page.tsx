import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";

const testimonials = [
  {
    painPoint: "Mishits / Sweet Spot",
    quote: "Tired of mishits on fast exchanges? The 31% larger sweet spot means more forgiveness at the kitchen. My off-center hits now have control instead of popping up.",
    name: "Marcus Chen",
    rating: "4.5 DUPR",
    location: "Sydney, NSW",
  },
  {
    painPoint: "Dead Feel / Touch Shots",
    quote: "My old paddle felt dead on touch shots. The Architect's 16mm polymer honeycomb core maintains perfect feel while adding stability. My dinking game improved noticeably.",
    name: "Sarah Williams",
    rating: "4.2 DUPR",
    location: "Bondi, NSW",
  },
  {
    painPoint: "Arm Fatigue / Value",
    quote: "After long sessions, my arm would ache. The optimized weight distribution plus the center hole design reduces strain significantly. And at $135 vs $200+ paddles? No-brainer upgrade.",
    name: "James Park",
    rating: "4.0 DUPR",
    location: "Melbourne, VIC",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  {testimonial.painPoint}
                </span>

                <blockquote className="text-lg lg:text-xl text-tempo-carbon leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-tempo-carbon/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-tempo-carbon">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-tempo-carbon">{testimonial.name}</p>
                    <p className="text-sm text-tempo-carbon/60">
                      {testimonial.rating} · {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-tempo-carbon/5">
                  <span className="flex items-center gap-2 text-xs text-tempo-stock">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Batch 001 Owner
                  </span>
                </div>
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
