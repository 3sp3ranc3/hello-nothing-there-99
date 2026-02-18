import { motion } from "framer-motion";

const TopoWaveDivider = () => {
  // Each path is a unique wavy contour line
  const paths = [
    {
      d: "M0,20 Q80,5 160,25 T320,15 T480,30 T640,10 T800,25 T960,20 T1120,30 T1280,15 T1440,25 T1600,20 T1760,28 T1920,18 T2080,25 T2240,15 T2400,22",
      opacity: 0.06,
      delay: 0,
    },
    {
      d: "M0,45 Q100,30 200,50 T400,35 T600,55 T800,40 T1000,50 T1200,38 T1400,52 T1600,42 T1800,48 T2000,36 T2200,50 T2400,44",
      opacity: 0.09,
      delay: 1.5,
    },
    {
      d: "M0,70 Q120,55 240,75 T480,60 T720,80 T960,65 T1200,75 T1440,58 T1680,72 T1920,62 T2160,78 T2400,68",
      opacity: 0.13,
      delay: 3,
    },
    {
      d: "M0,95 Q90,80 180,100 T360,85 T540,105 T720,88 T900,98 T1080,82 T1260,100 T1440,90 T1620,96 T1800,84 T1980,102 T2160,88 T2400,94",
      opacity: 0.18,
      delay: 0.8,
    },
    {
      d: "M0,120 Q110,108 220,125 T440,110 T660,130 T880,115 T1100,128 T1320,112 T1540,126 T1760,118 T1980,130 T2200,114 T2400,122",
      opacity: 0.25,
      delay: 2.2,
    },
    {
      d: "M0,145 Q130,132 260,150 T520,135 T780,155 T1040,140 T1300,152 T1560,138 T1820,148 T2080,134 T2400,146",
      opacity: 0.35,
      delay: 4,
    },
    {
      d: "M0,168 Q100,158 200,172 T400,160 T600,175 T800,162 T1000,170 T1200,158 T1400,172 T1600,164 T1800,174 T2000,160 T2200,170 T2400,166",
      opacity: 0.5,
      delay: 1,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden" style={{ marginBottom: -1 }}>
      {/* Background gradient from bone to navy */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--tempo-bone)) 0%, hsl(var(--tempo-navy)) 100%)",
        }}
      />

      <svg
        className="relative w-full"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        style={{ height: "clamp(120px, 15vw, 220px)" }}
      >
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path.d}
            fill="none"
            stroke="hsl(var(--tempo-bone))"
            strokeWidth="1.2"
            opacity={path.opacity}
            className="animate-topo-drift"
            style={{
              animationDelay: `${path.delay}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default TopoWaveDivider;
