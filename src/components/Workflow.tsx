export default function Workflow() {
  const steps = [
    "Push Code",
    "CI/CD Run",
    "Webhook Trigger",
    "Logs Fetch",
    "AI Insights",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center">
          Workflow
        </h2>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="px-8 py-6 rounded-3xl bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] text-white shadow-xl"
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}