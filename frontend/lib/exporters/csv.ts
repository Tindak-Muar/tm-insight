import { ExportAsset } from "./types";

function escapeCSV(value: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }

  const text = String(value).replace(/"/g, '""');

  return `"${text}"`;
}

export function generateCSV(data: ExportAsset[]): string {
  const headers = [
    "ID",
    "Tajuk",
    "Kategori",
    "Subkategori",
    "Institusi",
    "Negeri",
    "Tahun",
    "Penulis",
    "Status",
    "Sumber",
    "URL",
    "Tarikh Dicipta",
  ];

  const rows = data.map((item) => [
    item.id,
    item.title,
    item.category,
    item.subcategory ?? "",
    item.institution ?? "",
    item.state ?? "",
    item.year ?? "",
    item.author ?? "",
    item.status,
    item.source ?? "",
    item.sourceUrl ?? "",
    new Date(item.createdAt).toLocaleString("ms-MY"),
  ]);

  const csv = [
    headers.map(escapeCSV).join(","),
    ...rows.map((row) => row.map(escapeCSV).join(",")),
  ].join("\n");

  // UTF-8 BOM supaya Excel memaparkan UTF-8 dengan betul
  return "\uFEFF" + csv;
}