import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";

const legalContent: Record<string, { title: string; content: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    content: [
      "Your privacy is important to us. This Privacy Policy explains how Tempo Pickleball collects, uses, discloses, and safeguards your information when you visit our website or make a purchase.",
      "We collect information you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact us for support. This may include your name, email address, postal address, phone number, and payment information.",
      "We use the information we collect to process transactions, send you order confirmations and updates, respond to your comments and questions, and provide customer support. We may also use your information to send promotional communications, such as information about products, features, and events offered by Tempo Pickleball.",
      "We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.",
      "You may opt out of receiving promotional communications from us by following the instructions in those messages. If you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.",
    ],
  },
  terms: {
    title: "Terms of Service",
    content: [
      "Welcome to Tempo Pickleball. These Terms of Service govern your use of our website and your purchase of products from us. By accessing our website or placing an order, you agree to be bound by these terms.",
      "All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time. Prices for our products are subject to change without notice. We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of any product.",
      "When you place an order, you offer to buy the products selected. We may accept your offer by sending a confirmation email. The contract is formed when we dispatch your order. We reserve the right to refuse any order placed through our site.",
      "All TEMPO paddles come with a 12-month limited warranty against manufacturer defects and workmanship flaws. This warranty does not cover damage caused by misuse, negligence, or normal wear and tear.",
      "Our liability to you for any claim arising from your purchase shall not exceed the price you paid for the product. We shall not be liable for any indirect, incidental, special, or consequential damages.",
    ],
  },
  shipping: {
    title: "Shipping Information",
    content: [
      "We offer free standard shipping on all orders over $100 within Australia. Orders under $100 are subject to a flat shipping rate of $8.95.",
      "Standard shipping typically takes 5-7 business days. Expedited shipping options are available at checkout for an additional fee. Express shipping (2-3 business days) is $14.95, and overnight shipping is $24.95.",
      "Orders are processed within 1-2 business days. You will receive a shipping confirmation email with tracking information once your order has shipped. Please allow up to 24 hours for tracking information to become active.",
      "We currently ship to Australia and New Zealand. International shipping to the US and Europe coming soon.",
      "If your package is lost or damaged during transit, please contact our customer service team within 7 days of the expected delivery date. We will work with the carrier to resolve the issue promptly.",
    ],
  },
  returns: {
    title: "Warranty & Return Policy",
    content: [
      "At TEMPO, we are committed to engineering premium, high-performance pickleball paddles. We stand behind our craftsmanship, but due to the rigorous nature of the sport, we have strict guidelines regarding returns and warranties.",

      "RETURN POLICY — To maintain the highest standard of quality for all our customers, we do not offer \"change of mind\" returns or \"try it out\" periods. All sales are final once the paddle has been used or packaging has been removed/tampered with.",

      "Preorder Cancellations: If you have placed a preorder, you may change your mind and cancel for a full refund strictly before the official preorder cutoff date. Please email our support team at support@tempopickleball.store to process your cancellation.",

      "Unopened Returns: If you change your mind before opening the packaging, we accept returns within 14 days of delivery strictly for paddles that are completely unopened, unused, and in their original packaging with the handle shrink-wrap perfectly intact. The customer is responsible for all return shipping costs, and a refund will only be issued after the paddle passes our physical inspection.",

      "Damaged on Arrival: If your paddle arrives damaged from transit, you must contact us within 48 hours of delivery with photographic evidence before opening or using the paddle.",

      "12-MONTH LIMITED WARRANTY — All TEMPO paddles come with a 12-month limited warranty against manufacturer defects and workmanship flaws, including issues with core materials, severe deformation, or delamination.",

      "Warranty Conditions: The warranty is strictly non-transferable and applies only to the original purchaser. Valid proof of purchase (order number or receipt) is required for all claims. TEMPO reserves the right to evaluate, judge, and determine whether a paddle's damage is covered by our warranty, and whether to issue a replacement or a refund.",

      "What is NOT Covered: Pickleball paddles naturally degrade with heavy use. This warranty protects against factory defects, not the physical toll of the game. The following are explicitly excluded: normal wear and tear (including fading of graphics, face texture wearing down, and standard grip degradation), impact damage (hitting the ground, net, other paddles, or any object other than a pickleball), edge wear, abuse and negligence, aftermarket modifications (including clamp-on weights, lead tape, or third-party weighting systems), extreme climate damage (below 5°C / 40°F), minor internal rattling that does not impact performance, and paddles bought from unauthorised resellers.",

      "HOW TO FILE A WARRANTY CLAIM — Do not ship your paddle back to us before receiving approval. Email our support team at support@tempopickleball.store with the subject line \"Warranty Claim: [Your Order Number]\". Include a clear description of the defect and attach clear, well-lit photos showing the manufacturer defect. Our team will review your claim within 3–5 business days. If approved, we will provide you with the next steps for a replacement or refund.",
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    content: [
      "Tempo Pickleball is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.",
      "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.",
      "Our website includes features such as keyboard navigation, descriptive alt text for images, proper heading structure, sufficient color contrast, and resizable text. We regularly test our website with assistive technologies including screen readers.",
      "If you encounter any accessibility barriers on our website, please contact us. We welcome your feedback and will consider it as we evaluate ways to accommodate all of our customers and improve our accessibility policies.",
      "To report an accessibility issue or request assistance, please email us at accessibility@tempopickleball.com or call our customer service line. We aim to respond to accessibility feedback within 2 business days.",
    ],
  },
};

const LegalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = legalContent[slug || "privacy"];

  if (!page) {
    return null;
  }

  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />
      
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-tempo-carbon/60 mb-8"
          >
            <Link to="/" className="hover:text-tempo-carbon transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-tempo-carbon">{page.title}</span>
          </motion.nav>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-sm text-tempo-carbon/60 
                       hover:text-tempo-carbon transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold tracking-wide uppercase mb-12 text-tempo-carbon"
          >
            {page.title}
          </motion.h1>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {page.content.map((paragraph, index) => (
              <p 
                key={index}
                className="text-base md:text-lg leading-relaxed text-tempo-carbon/70"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Last Updated */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-tempo-carbon/50 mt-12 pt-8 border-t border-tempo-carbon/10"
          >
            Last updated: January 2026
          </motion.p>
        </div>
      </div>

      <MegaFooter />
    </main>
  );
};

export default LegalPage;
