import {
  getKnowledgeAttachmentById,
} from "@/lib/khazanah/repository";

import { StorageProvider } from "./storage-provider";
import { StorageObject } from "./types";

export class FileService {
  constructor(
    private readonly storage: StorageProvider
  ) {}

  async getAttachmentStream(attachmentId: number) {
    const attachment = await getKnowledgeAttachmentById(
      attachmentId
    );

    if (!attachment) {
      throw new Error("Attachment not found.");
    }

    const object: StorageObject = {
      filePath: attachment.filePath,
      storedName: attachment.storedName,
      originalName: attachment.originalName,
      fileType: attachment.fileType,
      fileSize: attachment.fileSize,
    };

    const result = await this.storage.open(object);

    return {
      ...result,
      metadata: {
        id: attachment.id,
        assetId: attachment.assetId,

        storedName: attachment.storedName,
        originalName: attachment.originalName,

        filePath: attachment.filePath,

        fileType: attachment.fileType,
        fileSize: attachment.fileSize,

        uploadedBy: attachment.uploadedBy,

        createdAt: attachment.createdAt,
      },
    };
  }

  async getMetadata(attachmentId: number) {
    const attachment = await getKnowledgeAttachmentById(
      attachmentId
    );

    if (!attachment) {
      throw new Error("Attachment not found.");
    }

    return {
      id: attachment.id,
      assetId: attachment.assetId,

      storedName: attachment.storedName,
      originalName: attachment.originalName,

      filePath: attachment.filePath,

      fileType: attachment.fileType,
      fileSize: attachment.fileSize,

      uploadedBy: attachment.uploadedBy,

      createdAt: attachment.createdAt,
    };
  }

  async deleteAttachment(attachmentId: number) {
    const attachment = await getKnowledgeAttachmentById(
      attachmentId
    );

    if (!attachment) {
      throw new Error("Attachment not found.");
    }

    const object: StorageObject = {
      filePath: attachment.filePath,
      storedName: attachment.storedName,
      originalName: attachment.originalName,
      fileType: attachment.fileType,
      fileSize: attachment.fileSize,
    };

    await this.storage.delete(object);

    // Database delete akan dibuat oleh caller
    // supaya transaction lebih mudah dikawal.
  }
}