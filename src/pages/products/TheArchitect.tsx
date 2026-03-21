import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { trackProductView, trackAddToCart } from "@/lib/shopify-analytics";
import { ArrowRight, ShieldCheck, Loader2, Lock } from "lucide-react";
import { Link } from "react-router-dom";


import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";
import ProductGallery from "@/components/products/ProductGallery";
import TechSpecs from "@/components/products/TechSpecs";
import ProductFAQ from "@/components/products/ProductFAQ";
import ProductDescription from "@/components/products/ProductDescription";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StickyReserveButton from "@/components/ui/StickyReserveButton";

import { useCartStore } from "@/stores/cartStore";
import { storefrontFetch, PRODUCT_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { openCartDrawer } from "@/components/ui/CartDrawer";

import img1 from "@/assets/architect-45deg-white.webp";
import img2 from "@/assets/architect-front-white.webp";

const img3 = new URL("@/assets/architect-detail.webp", import.meta.url).href;
const img4 = new URL("@/assets/architect-specs.webp", import.meta.url).href;
const img5 = new URL("@/assets/architect-pair.webp", import.meta.url).href;
const topoBackground = new URL("@/assets/topo-background.png", import.meta.url).href;

const productImages = [
  { src: img1, alt: "The Architect — 45° angle view", priority: true },
  { src: img2, alt: "The Architect — Front view", priority: true },
  { src: img3, alt: "The Architect — Surface detail", priority: false },
  { src: img4, alt: "The Architect — Floating specs", priority: false },
  { src: img5, alt: "The Architect — Great engineering", priority: false },
];

const features = [
  "Thermoformed construction with TRUFOAM Core",
  "T700 Carbon Fiber face with sandblasted finish",
  "Frameless wide body design",
  "130mm elongated grip handle",
];

const specs = [
  { label: "CORE", value: "TRUFOAM", description: "4th generation polymer core. The best available. Delivers maximum legal power (0.43 PBCoR) with optimal energy transfer and durability.", icon: "honeycomb" as const },
  { label: "SURFACE", value: "T700 Carbon Fiber", description: "Sandblasted texture finish for the best spin generation.", icon: "surface" as const },
  { label: "DIMENSIONS", value: "201.2mm x 272mm x 16mm", description: "The optimal paddle shape. Engineered for maximum sweet spot, surgical precision, and uncompromising control.", icon: "tape-measure" as const },
  { label: "WEIGHT", value: "225g", description: "Balanced weight optimised for both power and control.", icon: "balance" as const },
  { label: "GRIP", value: "130mm", description: "Elongated handle for two-handed backhand versatility.", icon: "paddle" as const },
  { label: "WARRANTY", value: "12-Month Limited", description: "Coverage against manufacturer defects and workmanship flaws.", icon: "warranty" as const },
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
  const [revealAll, setRevealAll] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [shopifyProduct, setShopifyProduct] = useState<ShopifyProduct | null>(null);
  const [faqDefaultOpen, setFaqDefaultOpen] = useState<string | undefined>(undefined);
  const techSectionRef = useRef<HTMLElement>(null);
  const faqSectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isProgressInView = useInView(progressRef, { once: true });

  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    storefrontFetch(PRODUCT_QUERY, { handle: "the-architect-batch-002" })
      .then((data) => {
        if (data?.data?.product) {
          const product = { node: data.data.product };
          setShopifyProduct(product);

          // Track product view for Shopify analytics
          const variant = product.node.variants.edges[0]?.node;
          if (variant) {
            trackProductView({
              productGid: product.node.id,
              variantGid: variant.id,
              name: product.node.title,
              variantName: variant.title,
              brand: "Tempo Pickleball",
              price: variant.price.amount,
              category: "Pickleball Paddles",
            });
          }
        }
      })
      .catch(console.error);
  }, []);

  const handleAddToCartClick = useCallback(async () => {
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

    // Track add-to-cart for Shopify analytics
    const cartId = useCartStore.getState().cartId;
    if (cartId) {
      trackAddToCart({
        cartId,
        productGid: shopifyProduct.node.id,
        variantGid: variant.id,
        name: shopifyProduct.node.title,
        variantName: variant.title,
        brand: "Tempo Pickleball",
        price: variant.price.amount,
        quantity: 1,
        category: "Pickleball Paddles",
      });
    }

    openCartDrawer();
  }, [shopifyProduct, addItem]);

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
                      The tactician's instrument. Engineered for absolute placement, vibration control, and neutralising opponent power. Built with elite-grade materials trusted at the highest levels of competition.
                    </p>
                  </motion.div>

                  {/* ── Price Block ── */}
                  <div className="space-y-6 pt-2">

                    {/* Batch label */}
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 bg-tempo-navy text-tempo-bone text-[10px] uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-tempo-stock animate-pulse" />
                        Batch 002 — Open Now
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-tempo-carbon/40 line-through">Batch 001: $155</span>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-5xl font-black text-tempo-carbon tracking-tight">$109</span>
                        <span className="text-sm font-medium text-tempo-carbon/50 uppercase tracking-widest">Preorder</span>
                      </div>
                      <p className="text-xs text-tempo-carbon/40 uppercase tracking-widest pt-0.5">Elite materials. Honest pricing.</p>
                    </div>

                    {/* Stock Bar */}
                    <div ref={progressRef} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest text-tempo-carbon/50 font-medium">Limited to 250 units</span>
                        <span className="text-xs font-bold text-tempo-carbon">67 / 250</span>
                      </div>
                      <div className="h-[3px] w-full bg-tempo-carbon/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isProgressInView ? { width: "27%" } : {}}
                          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-tempo-stock rounded-full"
                        />
                      </div>
                    </div>

                    {/* Swiss divider */}
                    <div className="border-t border-tempo-carbon/10" />

                    {/* Primary CTA */}
                    <motion.button
                      onMouseEnter={() => setIsButtonHovered(true)}
                      onMouseLeave={() => setIsButtonHovered(false)}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAddToCartClick}
                      disabled={isLoading || !shopifyProduct}
                      className={`w-full py-5 px-8 rounded-full text-base uppercase tracking-[0.12em] font-black transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl ${
                        isButtonHovered
                          ? "bg-tempo-navy text-tempo-bone shadow-tempo-navy/25"
                          : "bg-tempo-carbon text-tempo-bone shadow-tempo-carbon/15"
                      }`}
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <motion.span animate={{ x: isButtonHovered ? -8 : 0 }} transition={{ duration: 0.3 }}>
                            PREORDER THE ARCHITECT
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isButtonHovered ? 1 : 0, x: isButtonHovered ? 0 : -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.span>
                        </>
                      )}
                    </motion.button>

                    {/* Dispatch + Why Preorder */}
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] uppercase tracking-widest text-tempo-carbon/50 font-medium">
                        Est. Dispatch: Late March 2026
                      </p>
                      <button
                        onClick={scrollToFaqWhyPreorder}
                        className="text-[11px] uppercase tracking-widest text-tempo-navy font-semibold underline underline-offset-4 hover:text-tempo-navy/70 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Why preorder only?
                      </button>
                    </div>

                    {/* Trust signals */}
                    <div className="flex items-center justify-center gap-8 text-xs text-tempo-carbon/50 pt-1 border-t border-tempo-carbon/10">
                      <Link to="/pages/warranty" className="flex items-center gap-2 hover:text-tempo-carbon/70 transition-colors">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>12-Month Warranty</span>
                      </Link>
                      <div className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Secure Checkout</span>
                      </div>
                    </div>

                    {/* Reviews link */}
                    <Link
                      to="/pages/batch-001"
                      className="flex items-center justify-center gap-3 text-xs text-tempo-carbon/60 hover:text-tempo-carbon transition-colors duration-300 group"
                    >
                      <span className="flex items-center gap-0.5 text-amber-500/60">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </span>
                      <span className="flex items-center gap-1">
                        Read Batch 001 Reviews
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>

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
              <AnimatePresence>
                {!revealAll && (
                  <motion.div
                    className="flex justify-center mb-10"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      onClick={() => setRevealAll(true)}
                      className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2 text-xs uppercase tracking-widest font-medium text-white/50 transition-all duration-300 hover:border-white/50 hover:text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                      Reveal All
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              <TechSpecs specs={specs} variant="grid-only" dark revealAll={revealAll} />
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

      <MegaFooter />
      <StickyReserveButton onAddToCart={handleAddToCartClick} isLoading={isLoading} disabled={!shopifyProduct} />
    </main>
  );
};

export default TheArchitect;
