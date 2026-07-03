import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import api from "../services/api";

export default function WorkflowRuns() {

  const [runs, setRuns] = useState<any[]>([]);

  useEffect(() => {

    const fetchRuns = async () => {

      try {

        const res = await api.get("/runs");

        setRuns(res.data);

      } catch (err) {

        console.log(err);

      }

    };

    fetchRuns();

  }, []);

  return (

    <div className="min-h-screen bg-[#FDF7F2] flex">

      <Sidebar />

      <div className="flex-1 md:ml-[260px]">

        <Topbar />

        <main className="p-8">

          <h1 className="text-4xl font-black">

            Workflow Runs

          </h1>

          <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-lg">

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="px-6 py-4 text-left">Run ID</th>

                  <th className="px-6 py-4 text-left">Repository</th>

                  <th className="px-6 py-4 text-left">Status</th>

                  <th className="px-6 py-4 text-left">AI</th>

                  <th className="px-6 py-4 text-left"></th>

                </tr>

              </thead>

              <tbody>

                {runs.map((run) => (

                  <tr
                    key={run.runId}
                    className="border-t"
                  >

                    <td className="px-6 py-5">

                      {run.runId}

                    </td>

                    <td className="px-6 py-5">

                      {run.repo}

                    </td>

                    <td className="px-6 py-5">

                      <span className={`px-3 py-1 rounded-full text-sm ${
                        run.status === "failure"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}>

                        {run.status}

                      </span>

                    </td>

                    <td className="px-6 py-5">

                      {run.aiResponse ? "✅" : "❌"}

                    </td>

                    <td className="px-6 py-5">

                      <Link
                        to={`/runs/${run.runId}`}
                        className="text-[#F28C7A] font-semibold"
                      >

                        Open →

                      </Link>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </main>

      </div>

    </div>

  );

}