import type { KnowledgeAssetDTO } from "@/lib/khazanah/types";
import { STATUS_CONFIG } from "@/lib/khazanah/status";

import ExcelJS from "exceljs";

/**
 * Menjana Dataset Excel
 * bagi satu aset Khazanah Politik.
 */
export async function generateKnowledgeAssetDatasetExcel(
  asset: KnowledgeAssetDTO
): Promise<Buffer> {

  const workbook = new ExcelJS.Workbook();

  workbook.creator = "SINARLab";
  workbook.company = "Tindak Muar";
  workbook.subject = "Dataset Aset Khazanah Politik";
  workbook.title = asset.title;

  const sheet = workbook.addWorksheet(
    "Dataset"
  );

  sheet.columns = [
    {
      header: "Medan",
      key: "field",
      width: 35,
    },
    {
      header: "Nilai",
      key: "value",
      width: 80,
    },
  ];

  /**
   * Header
   */

  sheet.mergeCells("A1:B1");
  sheet.getCell("A1").value =
    "SINARLab";

  sheet.getCell("A1").font = {
    bold: true,
    size: 18,
    color: {
      argb: "1E40AF",
    },
  };

  sheet.mergeCells("A2:B2");
  sheet.getCell("A2").value =
    "AI Political Operating System";

  sheet.mergeCells("A3:B3");
  sheet.getCell("A3").value =
    "Powered by Tindak Muar";

  sheet.mergeCells("A5:B5");

  sheet.getCell("A5").value =
    "DATASET ASET KHAZANAH POLITIK";

  sheet.getCell("A5").font = {
    bold: true,
    size: 14,
  };

  let row = 7;

  function addField(
  label: string,
  value: string | number | boolean | Date | null | undefined
) {
  sheet.getCell(`A${row}`).value = label;

  sheet.getCell(`A${row}`).font = {
    bold: true,
  };

  sheet.getCell(`B${row}`).value =
    value ?? "-";

  row++;
}

  addField("ID", asset.id);

  addField("Tajuk", asset.title);

  addField(
    "Kategori",
    asset.category
  );

  addField(
    "Subkategori",
    asset.subcategory ?? "-"
  );

  addField(
    "Institusi",
    asset.institution ?? "-"
  );

  addField(
    "Negeri",
    asset.state ?? "-"
  );

  addField(
    "Tahun",
    asset.year ?? "-"
  );

  addField(
    "Penulis",
    asset.author ?? "-"
  );

  addField(
    "Status",
    STATUS_CONFIG[
      asset.status
    ].label
  );

  addField(
    "Tarikh Terbit",
    asset.publishedAt
      ? new Date(
          asset.publishedAt
        ).toLocaleDateString("ms-MY")
      : "-"
  );

  addField(
    "Ringkasan",
    asset.summary ?? "-"
  );

  addField(
    "Kandungan",
    asset.content ?? "-"
  );

  addField(
    "Sumber",
    asset.source ?? "-"
  );

  addField(
    "URL",
    asset.sourceUrl ?? "-"
  );

  addField(
    "Rujukan",
    asset.sourceReference ?? "-"
  );

  addField(
    "Tag",
    asset.tags ?? "-"
  );

  addField(
    "Versi",
    asset.version
  );

  addField(
    "Bilangan Lampiran",
    asset.attachments.length
  );

  addField(
    "Lampiran",
    asset.attachments.length
      ? asset.attachments
          .map(
            (file) =>
              file.originalName
          )
          .join("\n")
      : "-"
  );

  addField(
    "Tarikh Dikemas Kini",
    new Date(
      asset.updatedAt
    ).toLocaleDateString(
      "ms-MY"
    )
  );

  /**
   * Wrap Text
   */

  sheet.eachRow((r) => {

    r.alignment = {
      vertical: "top",
      wrapText: true,
    };

  });

  /**
   * Footer
   */

  row += 2;

  sheet.mergeCells(
    `A${row}:B${row}`
  );

  sheet.getCell(`A${row}`).value =
    "Dijana oleh SINARLab";

  sheet.getCell(`A${row}`).font = {
    bold: true,
  };

  row++;

  sheet.mergeCells(
    `A${row}:B${row}`
  );

  sheet.getCell(`A${row}`).value =
    "AI Political Operating System";

  row++;

  sheet.mergeCells(
    `A${row}:B${row}`
  );

  sheet.getCell(`A${row}`).value =
    "Powered by Tindak Muar";

  row++;

  sheet.mergeCells(
    `A${row}:B${row}`
  );

  sheet.getCell(`A${row}`).value =
    `Tarikh Eksport: ${new Date().toLocaleDateString("ms-MY")}`;

  return Buffer.from(
    await workbook.xlsx.writeBuffer()
  );

}