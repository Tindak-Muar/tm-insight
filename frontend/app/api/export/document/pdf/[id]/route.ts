import { NextRequest } from "next/server";

import { getKnowledgeAsset } from "@/lib/khazanah/service";
import { generateKnowledgeAssetPDF } from "@/lib/exporters/documentPdf";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  _request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const asset =
      await getKnowledgeAsset(
        Number(id)
      );

    if (!asset) {
      return new Response(
        "Aset tidak dijumpai.",
        {
          status: 404,
        }
      );
    }

   const pdf = await generateKnowledgeAssetPDF(asset);

const arrayBuffer = pdf.buffer.slice(
  pdf.byteOffset,
  pdf.byteOffset + pdf.byteLength
) as ArrayBuffer;

return new Response(arrayBuffer, {
  status: 200,
  headers: {
    "Content-Type": "application/pdf",
    "Content-Disposition":
      `attachment; filename="${asset.slug}.pdf"`,
    "Cache-Control": "no-store",
  },
});

  } catch (error) {
    console.error(
      "PDF Export Error:",
      error
    );

    return new Response(
      "Gagal menjana PDF.",
      {
        status: 500,
      }
    );
  }
}