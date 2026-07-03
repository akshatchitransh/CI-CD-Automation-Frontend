import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Search,
  Settings,
  CheckCircle,
  AlertCircle,
  GitBranch,
} from "lucide-react";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

const profileRef = useRef<HTMLDivElement>(null);

const settingsRef = useRef<HTMLDivElement>(null);

  const ref = useRef<HTMLDivElement>(null);

  const notifications = [
    {
      title: "Workflow Failed",
      desc: "Run #28643636898 failed.",
      icon: <AlertCircle size={18} className="text-red-500" />,
    },
    {
      title: "AI Analysis Complete",
      desc: "Gemini generated a fix.",
      icon: <CheckCircle size={18} className="text-green-500" />,
    },
    {
      title: "Webhook Received",
      desc: "New GitHub webhook received.",
      icon: <GitBranch size={18} className="text-[#F28C7A]" />,
    },
  ];

useEffect(() => {

  const close = (e: MouseEvent) => {

    if (
      ref.current &&
      !ref.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }

    if (
      settingsRef.current &&
      !settingsRef.current.contains(e.target as Node)
    ) {
      setSettingsOpen(false);
    }

    if (
      profileRef.current &&
      !profileRef.current.contains(e.target as Node)
    ) {
      setProfileOpen(false);
    }

  };

  document.addEventListener("mousedown", close);

  return () => {

    document.removeEventListener(
      "mousedown",
      close
    );

  };

}, []);

  return (
    <div className="sticky top-0 z-40 border-b border-white/40 bg-[#FDF7F2]/80 backdrop-blur-xl">

      <div className="flex flex-col gap-6 px-8 py-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Welcome back 👋
          </h1>

          <p className="mt-2 text-gray-500">
            Monitor your GitHub Actions workflows and
            AI-powered debugging insights.
          </p>

        </div>

        <div className="flex items-center gap-4">

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

          {/* Notification */}

          <div
            className="relative"
            ref={ref}
          >

            <button
              onClick={() => setOpen(!open)}
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
            >

              <Bell size={20} />

              <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500" />

            </button>

            {open && (

              <div className="absolute right-0 mt-3 w-96 rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden">

                <div className="border-b px-6 py-4">

                  <h2 className="text-lg font-bold">
                    Notifications
                  </h2>

                </div>

                {notifications.map((item, index) => (

                  <div
                    key={index}
                    className="flex gap-4 px-6 py-5 hover:bg-gray-50 transition"
                  >

                    <div className="mt-1">
                      {item.icon}
                    </div>

                    <div>

                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                ))}

                <button className="w-full border-t py-4 text-[#F28C7A] font-semibold hover:bg-gray-50">

                  View All Notifications

                </button>

              </div>

            )}

          </div>

          {/* Settings */}
<div
  className="relative"
  ref={settingsRef}
>

  <button
    onClick={() =>
      setSettingsOpen(!settingsOpen)
    }
    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
  >

    <Settings size={20} />

  </button>

  {settingsOpen && (

    <div className="absolute right-0 mt-3 w-72 rounded-3xl bg-white shadow-2xl border overflow-hidden">

      <button className="w-full text-left px-6 py-4 hover:bg-gray-50">

        🌙 Dark Mode (Coming Soon)

      </button>

      <button className="w-full text-left px-6 py-4 hover:bg-gray-50">

        🔄 Refresh Dashboard

      </button>

      <button className="w-full text-left px-6 py-4 hover:bg-gray-50">

        📄 About Project

      </button>

      <button className="w-full text-left px-6 py-4 hover:bg-gray-50 text-red-500">

        Reset Filters

      </button>

    </div>

  )}

</div>

          {/* User */}

         <div
  className="relative"
  ref={profileRef}
>

  <button
    onClick={() =>
      setProfileOpen(!profileOpen)
    }
    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] text-white text-lg font-bold shadow-lg"
  >

    A

  </button>

  {profileOpen && (

    <div className="absolute right-0 mt-3 w-72 rounded-3xl bg-white shadow-2xl border overflow-hidden">

      <div className="px-6 py-5 border-b">

        <h3 className="font-bold text-lg">

          Akshat Chitransh

        </h3>

        <p className="text-sm text-gray-500">

          DevOps Engineer

        </p>

      </div>

      <button className="w-full text-left px-6 py-4 hover:bg-gray-50">

        📊 Dashboard

      </button>

      <button className="w-full text-left px-6 py-4 hover:bg-gray-50">

        🧠 AI Insights

      </button>

      <button className="w-full text-left px-6 py-4 hover:bg-gray-50">

        📂 GitHub Repository

      </button>

      <button className="w-full text-left px-6 py-4 hover:bg-gray-50">

        📘 Documentation

      </button>

      <button className="w-full text-left px-6 py-4 text-red-500 hover:bg-red-50">

        Logout (Coming Soon)

      </button>

    </div>

  )}

</div>

        </div>

      </div>

    </div>
  );
}