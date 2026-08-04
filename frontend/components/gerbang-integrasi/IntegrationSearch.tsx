"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import {
  integrationRegistry,
  IntegrationCategory,
} from "@/lib/gerbang-integrasi";

import CategorySection from "./CategorySection";

const categories: IntegrationCategory[] = [
  "AI",
  "Komunikasi",
  "Storan Awan",
  "Analitik",
  "Automasi",
];

export default function IntegrationSearch() {
  const [query, setQuery] = useState("");

  const filteredProviders = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
      return integrationRegistry;
    }

    return integrationRegistry.filter((provider) =>
      provider.name.toLowerCase().includes(keyword)
    );
  }, [query]);

  return (
    <div className="space-y-8">
      {/* Search */}

      <div className="flex">
        <div className="relative w-full max-w-x1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama integrasi..."
            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all duration-200 focus:border-red-300 focus:ring-2 focus:ring-red-100"
          />
        </div>
      </div>

      {/* Senarai Integrasi */}

      <div className="space-y-10">
        {categories.map((category) => {
          const providers = filteredProviders.filter(
            (provider) => provider.category === category
          );

          if (providers.length === 0) {
            return null;
          }

          return (
            <CategorySection
              key={category}
              title={category}
              providers={providers}
            />
          );
        })}
      </div>
    </div>
  );
}