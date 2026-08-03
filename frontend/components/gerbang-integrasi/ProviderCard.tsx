import { IntegrationProvider } from "@/lib/gerbang-integrasi";

import { providerIcons } from "./providerIcons";
import ConnectionBadge from "./ConnectionBadge";
import HealthIndicator from "./HealthIndicator";

type ProviderCardProps = {
  provider: IntegrationProvider;
};

export default function ProviderCard({
  provider,
}: ProviderCardProps) {
  const Icon = providerIcons[provider.id];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">

      <div className="flex items-start gap-4">

        <div className="rounded-lg bg-red-50 p-3">
          <Icon className="h-6 w-6 text-red-700" />
        </div>

        <div className="flex-1">

          <h3 className="text-lg font-semibold text-gray-900">
            {provider.name}
          </h3>

          <p className="mt-1 text-sm leading-6 text-gray-500">
            {provider.description}
          </p>

        </div>

      </div>

      <div className="my-6 border-t" />

      <div className="space-y-4">

        <div className="flex items-center justify-between">

          <span className="text-sm font-medium text-gray-500">
            Status
          </span>

          <ConnectionBadge
            status={provider.status}
          />

        </div>

        <div className="flex items-center justify-between">

          <span className="text-sm font-medium text-gray-500">
            Kesihatan
          </span>

          <HealthIndicator
            health={provider.health}
          />

        </div>

      </div>

      <div className="mt-6">

        <button
          type="button"
          className="w-full rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-800"
        >
          Konfigurasi
        </button>

      </div>

    </div>
  );
}