import { Readable } from "stream";

export interface StorageObject {
  filePath: string;
  storedName: string;
  originalName: string;
  fileType?: string | null;
  fileSize?: number | null;
}

export interface FileMetadata {
  id: number;
  assetId: number;

  storedName: string;
  originalName: string;

  filePath: string;

  fileType?: string | null;
  fileSize?: number | null;

  uploadedBy?: string | null;
  createdAt: Date;
}

export interface FileStreamResult {
  stream: Readable;
  metadata: FileMetadata;
}