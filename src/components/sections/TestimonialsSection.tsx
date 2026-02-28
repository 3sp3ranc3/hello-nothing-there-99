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
    quote: "I bought this as a backup for my $300 tournament paddle but ended up making it the only one I reach for. The amount of spin you can get with this is crazy, the face bites so hard it feels like you have a whole extra second to place the ball.",
    name: "Lachlan",
  },
  {
    tag: "Dinks",
    quote: "My partner got me onto Tempo and I'm so happy with it. The biggest thing for me is the control at the net - I used to pop up my dinks all the time and just get punished, but this paddle makes it so much easier to keep the ball low and consistent. Way more confidence in those exchanges now.",
    name: "Rachel",
  },
  {
    tag: "Manoeuvrability",
    quote: "The balance on this thing is really nice. It's quick enough through the kitchen but still has good weight behind it when you need power. Also noticed my arm doesn't get tired like it used to with my old paddle, even after long sessions. The vibration dampening in the handle makes an actual difference.",
    name: "Eric",
  },
];

const StarRating = () => (
  <div className="flex items-center gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-tempo-bone text-tempo-bone" />
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
      className="bg-[#1e3a5f] p-6 lg:p-8 rounded-lg border border-white/10 hover:bg-[#245080] transition-all duration-300 h-full"
    >
      <span className="inline-block px-3 py-1 bg-tempo-bone/20 text-tempo-bone text-xs uppercase tracking-widest font-medium rounded-full mb-6">
        {testimonial.tag}
      </span>

      <StarRating />

      <blockquote className="text-lg lg:text-xl text-tempo-bone/90 leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center justify-between">
        <p className="text-tempo-bone/60 font-medium">
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
  dark?: boolean;
}

const TestimonialsSection = ({ linkable = false, dark = false }: TestimonialsSectionProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className={`py-16 lg:py-24 ${dark ? "" : "bg-tempo-bone"}`}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className={`text-xs uppercase tracking-widest mb-4 block ${dark ? "text-tempo-bone/60" : "text-tempo-carbon/60"}`}>
            From Our Batch 001 Reviews
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide ${dark ? "text-tempo-bone" : "text-tempo-carbon"}`}>
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
