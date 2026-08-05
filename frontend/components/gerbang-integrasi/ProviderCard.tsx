"use client";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

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
    <div className="rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-red-50 p-3">

          <Icon className="h-9 w-9 text-red-700" />

        </div>

        <div className="min-w-0 flex-1">

          <h3 className="truncate text-lg font-bold text-gray-900">
            {provider.name}
          </h3>

          <div className="mt-1">
            <ConnectionBadge status={provider.status} />
          </div>

        </div>

      </div>

      {/* Status API */}

      <div className="mt-3">

        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Status API
        </p>

        <HealthIndicator health={provider.health} />

      </div>

      {/* Action */}

      <div className="mt-4 flex justify-end">

        <Link
          href="/markas/gerbang-integrasi/konfigurasi"
          className="inline-flex items-center gap-1 text-sm font-medium text-red-700 transition-all hover:gap-2 hover:text-red-800"
        >
          Konfigurasi

          <ChevronRight className="h-4 w-4" />
        </Link>

      </div>

    </div>
  );
}