import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, Loader2 } from "lucide-react";
import { toast } from "sonner";

import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";
import ProductGallery from "@/components/products/ProductGallery";
import TechSpecs from "@/components/products/TechSpecs";
import ProductFAQ from "@/components/products/ProductFAQ";
import ProductDescription from "@/components/products/ProductDescription";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StickyReserveButton from "@/components/ui/StickyReserveButton";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useCartStore } from "@/stores/cartStore";
import { storefrontApiRequest, PRODUCT_QUERY, type ShopifyProduct } from "@/lib/shopify";

import img1 from "@/assets/architect-45deg.webp";
import img2 from "@/assets/architect-detail.webp";
import img3 from "@/assets/architect-specs.webp";
import img4 from "@/assets/architect-pair.webp";
import topoBackground from "@/assets/topo-background.png";

const productImages = [
  { src: img1, alt: "The Architect — 45° angle view" },
  { src: img2, alt: "The Architect — Surface detail" },
  { src: img3, alt: "The Architect — Floating specs" },
  { src: img4, alt: "The Architect — Great engineering" },
];

const features = [
  "Thermoformed construction with TRUFOAM Core",
  "T700 Carbon Fiber face with sandblasted finish",
  "Frameless wide body design",
  "130mm elongated grip handle",
];

const specs = [
  { label: "CORE", value: "TRUFOAM", description: "4th generation polymer core delivering 0.43 PBCoR: the maximum tournament-legal power. Engineered for optimal energy transfer, consistent response, and extended durability." },
  { label: "SURFACE", value: "T700 Carbon Fiber", description: "Full UV print with sandblasted texture for spin generation" },
  { label: "WEIGHT", value: "8.2 oz", description: "Balanced weight optimized for both power and control" },
  { label: "GRIP", value: "130mm", description: "Elongated handle for two-handed backhand versatility" },
  { label: "BALANCE", value: "Central", description: "Neutral balance point for consistent swing dynamics" },
  { label: "WARRANTY", value: "12-Month Limited", description: "Coverage against manufacturer defects and workmanship flaws" },
];

