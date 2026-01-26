import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  rating: string;
  location: string;
  painPoint: string;
}

const testimonials: Testimonial[] = [
  {
    painPoint: "Mishits / Sweet Spot",
    quote: "Tired of mishits on fast exchanges? The 31% larger sweet spot means more forgiveness at the kitchen. My off-center hits now have control instead of popping up.",
    name: "Marcus Chen",
    rating: "4.5 DUPR",
    location: "Sydney, NSW",
  },
  {
    painPoint: "Dead Feel / Touch Shots",
    quote: "My old paddle felt dead on touch shots. The Architect's 16mm polymer honeycomb core maintains perfect feel while adding stability. My dinking game improved noticeably.",
    name: "Sarah Williams",
    rating: "4.2 DUPR",
    location: "Bondi, NSW",
  },
  {
    painPoint: "Arm Fatigue / Value",
    quote: "After long sessions, my arm would ache. The optimized weight distribution plus the center hole design reduces strain significantly. And at $135 vs $200+ paddles? No-brainer upgrade.",
    name: "James Park",
    rating: "4.0 DUPR",
    location: "Melbourne, VIC",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white p-8 lg:p-10 rounded-lg border border-tempo-carbon/5 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Pain Point Badge */}
      <span className="inline-block px-3 py-1 bg-tempo-navy/10 text-tempo-navy text-xs uppercase tracking-widest font-medium rounded-full mb-6">
        {testimonial.painPoint}
      </span>

      {/* Quote */}
      <blockquote className="text-lg lg:text-xl text-tempo-carbon leading-relaxed mb-8">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-tempo-carbon/10 flex items-center justify-center">
          <span className="text-sm font-bold text-tempo-carbon">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="font-semibold text-tempo-carbon">{testimonial.name}</p>
          <p className="text-sm text-tempo-carbon/60">
            {testimonial.rating} · {testimonial.location}
          </p>
        </div>
      </div>

      {/* Verified Badge */}
      <div className="mt-6 pt-4 border-t border-tempo-carbon/5">
        <span className="flex items-center gap-2 text-xs text-tempo-stock">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Verified Batch 001 Owner
        </span>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
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
            Real Results
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
