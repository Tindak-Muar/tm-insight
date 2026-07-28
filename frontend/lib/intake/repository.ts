import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function createImportJob(
  data: Prisma.KnowledgeImportJobCreateInput
) {
  return prisma.knowledgeImportJob.create({
    data,
  });
}

export async function getImportJobs() {
  return prisma.knowledgeImportJob.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getImportJobById(id: number) {
  return prisma.knowledgeImportJob.findUnique({
    where: {
      id,
    },
  });
}

export async function updateImportJob(
  id: number,
  data: Prisma.KnowledgeImportJobUpdateInput
) {
  return prisma.knowledgeImportJob.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteImportJob(id: number) {
  return prisma.knowledgeImportJob.delete({
    where: {
      id,
    },
  });
}

export async function countImportJobs() {
  return prisma.knowledgeImportJob.count();
}

export async function countImportJobsByStatus(status: string) {
  return prisma.knowledgeImportJob.count({
    where: {
      status,
    },
  });
}