import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";
import AssetForm from "@/components/forms/knowledge-assets/AssetForm";
import { FilePenLine } from "lucide-react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditAssetPage({
  params,
}: Props) {
  const { id } = await params;

  const asset = await prisma.knowledgeAsset.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!asset) {
    notFound();
  }

  return (
    <div className="space-y-8">

      <div>
  <h1 className="flex items-center gap-3 text-4xl font-bold">
    <FilePenLine className="h-9 w-9 text-blue-600" />
    Kemas Kini Aset Pengetahuan
  </h1>

  <p className="mt-2 text-gray-500">
    Kemas kini maklumat aset di dalam Khazanah Politik.
  </p>
</div>

      <AssetForm
        mode="edit"
        assetId={asset.id}
        initialData={{
          title: asset.title,

          category: asset.category,
          subcategory: asset.subcategory ?? "",

          institution: asset.institution ?? "",
          state: asset.state ?? "",

          year: asset.year ?? "",

          author: asset.author ?? "",

          publishedAt: asset.publishedAt
            ? asset.publishedAt
                .toISOString()
                .split("T")[0]
            : "",

          summary: asset.summary ?? "",
          content: asset.content ?? "",

          source: asset.source ?? "",
          url: asset.url ?? "",

          tags: asset.tags ?? "",

          status: asset.status,
        }}
      />

    </div>
  );
}