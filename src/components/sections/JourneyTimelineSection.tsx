import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface TimelineEvent {
  date: string;
  headline: string;
  body: string;
}

const EVENTS: TimelineEvent[] = [
  {
    date: "Jan 2025",
    headline: "The Frustration",
    body: "The frustration that started it all. Every paddle worth buying was $200+. And even then, you either got power or control. Spin or feel. I wanted all of it — without getting gouged for it. I wanted to build what didn't exist: a paddle that meets every need, priced for real players.",
  },
  {
    date: "Feb – Apr 2025",
    headline: "Obsession",
    body: "I went obsessive. Months of research into what makes a paddle perform. Specs, materials, geometry, core tech. I bought and tested paddles from every brand I could get my hands on — dissecting what they got right and where they were quietly cutting corners.",
  },
  {
    date: "Apr – May 2025",
    headline: "Tracking the Source",
    body: "I found where the big brands manufacture. Months of research, testing every brand I could get my hands on, then tracing them back to the source. Same factories. Same materials. Marked up 300% for a logo.",
  },
  {
    date: "May – Jul 2025",
    headline: "The Early Prototypes",
    body: "The early prototypes. The feel was close but the sweet spot inconsistent and the surface grit wasn't where it needed to be. Back to the drawing board.",
  },
  {
    date: "Jul 2025",
    headline: "The Ultimate Paddle",
    body: "The moment I held what would become Batch 001, I knew. TruFoam core. T700 Carbon face. Perfect weight and balance. Sandblasted finish dialled to the exact grit level. Crazy sweet spot. Power and control, finally in the same paddle. The name came naturally, encompassing the essence of the paddle. The Architect.",
  },
  {
    date: "Aug – Sep 2025",
    headline: "The Launch… and Win",
    body: "Showed it to my circle. The reaction said everything. These were people playing with $280 paddles and couldn't believe the perfection. And so Batch 001 opened for pre-orders. To keep initial costs manageable, we ran a pre-order model. Being a new brand without massive order volumes meant pricing was higher than I wanted… but the community showed up anyway. Sold out in 3 days.",
  },
  {
    date: "Oct 2025 – Jan 2026",
    headline: "The Reviews & Refinements",
    body: "The reviews confirmed everything I felt on day one. Players came back raving about the sweet spot, the spin, the control. Not a single person felt like they overpaid. That feedback became the blueprint for what came next. Refined the handle and the details for Batch 002. Based directly on player feedback. Every change was intentional; nothing changed for the sake of it.",
  },
  {
    date: "Mar 2026",
    headline: "The Evolution",
    body: "The Batch 002 prototype landed — and so did the new pricing. Larger order volumes meant we finally had the leverage to do what this was always about. The Architect is now $135. A paddle built from the same manufacturers as the $280+ options — priced like it should have been from the start.",
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const JourneyTimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isLast = (i: number) => i === EVENTS.length - 1;

  const goTo = (i: number) => {
    if (i < 0 || i >= EVENTS.length) return;
    setActiveIndex(i);
  };

  const navPrev = () => goTo(activeIndex - 1);
  const navNext = () => goTo(activeIndex + 1);

  return (
    <section className="relative bg-tempo-carbon overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-24 md:py-32 lg:py-40">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(44px, 6vw, 80px)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "#FFFFFF",
            }}
          >
            Our Journey
          </h2>
        </motion.div>

        {/* ── Nav Arrows ── */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={navPrev}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.10em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            {activeIndex + 1} / {EVENTS.length}
          </span>
          <button
            onClick={navNext}
            disabled={activeIndex === EVENTS.length - 1}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Next event"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* ── Timeline Bar ── */}
        <div className="relative mx-auto mb-14 md:mb-20" ref={scrollRef}>
          {/* Track */}
          <div className="relative flex items-center justify-between">
            {/* Background line */}
            <div className="absolute top-1/2 left-0 right-0 h-[3px] -translate-y-1/2 bg-white/10 rounded-full" />
            {/* Progress fill */}
            <motion.div
              className="absolute top-1/2 left-0 h-[3px] -translate-y-1/2 rounded-full"
              style={{ background: "hsl(var(--tempo-navy))" }}
              initial={false}
              animate={{
                width: `${(activeIndex / (EVENTS.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5, ease }}
            />
            {/* White border around progress for pop */}
            <motion.div
              className="absolute top-1/2 left-0 h-[5px] -translate-y-1/2 rounded-full border border-white/20"
              style={{ background: "hsl(var(--tempo-navy))" }}
              initial={false}
              animate={{
                width: `${(activeIndex / (EVENTS.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5, ease }}
            />

            {/* Nodes */}
            {EVENTS.map((event, i) => {
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              const isFinal = isLast(i);

              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer"
                  style={{ flex: "0 0 auto" }}
                  aria-label={`${event.date}: ${event.headline}`}
                >
                  {/* Date label – desktop only */}
                  <span
                    className="hidden md:block mb-3 whitespace-nowrap"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 9,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
                      transition: "color 0.3s",
                    }}
                  >
                    {event.date}
                  </span>

                  {/* Dot */}
                  <div className="relative">
                    <motion.div
                      className="rounded-full transition-colors duration-300"
                      style={{
                        width: isActive || isFinal ? 16 : 10,
                        height: isActive || isFinal ? 16 : 10,
                        background: isActive || isPast || isFinal
                          ? "hsl(var(--tempo-navy))"
                          : "rgba(255,255,255,0.12)",
                        border: isActive || isFinal ? "2px solid rgba(255,255,255,0.6)" : isPast ? "2px solid rgba(255,255,255,0.2)" : "none",
                      }}
                      animate={
                        isActive || isFinal
                          ? {
                              boxShadow: [
                                "0 0 0px rgba(27,42,65,0.4)",
                                "0 0 16px rgba(27,42,65,0.7)",
                                "0 0 0px rgba(27,42,65,0.4)",
                              ],
                            }
                          : { boxShadow: "0 0 0px transparent" }
                      }
                      transition={
                        isActive || isFinal
                          ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                          : { duration: 0.3 }
                      }
                    />
                  </div>

                  {/* Headline label – desktop only */}
                  <span
                    className="hidden md:block mt-3 whitespace-nowrap max-w-[100px] truncate text-center"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                      transition: "color 0.3s",
                    }}
                  >
                    {event.headline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Content Panel ── */}
        <div className="relative min-h-[220px] md:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease }}
              className="max-w-2xl mx-auto text-center"
            >
              {/* Date */}
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {EVENTS[activeIndex].date}
              </span>

              {/* Headline */}
              <h3
                className="mt-4 mb-6"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(26px, 4vw, 40px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                }}
              >
                {EVENTS[activeIndex].headline}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {EVENTS[activeIndex].body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 text-center"
        >
          <p
            className="mb-8 max-w-lg mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Batch 002 is open for pre-order now. This won't sit around.
            <br className="hidden sm:block" />
            If Batch 001 taught us anything, it's that people who find this paddle don't hesitate twice.
          </p>

          <Link to="/products/the-architect">
            <motion.span
              className="inline-flex items-center gap-3 group"
              style={{
                background: "#FFFFFF",
                borderRadius: 100,
                padding: "16px 36px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "#0E0E0E",
                cursor: "pointer",
              }}
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.95 }}
            >
              Pre-order Batch 002 · $135
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </motion.span>
          </Link>

          <p
            className="mt-5"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Limited to 250 units
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyTimelineSection;
