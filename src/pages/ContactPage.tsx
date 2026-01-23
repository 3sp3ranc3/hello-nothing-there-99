import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
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
      description: "Our concierge team will respond within 24 hours.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

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
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-8"
          >
            CONTACT CONCIERGE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Questions about your order? Need help finding the right paddle? Our team is here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-widest font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-border bg-transparent px-4 py-3 
                           focus:border-foreground outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-border bg-transparent px-4 py-3 
                           focus:border-foreground outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm uppercase tracking-widest font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border border-border bg-transparent px-4 py-3 
                         focus:border-foreground outline-none transition-colors"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label className="block text-sm uppercase tracking-widest font-medium mb-2">
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full border border-border bg-transparent px-4 py-3 
                         focus:border-foreground outline-none transition-colors resize-none"
                placeholder="Tell us more..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-3 bg-foreground text-background 
                       px-10 py-4 uppercase tracking-widest font-medium text-sm
                       hover:bg-tempo-navy transition-colors duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:pl-12 space-y-12"
          >
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-6">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:support@tempopickleball.com" className="text-muted-foreground hover:text-foreground transition-colors">
                      support@tempopickleball.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:1-800-TEMPO-00" className="text-muted-foreground hover:text-foreground transition-colors">
                      1-800-TEMPO-00
                    </a>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm PST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-muted-foreground">
                      123 Precision Drive<br />
                      San Diego, CA 92101
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-tempo-mist">
              <h4 className="font-bold uppercase tracking-wide mb-3">Response Time</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our concierge team typically responds within 2-4 hours during business hours. 
                For urgent order issues, please call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default ContactPage;
