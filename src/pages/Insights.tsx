import { useEffect, useState } from "react";
import { BrainCircuit, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Insights() {

  const [runs, setRuns] = useState<any[]>([]);

  useEffect(() => {

    const fetchRuns = async () => {

      const res = await api.get("/runs");

      setRuns(res.data);

    };

    fetchRuns();

  }, []);

  return (

    <div className="min-h-screen bg-[#FDF7F2] p-10">

      <h1 className="text-5xl font-black">

        AI Insights

      </h1>

      <p className="text-gray-500 mt-2">

        AI generated reports for failed workflows.

      </p>

      <div className="mt-10 space-y-6">

        {runs.map((run) => (

          <div
            key={run.runId}
            className="bg-white rounded-3xl shadow-lg p-8"
          >

            <div className="flex justify-between items-start">

              <div>

                <div className="flex items-center gap-3">

                  <BrainCircuit
                    className="text-[#F28C7A]"
                  />

                  <h2 className="text-2xl font-bold">

                    {run.repo}

                  </h2>

                </div>

                <p className="mt-3 text-gray-500">

                  Run ID : {run.runId}

                </p>

               <p className="mt-6 line-clamp-3 text-gray-700">
  {typeof run.aiResponse === "string"
    ? run.aiResponse
    : run.aiResponse?.explanation}
</p>

              </div>

              <Link
                to={`/runs/${run.runId}`}
                className="flex items-center gap-2 bg-[#F28C7A] text-white px-5 py-3 rounded-xl"
              >

                Open

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}