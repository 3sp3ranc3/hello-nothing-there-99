import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const BatchComparisonSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0E0E0E", padding: "120px 0 140px" }}
    >
      {/* SVG fractal noise overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="relative mx-auto" style={{ maxWidth: 1100, padding: "0 48px" }}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.16em",
            color: "#555",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          The Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(36px, 5vw, 56px)",
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            marginBottom: 80,
          }}
        >
          From Batch 001 to Batch 002.
        </motion.h2>

        {/* Two-Column Grid */}
        <div
          className="hidden md:grid"
          style={{ gridTemplateColumns: "1fr 1px 1fr" }}
        >
          {/* Batch 001 — Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            viewport={{ once: true, amount: 0.15 }}
            style={{ paddingRight: 56 }}
          >
            <BatchColumn001 />
          </motion.div>

          {/* Vertical Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            viewport={{ once: true, amount: 0.15 }}
            style={{
              background: "linear-gradient(to bottom, transparent, #333 20%, #333 80%, transparent)",
            }}
          />

          {/* Batch 002 — Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            viewport={{ once: true, amount: 0.15 }}
            style={{ paddingLeft: 56 }}
          >
            <BatchColumn002 />
          </motion.div>
        </div>

        {/* Mobile single column */}
        <div className="md:hidden flex flex-col" style={{ padding: "0" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            viewport={{ once: true, amount: 0.15 }}
            style={{ borderBottom: "1px solid #1A1A1A", paddingBottom: 56, marginBottom: 56 }}
          >
            <BatchColumn001 />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <BatchColumn002 />
          </motion.div>
        </div>

        {/* Footer Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col md:flex-row items-center md:items-baseline justify-between gap-4"
          style={{ marginTop: 80, borderTop: "1px solid #1A1A1A", paddingTop: 40 }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.10em",
              color: "#2E2E2E",
              textTransform: "uppercase",
            }}
          >
            The Architect · Batch 002 · Ships March 2026
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: 13,
              color: "#444",
            }}
          >
            <span style={{ color: "#888" }}>250 units</span> · nationwide
          </span>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Batch 001 ─── */
const BatchColumn001 = () => (
  <div>
    {/* Tag */}
    <div className="flex items-center gap-2" style={{ marginBottom: 20 }}>
      <span style={{ width: 5, height: 5, borderRadius: 1, background: "#333", display: "inline-block" }} />
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.14em",
          color: "#444",
          textTransform: "uppercase",
        }}
      >
        Batch 001
      </span>
    </div>

    {/* Name */}
    <h3
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: "clamp(24px, 3.5vw, 38px)",
        letterSpacing: "-0.02em",
        color: "#333",
        marginBottom: 32,
      }}
    >
      Sydney Exclusive
    </h3>

    {/* Specs */}
    <div className="flex flex-col" style={{ gap: 10, marginBottom: 36 }}>
      {["100 units · Limited run", "Athlete-tested in Sydney", "Foundation build"].map((spec) => (
        <div key={spec} className="flex items-baseline gap-2">
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              color: "#2A2A2A",
            }}
          >
            —
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 300,
              color: "#383838",
            }}
          >
            {spec}
          </span>
        </div>
      ))}
    </div>

    {/* Price */}
    <p
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: "clamp(28px, 4vw, 46px)",
        letterSpacing: "-0.03em",
        color: "#2E2E2E",
        marginBottom: 32,
      }}
    >
      $245
    </p>

    {/* CTA */}
    <span
      style={{
        display: "inline-block",
        border: "1px solid #222",
        borderRadius: 100,
        padding: "12px 20px",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.12em",
        color: "#2E2E2E",
        textTransform: "uppercase",
        cursor: "default",
      }}
    >
      Allocation Exhausted
    </span>
  </div>
);

/* ─── Batch 002 ─── */
const BatchColumn002 = () => (
  <div>
    {/* Tag with pulse */}
    <div className="flex items-center gap-2" style={{ marginBottom: 20 }}>
      <span
        className="animate-[pulse002_2.4s_ease-in-out_infinite]"
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
          fontSize: 10,
          letterSpacing: "0.14em",
          color: "#888",
          textTransform: "uppercase",
        }}
      >
        Batch 002
      </span>
    </div>

    {/* Name */}
    <h3
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: "clamp(24px, 3.5vw, 38px)",
        letterSpacing: "-0.02em",
        color: "#FFFFFF",
        marginBottom: 32,
      }}
    >
      National Release
    </h3>

    {/* Specs */}
    <div className="flex flex-col" style={{ gap: 10, marginBottom: 36 }}>
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
              color: "#555",
            }}
          >
            —
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 300,
              color: "#888",
            }}
          >
            {spec}
          </span>
        </div>
      ))}
    </div>

    {/* Price row */}
    <div className="flex items-baseline" style={{ gap: 12, marginBottom: 32 }}>
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "clamp(28px, 4vw, 46px)",
          letterSpacing: "-0.03em",
          color: "#FFFFFF",
        }}
      >
        $135
      </span>
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.10em",
          textTransform: "uppercase",
          color: "#C9A84C",
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.20)",
          borderRadius: 3,
          padding: "3px 8px",
          alignSelf: "center",
        }}
      >
        Founder Price
      </span>
    </div>

    {/* CTA */}
    <Link to="/products/the-architect">
      <motion.span
        className="inline-flex items-center gap-2 group"
        style={{
          background: "#FFFFFF",
          borderRadius: 100,
          padding: "14px 28px",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.10em",
          color: "#0E0E0E",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
        whileHover={{ scale: 0.98, backgroundColor: "#F0F0F0" }}
        whileTap={{ scale: 0.96 }}
      >
        Available for Preorder
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-[3px]" />
      </motion.span>
    </Link>
  </div>
);

export default BatchComparisonSection;
