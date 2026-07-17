"use client";

import Link from "next/link";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

type ToolbarProps = {
  categories: string[];
  states: string[];
  years: number[];
};

export default function Toolbar({
  categories,
  states,
  years,
}: ToolbarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateFilter(
    key: string,
    value: string
  ) {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // Tukar filter sentiasa kembali ke page pertama
    params.delete("page");

    router.push(
      `/khazanah-politik?${params.toString()}`
    );
  }

  function resetFilters() {
    router.push("/khazanah-politik");
  }

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <div className="flex flex-wrap items-center gap-4">

        {/* Kategori */}
        <select
          value={searchParams.get("category") ?? ""}
          onChange={(e) =>
            updateFilter(
              "category",
              e.target.value
            )
          }
          className="rounded-lg border px-4 py-2"
        >
          <option value="">
            Semua Kategori
          </option>

          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>

        {/* Status */}
        <select
          value={searchParams.get("status") ?? ""}
          onChange={(e) =>
            updateFilter(
              "status",
              e.target.value
            )
          }
          className="rounded-lg border px-4 py-2"
        >
          <option value="">
            Semua Status
          </option>

          <option value="Aktif">
            Aktif
          </option>

          <option value="Draf">
            Draf
          </option>

          <option value="Dalam Semakan">
            Dalam Semakan
          </option>

          <option value="Arkib">
            Arkib
          </option>
        </select>

        {/* Negeri */}
        <select
          value={searchParams.get("state") ?? ""}
          onChange={(e) =>
            updateFilter(
              "state",
              e.target.value
            )
          }
          className="rounded-lg border px-4 py-2"
        >
          <option value="">
            Semua Negeri
          </option>

          {states.map((state) => (
            <option
              key={state}
              value={state}
            >
              {state}
            </option>
          ))}
        </select>

        {/* Tahun */}
        <select
          value={searchParams.get("year") ?? ""}
          onChange={(e) =>
            updateFilter(
              "year",
              e.target.value
            )
          }
          className="rounded-lg border px-4 py-2"
        >
          <option value="">
            Semua Tahun
          </option>

          {years.map((year) => (
            <option
              key={year}
              value={year.toString()}
            >
              {year}
            </option>
          ))}
        </select>

        {/* Susun */}
        <select
          value={searchParams.get("sort") ?? "latest"}
          onChange={(e) =>
            updateFilter(
              "sort",
              e.target.value
            )
          }
          className="rounded-lg border px-4 py-2"
        >
          <option value="latest">
            📅 Terbaru
          </option>

          <option value="oldest">
            📅 Terlama
          </option>

          <option value="title-asc">
            🔤 Tajuk A-Z
          </option>

          <option value="title-desc">
            🔤 Tajuk Z-A
          </option>

          <option value="year-desc">
            📆 Tahun Terbaru
          </option>

          <option value="year-asc">
            📆 Tahun Terlama
          </option>
        </select>

        {/* Reset */}
        <button
          onClick={resetFilters}
          className="rounded-lg border border-red-300 px-5 py-2 text-red-600 hover:bg-red-50"
        >
          🧹 Reset Filter
        </button>

        {/* Tambah */}
        <Link
          href="/khazanah-politik/tambah"
          className="ml-auto rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          + Tambah Aset
        </Link>

      </div>

    </div>
  );
}