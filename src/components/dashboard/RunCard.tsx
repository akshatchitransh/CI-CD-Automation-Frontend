import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  GitBranch,
  Package,
} from "lucide-react";

type Props = {
  runId: string;
  status: string;
  repo: string;
};

export default function RunCard({
  runId,
  status,
  repo,
}: Props) {

  const isFailure = status === "failure";

  return (

    <Link to={`/runs/${runId}`}>

      <motion.div
        whileHover={{
          y: -5,
          scale: 1.015,
        }}
        transition={{
          duration: 0.25,
        }}
        className="group rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl overflow-hidden"
      >

        {/* Top Accent */}
        <div
          className={`h-1 ${
            isFailure
              ? "bg-gradient-to-r from-red-400 to-red-500"
              : "bg-gradient-to-r from-emerald-400 to-green-500"
          }`}
        />

        <div className="p-6">

          {/* Header */}

          <div className="flex items-center justify-between">

            <div
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                isFailure
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {isFailure ? "Failed" : "Success"}
            </div>

            <span className="text-sm text-gray-500">
              Just now
            </span>

          </div>

          {/* Repository */}

          <div className="mt-6">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] flex items-center justify-center text-white">

                <Package size={20} />

              </div>

              <div>

                <h3 className="text-xl font-bold text-gray-800">

                  {repo}

                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">

                  <GitBranch size={14} />

                  <span>main</span>

                </div>

              </div>

            </div>

          </div>

          {/* Run Info */}

          <div className="mt-6">

            <p className="text-sm text-gray-500">
              Workflow Run
            </p>

            <p className="font-semibold text-gray-800 break-all">
              #{runId}
            </p>

          </div>

          {/* Footer */}

          <div className="mt-8 flex items-center justify-between">

            <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-3 py-2 rounded-xl">

              <BrainCircuit size={18} />

              <span className="text-sm font-medium">
                AI Analysed
              </span>

            </div>

            <div className="flex items-center gap-2 font-medium text-[#F28C7A] group-hover:translate-x-1 transition">

              <span>
                View Details
              </span>

              <ArrowRight size={18} />

            </div>

          </div>

        </div>

      </motion.div>

    </Link>

  );

}