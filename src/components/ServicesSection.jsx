import { motion } from "framer-motion";
import { Search, MousePointerClick, Share2, PenTool, Mail, BarChart3 } from "lucide-react";

const services = [
  { title: "SEO", desc: "Boost your organic visibility and climb search rankings with data-driven strategies.", icon: Search },
  { title: "PPC Advertising", desc: "Maximize ROI with targeted pay-per-click campaigns across all major platforms.", icon: MousePointerClick, featured: true },
  { title: "Social Media Marketing", desc: "Build authentic community engagement and grow your brand presence.", icon: Share2 },
  { title: "Content Creation", desc: "Compelling content that resonates with your audience and drives conversions.", icon: PenTool },
  { title: "Email Marketing", desc: "Nurture leads and retain customers with personalized email campaigns.", icon: Mail },
  { title: "Analytics & Tracking", desc: "Deep insights and comprehensive reporting to inform every decision.", icon: BarChart3 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-[#f5f5f0]">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-500 font-body max-w-lg mx-auto">
          Comprehensive digital marketing solutions tailored to your business goals.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {services.map((s) => {
          const Icon = s.icon;
          const isFeatured = s.featured;
          return (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-7 border cursor-pointer transition-all ${
                isFeatured
                  ? "bg-[#1a2035] text-white border-transparent"
                  : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-md"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  isFeatured ? "bg-white/10" : "bg-green-50"
                }`}
              >
                <Icon size={20} className={isFeatured ? "text-gray-300" : "text-[#22c55e]"} />
              </div>

              <h3 className={`font-heading font-bold text-lg mb-2 ${isFeatured ? "text-white" : "text-gray-900"}`}>
                {s.title}
              </h3>
              <p className={`text-sm font-body mb-5 leading-relaxed ${isFeatured ? "text-gray-400" : "text-gray-500"}`}>
                {s.desc}
              </p>
              <a
                href="#"
                className={`text-sm font-heading font-semibold inline-flex items-center gap-1 transition-colors ${
                  isFeatured ? "text-gray-300 hover:text-white" : "text-[#22c55e] hover:text-[#16a34a]"
                }`}
              >
                Learn more →
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;