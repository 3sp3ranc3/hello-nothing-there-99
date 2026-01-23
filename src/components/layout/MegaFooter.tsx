import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Youtube, CreditCard, Wallet, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const MegaFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the Locker Room! 🏆",
      description: "You're now on the list for exclusive drops and insider access.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  const equipmentLinks = [
    { name: "The Architect", href: "/products/the-architect" },
    { name: "The Air", href: "/products/the-air" },
    { name: "The Ace", href: "/products/the-ace" },
    { name: "Complete Paddles Collection", href: "/collections/paddles" },
    { name: "Accessories & Gear", href: "/collections/accessories" },
    { name: "Apparel", href: "/collections/apparel" },
  ];

  const supportLinks = [
    { name: "About Tempo", href: "/pages/about" },
    { name: "Athlete Stories", href: "/pages/athletes" },
    { name: "Contact Concierge", href: "/pages/contact" },
    { name: "FAQ & Help Center", href: "/pages/faq" },
    { name: "Track Your Order", href: "/pages/track-order" },
    { name: "Warranty Registration", href: "/pages/warranty" },
    { name: "Paddle Comparison Tool", href: "/tools/compare" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/pages/privacy" },
    { name: "Terms of Service", href: "/pages/terms" },
    { name: "Shipping Information", href: "/pages/shipping" },
    { name: "Returns & Refunds", href: "/pages/returns" },
    { name: "Accessibility Statement", href: "/pages/accessibility" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-tempo-carbon text-tempo-bone">
      {/* Newsletter Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20"
      >
        <motion.div 
          variants={itemVariants}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16 mb-16"
        >
          {/* Newsletter Copy */}
          <div className="lg:w-[55%]">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-3">
              JOIN THE LOCKER ROOM
            </h2>
            <p className="text-base md:text-lg font-light tracking-wide text-tempo-bone/70">
              Unlock early access to drops, athlete exclusives, and insider training tips.
            </p>
          </div>

          {/* Newsletter Form */}
          <form 
            onSubmit={handleNewsletterSubmit}
            className="lg:w-[45%] flex flex-col sm:flex-row gap-3 max-w-[600px]"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-tempo-bone/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-[#0F0F0F] border border-tempo-bone/20 focus:border-tempo-bone/60 
                         py-4 pl-12 pr-6 text-tempo-bone placeholder:text-tempo-bone/40 
                         rounded-none outline-none transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-tempo-bone text-tempo-carbon font-bold tracking-wider uppercase 
                       py-4 px-8 transition-all duration-300 ease-out
                       hover:bg-tempo-navy hover:text-tempo-bone hover:scale-[1.02]
                       disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? "JOINING..." : "SUBSCRIBE"}
            </button>
          </form>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-tempo-bone/15 mb-16" />

        {/* Navigation Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
        >
          {/* Column 1: Brand Identity */}
          <motion.div variants={itemVariants}>
            <Link 
              to="/" 
              className="inline-block text-4xl md:text-5xl font-black tracking-[0.2em] uppercase mb-6
                       transition-all duration-300 hover:tracking-[0.25em]"
            >
              TEMPO
            </Link>
            <p className="text-sm leading-relaxed text-tempo-bone/60 max-w-xs mb-8">
              Engineered for the modern game. Precision, power, and pace.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-tempo-bone/60 hover:text-tempo-bone hover:scale-110 
                         transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(249,249,247,0.3)]"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                className="text-tempo-bone/60 hover:text-tempo-bone hover:scale-110 
                         transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(249,249,247,0.3)]"
              >
                {/* TikTok SVG since Lucide doesn't have it */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="text-tempo-bone/60 hover:text-tempo-bone hover:scale-110 
                         transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(249,249,247,0.3)]"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Equipment */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-tempo-bone/80">
              EQUIPMENT
            </h3>
            <ul className="space-y-3">
              {equipmentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm md:text-base font-light text-tempo-bone/60 
                             hover:text-tempo-bone hover:underline underline-offset-4
                             transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Support */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-tempo-bone/80">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm md:text-base font-light text-tempo-bone/60 
                             hover:text-tempo-bone hover:underline underline-offset-4
                             transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Legal */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-tempo-bone/80">
              LEGAL & POLICIES
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm md:text-base font-light text-tempo-bone/60 
                             hover:text-tempo-bone hover:underline underline-offset-4
                             transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Sub-Footer */}
        <motion.div
          variants={itemVariants}
          className="border-t border-tempo-bone/15 mt-16 pt-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-xs md:text-sm tracking-wide text-tempo-bone/50 text-center lg:text-left">
              © 2026 Tempo Pickleball. All Rights Reserved.
            </p>

            {/* Trust Badges - Desktop Only */}
            <p className="text-xs tracking-wide text-tempo-bone/50 hidden lg:block">
              100% Secure Checkout | Free Shipping Over $100 | 30-Day Returns
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <CreditCard className="w-8 h-5 text-tempo-bone/40 hover:text-tempo-bone/60 transition-colors" aria-label="Credit Card" />
              <Wallet className="w-8 h-5 text-tempo-bone/40 hover:text-tempo-bone/60 transition-colors" aria-label="Wallet" />
              {/* Apple Pay */}
              <svg className="w-10 h-5 text-tempo-bone/40 hover:text-tempo-bone/60 transition-colors" viewBox="0 0 50 20" fill="currentColor" aria-label="Apple Pay">
                <path d="M9.6 5.3c-.5.6-1.3 1.1-2.1 1-.1-.8.3-1.6.7-2.2.5-.6 1.3-1 2-1.1.1.8-.2 1.7-.6 2.3zm.6 1.2c-1.2-.1-2.2.7-2.7.7-.6 0-1.4-.6-2.4-.6-1.2 0-2.4.7-3 1.8-1.3 2.2-.3 5.6.9 7.4.6.9 1.4 1.9 2.3 1.9 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6c1 0 1.7-.9 2.3-1.9.7-1.1 1-2.1 1-2.2-1.1-.4-2-1.5-2-3 0-1.3.8-2.4 1.8-2.9-.7-1-.8-1.2-1.2-1.2h-2zm8.8 9.1V4h3.4c2.4 0 4.1 1.7 4.1 4s-1.7 4-4.1 4h-2.2v3.6h-1.2zm1.2-4.6h1.9c1.7 0 2.7-1 2.7-2.7 0-1.7-1-2.7-2.7-2.7h-1.9v5.4zm8.5 4.8c-1.4 0-2.4-.9-2.4-2.2 0-1.2.9-2 2.6-2.1l2.2-.1v-.6c0-.9-.6-1.4-1.6-1.4-.8 0-1.4.4-1.5 1h-1.1c0-1.2 1.1-2 2.7-2 1.7 0 2.7.9 2.7 2.3v4.9h-1.1v-1.2c-.4.8-1.3 1.4-2.5 1.4zm.3-1c1.1 0 1.9-.7 1.9-1.7v-.7l-2 .1c-1 .1-1.5.4-1.5 1.1 0 .7.6 1.2 1.6 1.2zm5.2 3.6v-1c.1 0 .3 0 .5 0 .7 0 1.1-.3 1.4-1.1l.1-.4-2.5-6.8h1.3l1.8 5.7 1.8-5.7h1.3l-2.5 7.2c-.6 1.6-1.2 2.1-2.6 2.1h-.6z"/>
              </svg>
              {/* PayPal */}
              <svg className="w-10 h-5 text-tempo-bone/40 hover:text-tempo-bone/60 transition-colors" viewBox="0 0 50 20" fill="currentColor" aria-label="PayPal">
                <path d="M8.5 17.5H5.8l1.8-11.3h2.7L8.5 17.5zm8.9-11c-.6-.3-1.5-.5-2.5-.5-2.8 0-4.7 1.5-4.7 3.6 0 1.6 1.4 2.5 2.5 3 1.1.5 1.5.9 1.5 1.4 0 .8-.9 1.1-1.7 1.1-1.1 0-1.7-.2-2.6-.6l-.4-.2-.4 2.4c.6.3 1.8.5 3 .5 2.9 0 4.8-1.5 4.9-3.7 0-1.2-.7-2.2-2.4-3-.9-.5-1.5-.8-1.5-1.4 0-.5.5-1 1.5-1 .9 0 1.5.2 2 .4l.2.1.5-2.1zm7.3-.3h-2.2c-.7 0-1.2.2-1.5.9l-4.2 10.1h2.9l.6-1.6h3.6c.1.4.3 1.6.3 1.6h2.6l-2.1-11zm-3.3 7.1c.2-.6 1.1-3 1.1-3l.1-.4.2.6.6 2.8h-2zm-12.8-7l-2.7 7.7-.3-1.4c-.5-1.7-2-3.5-3.7-4.4l2.5 9.4h3l4.5-11.3h-3.3z"/>
              </svg>
            </div>
          </div>

          {/* Easter Egg */}
          <p className="text-center text-[10px] text-tempo-bone/20 mt-8">
            Made with ❤️ by athletes, for athletes
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default MegaFooter;
