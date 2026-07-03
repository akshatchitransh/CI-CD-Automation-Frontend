import { Copy, TerminalSquare } from "lucide-react";

type Props = {
  logs: string;
};

export default function Terminal({ logs }: Props) {
  const copyLogs = async () => {
    await navigator.clipboard.writeText(logs);
  };

  const lines = logs.split("\n");

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-800 bg-[#151515] shadow-2xl">

      <div className="flex items-center justify-between border-b border-gray-700 bg-[#232323] px-6 py-4">

        <div className="flex items-center gap-4">

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <TerminalSquare size={18} />
            <span className="font-medium">
              Build Logs
            </span>
          </div>

        </div>

        <button
          onClick={copyLogs}
          className="flex items-center gap-2 rounded-xl border border-gray-600 px-4 py-2 text-sm text-gray-300 transition hover:bg-gray-700 hover:text-white"
        >
          <Copy size={16} />
          Copy
        </button>

      </div>

      <div className="max-h-[520px] overflow-auto p-6 font-mono text-[14px]">

        {lines.map((line, index) => {

          const isError =
            line.includes("ERR") ||
            line.includes("Error") ||
            line.includes("FAILED") ||
            line.includes("failed");

          const isWarning =
            line.includes("WARN");

          return (

            <div
              key={index}
              className="group flex border-l-2 border-transparent hover:border-[#F28C7A] hover:bg-[#202020] transition"
            >

              <div className="w-14 shrink-0 select-none border-r border-gray-700 pr-4 text-right text-gray-500">

                {index + 1}

              </div>

              <div
                className={`flex-1 px-4 py-1 whitespace-pre-wrap break-words ${
                  isError
                    ? "text-red-400"
                    : isWarning
                    ? "text-yellow-400"
                    : "text-green-300"
                }`}
              >
                {line || " "}
              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}