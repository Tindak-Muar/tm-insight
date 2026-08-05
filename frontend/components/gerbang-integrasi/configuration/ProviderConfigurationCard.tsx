"use client";

import { useState } from "react";

import {
  Activity,
  Settings,
} from "lucide-react";

import { Provider } from "@/types/provider";
import { ProviderRuntime } from "@/types/providerRuntime";
import { ConnectionTestResult } from "@/types/connection";

import { useProviderConfiguration } from "@/lib/hooks/useProviderConfiguration";

import ConnectionStatusBadge from "./ConnectionStatusBadge";
import ApiHealthBadge from "./ApiHealthBadge";

import ConfigurationDialog from "../ConfigurationDialog";
import ConnectionResultDialog from "../connection/ConnectionResultDialog";

interface ProviderConfigurationCardProps {
  provider: Provider;
}

export default function ProviderConfigurationCard({
  provider,
}: ProviderConfigurationCardProps) {

  const { test } = useProviderConfiguration();

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [resultOpen, setResultOpen] = useState(false);

  const [result, setResult] =
    useState<ConnectionTestResult | null>(null);

  const [runtime, setRuntime] =
    useState<ProviderRuntime>({
      connectionStatus: provider.connectionStatus,
      apiHealth: provider.apiHealth,
    });

  async function handleTestConnection() {

    try {

      setLoading(true);

      const connectionResult = await test({
        providerId: provider.id,
      });

      setResult(connectionResult);

      if (connectionResult.success) {

        setRuntime({
          connectionStatus: "disambungkan",
          apiHealth: "normal",
          lastTestedAt: connectionResult.testedAt,
          responseTime: connectionResult.duration,
        });

      } else {

        setRuntime({
          connectionStatus: "ralat",
          apiHealth: "kritikal",
          lastTestedAt: connectionResult.testedAt,
          responseTime: connectionResult.duration,
        });

      }

      setResultOpen(true);

    } finally {

      setLoading(false);

    }

  }

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
            status={runtime.connectionStatus}
          />

        </div>

        <div className="mt-6 flex items-center justify-between">

          <span className="text-sm text-gray-500">
            Status API
          </span>

          <ApiHealthBadge
            health={runtime.apiHealth}
          />

        </div>

        {runtime.lastTestedAt && (

          <div className="mt-4 rounded-lg bg-gray-50 p-3 text-xs text-gray-500">

            <p className="font-medium text-gray-700">
              Ujian Terakhir
            </p>

            <p>
              {new Intl.DateTimeFormat(
                "ms-MY",
                {
                  dateStyle: "medium",
                  timeStyle: "short",
                }
              ).format(runtime.lastTestedAt)}
            </p>

            {runtime.responseTime !== undefined && (

              <p className="mt-1">
                Masa Respon: {runtime.responseTime} ms
              </p>

            )}

          </div>

        )}

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
            onClick={handleTestConnection}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Activity className="h-4 w-4" />

            {loading
              ? "Menguji..."
              : "Uji Sambungan"}

          </button>

        </div>

      </div>

      <ConfigurationDialog
        providerId={provider.id}
        open={open}
        onClose={() => setOpen(false)}
      />

      <ConnectionResultDialog
        open={resultOpen}
        result={result}
        onClose={() => setResultOpen(false)}
      />

    </>
  );
}