export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-[700px]">

        <h1 className="text-5xl font-bold text-blue-700">
          TM Insight
        </h1>

        <p className="text-xl mt-3 text-gray-600">
          Political Intelligence Platform
        </p>

        <p className="mt-8 text-gray-500">
          Developed by Tindak Muar
        </p>

        <div className="mt-10">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg">
            Enter Dashboard
          </button>
        </div>

      </div>
    </main>
  );
}