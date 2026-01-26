import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Why preorder only?",
    answer: "We manufacture in controlled batches to maintain quality standards. By taking preorders, we eliminate retail markup, warehousing costs, and uncertainty—passing savings directly to you. This is how we deliver a $195 paddle for $135.",
    featured: true,
  },
  {
    question: "When will my paddle ship?",
    answer: "Batch 002 paddles begin shipping March 15th, 2026. Orders are fulfilled in the sequence they were placed. You'll receive tracking information via email once your paddle ships.",
  },
  {
    question: "What is the 30-day trial?",
    answer: "We believe in The Architect. If it doesn't improve your game within 30 days, return it for a full refund. No questions asked. We'll even cover return shipping.",
  },
  {
    question: "How is this different from other paddles?",
    answer: "The Architect features a 31% larger sweet spot than industry average (independently tested), T700 carbon fiber face, and 16mm polymer honeycomb core. Most importantly, we sell direct—cutting out the 40%+ markup you pay at retail.",
  },
  {
    question: "Is this paddle tournament approved?",
    answer: "Yes. The Architect is fully approved by the USA Pickleball Association (USAPA) for tournament play. Its specifications meet all regulatory requirements.",
  },
  {
    question: "What's the weight and dimensions?",
    answer: "Weight: 8.10 oz (optimized for hand speed). Grip: 5.5 inches (elongated). Core: 16mm polypropylene. Surface: Raw T700 carbon fiber with 45° weave pattern.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently we ship to Australia and New Zealand. US and European shipping coming with Batch 003. Join the waitlist to be notified.",
  },
];

const Batch002FAQSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-white border-y border-tempo-carbon/10">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide text-tempo-carbon mb-4">
            Questions
          </h2>
          <p className="text-lg text-tempo-carbon/60">
            Everything you need to know about Batch 002
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <AccordionItem
                value={`item-${index}`}
                className={`border rounded-lg px-6 ${
                  item.featured 
                    ? "border-tempo-navy/30 bg-tempo-navy/5" 
                    : "border-tempo-carbon/10"
                }`}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-tempo-carbon hover:no-underline py-6">
                  {item.featured && (
                    <span className="inline-block px-2 py-0.5 bg-tempo-navy text-white text-xs uppercase tracking-widest rounded mr-3">
                      Key
                    </span>
                  )}
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-tempo-carbon/70 text-base leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Batch002FAQSection;
