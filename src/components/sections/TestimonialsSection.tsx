import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

interface Testimonial {
  tag: string;
  quote: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    tag: "Mis-hits / Sweet Spot",
    quote: "The sweet spot is honestly massive. I've hit many off-centre shots that should've been dead but popped nicely over the net. Super forgiving if your aim isn't perfect like mine - it almost feels like cheating. So glad I gave that paddle a shot.",
    name: "Oliver",
  },
  {
    tag: "Spin",
    quote: "I bought this as a backup for my $300 tournament paddle but ended up making it the only one I reach for. The amount of spin you can get with this is crazy, the face bites so hard it feels like you have a whole extra second to place the ball. It just gives you that locked-in confidence that usually takes weeks to build with a new paddle.",
    name: "Lachlan",
  },
  {
    tag: "Dinks",
    quote: "I'm so glad my partner put me onto Tempo. Honestly feels like a hidden gem that hasn't blown up yet. I used to tense up every time I had to dink because I'd always pop it up and eat a smash, but the touch on this feels surgical. It really lets me neutralise the pace and keep my dinks unattackable.",
    name: "Rachel",
  },
  {
    tag: "Manoeuvrability",
    quote: "The swing weight on this is dialled in perfectly. It cuts through the air fast enough to keep up in rapid-fire kitchen rallies, but it still feels very substantial on contact. Plus, the vibration dampening is top tier - I can play 5 sets straight and have zero arm fatigue.",
    name: "Eric",
  },
];

const StarRating = () => (
  <div className="flex items-center gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-tempo-carbon text-tempo-carbon" />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index, linkable }: { testimonial: Testimonial; index: number; linkable: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const content = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white p-8 lg:p-10 rounded-lg border border-tempo-carbon/5 shadow-sm hover:shadow-md transition-all duration-300 h-full"
    >
      <span className="inline-block px-3 py-1 bg-tempo-navy/10 text-tempo-navy text-xs uppercase tracking-widest font-medium rounded-full mb-6">
        {testimonial.tag}
      </span>

      <StarRating />

      <blockquote className="text-lg lg:text-xl text-tempo-carbon leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center justify-between">
        <p className="text-tempo-carbon/70 font-medium">
          — {testimonial.name}
        </p>
        {linkable && (
          <ArrowRight className="w-4 h-4 text-tempo-carbon/30 group-hover:text-tempo-navy group-hover:translate-x-1 transition-all duration-300" />
        )}
      </div>
    </motion.div>
  );

  if (linkable) {
    return (
      <Link to="/products/the-architect" className="block group">
        {content}
      </Link>
    );
  }

  return content;
};

interface TestimonialsSectionProps {
  linkable?: boolean;
}

const TestimonialsSection = ({ linkable = false }: TestimonialsSectionProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-tempo-bone">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-tempo-carbon/60 mb-4 block">
            From Our Batch 001 Players
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide text-tempo-carbon">
            What Players Said
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} linkable={linkable} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
