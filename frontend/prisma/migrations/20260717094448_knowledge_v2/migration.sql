-- CreateTable
CREATE TABLE "KnowledgeAttachment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "assetId" INTEGER NOT NULL,
    "fileName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "fileType" TEXT,
    "fileSize" INTEGER,
    "uploadedBy" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "KnowledgeAttachment_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "KnowledgeAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "KnowledgeVersion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "assetId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT,
    "content" TEXT,
    "updatedBy" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "KnowledgeVersion_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "KnowledgeAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "KnowledgeRelation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sourceAssetId" INTEGER NOT NULL,
    "targetAssetId" INTEGER NOT NULL,
    "relationType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "KnowledgeRelation_sourceAssetId_fkey" FOREIGN KEY ("sourceAssetId") REFERENCES "KnowledgeAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "KnowledgeRelation_targetAssetId_fkey" FOREIGN KEY ("targetAssetId") REFERENCES "KnowledgeAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "KnowledgeImportLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fileName" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "importedBy" TEXT,
    "totalRecords" INTEGER,
    "successCount" INTEGER,
    "failedCount" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'SUCCESS',
    "remarks" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "KnowledgeAttachment_assetId_idx" ON "KnowledgeAttachment"("assetId");

-- CreateIndex
CREATE INDEX "KnowledgeVersion_assetId_idx" ON "KnowledgeVersion"("assetId");

-- CreateIndex
CREATE INDEX "KnowledgeRelation_sourceAssetId_idx" ON "KnowledgeRelation"("sourceAssetId");

-- CreateIndex
CREATE INDEX "KnowledgeRelation_targetAssetId_idx" ON "KnowledgeRelation"("targetAssetId");

-- CreateIndex
CREATE UNIQUE INDEX "KnowledgeRelation_sourceAssetId_targetAssetId_relationType_key" ON "KnowledgeRelation"("sourceAssetId", "targetAssetId", "relationType");
