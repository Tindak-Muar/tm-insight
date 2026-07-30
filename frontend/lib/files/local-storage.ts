import path from "path";
import { createReadStream } from "fs";
import { promises as fs } from "fs";

import { StorageProvider } from "./storage-provider";
import {
  FileMetadata,
  FileStreamResult,
  StorageObject,
} from "./types";

export class LocalStorageProvider
  implements StorageProvider
{
  /**
   * Convert database path
   * (/uploads/documents/pdf/file.pdf)
   * kepada filesystem path sebenar.
   */
  private resolvePath(
    filePath: string
  ): string {
    const relativePath =
      filePath.replace(/^[/\\]+/, "");

    return path.join(
      process.cwd(),
      relativePath
    );
  }

  async exists(
    object: StorageObject
  ): Promise<boolean> {
    try {
      const fullPath =
        this.resolvePath(
          object.filePath
        );

      await fs.access(fullPath);

      return true;
    } catch {
      return false;
    }
  }

  async getMetadata(
    object: StorageObject
  ): Promise<FileMetadata> {
    const fullPath =
      this.resolvePath(
        object.filePath
      );

    const stats =
      await fs.stat(fullPath);

    return {
      id: 0,
      assetId: 0,

      storedName: object.storedName,
      originalName:
        object.originalName,

      filePath: object.filePath,

      fileType: object.fileType,
      fileSize:
        object.fileSize ??
        stats.size,

      uploadedBy: null,

      createdAt: new Date(),
    };
  }

  async open(
    object: StorageObject
  ): Promise<FileStreamResult> {
    const fullPath =
      this.resolvePath(
        object.filePath
      );

    return {
      stream:
        createReadStream(
          fullPath
        ),

      metadata:
        await this.getMetadata(
          object
        ),
    };
  }

  async delete(
    object: StorageObject
  ): Promise<void> {
    const fullPath =
      this.resolvePath(
        object.filePath
      );

    await fs.unlink(fullPath);
  }
}