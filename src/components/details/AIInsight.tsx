import {
  BrainCircuit,
  Lightbulb,
  Wrench,
  Sparkles,
  Copy,
  
} from "lucide-react";

type Props = {
  analysis: any;
};

export default function AIInsight({ analysis }: Props) {
const copy = async () => {
  await navigator.clipboard.writeText(
    typeof analysis === "string"
      ? analysis
      : JSON.stringify(analysis, null, 2)
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

  {typeof analysis === "string" ? (

    <Section
      icon={<BrainCircuit size={20} />}
      title="AI Analysis"
      content={analysis}
    />

  ) : (

    <>

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
        title="Fix"
        content={analysis.fix}
      />

      {analysis.commands && (

        <CodeBlock
          title="Commands"
          commands={analysis.commands}
        />

      )}

      {analysis.confidence && (

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-semibold">

              Confidence

            </span>

            <span>

              {analysis.confidence}%

            </span>

          </div>

          <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

            <div
              className="h-full rounded-full bg-green-500"
              style={{
                width: `${analysis.confidence}%`,
              }}
            />

          </div>

        </div>

      )}

    </>

  )}

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

function CodeBlock({
  title,
  commands,
}: {
  title: string;
  commands: string[];
}) {

  return (

    <div>

      <h3 className="font-semibold mb-3">

        {title}

      </h3>

      <div className="rounded-2xl bg-[#151515] text-green-400 p-5 font-mono space-y-2">

        {commands.map(
          (
            command,
            index
          ) => (

            <div key={index}>

              $ {command}

            </div>

          )
        )}

      </div>

    </div>

  );

}