"use client";

import Link from "next/link";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Download,
  Plus,
  RotateCcw,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";

type ToolbarProps = {
  categories: string[];
  states: string[];
  years: number[];
};

const BASE_ROUTE = "/khazanah-politik";

const exportOptions = [
  {
    label: "Export CSV",
    format: "csv",
  },
  {
    label: "Export Excel",
    format: "excel",
  },
  {
    label: "Export PDF",
    format: "pdf",
  },
];

export default function Toolbar({
  categories,
  states,
  years,
}: ToolbarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [showExportMenu, setShowExportMenu] =
    useState(false);

  const exportRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        exportRef.current &&
        !exportRef.current.contains(
          event.target as Node
        )
      ) {
        setShowExportMenu(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const updateFilter = useCallback(
    (
      key: string,
      value: string
    ) => {
      const params =
        new URLSearchParams(
          searchParams.toString()
        );

      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      // Tukar filter sentiasa kembali ke halaman pertama
      params.delete("page");

      router.push(
        `${BASE_ROUTE}?${params.toString()}`
      );
    },
    [router, searchParams]
  );

  const resetFilters =
    useCallback(() => {
      router.push(BASE_ROUTE);
    }, [router]);

  return (
  <div className="space-y-4">

    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">

        <div className="flex flex-wrap items-center gap-4">

          {/* Kategori */}
          <Select
            value={
              searchParams.get("category") ??
              ""
            }
            onChange={(e) =>
              updateFilter(
                "category",
                e.target.value
              )
            }
            placeholder="Semua Kategori"
            options={categories.map(
              (category) => ({
                value: category,
                label: category,
              })
            )}
          />

          {/* Status */}
          <Select
            value={
              searchParams.get("status") ??
              ""
            }
            onChange={(e) =>
              updateFilter(
                "status",
                e.target.value
              )
            }
            placeholder="Semua Status"
            options={[
              {
                value: "PUBLISHED",
                label: "Diterbitkan",
              },
              {
                value: "DRAFT",
                label: "Draf",
              },
              {
                value: "ARCHIVED",
                label: "Arkib",
              },
            ]}
          />

          {/* Negeri */}
          <Select
            value={
              searchParams.get("state") ??
              ""
            }
            onChange={(e) =>
              updateFilter(
                "state",
                e.target.value
              )
            }
            placeholder="Semua Negeri"
            options={states.map(
              (state) => ({
                value: state,
                label: state,
              })
            )}
          />

          {/* Tahun */}
          <Select
            value={
              searchParams.get("year") ??
              ""
            }
            onChange={(e) =>
              updateFilter(
                "year",
                e.target.value
              )
            }
            placeholder="Semua Tahun"
            options={years.map(
              (year) => ({
                value: year.toString(),
                label: year.toString(),
              })
            )}
          />

          {/* Susun */}
          <Select
            value={
              searchParams.get("sort") ??
              "latest"
            }
            onChange={(e) =>
              updateFilter(
                "sort",
                e.target.value
              )
            }
            options={[
              {
                value: "latest",
                label: "Terbaharu",
              },
              {
                value: "oldest",
                label: "Terlama",
              },
              {
                value: "title-asc",
                label: "Tajuk A-Z",
              },
              {
                value: "title-desc",
                label: "Tajuk Z-A",
              },
              {
                value: "year-desc",
                label: "Tahun Terbaharu",
              },
              {
                value: "year-asc",
                label: "Tahun Terlama",
              },
            ]}
          />

          {/* Reset */}
          <Button
            variant="outline"
            icon={RotateCcw}
            onClick={resetFilters}
          >
            Tetapkan Semula
          </Button>

        </div>
      </div>
 </div>

      {/* Actions */}
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <div className="flex justify-end items-center gap-3">

          {/* Export */}
          <div
            className="relative"
            ref={exportRef}
          >
            <Button
              variant="secondary"
              icon={Download}
              onClick={() =>
                setShowExportMenu(
                  (prev) => !prev
                )
              }
            >
              Eksport
            </Button>

            {showExportMenu && (
              <div className="absolute right-0 z-20 mt-2 w-52 rounded-lg border bg-white shadow-lg">
                {exportOptions.map(
                  (option) => (
                    <a
                      key={option.format}
                      href={`/api/export/khazanah-politik/${option.format}?${searchParams.toString()}`}
                      onClick={() =>
                        setShowExportMenu(
                          false
                        )
                      }
                      className="block px-4 py-3 hover:bg-gray-100"
                    >
                      {option.label}
                    </a>
                  )
                )}
              </div>
            )}
          </div>

          {/* Tambah */}
          <Link
            href={`${BASE_ROUTE}/tambah`}
          >
            <Button icon={Plus}>
              Tambah Aset
            </Button>
          </Link>

        </div>
      </div>
 </div>
      
      );
}