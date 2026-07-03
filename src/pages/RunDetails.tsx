import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../services/api";
import ActionPanel from "../components/details/ActionPanel";
import Timeline from "../components/details/Timeline";
import {
  ArrowLeft,
  BrainCircuit,
  FolderGit2,
  GitBranch,
  ShieldAlert,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Terminal from "../components/details/Terminal";
import AIInsight from "../components/details/AIInsight";

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
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!run) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Run Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF7F2]">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-[#F28C7A] hover:gap-3 transition-all font-medium"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <h1 className="text-5xl font-black text-gray-800">
            Workflow Run
          </h1>

          <p className="mt-3 text-gray-500 text-lg">
            Run ID : {run.runId}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          <SummaryCard
            icon={<FolderGit2 size={24} />}
            title="Repository"
            value={run.repo}
          />

          <SummaryCard
            icon={<ShieldAlert size={24} />}
            title="Status"
            value={run.status}
            danger={run.status === "failure"}
          />

          <SummaryCard
            icon={<GitBranch size={24} />}
            title="Branch"
            value="main"
          />

          <SummaryCard
            icon={<BrainCircuit size={24} />}
            title="AI"
            value="Gemini"
          />

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-12">

          <Terminal logs={run.logs} />

          <AIInsight analysis={run.aiResponse} />

        </div>

        <div className="mt-12 rounded-3xl bg-white border border-white/50 shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            Extracted Errors
          </h2>

          <div className="space-y-4">

            {run.errors?.map((error: string, index: number) => (
              <ErrorBadge
                key={index}
                text={error}
              />
            ))}

          </div>

        </div>

        <div className="mt-12">
          <Timeline />
        </div>

        <div className="mt-12">

          <ActionPanel
            logs={run.logs}
            ai={JSON.stringify(run.aiResponse, null, 2)}
          />

        </div>

      </div>

    </div>
  );
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  danger?: boolean;
};

function SummaryCard({
  icon,
  title,
  value,
  danger,
}: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl bg-white shadow-lg border border-white/50 p-6"
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${
          danger
            ? "bg-red-500"
            : "bg-gradient-to-r from-[#F28C7A] to-[#E8B68A]"
        }`}
      >
        {icon}
      </div>

      <p className="mt-6 text-sm text-gray-500">
        {title}
      </p>

      <h2
        className={`mt-2 text-2xl font-bold ${
          danger
            ? "text-red-500"
            : "text-gray-800"
        }`}
      >
        {value}
      </h2>
    </motion.div>
  );
}

function ErrorBadge({
  text,
}: {
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-600 font-medium">
      ❌ {text}
    </div>
  );
}