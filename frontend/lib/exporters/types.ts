export interface ExportOptions {
  title: string;
  filename: string;
  generatedBy?: string;
}

export interface ExportAsset {
  id: number;
  title: string;
  category: string;
  subcategory?: string | null;
  institution?: string | null;
  state?: string | null;
  year?: number | null;
  author?: string | null;
  summary?: string | null;
  status: string;
  source?: string | null;
  url?: string | null;
  createdAt: Date;
}