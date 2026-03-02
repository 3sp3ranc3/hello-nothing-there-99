import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images — map to each block
import architectFront from "@/assets/architect-front-white.webp";
import architectDetail from "@/assets/architect-detail.webp";
import architectBackhand from "@/assets/architect-backhand.jpg";
import architectPair from "@/assets/architect-pair.webp";

interface StatBlock {
  pill: string;
  stat: string;
  human: string;
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
  },
  {
    pill: "SPIN",
    stat: "Maximum",
    human: "Spin the rules allow",
  },
  {
    pill: "CONTROL",
    stat: "Surgical",
    human: "Placement on every rally",
  },
  {
    pill: "VALUE",
    stat: "$135",
    human: "Because great quality shouldn't be gatekept",
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

const Stars = () => (
  <div className="flex items-center gap-[3px]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-[13px] h-[13px] text-[#C9A84C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

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
    className="w-full text-left rounded-2xl cursor-pointer transition-all duration-300 relative flex-1"
    style={{
      padding: "18px 22px",
      background: isActive ? "#000000" : "#f3f5f9",
      border: isActive ? "1.5px solid #000000" : "1.5px solid rgba(0,0,0,0.06)",
    }}
  >
    {/* Category pill — top right, outline only */}
    <span
      className="absolute top-[14px] right-[14px] rounded-full px-[10px] py-[3px] transition-all duration-300"
      style={{
        background: "transparent",
        border: isActive ? "1px solid rgba(255,255,255,0.5)" : "1px solid rgba(0,0,0,0.25)",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "9px",
        letterSpacing: "0.14em",
        color: isActive ? "rgba(255,255,255,0.7)" : "#000000",
      }}
    >
      {block.pill}
    </span>

    {/* Stat */}
    <p
      className="transition-colors duration-300"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "clamp(30px, 3.5vw, 44px)",
        fontWeight: 700,
        lineHeight: 1.0,
        color: isActive ? "#ffffff" : "#000000",
      }}
    >
      {block.stat}
    </p>

    {/* Human line */}
    <p
      className="mt-[6px] transition-colors duration-300"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "13px",
        fontWeight: 500,
        lineHeight: 1.4,
        color: isActive ? "rgba(255,255,255,0.85)" : "#000000",
      }}
    >
      {block.human}
    </p>
  </button>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <div
    className="absolute bottom-[16px] left-[16px] right-[16px] rounded-xl px-[22px] py-[18px]"
    style={{
      background: "rgba(245,245,245,0.75)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.35)",
    }}
  >
    <div className="flex items-center gap-[6px]">
      <span className="w-[5px] h-[5px] rounded-full bg-[#2D9B5A] inline-block" />
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "8px",
          letterSpacing: "0.13em",
          color: "rgba(26,26,26,0.5)",
        }}
      >
        VERIFIED BATCH 001 BUYER
      </span>
    </div>

    <div className="mt-[6px]">
      <Stars />
    </div>

    <p
      className="mt-[8px]"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px",
        fontWeight: 300,
        lineHeight: 1.6,
        color: "rgba(13,17,23,0.85)",
      }}
    >
      {review.text}
    </p>

    <p
      className="mt-[12px]"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "10px",
        letterSpacing: "0.06em",
        color: "rgba(13,17,23,0.35)",
      }}
    >
      — {review.name} · {review.descriptor} · {review.location}
    </p>
  </div>
);

const WhyArchitectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Headline + Subline — left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left mb-10 lg:mb-14"
        >
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(44px, 7vw, 80px)",
              fontWeight: 500,
              lineHeight: 1.0,
              color: "#000000",
              letterSpacing: "-0.03em",
            }}
          >
            Craft you can feel from<br className="hidden sm:block" /> the first rally.
          </h2>
          <p
            className="mt-[12px] max-w-[480px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.55,
              color: "#000000",
            }}
          >
            Four things The Architect does better — proven by verified Batch 001 players.
          </p>
        </motion.div>

        {/* Two columns — WHOOP style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-[14px] items-stretch max-w-[1000px] mx-auto"
        >
          {/* LEFT — Stat blocks (very narrow) */}
          <div className="w-full lg:w-[20%] flex flex-col gap-[10px]">
            {BLOCKS.map((block, i) => (
              <StatBlockItem
                key={block.pill}
                block={block}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* RIGHT — Image + Review (dominant) */}
          <div className="w-full lg:w-[80%] mt-8 lg:mt-0">
            <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ minHeight: "420px" }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={IMAGES[activeIndex]}
                  alt={BLOCKS[activeIndex].human}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Bottom gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.45) 100%)",
                }}
              />

              {/* Review card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut", delay: 0.1 }}
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
