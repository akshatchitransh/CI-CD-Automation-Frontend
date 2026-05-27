import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full fixed top-0 z-50 backdrop-blur-xl bg-white/40 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] bg-clip-text text-transparent">
          FailSense AI
        </h1>

        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-[#F28C7A] transition">
            Features
          </a>
          <a href="#" className="hover:text-[#F28C7A] transition">
            Dashboard
          </a>

          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] text-white shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}