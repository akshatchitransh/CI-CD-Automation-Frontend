import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  FolderGit2,
  Workflow,
  Cpu,
  Database,
 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF7F2]">

      {/* Navbar */}

      <nav className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">

        <h1 className="text-3xl font-black text-gray-800">
          FailSense AI
        </h1>

        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-xl bg-[#F28C7A] text-white hover:scale-105 transition"
        >
          Open Dashboard
        </Link>

      </nav>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24 text-center">

        <span className="inline-block rounded-full bg-[#FFE8DD] text-[#F28C7A] px-5 py-2 font-medium">
          AI Powered DevOps Assistant
        </span>

        <h1 className="mt-8 text-6xl md:text-7xl font-black leading-tight text-gray-800">

          Analyze

          <span className="text-[#F28C7A]">
            {" "}GitHub Actions{" "}
          </span>

          Failures

          <br />

          Using Gemini AI

        </h1>

        <p className="mt-8 text-xl text-gray-500 max-w-3xl mx-auto leading-9">

          Automatically captures failed GitHub workflow runs,
          downloads build logs, extracts errors,
          generates AI-powered explanations,
          and provides actionable fixes through a beautiful dashboard.

        </p>

        <div className="mt-12 flex justify-center gap-5">

          <Link
            to="/dashboard"
            className="px-8 py-4 rounded-2xl bg-[#F28C7A] text-white flex items-center gap-2 hover:scale-105 transition"
          >
            Launch Dashboard

            <ArrowRight size={20} />

          </Link>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">

        <Feature
          icon={<FolderGit2 size={34} />}
          title="GitHub Actions"
          desc="Receives webhook events from every failed GitHub Actions workflow."
        />

        <Feature
          icon={<Workflow size={34} />}
          title="Workflow Analysis"
          desc="Downloads workflow logs and extracts meaningful build errors automatically."
        />

        <Feature
          icon={<BrainCircuit size={34} />}
          title="Gemini AI"
          desc="Explains root cause, confidence score and exact commands to fix the issue."
        />

      </section>

      {/* How it Works */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-5xl font-black text-center text-gray-800">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          <Step
            number="01"
            title="Webhook"
            desc="GitHub sends workflow events automatically."
          />

          <Step
            number="02"
            title="Logs"
            desc="Backend downloads workflow logs through GitHub API."
          />

          <Step
            number="03"
            title="Gemini"
            desc="AI analyses the failure and generates a detailed report."
          />

          <Step
            number="04"
            title="Dashboard"
            desc="Everything is visualized in a clean analytics dashboard."
          />

        </div>

      </section>

      {/* Tech Stack */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-5xl font-black text-center text-gray-800">
          Built With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <Tech icon={<FolderGit2 />} name="GitHub API" />

          <Tech icon={<BrainCircuit />} name="Gemini AI" />

          <Tech icon={<Cpu />} name="Express.js" />

          <Tech icon={<Database />} name="MongoDB" />

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] bg-gradient-to-r from-[#F28C7A] to-[#E8B68A] text-white p-16 text-center shadow-2xl">

          <h2 className="text-5xl font-black">

            Ready to Debug Smarter?

          </h2>

          <p className="mt-6 text-lg opacity-90">

            Monitor workflows, understand failures,
            and resolve CI/CD issues in seconds using AI.

          </p>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-3 mt-10 bg-white text-[#F28C7A] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >

            Open Dashboard

            <ArrowRight size={20} />

          </Link>

        </div>

      </section>

    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: any) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg hover:-translate-y-2 transition">

      <div className="text-[#F28C7A]">
        {icon}
      </div>

      <h2 className="mt-6 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-gray-500 leading-7">
        {desc}
      </p>

    </div>
  );
}

function Step({
  number,
  title,
  desc,
}: any) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">

      <div className="text-5xl font-black text-[#F28C7A]">
        {number}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-500 leading-7">
        {desc}
      </p>

    </div>
  );
}

function Tech({
  icon,
  name,
}: any) {
  return (
    <div className="rounded-3xl bg-white shadow-lg p-8 flex flex-col items-center hover:scale-105 transition">

      <div className="text-[#F28C7A]">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold text-lg">
        {name}
      </h3>

    </div>
  );
}