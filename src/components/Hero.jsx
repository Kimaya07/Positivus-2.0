import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { label: "Conversion Rate", value: 42, suffix: "%" },
  { label: "CTR", value: 8.7, suffix: "%", decimal: true },
  { label: "Revenue Growth", value: 156, suffix: "%" },
];

const Counter = ({ target, suffix, decimal, started }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let frame;
    const duration = 1200;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, started]);

  return (
    <span>
      {decimal ? count.toFixed(1) : Math.round(count)}
      {suffix}
    </span>
  );
};

/* Mini dashboard card shown on the right side of hero */
const DashboardMockup = ({ inView }) => (
  <motion.div
    initial={{ opacity: 0, x: 40, y: 10 }}
    animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="relative w-full max-w-lg ml-auto"
  >
    {/* Soft green glow behind the card */}
    <div className="absolute -inset-6 bg-green-100 opacity-60 rounded-3xl blur-2xl pointer-events-none" />

    <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Mac-like header */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-gray-50">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-gray-400 font-body">Marketing Analytics · Dashboard</span>
      </div>

      <div className="p-4 grid grid-cols-2 gap-3">
        {/* Bar chart placeholder */}
        <div className="bg-gray-50 rounded-xl p-3">
          <p className="text-[10px] text-gray-400 font-body mb-2">Expected Metrics</p>
          <div className="flex items-end gap-1 h-16">
            {[40, 65, 45, 80, 55, 90, 70, 95, 60, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.05 }}
                className="flex-1 origin-bottom rounded-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: i >= 7 ? "#22c55e" : i >= 5 ? "#4ade80" : "#d1fae5",
                }}
              />
            ))}
          </div>
        </div>

        {/* Line chart placeholder */}
        <div className="bg-gray-50 rounded-xl p-3">
          <p className="text-[10px] text-gray-400 font-body mb-2">Conversion Analytics</p>
          <svg viewBox="0 0 80 40" className="w-full h-16">
            <motion.polyline
              points="0,35 15,28 30,20 45,15 60,8 80,3"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 1 }}
            />
            <motion.polyline
              points="0,38 15,34 30,30 45,25 60,20 80,16"
              fill="none"
              stroke="#86efac"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.1 }}
            />
          </svg>
        </div>

        {/* Bottom row */}
        <div className="bg-gray-50 rounded-xl p-3">
          <p className="text-[10px] text-gray-400 font-body mb-2">Conversion Analytics</p>
          <svg viewBox="0 0 80 40" className="w-full h-14">
            <motion.polyline
              points="0,38 20,30 40,20 55,14 70,10 80,6"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.2 }}
            />
          </svg>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#22c55e] rounded-xl p-2.5 col-span-2">
            <p className="text-[9px] text-green-100 font-body">Careers</p>
            <p className="text-sm font-heading font-bold text-white">$12,380</p>
            <p className="text-[9px] text-green-200 font-body">↑ business</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-2.5">
            <p className="text-[9px] text-gray-400 font-body">Convers</p>
            <p className="text-xs font-heading font-bold text-gray-800">$2,380</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-2.5">
            <p className="text-[9px] text-gray-400 font-body">Conv.Invers</p>
            <p className="text-xs font-heading font-bold text-gray-800">$5,288</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setCountersStarted(true), 800);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative pt-24 pb-10 overflow-hidden bg-[#f5f5f0]">
      {/* Subtle green background glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100 opacity-40 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Top row: left text + right dashboard */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16">
          {/* Left column */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-white mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <span className="text-xs font-body text-gray-500">Digital Marketing Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.15] text-gray-900 mb-5"
            >
              Navigating the digital
              <br />landscape for success
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-500 font-body max-w-md mb-8 text-base leading-relaxed"
            >
              Our expert team delivers measurable results through SEO, PPC advertising, social media marketing, and content creation strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="bg-[#22c55e] text-white font-heading font-semibold px-7 py-3.5 rounded-full hover:bg-[#16a34a] transition text-sm"
              >
                Book a Consultation
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="border border-gray-300 text-gray-700 font-heading font-semibold px-7 py-3.5 rounded-full hover:bg-gray-100 transition text-sm bg-white"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          {/* Right column: dashboard mockup */}
          <div className="flex-1 w-full">
            <DashboardMockup inView={inView} />
          </div>
        </div>

        {/* Bottom metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-row items-center gap-10 md:gap-20"
        >
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-xs text-gray-400 font-body mb-1">{m.label}</p>
              <p className="text-3xl font-heading font-bold text-[#22c55e]">
                <Counter target={m.value} suffix={m.suffix} decimal={m.decimal} started={countersStarted} />
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;