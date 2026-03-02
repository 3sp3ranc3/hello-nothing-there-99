import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import whySweetspot from "@/assets/why-sweetspot.jpg";
import whySpin from "@/assets/why-spin.jpg";
import whyControl from "@/assets/why-control.jpg";
import whyValue from "@/assets/why-value.jpg";

// ── Data ──

const BLOCKS = [
  {
    pill: "SWEET SPOT",
    number: "2×",
    translation: "Larger sweet spot than standard carbon",
    proof: "T700 carbon · optimised flex pattern",
    image: whySweetspot,
  },
  {
    pill: "SPIN",
    number: "+40%",
    translation: "More topspin than a smooth-face paddle",
    proof: "Sandblasted T700 face · maximum surface bite",
    image: whySpin,
  },
  {
    pill: "CONTROL",
    number: "16mm",
    translation: "Wide-body core built for the kitchen",
    proof: "Trufoam™ 4th gen · vibration dampened",
    image: whyControl,
  },
  {
    pill: "VALUE",
    number: "$135",
    translation: "Tournament carbon. Half the price.",
    proof: "Batch 002 · 250 units · Ships March 2026",
    image: whyValue,
  },
] as const;

const REVIEWS: Record<number, { text: string; attribution: string }> = {
  0: {
    text: "I've hit so many off-centre shots that should have been dead but they just pop over the net. The face bites hard — it feels like you have a whole extra second to place the ball.",
    attribution: "— Lachlan · Tournament player · Sydney",
  },
  1: {
    text: "I've hit so many off-centre shots that should have been dead but they just pop over the net. The face bites hard — it feels like you have a whole extra second to place the ball.",
    attribution: "— Lachlan · Tournament player · Sydney",
  },
  2: {
    text: "The control at the net completely changed my game. I used to pop up my dinks and get punished. Now I keep the ball low almost every time. Way more confidence in those exchanges.",
    attribution: "— Rachel · Club player · Melbourne",
  },
  3: {
    text: "I bought this as a backup for my $300 tournament paddle. I don't reach for the $300 one anymore. Haven't for months.",
    attribution: "— Oliver · 3.5 player · Sydney",
  },
};

const AUTO_ADVANCE_MS = 8000;

// ── Stat Block ──

interface StatBlockProps {
  index: number;
  active: boolean;
  onClick: () => void;
  pill: string;
  number: string;
  translation: string;
  proof: string;
}

const StatBlock = ({ active, onClick, pill, number, translation, proof }: StatBlockProps) => (
  <button
    onClick={onClick}
    className="w-full text-left transition-all duration-300 rounded-[14px] px-7 py-6 cursor-pointer outline-none"
    style={{
      background: active ? "#0D1117" : "#F7F7F5",
      border: active ? "1px solid #0D1117" : "1px solid rgba(0,0,0,0.07)",
      boxShadow: active ? "0 8px 32px rgba(0,0,0,0.18)" : "none",
    }}
  >
    {/* pill */}
    <div className="flex justify-end mb-3">
      <span
        className="rounded-full px-2.5 py-1 transition-all duration-300"
        style={{
          background: active ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.07)",
          color: active ? "rgba(255,255,255,0.7)" : "rgba(13,17,23,0.5)",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 9,
          letterSpacing: "0.14em",
          textTransform: "uppercase" as const,
        }}
      >
        {pill}
      </span>
    </div>
    {/* number */}
    <p
      className="transition-colors duration-300"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 56,
        fontWeight: 300,
        lineHeight: 1,
        color: active ? "#ffffff" : "#0D1117",
        opacity: active ? 1 : 0.6,
      }}
    >
      {number}
    </p>
    {/* translation */}
    <p
      className="mt-1.5 transition-colors duration-300"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.4,
        color: active ? "#ffffff" : "#0D1117",
        opacity: active ? 1 : 0.6,
      }}
    >
      {translation}
    </p>
    {/* proof */}
    <p
      className="mt-1 transition-colors duration-300"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.06em",
        color: active ? "rgba(255,255,255,0.4)" : "rgba(13,17,23,0.4)",
      }}
    >
      {proof}
    </p>
  </button>
);

// ── Stars ──

const Stars = () => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="#C9A84C">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

// ── Mobile Pill ──

const MobilePill = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex-shrink-0 rounded-full px-4 py-2 transition-all duration-300 text-center"
    style={{
      background: active ? "#0D1117" : "#F7F7F5",
      border: active ? "1px solid #0D1117" : "1px solid rgba(0,0,0,0.07)",
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.12em",
      textTransform: "uppercase" as const,
      color: active ? "#ffffff" : "rgba(13,17,23,0.6)",
    }}
  >
    {label}
  </button>
);

// ── Main Section ──

const WhyArchitectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, AUTO_ADVANCE_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const handleClick = (i: number) => {
    setActiveIndex(i);
    resetTimer();
  };

  const block = BLOCKS[activeIndex];
  const review = REVIEWS[activeIndex];

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* ── Headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 56,
              fontWeight: 300,
              lineHeight: 1.05,
              color: "#0D1117",
            }}
            className="text-4xl lg:text-[56px]"
          >
            The paddle that does more.
          </h2>
          <p
            className="mt-4 max-w-[560px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              fontWeight: 400,
              color: "rgba(13,17,23,0.55)",
              lineHeight: 1.5,
            }}
          >
            Four reasons players who try The Architect don't go back.
          </p>
        </motion.div>

        {/* ── Desktop Two Column ── */}
        <div className="hidden lg:grid mt-9" style={{ gridTemplateColumns: "38% 58%", gap: "4%" }}>
          {/* Left — Stat Blocks */}
          <div className="flex flex-col gap-4">
            {BLOCKS.map((b, i) => (
              <StatBlock
                key={i}
                index={i}
                active={activeIndex === i}
                onClick={() => handleClick(i)}
                pill={b.pill}
                number={b.number}
                translation={b.translation}
                proof={b.proof}
              />
            ))}
          </div>

          {/* Right — Image + Review */}
          <div>
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
              {BLOCKS.map((b, i) => (
                <img
                  key={i}
                  src={b.image}
                  alt={b.pill}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                  style={{ opacity: activeIndex === i ? 1 : 0 }}
                />
              ))}
            </div>

            {/* Review Card */}
            <div
              className="mt-4 rounded-[14px] px-8 py-7"
              style={{
                background: "#F7F7F5",
                border: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <Stars />
              <div className="relative mt-2 min-h-[90px]">
                {Object.entries(REVIEWS).map(([key, r]) => (
                  <p
                    key={key}
                    className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                    style={{
                      opacity: activeIndex === Number(key) ? 1 : 0,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 17,
                      fontWeight: 300,
                      color: "rgba(13,17,23,0.88)",
                      lineHeight: 1.65,
                    }}
                  >
                    {r.text}
                  </p>
                ))}
              </div>
              <div className="relative mt-5 h-4">
                {Object.entries(REVIEWS).map(([key, r]) => (
                  <p
                    key={key}
                    className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                    style={{
                      opacity: activeIndex === Number(key) ? 1 : 0,
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11,
                      color: "rgba(13,17,23,0.38)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {r.attribution}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile Layout ── */}
        <div className="lg:hidden mt-8">
          {/* Scrollable pills */}
          <div className="flex gap-2 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {BLOCKS.map((b, i) => (
              <MobilePill
                key={i}
                label={b.pill}
                active={activeIndex === i}
                onClick={() => handleClick(i)}
              />
            ))}
          </div>

          {/* Active block detail */}
          <div className="mt-4 mb-2">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 48,
                fontWeight: 300,
                lineHeight: 1,
                color: "#0D1117",
              }}
            >
              {block.number}
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "#0D1117",
                lineHeight: 1.4,
              }}
            >
              {block.translation}
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.06em",
                color: "rgba(13,17,23,0.4)",
              }}
            >
              {block.proof}
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-[260px] rounded-2xl overflow-hidden mt-4">
            {BLOCKS.map((b, i) => (
              <img
                key={i}
                src={b.image}
                alt={b.pill}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                style={{ opacity: activeIndex === i ? 1 : 0 }}
              />
            ))}
          </div>

          {/* Review card */}
          <div
            className="mt-4 rounded-[14px] px-6 py-5"
            style={{
              background: "#F7F7F5",
              border: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            <Stars />
            <p
              className="mt-2"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 300,
                color: "rgba(13,17,23,0.88)",
                lineHeight: 1.65,
              }}
            >
              {review.text}
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                color: "rgba(13,17,23,0.38)",
                letterSpacing: "0.06em",
              }}
            >
              {review.attribution}
            </p>
          </div>
        </div>

        {/* ── Section Footer ── */}
        <div className="mt-16">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 400,
              color: "rgba(13,17,23,0.4)",
            }}
          >
            300+ hours of athlete testing in Sydney went into this paddle.
          </p>
          <div className="mt-5">
            <Link
              to="/products/the-architect"
              className="inline-block rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
              style={{
                background: "#0D1117",
                color: "#ffffff",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.03em",
                padding: "15px 34px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1e2530")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0D1117")}
            >
              Preorder The Architect — $135
            </Link>
          </div>
          <p
            className="mt-3"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              color: "rgba(13,17,23,0.25)",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
            }}
          >
            ONLY 250 MADE · SHIPS MARCH 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyArchitectSection;
