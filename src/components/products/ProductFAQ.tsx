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
  theme?: "light" | "dark";
}

const ProductFAQ = ({ items, theme = "light" }: ProductFAQProps) => {
  const isDark = theme === "dark";
  return (
    <section className={`py-24 lg:py-32 ${isDark ? "border-t border-white/10" : "border-t border-border"}`}>
      <div className="max-w-2xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`tempo-headline text-3xl md:text-4xl text-center mb-12 ${isDark ? "text-tempo-bone" : ""}`}
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
                className={isDark ? "border-white/10" : "border-border"}
              >
                <AccordionTrigger className={`text-left tempo-body font-medium hover:no-underline transition-colors duration-300 ${
                  isDark
                    ? "text-tempo-bone hover:text-tempo-bone/80"
                    : "hover:text-tempo-navy"
                }`}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className={isDark ? "text-tempo-bone/60" : "text-muted-foreground tempo-body"}>
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
