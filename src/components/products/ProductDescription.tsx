import { motion } from "framer-motion";

interface ProductDescriptionProps {
  onScrollToSpecs?: () => void;
}

const ProductDescription = ({ onScrollToSpecs }: ProductDescriptionProps) => {
  return (
    <div className="space-y-6 text-center">
      <p className="text-base text-tempo-carbon/80 leading-relaxed">
        Designed for players who demand absolute control, The Architect is a meticulously engineered tool built to give you the technical edge when it matters most. This isn't just another paddle; it is an instrument of precision, balance, and intelligent design.
      </p>

      <p className="font-semibold text-tempo-carbon text-base">The Technological Advantage:</p>

      <div className="space-y-5 text-base text-tempo-carbon/80 leading-relaxed text-left max-w-[750px] mx-auto">
        <div>
          <p className="font-semibold text-tempo-carbon mb-1">Maximum Legal Power</p>
          <p>At the heart of The Architect lies TRUFOAM, a 4th-generation polymer honeycomb core. Boasting a certified 0.43 PBCoR rating, it delivers the absolute highest power level permitted in tournament play, ensuring you never leave performance on the table.</p>
        </div>

        <div>
          <p className="font-semibold text-tempo-carbon mb-1">Unrivalled Spin Generation</p>
          <p>The face features the highest-grade T700 carbon fibre, renowned for its exceptional strength-to-weight ratio. Finished with a sandblasted texture, it bites into the ball on impact, delivering relentless, high-RPM spin that stays sharp through every set.</p>
        </div>

        <div>
          <p className="font-semibold text-tempo-carbon mb-1">Two-Handed Versatility</p>
          <p>The 130mm extended grip is explicitly designed for modern, aggressive play styles, allowing for explosive two-handed backhands without sacrificing your one-handed reach on defensive digs.</p>
        </div>

        <div>
          <p className="font-semibold text-tempo-carbon mb-1">Perfectly Centred Balance</p>
          <p>Precise material placement achieves a true centre balance point, guaranteeing consistent swing weight and rapid paddle head speed from the kitchen to the baseline.</p>
        </div>
      </div>

      <p className="italic text-tempo-carbon/60 text-base">
        Control the tempo. Design your game.
      </p>

      <p className="text-sm text-tempo-carbon/50 leading-relaxed max-w-[650px] mx-auto">
        <span className="font-medium text-tempo-carbon/70">Note on availability:</span> As to eliminate unnecessary markups while providing elite performance engineering, The Architect batch 002 is preorder only and limited to 250 units.
      </p>
    </div>
  );
};

export default ProductDescription;
