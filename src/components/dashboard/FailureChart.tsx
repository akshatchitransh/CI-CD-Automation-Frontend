import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Props = {
  data: {
    date: string;
    failures: number;
  }[];
};

export default function FailureChart({
  data,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg border border-white/50">

      <h2 className="text-2xl font-bold mb-6">

        Failure Trend

      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="failures"
            stroke="#F28C7A"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}