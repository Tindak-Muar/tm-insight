import { prisma } from "@/lib/prisma";
import { generateSlug } from "@/lib/slug";
import { validateKnowledgeAsset } from "@/lib/validation";
import { successResponse, errorResponse } from "@/lib/api-response";

// =========================
// GET /api/assets
// =========================

export async function GET() {
  try {
    const assets = await prisma.knowledgeAsset.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });

    return successResponse(
      assets,
      "Senarai aset berjaya diperoleh."
    );
  } catch (error) {
    console.error(error);

    return errorResponse(
      "Gagal mendapatkan senarai aset."
    );
  }
}

// =========================
// POST /api/assets
// =========================

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validation
    const validation = validateKnowledgeAsset(body);

    if (validation) {
      return errorResponse(validation, 400);
    }

    // Generate slug
    const baseSlug = generateSlug(body.title);

    // Elak slug bertindih
    let slug = baseSlug;

    const existing = await prisma.knowledgeAsset.findUnique({
      where: {
        slug,
      },
    });

    if (existing) {
      slug = `${baseSlug}-${Date.now()}`;
    }

    const asset = await prisma.knowledgeAsset.create({
      data: {
        title: body.title,
        slug,

        category: body.category,
        subcategory: body.subcategory || null,

        institution: body.institution || null,
        state: body.state || null,

        year: body.year
          ? Number(body.year)
          : null,

        author: body.author || null,

        summary: body.summary || null,
        content: body.content || null,

        source: body.source || null,
        sourceUrl: body.sourceUrl || null,
        sourceReference:
          body.sourceReference || null,

        tags: body.tags || null,

        status: "DRAFT",
        version: 1,

        publishedAt: null,
        publishedBy: null,

        archivedAt: null,
        archivedBy: null,

        filePath: null,
      },
    });

    return successResponse(
      asset,
      "Aset berjaya disimpan.",
      201
    );
  } catch (error) {
    console.error(error);

    return errorResponse(
      "Gagal menyimpan aset."
    );
  }
}