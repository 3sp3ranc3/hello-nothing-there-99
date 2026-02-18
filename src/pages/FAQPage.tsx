import { motion } from "framer-motion";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Who is Tempo Pickleball?",
    answer: "We're an emerging brand based in Sydney, Australia, built by players who got tired of choosing between premium performance and reasonable prices. Our philosophy is simple: source the absolute best materials available: highest-grade carbon fiber, fourth-generation polymer cores, newest technologies, and cut out everything that inflates cost without improving your game. No flashy sponsorships, no retail markups, no compromises on quality. Just exceptional paddles at prices that make sense.",
  },
  {
    question: "Why preorder only?",
    answer: "We manufacture in controlled batches to maintain quality standards. By taking preorders, we eliminate warehousing costs and uncertainty, passing savings directly to you. It also means every paddle is made fresh, not sitting in a warehouse for months before reaching your hands.",
  },
  {
    question: "What is TRUFOAM?",
    answer: "TRUFOAM is our fourth-generation polymer honeycomb core, a high-density foam blend engineered specifically for maximum energy return and consistency. Unlike traditional honeycomb cores that can crush or separate under heavy play, TRUFOAM maintains its structural integrity match after match. The uniform cell construction creates extended dwell time and a larger sweet spot, giving you predictable response and the confidence to place every shot exactly where you want it. It's the reason The Architect feels as good on rally 1,000 as it does fresh out of the cover.",
  },
  {
    question: "Is this the most powerful pickleball paddle on the market?",
    answer: "The Architect delivers maximum tournament-legal power with a certified 0.43 PBCoR rating, the highest allowed in competitive play. But here's what sets it apart: it's not just raw, uncontrollable pop. The TRUFOAM core and T700 carbon face work together to give you explosive power when you need it, without sacrificing the touch and precision that actually win points. You get all the force required to put balls away, strategically tuned so you're not just hitting harder, you're playing smarter.",
  },
  {
    question: "Is The Architect USAPA approved?",
    answer: "The Architect meets all technical specifications and guidelines for tournament play, but we haven't pursued official USAPA approval yet. As an emerging brand, the approval fees are prohibitively expensive, costs we'd rather invest in better materials and keeping prices fair for players. Rest assured, the paddle is built to spec and performs at the highest competitive level.",
  },
  {
    question: "What is the shipping time?",
    answer: "Since we're currently in preorder phase, your paddle ships once allocation fills up or the preorder window closes, whichever comes first. From there, our manufacturer produces your batch (typically 2-3 weeks), then we ship directly to you. Standard delivery takes approximately 5 days within Australia, though timing may vary depending on your location. You'll receive email updates at every stage so you know exactly where your order stands.",
  },
  {
    question: "How will I know my order has been shipped?",
    answer: "We'll keep you informed every step of the way. You'll receive email notifications when your order is placed, when the preorder period closes and production begins, and when your paddle ships, complete with tracking number so you can follow it all the way to your door.",
  },
  {
    question: "What payment methods does Tempo accept?",
    answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and Shop Pay through our secure Shopify checkout.",
  },
  {
    question: "Question about Warranty?",
    answer: "For full details on our warranty coverage and returns policy, please visit our Warranty & Returns page.",
    isWarrantyLink: true,
  },
];

const FAQPage = () => {
  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-widest text-tempo-carbon/60 mb-4 block"
          >
            Help Center
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-8 text-tempo-carbon"
          >
            FAQ & HELP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-tempo-carbon/70 max-w-2xl leading-relaxed"
          >
            Everything you need to know about Tempo and The Architect.
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border-b border-tempo-carbon/10"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-base font-medium hover:text-tempo-navy transition-colors text-tempo-carbon">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-tempo-carbon/70 leading-relaxed pb-6">
                    {item.answer}
                    {item.isWarrantyLink && (
                      <Link 
                        to="/pages/returns" 
                        className="inline-block mt-2 text-tempo-navy underline underline-offset-4 hover:text-tempo-carbon transition-colors"
                      >
                        View Warranty & Return Policy →
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-tempo-carbon/10 text-center"
          >
            <p className="text-tempo-carbon/60 text-base">
              Any unanswered questions? Email us at{" "}
              <a 
                href="mailto:support@tempopickleball.store" 
                className="text-tempo-navy underline underline-offset-4 hover:text-tempo-carbon transition-colors"
              >
                support@tempopickleball.store
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default FAQPage;
