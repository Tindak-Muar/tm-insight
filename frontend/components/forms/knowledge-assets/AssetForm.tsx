"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import BasicInformation from "./BasicInformation";
import DocumentUploadSection from "./DocumentUploadSection";
import ContentSection from "./ContentSection";
import SourceSection from "./SourceSection";
import MetadataSection from "./MetadataSection";
import AuditSection from "./AuditSection";
import AssetActions from "./AssetActions";

import Alert from "@/components/ui/Alert";

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
  sourceUrl: string;
  sourceReference: string;

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

  const [loading, setLoading] =
    useState(false);

      const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState<AssetFormData>({
      title:
        initialData?.title ?? "",

      category:
        initialData?.category ?? "",

      subcategory:
        initialData?.subcategory ?? "",

      institution:
        initialData?.institution ?? "",

      state:
        initialData?.state ?? "",

      year:
        initialData?.year ?? "",

      author:
        initialData?.author ?? "",

      publishedAt:
        initialData?.publishedAt ?? "",

      summary:
        initialData?.summary ?? "",

      content:
        initialData?.content ?? "",

      source:
        initialData?.source ?? "",

      sourceUrl:
        initialData?.sourceUrl ?? "",

      sourceReference:
        initialData?.sourceReference ?? "",

      tags:
        initialData?.tags ?? "",

      status:
        initialData?.status ?? "DRAFT",

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
      setError("Sila masukkan tajuk.");
      return;
    }

    if (!formData.category) {
      setError("Sila pilih kategori.");
      return;
    }

    setError("");

        try {
      setLoading(true);

      let uploadedFile = null;

if (formData.file) {
  const uploadForm = new FormData();

  uploadForm.append(
    "file",
    formData.file
  );

  const uploadResponse = await fetch(
    "/api/uploads",
    {
      method: "POST",
      body: uploadForm,
    }
  );

  if (!uploadResponse.ok) {
    throw new Error(
      "Gagal memuat naik dokumen."
    );
  }

  const uploadResult =
    await uploadResponse.json();

  uploadedFile =
    uploadResult.data;
}
      const response = await fetch(
        mode === "create"
          ? "/api/khazanah-politik"
          : `/api/khazanah-politik/${assetId}`,
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

            category: formData.category,

            subcategory:
              formData.subcategory,

            institution:
              formData.institution,

            state: formData.state,

            year:
  formData.year === ""
    ? undefined
    : Number(formData.year),

            author: formData.author,

            publishedAt:
              formData.publishedAt || null,

            summary: formData.summary,

            content: formData.content,

            source: formData.source,

            sourceUrl:
              formData.sourceUrl,

            sourceReference:
              formData.sourceReference,

            tags: formData.tags,

            status: formData.status,

            attachment: uploadedFile,
          }),
        }
      );

      if (!response.ok) {
        const message =
          await response.text();

        throw new Error(message);
      }

      router.push(
        "/khazanah-politik?success=1"
      );

      router.refresh();

    } catch (err) {
      console.error(
        "AssetForm Error:",
        err
      );

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(
          mode === "create"
            ? "Gagal menyimpan aset."
            : "Gagal mengemas kini aset."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  function handlePublish() {
    setFormData((prev) => ({
      ...prev,
      status: "PUBLISHED",
    }));
  }

    return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {error && (
        <Alert variant="error">
          {error}
        </Alert>
      )}

      <BasicInformation
        data={formData}
        updateField={updateField}
      />

      <DocumentUploadSection
  file={formData.file}
  onFileChange={(file) =>
    updateField("file", file)
  }
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

      <AuditSection
        status={formData.status}
      />

      <AssetActions
        mode={mode}
        isSubmitting={loading}
        onCancel={() =>
          router.push("/khazanah-politik")
        }
        onPublish={handlePublish}
      />
    </form>
  );
}