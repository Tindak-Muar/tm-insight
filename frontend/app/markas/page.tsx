import DashboardCard from "@/components/DashboardCard";

export default function MarkasPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">🏛️ Markas</h1>
        <p className="text-gray-500 mt-2">
          Selamat datang ke TM Insight.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <DashboardCard title="Berita" value="120" />
        <DashboardCard title="Radar" value="35" />
        <DashboardCard title="Dokumen" value="56" />
        <DashboardCard title="Strategis AI" value="8" />
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">
          🤖 Ringkasan Strategis AI
        </h2>

        <p className="text-gray-600 leading-7">
          Selamat datang ke TM Insight.
          <br /><br />
          Tiada ringkasan tersedia buat masa ini.
          <br />
          Apabila modul Radar dan Khazanah Politik diaktifkan,
          Strategis AI akan menyediakan ringkasan harian secara automatik.
        </p>
      </div>
<div className="rounded-xl border bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold mb-4">
    📋 Aktiviti Terkini
  </h2>

  <ul className="space-y-3 text-gray-600">
    <li>📄 Tiada dokumen baharu.</li>
    <li>📡 Tiada kemas kini daripada Radar.</li>
    <li>🤖 Tiada analisis baharu daripada Strategis AI.</li>
  </ul>
</div>
    </div>
  );
}