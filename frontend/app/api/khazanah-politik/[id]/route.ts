import { NextRequest } from "next/server";
import { ZodError } from "zod";

import {
  success,
  failure,
} from "@/lib/api-response";

import {
  getKnowledgeAsset,
  updateAsset,
  removeAsset,
} from "@/lib/khazanah/service";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

function parseId(id: string): number | null {
  const assetId = Number(id);

  if (!Number.isInteger(assetId) || assetId <= 0) {
    return null;
  }

  return assetId;
}

/* ============================================================================
   GET /api/khazanah-politik/[id]
============================================================================ */

export async function GET(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const assetId = parseId(id);

    if (!assetId) {
      return failure("ID tidak sah.", 400);
    }

    const asset =
      await getKnowledgeAsset(assetId);

    if (!asset) {
      return failure(
        "Rekod tidak dijumpai.",
        404
      );
    }

    return success(
      asset,
      "Rekod berjaya diperoleh."
    );
  } catch (error) {
    console.error(
      "[Khazanah API][GET]",
      error
    );

    return failure(
      "Ralat pelayan semasa mendapatkan rekod.",
      500
    );
  }
}

/* ============================================================================
   PUT /api/khazanah-politik/[id]
============================================================================ */

export async function PUT(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const assetId = parseId(id);

    if (!assetId) {
      return failure("ID tidak sah.", 400);
    }

    const existing =
      await getKnowledgeAsset(assetId);

    if (!existing) {
      return failure(
        "Rekod tidak dijumpai.",
        404
      );
    }

    const body = await request.json();

    const asset =
      await updateAsset(
        assetId,
        body
      );

    return success(
      asset,
      "Rekod berjaya dikemaskini."
    );
  } catch (error) {
    console.error(
      "[Khazanah API][PUT]",
      error
    );

    if (error instanceof ZodError) {
      return failure(
        "Data tidak sah.",
        400,
        error.flatten()
      );
    }

    return failure(
      "Ralat pelayan semasa mengemaskini rekod.",
      500
    );
  }
}

/* ============================================================================
   DELETE /api/khazanah-politik/[id]
============================================================================ */

export async function DELETE(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const assetId = parseId(id);

    if (!assetId) {
      return failure("ID tidak sah.", 400);
    }

    const existing =
      await getKnowledgeAsset(assetId);

    if (!existing) {
      return failure(
        "Rekod tidak dijumpai.",
        404
      );
    }

    await removeAsset(assetId);

    return success(
      null,
      "Rekod berjaya dipadam."
    );
  } catch (error) {
    console.error(
      "[Khazanah API][DELETE]",
      error
    );

    return failure(
      "Ralat pelayan semasa memadam rekod.",
      500
    );
  }
}