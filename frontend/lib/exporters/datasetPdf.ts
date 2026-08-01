import type { KnowledgeAssetDTO } from "@/lib/khazanah/types";
import { STATUS_CONFIG } from "@/lib/khazanah/status";

import {
  PDFDocument,
  StandardFonts,
  rgb,
} from "pdf-lib";

/**
 * Menjana Dataset PDF
 * bagi satu aset Khazanah Politik.
 */
export async function generateKnowledgeAssetDatasetPDF(
  asset: KnowledgeAssetDTO
): Promise<Uint8Array> {

  const pdfDoc = await PDFDocument.create();

  // A4 Landscape
const page = pdfDoc.addPage([
  842,
  595,
]);

  const font =
    await pdfDoc.embedFont(
      StandardFonts.Helvetica
    );

  const bold =
    await pdfDoc.embedFont(
      StandardFonts.HelveticaBold
    );

  const {
    width,
    height,
  } = page.getSize();

  let y = height - 50;

  function heading(
    text: string
  ) {
    page.drawText(text, {
      x: 50,
      y,
      size: 16,
      font: bold,
      color: rgb(0, 0, 0),
    });

    y -= 24;
  }

  function divider() {
    page.drawLine({
      start: {
        x: 50,
        y,
      },
      end: {
        x: width - 50,
        y,
      },
      thickness: 1,
    });

    y -= 18;
  }

  function field(
    label: string,
    value: string
  ) {
    page.drawText(label, {
      x: 50,
      y,
      size: 10,
      font: bold,
    });

    y -= 14;

    page.drawText(value || "-", {
      x: 60,
      y,
      size: 11,
      font,
      maxWidth: width - 120,
      lineHeight: 15,
    });

    const lines = Math.max(
      1,
      Math.ceil(value.length / 75)
    );

    y -= lines * 15 + 12;

    divider();
  }

  /**
   * --------------------------------------------------------------------------
   * Header
   * --------------------------------------------------------------------------
   */

  page.drawText(
    "SINARLab",
    {
      x: 50,
      y,
      size: 22,
      font: bold,
      color: rgb(0, 0.2, 0.6),
    }
  );

  y -= 24;

  page.drawText(
    "AI Political Operating System",
    {
      x: 50,
      y,
      size: 12,
      font,
    }
  );

  y -= 18;

  page.drawText(
    "Powered by Tindak Muar",
    {
      x: 50,
      y,
      size: 10,
      font,
    }
  );

  y -= 18;

  divider();

  heading("Dataset Aset Khazanah Politik");

  field("ID", asset.id.toString());

  field("Tajuk", asset.title);

  field("Kategori", asset.category);

  field(
    "Subkategori",
    asset.subcategory ?? "-"
  );

  field(
    "Institusi",
    asset.institution ?? "-"
  );

  field(
    "Negeri",
    asset.state ?? "-"
  );

  field(
    "Tahun",
    asset.year?.toString() ?? "-"
  );

  field(
    "Penulis",
    asset.author ?? "-"
  );

  field(
    "Status",
    STATUS_CONFIG[
      asset.status
    ].label
  );

  field(
    "Tarikh Terbit",
    asset.publishedAt
      ? new Date(
          asset.publishedAt
        ).toLocaleDateString(
          "ms-MY"
        )
      : "-"
  );

  field(
    "Ringkasan",
    asset.summary ?? "-"
  );

  field(
    "Kandungan",
    asset.content ?? "-"
  );

  field(
    "Sumber",
    asset.source ?? "-"
  );

  field(
    "URL",
    asset.sourceUrl ?? "-"
  );

  field(
    "Rujukan",
    asset.sourceReference ?? "-"
  );

  field(
    "Tag",
    asset.tags ?? "-"
  );

  field(
    "Versi",
    `v${asset.version}`
  );

  field(
    "Bilangan Lampiran",
    asset.attachments.length.toString()
  );

  const attachmentList =
    asset.attachments.length > 0
      ? asset.attachments
          .map(
            (file, index) =>
              `${index + 1}. ${file.originalName}`
          )
          .join("\n")
      : "-";

  field(
    "Lampiran",
    attachmentList
  );

  field(
    "Tarikh Dikemas Kini",
    new Date(
      asset.updatedAt
    ).toLocaleDateString(
      "ms-MY"
    )
  );

  /**
   * --------------------------------------------------------------------------
   * Footer
   * --------------------------------------------------------------------------
   */

  y -= 10;

  page.drawLine({
    start: {
      x: 50,
      y,
    },
    end: {
      x: width - 50,
      y,
    },
    thickness: 1,
  });

  y -= 20;

  page.drawText(
    "Dijana oleh SINARLab",
    {
      x: 50,
      y,
      size: 10,
      font: bold,
      color: rgb(0, 0.2, 0.6),
    }
  );

  y -= 15;

  page.drawText(
    "AI Political Operating System",
    {
      x: 50,
      y,
      size: 9,
      font,
    }
  );

  y -= 14;

  page.drawText(
    "Powered by Tindak Muar",
    {
      x: 50,
      y,
      size: 9,
      font,
    }
  );

  y -= 18;

  page.drawText(
    `Tarikh Eksport: ${new Date().toLocaleDateString("ms-MY")}`,
    {
      x: 50,
      y,
      size: 9,
      font,
      color: rgb(0.4, 0.4, 0.4),
    }
  );

  return await pdfDoc.save();
}