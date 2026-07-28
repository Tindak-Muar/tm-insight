import { KnowledgeAsset } from "@prisma/client";

import {
  KnowledgeAssetDTO,
  KnowledgeStatus,
} from "./types";

export function toDTO(
  asset: KnowledgeAsset
): KnowledgeAssetDTO {
  return {
    id: asset.id,

    // --------------------------------------------------------------------------
    // Basic Information
    // --------------------------------------------------------------------------

    title: asset.title,
    slug: asset.slug,

    category: asset.category,
    subcategory: asset.subcategory,

    institution: asset.institution,
    state: asset.state,
    year: asset.year,

    author: asset.author,

    // --------------------------------------------------------------------------
    // Content
    // --------------------------------------------------------------------------

    summary: asset.summary,
    content: asset.content,

    // --------------------------------------------------------------------------
    // Source
    // --------------------------------------------------------------------------

    source: asset.source,
    sourceUrl: asset.sourceUrl,
    sourceReference: asset.sourceReference,

    // --------------------------------------------------------------------------
    // Metadata
    // --------------------------------------------------------------------------

    tags: asset.tags,

    // --------------------------------------------------------------------------
    // Workflow
    // --------------------------------------------------------------------------

    status: asset.status as KnowledgeStatus,
    version: asset.version,

    // --------------------------------------------------------------------------
    // Publishing
    // --------------------------------------------------------------------------

    publishedAt:
      asset.publishedAt?.toISOString() ?? null,

    publishedBy: asset.publishedBy,

    archivedAt:
      asset.archivedAt?.toISOString() ?? null,

    archivedBy: asset.archivedBy,

    // --------------------------------------------------------------------------
    // Temporary
    // --------------------------------------------------------------------------

    filePath: asset.filePath,

    // --------------------------------------------------------------------------
    // Audit
    // --------------------------------------------------------------------------

    createdAt: asset.createdAt.toISOString(),
    updatedAt: asset.updatedAt.toISOString(),
  };
}