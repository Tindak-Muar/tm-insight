import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

type DB = Prisma.TransactionClient | typeof prisma;

const DEFAULT_INCLUDE = {
  attachments: true,
  versions: true,
  sourceRelations: true,
  targetRelations: true,
} satisfies Prisma.KnowledgeAssetInclude;

export function getKnowledgeAssetById(
  id: number,
  db: DB = prisma
) {
  return db.knowledgeAsset.findUnique({
    where: { id },
    include: DEFAULT_INCLUDE,
  });
}

export function getKnowledgeAssetBySlug(
  slug: string,
  db: DB = prisma
) {
  return db.knowledgeAsset.findUnique({
    where: { slug },
    include: DEFAULT_INCLUDE,
  });
}

export function findKnowledgeAssets(
  args: Prisma.KnowledgeAssetFindManyArgs,
  db: DB = prisma
) {
  return db.knowledgeAsset.findMany(args);
}

export function countKnowledgeAssets(
  where?: Prisma.KnowledgeAssetWhereInput,
  db: DB = prisma
) {
  return db.knowledgeAsset.count({
    where,
  });
}

export function createKnowledgeAsset(
  data: Prisma.KnowledgeAssetCreateInput,
  db: DB = prisma
) {
  return db.knowledgeAsset.create({
    data,
    include: DEFAULT_INCLUDE,
  });
}

export function createKnowledgeAttachment(
  data: Prisma.KnowledgeAttachmentCreateInput,
  db: DB = prisma
) {
  return db.knowledgeAttachment.create({
    data,
  });
}

export function updateKnowledgeAsset(
  id: number,
  data: Prisma.KnowledgeAssetUpdateInput,
  db: DB = prisma
) {
  return db.knowledgeAsset.update({
    where: { id },
    data,
    include: DEFAULT_INCLUDE,
  });
}

export function deleteKnowledgeAsset(
  id: number,
  db: DB = prisma
) {
  return db.knowledgeAsset.delete({
    where: { id },
  });
}