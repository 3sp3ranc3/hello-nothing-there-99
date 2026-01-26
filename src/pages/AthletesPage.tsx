import { motion } from "framer-motion";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";

const athletes = [
  {
    name: "Marcus Chen",
    title: "Pro Tour Champion",
    quote: "The Architect changed my defensive game. I've never felt more in control at the kitchen line.",
    paddle: "The Architect",
  },
  {
    name: "Sarah Mitchell",
    title: "Senior Pro Tour",
    quote: "Speed is everything in my game. The Air gives me that extra half-second reaction time.",
    paddle: "The Air",
  },
  {
    name: "James Rodriguez",
    title: "National Champion",
    quote: "When I need to end a rally, The Ace delivers. Pure power, zero compromise.",
    paddle: "The Ace",
  },
];

const AthletesPage = () => {
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
            Team Tempo
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-8 text-tempo-carbon"
          >
            ATHLETE STORIES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-tempo-carbon/70 max-w-2xl leading-relaxed"
          >
            The players who push us to be better. Their victories are our validation.
          </motion.p>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="py-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          {athletes.map((athlete, index) => (
            <motion.div
              key={athlete.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 ${
                index !== athletes.length - 1 ? 'border-b border-tempo-carbon/10' : ''
              }`}
            >
              {/* Image */}
              <div className={`aspect-[4/5] bg-tempo-carbon/5 flex items-center justify-center ${
                index % 2 === 1 ? 'lg:order-2' : ''
              }`}>
                <span className="text-sm text-tempo-carbon/50 uppercase tracking-widest">
                  {athlete.name} Portrait
                </span>
              </div>
              
              {/* Content */}
              <div className={`flex flex-col justify-center ${
                index % 2 === 1 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'
              }`}>
                <span className="text-sm uppercase tracking-widest text-tempo-carbon/60 mb-4">
                  Plays with {athlete.paddle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide uppercase mb-2 text-tempo-carbon">
                  {athlete.name}
                </h2>
                <p className="text-tempo-carbon/60 mb-8">{athlete.title}</p>
                <blockquote className="text-xl md:text-2xl leading-relaxed italic text-tempo-carbon/80">
                  "{athlete.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 px-6 bg-tempo-carbon text-tempo-bone">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-wide uppercase mb-6"
          >
            WANT TO JOIN TEAM TEMPO?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-tempo-bone/70 mb-8 max-w-xl mx-auto"
          >
            We're always looking for athletes who embody precision, power, and pace. 
            Get in touch to learn about our ambassador program.
          </motion.p>
          <motion.a
            href="/pages/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-tempo-bone text-tempo-carbon px-10 py-4 
                     uppercase tracking-widest font-medium text-sm rounded-full
                     hover:bg-white transition-colors duration-300"
          >
            Apply Now
          </motion.a>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default AthletesPage;
