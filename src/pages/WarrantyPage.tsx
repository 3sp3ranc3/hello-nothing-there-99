import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
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
            Product Protection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-8 text-tempo-carbon"
          >
            WARRANTY REGISTRATION
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-tempo-carbon/70 max-w-2xl leading-relaxed"
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
              className="text-center p-12 bg-white border border-tempo-carbon/10"
            >
              <CheckCircle className="w-16 h-16 mx-auto mb-6 text-tempo-stock" />
              <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-tempo-carbon">
                WARRANTY ACTIVATED
              </h2>
              <p className="text-tempo-carbon/60 mb-6">
                Your paddle is now registered. We've sent a confirmation email with your warranty details.
              </p>
              <a
                href="/"
                className="inline-block bg-tempo-carbon text-tempo-bone px-10 py-4 rounded-full
                         uppercase tracking-widest font-medium text-sm
                         hover:bg-tempo-navy transition-colors duration-300"
              >
                Back to Home
              </a>
            </motion.div>
          ) : (
            <>
              {/* Warranty Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-4 p-6 bg-white border border-tempo-carbon/10 mb-12"
              >
                <Shield className="w-8 h-8 flex-shrink-0 text-tempo-carbon" />
                <div>
                  <h3 className="font-bold uppercase tracking-wide mb-2 text-tempo-carbon">30-Day Performance Guarantee</h3>
                  <p className="text-sm text-tempo-carbon/60 leading-relaxed">
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
                    <label className="block text-sm uppercase tracking-widest font-medium mb-2 text-tempo-carbon">
                      Full Name *
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
                </div>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest font-medium mb-2 text-tempo-carbon">
                    Order Number *
                  </label>
                  <input
                    type="text"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    className="w-full border border-tempo-carbon/20 bg-white px-4 py-3 
                             focus:border-tempo-carbon outline-none transition-colors text-tempo-carbon"
                    placeholder="e.g. TEMPO-12345"
                  />
                </div>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest font-medium mb-2 text-tempo-carbon">
                    Paddle Model *
                  </label>
                  <select
                    value={formData.paddle}
                    onChange={(e) => setFormData({ ...formData, paddle: e.target.value })}
                    className="w-full border border-tempo-carbon/20 bg-white px-4 py-3 
                             focus:border-tempo-carbon outline-none transition-colors text-tempo-carbon"
                  >
                    <option value="">Select your paddle</option>
                    <option value="architect">The Architect</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest font-medium mb-2 text-tempo-carbon">
                    Purchase Date
                  </label>
                  <input
                    type="date"
                    value={formData.purchaseDate}
                    onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                    className="w-full border border-tempo-carbon/20 bg-white px-4 py-3 
                             focus:border-tempo-carbon outline-none transition-colors text-tempo-carbon"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 
                           bg-tempo-carbon text-tempo-bone px-10 py-4 rounded-full
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
