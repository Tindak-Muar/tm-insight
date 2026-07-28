import { Files } from "lucide-react";

import PageHeader from "@/components/ui/PageHeader";
import IntakeStats from "@/components/pusat-dokumentasi/IntakeStats";

export default function DocumentIntelligencePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Pusat Dokumentasi"
        description="Pusat pengurusan dokumentasi berasaskan AI yang mengumpul, memproses, menganalisis dan mengurus dokumen sebagai sumber pengetahuan bagi platform SINAR."
        icon={Files}
      />

      <IntakeStats />

      <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Status Pembangunan Modul
        </h2>

        <p className="mt-3 text-gray-600">
          Pusat Dokumentasi sedang dibangunkan secara berperingkat. Fungsi
          muat naik dokumen, pemprosesan automatik, analisis AI, semakan
          dokumen dan pengurusan pustaka akan diaktifkan mengikut fasa
          pembangunan sistem.
        </p>
      </div>
    </div>
  );
}