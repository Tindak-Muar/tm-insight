import {
  createImportJob,
  getImportJobs,
  getImportJobById,
  updateImportJob,
  deleteImportJob,
  countImportJobs,
  countImportJobsByStatus,
} from "./repository";

export async function createJob(data: {
  fileName: string;
  originalName: string;
  filePath: string;
  fileType: string;
  mimeType?: string;
  fileSize?: number;
  uploadedBy?: string;
}) {
  return createImportJob({
    ...data,
    status: "UPLOADED",
    progress: 0,
  });
}

export async function listJobs() {
  return getImportJobs();
}

export async function getJob(id: number) {
  return getImportJobById(id);
}

export async function updateJobStatus(
  id: number,
  status: string,
  progress: number = 0
) {
  return updateImportJob(id, {
    status,
    progress,
  });
}

export async function markQueued(id: number) {
  return updateJobStatus(id, "QUEUED", 5);
}

export async function markExtracting(id: number) {
  return updateJobStatus(id, "EXTRACTING", 20);
}

export async function markAIProcessing(id: number) {
  return updateJobStatus(id, "AI_PROCESSING", 60);
}

export async function markReview(id: number) {
  return updateJobStatus(id, "REVIEW", 90);
}

export async function markPublished(id: number) {
  return updateImportJob(id, {
    status: "PUBLISHED",
    progress: 100,
    completedAt: new Date(),
  });
}

export async function markFailed(
  id: number,
  errorMessage: string
) {
  return updateImportJob(id, {
    status: "FAILED",
    errorMessage,
  });
}

export async function removeJob(id: number) {
  return deleteImportJob(id);
}

export async function getDashboardStats() {
  return {
    total: await countImportJobs(),

    uploaded: await countImportJobsByStatus("UPLOADED"),

    queued: await countImportJobsByStatus("QUEUED"),

    extracting: await countImportJobsByStatus("EXTRACTING"),

    aiProcessing: await countImportJobsByStatus(
      "AI_PROCESSING"
    ),

    review: await countImportJobsByStatus("REVIEW"),

    published: await countImportJobsByStatus(
      "PUBLISHED"
    ),

    failed: await countImportJobsByStatus("FAILED"),
  };
}