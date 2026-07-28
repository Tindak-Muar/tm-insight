/*
  Warnings:

  - You are about to drop the column `fileName` on the `KnowledgeAttachment` table. All the data in the column will be lost.
  - Added the required column `originalName` to the `KnowledgeAttachment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storedName` to the `KnowledgeAttachment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_KnowledgeAttachment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "assetId" INTEGER NOT NULL,
    "originalName" TEXT NOT NULL,
    "storedName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "fileType" TEXT,
    "fileSize" INTEGER,
    "uploadedBy" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "KnowledgeAttachment_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "KnowledgeAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_KnowledgeAttachment" ("assetId", "createdAt", "filePath", "fileSize", "fileType", "id", "uploadedBy") SELECT "assetId", "createdAt", "filePath", "fileSize", "fileType", "id", "uploadedBy" FROM "KnowledgeAttachment";
DROP TABLE "KnowledgeAttachment";
ALTER TABLE "new_KnowledgeAttachment" RENAME TO "KnowledgeAttachment";
CREATE INDEX "KnowledgeAttachment_assetId_idx" ON "KnowledgeAttachment"("assetId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
