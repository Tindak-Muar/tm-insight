import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

import {
  success,
  failure,
} from "@/lib/api-response";

const MAX_FILE_SIZE =
  20 * 1024 * 1024; // 20MB

const ALLOWED_TYPES = new Map([
  ["application/pdf", "documents/pdf"],
  [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "documents/docx",
  ],
  [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "documents/xlsx",
  ],
  [
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "documents/pptx",
  ],
  ["image/jpeg", "images/jpeg"],
  ["image/png", "images/png"],
  ["image/webp", "images/webp"],
]);

export async function POST(
  request: NextRequest
) {
  try {
    const formData =
      await request.formData();

    const file =
      formData.get("file");

    if (!(file instanceof File)) {
      return failure(
        "Tiada fail dimuat naik.",
        400
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return failure(
        "Saiz fail melebihi 20MB.",
        400
      );
    }

    const folder =
      ALLOWED_TYPES.get(file.type);

    if (!folder) {
      return failure(
        "Jenis fail tidak disokong.",
        400
      );
    }

    const extension =
      path.extname(file.name);

    const storedName = `${crypto.randomUUID()}${extension}`;

    const uploadDir =
      path.join(
        process.cwd(),
        "uploads",
        folder
      );

    await fs.mkdir(uploadDir, {
      recursive: true,
    });

    const filePath =
      path.join(
        uploadDir,
        storedName
      );

    const buffer = Buffer.from(
      await file.arrayBuffer()
    );

    await fs.writeFile(
      filePath,
      buffer
    );

    return success(
      {
        originalName: file.name,

        storedName,

        filePath: `/uploads/${folder}/${storedName}`,

        fileType: file.type,

        fileSize: file.size,
      },
      "Fail berjaya dimuat naik."
    );
  } catch (error) {
    console.error(
      "[Upload API]",
      error
    );

    return failure(
      "Ralat semasa memuat naik fail.",
      500
    );
  }
}