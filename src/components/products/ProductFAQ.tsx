import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFAQProps {
  items: FAQItem[];
  dark?: boolean;
}

const ProductFAQ = ({ items, dark = false }: ProductFAQProps) => {
  return (
    <section className={`py-24 lg:py-32 ${dark ? "border-t border-white/10" : "border-t border-border"}`}>
      <div className="max-w-2xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`tempo-headline text-3xl md:text-4xl text-center mb-12 ${dark ? "text-tempo-bone" : ""}`}
        >
          QUESTIONS & ANSWERS
        </motion.h2>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={dark ? "border-white/10" : "border-border"}
              >
                <AccordionTrigger className={`text-left tempo-body font-medium hover:no-underline transition-colors duration-300 ${
                  dark ? "text-tempo-bone hover:text-white" : "hover:text-tempo-navy"
                }`}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className={`tempo-body ${dark ? "text-tempo-bone/70" : "text-muted-foreground"}`}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFAQ;
