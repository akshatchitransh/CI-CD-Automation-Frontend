export default function Topbar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-xl bg-white/40 border-b border-white/20 p-6 flex items-center justify-between">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search runs..."
          className="px-4 py-2 rounded-2xl border border-gray-200 bg-white/70 outline-none"
        />

        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#F28C7A] to-[#E8B68A]" />

      </div>

    </div>
  );
}