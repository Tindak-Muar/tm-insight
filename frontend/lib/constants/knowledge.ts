export const KNOWLEDGE_CATEGORY = {
  BERITA: "Berita",
  LAPORAN: "Laporan",
  DASAR: "Dasar",
  AKTA: "Akta",
  PEKELILING: "Pekeliling",
  HANSARD: "Hansard",
  MANIFESTO: "Manifesto",
  UCAPAN: "Ucapan",
  KAJIAN: "Kajian",
  LAIN_LAIN: "Lain-lain",
} as const;

export type KnowledgeCategory =
  (typeof KNOWLEDGE_CATEGORY)[keyof typeof KNOWLEDGE_CATEGORY];

export const KNOWLEDGE_CATEGORY_OPTIONS = Object.values(
  KNOWLEDGE_CATEGORY
);