import {
  LayoutDashboard,
  GitBranch,
  BrainCircuit,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[260px] bg-white/50 backdrop-blur-xl border-r border-white/30 flex-col p-6">

      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] bg-clip-text text-transparent">
        FailSense AI
      </h1>

      <nav className="mt-12 flex flex-col gap-4">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
              isActive
                ? "bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] text-white shadow-lg"
                : "hover:bg-white text-gray-700"
            }`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/runs"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white transition text-gray-700"
        >
          <GitBranch size={20} />
          Workflow Runs
        </NavLink>

        <NavLink
          to="/insights"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
              isActive
                ? "bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] text-white shadow-lg"
                : "hover:bg-white text-gray-700"
            }`
          }
        >
          <BrainCircuit size={20} />
          AI Insights
        </NavLink>

      </nav>

    </aside>
  );
}