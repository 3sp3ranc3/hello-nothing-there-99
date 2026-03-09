import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    date: "Oct '25 – Jan '26",
    headline: "Reviews & Refinements",
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
  const isFinalNode = (i: number) => i === EVENTS.length - 1;

  return (
    <section style={{ background: "#000000" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-28 md:py-36 lg:py-44">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
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

        {/* ── Timeline ── */}
        <div className="relative flex">
          {/* Vertical line track */}
          <div className="relative flex-shrink-0" style={{ width: 48 }}>
            {/* Background track — white bordered line */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 rounded-full"
              style={{
                width: 6,
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.15)",
              }}
            />
            {/* Progress fill */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-0 rounded-full"
              style={{
                width: 6,
                background: "#FFFFFF",
                border: "1.5px solid rgba(255,255,255,0.5)",
              }}
              initial={false}
              animate={{
                height: `${((activeIndex + 0.5) / EVENTS.length) * 100}%`,
              }}
              transition={{ duration: 0.6, ease }}
            />
          </div>

          {/* Events */}
          <div className="flex-1 pl-6 md:pl-12">
            {EVENTS.map((event, i) => {
              const isActive = i === activeIndex;
              const isFinal = isFinalNode(i);

              return (
                <div key={i} className="relative" style={{ paddingBottom: i < EVENTS.length - 1 ? 0 : 0 }}>
                  {/* Node dot — positioned on the vertical line */}
                  <div
                    className="absolute flex items-center justify-center"
                    style={{
                      left: -6 - 24 - 6, // center on the 48px track
                      width: 48,
                      top: 8,
                    }}
                  >
                    <motion.div
                      className="rounded-full"
                      style={{
                        width: isActive ? 18 : isFinal ? 16 : 10,
                        height: isActive ? 18 : isFinal ? 16 : 10,
                        background: isActive || i < activeIndex || isFinal ? "#FFFFFF" : "rgba(255,255,255,0.15)",
                        border: isActive || isFinal ? "3px solid rgba(255,255,255,0.9)" : "none",
                      }}
                      animate={
                        isActive || isFinal
                          ? {
                              boxShadow: [
                                "0 0 0px rgba(255,255,255,0.2)",
                                "0 0 20px rgba(255,255,255,0.5)",
                                "0 0 0px rgba(255,255,255,0.2)",
                              ],
                            }
                          : { boxShadow: "none" }
                      }
                      transition={
                        isActive || isFinal
                          ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                          : { duration: 0.3 }
                      }
                    />
                  </div>

                  {/* Content */}
                  <button
                    onClick={() => setActiveIndex(i)}
                    className="w-full text-left cursor-pointer group"
                    style={{
                      paddingTop: 0,
                      paddingBottom: i < EVENTS.length - 1 ? 48 : 0,
                    }}
                  >
                    {/* Date */}
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.3)",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      {event.date}
                    </span>

                    {/* Headline */}
                    <h3
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: "clamp(24px, 3.5vw, 36px)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                        color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.45)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {event.headline}
                    </h3>

                    {/* Expanded body */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease }}
                          className="overflow-hidden"
                        >
                          <p
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: 15,
                              fontWeight: 400,
                              lineHeight: 1.7,
                              color: "rgba(255,255,255,0.65)",
                              marginTop: 16,
                              maxWidth: 580,
                            }}
                          >
                            {event.body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 text-center"
        >
          <p
            className="mb-10 max-w-lg mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.65)",
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
                padding: "18px 40px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "#000000",
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
