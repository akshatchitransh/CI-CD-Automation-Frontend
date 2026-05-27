import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            AI-Powered

            <span className="block bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] bg-clip-text text-transparent">
              CI/CD Debugging
            </span>

          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Automatically analyze CI/CD failures, extract logs,
            and generate AI-powered debugging insights in real time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link to="/dashboard">

              <button className="px-7 py-3 rounded-2xl bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] text-white shadow-xl hover:scale-105 transition duration-300">

                View Dashboard

              </button>

            </Link>

            <button className="px-7 py-3 rounded-2xl border border-gray-300 hover:bg-white transition duration-300">
              Connect GitHub
            </button>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">

            <div className="flex items-center justify-between">

              <span className="text-red-500 font-semibold">
                Pipeline Failed
              </span>

              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                Failed
              </span>

            </div>

            <div className="mt-6 bg-[#1E1E1E] rounded-2xl p-4 text-sm text-green-400 font-mono overflow-hidden">

              npm ERR! missing dependency...

            </div>

            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#F28C7A]/20 to-[#E8B68A]/20 border border-white/30">

              <p className="font-semibold">
                AI Suggestion
              </p>

              <p className="text-sm text-gray-700 mt-2">
                Install missing dependencies and verify package.json scripts.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}