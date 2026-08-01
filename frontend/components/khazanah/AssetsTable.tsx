"use client";

import Link from "next/link";

import {
  Eye,
  Pencil,
  Plus,
  RotateCcw,
} from "lucide-react";

import DeleteButton from "@/components/khazanah/DeleteButton";
import Button from "@/components/ui/Button";

import type {
  KnowledgeAssetDTO,
} from "@/lib/khazanah/types";

import { STATUS_CONFIG } from "@/lib/khazanah/status";

type AssetsTableProps = {
  assets: KnowledgeAssetDTO[];
};

export default function AssetsTable({
  assets,
}: AssetsTableProps) {
  if (assets.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
      <table className="min-w-full">

        <thead className="bg-gray-50">
          <tr className="border-b">

            <th className="px-6 py-4 text-left font-semibold">
              Tajuk
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Kategori
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Institusi
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Status
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Tarikh Daftar
            </th>

            <th className="px-6 py-4 text-center font-semibold">
              Tindakan
            </th>

          </tr>
        </thead>

        <tbody>

          {assets.map((asset) => (
            <tr
              key={asset.id}
              className="border-b hover:bg-gray-50"
            >

              {/* Tajuk */}

              <td className="px-6 py-4 align-top">

                <Link
                  href={`/khazanah-politik/${asset.id}`}
                  className="font-semibold text-red-600 hover:underline"
                >
                  {asset.title}
                </Link>

                {asset.summary && (
                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                    {asset.summary}
                  </p>
                )}

                <div className="mt-2 text-xs text-gray-500">

                  {asset.author || "-"}

                  {asset.year && (
                    <>
                      {" • "}
                      {asset.year}
                    </>
                  )}

                </div>

              </td>

              {/* Kategori */}

              <td className="px-6 py-4 align-top">

                <div className="font-medium">
                  {asset.category}
                </div>

                {asset.subcategory && (
                  <div className="mt-1 text-sm text-gray-500">
                    {asset.subcategory}
                  </div>
                )}

              </td>

              {/* Institusi */}

              <td className="px-6 py-4 align-top">

                <div>
                  {asset.institution || "-"}
                </div>

                {asset.state && (
                  <div className="mt-1 text-sm text-gray-500">
                    {asset.state}
                  </div>
                )}

              </td>

              {/* Status */}

              <td className="px-6 py-4 align-top">
                <StatusBadge
                  status={asset.status}
                />
              </td>

              {/* Tarikh */}

              <td className="px-6 py-4 align-top text-gray-500">

                {new Date(
                  asset.createdAt
                ).toLocaleDateString(
                  "ms-MY",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }
                )}

              </td>

              {/* Tindakan */}

              <td className="px-6 py-4">

                <div className="flex justify-center gap-2">

                  <Link
                    href={`/khazanah-politik/${asset.id}`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      icon={Eye}
                    >
                      Lihat
                    </Button>
                  </Link>

                  <Link
                    href={`/khazanah-politik/${asset.id}/edit`}
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      icon={Pencil}
                    >
                      Pinda
                    </Button>
                  </Link>

                  <DeleteButton
                    id={asset.id}
                  />

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}

type StatusBadgeProps = {
  status: KnowledgeAssetDTO["status"];
};

function StatusBadge({
  status,
}: StatusBadgeProps) {
  const config =
    STATUS_CONFIG[status];

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border bg-white p-12 text-center shadow-sm">

      <div className="text-6xl">
        📭
      </div>

      <h2 className="mt-4 text-2xl font-bold">
        Tiada aset dijumpai
      </h2>

      <p className="mt-3 text-gray-500">
        Tiada rekod yang sepadan
        dengan carian atau
        penapis yang dipilih.
      </p>

      <div className="mt-8 flex justify-center gap-3">

        <Link href="/khazanah-politik">
          <Button
            variant="outline"
            icon={RotateCcw}
          >
            Tetapkan Semula
          </Button>
        </Link>

        <Link href="/khazanah-politik/tambah">
          <Button icon={Plus}>
            Tambah Aset
          </Button>
        </Link>

      </div>

    </div>
  );
}