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
import FounderStoryModal from "@/components/ui/FounderStoryModal";
import { useCartStore } from "@/stores/cartStore";
import { storefrontApiRequest, PRODUCT_QUERY, type ShopifyProduct } from "@/lib/shopify";

import img1 from "@/assets/architect-batch002-1.webp";
import img2 from "@/assets/architect-batch002-2.webp";
import img3 from "@/assets/architect-batch002-3.webp";
import img4 from "@/assets/architect-batch002-4.webp";

const productImages = [
  { src: img1, alt: "The Architect — 45° angle view" },
  { src: img2, alt: "The Architect — Surface detail" },
  { src: img3, alt: "The Architect — Augmented reality specs" },
  { src: img4, alt: "The Architect — Tournament rotation" },
];

const features = [
  "Thermoformed construction with TRUFOAM Core",
  "T700 Carbon Fiber face with sandblasted finish",
  "Frameless wide body design",
  "130mm elongated grip handle",
];

const specs = [
  { label: "CORE", value: "TRUFOAM", description: "Black TRUFOAM Core Technology for optimal energy transfer and vibration dampening" },
  { label: "WEIGHT", value: "8.2 oz", description: "Balanced weight optimized for both power and control" },
  { label: "GRIP", value: "130mm", description: "Elongated handle for two-handed backhand versatility" },
  { label: "BALANCE", value: "Central", description: "Neutral balance point for consistent swing dynamics" },
  { label: "SURFACE", value: "T700 Carbon Fiber", description: "Full UV print with sandblasted texture for spin generation" },
  { label: "WARRANTY", value: "30-Day Play Test", description: "Full performance guarantee or your money back" },
];

const faqItems = [
  { question: "What is the 30-day trial?", answer: "We believe in The Architect. If it doesn't improve your game within 30 days, return it for a full refund. No questions asked. We'll even cover return shipping." },
  { question: "Why preorder only?", answer: "We manufacture in controlled batches to maintain quality standards. By taking preorders, we eliminate retail markup, warehousing costs, and uncertainty—passing savings directly to you." },
  { question: "Is this paddle tournament approved?", answer: "Yes. The Architect is fully approved by the USA Pickleball Association (USAPA) for tournament play. Its specifications meet all regulatory requirements." },
  { question: "What is the shipping time?", answer: "Batch 002 paddles begin shipping March 15th, 2026. Orders are fulfilled in the sequence they were placed. You'll receive tracking information via email once your paddle ships." },
  { question: "What grip size should I choose?", answer: "The Architect features a 130mm elongated grip, suitable for most hand sizes and enabling two-handed backhands. If you prefer a smaller grip, overgrips can be removed. For larger hands, consider adding an overgrip for additional circumference." },
];

const TheArchitect = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [shopifyProduct, setShopifyProduct] = useState<ShopifyProduct | null>(null);
  const techSectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isProgressInView = useInView(progressRef, { once: true });

  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  // Fetch product from Shopify
  useEffect(() => {
    storefrontApiRequest(PRODUCT_QUERY, { handle: "the-architect-batch-002" })
      .then((data) => {
        if (data?.data?.product) {
          setShopifyProduct({ node: data.data.product });
        }
      })
      .catch(console.error);
  }, []);

  const handleAddToCart = useCallback(async () => {
    if (!shopifyProduct) return;
    const variant = shopifyProduct.node.variants.edges[0]?.node;
    if (!variant) return;

    await addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });

    toast.success("Added to cart", {
      description: "The Architect — Batch 002",
      position: "top-center",
    });
  }, [shopifyProduct, addItem]);

  const scrollToSpecs = () => {
    techSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />

      {/* PART 1: THE SPLIT SECTION */}
      <section className="pt-24 lg:pt-28">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="w-full lg:w-[60%]">
              <ProductGallery images={productImages} />
            </div>

            <div className="w-full lg:w-[40%]">
              <div className="lg:sticky lg:top-28">
                <div className="space-y-8">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="tempo-headline text-4xl md:text-5xl lg:text-6xl mb-2">THE ARCHITECT</h1>
                    <p className="text-lg text-tempo-carbon/50 font-light mb-4">Batch 002</p>
                    <p className="tempo-body text-muted-foreground leading-relaxed mb-4">
                      The tactician's instrument. Engineered for absolute placement, vibration control, and neutralizing opponent power.
                    </p>
                    <blockquote className="text-base italic text-tempo-carbon/70 border-l-2 border-tempo-navy pl-4">
                      "Not every shot is perfect. The Architect forgives the imperfect ones."
                    </blockquote>
                  </motion.div>

                  {/* Pricing Card */}
                  <div className="bg-tempo-navy/5 border border-tempo-navy/10 rounded-lg p-6 space-y-4">
                    <span className="text-xs uppercase tracking-widest text-tempo-navy font-semibold">Batch 002 Preorder</span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Retail Price:</span>
                        <span className="text-sm line-through text-muted-foreground">$195.00</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-tempo-carbon font-medium">Preorder Price:</span>
                        <span className="text-3xl font-black text-tempo-navy">$135.00</span>
                      </div>
                    </div>
                    <p className="text-sm text-tempo-carbon/70">Our best paddle at our lowest price yet</p>

                    {/* Stock Progress */}
                    <div ref={progressRef} className="pt-4 border-t border-tempo-carbon/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-tempo-carbon/60">Batch 002 – Limited to 250 units</span>
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
                      onClick={handleAddToCart}
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
                            Add to Cart — $135.00
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

                  {/* Product Description */}
                  <ProductDescription onScrollToSpecs={scrollToSpecs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: SPECS */}
      <section ref={techSectionRef} className="py-16 lg:py-24 border-t border-tempo-carbon/10 mt-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="tempo-headline text-3xl md:text-4xl lg:text-5xl text-center mb-12 lg:mb-16"
          >
            Technical Specifications
          </motion.h2>
          <TechSpecs specs={specs} variant="grid-only" />
        </div>
      </section>

      <TestimonialsSection />

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <ProductFAQ items={faqItems} />
      </div>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 border-t border-tempo-carbon/10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            disabled={isLoading || !shopifyProduct}
            className="bg-tempo-carbon text-tempo-bone py-4 px-12 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-tempo-navy transition-colors duration-300 disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Reserve Now — $135.00"}
          </motion.button>
        </div>
      </section>

      <MegaFooter onFounderStoryClick={() => setIsFounderModalOpen(true)} />
      <StickyReserveButton onAddToCart={handleAddToCart} isLoading={isLoading} disabled={!shopifyProduct} />
      <FounderStoryModal isOpen={isFounderModalOpen} onClose={() => setIsFounderModalOpen(false)} />
    </main>
  );
};

export default TheArchitect;
