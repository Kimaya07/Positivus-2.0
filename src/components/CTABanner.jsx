import { motion } from "framer-motion";

const CTABanner = () => (
  <section className="py-16 md:py-20 bg-[#f5f5f0]">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#22c55e] rounded-3xl p-10 md:p-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Let's make things happen
        </h2>
        <p className="text-white/80 font-body max-w-lg mx-auto mb-8 text-sm md:text-base">
          Contact us today to learn how our digital marketing services can help your business grow and succeed online.
        </p>
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="bg-white text-[#22c55e] font-heading font-semibold px-8 py-3.5 rounded-full hover:bg-gray-50 transition text-sm"
        >
          Book a Consultation
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;