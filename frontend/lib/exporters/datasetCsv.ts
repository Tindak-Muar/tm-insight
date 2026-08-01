import type { KnowledgeAssetDTO } from "@/lib/khazanah/types";
import { STATUS_CONFIG } from "@/lib/khazanah/status";


/**
 * Menyeragamkan nilai untuk tujuan eksport.
 */
export function exportValue(
  value: string | number | boolean | null | undefined
): string {

  if (value === null || value === undefined) {
    return "-";
  }

  if (typeof value === "string") {
    const text = value.trim();

    return text.length > 0
      ? text
      : "-";
  }

  return String(value);

}
/**
 * Menjana Dataset CSV
 * bagi satu aset Khazanah Politik.
 */
export async function generateKnowledgeAssetDatasetCSV(
  asset: KnowledgeAssetDTO
): Promise<string> {

  const rows: [string, string][] = [
    ["Medan", "Nilai"],

    ["ID", asset.id.toString()],
    ["Tajuk", asset.title],
    ["Kategori", asset.category],
    ["Subkategori", asset.subcategory ?? "-"],
    ["Institusi", asset.institution ?? "-"],
    ["Negeri", asset.state ?? "-"],
    ["Tahun", asset.year?.toString() ?? "-"],
    ["Penulis", asset.author ?? "-"],

    [
      "Status",
      STATUS_CONFIG[asset.status].label,
    ],

    [
      "Tarikh Terbit",
      asset.publishedAt
        ? new Date(asset.publishedAt)
            .toLocaleDateString("ms-MY")
        : "-",
    ],

    ["Ringkasan", asset.summary ?? "-"],

    ["Kandungan", asset.content ?? "-"],

    ["Sumber", asset.source ?? "-"],

    ["URL", asset.sourceUrl ?? "-"],

    [
      "Rujukan",
      asset.sourceReference ?? "-",
    ],

    ["Tag", asset.tags ?? "-"],

    [
      "Versi",
      `v${asset.version}`,
    ],

    [
      "Bilangan Lampiran",
      asset.attachments.length.toString(),
    ],

    [
      "Lampiran",
      asset.attachments.length
        ? asset.attachments
            .map(
              (file) =>
                file.originalName
            )
            .join(" | ")
        : "-",
    ],

    [
      "Tarikh Dikemas Kini",
      new Date(asset.updatedAt)
        .toLocaleDateString("ms-MY"),
    ],
  ];

  return rows
    .map((row) =>
      row
        .map(
          (cell) =>
            `"${String(cell).replace(
              /"/g,
              '""'
            )}"`
        )
        .join(",")
    )
    .join("\n");

}