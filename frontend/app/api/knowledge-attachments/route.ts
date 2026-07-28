import { NextRequest } from "next/server";

import {
  successResponse,
  errorResponse,
} from "@/lib/api-response";

import { createAttachment } from "@/lib/khazanah/service";

// =========================
// POST /api/knowledge-attachments
// =========================

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const attachment =
      await createAttachment(body);

    return successResponse(
      attachment,
      "Lampiran berjaya disimpan.",
      201
    );
  } catch (error) {
    console.error(error);

    return errorResponse(
      "Gagal menyimpan lampiran."
    );
  }
}