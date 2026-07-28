import { NextRequest } from "next/server";

import { getKnowledgeAssets } from "@/lib/khazanah/service";
import { generateCSV } from "@/lib/exporters";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const assets = await getKnowledgeAssets({
    keyword: searchParams.get("keyword") ?? "",
    category: searchParams.get("category") ?? "",
    status: searchParams.get("status") ?? "",
    state: searchParams.get("state") ?? "",
    year: searchParams.get("year") ?? "",
    sort: searchParams.get("sort") ?? "",
  });

  const csv = generateCSV(assets);

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="Khazanah_Politik.csv"',
    },
  });
}