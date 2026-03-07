import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const BatchComparisonSection = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        {/* Header — clean, left-aligned like section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10 lg:mb-14"
        >
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(44px, 6vw, 80px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              color: "#000000",
            }}
          >
            The journey from
            <br className="hidden sm:block" /> Batch 001 to Batch 002.
          </h2>
        </motion.div>

        {/* Two tiles */}
        <div className="flex flex-col lg:flex-row gap-[12px]">
          {/* Batch 001 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 rounded-2xl flex flex-col justify-between"
            style={{
              background: "#f3f5f9",
              padding: "36px 32px 32px",
              border: "1.5px solid rgba(0,0,0,0.06)",
            }}
          >
            <div>
              {/* Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-block w-[5px] h-[5px] rounded-sm" style={{ background: "rgba(0,0,0,0.2)" }} />
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 10,
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
                  fontSize: "clamp(28px, 4vw, 38px)",
                  letterSpacing: "-0.02em",
                  color: "#000000",
                  marginBottom: 16,
                }}
              >
                Sydney Exclusive
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "rgba(0,0,0,0.5)",
                  marginBottom: 32,
                }}
              >
                100 units, athlete-tested in Sydney.
                <br />
                The foundation build.
              </p>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(36px, 5vw, 52px)",
                  letterSpacing: "-0.03em",
                  color: "rgba(0,0,0,0.2)",
                  marginBottom: 20,
                }}
              >
                $245
              </p>

              <span
                className="inline-block"
                style={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: 100,
                  padding: "10px 20px",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "rgba(0,0,0,0.25)",
                  textTransform: "uppercase",
                  cursor: "default",
                }}
              >
                Sold Out
              </span>
            </div>
          </motion.div>

          {/* Batch 002 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 rounded-2xl flex flex-col justify-between"
            style={{
              background: "#000000",
              padding: "36px 32px 32px",
              border: "1.5px solid #000000",
            }}
          >
            <div>
              {/* Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="animate-pulse002 inline-block w-[5px] h-[5px] rounded-sm"
                  style={{
                    background: "#4ade80",
                    boxShadow: "0 0 6px rgba(74,222,128,0.5)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 10,
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
                  fontSize: "clamp(28px, 4vw, 38px)",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                  marginBottom: 16,
                }}
              >
                National Release
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: 32,
                }}
              >
                250 units, refined from 300+ hours of feedback.
                <br />
                Open to all players nationwide.
              </p>
            </div>

            <div>
              <div className="flex items-baseline gap-3 mb-6">
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(36px, 5vw, 52px)",
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
                  className="inline-flex items-center gap-3 group"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 100,
                    padding: "16px 32px",
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
                  Available for Preorder
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BatchComparisonSection;
