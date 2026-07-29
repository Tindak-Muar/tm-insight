import { z } from "zod";

export const knowledgeSchema = z.object({

    title: z
        .string()
        .trim()
        .min(3)
        .max(255),

    category: z
        .string()
        .trim()
        .min(1),

    subcategory: z
        .string()
        .optional(),

    institution: z
        .string()
        .optional(),

    state: z
        .string()
        .optional(),

    year: z
        .number()
        .int()
        .min(1900)
        .max(2100)
        .optional(),

    author: z
        .string()
        .optional(),

    summary: z
        .string()
        .optional(),

    content: z
        .string()
        .optional(),

    source: z
        .string()
        .optional(),

    sourceUrl: z
        .string()
        .url()
        .optional()
        .or(z.literal("")),

    sourceReference: z
        .string()
        .optional(),

    tags: z
        .string()
        .optional(),

    status: z
  .enum([
    "DRAFT",
    "PUBLISHED",
    "ARCHIVED",
  ])
  .default("DRAFT"),

  attachment: z
  .object({
    originalName: z.string(),
    storedName: z.string(),
    filePath: z.string(),
    fileType: z.string().optional(),
    fileSize: z.number().optional(),
  })
  .optional(),
});

export type KnowledgeInput =
    z.infer<typeof knowledgeSchema>;

    