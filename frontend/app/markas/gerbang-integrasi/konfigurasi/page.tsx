import ProviderConfigurationCard from "@/components/gerbang-integrasi/configuration/ProviderConfigurationCard";

import { getProviders } from "@/lib/gerbang-integrasi/configuration";

export default function KonfigurasiPenyediaPage() {
  const providers = getProviders();

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Enjin Konfigurasi Penyedia
        </h1>

        <p className="mt-2 text-gray-600">
          Urus konfigurasi, sambungan dan status semua penyedia
          yang digunakan oleh SINARLabs.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {providers.map((provider) => (
          <ProviderConfigurationCard
            key={provider.id}
            provider={provider}
          />
        ))}

      </div>

    </div>
  );
}