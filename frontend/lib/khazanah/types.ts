// ============================================================================
// SINAR - Khazanah Politik
// Shared Types
// ============================================================================

export type KnowledgeStatus =
  | "DRAFT"
  | "PUBLISHED"
  | "ARCHIVED";

 export interface KnowledgeAttachmentDTO {
  id: number;

  originalName: string;
  storedName: string;

  filePath: string;

  fileType: string | null;
  fileSize: number | null;

  createdAt: string;
} 

/**
 * Knowledge Asset DTO
 * Semua DateTime daripada Prisma dihantar sebagai ISO 8601 string.
 */
export interface KnowledgeAssetDTO {
  id: number;

  // --------------------------------------------------------------------------
  // Basic Information
  // --------------------------------------------------------------------------

  title: string;
  slug: string;

  category: string;
  subcategory: string | null;

  institution: string | null;
  state: string | null;
  year: number | null;

  author: string | null;

  // --------------------------------------------------------------------------
  // Content
  // --------------------------------------------------------------------------

  summary: string | null;
  content: string | null;

  // --------------------------------------------------------------------------
  // Source
  // --------------------------------------------------------------------------

  source: string | null;
  sourceUrl: string | null;
  sourceReference: string | null;

  // --------------------------------------------------------------------------
  // Metadata
  // --------------------------------------------------------------------------

  tags: string | null;

  // --------------------------------------------------------------------------
  // Workflow
  // --------------------------------------------------------------------------

  status: KnowledgeStatus;
  version: number;

  // --------------------------------------------------------------------------
  // Publishing
  // --------------------------------------------------------------------------

  publishedAt: string | null;
  publishedBy: string | null;

  archivedAt: string | null;
  archivedBy: string | null;

  // --------------------------------------------------------------------------
// Attachments
// --------------------------------------------------------------------------

attachments: KnowledgeAttachmentDTO[];

// --------------------------------------------------------------------------
// Temporary (akan dibuang selepas migrasi selesai)
// --------------------------------------------------------------------------

filePath: string | null;

  // --------------------------------------------------------------------------
  // Audit
  // --------------------------------------------------------------------------

  createdAt: string;
  updatedAt: string;
}

/**
 * Paginated Knowledge Assets
 */
export interface PaginatedKnowledgeAssetsDTO {
  assets: KnowledgeAssetDTO[];

  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/**
 * Create Knowledge Asset
 */
export interface CreateKnowledgeAssetInput {
  title: string;

  category: string;
  subcategory?: string;

  institution?: string;
  state?: string;
  year?: number;

  author?: string;

  summary?: string;
  content?: string;

  source?: string;
  sourceUrl?: string;
  sourceReference?: string;

  tags?: string;

  status?: KnowledgeStatus;
}

/**
 * Update Knowledge Asset
 */
export interface UpdateKnowledgeAssetInput
  extends Partial<CreateKnowledgeAssetInput> {}

/**
 * Standard REST API Response
 */
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * Generic Paginated Response
 */
export interface PaginatedApiResponse<T> {
  success: boolean;
  message: string;

  data: T[];

  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}