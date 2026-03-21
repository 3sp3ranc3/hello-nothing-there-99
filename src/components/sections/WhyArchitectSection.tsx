import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images — map to each block
import architectFront from "@/assets/sweet-spot-card.webp";
import architectDetail from "@/assets/architect-detail.webp";
import architectBackhand from "@/assets/architect-backhand.jpg";
import architectPair from "@/assets/architect-pair.webp";

interface StatBlock {
  pill: string;
  stat: string;
  unit: string;
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
    stat: "2.5",
    unit: "×",
    human: "Larger sweet spot than standard carbon",
  },
  {
    pill: "SPIN",
    stat: "Max",
    unit: "",
    human: "Spin the rules allow",
  },
  {
    pill: "CONTROL",
    stat: "100",
    unit: "%",
    human: "Placement on every rally",
  },
  {
    pill: "VALUE",
    stat: "$119",
    unit: "",
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
    text: "The spin I can generate with this paddle is unlike anything I've played with before. Opponents genuinely don't know what's coming.",
    name: "Marcus",
    descriptor: "plays recreationally",
    location: "Bondi, NSW",
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
  className,
}: {
  block: StatBlock;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left rounded-2xl cursor-pointer transition-all duration-300 relative ${className || ""}`}
    style={{
      padding: "24px 24px 22px 24px",
      background: isActive ? "#000000" : "#f3f5f9",
      border: isActive ? "1.5px solid #000000" : "1.5px solid rgba(0,0,0,0.06)",
    }}
  >
    {/* Category pill — top right */}
    <span
      className="absolute top-[14px] right-[14px] rounded-full px-[10px] py-[3px] transition-all duration-300"
      style={{
        background: "transparent",
        border: isActive ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(0,0,0,0.2)",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "9px",
        letterSpacing: "0.14em",
        color: isActive ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.55)",
      }}
    >
      {block.pill}
    </span>

    {/* Stat — large number + inline unit like WHOOP */}
    <p
      className="transition-colors duration-300 leading-none"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        color: isActive ? "#ffffff" : "#000000",
      }}
    >
      <span style={{ fontSize: "clamp(42px, 5vw, 64px)" }}>{block.stat}</span>
      {block.unit && <span style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 500 }}>{block.unit}</span>}
    </p>

    {/* Human line */}
    <p
      className="mt-[5px] transition-colors duration-300"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: 1.4,
        color: isActive ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.65)",
      }}
    >
      {block.human}
    </p>
  </button>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <div
    className="absolute bottom-[16px] left-[16px] rounded-2xl"
    style={{
      width: "min(340px, calc(100% - 32px))",
      padding: "16px 18px 14px 18px",
      background: "rgba(240,242,245,0.78)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,0.4)",
    }}
  >
    {/* Verified badge row */}
    <div className="flex items-center gap-[6px] mb-[6px]">
      {/* Blue verified checkmark */}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#1D9BF0" />
        <path d="M7 12.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "8px",
          letterSpacing: "0.13em",
          fontWeight: 700,
          color: "#000000",
        }}
      >
        VERIFIED BATCH 001 OWNER
      </span>
    </div>

    <Stars />

    <p
      className="mt-[8px]"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "13px",
        fontWeight: 300,
        lineHeight: 1.55,
        color: "rgba(13,17,23,0.85)",
      }}
    >
      {review.text}
    </p>

    <p
      className="mt-[10px]"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "12px",
        fontWeight: 400,
        color: "rgba(13,17,23,0.45)",
      }}
    >
      {review.name}, {review.location}
    </p>
  </div>
);

const WhyArchitectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white pt-4 lg:pt-6 pb-28 lg:pb-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        {/* Headline + Subline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-5 lg:mb-7"
        >
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(56px, 8vw, 100px)",
              fontWeight: 500,
              lineHeight: 1.0,
              color: "#000000",
              letterSpacing: "-0.03em",
            }}
          >
            Craft you feel from
            <br className="hidden sm:block" /> the first rally.
          </h2>
          <p
            className="mt-[16px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: 1.55,
              color: "#000000",
            }}
          >
            Four things The Architect does better — proven by verified Batch 001 players.
          </p>
        </motion.div>

        {/* Two-column layout — LEFT narrow tiles, RIGHT large image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-[12px]"
        >
          {/* LEFT — Stat tiles: 30% width, stretches to match right */}
          <div className="w-full lg:w-[30%] flex flex-col gap-[10px]">
            {BLOCKS.map((block, i) => (
              <StatBlockItem
                key={block.pill}
                block={block}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i)}
                className="flex-1"
              />
            ))}
          </div>

          {/* RIGHT — Image panel: 70% width, square (1:1 aspect ratio) */}
          <div className="w-full lg:w-[70%]">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
              {/* Image with crossfade */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={IMAGES[activeIndex]}
                  alt={BLOCKS[activeIndex].human}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyArchitectSection;
