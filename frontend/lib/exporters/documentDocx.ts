import type { KnowledgeAssetDTO } from "@/lib/khazanah/types";
import { STATUS_CONFIG } from "@/lib/khazanah/status";

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
} from "docx";

/**
 * Menjana Dokumen Word (.docx)
 * bagi satu aset Khazanah Politik.
 */
export async function generateKnowledgeAssetDocumentDocx(
  asset: KnowledgeAssetDTO
): Promise<Buffer> {

  /**
   * --------------------------------------------------------------------------
   * Helper
   * --------------------------------------------------------------------------
   */

  function sectionTitle(
    text: string
  ) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: {
        before: 300,
        after: 200,
      },
      children: [
        new TextRun({
          text,
          bold: true,
        }),
      ],
    });
  }

  function field(
    label: string,
    value: string
  ) {
    return new Paragraph({
      spacing: {
        after: 120,
      },
      children: [
        new TextRun({
          text: `${label}: `,
          bold: true,
        }),
        new TextRun({
          text: value || "-",
        }),
      ],
    });
  }

  const doc = new Document({

    sections: [

      {

        properties: {},

        children: [

          /**
           * ------------------------------------------------------------------
           * Header
           * ------------------------------------------------------------------
           */

          new Paragraph({

            alignment:
              AlignmentType.CENTER,

            spacing: {
              after: 120,
            },

            children: [

              new TextRun({
                text: "SINARLab",
                bold: true,
                size: 34,
              }),

            ],

          }),

          new Paragraph({

            alignment:
              AlignmentType.CENTER,

            children: [

              new TextRun(
                "AI Political Operating System"
              ),

            ],

          }),

          new Paragraph({

            alignment:
              AlignmentType.CENTER,

            spacing: {
              after: 300,
            },

            children: [

              new TextRun(
                "Powered by Tindak Muar"
              ),

            ],

          }),

          /**
           * ------------------------------------------------------------------
           * Maklumat Dokumen
           * ------------------------------------------------------------------
           */

          sectionTitle(
            "Maklumat Dokumen"
          ),

          field(
            "Tajuk",
            asset.title
          ),

          field(
            "Kategori",
            asset.category
          ),

          field(
            "Subkategori",
            asset.subcategory ?? "-"
          ),

          field(
            "Institusi",
            asset.institution ?? "-"
          ),

          field(
            "Negeri",
            asset.state ?? "-"
          ),

          field(
            "Tahun",
            asset.year?.toString() ?? "-"
          ),

          field(
            "Penulis",
            asset.author ?? "-"
          ),

          field(
            "Status",
            STATUS_CONFIG[
              asset.status
            ].label
          ),

          field(
            "Tarikh Terbit",
            asset.publishedAt
              ? new Date(
                  asset.publishedAt
                ).toLocaleDateString(
                  "ms-MY"
                )
              : "-"
          ),

                    /**
           * ------------------------------------------------------------------
           * Ringkasan
           * ------------------------------------------------------------------
           */

          sectionTitle(
            "Ringkasan"
          ),

          new Paragraph({
            spacing: {
              after: 240,
            },
            children: [
              new TextRun(
                asset.summary || "-"
              ),
            ],
          }),

          /**
           * ------------------------------------------------------------------
           * Kandungan
           * ------------------------------------------------------------------
           */

          sectionTitle(
            "Kandungan"
          ),

          new Paragraph({
            spacing: {
              after: 240,
            },
            children: [
              new TextRun(
                asset.content || "-"
              ),
            ],
          }),

          /**
           * ------------------------------------------------------------------
           * Rujukan
           * ------------------------------------------------------------------
           */

          sectionTitle(
            "Rujukan"
          ),

          field(
            "Sumber",
            asset.source ?? "-"
          ),

          field(
            "URL",
            asset.sourceUrl ?? "-"
          ),

          field(
            "Rujukan",
            asset.sourceReference ?? "-"
          ),

          /**
           * ------------------------------------------------------------------
           * Metadata
           * ------------------------------------------------------------------
           */

          sectionTitle(
            "Metadata"
          ),

          field(
            "Tag",
            asset.tags ?? "-"
          ),

          field(
            "ID Aset",
            asset.id.toString()
          ),

          field(
            "Bilangan Lampiran",
            asset.attachments.length.toString()
          ),

          field(
            "Versi",
            `v${asset.version}`
          ),

          field(
            "Tarikh Dikemas Kini",
            new Date(
              asset.updatedAt
            ).toLocaleDateString(
              "ms-MY"
            )
          ),

          /**
           * ------------------------------------------------------------------
           * Footer
           * ------------------------------------------------------------------
           */

          new Paragraph({
            spacing: {
              before: 400,
            },
          }),

          new Paragraph({
            alignment:
              AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "Dijana oleh SINARLab",
                bold: true,
              }),
            ],
          }),

          new Paragraph({
            alignment:
              AlignmentType.CENTER,
            children: [
              new TextRun(
                "AI Political Operating System"
              ),
            ],
          }),

          new Paragraph({
            alignment:
              AlignmentType.CENTER,
            children: [
              new TextRun(
                "Powered by Tindak Muar"
              ),
            ],
          }),

          new Paragraph({
            alignment:
              AlignmentType.CENTER,
            children: [
              new TextRun(
                `Tarikh Eksport: ${new Date().toLocaleDateString("ms-MY")}`
              ),
            ],
          }),

        ],

      },

    ],

  });

  return await Packer.toBuffer(
    doc
  );

}