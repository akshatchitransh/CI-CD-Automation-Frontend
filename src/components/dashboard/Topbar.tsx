import {
  Bell,
  Search,
  Settings,
} from "lucide-react";

export default function Topbar() {

  return (

    <div className="sticky top-0 z-40 border-b border-white/40 bg-[#FDF7F2]/80 backdrop-blur-xl">

      <div className="flex flex-col gap-6 px-8 py-6 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}

        <div>

          <h1 className="text-3xl font-bold text-gray-800">

            Welcome back 👋

          </h1>

          <p className="mt-2 text-gray-500">

            Monitor your GitHub Actions workflows and
            AI-powered debugging insights.

          </p>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          {/* SEARCH */}

          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">

            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search repository or run..."
              className="w-56 bg-transparent outline-none"
            />

          </div>

          {/* BELL */}

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition hover:shadow-lg">

            <Bell size={20} />

          </button>

          {/* SETTINGS */}

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition hover:shadow-lg">

            <Settings size={20} />

          </button>

          {/* USER */}

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] text-lg font-bold text-white shadow-lg">

            A

          </div>

        </div>

      </div>

    </div>

  );

}