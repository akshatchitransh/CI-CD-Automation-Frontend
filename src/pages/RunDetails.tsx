import { motion } from "framer-motion";

export default function RunDetails() {

  const logs = `
npm ERR! missing dependency
Process completed with exit code 1
Module not found
`;

  const errors = [
    "npm ERR! missing dependency",
    "Process completed with exit code 1",
  ];

  const aiSuggestion = `
The workflow failed because required dependencies are missing.

Fix:
1. Run npm install
2. Verify package.json
3. Re-run workflow
`;

  return (
    <div className="min-h-screen bg-[#FDF7F2] p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-4xl font-bold">
            Workflow Run Details
          </h1>

          <p className="text-gray-500 mt-2">
            Run ID: 24519457361
          </p>
        </div>

        <div className="px-5 py-2 rounded-full bg-red-400 text-white font-medium w-fit">
          failure
        </div>

      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6 mt-10">

        {/* Logs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 rounded-3xl bg-[#1E1E1E] p-6 shadow-2xl overflow-hidden"
        >

          <h2 className="text-2xl font-bold text-white mb-6">
            Logs
          </h2>

          <pre className="text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
            {logs}
          </pre>

        </motion.div>

        {/* Right Side */}
        <div className="space-y-6">

          {/* Errors */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl p-6"
          >

            <h2 className="text-2xl font-bold mb-6">
              Errors
            </h2>

            <div className="space-y-4">

              {errors.map((err, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-red-100 text-red-600 font-medium"
                >
                  {err}
                </div>
              ))}

            </div>

          </motion.div>

          {/* AI Suggestions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-gradient-to-r from-[#F28C7A]/20 to-[#E8B68A]/20 border border-white/30 shadow-xl p-6"
          >

            <h2 className="text-2xl font-bold mb-6">
              AI Suggestions
            </h2>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {aiSuggestion}
            </p>

          </motion.div>

        </div>

      </div>

    </div>
  );
}