const faqItems = [
  { question: "Who is Tempo Pickleball?", answer: "We're an emerging brand based in Sydney, Australia, built by players who got tired of choosing between premium performance and reasonable prices. Our philosophy is simple: source the absolute best materials available: highest-grade carbon fiber, fourth-generation polymer cores, newest technologies, and cut out everything that inflates cost without improving your game. No flashy sponsorships, no retail markups, no compromises on quality. Just exceptional paddles at prices that make sense." },
  { question: "Why preorder only?", answer: "We manufacture in controlled batches to maintain quality standards. By taking preorders, we eliminate warehousing costs and uncertainty, passing savings directly to you. It also means every paddle is made fresh, not sitting in a warehouse for months before reaching your hands." },
  { question: "What is TRUFOAM?", answer: "TRUFOAM is our fourth-generation polymer honeycomb core, a high-density foam blend engineered specifically for maximum energy return and consistency. Unlike traditional honeycomb cores that can crush or separate under heavy play, TRUFOAM maintains its structural integrity match after match. The uniform cell construction creates extended dwell time and a larger sweet spot, giving you predictable response and the confidence to place every shot exactly where you want it. It's the reason The Architect feels as good on rally 1,000 as it does fresh out of the cover." },
  { question: "Is this the most powerful pickleball paddle on the market?", answer: "The Architect delivers maximum tournament-legal power with a certified 0.43 PBCoR rating, the highest allowed in competitive play. But here's what sets it apart: it's not just raw, uncontrollable pop. The TRUFOAM core and T700 carbon face work together to give you explosive power when you need it, without sacrificing the touch and precision that actually win points. You get all the force required to put balls away, strategically tuned so you're not just hitting harder, you're playing smarter." },
  { question: "Is The Architect USAPA approved?", answer: "The Architect meets all technical specifications and guidelines for tournament play, but we haven't pursued official USAPA approval yet. As an emerging brand, the approval fees are prohibitively expensive, costs we'd rather invest in better materials and keeping prices fair for players. Rest assured, the paddle is built to spec and performs at the highest competitive level." },
  { question: "What is the shipping time?", answer: "Since we're currently in preorder phase, your paddle ships once allocation fills up or the preorder window closes, whichever comes first. From there, our manufacturer produces your batch (typically 2-3 weeks), then we ship directly to you. Standard delivery takes approximately 5 days within Australia, though timing may vary depending on your location. You'll receive email updates at every stage so you know exactly where your order stands." },
  { question: "How will I know my order has been shipped?", answer: "We'll keep you informed every step of the way. You'll receive email notifications when your order is placed, when the preorder period closes and production begins, and when your paddle ships, complete with tracking number so you can follow it all the way to your door." },
  { question: "What payment methods does Tempo accept?", answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and Shop Pay through our secure Shopify checkout." },
  { question: "Question about Warranty?", answer: "For full details on our warranty coverage and returns policy, please visit our Warranty & Returns page." },
];

const TheArchitect = () => {
  
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [shopifyProduct, setShopifyProduct] = useState<ShopifyProduct | null>(null);
  const [isQtyDialogOpen, setIsQtyDialogOpen] = useState(false);
  const [faqDefaultOpen, setFaqDefaultOpen] = useState<string | undefined>(undefined);
  const techSectionRef = useRef<HTMLElement>(null);
  const faqSectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isProgressInView = useInView(progressRef, { once: true });

  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    storefrontApiRequest(PRODUCT_QUERY, { handle: "the-architect-batch-002" })
      .then((data) => {
        if (data?.data?.product) {
          setShopifyProduct({ node: data.data.product });
        }
      })
      .catch(console.error);
  }, []);

  const handleAddToCartWithQty = useCallback(async (qty: number) => {
    if (!shopifyProduct) return;
    const variant = shopifyProduct.node.variants.edges[0]?.node;
    if (!variant) return;

    await addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: qty,
      selectedOptions: variant.selectedOptions || [],
    });

    toast.success(`Added ${qty} to cart`, {
      description: "The Architect — Batch 002",
      position: "top-center",
    });
    setIsQtyDialogOpen(false);
  }, [shopifyProduct, addItem]);

  const handleAddToCartClick = useCallback(() => {
    setIsQtyDialogOpen(true);
  }, []);

  const scrollToSpecs = () => {
    techSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFaqWhyPreorder = () => {
    // "Why preorder only?" is the second item (index 1) in faqItems
    setFaqDefaultOpen("item-1");
    setTimeout(() => {
      faqSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />

      {/* PART 1: THE SPLIT SECTION */}
      <section className="pt-24 lg:pt-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="w-full lg:w-[60%]">
              <ProductGallery images={productImages} />
            </div>

            <div className="w-full lg:w-[40%]">
              <div className="lg:sticky lg:top-28">
                <div className="space-y-8">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="tempo-headline text-4xl md:text-5xl lg:text-6xl mb-2">THE ARCHITECT</h1>
                    <p className="text-lg text-tempo-carbon/50 font-light mb-4">Batch 002</p>
                    <p className="tempo-body text-muted-foreground leading-relaxed">
                      The tactician's instrument. Engineered for absolute placement, vibration control, and neutralizing opponent power. Built with elite-grade materials trusted at the highest levels of competition.
                    </p>
                  </motion.div>

                  {/* Pricing Card */}
                  <div className="bg-tempo-navy/5 border border-tempo-navy/10 rounded-lg p-6 space-y-4">
                    <span className="text-xs uppercase tracking-widest text-tempo-navy font-semibold">Batch 002 Preorder</span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Batch 001 Price:</span>
                        <span className="text-sm line-through text-muted-foreground">$245</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-tempo-carbon font-medium">Preorder Price:</span>
                        <span className="text-3xl font-black text-tempo-navy">$135.00</span>
                      </div>
                    </div>
                    

                    {/* Stock Progress */}
                    <div ref={progressRef} className="pt-4 border-t border-tempo-carbon/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-tempo-carbon/60">Limited to 250 units</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-tempo-carbon/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isProgressInView ? { width: "27%" } : {}}
                            transition={{ duration: 1.5, delay: 0.3 }}
                            className="h-full bg-tempo-stock rounded-full"
                          />
                        </div>
                        <span className="text-sm font-semibold text-tempo-carbon">67/250</span>
                      </div>
                      <p className="text-xs text-tempo-carbon/50 mt-2">Closes February 28th or when allocation sells out</p>
                    </div>

                    {/* Primary CTA */}
                    <motion.button
                      onMouseEnter={() => setIsButtonHovered(true)}
                      onMouseLeave={() => setIsButtonHovered(false)}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAddToCartClick}
                      disabled={isLoading || !shopifyProduct}
                      className={`w-full py-4 px-8 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 ${
                        isButtonHovered ? "bg-tempo-navy text-tempo-bone" : "bg-tempo-carbon text-tempo-bone"
                      }`}
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <motion.span animate={{ x: isButtonHovered ? -8 : 0 }} transition={{ duration: 0.3 }}>
                            Add to Cart
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isButtonHovered ? 1 : 0, x: isButtonHovered ? 0 : -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </>
                      )}
                    </motion.button>

                    {/* Limit notice + Why preorder link */}
                    <div className="text-center space-y-1 pt-1">
                      <p className="text-xs text-tempo-carbon/50">Limit 2 per customer</p>
                      <button
                        onClick={scrollToFaqWhyPreorder}
                        className="text-xs text-tempo-navy underline underline-offset-2 hover:text-tempo-navy/80 transition-colors cursor-pointer"
                      >
                        Why preorder only?
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 text-xs text-muted-foreground pt-2">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span>30-Day Play Test Guarantee</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4" />
                        <span>Free Premium Shipping</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Full-width Product Description below the split */}
          <div className="mt-12 lg:mt-16 max-w-[900px] mx-auto">
            <ProductDescription onScrollToSpecs={scrollToSpecs} />
          </div>
        </div>
      </section>

      {/* Wave transition from bone to navy */}
      <div className="relative -mb-px mt-16">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[90px] lg:h-[120px] block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 L0,80 C120,95 240,110 360,100 C480,90 600,50 720,35 C840,20 960,30 1080,50 C1200,70 1320,95 1440,90 L1440,120 Z"
            className="fill-tempo-navy"
          />
        </svg>
      </div>

      {/* DARK TOPO SECTION — Specs, Testimonials, FAQ, Bottom CTA */}
      <div
        className="relative bg-tempo-navy bg-cover bg-center"
        style={{ backgroundImage: `url(${topoBackground})` }}
      >
        <div className="absolute inset-0 bg-tempo-navy/80" />

        <div className="relative z-10">
          {/* PART 2: SPECS */}
          <section ref={techSectionRef} className="py-16 lg:py-24">
            <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="tempo-headline text-3xl md:text-4xl lg:text-5xl text-center mb-12 lg:mb-16 text-tempo-bone"
              >
                Technical Specifications
              </motion.h2>
              <TechSpecs specs={specs} variant="grid-only" dark />
            </div>
          </section>

          <TestimonialsSection dark />

          <div ref={faqSectionRef} className="max-w-[1100px] mx-auto px-6 lg:px-12">
            <ProductFAQ items={faqItems} dark defaultOpenValue={faqDefaultOpen} />
          </div>

          {/* Back to Top */}
          <div className="py-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-tempo-bone/50 hover:text-tempo-bone text-xs uppercase tracking-widest transition-colors duration-300"
            >
              <ArrowRight className="w-3 h-3 -rotate-90" />
              Back to top
            </motion.button>
          </div>
        </div>
      </div>

      {/* Quantity Picker Dialog */}
      <Dialog open={isQtyDialogOpen} onOpenChange={(open) => {
        if (!open) {
          handleAddToCartWithQty(1);
        }
        setIsQtyDialogOpen(open);
      }}>
        <DialogContent className="bg-tempo-bone border-tempo-carbon/10 max-w-xs rounded-2xl p-6 [&>button]:hidden">
          <DialogHeader>
            <DialogTitle className="tempo-headline text-2xl text-center tracking-widest font-black">
              SELECT QUANTITY
            </DialogTitle>
            <DialogDescription className="text-center text-tempo-carbon/60 text-xs uppercase tracking-wider font-semibold">
              Limited to 2 per customer
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-4 py-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleAddToCartWithQty(1)}
              disabled={isLoading}
              className="flex-1 py-5 border-2 border-tempo-carbon rounded-full text-tempo-carbon font-black text-2xl hover:bg-tempo-carbon hover:text-tempo-bone transition-colors disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "1"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleAddToCartWithQty(2)}
              disabled={isLoading}
              className="flex-1 py-5 border-2 border-tempo-carbon rounded-full text-tempo-carbon font-black text-2xl hover:bg-tempo-carbon hover:text-tempo-bone transition-colors disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "2"}
            </motion.button>
          </div>
        </DialogContent>
      </Dialog>

      <MegaFooter />
      <StickyReserveButton onAddToCart={() => setIsQtyDialogOpen(true)} isLoading={isLoading} disabled={!shopifyProduct} />
    </main>
  );
};

export default TheArchitect;
