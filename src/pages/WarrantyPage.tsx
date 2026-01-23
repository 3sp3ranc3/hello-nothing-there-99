import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import MegaFooter from "@/components/layout/MegaFooter";
import { toast } from "@/hooks/use-toast";

const WarrantyPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    paddle: "",
    purchaseDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.orderNumber || !formData.paddle) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsRegistered(true);
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
            Product Protection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-8"
          >
            WARRANTY REGISTRATION
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Register your Tempo paddle to activate your 30-day performance guarantee.
          </motion.p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto">
          {isRegistered ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-12 bg-tempo-mist"
            >
              <CheckCircle className="w-16 h-16 mx-auto mb-6 text-tempo-stock" />
              <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">
                WARRANTY ACTIVATED
              </h2>
              <p className="text-muted-foreground mb-6">
                Your paddle is now registered. We've sent a confirmation email with your warranty details.
              </p>
              <a
                href="/"
                className="inline-block bg-foreground text-background px-10 py-4 
                         uppercase tracking-widest font-medium text-sm
                         hover:bg-tempo-navy transition-colors duration-300"
              >
                Continue Shopping
              </a>
            </motion.div>
          ) : (
            <>
              {/* Warranty Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-4 p-6 bg-tempo-mist mb-12"
              >
                <Shield className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="font-bold uppercase tracking-wide mb-2">30-Day Performance Guarantee</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every Tempo paddle is backed by our performance guarantee. If your paddle has a manufacturing 
                    defect or doesn't perform as expected, we'll replace it.
                  </p>
                </div>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-widest font-medium mb-2">
                      Full Name *
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
                    Order Number *
                  </label>
                  <input
                    type="text"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 
                             focus:border-foreground outline-none transition-colors"
                    placeholder="e.g. TEMPO-12345"
                  />
                </div>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest font-medium mb-2">
                    Paddle Model *
                  </label>
                  <select
                    value={formData.paddle}
                    onChange={(e) => setFormData({ ...formData, paddle: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 
                             focus:border-foreground outline-none transition-colors"
                  >
                    <option value="">Select your paddle</option>
                    <option value="architect">The Architect</option>
                    <option value="air">The Air</option>
                    <option value="ace">The Ace</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest font-medium mb-2">
                    Purchase Date
                  </label>
                  <input
                    type="date"
                    value={formData.purchaseDate}
                    onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 
                             focus:border-foreground outline-none transition-colors"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 
                           bg-foreground text-background px-10 py-4 
                           uppercase tracking-widest font-medium text-sm
                           hover:bg-tempo-navy transition-colors duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Registering..." : "Register Warranty"}
                </button>
              </motion.form>
            </>
          )}
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default WarrantyPage;
