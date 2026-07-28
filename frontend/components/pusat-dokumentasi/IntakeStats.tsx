import DashboardCard from "./DashboardCard";
import { getDashboardStats } from "@/lib/intake/service";

export default async function IntakeStats() {
  const stats = await getDashboardStats();

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <DashboardCard
        title="Dimuat Naik"
        value={stats.uploaded}
        description="Dokumen baharu"
        icon="📥"
      />

      <DashboardCard
        title="Dalam Giliran"
        value={stats.queued}
        description="Menunggu pemprosesan"
        icon="⏳"
      />

      <DashboardCard
        title="Dalam Semakan"
        value={stats.review}
        description="Menunggu semakan"
        icon="📝"
      />

      <DashboardCard
        title="Diterbitkan"
        value={stats.published}
        description="Tersedia dalam Khazanah Politik"
        icon="✅"
      />
    </div>
  );
}