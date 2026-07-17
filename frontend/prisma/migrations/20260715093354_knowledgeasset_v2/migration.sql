/*
  Warnings:

  - Added the required column `updatedAt` to the `KnowledgeAsset` table without a default value. This is not possible if the table is not empty.

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
    "url" TEXT,
    "filePath" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Aktif',
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_KnowledgeAsset" ("category", "createdAt", "id", "source", "status", "summary", "tags", "title") SELECT "category", "createdAt", "id", "source", "status", "summary", "tags", "title" FROM "KnowledgeAsset";
DROP TABLE "KnowledgeAsset";
ALTER TABLE "new_KnowledgeAsset" RENAME TO "KnowledgeAsset";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
