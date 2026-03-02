import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import architectDetail from "@/assets/architect-detail.webp";

const CYCLE_MS = 8000;

interface StatBlock {
  layer1: string;
  layer2: string;
  layer3: string;
}

const stats: StatBlock[] = [
  {
    layer1: "2×",
    layer2: "Larger effective sweet spot",
    layer3: "T700 carbon · optimised flex pattern · vs. standard carbon",
  },
  {
    layer1: "+40%",
    layer2: "More topspin potential",
    layer3: "Sandblasted T700 face · maximum surface bite · vs. smooth-face paddles",
  },
  {
    layer1: "16mm",
    layer2: "Wide-body core built for the kitchen",
    layer3: "Trufoam™ 4th gen · vibration dampened",
  },
  {
    layer1: "$135",
    layer2: "Tournament-grade carbon. Half the price.",
    layer3: "Batch 002 · 250 units only · Ships March 2026",
  },
];

interface Review {
  stars: number;
  text: string;
  name: string;
  descriptor: string;
  location: string;
}

const reviews: Review[] = [
  {
    stars: 5,
    text: "I've hit so many off-centre shots that should have been dead but popped nicely over the net. It almost feels like cheating.",
    name: "Oliver",
    descriptor: "3.5 player",
    location: "Sydney",
  },
  {
    stars: 5,
    text: "The face bites so hard it feels like you have a whole extra second to place the ball. I bought this as a backup. It became my only paddle.",
    name: "Lachlan",
    descriptor: "Tournament player",
    location: "Sydney",
  },
  {
    stars: 5,
    text: "My partner got me onto Tempo and I'm so happy. The control at the net completely changed my dink game. Way more confidence in those exchanges now.",
    name: "Rachel",
    descriptor: "Club player",
    location: "Melbourne",
  },
];

// Review index → which stat blocks are active
const reviewToStats: number[][] = [[0], [1, 2], [3]];

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#C9A84C" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0.5L8.76 5.06L13.72 5.46L9.94 8.74L11.08 13.54L7 11.02L2.92 13.54L4.06 8.74L0.28 5.46L5.24 5.06L7 0.5Z" />
  </svg>
);

const SocialProofSection = () => {
  const [activeReview, setActiveReview] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, []);

  const activeStats = reviewToStats[activeReview];

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: "#0D1117" }}
      className="relative"
    >
      <div
        className="mx-auto"
        style={{ padding: "80px 24px", maxWidth: "1800px" }}
      >
        {/* Desktop: side-by-side / Mobile: stacked */}
        <div className="flex flex-col lg:flex-row lg:items-start" style={{ gap: "6%" }}>
          {/* LEFT COLUMN — 42% */}
          <div className="w-full lg:w-[42%]">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Built different. Proven in play.
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "48px",
                fontWeight: 300,
                color: "#ffffff",
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              The Architect.
            </motion.h2>

            {/* Stat Blocks */}
            <div>
              {stats.map((stat, i) => {
                const isActive = activeStats.includes(i);
                return (
                  <div
                    key={i}
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      padding: "28px 0",
                      paddingLeft: isActive ? "14px" : "0",
                      borderLeft: isActive ? "2px solid rgba(255,255,255,0.6)" : "2px solid transparent",
                      opacity: isActive ? 1 : 0.55,
                      transition: "all 0.4s ease",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "52px",
                        fontWeight: 300,
                        color: isActive ? "#F5F0EA" : "#ffffff",
                        lineHeight: 1.0,
                        transition: "color 0.4s ease",
                      }}
                    >
                      {stat.layer1}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.4,
                        marginTop: "6px",
                      }}
                    >
                      {stat.layer2}
                    </p>
                    <p
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "11px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.38)",
                        letterSpacing: "0.08em",
                        lineHeight: 1.5,
                        marginTop: "5px",
                      }}
                    >
                      {stat.layer3}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN — 52% */}
          <div className="w-full lg:w-[52%] mt-12 lg:mt-0 flex items-center">
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: "16px",
                    padding: "40px",
                  }}
                >
                  {/* Stars */}
                  <div className="flex items-center" style={{ gap: "3px", marginBottom: "24px" }}>
                    {Array.from({ length: reviews[activeReview].stars }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "18px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.9)",
                      lineHeight: 1.65,
                      marginBottom: "24px",
                    }}
                  >
                    {reviews[activeReview].text}
                  </p>

                  {/* Attribution */}
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.06em",
                      marginBottom: "28px",
                    }}
                  >
                    — {reviews[activeReview].name} · {reviews[activeReview].descriptor} · {reviews[activeReview].location}
                  </p>

                  {/* Paddle Image */}
                  <img
                    src={architectDetail}
                    alt="The Architect paddle carbon face texture"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* SECTION FOOTER */}
        <div style={{ marginTop: "64px", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.6,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            300+ hours of player testing went into this paddle. One batch to prove it. One more to perfect it.
          </p>

          <div style={{ marginTop: "28px" }}>
            <motion.a
              href="/products/the-architect"
              whileHover={{ scale: 1.02, backgroundColor: "#F0EDE8" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-block",
                backgroundColor: "#ffffff",
                color: "#0D1117",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                padding: "16px 36px",
                borderRadius: "100px",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              Preorder The Architect — $135
            </motion.a>
          </div>

          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              color: "rgba(255,255,255,0.28)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginTop: "10px",
            }}
          >
            ONLY 250 MADE · SHIPS MARCH 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
