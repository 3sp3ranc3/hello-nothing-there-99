import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.webp";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontReady(true));
  }, []);

  const ready = imageLoaded && fontReady;

  return (
    <section className="w-full">
      {/* Desktop: fullscreen image with overlaid text */}
      <div className="hidden md:block relative h-screen w-full overflow-hidden bg-tempo-carbon">
        <img
          src={heroImage}
          alt="Tempo Architect paddle held on court"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-10 lg:px-20 xl:px-28">
          {/* Line 1: Elite Materials. */}
          <div
            className={`transition-[opacity,transform] duration-[600ms,900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-0 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
            }`}
            style={{ fontSynthesis: "none" }}
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

          {/* Line 2: Honest Pricing. */}
          <div
            className={`transition-[opacity,transform] duration-[600ms,900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
            }`}
            style={{ fontSynthesis: "none" }}
          >
            <h1
              className="text-[5.4rem] lg:text-[6rem] text-white mb-5 tracking-[-0.06em]"
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

          {/* Batch pill */}
          <div
            className={`transition-[opacity,transform] duration-[600ms,900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[400ms] mb-5 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
            }`}
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-transparent border border-white/20 rounded-full text-[13px] font-medium text-white/80 tracking-wide">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Batch 002 · 250 units
            </span>
          </div>

          {/* Subheadline */}
          <p
            className={`transition-[opacity,transform] duration-[600ms,900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[600ms] text-base lg:text-lg text-white/60 mb-10 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Not a trade-off. Both.
          </p>

          {/* CTA */}
          <div
            className={`transition-[opacity,transform] duration-[600ms,900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[800ms] ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
            }`}
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

        {/* Trust bar */}
        <div
          className={`transition-[opacity,transform] duration-[600ms,900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[1000ms] absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 py-8 px-10 lg:px-20 xl:px-28 ${
            ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Rating badge */}
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

            {/* Spec 1 */}
            <div>
              <p className="text-[13px] font-medium text-white tracking-wide">Maximum Legal Power</p>
              <p className="text-[13px] text-white/50 mt-1">Trufoam™ technology</p>
            </div>

            {/* Spec 2 */}
            <div>
              <p className="text-[13px] font-medium text-white tracking-wide">Exceptional spin. Every rally.</p>
              <p className="text-[13px] text-white/50 mt-1">T700 carbon w/ sandblasted finish</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: image then text below */}
      <div className="md:hidden">
        <div className="relative h-[55vh] w-full overflow-hidden bg-tempo-carbon">
          <img
            src={heroImage}
            alt="Tempo Architect paddle held on court"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

          <div
            className={`transition-opacity duration-[600ms] delay-[1000ms] absolute bottom-0 left-0 right-0 border-t border-white/10 py-4 px-6 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
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
                  <p className="text-[10px] font-medium text-white">4.9 rating</p>
                  <p className="text-[10px] text-white/50 mt-0.5">Batch 001 · Sold out</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-medium text-white">Maximum Legal Power</p>
                <p className="text-[10px] text-white/50 mt-0.5">Trufoam™ technology</p>
              </div>
              <div>
                <p className="text-[10px] font-medium text-white">Exceptional spin</p>
                <p className="text-[10px] text-white/50 mt-0.5">T700 carbon · sandblasted</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start px-6 py-12 bg-tempo-bone">
          {/* Line 1: Elite Materials. */}
          <div
            className={`transition-[opacity,transform] duration-[600ms,900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-0 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
            }`}
            style={{ fontSynthesis: "none" }}
          >
            <h1
              className="text-[3rem] text-tempo-carbon"
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

          {/* Line 2: Honest Pricing. */}
          <div
            className={`transition-[opacity,transform] duration-[600ms,900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
            }`}
            style={{ fontSynthesis: "none" }}
          >
            <h1
              className="text-[3rem] text-tempo-carbon mb-4"
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

          {/* Batch pill */}
          <div
            className={`transition-[opacity,transform] duration-[600ms,900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[400ms] mb-6 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-tempo-carbon/5 border border-tempo-carbon/10 rounded-full text-[12px] font-medium text-tempo-carbon/80 tracking-wide">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Batch 002 · 250 units
            </span>
          </div>

          <p
            className={`transition-[opacity,transform] duration-[600ms,900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[600ms] text-base text-tempo-carbon/50 mb-9 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Not a trade-off. Both.
          </p>

          <div
            className={`transition-[opacity,transform] duration-[600ms,900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[800ms] ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
            }`}
          >
            <Link
              to="/products/the-architect"
              className="group inline-flex items-center bg-tempo-carbon rounded-full overflow-hidden hover:scale-[1.03] transition-transform duration-300"
            >
              <span className="px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-tempo-bone">
                Pre-order now
              </span>
              <span className="px-5 py-3.5 text-sm font-bold tracking-tight text-tempo-bone border-l border-white/10 bg-white/[0.05]">
                $135
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
