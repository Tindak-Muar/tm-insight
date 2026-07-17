import { NextRequest, NextResponse } from "next/server";
import ExcelJS from "exceljs";

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

    const workbook = new ExcelJS.Workbook();

    workbook.creator = "SINAR";
    workbook.company = "SINAR Political Intelligence";
    workbook.created = new Date();

    const worksheet = workbook.addWorksheet("Khazanah Politik");

    worksheet.columns = [
      { header: "ID", key: "id", width: 8 },
      { header: "Tajuk", key: "title", width: 40 },
      { header: "Kategori", key: "category", width: 20 },
      { header: "Subkategori", key: "subcategory", width: 20 },
      { header: "Institusi", key: "institution", width: 25 },
      { header: "Negeri", key: "state", width: 18 },
      { header: "Tahun", key: "year", width: 10 },
      { header: "Penulis", key: "author", width: 25 },
      { header: "Status", key: "status", width: 15 },
      { header: "Sumber", key: "source", width: 25 },
      { header: "URL", key: "url", width: 40 },
      { header: "Tarikh Dicipta", key: "createdAt", width: 25 },
    ];

    worksheet.getRow(1).font = {
      bold: true,
    };

    worksheet.getRow(1).alignment = {
      vertical: "middle",
      horizontal: "center",
    };

    assets.forEach((asset) => {
      worksheet.addRow({
        id: asset.id,
        title: asset.title,
        category: asset.category,
        subcategory: asset.subcategory ?? "",
        institution: asset.institution ?? "",
        state: asset.state ?? "",
        year: asset.year ?? "",
        author: asset.author ?? "",
        status: asset.status,
        source: asset.source ?? "",
        url: asset.url ?? "",
        createdAt: asset.createdAt.toLocaleString("ms-MY"),
      });
    });

    worksheet.columns.forEach((column) => {
      let maxLength = 15;

      column.eachCell?.({ includeEmpty: true }, (cell) => {
        const value = cell.value?.toString() ?? "";

        if (value.length > maxLength) {
          maxLength = value.length;
        }
      });

      column.width = Math.min(maxLength + 2, 50);
    });

    const buffer = await workbook.xlsx.writeBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition":
          'attachment; filename="Khazanah_Politik.xlsx"',
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Export Excel gagal.",
      },
      {
        status: 500,
      }
    );
  }
}