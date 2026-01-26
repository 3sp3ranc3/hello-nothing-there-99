import { motion } from "framer-motion";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";

const AboutPage = () => {
  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />
      
      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-widest text-tempo-carbon/60 mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-8 text-tempo-carbon"
          >
            ENGINEERED FOR<br />THE MODERN GAME
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-tempo-carbon/70 max-w-2xl leading-relaxed"
          >
            Tempo was born from a simple frustration: pickleball paddles weren't keeping up with the athletes using them. 
            We set out to change that.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 border-t border-tempo-carbon/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase mb-6 text-tempo-carbon">
              PRECISION IS POWER
            </h2>
            <p className="text-tempo-carbon/70 leading-relaxed mb-4">
              Every Tempo paddle starts with a question: what does the athlete need? Not what's easiest to manufacture. 
              Not what's cheapest to ship. What will make you a better player?
            </p>
            <p className="text-tempo-carbon/70 leading-relaxed">
              Our engineering team includes former aerospace designers, materials scientists, and professional athletes. 
              Together, we've redefined what a pickleball paddle can be.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-tempo-carbon/5 flex items-center justify-center"
          >
            <span className="text-sm text-tempo-carbon/50 uppercase tracking-widest">
              Engineering Lab Photo
            </span>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold tracking-wide uppercase mb-16 text-center text-tempo-carbon"
          >
            OUR PRINCIPLES
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Precision", desc: "Every millimeter matters. We obsess over the details so you can focus on your game." },
              { title: "Performance", desc: "Lab-tested, court-proven. Our paddles perform under pressure because we design for pressure." },
              { title: "Progress", desc: "The game is evolving. We're committed to pushing the boundaries of what's possible." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-tempo-carbon">{value.title}</h3>
                <p className="text-tempo-carbon/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-wide uppercase mb-6 text-tempo-carbon"
          >
            READY TO ELEVATE YOUR GAME?
          </motion.h2>
          <motion.a
            href="/"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block bg-tempo-carbon text-tempo-bone px-10 py-4 
                     uppercase tracking-widest font-medium text-sm rounded-full
                     hover:bg-tempo-navy transition-colors duration-300"
          >
            Reserve Batch 002
          </motion.a>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default AboutPage;
