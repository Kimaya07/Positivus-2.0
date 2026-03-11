import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Positivus transformed our digital presence. Their methodical approach delivered a 3x increase in qualified leads within six months.",
    name: "John Smith",
    role: "Marketing Director",
    company: "XYZ Corp",
  },
  {
    quote: "What sets Positivus apart is their transparency. Every decision is backed by data, and the results speak for themselves.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "GrowthTech",
  },
  {
    quote: "Our e-commerce revenue doubled after partnering with Positivus. Their PPC and SEO strategies are second to none.",
    name: "Michael Chen",
    role: "Founder",
    company: "ShopBright",
  },
  {
    quote: "The team's dedication to understanding our brand made all the difference. They feel like an extension of our own team.",
    name: "Emily Davis",
    role: "VP Marketing",
    company: "Nova Solutions",
  },
  {
    quote: "From strategy to execution, Positivus delivers with precision. Highly recommend for any growth-focused business.",
    name: "David Park",
    role: "COO",
    company: "TechForward",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="py-20 md:py-28 bg-[#f5f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10"
              >
                <Quote size={28} className="text-green-200 mb-4" />
                <p className="text-gray-700 font-body text-base md:text-lg leading-relaxed mb-6">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <p className="font-heading font-semibold text-gray-900">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-gray-400 font-body">
                    {testimonials[current].role}, {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#22c55e] w-6" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;