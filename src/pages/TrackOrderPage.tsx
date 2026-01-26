import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package, CheckCircle } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";
import { toast } from "@/hooks/use-toast";

const TrackOrderPage = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState<null | {
    number: string;
    status: string;
    steps: { label: string; completed: boolean; date?: string }[];
  }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderNumber || !email) {
      toast({
        title: "Missing information",
        description: "Please enter both order number and email.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setOrderStatus({
      number: orderNumber,
      status: "In Transit",
      steps: [
        { label: "Order Placed", completed: true, date: "Jan 20, 2026" },
        { label: "Processing", completed: true, date: "Jan 21, 2026" },
        { label: "Shipped", completed: true, date: "Jan 22, 2026" },
        { label: "In Transit", completed: true, date: "Jan 23, 2026" },
        { label: "Delivered", completed: false },
      ],
    });
    
    setIsLoading(false);
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
            Order Status
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-8 text-tempo-carbon"
          >
            TRACK YOUR ORDER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-tempo-carbon/70 max-w-2xl leading-relaxed"
          >
            Enter your order details to see the latest shipping status.
          </motion.p>
        </div>
      </section>

      {/* Track Form */}
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm uppercase tracking-widest font-medium mb-2 text-tempo-carbon">
                Order Number
              </label>
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="w-full border border-tempo-carbon/20 bg-white px-4 py-3 
                         focus:border-tempo-carbon outline-none transition-colors text-tempo-carbon"
                placeholder="e.g. TEMPO-12345"
              />
            </div>
            
            <div>
              <label className="block text-sm uppercase tracking-widest font-medium mb-2 text-tempo-carbon">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-tempo-carbon/20 bg-white px-4 py-3 
                         focus:border-tempo-carbon outline-none transition-colors text-tempo-carbon"
                placeholder="your@email.com"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-3 
                       bg-tempo-carbon text-tempo-bone px-10 py-4 rounded-full
                       uppercase tracking-widest font-medium text-sm
                       hover:bg-tempo-navy transition-colors duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Looking up..." : "Track Order"}
              <Search className="w-4 h-4" />
            </button>
          </motion.form>

          {/* Order Status Display */}
          {orderStatus && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 p-8 bg-white border border-tempo-carbon/10"
            >
              <div className="flex items-center gap-4 mb-8">
                <Package className="w-8 h-8 text-tempo-carbon" />
                <div>
                  <p className="text-sm text-tempo-carbon/60">Order {orderStatus.number}</p>
                  <p className="text-xl font-bold text-tempo-carbon">{orderStatus.status}</p>
                </div>
              </div>

              <div className="space-y-4">
                {orderStatus.steps.map((step, index) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.completed 
                        ? 'bg-tempo-carbon text-tempo-bone' 
                        : 'bg-tempo-carbon/10 text-tempo-carbon/60'
                    }`}>
                      {step.completed ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <span className="text-sm">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={step.completed ? 'font-medium text-tempo-carbon' : 'text-tempo-carbon/60'}>
                        {step.label}
                      </p>
                      {step.date && (
                        <p className="text-sm text-tempo-carbon/50">{step.date}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default TrackOrderPage;
