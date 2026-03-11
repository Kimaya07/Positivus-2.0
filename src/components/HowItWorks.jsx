import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We begin by understanding your business, goals, and current digital presence to craft a tailored approach.",
  },
  {
    num: "02",
    title: "Research & Strategy",
    desc: "Deep market analysis and competitor research inform a comprehensive, data-backed strategy.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our team implements the strategy across all channels with precision and ongoing optimization.",
  },
  {
    num: "04",
    title: "Reporting",
    desc: "Transparent, detailed reports on performance metrics so you always know where you stand.",
  },
];

const HowItWorks = () => (
  <section id="use-cases" className="py-20 md:py-28 bg-[#f5f5f0]">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-gray-500 font-body max-w-lg mx-auto">
          A deliberate, four-step process that moves your business forward with clarity.
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical dashed green line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-[2.25rem] top-4 bottom-4 w-px origin-top hidden md:block"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #22c55e 0, #22c55e 6px, transparent 6px, transparent 14px)",
          }}
        />

        <div className="flex flex-col gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative bg-white rounded-2xl border border-gray-100 p-8 md:pl-24 overflow-hidden shadow-sm"
            >
              {/* Large ghost number */}
              <span className="absolute top-4 left-5 text-7xl font-heading font-extrabold text-gray-100 select-none leading-none">
                {step.num}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#22c55e] font-heading font-bold text-sm">{step.num}</span>
                  <h3 className="font-heading font-bold text-xl text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-500 font-body text-sm leading-relaxed max-w-xl">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;