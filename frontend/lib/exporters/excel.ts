import ExcelJS from "exceljs";

import { STATUS_CONFIG } from "@/lib/khazanah/status";
import type { KnowledgeAssetDTO } from "@/lib/khazanah/types";

export async function generateExcel(
  data: KnowledgeAssetDTO[]
): Promise<Buffer> {

  const workbook =
    new ExcelJS.Workbook();

  workbook.creator =
    "SINARLab";

  workbook.company =
    "Tindak Muar";

  workbook.subject =
    "Khazanah Politik";

  workbook.title =
    "Dataset Khazanah Politik";

  workbook.created =
    new Date();

  const worksheet =
    workbook.addWorksheet(
      "Khazanah Politik"
    );

  worksheet.columns = [
    { header: "ID", key: "id", width: 8 },
    { header: "Tajuk", key: "title", width: 40 },
    { header: "Kategori", key: "category", width: 20 },
    { header: "Subkategori", key: "subcategory", width: 20 },
    { header: "Institusi", key: "institution", width: 25 },
    { header: "Negeri", key: "state", width: 18 },
    { header: "Tahun", key: "year", width: 10 },
    { header: "Penulis", key: "author", width: 25 },
    { header: "Status", key: "status", width: 15 },
    { header: "Sumber", key: "source", width: 25 },
    { header: "URL", key: "url", width: 40 },
    {
      header: "Tarikh Dicipta",
      key: "createdAt",
      width: 22,
    },
  ];

  worksheet.getRow(1).font = {
    bold: true,
  };

  worksheet.getRow(1).alignment = {
    vertical: "middle",
    horizontal: "center",
  };

  data.forEach((item) => {

    worksheet.addRow({

      id: item.id,

      title: item.title,

      category: item.category,

      subcategory:
        item.subcategory ?? "",

      institution:
        item.institution ?? "",

      state:
        item.state ?? "",

      year:
        item.year ?? "",

      author:
        item.author ?? "",

      status:
        STATUS_CONFIG[
          item.status
        ].label,

      source:
        item.source ?? "",

      url:
        item.sourceUrl ?? "",

      createdAt:
        new Date(
          item.createdAt
        ).toLocaleDateString(
          "ms-MY"
        ),

    });

  });

  worksheet.views = [
    {
      state: "frozen",
      ySplit: 1,
    },
  ];

  const buffer =
    await workbook.xlsx.writeBuffer();

  return Buffer.from(buffer);

}