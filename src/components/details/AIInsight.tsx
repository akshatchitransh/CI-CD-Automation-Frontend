import {
  BrainCircuit,
  Lightbulb,
  Wrench,
  Sparkles,
  Copy,
  TerminalSquare,
  Gauge,
} from "lucide-react";

type Props = {
  analysis: {
    rootCause: string;
    explanation: string;
    fix: string;
    commands: string[];
    confidence: number;
  };
};

export default function AIInsight({ analysis }: Props) {
  const copy = async () => {
    await navigator.clipboard.writeText(
      JSON.stringify(analysis, null, 2)
    );
  };

  return (
    <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/40 p-8">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] text-white flex items-center justify-center">

            <BrainCircuit size={24} />

          </div>

          <div>

            <h2 className="text-2xl font-bold">
              AI Analysis
            </h2>

            <p className="text-sm text-gray-500">
              Generated using Gemini
            </p>

          </div>

        </div>

        <button
          onClick={copy}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
        >
          <Copy size={16} />
          Copy
        </button>

      </div>

      <div className="mt-8 space-y-6">

        <Section
          icon={<Lightbulb size={20} />}
          title="Root Cause"
          content={analysis.rootCause}
        />

        <Section
          icon={<Sparkles size={20} />}
          title="Explanation"
          content={analysis.explanation}
        />

        <Section
          icon={<Wrench size={20} />}
          title="Suggested Fix"
          content={analysis.fix}
        />

        <Section
          icon={<TerminalSquare size={20} />}
          title="Commands"
          content={
            analysis.commands?.length
              ? analysis.commands.join("\n")
              : "No commands suggested."
          }
        />

        <Section
          icon={<Gauge size={20} />}
          title="Confidence"
          content={`${analysis.confidence}%`}
        />

      </div>

    </div>
  );
}

type SectionProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
};

function Section({
  icon,
  title,
  content,
}: SectionProps) {
  return (
    <div>

      <div className="flex items-center gap-2 font-semibold">

        {icon}

        {title}

      </div>

      <pre className="mt-2 whitespace-pre-wrap text-gray-600 leading-7 font-sans">

        {content}

      </pre>

    </div>
  );
}