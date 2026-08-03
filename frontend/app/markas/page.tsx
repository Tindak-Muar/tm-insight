import {
  Newspaper,
  RadioTower,
  FolderOpen,
  BrainCircuit,
} from "lucide-react";

import DashboardCard from "@/components/dashboard/DashboardCard";
import { getDashboardStats } from "@/lib/dashboard/stats";

export default async function MarkasPage() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-6">

      {/* Welcome */}

      <section>

        <h1 className="text-4xl font-bold text-gray-900">
          Selamat datang ke{" "}
          <span className="text-red-700">
            SINARLabs
          </span>
          , Ahmad Anwar.
        </h1>

        <p className="mt-2 text-lg text-gray-600">
          Pusat kawalan dan pemantauan keseluruhan platform SINAR.
        </p>

      </section>

      {/* Dashboard Stats */}

      <section className="grid grid-cols-4 gap-6">

        <DashboardCard
          title="Berita"
          value={stats.berita}
          description="Artikel keseluruhan"
          icon={Newspaper}
        />

        <DashboardCard
          title="Radar"
          value={stats.radar}
          description="Isu dipantau"
          icon={RadioTower}
        />

        <DashboardCard
          title="Dokumen"
          value={stats.dokumen}
          description="Dokumen & aset"
          icon={FolderOpen}
        />

        <DashboardCard
          title="Strategis AI"
          value={stats.strategisAI}
          description="Analisis AI"
          icon={BrainCircuit}
        />

      </section>

      {/* Main Content */}

      <section className="grid grid-cols-5 gap-6">

        {/* Aktiviti Terkini */}

        <div className="col-span-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-xl font-semibold">
              Aktiviti Terkini
            </h2>

            <button className="text-sm font-medium text-red-700 hover:underline">
              Lihat Semua
            </button>

          </div>

          <div className="space-y-4">

            <div className="flex items-start justify-between">

              <div>

                <p className="font-medium">
                  Tiada aktiviti direkodkan.
                </p>

                <p className="text-sm text-gray-500">
                  Aktiviti sistem akan dipaparkan di sini.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Strategis AI */}

        <div className="col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-xl font-semibold">
              Ringkasan Strategis AI
            </h2>

            <button className="text-sm font-medium text-red-700 hover:underline">
              Buka Modul
            </button>

          </div>

          <ul className="space-y-3 text-gray-600">

            <li>
              • Tiada analisis tersedia.
            </li>

            <li>
              • Strategis AI akan menjana ringkasan secara automatik apabila modul diaktifkan.
            </li>

          </ul>

        </div>

      </section>

      {/* Integrasi */}

      <section className="flex justify-end">

        <button className="rounded-xl border border-red-300 px-6 py-3 font-medium text-red-700 transition hover:bg-red-50">

          Gerbang Integrasi

        </button>

      </section>

    </div>
  );
}