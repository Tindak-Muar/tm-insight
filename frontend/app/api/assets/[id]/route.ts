import { prisma } from "@/lib/prisma";
import { generateSlug } from "@/lib/slug";
import { validateKnowledgeAsset } from "@/lib/validation";
import {
  successResponse,
  errorResponse,
} from "@/lib/api-response";

// =========================
// GET /api/assets/[id]
// =========================

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const asset = await prisma.knowledgeAsset.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!asset) {
      return errorResponse(
        "Aset tidak dijumpai.",
        404
      );
    }

    return successResponse(
      asset,
      "Maklumat aset berjaya diperoleh."
    );
  } catch (error) {
    console.error(error);

    return errorResponse(
      "Gagal mendapatkan maklumat aset."
    );
  }
}

// =========================
// PUT /api/assets/[id]
// =========================

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const validation =
      validateKnowledgeAsset(body);

    if (validation) {
      return errorResponse(validation, 400);
    }

    const asset = await prisma.knowledgeAsset.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!asset) {
      return errorResponse(
        "Aset tidak dijumpai.",
        404
      );
    }

    let slug = asset.slug;

    if (asset.title !== body.title) {
      const baseSlug = generateSlug(body.title);

      const existing =
        await prisma.knowledgeAsset.findFirst({
          where: {
            slug: baseSlug,
            NOT: {
              id: asset.id,
            },
          },
        });

      slug = existing
        ? `${baseSlug}-${Date.now()}`
        : baseSlug;
    }

    const updated =
      await prisma.knowledgeAsset.update({
        where: {
          id: asset.id,
        },
        data: {
          title: body.title,
          slug,

          category: body.category,
          subcategory:
            body.subcategory || null,

          institution:
            body.institution || null,

          state:
            body.state || null,

          year: body.year
            ? Number(body.year)
            : null,

          author:
            body.author || null,

          summary:
            body.summary || null,

          content:
            body.content || null,

          source:
            body.source || null,

          sourceUrl:
            body.sourceUrl || null,

          sourceReference:
            body.sourceReference || null,

          tags:
            body.tags || null,
        },
      });

    return successResponse(
      updated,
      "Aset berjaya dikemas kini."
    );
  } catch (error) {
    console.error(error);

    return errorResponse(
      "Gagal mengemas kini aset."
    );
  }
}