import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const assets = await prisma.knowledgeAsset.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(assets);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Gagal mendapatkan aset.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const asset = await prisma.knowledgeAsset.create({
      data: {
        title: body.title,
        category: body.category,
        summary: body.summary,
        source: body.source,
        tags: body.tags,
        status: body.status,
      },
    });

    return NextResponse.json(asset, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Gagal menyimpan aset.",
      },
      {
        status: 500,
      }
    );
  }
}