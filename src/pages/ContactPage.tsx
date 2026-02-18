import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent! 📨",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.2em] text-tempo-carbon/50 mb-6 block"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wide uppercase mb-8 text-tempo-carbon"
          >
            CONTACT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-tempo-carbon/70 max-w-[550px] leading-relaxed"
          >
            Questions about your order or need help? Reach us at{" "}
            <a 
              href="mailto:support@tempopickleball.store" 
              className="text-tempo-navy underline underline-offset-4 hover:text-tempo-carbon transition-colors"
            >
              support@tempopickleball.store
            </a>
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 pb-24 px-6">
        <div className="max-w-[600px] mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm uppercase tracking-widest font-medium mb-2 text-tempo-carbon">
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-tempo-carbon/20 bg-white px-4 py-3 
                         focus:border-tempo-carbon outline-none transition-colors text-tempo-carbon"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-widest font-medium mb-2 text-tempo-carbon">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-tempo-carbon/20 bg-white px-4 py-3 
                         focus:border-tempo-carbon outline-none transition-colors text-tempo-carbon"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-widest font-medium mb-2 text-tempo-carbon">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border border-tempo-carbon/20 bg-white px-4 py-3 
                         focus:border-tempo-carbon outline-none transition-colors text-tempo-carbon"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-widest font-medium mb-2 text-tempo-carbon">
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full border border-tempo-carbon/20 bg-white px-4 py-3 
                         focus:border-tempo-carbon outline-none transition-colors resize-none text-tempo-carbon"
                placeholder="Tell us more..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-3 bg-tempo-carbon text-tempo-bone 
                       px-10 py-4 uppercase tracking-widest font-medium text-sm rounded-full
                       hover:scale-105 transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default ContactPage;
