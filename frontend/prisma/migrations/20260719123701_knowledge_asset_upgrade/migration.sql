/*
  Warnings:

  - Added the required column `slug` to the `KnowledgeAsset` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_KnowledgeAsset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT,
    "institution" TEXT,
    "state" TEXT,
    "year" INTEGER,
    "author" TEXT,
    "summary" TEXT,
    "content" TEXT,
    "source" TEXT,
    "sourceUrl" TEXT,
    "sourceReference" TEXT,
    "tags" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "version" INTEGER NOT NULL DEFAULT 1,
    "publishedAt" DATETIME,
    "publishedBy" TEXT,
    "archivedAt" DATETIME,
    "archivedBy" TEXT,
    "filePath" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_KnowledgeAsset" ("author", "category", "content", "createdAt", "filePath", "id", "institution", "publishedAt", "source", "sourceReference", "sourceUrl", "state", "status", "subcategory", "summary", "tags", "title", "updatedAt", "year") SELECT "author", "category", "content", "createdAt", "filePath", "id", "institution", "publishedAt", "source", "sourceReference", "sourceUrl", "state", "status", "subcategory", "summary", "tags", "title", "updatedAt", "year" FROM "KnowledgeAsset";
DROP TABLE "KnowledgeAsset";
ALTER TABLE "new_KnowledgeAsset" RENAME TO "KnowledgeAsset";
CREATE UNIQUE INDEX "KnowledgeAsset_slug_key" ON "KnowledgeAsset"("slug");
CREATE INDEX "KnowledgeAsset_category_idx" ON "KnowledgeAsset"("category");
CREATE INDEX "KnowledgeAsset_status_idx" ON "KnowledgeAsset"("status");
CREATE INDEX "KnowledgeAsset_updatedAt_idx" ON "KnowledgeAsset"("updatedAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
