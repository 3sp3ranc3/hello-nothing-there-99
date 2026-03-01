import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import heroImage from "@/assets/hero-image.webp";

const BASE = 960;
const STEP = 350;

const transitionStyle = (step: number): React.CSSProperties => ({
  transitionProperty: "opacity, transform",
  transitionDuration: "1100ms",
  transitionTimingFunction: "cubic-bezier(0.49, 0.025, 0.685, 1)",
  transitionDelay: `${BASE + step * STEP}ms`,
});

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fontReady, setFontReady] = useState(false);
  const [scrollDarkness, setScrollDarkness] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => setFontReady(true));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      // How far the top of the section has scrolled above viewport top
      const scrolled = -rect.top;
      // Start darkening after 10% scroll, reach max at 90%
      const progress = Math.max(0, Math.min(1, (scrolled - sectionHeight * 0.1) / (sectionHeight * 0.8)));
      setScrollDarkness(progress * 0.9); // max 90% dark
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ready = imageLoaded && fontReady;

  return (
    <section className="w-full" ref={sectionRef}>
      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative h-screen w-full overflow-hidden bg-tempo-carbon">
        <img
          src={heroImage}
          alt="Tempo Architect paddle held on court"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div
          className="absolute inset-0 bg-tempo-carbon pointer-events-none z-[1] transition-opacity duration-100"
          style={{ opacity: scrollDarkness }}
        />

        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-10 lg:px-20 xl:px-28">
          {/* step 0 — Batch pill */}
          <div
            className="mb-5"
            style={{
              ...transitionStyle(0),
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(6px)",
            }}
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-transparent border border-white/20 rounded-full text-[13px] font-medium text-white/80 tracking-wide">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Batch 002 · 250 units
            </span>
          </div>

          {/* step 1 — Elite Materials. */}
          <div
            style={{
              ...transitionStyle(1),
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(6px)",
              fontSynthesis: "none",
            }}
          >
            <h1
              className="text-[5.4rem] lg:text-[6rem] text-white tracking-[-0.06em]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                lineHeight: 0.97,
                fontSynthesis: "none",
                textRendering: "geometricPrecision",
              }}
            >
              Elite Materials.
            </h1>
          </div>

          {/* step 2 — Honest Pricing. */}
          <div
            className="mb-6"
            style={{
              ...transitionStyle(2),
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(6px)",
              fontSynthesis: "none",
            }}
          >
            <h1
              className="text-[5.4rem] lg:text-[6rem] text-white tracking-[-0.06em]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                lineHeight: 0.97,
                fontSynthesis: "none",
                textRendering: "geometricPrecision",
              }}
              aria-hidden="true"
            >
              Honest Pricing.
            </h1>
          </div>

          {/* step 3 — Subheadline */}
          <p
            className="mb-10 text-base lg:text-lg text-white/60"
            style={{
              ...transitionStyle(3),
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(6px)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Not a trade-off. Both.
          </p>

          {/* step 4 — CTA */}
          <div
            style={{
              ...transitionStyle(4),
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(6px)",
            }}
          >
            <div className="inline-flex flex-col items-center">
              <Link
                to="/products/the-architect"
                className="group relative inline-flex items-center bg-white hover:bg-tempo-carbon text-tempo-carbon rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03] outline-none ring-0"
              >
                <span className="absolute inset-0 bg-tempo-carbon origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full" />
                <span className="relative z-10 px-8 lg:px-10 py-4 lg:py-[1.1rem] text-[13px] lg:text-sm uppercase tracking-[0.2em] font-semibold group-hover:text-tempo-bone transition-colors duration-500">
                  Pre-order now
                </span>
                <span className="relative z-10 px-6 lg:px-7 py-4 lg:py-[1.1rem] text-sm lg:text-base font-bold tracking-tight border-l border-tempo-carbon/10 group-hover:border-white/10 bg-tempo-carbon/[0.03] group-hover:text-tempo-bone transition-colors duration-500">
                  $135
                </span>
              </Link>
              <p className="mt-3 text-[11px] text-white/40 tracking-widest uppercase">Ships March 2026</p>
            </div>
          </div>
        </div>

        {/* step 5 — Trust bar */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 py-8 px-10 lg:px-20 xl:px-28"
          style={{
            ...transitionStyle(5),
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(6px)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#C9A84C] drop-shadow-[0_0_6px_rgba(201,168,76,0.5)]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {[3, 4].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#C9A84C] drop-shadow-[0_0_6px_rgba(201,168,76,0.5)]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[13px] font-medium text-white tracking-wide">4.9 rating</p>
                <p className="text-[13px] text-white/50 mt-0.5">Batch 001 · Sold out in Sydney</p>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-medium text-white tracking-wide">Maximum Legal Power</p>
              <p className="text-[13px] text-white/50 mt-1">Trufoam™ technology</p>
            </div>
            <div>
              <p className="text-[13px] font-medium text-white tracking-wide">Exceptional spin. Every rally.</p>
              <p className="text-[13px] text-white/50 mt-1">T700 carbon w/ sandblasted finish</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden relative h-screen w-full overflow-hidden bg-tempo-carbon">
        <img
          src={heroImage}
          alt="Tempo Architect paddle held on court"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div
          className="absolute inset-0 bg-tempo-carbon pointer-events-none z-[1] transition-opacity duration-100"
          style={{ opacity: scrollDarkness }}
        />

        {/* Centered content overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* step 0 — Batch pill */}
          <div
            className="mb-5"
            style={{
              ...transitionStyle(0),
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(6px)",
            }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-white/20 rounded-full text-[12px] font-medium text-white/80 tracking-wide">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Batch 002 · 250 units
            </span>
          </div>

          {/* step 1 — Elite Materials. */}
          <div
            style={{
              ...transitionStyle(1),
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(6px)",
              fontSynthesis: "none",
            }}
          >
            <h1
              className="text-[3rem] text-white tracking-[-0.04em]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                lineHeight: 0.97,
                fontSynthesis: "none",
                textRendering: "geometricPrecision",
              }}
            >
              Elite Materials.
            </h1>
          </div>

          {/* step 2 — Honest Pricing. */}
          <div
            className="mb-5"
            style={{
              ...transitionStyle(2),
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(6px)",
              fontSynthesis: "none",
            }}
          >
            <h1
              className="text-[3rem] text-white tracking-[-0.04em]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                lineHeight: 0.97,
                fontSynthesis: "none",
                textRendering: "geometricPrecision",
              }}
              aria-hidden="true"
            >
              Honest Pricing.
            </h1>
          </div>

          {/* step 3 — Subheadline */}
          <p
            className="mb-9 text-base text-white/60"
            style={{
              ...transitionStyle(3),
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(6px)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Not a trade-off. Both.
          </p>

          {/* step 4 — CTA */}
          <div
            style={{
              ...transitionStyle(4),
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(6px)",
            }}
          >
            <Link
              to="/products/the-architect"
              className="group inline-flex items-center bg-white rounded-full overflow-hidden hover:scale-[1.03] transition-transform duration-300"
            >
              <span className="px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-tempo-carbon">
                Pre-order now
              </span>
              <span className="px-5 py-3.5 text-sm font-bold tracking-tight text-tempo-carbon border-l border-tempo-carbon/10 bg-tempo-carbon/[0.03]">
                $135
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile trust bar — only 4.9 rating */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 py-4 px-6"
          style={{
            ...transitionStyle(5),
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(6px)",
          }}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 text-[#C9A84C] drop-shadow-[0_0_4px_rgba(201,168,76,0.5)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div>
              <p className="text-[11px] font-medium text-white">4.9 rating</p>
              <p className="text-[10px] text-white/50">Batch 001 · Sold out</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
