import { LayoutDashboard, GitBranch, BrainCircuit } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[260px] bg-white/50 backdrop-blur-xl border-r border-white/30 flex-col p-6">

      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] bg-clip-text text-transparent">
        FailSense AI
      </h1>

      <nav className="mt-12 flex flex-col gap-4">

        <button className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] text-white shadow-lg">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white transition">
          <GitBranch size={20} />
          Workflow Runs
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white transition">
          <BrainCircuit size={20} />
          AI Insights
        </button>

      </nav>

    </aside>
  );
}