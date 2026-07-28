import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

import { ExportAsset } from "./types";

export async function generatePDF(
  data: ExportAsset[]
): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();

  const page = pdfDoc.addPage([842, 595]); // A4 Landscape

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const { width, height } = page.getSize();

  // Tajuk
  page.drawText("Khazanah Politik", {
    x: 40,
    y: height - 40,
    size: 20,
    font: bold,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Jumlah Rekod: ${data.length}`, {
    x: 40,
    y: height - 60,
    size: 10,
    font,
  });

  let y = height - 90;

  // Header
  const headers = [
    { text: "ID", x: 40 },
    { text: "Tajuk", x: 70 },
    { text: "Kategori", x: 300 },
    { text: "Negeri", x: 420 },
    { text: "Tahun", x: 500 },
    { text: "Status", x: 560 },
    { text: "Sumber", x: 640 },
  ];

  headers.forEach((header) => {
    page.drawText(header.text, {
      x: header.x,
      y,
      size: 10,
      font: bold,
    });
  });

  y -= 15;

  page.drawLine({
    start: { x: 40, y },
    end: { x: width - 40, y },
    thickness: 1,
  });

  y -= 15;

  for (const item of data) {
    if (y < 40) {
      y = height - 40;

      const newPage = pdfDoc.addPage([842, 595]);

      headers.forEach((header) => {
        newPage.drawText(header.text, {
          x: header.x,
          y,
          size: 10,
          font: bold,
        });
      });

      y -= 15;

      newPage.drawLine({
        start: { x: 40, y },
        end: { x: width - 40, y },
        thickness: 1,
      });

      y -= 15;

      newPage.drawText(String(item.id), {
        x: 40,
        y,
        size: 9,
        font,
      });

      newPage.drawText(item.title.substring(0, 35), {
        x: 70,
        y,
        size: 9,
        font,
      });

      newPage.drawText(item.category, {
        x: 300,
        y,
        size: 9,
        font,
      });

      newPage.drawText(item.state ?? "-", {
        x: 420,
        y,
        size: 9,
        font,
      });

      newPage.drawText(item.year?.toString() ?? "-", {
        x: 500,
        y,
        size: 9,
        font,
      });

      newPage.drawText(item.status, {
        x: 560,
        y,
        size: 9,
        font,
      });

      newPage.drawText(item.source?.substring(0, 18) ?? "-", {
        x: 640,
        y,
        size: 9,
        font,
      });

      y -= 16;

      continue;
    }

    page.drawText(String(item.id), {
      x: 40,
      y,
      size: 9,
      font,
    });

    page.drawText(item.title.substring(0, 35), {
      x: 70,
      y,
      size: 9,
      font,
    });

    page.drawText(item.category, {
      x: 300,
      y,
      size: 9,
      font,
    });

    page.drawText(item.state ?? "-", {
      x: 420,
      y,
      size: 9,
      font,
    });

    page.drawText(item.year?.toString() ?? "-", {
      x: 500,
      y,
      size: 9,
      font,
    });

    page.drawText(item.status, {
      x: 560,
      y,
      size: 9,
      font,
    });

    page.drawText(item.source?.substring(0, 18) ?? "-", {
      x: 640,
      y,
      size: 9,
      font,
    });

    y -= 16;
  }

  const pdfBytes = await pdfDoc.save();

  return Buffer.from(pdfBytes);
}