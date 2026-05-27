import { useEffect, useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import RunCard from "../components/dashboard/RunCard";

import api from "../services/api";

export default function Dashboard() {

  const [runs, setRuns] = useState<any[]>([]);

  useEffect(() => {

    const fetchRuns = async () => {

      try {

        const res = await api.get("/runs");

        setRuns(res.data);

      } catch (err) {

        console.log(err);

      }

    };

    fetchRuns();

  }, []);

  return (

    <div className="min-h-screen bg-[#FDF7F2] flex">

      <Sidebar />

      <div className="flex-1 md:ml-[260px]">

        <Topbar />

        <main className="p-6">

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <StatCard
              title="Total Runs"
              value={String(runs.length)}
            />

            <StatCard
              title="Failures"
              value={String(
                runs.filter(
                  (run) => run.status === "failure"
                ).length
              )}
            />

            <StatCard
              title="AI Analyses"
              value={String(runs.length)}
            />

          </div>

          {/* RECENT RUNS */}
          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-6">
              Recent Workflow Runs
            </h2>

            <div className="space-y-6">

              {runs.map((run: any) => (

                <RunCard
                  key={run.runId}
                  runId={run.runId}
                  status={run.status}
                  repo={run.repo}
                />

              ))}

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}