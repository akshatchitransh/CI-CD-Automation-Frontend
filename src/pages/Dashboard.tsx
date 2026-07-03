import { useEffect, useMemo, useState } from "react";
import FailureChart from "../components/dashboard/FailureChart";
import {
  Activity,
  Bot,
  CircleCheck,
  CircleX,
} from "lucide-react";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import RunCard from "../components/dashboard/RunCard";

import api from "../services/api";

export default function Dashboard() {
  const [runs, setRuns] = useState<any[]>([]);
  const [trend, setTrend] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState({
  totalRuns: 0,
  failedRuns: 0,
  successRuns: 0,
  successRate: 0,
});

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<
    "all" | "success" | "failure"
  >("all");

  useEffect(() => {
    const fetchRuns = async () => {
      try {
        const res = await api.get("/runs");
        setRuns(res.data);
      } catch (err) {
        console.log(err);
      }
    };
   const fetchAnalytics = async () => {
  try {
    const res = await api.get("/analytics");
    setAnalytics(res.data);
  } catch (err) {
    console.log(err);
  }
};
const fetchTrend = async () => {

  try {

    const res = await api.get("/analytics/trend");

    setTrend(res.data);

  } catch (err) {

    console.log(err);

  }

};

    fetchRuns();
    fetchAnalytics();
    fetchTrend();
  }, []);

 

  

  const filteredRuns = useMemo(() => {
    return runs.filter((run) => {
      const matchesSearch =
        run.repo
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        run.runId
          ?.toString()
          .includes(search);

      const matchesFilter =
        filter === "all"
          ? true
          : run.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [runs, search, filter]);

  return (
    <div className="min-h-screen bg-[#FDF7F2] flex">

      <Sidebar />

      <div className="flex-1 md:ml-[260px]">

        <Topbar />

        <main className="p-8">

          {/* Stats */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

  <StatCard
    title="Total Runs"
    value={String(analytics.totalRuns)}
    subtitle="All workflow executions"
    icon={Activity}
    color="linear-gradient(135deg,#F28C7A,#E8B68A)"
  />

  <StatCard
    title="Failed"
    value={String(analytics.failedRuns)}
    subtitle="Require attention"
    icon={CircleX}
    color="linear-gradient(135deg,#ef4444,#dc2626)"
  />

  <StatCard
    title="Success"
    value={String(analytics.successRuns)}
    subtitle="Healthy pipelines"
    icon={CircleCheck}
    color="linear-gradient(135deg,#22c55e,#16a34a)"
  />

  <StatCard
    title="Success Rate"
    value={`${analytics.successRate}%`}
    subtitle="Pipeline success percentage"
    icon={Bot}
    color="linear-gradient(135deg,#8b5cf6,#6366f1)"
  />

</div>
<div className="mt-10">

  <FailureChart
    data={trend}
  />

</div>

          {/* Header */}

          <div className="mt-14">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

              <div>

                <h2 className="text-4xl font-bold text-gray-800">

                  Recent Workflow Runs

                </h2>

                <p className="mt-2 text-gray-500">

                  Monitor your latest GitHub Actions executions.

                </p>

              </div>

            </div>

            {/* Search + Filters */}

            <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search repository or run..."
                className="w-full lg:w-96 rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none shadow-sm focus:ring-2 focus:ring-[#F28C7A]"
              />

              <div className="flex gap-3">

                <button
                  onClick={() => setFilter("all")}
                  className={`rounded-full px-5 py-2 transition ${
                    filter === "all"
                      ? "bg-[#F28C7A] text-white"
                      : "bg-white shadow"
                  }`}
                >
                 All ({analytics.totalRuns})
                </button>

                <button
                  onClick={() =>
                    setFilter("success")
                  }
                  className={`rounded-full px-5 py-2 transition ${
                    filter === "success"
                      ? "bg-green-500 text-white"
                      : "bg-white shadow"
                  }`}
                >
                  Success ({analytics.successRuns})
                </button>

                <button
                  onClick={() =>
                    setFilter("failure")
                  }
                  className={`rounded-full px-5 py-2 transition ${
                    filter === "failure"
                      ? "bg-red-500 text-white"
                      : "bg-white shadow"
                  }`}
                >
                  Failed ({analytics.failedRuns})
                </button>

              </div>

            </div>

          </div>

          {/* Runs */}

          <div className="mt-10">

            {filteredRuns.length === 0 ? (

              <div className="rounded-3xl border border-white/40 bg-white/70 p-16 shadow-lg backdrop-blur-xl text-center">

                <div className="text-6xl">
                  📭
                </div>

                <h3 className="mt-6 text-3xl font-bold">

                  No Workflow Runs Yet

                </h3>

                <p className="mt-4 text-gray-500">

                  Push your first commit to start analysing
                  your CI/CD pipelines with AI.

                </p>

              </div>

            ) : (

              <div className="space-y-6">

                {filteredRuns.map((run: any) => (

                  <RunCard
                    key={run.runId}
                    runId={run.runId}
                    status={run.status}
                    repo={run.repo}
                  />

                ))}

              </div>

            )}

          </div>

        </main>

      </div>

    </div>
  );
}