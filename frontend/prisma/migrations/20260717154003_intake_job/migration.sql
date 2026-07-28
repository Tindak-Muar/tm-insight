-- CreateTable
CREATE TABLE "KnowledgeImportJob" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fileName" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "mimeType" TEXT,
    "fileSize" INTEGER,
    "documentType" TEXT,
    "uploadedBy" TEXT,
    "status" TEXT NOT NULL DEFAULT 'UPLOADED',
    "progress" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "extractedText" TEXT,
    "aiSummary" TEXT,
    "aiMetadata" TEXT,
    "startedAt" DATETIME,
    "completedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "KnowledgeImportJob_status_idx" ON "KnowledgeImportJob"("status");

-- CreateIndex
CREATE INDEX "KnowledgeImportJob_createdAt_idx" ON "KnowledgeImportJob"("createdAt");
