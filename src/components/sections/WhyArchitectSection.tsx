import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images — map to each block
import architectFront from "@/assets/architect-front-white.webp";
import architectDetail from "@/assets/architect-detail.webp";
import architectBackhand from "@/assets/architect-backhand.jpg";
import architectPair from "@/assets/architect-pair.webp";

const AUTO_ADVANCE_MS = 8000;

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
    className="w-full text-left rounded-xl px-[26px] py-[22px] cursor-pointer transition-all duration-300 relative"
    style={{
      background: isActive ? "#1A1A1A" : "#F7F7F5",
      border: isActive ? "1px solid #1A1A1A" : "1px solid rgba(0,0,0,0.07)",
      boxShadow: isActive ? "0 8px 28px rgba(0,0,0,0.15)" : "none",
    }}
  >
    {/* Category pill — top right */}
    <span
      className="absolute top-[18px] right-[18px] rounded-full px-[10px] py-[4px] transition-all duration-300"
      style={{
        background: isActive ? "rgba(255,255,255,0.13)" : "rgba(0,0,0,0.07)",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "9px",
        letterSpacing: "0.14em",
        color: isActive ? "rgba(255,255,255,0.65)" : "rgba(13,17,23,0.45)",
      }}
    >
      {block.pill}
    </span>

    {/* Layer 1 — Stat */}
    <p
      className="transition-colors duration-300"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "50px",
        fontWeight: 300,
        lineHeight: 1.0,
        color: isActive ? "#ffffff" : "#0D1117",
        opacity: isActive ? 1 : 0.55,
      }}
    >
      {block.stat}
    </p>

    {/* Layer 2 — Human */}
    <p
      className="mt-[6px] transition-colors duration-300"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.35,
        color: isActive ? "#ffffff" : "#0D1117",
        opacity: isActive ? 1 : 0.55,
      }}
    >
      {block.human}
    </p>

    {/* Layer 3 — Proof */}
    <p
      className="mt-[5px] transition-colors duration-300"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "11px",
        letterSpacing: "0.06em",
        color: isActive ? "#ffffff" : "#0D1117",
        opacity: isActive ? 0.4 : 0.35,
      }}
    >
      {block.proof}
    </p>
  </button>
);

// Review card component
const ReviewCard = ({ review }: { review: Review }) => (
  <div
    className="absolute bottom-0 left-0 right-0 mx-[16px] mb-[16px] rounded-xl px-[26px] py-[22px]"
    style={{
      background: "rgba(255,255,255,0.82)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      border: "1px solid rgba(255,255,255,0.55)",
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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, AUTO_ADVANCE_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleBlockClick = (index: number) => {
    setActiveIndex(index);
    resetTimer();
  };

  return (
    <section className="bg-[#ffffff] py-24 lg:py-32">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
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
          className="flex flex-col lg:flex-row lg:gap-[6%] items-start"
        >
          {/* LEFT — Stat blocks */}
          <div className="w-full lg:w-[40%] flex flex-col gap-3">
            {BLOCKS.map((block, i) => (
              <StatBlockItem
                key={block.pill}
                block={block}
                isActive={activeIndex === i}
                onClick={() => handleBlockClick(i)}
              />
            ))}
          </div>

          {/* RIGHT — Image + Review */}
          <div className="w-full lg:w-[54%] mt-10 lg:mt-0">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
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
                  background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.42) 100%)",
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
