/*
  Warnings:

  - You are about to drop the column `url` on the `KnowledgeAsset` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_KnowledgeAsset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT,
    "institution" TEXT,
    "state" TEXT,
    "year" INTEGER,
    "author" TEXT,
    "summary" TEXT,
    "content" TEXT,
    "tags" TEXT,
    "source" TEXT,
    "sourceUrl" TEXT,
    "sourceReference" TEXT,
    "filePath" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Aktif',
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_KnowledgeAsset" ("author", "category", "content", "createdAt", "filePath", "id", "institution", "publishedAt", "source", "state", "status", "subcategory", "summary", "tags", "title", "updatedAt", "year") SELECT "author", "category", "content", "createdAt", "filePath", "id", "institution", "publishedAt", "source", "state", "status", "subcategory", "summary", "tags", "title", "updatedAt", "year" FROM "KnowledgeAsset";
DROP TABLE "KnowledgeAsset";
ALTER TABLE "new_KnowledgeAsset" RENAME TO "KnowledgeAsset";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
