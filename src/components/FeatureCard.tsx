type Props = {
  title: string;
  desc: string;
};

export default function FeatureCard({ title, desc }: Props) {
  return (
    <div className="p-8 rounded-3xl bg-white/50 backdrop-blur-xl shadow-xl border border-white/30 hover:-translate-y-2 transition">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}