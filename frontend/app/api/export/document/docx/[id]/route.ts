import { NextRequest } from "next/server";

import { getKnowledgeAsset } from "@/lib/khazanah/service";
import { generateKnowledgeAssetDocumentDocx } from "@/lib/exporters/documentDocx";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  _request: NextRequest,
  { params }: Props
) {
  try {
    const { id } = await params;

    const asset = await getKnowledgeAsset(
      Number(id)
    );

    if (!asset) {
      return new Response(
        "Aset tidak ditemui.",
        {
          status: 404,
        }
      );
    }

    const docx =
      await generateKnowledgeAssetDocumentDocx(
        asset
      );

    const arrayBuffer = docx.buffer.slice(
      docx.byteOffset,
      docx.byteOffset + docx.byteLength
    ) as ArrayBuffer;

    const fileName = asset.title
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

        "Content-Disposition":
          `attachment; filename="${fileName}-document.docx"`,

        "Cache-Control":
          "no-store",
      },
    });
  } catch (error) {
    console.error(
      "Document DOCX Export Error:",
      error
    );

    return new Response(
      "Gagal menjana Dokumen Word.",
      {
        status: 500,
      }
    );
  }
}