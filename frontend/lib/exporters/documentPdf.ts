import type { KnowledgeAssetDTO } from "@/lib/khazanah/types";
import { STATUS_CONFIG } from "@/lib/khazanah/status";

import {
  PDFDocument,
  StandardFonts,
  rgb,
} from "pdf-lib";

/**
 * Menjana dokumen PDF rasmi
 * bagi satu aset Khazanah Politik.
 */
export async function generateKnowledgeAssetPDF(
  asset: KnowledgeAssetDTO
): Promise<Uint8Array> {

  const pdfDoc = await PDFDocument.create();

  const page = pdfDoc.addPage([
    595,
    842,
  ]); // A4 Portrait

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

  /**
   * --------------------------------------------------------------------------
   * Helper
   * --------------------------------------------------------------------------
   */

  function drawHeading(
    text: string
  ) {
    page.drawText(text, {
      x: 50,
      y,
      size: 16,
      font: bold,
      color: rgb(0, 0, 0),
    });

    y -= 22;
  }

  function drawInfo(
    label: string,
    value: string
  ) {
    page.drawText(
      `${label}: ${value}`,
      {
        x: 50,
        y,
        size: 11,
        font,
      }
    );

    y -= 18;
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

  y -= 20;

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

  /**
   * --------------------------------------------------------------------------
   * Maklumat Dokumen
   * --------------------------------------------------------------------------
   */

  y -= 30;

  drawHeading(
    "Maklumat Dokumen"
  );

  drawInfo(
    "Tajuk",
    asset.title
  );

  drawInfo(
    "Kategori",
    asset.category
  );

  drawInfo(
    "Subkategori",
    asset.subcategory || "-"
  );

  drawInfo(
    "Institusi",
    asset.institution || "-"
  );

  drawInfo(
    "Negeri",
    asset.state || "-"
  );

  drawInfo(
    "Tahun",
    asset.year?.toString() || "-"
  );

  drawInfo(
    "Penulis",
    asset.author || "-"
  );

  drawInfo(
    "Status",
    STATUS_CONFIG[
      asset.status
    ].label
  );

  drawInfo(
    "Tarikh Terbit",
    asset.publishedAt
      ? new Date(
          asset.publishedAt
        ).toLocaleDateString(
          "ms-MY"
        )
      : "-"
  );

  /**
   * --------------------------------------------------------------------------
   * Part 2 akan bermula di sini
   * --------------------------------------------------------------------------
   */
/**
 * --------------------------------------------------------------------------
 * Ringkasan
 * --------------------------------------------------------------------------
 */

y -= 12;

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

y -= 25;

drawHeading("Ringkasan");

const summary =
  asset.summary?.trim() ||
  "Tiada ringkasan.";

page.drawText(summary, {
  x: 50,
  y,
  size: 11,
  font,
  maxWidth: width - 100,
  lineHeight: 16,
});

const summaryLines = Math.max(
  1,
  Math.ceil(summary.length / 80)
);

y -= summaryLines * 16 + 25;

/**
 * --------------------------------------------------------------------------
 * Kandungan
 * --------------------------------------------------------------------------
 */

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

y -= 25;

drawHeading("Kandungan");

const content =
  asset.content?.trim() ||
  "Tiada kandungan.";

page.drawText(content, {
  x: 50,
  y,
  size: 11,
  font,
  maxWidth: width - 100,
  lineHeight: 16,
});

const contentLines = Math.max(
  1,
  Math.ceil(content.length / 80)
);

y -= contentLines * 16 + 25;

/**
 * --------------------------------------------------------------------------
 * Rujukan
 * --------------------------------------------------------------------------
 */

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

y -= 25;

drawHeading("Rujukan");

drawInfo(
  "Sumber",
  asset.source || "-"
);

drawInfo(
  "URL",
  asset.sourceUrl || "-"
);

drawInfo(
  "Rujukan",
  asset.sourceReference || "-"
);

/**
 * --------------------------------------------------------------------------
 * Metadata
 * --------------------------------------------------------------------------
 */

y -= 12;

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

y -= 25;

drawHeading("Metadata");

drawInfo(
  "Tag",
  asset.tags || "-"
);

drawInfo(
  "ID Aset",
  asset.id.toString()
);

drawInfo(
  "Bilangan Lampiran",
  asset.attachments.length.toString()
);

drawInfo(
  "Versi Dokumen",
  `v${asset.version}`
);

drawInfo(
  "Tarikh Terakhir Dikemas Kini",
  new Date(
    asset.updatedAt
  ).toLocaleDateString("ms-MY")
);

/**
 * --------------------------------------------------------------------------
 * Footer
 * --------------------------------------------------------------------------
 */

y -= 20;

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

y -= 22;

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

y -= 16;

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

const pdfBytes = await pdfDoc.save();

return pdfBytes;
}