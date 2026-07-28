import { NextRequest } from "next/server";
import { ZodError } from "zod";

import {
  success,
  failure,
} from "@/lib/api-response";

import {
  createAsset,
  getKnowledgeAssetsPaginated,
} from "@/lib/khazanah/service";

export async function GET(
  request: NextRequest
) {
  try {
    const { searchParams } =
      new URL(request.url);

    const result =
      await getKnowledgeAssetsPaginated({
        keyword:
          searchParams.get("keyword") ??
          undefined,

        category:
          searchParams.get("category") ??
          undefined,

        status:
          searchParams.get("status") ??
          undefined,

        state:
          searchParams.get("state") ??
          undefined,

        year:
          searchParams.get("year") ??
          undefined,

        sort:
          searchParams.get("sort") ??
          undefined,

        page: Number(
          searchParams.get("page") ??
            "1"
        ),

        pageSize: Number(
          searchParams.get("pageSize") ??
            "10"
        ),
      });

    return success(
      result,
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

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      await request.json();

    const asset =
      await createAsset(body);

    return success(
      asset,
      "Rekod berjaya dicipta.",
      201
    );
  } catch (error) {
    console.error(
      "[Khazanah API][POST]",
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
      "Ralat pelayan semasa mencipta rekod.",
      500
    );
  }
}