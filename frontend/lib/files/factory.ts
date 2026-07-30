import { FileService } from "./file-service";
import { LocalStorageProvider } from "./local-storage";

export const fileService = new FileService(
  new LocalStorageProvider()
);