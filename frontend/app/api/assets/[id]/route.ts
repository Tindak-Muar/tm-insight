import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

// =========================
// GET SATU ASET
// =========================

export async function GET(
  request: Request,
  { params }: Props
) {
  const { id } = await params;

  try {
    const asset = await prisma.knowledgeAsset.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!asset) {
      return NextResponse.json(
        {
          message: "Aset tidak dijumpai.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(asset);
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

// =========================
// KEMASKINI ASET
// =========================

export async function PUT(
  request: Request,
  { params }: Props
) {
  const { id } = await params;

  try {
    const body = await request.json();

    const asset = await prisma.knowledgeAsset.update({
      where: {
        id: Number(id),
      },

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
      },
    });

    return NextResponse.json(asset);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Gagal meminda aset.",
      },
      {
        status: 500,
      }
    );
  }
}

// =========================
// PADAM ASET
// =========================

export async function DELETE(
  request: Request,
  { params }: Props
) {
  const { id } = await params;

  try {
    await prisma.knowledgeAsset.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Aset berjaya dipadam.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Gagal memadam aset.",
      },
      {
        status: 500,
      }
    );
  }
}