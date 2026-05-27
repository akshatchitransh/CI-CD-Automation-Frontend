import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import api from "../services/api";

export default function RunDetails() {

  const { id } = useParams();

  const [run, setRun] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchRun = async () => {

      try {

        const res = await api.get(`/runs/${id}`);

        setRun(res.data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

    fetchRun();

  }, [id]);

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Loading...

      </div>

    );

  }

  if (!run) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Run not found

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-[#FDF7F2] p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            Workflow Run Details
          </h1>

          <p className="text-gray-500 mt-2">
            Run ID: {run.runId}
          </p>

          <p className="text-gray-500 mt-1">
            Repository: {run.repo}
          </p>

        </div>

        <div
          className={`px-5 py-2 rounded-full text-white font-medium w-fit ${
            run.status === "failure"
              ? "bg-red-400"
              : "bg-green-400"
          }`}
        >

          {run.status}

        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-6 mt-10">

        {/* LOGS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 rounded-3xl bg-[#1E1E1E] p-6 shadow-2xl overflow-hidden"
        >

          <h2 className="text-2xl font-bold text-white mb-6">
            Logs
          </h2>

          <pre className="text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">

            {run.logs}

          </pre>

        </motion.div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* ERRORS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl p-6"
          >

            <h2 className="text-2xl font-bold mb-6">
              Errors
            </h2>

            <div className="space-y-4">

              {run.errors?.map((err: string, idx: number) => (

                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-red-100 text-red-600 font-medium"
                >

                  {err}

                </div>

              ))}

            </div>

          </motion.div>

          {/* AI SECTION */}
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

              {run.aiResponse}

            </p>

          </motion.div>

        </div>

      </div>

    </div>

  );

}