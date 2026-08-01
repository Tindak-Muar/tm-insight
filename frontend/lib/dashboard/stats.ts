import { prisma } from "@/lib/prisma";
import { KNOWLEDGE_CATEGORY } from "@/lib/constants/knowledge";

export async function getDashboardStats() {
  const [berita, dokumen, radar, strategisAI] =
    await Promise.all([

      prisma.knowledgeAsset.count({
        where: {
          category: KNOWLEDGE_CATEGORY.BERITA,
        },
      }),

      prisma.knowledgeAsset.count({
        where: {
          NOT: {
            category: KNOWLEDGE_CATEGORY.BERITA,
          },
        },
      }),

      // TODO: Sambung apabila modul Radar siap
      Promise.resolve(0),

      // TODO: Sambung apabila modul Strategis AI siap
      Promise.resolve(0),

    ]);

  return {
    berita,
    dokumen,
    radar,
    strategisAI,
  };
}