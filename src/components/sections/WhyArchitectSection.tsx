import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images — map to each block
import architectFront from "@/assets/architect-front-white.webp";
import architectDetail from "@/assets/architect-detail.webp";
import architectBackhand from "@/assets/architect-backhand.jpg";
import architectPair from "@/assets/architect-pair.webp";

// No auto-advance — click only

interface StatBlock {
  pill: string;
  stat: string;
  human: string;
  proof: string;
}

interface Review {
  text: string;
  name: string;
  descriptor: string;
  location: string;
}

const BLOCKS: StatBlock[] = [
  {
    pill: "SWEET SPOT",
    stat: "2.5×",
    human: "Larger sweet spot than standard carbon",
    proof: "T700 carbon · optimised flex pattern",
  },
  {
    pill: "SPIN",
    stat: "Maximum",
    human: "Spin the rules allow",
    proof: "Sandblasted T700 face · maximum surface bite",
  },
  {
    pill: "CONTROL",
    stat: "Surgical",
    human: "Placement on every rally",
    proof: "16mm wide-body · Trufoam™ 4th gen · vibration dampened",
  },
  {
    pill: "VALUE",
    stat: "$135",
    human: "Because great quality shouldn't be gatekept",
    proof: "Batch 002 · 250 units only · Ships March 2026",
  },
];

const IMAGES = [architectFront, architectDetail, architectBackhand, architectPair];

const REVIEWS: Review[] = [
  {
    text: "I've mishit this paddle more times than I can count and the ball still goes where I want. The face bites on every contact — it feels like you have a whole extra second to place it.",
    name: "Lachlan",
    descriptor: "plays competitively",
    location: "Rozelle, NSW",
  },
  {
    text: "I've mishit this paddle more times than I can count and the ball still goes where I want. The face bites on every contact — it feels like you have a whole extra second to place it.",
    name: "Lachlan",
    descriptor: "plays competitively",
    location: "Rozelle, NSW",
  },
  {
    text: "I used to pop my dinks constantly and just get punished at the net. That stopped almost immediately. The kitchen feels completely different with this paddle.",
    name: "Rachel",
    descriptor: "plays four times a week",
    location: "Newtown, NSW",
  },
  {
    text: "I bought this as a backup for my $300 tournament paddle. I don't reach for the $300 one anymore. Haven't for months.",
    name: "Oliver",
    descriptor: "switched from a $300 paddle",
    location: "Surry Hills, NSW",
  },
];

// Star component
const Stars = () => (
  <div className="flex items-center gap-[3px]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-[13px] h-[13px] text-[#C9A84C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

// Stat block component
const StatBlockItem = ({
  block,
  isActive,
  onClick,
}: {
  block: StatBlock;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="w-full text-left rounded-xl px-[20px] py-[14px] cursor-pointer transition-all duration-300 relative"
    style={{
      background: isActive ? "#000000" : "#f3f5f9",
      border: isActive ? "1px solid #000000" : "1px solid rgba(0,0,0,0.05)",
      boxShadow: isActive ? "0 8px 28px rgba(0,0,0,0.15)" : "none",
    }}
  >
    {/* Category pill — top right */}
    <span
      className="absolute top-[14px] right-[14px] rounded-full px-[10px] py-[3px] transition-all duration-300"
      style={{
        background: isActive ? "rgba(255,255,255,0.13)" : "rgba(0,0,0,0.07)",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "9px",
        letterSpacing: "0.14em",
        color: isActive ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.4)",
      }}
    >
      {block.pill}
    </span>

    {/* Layer 1 — Stat */}
    <p
      className="transition-colors duration-300"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "36px",
        fontWeight: 300,
        lineHeight: 1.0,
        color: isActive ? "#ffffff" : "#000000",
      }}
    >
      {block.stat}
    </p>

    {/* Layer 2 — Human */}
    <p
      className="mt-[6px] transition-colors duration-300"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: 1.35,
        color: isActive ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.55)",
      }}
    >
      {block.human}
    </p>
  </button>
);

// Review card component
const ReviewCard = ({ review }: { review: Review }) => (
  <div
    className="absolute bottom-0 left-0 right-0 mx-[14px] mb-[14px] rounded-xl px-[24px] py-[20px]"
    style={{
      background: "rgba(255,255,255,0.65)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      border: "1px solid rgba(255,255,255,0.4)",
    }}
  >
    {/* Verified pill */}
    <div className="flex items-center gap-[6px]">
      <span className="w-[6px] h-[6px] rounded-full bg-[#2D9B5A] inline-block" />
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.13em",
          color: "rgba(26,26,26,0.55)",
        }}
      >
        VERIFIED BATCH 001 BUYER
      </span>
    </div>

    {/* Stars */}
    <div className="mt-[8px]">
      <Stars />
    </div>

    {/* Review text */}
    <p
      className="mt-[10px]"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "16px",
        fontWeight: 300,
        lineHeight: 1.65,
        color: "rgba(13,17,23,0.9)",
      }}
    >
      {review.text}
    </p>

    {/* Attribution */}
    <p
      className="mt-[16px]"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "11px",
        letterSpacing: "0.06em",
        color: "rgba(13,17,23,0.38)",
      }}
    >
      — {review.name} · {review.descriptor} · {review.location}
    </p>
  </div>
);

const WhyArchitectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#ffffff] py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Headline + Subline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "52px",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "#0D1117",
            }}
          >
            Craft you can feel from the first rally.
          </h2>
          <p
            className="mt-[14px] max-w-[580px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(13,17,23,0.5)",
            }}
          >
            Four things The Architect does better — proven by verified Batch 001 players.
          </p>
        </motion.div>

        {/* Two columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-[10px] items-stretch"
        >
          {/* LEFT — Stat blocks */}
          <div className="w-full lg:w-[34%] flex flex-col gap-[10px]">
            {BLOCKS.map((block, i) => (
              <StatBlockItem
                key={block.pill}
                block={block}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* RIGHT — Image + Review */}
          <div className="w-full lg:w-[62%] mt-10 lg:mt-0">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden">
              {/* Images — cross-fade */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={IMAGES[activeIndex]}
                  alt={BLOCKS[activeIndex].human}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Bottom gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.5) 100%)",
                }}
              />

              {/* Review card — cross-fade independently */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                >
                  <ReviewCard review={REVIEWS[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyArchitectSection;
