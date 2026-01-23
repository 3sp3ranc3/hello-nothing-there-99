import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import MegaFooter from "@/components/layout/MegaFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Orders & Shipping",
    items: [
      {
        question: "How long does shipping take?",
        answer: "Standard shipping takes 5-7 business days. Expedited shipping (2-3 days) and overnight options are available at checkout. All orders over $100 ship free.",
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes! We ship to over 50 countries. International shipping rates and delivery times vary by destination. Import duties may apply and are the responsibility of the recipient.",
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive an email with tracking information. You can also track your order anytime using our Track Order page.",
      },
    ],
  },
  {
    title: "Products & Paddles",
    items: [
      {
        question: "What's the difference between The Architect, The Air, and The Ace?",
        answer: "The Architect is our control paddle, designed for tactical play and precision placement. The Air is built for speed, featuring our lightest core for quick reactions. The Ace is our power paddle, engineered for aggressive players who want to dominate rallies.",
      },
      {
        question: "Are your paddles tournament approved?",
        answer: "Yes, all Tempo paddles are USAPA approved for tournament play. You can find them on the official approved paddle list.",
      },
      {
        question: "What weight should I choose?",
        answer: "Paddle weight is personal preference. Lighter paddles (under 7.8oz) offer more maneuverability, while heavier paddles (8.2oz+) provide more power. Most players prefer the 7.9-8.1oz range for balance.",
      },
    ],
  },
  {
    title: "Returns & Warranty",
    items: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day trial on all paddles. If you're not completely satisfied, return it for a full refund. The paddle must be in resalable condition.",
      },
      {
        question: "What does the warranty cover?",
        answer: "Our paddles come with a 30-day performance guarantee covering manufacturing defects. This doesn't cover damage from misuse, drops, or normal wear and tear.",
      },
      {
        question: "How do I initiate a return?",
        answer: "Contact our support team via email or phone. We'll provide a prepaid return label. Refunds are processed within 5-7 business days of receiving your return.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block"
          >
            Help Center
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-8"
          >
            FAQ & HELP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Find answers to common questions about orders, products, and policies.
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h2 className="text-xl font-bold uppercase tracking-wide mb-6 pb-4 border-b border-border">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem 
                    key={itemIndex} 
                    value={`${catIndex}-${itemIndex}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 text-base font-medium hover:text-tempo-navy transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-24 px-6 bg-tempo-mist">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold tracking-wide uppercase mb-6"
          >
            STILL HAVE QUESTIONS?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            Our concierge team is ready to help with any questions you have.
          </motion.p>
          <motion.a
            href="/pages/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-foreground text-background px-10 py-4 
                     uppercase tracking-widest font-medium text-sm
                     hover:bg-tempo-navy transition-colors duration-300"
          >
            Contact Us
          </motion.a>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default FAQPage;
