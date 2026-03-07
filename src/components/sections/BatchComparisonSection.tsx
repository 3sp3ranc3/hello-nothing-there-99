import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const BatchComparisonSection = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true }}
          className="mb-10 lg:mb-14"
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.35)",
              marginBottom: 12,
            }}
          >
            The Journey
          </p>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(40px, 6vw, 72px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              color: "#000000",
            }}
          >
            From Batch 001
            <br />
            to Batch 002.
          </h2>
        </motion.div>

        {/* Two-column grid — matches WhyArchitect proportions */}
        <div className="flex flex-col lg:flex-row gap-[12px]">
          {/* Batch 001 — Left tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 rounded-2xl flex flex-col justify-between"
            style={{
              background: "#f3f5f9",
              padding: "32px 28px 28px",
              border: "1.5px solid rgba(0,0,0,0.06)",
            }}
          >
            {/* Tag */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 1,
                    background: "rgba(0,0,0,0.2)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    color: "rgba(0,0,0,0.4)",
                    textTransform: "uppercase",
                  }}
                >
                  Batch 001
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  letterSpacing: "-0.02em",
                  color: "#000000",
                  marginBottom: 20,
                }}
              >
                Sydney Exclusive
              </h3>

              {/* Specs */}
              <div className="flex flex-col gap-[8px] mb-8">
                {["100 units · Limited run", "Athlete-tested in Sydney", "Foundation build"].map(
                  (spec) => (
                    <div key={spec} className="flex items-baseline gap-2">
                      <span
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: 10,
                          color: "rgba(0,0,0,0.25)",
                        }}
                      >
                        —
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13,
                          fontWeight: 400,
                          color: "rgba(0,0,0,0.55)",
                        }}
                      >
                        {spec}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Price + CTA */}
            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(32px, 4vw, 48px)",
                  letterSpacing: "-0.03em",
                  color: "rgba(0,0,0,0.25)",
                  marginBottom: 20,
                }}
              >
                $245
              </p>

              <span
                className="inline-block"
                style={{
                  border: "1px solid rgba(0,0,0,0.12)",
                  borderRadius: 100,
                  padding: "10px 18px",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 9,
                  letterSpacing: "0.12em",
                  color: "rgba(0,0,0,0.3)",
                  textTransform: "uppercase",
                  cursor: "default",
                }}
              >
                Allocation Exhausted
              </span>
            </div>
          </motion.div>

          {/* Batch 002 — Right tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 rounded-2xl flex flex-col justify-between"
            style={{
              background: "#000000",
              padding: "32px 28px 28px",
              border: "1.5px solid #000000",
            }}
          >
            {/* Tag */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="animate-pulse002"
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 1,
                    background: "#4ade80",
                    boxShadow: "0 0 6px rgba(74,222,128,0.5)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                  }}
                >
                  Batch 002
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                  marginBottom: 20,
                }}
              >
                National Release
              </h3>

              {/* Specs */}
              <div className="flex flex-col gap-[8px] mb-8">
                {[
                  "250 units · Enhanced build",
                  "Refined from 300+ hours of feedback",
                  "Open to all players nationwide",
                ].map((spec) => (
                  <div key={spec} className="flex items-baseline gap-2">
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 10,
                        color: "rgba(255,255,255,0.25)",
                      }}
                    >
                      —
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div>
              <div className="flex items-baseline gap-3 mb-6">
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(32px, 4vw, 48px)",
                    letterSpacing: "-0.03em",
                    color: "#FFFFFF",
                  }}
                >
                  $135
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 9,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: 3,
                    padding: "3px 8px",
                  }}
                >
                  Founder Price
                </span>
              </div>

              <Link to="/products/the-architect">
                <motion.span
                  className="inline-flex items-center gap-2 group"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 100,
                    padding: "12px 24px",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.10em",
                    color: "#000000",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Available for Preorder
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-[3px]" />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Footer bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center md:items-baseline justify-between gap-3 mt-8 pt-6"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 9,
              letterSpacing: "0.10em",
              color: "rgba(0,0,0,0.3)",
              textTransform: "uppercase",
            }}
          >
            The Architect · Batch 002 · Ships March 2026
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: 12,
              color: "rgba(0,0,0,0.35)",
            }}
          >
            <span style={{ color: "rgba(0,0,0,0.55)" }}>250 units</span> · nationwide
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default BatchComparisonSection;
