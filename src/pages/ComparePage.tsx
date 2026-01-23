import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import MegaFooter from "@/components/layout/MegaFooter";

const paddles = [
  {
    id: "architect",
    name: "The Architect",
    tagline: "Control Series",
    price: "$145.00",
    href: "/products/the-architect",
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
  {
    id: "air",
    name: "The Air",
    tagline: "Speed Series",
    price: "$165.00",
    href: "/products/the-air",
    specs: {
      weight: "7.6 oz",
      core: "Polymer Honeycomb",
      surface: "T800 Carbon",
      grip: "5.25 in",
      balance: "Head Light",
      playStyle: "Speed",
    },
    highlights: ["Fastest swing weight", "Quick transitions", "Defensive excellence"],
  },
  {
    id: "ace",
    name: "The Ace",
    tagline: "Power Series",
    price: "$185.00",
    href: "/products/the-ace",
    specs: {
      weight: "8.4 oz",
      core: "Nomex Honeycomb",
      surface: "T1000 Carbon",
      grip: "5.5 in",
      balance: "Head Heavy",
      playStyle: "Power",
    },
    highlights: ["Maximum drive power", "Deep court penetration", "Aggressive play"],
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
  const [selectedPaddles, setSelectedPaddles] = useState<string[]>(["architect", "air"]);

  const togglePaddle = (id: string) => {
    if (selectedPaddles.includes(id)) {
      if (selectedPaddles.length > 1) {
        setSelectedPaddles(selectedPaddles.filter(p => p !== id));
      }
    } else if (selectedPaddles.length < 3) {
      setSelectedPaddles([...selectedPaddles, id]);
    }
  };

  const selectedPaddleData = paddles.filter(p => selectedPaddles.includes(p.id));

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block"
          >
            Decision Tool
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-8"
          >
            PADDLE COMPARISON
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Compare specs and features side-by-side to find your perfect match.
          </motion.p>
        </div>
      </section>

      {/* Paddle Selector */}
      <section className="py-8 px-6 border-y border-border">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Select paddles to compare (2-3)
          </p>
          <div className="flex flex-wrap gap-4">
            {paddles.map((paddle) => (
              <button
                key={paddle.id}
                onClick={() => togglePaddle(paddle.id)}
                className={`flex items-center gap-3 px-6 py-3 border transition-all duration-300 ${
                  selectedPaddles.includes(paddle.id)
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border hover:border-foreground'
                }`}
              >
                {selectedPaddles.includes(paddle.id) && <Check className="w-4 h-4" />}
                {paddle.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-[1400px] mx-auto overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-6 px-4 w-48"></th>
                {selectedPaddleData.map((paddle) => (
                  <th key={paddle.id} className="text-left py-6 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">
                        {paddle.tagline}
                      </span>
                      <span className="text-2xl font-bold uppercase tracking-wide block mb-2">
                        {paddle.name}
                      </span>
                      <span className="text-lg">{paddle.price}</span>
                    </motion.div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Specs */}
              {Object.keys(specLabels).map((spec) => (
                <tr key={spec} className="border-b border-border">
                  <td className="py-4 px-4 text-sm uppercase tracking-widest text-muted-foreground">
                    {specLabels[spec]}
                  </td>
                  {selectedPaddleData.map((paddle) => (
                    <td key={paddle.id} className="py-4 px-4 font-medium">
                      {paddle.specs[spec as keyof typeof paddle.specs]}
                    </td>
                  ))}
                </tr>
              ))}
              
              {/* Highlights */}
              <tr className="border-b border-border">
                <td className="py-4 px-4 text-sm uppercase tracking-widest text-muted-foreground align-top">
                  Key Benefits
                </td>
                {selectedPaddleData.map((paddle) => (
                  <td key={paddle.id} className="py-4 px-4">
                    <ul className="space-y-2">
                      {paddle.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-tempo-stock" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              
              {/* CTA */}
              <tr>
                <td className="py-6 px-4"></td>
                {selectedPaddleData.map((paddle) => (
                  <td key={paddle.id} className="py-6 px-4">
                    <Link
                      to={paddle.href}
                      className="inline-flex items-center gap-2 bg-foreground text-background 
                               px-6 py-3 uppercase tracking-widest text-sm font-medium
                               hover:bg-tempo-navy transition-colors duration-300"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 px-6 bg-tempo-mist">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">
            STILL NOT SURE?
          </h2>
          <p className="text-muted-foreground mb-6">
            Take our quick quiz to get a personalized paddle recommendation.
          </p>
          <Link
            to="/#quiz"
            className="inline-block border border-foreground px-8 py-3 
                     uppercase tracking-widest text-sm font-medium
                     hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Take the Quiz
          </Link>
        </div>
      </section>

      <MegaFooter />
    </main>
  );
};

export default ComparePage;
