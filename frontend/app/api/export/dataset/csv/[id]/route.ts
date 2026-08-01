import { NextRequest } from "next/server";

import { getKnowledgeAsset } from "@/lib/khazanah/service";
import { generateKnowledgeAssetDatasetCSV } from "@/lib/exporters/datasetCsv";

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

    const csv =
      await generateKnowledgeAssetDatasetCSV(
        asset
      );

    const fileName = asset.title
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type":
          "text/csv; charset=utf-8",

        "Content-Disposition":
          `attachment; filename="${fileName}-dataset.csv"`,

        "Cache-Control":
          "no-store",
      },
    });
  } catch (error) {
    console.error(
      "Dataset CSV Export Error:",
      error
    );

    return new Response(
      "Gagal menjana Dataset CSV.",
      {
        status: 500,
      }
    );
  }
}