import { motion } from "framer-motion";
import { useState } from "react";

const footerLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border-t border-gray-100 pt-16 pb-8"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Positivus</h3>
            <p className="text-sm text-gray-500 font-body leading-relaxed">
              Navigating the digital landscape for success. We deliver measurable growth through proven strategies.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <p className="text-sm font-heading font-semibold text-gray-900 mb-4">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-body"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <p className="text-sm font-heading font-semibold text-gray-900 mb-4">Contact</p>
            <div className="flex flex-col gap-2 text-sm text-gray-500 font-body mb-6">
              <span>Email: info@positivus.com</span>
              <span>Phone: 555-567-8901</span>
              <span>Address: 1234 Main St, Moonstone City</span>
            </div>

            <p className="text-sm font-heading font-semibold text-gray-900 mb-3">
              Subscribe to our newsletter
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-800 font-body placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/30"
              />
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="bg-[#22c55e] text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#16a34a] transition"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 text-center">
          <p className="text-xs text-gray-400 font-body">
            © 2023 Positivus. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;