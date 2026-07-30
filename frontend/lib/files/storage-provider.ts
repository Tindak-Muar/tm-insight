import {
  FileMetadata,
  FileStreamResult,
  StorageObject,
} from "./types";

export interface StorageProvider {
  exists(
    object: StorageObject
  ): Promise<boolean>;

  getMetadata(
    object: StorageObject
  ): Promise<FileMetadata>;

  open(
    object: StorageObject
  ): Promise<FileStreamResult>;

  delete(
    object: StorageObject
  ): Promise<void>;
}