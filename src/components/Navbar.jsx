import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-[#f5f5f0]"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center gap-2">
          <img src="src/assets/Star.png" alt="logo" className="w-7 h-7 object-contain" />
          <span className="text-xl font-heading font-bold text-gray-900">Positivus</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-body"
            >
              {link}
            </a>
          ))}
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="bg-[#22c55e] text-white font-heading font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#16a34a] transition"
          >
            Request a Quote
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-body"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="bg-[#22c55e] text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-full w-fit"
              >
                Request a Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;