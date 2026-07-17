import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { buildKhazanahQuery } from "@/lib/khazanah/query";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const keyword = searchParams.get("keyword") ?? "";
    const category = searchParams.get("category") ?? "";
    const status = searchParams.get("status") ?? "";
    const state = searchParams.get("state") ?? "";
    const year = searchParams.get("year") ?? "";
    const sort = searchParams.get("sort") ?? "";

    const { where, orderBy } = buildKhazanahQuery({
      keyword,
      category,
      status,
      state,
      year,
      sort,
    });

    const assets = await prisma.knowledgeAsset.findMany({
      where,
      orderBy,
    });

    const header = [
      "ID",
      "Tajuk",
      "Kategori",
      "Subkategori",
      "Institusi",
      "Negeri",
      "Tahun",
      "Penulis",
      "Status",
      "Sumber",
      "URL",
      "Tarikh Dicipta",
    ];

    const rows = assets.map((asset) => [
      asset.id,
      `"${(asset.title ?? "").replace(/"/g, '""')}"`,
      asset.category ?? "",
      asset.subcategory ?? "",
      asset.institution ?? "",
      asset.state ?? "",
      asset.year ?? "",
      `"${(asset.author ?? "").replace(/"/g, '""')}"`,
      asset.status ?? "",
      `"${(asset.source ?? "").replace(/"/g, '""')}"`,
      asset.url ?? "",
      asset.createdAt.toISOString(),
    ]);

    const csv =
      [header.join(","), ...rows.map((r) => r.join(","))].join("\n");

    return new NextResponse("\uFEFF" + csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition":
          'attachment; filename="Khazanah_Politik.csv"',
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Export gagal.",
      },
      {
        status: 500,
      }
    );
  }
}