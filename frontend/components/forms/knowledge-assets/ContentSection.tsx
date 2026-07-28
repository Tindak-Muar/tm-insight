"use client";

import { AssetFormData } from "./AssetForm";

import SectionCard from "@/components/ui/SectionCard";
import Textarea from "@/components/ui/Textarea";

type Props = {
  data: AssetFormData;
  updateField: (
    field: keyof AssetFormData,
    value: any
  ) => void;
};

export default function ContentSection({
  data,
  updateField,
}: Props) {
  return (
    <SectionCard
      title="Kandungan"
      description="Masukkan ringkasan dan kandungan penuh aset pengetahuan."
    >
      <div className="space-y-6">
        <Textarea
          label="Ringkasan"
          rows={5}
          placeholder="Masukkan ringkasan dokumen..."
          value={data.summary}
          onChange={(e) =>
            updateField(
              "summary",
              e.target.value
            )
          }
        />

        <Textarea
          label="Kandungan Penuh"
          rows={15}
          placeholder="Masukkan kandungan penuh dokumen..."
          value={data.content}
          onChange={(e) =>
            updateField(
              "content",
              e.target.value
            )
          }
        />
      </div>
    </SectionCard>
  );
}