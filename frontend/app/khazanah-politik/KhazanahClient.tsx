"use client";

import { useMemo } from "react";

import { useKhazanah } from "@/lib/hooks/useKhazanah";

import SuccessAlert from "@/components/khazanah/SuccessAlert";
import StatsCards from "@/components/khazanah/StatsCards";
import SearchBar from "@/components/khazanah/SearchBar";
import Toolbar from "@/components/khazanah/Toolbar";
import AssetsTable from "@/components/khazanah/AssetsTable";
import Pagination from "@/components/khazanah/Pagination";

type Props = {
  success?: string;
};

export default function KhazanahClient({
  success,
}: Props) {
  const {
    assets,
    total,
    page,
    totalPages,
    loading,
    error,
  } = useKhazanah();

  const stats = useMemo(() => {
    let aktif = 0;
    let arkib = 0;

    const categories = new Set<string>();
    const states = new Set<string>();
    const years = new Set<number>();

    for (const asset of assets) {
      if (asset.status === "PUBLISHED") {
        aktif++;
      }

      if (asset.status === "ARCHIVED") {
        arkib++;
      }

      categories.add(asset.category);

      if (asset.state) {
        states.add(asset.state);
      }

      if (asset.year) {
        years.add(asset.year);
      }
    }

    return {
      kategori: categories.size,
      aktif,
      arkib,
      categories: [...categories].sort(),
      states: [...states].sort(),
      years: [...years].sort((a, b) => b - a),
    };
  }, [assets]);

  if (loading) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        Memuatkan data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-300 bg-red-50 p-6 text-red-700">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SuccessAlert
        show={success === "1"}
      />

      <StatsCards
        total={total}
        aktif={stats.aktif}
        arkib={stats.arkib}
        kategori={stats.kategori}
      />

      <SearchBar />

      <Toolbar
        categories={stats.categories}
        states={stats.states}
        years={stats.years}
      />

      <AssetsTable
        assets={assets}
      />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
      />
    </div>
  );
}