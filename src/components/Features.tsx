import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            title="GitHub Webhooks"
            desc="Capture CI/CD workflow events instantly using GitHub webhooks."
          />

          <FeatureCard
            title="AI Log Analysis"
            desc="Transform raw CI/CD logs into intelligent debugging insights."
          />

          <FeatureCard
            title="Real-Time Monitoring"
            desc="Track workflow failures and debugging reports live."
          />
        </div>
      </div>
    </section>
  );
}