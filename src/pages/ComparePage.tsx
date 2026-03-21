import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";

const paddles = [
  {
    id: "architect",
    name: "The Architect",
    tagline: "Control Series",
    price: "$109.00",
    href: "/",
    specs: {
      weight: "8.1 oz",
      core: "Polypropylene",
      surface: "T700 Carbon",
      grip: "5.5 in",
      balance: "Neutral",
      playStyle: "Control",
    },
    highlights: ["Maximum spin", "Vibration dampening", "Precision placement"],
  },
];

const specLabels: Record<string, string> = {
  weight: "Weight",
  core: "Core Material",
  surface: "Surface",
  grip: "Grip Length",
  balance: "Balance Point",
  playStyle: "Play Style",
};

const ComparePage = () => {
  const [selectedPaddles, setSelectedPaddles] = useState<string[]>(["architect"]);

  const selectedPaddleData = paddles.filter(p => selectedPaddles.includes(p.id));

  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-widest text-tempo-carbon/60 mb-4 block"
          >
            Decision Tool
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-8 text-tempo-carbon"
          >
            THE ARCHITECT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-tempo-carbon/70 max-w-2xl leading-relaxed"
          >
            Our flagship paddle for players who demand control and precision.
          </motion.p>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-16 px-6">
        <div className="max-w-[1400px] mx-auto overflow-x-auto">
          <table className="w-full min-w-[400px]">
            <thead>
              <tr className="border-b border-tempo-carbon/10">
                <th className="text-left py-6 px-4 w-48"></th>
                {selectedPaddleData.map((paddle) => (
                  <th key={paddle.id} className="text-left py-6 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="text-xs uppercase tracking-widest text-tempo-carbon/60 block mb-1">
                        {paddle.tagline}
                      </span>
                      <span className="text-2xl font-bold uppercase tracking-wide block mb-2 text-tempo-carbon">
                        {paddle.name}
                      </span>
                      <span className="text-lg text-tempo-carbon">{paddle.price}</span>
                    </motion.div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(specLabels).map((spec) => (
                <tr key={spec} className="border-b border-tempo-carbon/10">
                  <td className="py-4 px-4 text-sm uppercase tracking-widest text-tempo-carbon/60">
                    {specLabels[spec]}
                  </td>
                  {selectedPaddleData.map((paddle) => (
                    <td key={paddle.id} className="py-4 px-4 font-medium text-tempo-carbon">
                      {paddle.specs[spec as keyof typeof paddle.specs]}
                    </td>
                  ))}
                </tr>
              ))}
              
              <tr className="border-b border-tempo-carbon/10">
                <td className="py-4 px-4 text-sm uppercase tracking-widest text-tempo-carbon/60 align-top">
                  Key Benefits
                </td>
                {selectedPaddleData.map((paddle) => (
                  <td key={paddle.id} className="py-4 px-4">
                    <ul className="space-y-2">
                      {paddle.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-tempo-carbon">
                          <Check className="w-4 h-4 text-tempo-stock" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              
              <tr>
                <td className="py-6 px-4"></td>
                {selectedPaddleData.map((paddle) => (
                  <td key={paddle.id} className="py-6 px-4">
                    <Link
                      to={paddle.href}
                      className="inline-flex items-center gap-2 bg-tempo-carbon text-tempo-bone 
                               px-6 py-3 uppercase tracking-widest text-sm font-medium rounded-full
                               hover:bg-tempo-navy transition-colors duration-300"
                    >
                      Reserve Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default ComparePage;
