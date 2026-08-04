"use client";

import { useState } from "react";

import {
  Activity,
  Settings,
} from "lucide-react";

import { Provider } from "@/types/provider";

import ConfigurationDialog from "./ConfigurationDialog";

import ConnectionStatusBadge from "./configuration/ConnectionStatusBadge";
import ApiHealthBadge from "./configuration/ApiHealthBadge";

interface ConfigurationCardProps {
  provider: Provider;
}

export default function ConfigurationCard({
  provider,
}: ConfigurationCardProps) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-lg font-semibold">
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

        <div className="mt-6">

          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-500">
              Status API
            </span>

            <ApiHealthBadge
              health={provider.apiHealth}
            />

          </div>

        </div>

        <div className="mt-6 flex gap-3">

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            <Settings size={16} />

            Konfigurasi
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            <Activity size={16} />

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