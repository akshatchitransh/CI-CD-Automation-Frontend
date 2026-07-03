import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl"
    >
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: color }}
      />

      <div className="p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500">
              {title}
            </p>

            <h2 className="mt-2 text-4xl font-bold text-gray-800">
              {value}
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              {subtitle}
            </p>

          </div>

          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ background: color }}
          >
            <Icon size={28} />
          </div>

        </div>

      </div>
    </motion.div>
  );
}