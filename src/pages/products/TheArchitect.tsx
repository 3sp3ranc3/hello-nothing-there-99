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
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel } from
"@/components/ui/alert-dialog";
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
{ src: img4, alt: "The Architect — Great engineering" }];


const features = [
"Thermoformed construction with TRUFOAM Core",
"T700 Carbon Fiber face with sandblasted finish",
"Frameless wide body design",
"130mm elongated grip handle"];


const specs = [
{ label: "CORE", value: "TRUFOAM", description: "Black TRUFOAM Core Technology for optimal energy transfer and vibration dampening" },
{ label: "WEIGHT", value: "8.2 oz", description: "Balanced weight optimized for both power and control" },
{ label: "GRIP", value: "130mm", description: "Elongated handle for two-handed backhand versatility" },
{ label: "BALANCE", value: "Central", description: "Neutral balance point for consistent swing dynamics" },
{ label: "SURFACE", value: "T700 Carbon Fiber", description: "Full UV print with sandblasted texture for spin generation" },
{ label: "WARRANTY", value: "30-Day Play Test", description: "Full performance guarantee or your money back" }];


const faqItems = [
{ question: "What is the 30-day trial?", answer: "We believe in The Architect. If it doesn't improve your game within 30 days, return it for a full refund. No questions asked. We'll even cover return shipping." },
{ question: "Why preorder only?", answer: "We manufacture in controlled batches to maintain quality standards. By taking preorders, we eliminate retail markup, warehousing costs, and uncertainty—passing savings directly to you." },
{ question: "Is this paddle tournament approved?", answer: "Yes. The Architect is fully approved by the USA Pickleball Association (USAPA) for tournament play. Its specifications meet all regulatory requirements." },
{ question: "What is the shipping time?", answer: "Batch 002 paddles begin shipping March 15th, 2026. Orders are fulfilled in the sequence they were placed. You'll receive tracking information via email once your paddle ships." },
{ question: "What grip size should I choose?", answer: "The Architect features a 130mm elongated grip, suitable for most hand sizes and enabling two-handed backhands. If you prefer a smaller grip, overgrips can be removed. For larger hands, consider adding an overgrip for additional circumference." }];


const TheArchitect = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
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
    storefrontApiRequest(PRODUCT_QUERY, { handle: "the-architect-batch-002" }).
    then((data) => {
      if (data?.data?.product) {
        setShopifyProduct({ node: data.data.product });
      }
    }).
    catch(console.error);
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
      selectedOptions: variant.selectedOptions || []
    });

    toast.success(`Added ${qty} to cart`, {
      description: "The Architect — Batch 002",
      position: "top-center"
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
                    <h1 className="tempo-headline text-4xl md:text-5xl lg:text-6xl mb-2">The tactician's instrument. Engineered for absolute placement, vibration control, and neutralising opponent power. Built with elite-grade materials trusted at the highest levels of competition.</h1>
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
                    <p className="text-sm text-tempo-carbon/70">Our best paddle at our lowest price yet</p>

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
                            className="h-full bg-tempo-stock rounded-full" />

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
                      isButtonHovered ? "bg-tempo-navy text-tempo-bone" : "bg-tempo-carbon text-tempo-bone"}`
                      }>

                      {isLoading ?
                      <Loader2 className="w-4 h-4 animate-spin" /> :

                      <>
                          <motion.span animate={{ x: isButtonHovered ? -8 : 0 }} transition={{ duration: 0.3 }}>
                            Add to Cart
                          </motion.span>
                          <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isButtonHovered ? 1 : 0, x: isButtonHovered ? 0 : -10 }}
                          transition={{ duration: 0.3 }}>

                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </>
                      }
                    </motion.button>

                    {/* Limit notice + Why preorder link */}
                    <div className="text-center space-y-1 pt-1">
                      <p className="text-xs text-tempo-carbon/50">Limit 2 per customer</p>
                      <button
                        onClick={scrollToFaqWhyPreorder}
                        className="text-xs text-tempo-navy underline underline-offset-2 hover:text-tempo-navy/80 transition-colors cursor-pointer">

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

                  {/* Product Description */}
                  <ProductDescription onScrollToSpecs={scrollToSpecs} />
                </div>
              </div>
            </div>
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
          xmlns="http://www.w3.org/2000/svg">

          <path
            d="M0,120 L0,80 C120,95 240,110 360,100 C480,90 600,50 720,35 C840,20 960,30 1080,50 C1200,70 1320,95 1440,90 L1440,120 Z"
            className="fill-tempo-navy" />

        </svg>
      </div>

      {/* DARK TOPO SECTION — Specs, Testimonials, FAQ, Bottom CTA */}
      <div
        className="relative bg-tempo-navy bg-cover bg-center"
        style={{ backgroundImage: `url(${topoBackground})` }}>

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
                className="tempo-headline text-3xl md:text-4xl lg:text-5xl text-center mb-12 lg:mb-16 text-tempo-bone">

                Technical Specifications
              </motion.h2>
              <TechSpecs specs={specs} variant="grid-only" dark />
            </div>
          </section>

          <TestimonialsSection dark />

          <div ref={faqSectionRef} className="max-w-[1100px] mx-auto px-6 lg:px-12">
            <ProductFAQ items={faqItems} dark defaultOpenValue={faqDefaultOpen} />
          </div>

          {/* Bottom CTA */}
          <section className="py-16 lg:py-24">
            <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCartClick}
                disabled={isLoading || !shopifyProduct}
                className="bg-tempo-bone text-tempo-carbon py-4 px-12 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors duration-300 disabled:opacity-50">

                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Reserve Now — $135.00"}
              </motion.button>
            </div>
          </section>
        </div>
      </div>

      {/* Quantity Picker Dialog */}
      <AlertDialog open={isQtyDialogOpen} onOpenChange={setIsQtyDialogOpen}>
        <AlertDialogContent className="bg-tempo-bone border-tempo-carbon/10 max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="tempo-headline text-xl text-center">
              HOW MANY?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-tempo-carbon/60 text-sm">
              Limited to 2 per customer
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-4 py-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleAddToCartWithQty(1)}
              disabled={isLoading}
              className="flex-1 py-4 border-2 border-tempo-carbon rounded-lg text-tempo-carbon font-bold text-lg hover:bg-tempo-carbon hover:text-tempo-bone transition-colors disabled:opacity-50">

              {isLoading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "1 Paddle"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleAddToCartWithQty(2)}
              disabled={isLoading}
              className="flex-1 py-4 border-2 border-tempo-carbon rounded-lg text-tempo-carbon font-bold text-lg hover:bg-tempo-carbon hover:text-tempo-bone transition-colors disabled:opacity-50">

              {isLoading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "2 Paddles"}
            </motion.button>
          </div>
          <AlertDialogFooter className="justify-center">
            <AlertDialogCancel className="border-tempo-carbon/20 text-tempo-carbon/60 rounded-full">
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <MegaFooter onFounderStoryClick={() => setIsFounderModalOpen(true)} />
      <StickyReserveButton onAddToCart={() => setIsQtyDialogOpen(true)} isLoading={isLoading} disabled={!shopifyProduct} />
      <FounderStoryModal isOpen={isFounderModalOpen} onClose={() => setIsFounderModalOpen(false)} />
    </main>);

};

export default TheArchitect;