import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import RunCard from "../components/dashboard/RunCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FDF7F2] flex">

      <Sidebar />

      <div className="flex-1 md:ml-[260px]">

        <Topbar />

        <main className="p-6">

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <StatCard
              title="Total Runs"
              value="128"
            />

            <StatCard
              title="Failures"
              value="23"
            />

            <StatCard
              title="AI Analyses"
              value="97"
            />

          </div>

          {/* Recent Runs */}
          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-6">
              Recent Workflow Runs
            </h2>

            <div className="space-y-6">

              <RunCard
                runId="24519457361"
                status="failure"
                repo="CICD-AUTOMATION"
              />

              <RunCard
                runId="24519457362"
                status="success"
                repo="AI-DEBUGGER"
              />

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}