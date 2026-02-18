import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const principles = [
  {
    title: "Uncompromising Materials",
    desc: "We compete on quality, not cost-cutting. If there's a better material available, we use it—even if it's harder to source or more expensive to work with.",
  },
  {
    title: "Honest Pricing",
    desc: "Premium performance shouldn't require premium income. By manufacturing in controlled batches and selling direct, we pass the savings to you. Simple as that.",
  },
  {
    title: "Continuous Evolution",
    desc: "The game is moving forward. So are we. We're constantly testing, iterating, and improving—because good enough isn't good enough.",
  },
];

const AboutPage = () => {
  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pb-28 px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.2em] text-tempo-carbon/50 mb-6 block"
          >
            About Tempo
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-8 text-tempo-carbon"
          >
            We Don't Believe You Should Choose Between Premium and Affordable
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-tempo-carbon/70 max-w-[600px] leading-relaxed"
          >
            Tempo Pickleball started in Sydney with a straightforward observation: the best paddles were inaccessible to most players, and the affordable ones were built with compromises we couldn't accept.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-tempo-carbon/70 max-w-[600px] leading-relaxed mt-6 italic"
          >
            So we asked ourselves—what if we just built it differently?
          </motion.p>
        </div>
      </section>

      {/* The Direct Approach */}
      <section className="py-20 lg:py-28 px-6 border-t border-tempo-carbon/10">
        <div className="max-w-[900px] mx-auto">
          <motion.div {...sectionAnim}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide mb-8 text-tempo-carbon">
              The Direct Approach
            </h2>
            <div className="space-y-6 max-w-[600px]">
              <p className="text-tempo-carbon/70 text-base md:text-lg leading-relaxed">
                We source the same materials the premium brands use. Aerospace-grade T700 carbon fiber. Fourth-generation polymer cores. Tournament-spec construction. Then we cut out everything that inflates price without improving performance: retail markup, warehouse overhead, flashy sponsorships, expensive approval fees.
              </p>
              <p className="text-tempo-carbon text-base md:text-lg leading-relaxed font-medium">
                The result? Paddles engineered to the highest standard, priced like we actually want you to buy them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Built by Players */}
      <section className="py-20 lg:py-28 px-6 bg-tempo-carbon text-tempo-bone">
        <div className="max-w-[900px] mx-auto">
          <motion.div {...sectionAnim}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide mb-8">
              Built by Players, for Players
            </h2>
            <div className="space-y-6 max-w-[600px]">
              <p className="text-tempo-bone/70 text-base md:text-lg leading-relaxed">
                Our team includes engineers, materials specialists, and competitive players who've spent years dissecting what makes a paddle truly perform. We don't design for marketing claims or aesthetic trends. We design for the feeling of a perfectly placed third shot drop, the confidence of a two-handed backhand drive, the control that comes from knowing exactly where the ball will go.
              </p>
              <p className="text-tempo-bone/80 text-base md:text-lg leading-relaxed font-medium">
                Every specification exists for a reason. Every material choice is intentional. Nothing is arbitrary.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.h2
            {...sectionAnim}
            className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide mb-16 text-tempo-carbon"
          >
            Our Principles
          </motion.h2>
          <div className="space-y-0">
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="py-10 border-b border-tempo-carbon/10 first:border-t"
              >
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide mb-4 text-tempo-carbon">
                  {item.title}
                </h3>
                <p className="text-tempo-carbon/70 text-base md:text-lg leading-relaxed max-w-[550px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us + CTA */}
      <section className="py-20 lg:py-28 px-6 border-t border-tempo-carbon/10">
        <div className="max-w-[900px] mx-auto">
          <motion.div {...sectionAnim} className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide mb-8 text-tempo-carbon">
              Join Us
            </h2>
            <div className="space-y-6 max-w-[600px]">
              <p className="text-tempo-carbon/70 text-base md:text-lg leading-relaxed">
                We're not trying to be the biggest paddle brand. We're trying to be the one players trust when performance actually matters. When you're working on your game, pushing your limits, competing at your highest level—that's when Tempo shows up.
              </p>
              <p className="text-tempo-carbon text-base md:text-lg leading-relaxed font-medium italic">
                This is just the beginning.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/products/the-architect"
              className="inline-flex items-center gap-3 bg-tempo-carbon text-tempo-bone px-10 py-4 
                       uppercase tracking-widest font-medium text-sm rounded-full
                       hover:scale-105 transition-all duration-300"
            >
              Reserve Your Paddle
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default AboutPage;
