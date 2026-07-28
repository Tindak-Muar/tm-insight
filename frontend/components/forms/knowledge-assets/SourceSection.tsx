"use client";

import { AssetFormData } from "./AssetForm";

import SectionCard from "@/components/ui/SectionCard";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

type Props = {
  data: AssetFormData;
  updateField: (
    field: keyof AssetFormData,
    value: any
  ) => void;
};

export default function SourceSection({
  data,
  updateField,
}: Props) {
  return (
    <SectionCard
      title="Maklumat Sumber"
      description="Nyatakan sumber asal dokumen dan pautan rujukan jika ada."
    >
      <div className="space-y-6">
        <Input
          label="Sumber"
          placeholder="Contoh: Jabatan Perangkaan Malaysia (DOSM)"
          value={data.source}
          onChange={(e) =>
            updateField(
              "source",
              e.target.value
            )
          }
        />

        <Input
          label="Pautan Rujukan"
          type="url"
          placeholder="https://..."
          value={data.sourceUrl}
          onChange={(e) =>
            updateField(
              "sourceUrl",
              e.target.value
            )
          }
        />

        <Textarea
          label="Catatan"
          rows={4}
          placeholder="Maklumat tambahan berkaitan sumber dokumen..."
          value={data.sourceReference}
          onChange={(e) =>
            updateField(
              "sourceReference",
              e.target.value
            )
          }
        />
      </div>
    </SectionCard>
  );
}