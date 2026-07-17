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
        subcategory: body.subcategory,

        institution: body.institution,
        state: body.state,

        year: body.year,

        author: body.author,

        summary: body.summary,
        content: body.content,

        source: body.source,
        url: body.url,

        tags: body.tags,

        status: body.status,

        publishedAt: body.publishedAt
          ? new Date(body.publishedAt)
          : null,

        filePath: null,
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