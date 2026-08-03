import { integrationRegistry } from "@/lib/gerbang-integrasi";
import PageHeader from "@/components/ui/PageHeader";
import CategorySection from "@/components/gerbang-integrasi/CategorySection";

import { Workflow } from "lucide-react";

const categories = [
  "AI",
  "Komunikasi",
  "Penyimpanan",
  "Analitik",
  "Automasi",
] as const;

export default function GerbangIntegrasiPage() {
  return (
    <div className="space-y-10">

      <PageHeader
        title="Gerbang Integrasi"
        description="Pusat pengurusan semua integrasi dan perkhidmatan luaran SINARLabs."
        icon={Workflow}
      />

      {categories.map((category) => {
        const providers = integrationRegistry.filter(
          (provider) => provider.category === category
        );

        return (
          <CategorySection
            key={category}
            title={category}
            providers={providers}
          />
        );
      })}

    </div>
  );
}