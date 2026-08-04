import {
  Workflow,
  Link2,
  CheckCircle2,
  CircleOff,
  TriangleAlert,
} from "lucide-react";

import PageHeader from "@/components/ui/PageHeader";
import IntegrationStatCard from "@/components/gerbang-integrasi/IntegrationStatCard";
import IntegrationSearch from "@/components/gerbang-integrasi/IntegrationSearch";

import { integrationRegistry } from "@/lib/gerbang-integrasi";

export default function GerbangIntegrasiPage() {
  const total = integrationRegistry.length;

  const connected = integrationRegistry.filter(
    (provider) => provider.status === "CONNECTED"
  ).length;

  const disconnected = integrationRegistry.filter(
    (provider) => provider.status === "DISCONNECTED"
  ).length;

  const errors = integrationRegistry.filter(
    (provider) => provider.status === "ERROR"
  ).length;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Gerbang Integrasi"
        description="Pusat pengurusan semua integrasi dan perkhidmatan luaran SINARLabs."
        icon={Workflow}
      />

      {/* Statistik */}

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
     <IntegrationStatCard
  title="Integrasi"
  value={total}
  icon={Link2}
  color="text-red-700"
/>

<IntegrationStatCard
  title="Disambungkan"
  value={connected}
  icon={CheckCircle2}
  color="text-green-600"
/>

<IntegrationStatCard
  title="Tidak Disambungkan"
  value={disconnected}
  icon={CircleOff}
  color="text-gray-500"
/>

<IntegrationStatCard
  title="Ralat"
  value={errors}
  icon={TriangleAlert}
  color="text-amber-600"
/>
      </section>

      {/* Carian + Senarai Integrasi */}

      <IntegrationSearch />
    </div>
  );
}