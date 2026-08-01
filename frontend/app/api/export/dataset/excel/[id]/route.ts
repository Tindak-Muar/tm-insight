import { NextRequest } from "next/server";

import { getKnowledgeAsset } from "@/lib/khazanah/service";
import { generateKnowledgeAssetDatasetExcel } from "@/lib/exporters/datasetsExcel";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  _request: NextRequest,
  { params }: RouteParams
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

    const excel =
      await generateKnowledgeAssetDatasetExcel(
        asset
      );

    const arrayBuffer = excel.buffer.slice(
      excel.byteOffset,
      excel.byteOffset +
        excel.byteLength
    ) as ArrayBuffer;

    const fileName = asset.title
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    return new Response(
      arrayBuffer,
      {
        status: 200,
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

          "Content-Disposition":
            `attachment; filename="${fileName}-dataset.xlsx"`,

          "Cache-Control":
            "no-store",
        },
      }
    );
  } catch (error) {
    console.error(
      "Dataset Excel Export Error:",
      error
    );

    return new Response(
      "Gagal menjana Dataset Excel.",
      {
        status: 500,
      }
    );
  }
}