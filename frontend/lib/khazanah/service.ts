import { generateSlug } from "@/lib/slug";

import { buildKhazanahQuery } from "./query";

import {
  knowledgeSchema,
  type KnowledgeInput,
} from "./schema";

import type { Prisma } from "@prisma/client";

import { toDTO } from "./mapper";

import {
  findKnowledgeAssets,
  countKnowledgeAssets,
  getKnowledgeAssetById,
  createKnowledgeAsset,
  createKnowledgeAttachment,
  updateKnowledgeAsset,
  deleteKnowledgeAsset,
} from "./repository";

export interface KhazanahFilters {
  keyword?: string;
  category?: string;
  status?: string;
  state?: string;
  year?: string;
  sort?: string;
}

export interface KhazanahPagination
  extends KhazanahFilters {
  page?: number;
  pageSize?: number;
}

export interface AttachmentInput {
  assetId: number;

  originalName: string;
  storedName: string;

  filePath: string;

  fileType?: string;
  fileSize?: number;

  uploadedBy?: string;
}

export async function createAttachment(
  input: AttachmentInput
) {
  return createKnowledgeAttachment({
    originalName: input.originalName,
    storedName: input.storedName,

    filePath: input.filePath,

    fileType: input.fileType ?? null,
    fileSize: input.fileSize ?? null,

    uploadedBy: input.uploadedBy ?? null,

    asset: {
      connect: {
        id: input.assetId,
      },
    },
  });
}

export async function getKnowledgeAssets(
  filters: KhazanahFilters = {}
) {
  const { where, orderBy } =
    buildKhazanahQuery(filters);

  const assets =
  await findKnowledgeAssets({
    where,
    orderBy,
  });

return assets.map(toDTO);
}

export async function getKnowledgeAssetsPaginated(
  params: KhazanahPagination = {}
) {
  const {
    page = 1,
    pageSize = 10,
    ...filters
  } = params;

  const { where, orderBy } =
    buildKhazanahQuery(filters);

  const total =
    await countKnowledgeAssets(where);

  const assets =
    await findKnowledgeAssets({
      where,
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

  return {
  assets: assets.map(toDTO),
  total,
  page,
  pageSize,
  totalPages: Math.ceil(total / pageSize),
};

}

export async function getKnowledgeAsset(
  id: number
) {
  const asset =
  await getKnowledgeAssetById(id);

return asset
  ? toDTO(asset)
  : null;
}

export async function createAsset(
  input: KnowledgeInput
) {
  const data = knowledgeSchema.parse(input);

  const payload: Prisma.KnowledgeAssetCreateInput = {
    title: data.title,
    slug: generateSlug(data.title),

    category: data.category,

    subcategory: data.subcategory ?? null,
    institution: data.institution ?? null,
    state: data.state ?? null,
    year: data.year ?? null,
    author: data.author ?? null,

    summary: data.summary ?? null,
    content: data.content ?? null,

    source: data.source ?? null,
    sourceUrl: data.sourceUrl || null,
    sourceReference: data.sourceReference ?? null,

    tags: data.tags ?? null,

    status: data.status,
  };

    const asset =
  await createKnowledgeAsset(payload);

return toDTO(asset);
}

export async function updateAsset(
  id: number,
  input: Partial<KnowledgeInput>
) {
  const data =
    knowledgeSchema.partial().parse(input);

  const payload: Prisma.KnowledgeAssetUpdateInput =
    {
      ...data,
    };

  if (data.title) {
    payload.slug =
      generateSlug(data.title);
  }

  const asset =
  await updateKnowledgeAsset(
    id,
    payload
  );

return toDTO(asset);
}

export async function removeAsset(
  id: number
) {
  return deleteKnowledgeAsset(id);
}