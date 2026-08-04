"use client";

import { useState } from "react";

import {
  Activity,
  Settings,
} from "lucide-react";

import { Provider } from "@/types/provider";

import ConnectionStatusBadge from "./ConnectionStatusBadge";
import ConfigurationDialog from "../ConfigurationDialog";
import ApiHealthBadge from "./ApiHealthBadge";

interface ProviderConfigurationCardProps {
  provider: Provider;
}

export default function ProviderConfigurationCard({
  provider,
}: ProviderConfigurationCardProps) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-red-200 hover:shadow-lg">

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-lg font-semibold text-gray-900">
              {provider.nama}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {provider.description}
            </p>

          </div>

          <ConnectionStatusBadge
            status={provider.connectionStatus}
          />

        </div>

        <div className="mt-6 flex items-center justify-between">

          <span className="text-sm text-gray-500">
            Status API
          </span>

          <ApiHealthBadge
  health={provider.apiHealth}
/>

        </div>

        <div className="mt-6 flex gap-3">

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
          >
            <Settings className="h-4 w-4" />

            Konfigurasi
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
          >
            <Activity className="h-4 w-4" />

            Uji Sambungan
          </button>

        </div>

      </div>

      <ConfigurationDialog
        providerId={provider.id}
        open={open}
        onClose={() => setOpen(false)}
      />

    </>
  );
}