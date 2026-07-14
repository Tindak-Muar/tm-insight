import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-8">
          <h2 className="text-4xl font-bold mb-2">Dashboard</h2>

          <p className="text-gray-500 mb-8">
            Selamat datang ke TM Insight.
          </p>

          <div className="grid grid-cols-4 gap-6">
            <DashboardCard title="Berita" value={0} />
            <DashboardCard title="Kenyataan Media" value={0} />
            <DashboardCard title="Dokumen" value={0} />
            <DashboardCard title="Policy Brief" value={0} />
          </div>
        </section>
      </div>
    </main>
  );
}