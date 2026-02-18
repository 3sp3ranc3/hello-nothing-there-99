import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  defaultOpenValue?: string;
}

const ProductFAQ = ({ items, dark = false, defaultOpenValue }: ProductFAQProps) => {
  const [openValue, setOpenValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (defaultOpenValue) {
      setOpenValue(defaultOpenValue);
    }
  }, [defaultOpenValue]);

  const isWarrantyItem = (question: string) => 
    question.toLowerCase().includes("warranty");

  return (
    <section className={`py-24 lg:py-32 ${dark ? "border-t border-white/10" : "border-t border-border"}`}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`tempo-headline text-3xl md:text-4xl text-center mb-12 ${dark ? "text-tempo-bone" : ""}`}
        >
          QUESTIONS & ANSWERS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full" value={openValue} onValueChange={setOpenValue}>
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
                  {isWarrantyItem(item.question) && (
                    <Link 
                      to="/pages/returns" 
                      className={`inline-block mt-2 underline underline-offset-4 transition-colors ${
                        dark ? "text-tempo-bone hover:text-white" : "text-tempo-navy hover:text-tempo-carbon"
                      }`}
                    >
                      View Warranty & Return Policy →
                    </Link>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-center mt-12 text-base ${dark ? "text-tempo-bone/60" : "text-tempo-carbon/60"}`}
        >
          Any unanswered questions? Email us at{" "}
          <a 
            href="mailto:support@tempopickleball.store" 
            className={`underline underline-offset-4 transition-colors ${
              dark ? "text-tempo-bone hover:text-white" : "text-tempo-navy hover:text-tempo-carbon"
            }`}
          >
            support@tempopickleball.store
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default ProductFAQ;
