import { Link } from "react-router-dom";

type Props = {
  runId: string;
  status: string;
  repo: string;
};

export default function RunCard({
  runId,
  status,
  repo,
}: Props) {

  const isFailure = status === "failure";

  return (

    <Link to={`/runs/${runId}`}>

      <div className="p-6 rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl border border-white/30 hover:scale-[1.02] hover:shadow-2xl transition duration-300 cursor-pointer">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>

            <h3 className="text-2xl font-semibold">
              {repo}
            </h3>

            <p className="text-gray-500 mt-1">
              Run ID: {runId}
            </p>

          </div>

          <div
            className={`px-5 py-2 rounded-full text-white font-medium w-fit ${
              isFailure
                ? "bg-red-400"
                : "bg-green-400"
            }`}
          >

            {status}

          </div>

        </div>

      </div>

    </Link>

  );
}