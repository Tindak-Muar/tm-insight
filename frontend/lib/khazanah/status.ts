import type { KnowledgeAssetDTO } from "./types";

export const STATUS_CONFIG: Record<
  KnowledgeAssetDTO["status"],
  {
    label: string;
    className: string;
  }
> = {
  PUBLISHED: {
    label: "Diterbitkan",
    className: "bg-green-100 text-green-700",
  },

  DRAFT: {
    label: "Draf",
    className: "bg-yellow-100 text-yellow-700",
  },

  ARCHIVED: {
    label: "Arkib",
    className: "bg-gray-200 text-gray-700",
  },
};