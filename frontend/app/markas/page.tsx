import DashboardCard from "@/components/dashboard/DashboardCard";
import PageHeader from "@/components/ui/PageHeader";
import { LayoutDashboard } from "lucide-react";

export default function MarkasPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Markas"
        description="Pusat kawalan dan pemantauan keseluruhan platform SINAR."
        icon={LayoutDashboard}
      />

      <div className="grid grid-cols-4 gap-6">
        <DashboardCard title="Berita" value={120} />
        <DashboardCard title="Radar" value={35} />
        <DashboardCard title="Dokumen" value={56} />
        <DashboardCard title="Strategis AI" value={8} />
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold">
          Ringkasan Strategis AI
        </h2>

        <p className="leading-7 text-gray-600">
          Selamat datang ke SINAR.
          <br />
          <br />
          Tiada ringkasan tersedia buat masa ini.
          <br />
          Apabila modul Radar dan Khazanah Politik diaktifkan,
          Strategis AI akan menyediakan ringkasan harian secara automatik.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Aktiviti Terkini
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li>Tiada dokumen baharu.</li>
          <li>Tiada kemas kini daripada Radar.</li>
          <li>Tiada analisis baharu daripada Strategis AI.</li>
        </ul>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Tugasan Hari Ini
        </h2>

        <ul className="space-y-3">
          <li>☐ Kemas Kini Khazanah Politik</li>
          <li>☐ Semak Radar</li>
          <li>☐ Jana Ringkasan AI</li>
        </ul>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Status Sistem
        </h2>

        <div className="space-y-2 text-gray-600">
          <p>🟢 SINAR Online</p>
          <p>🟢 Strategis AI Bersedia</p>
          <p>🟢 Radar Aktif</p>
        </div>
      </div>
    </div>
  );
}