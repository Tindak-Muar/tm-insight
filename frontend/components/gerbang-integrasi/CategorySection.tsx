import { IntegrationCategory, IntegrationProvider } from "@/lib/gerbang-integrasi";

import ProviderCard from "./ProviderCard";

type CategorySectionProps = {
  title: IntegrationCategory;
  providers: IntegrationProvider[];
};

export default function CategorySection({
  title,
  providers,
}: CategorySectionProps) {
  if (providers.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {providers.length} integrasi
            </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {providers.map((provider) => (
          <ProviderCard
            key={provider.id}
            provider={provider}
          />
        ))}

      </div>

    </section>
  );
}