import {
  Copy,
  Download,
  FolderGit2,
 RefreshCcw,
} from "lucide-react";

type Props = {
  logs: string;
  ai: string;
};

export default function ActionPanel({
  logs,
  ai,
}: Props) {

  const copyLogs = async () => {
    await navigator.clipboard.writeText(logs);
  };

  const copyAI = async () => {
    await navigator.clipboard.writeText(ai);
  };

  return (

    <div className="rounded-3xl bg-white border border-white/50 shadow-xl p-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">

        Developer Actions

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <button
          onClick={copyLogs}
          className="flex items-center justify-center gap-3 rounded-2xl bg-[#F28C7A] text-white py-4 font-semibold transition hover:scale-[1.02]"
        >

          <Copy size={18} />

          Copy Logs

        </button>

        <button
          onClick={copyAI}
          className="flex items-center justify-center gap-3 rounded-2xl bg-blue-500 text-white py-4 font-semibold transition hover:scale-[1.02]"
        >

          <Copy size={18} />

          Copy AI Fix

        </button>

        <button
          className="flex items-center justify-center gap-3 rounded-2xl bg-green-500 text-white py-4 font-semibold transition hover:scale-[1.02]"
        >

          <Download size={18} />

          Download Report

        </button>

        <button
          className="flex items-center justify-center gap-3 rounded-2xl bg-gray-800 text-white py-4 font-semibold transition hover:scale-[1.02]"
        >

          <FolderGit2 size={18} />

          Open GitHub Run

        </button>

      </div>

      <button
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-[#F28C7A] py-4 font-semibold text-[#F28C7A] transition hover:bg-[#F28C7A] hover:text-white"
      >

        <RefreshCcw size={18} />

        Re-run Workflow

      </button>

    </div>

  );

}