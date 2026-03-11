import { motion } from "framer-motion";

const clients = ["Amazon", "Dribbble", "HubSpot", "Notion", "Netflix"];

const ClientsStrip = () => (
  <section className="py-12 bg-[#f5f5f0]">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-10 md:gap-16 flex-wrap"
      >
        {clients.map((name) => (
          <span
            key={name}
            className="text-lg md:text-xl font-heading font-semibold text-gray-300 select-none tracking-wide"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ClientsStrip;