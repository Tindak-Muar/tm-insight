"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import BasicInformation from "./BasicInformation";
import ContentSection from "./ContentSection";
import SourceSection from "./SourceSection";
import MetadataSection from "./MetadataSection";

export type AssetFormData = {
  title: string;

  category: string;
  subcategory: string;

  institution: string;
  state: string;

  year: number | "";

  author: string;

  publishedAt: string;

  summary: string;
  content: string;

  source: string;
  url: string;

  tags: string;

  status: string;

  file: File | null;
};

type AssetFormProps = {
  mode: "create" | "edit";

  assetId?: number;

  initialData?: Partial<AssetFormData>;
};

export default function AssetForm({
  mode,
  assetId,
  initialData,
}: AssetFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] =
    useState<AssetFormData>({
      title: initialData?.title ?? "",

      category: initialData?.category ?? "",
      subcategory:
        initialData?.subcategory ?? "",

      institution:
        initialData?.institution ?? "",

      state: initialData?.state ?? "",

      year: initialData?.year ?? "",

      author: initialData?.author ?? "",

      publishedAt:
        initialData?.publishedAt ?? "",

      summary:
        initialData?.summary ?? "",

      content:
        initialData?.content ?? "",

      source:
        initialData?.source ?? "",

      url: initialData?.url ?? "",

      tags:
        initialData?.tags ?? "",

      status:
        initialData?.status ?? "Aktif",

      file: null,
    });

  function updateField(
    field: keyof AssetFormData,
    value: any
  ) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Sila masukkan tajuk.");
      return;
    }

    if (!formData.category) {
      alert("Sila pilih kategori.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
  mode === "create"
    ? "/api/assets"
    : `/api/assets/${assetId}`,
        {
          method:
            mode === "create"
              ? "POST"
              : "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            title: formData.title,

            category:
              formData.category,

            subcategory:
              formData.subcategory,

            institution:
              formData.institution,

            state: formData.state,

            year:
              formData.year === ""
                ? null
                : Number(formData.year),

            author:
              formData.author,

            publishedAt:
              formData.publishedAt || null,

            summary:
              formData.summary,

            content:
              formData.content,

            source:
              formData.source,

            url: formData.url,

            tags: formData.tags,

            status:
              formData.status,
          }),
        }
      );

      if (!response.ok) {
  console.log("Status:", response.status);

  const error = await response.text();
  console.log("Response:", error);

  throw new Error(error);
}

      alert(
        mode === "create"
          ? "Aset berjaya disimpan."
          : "Aset berjaya dikemaskini."
      );

      router.push(
        "/khazanah-politik?success=1"
      );

      router.refresh();
    } catch {
      alert(
  mode === "create"
    ? "Gagal menyimpan aset."
    : "Gagal meminda aset."
);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <BasicInformation
        data={formData}
        updateField={updateField}
      />

      <ContentSection
        data={formData}
        updateField={updateField}
      />

      <SourceSection
        data={formData}
        updateField={updateField}
      />

      <MetadataSection
        data={formData}
        updateField={updateField}
      />

      <div className="flex justify-end gap-3 border-t pt-6">
        <button
          type="button"
          onClick={() =>
            router.push(
              "/khazanah-politik"
            )
          }
          className="rounded-lg border px-6 py-3"
        >
          Batal
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading
            ? "Menyimpan..."
            : mode === "create"
            ? "Simpan Aset"
            : "Kemaskini Aset"}
        </button>
      </div>
    </form>
  );
}