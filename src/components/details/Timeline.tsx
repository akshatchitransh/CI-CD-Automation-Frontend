import {
  BrainCircuit,
  CheckCircle2,
  GitCommit,
  FolderGit2,
  Rocket,
  XCircle,
} from "lucide-react";

export default function Timeline() {
  const steps = [
    {
      title: "Git Push",
      icon: <GitCommit size={18} />,
      color: "bg-blue-500",
    },
    {
      title: "GitHub Actions",
      icon: <FolderGit2 size={18} />,
      color: "bg-gray-700",
    },
    {
      title: "Build Started",
      icon: <Rocket size={18} />,
      color: "bg-yellow-500",
    },
    {
      title: "Build Failed",
      icon: <XCircle size={18} />,
      color: "bg-red-500",
    },
    {
      title: "AI Analysis",
      icon: <BrainCircuit size={18} />,
      color: "bg-orange-500",
    },
    {
      title: "Report Generated",
      icon: <CheckCircle2 size={18} />,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="rounded-3xl bg-white shadow-xl border border-white/50 p-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Workflow Timeline
      </h2>

      <div className="space-y-6">

        {steps.map((step, index) => (

          <div
            key={step.title}
            className="flex items-start gap-5"
          >

            <div className="flex flex-col items-center">

              <div
                className={`w-11 h-11 rounded-full ${step.color} text-white flex items-center justify-center`}
              >
                {step.icon}
              </div>

              {index !== steps.length - 1 && (
                <div className="w-[2px] h-10 bg-gray-200 mt-2" />
              )}

            </div>

            <div className="pt-2">

              <h3 className="font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Completed successfully
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}