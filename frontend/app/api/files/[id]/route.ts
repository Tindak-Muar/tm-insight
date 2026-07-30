import { Readable } from "stream";

import { fileService } from "@/lib/files/factory";
import { errorResponse } from "@/lib/api-response";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const attachmentId = Number(id);

    if (Number.isNaN(attachmentId)) {
      return errorResponse(
        "ID lampiran tidak sah.",
        400
      );
    }

    const file =
  await fileService.getAttachmentStream(
    attachmentId
  );
  
    const webStream =
  Readable.toWeb(file.stream) as globalThis.ReadableStream;

return new Response(
  webStream,
  {
        headers: {
          "Content-Type":
            file.metadata.fileType ??
            "application/octet-stream",

          "Content-Disposition":
            `inline; filename*=UTF-8''${encodeURIComponent(
              file.metadata.originalName
            )}`,

          ...(file.metadata.fileSize
            ? {
                "Content-Length": String(
                  file.metadata.fileSize
                ),
              }
            : {}),
        },
      }
    );
  } catch (error) {
    console.error(error);

    return errorResponse(
      "Gagal membuka lampiran."
    );
  }
}