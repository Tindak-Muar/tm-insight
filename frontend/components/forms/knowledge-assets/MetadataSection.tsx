"use client";

import { AssetFormData } from "./AssetForm";

import SectionCard from "@/components/ui/SectionCard";
import Input from "@/components/ui/Input";
import Select, {
  SelectOption,
} from "@/components/ui/Select";
import Alert from "@/components/ui/Alert";

import { STATUS } from "@/lib/master-data/status";

type Props = {
  data: AssetFormData;
  updateField: (
    field: keyof AssetFormData,
    value: any
  ) => void;
};

export default function MetadataSection({
  data,
  updateField,
}: Props) {
  const statusOptions: SelectOption[] =
    STATUS.map((status) => ({
      value: status,
      label: status,
    }));

  return (
    <SectionCard
      title="Metadata"
      description="Lengkapkan metadata untuk memudahkan carian dan analisis."
    >
      <div className="grid grid-cols-2 gap-6">

        <Input
          label="Tag"
          value={data.tags}
          placeholder="Contoh: Johor, Ekonomi, RMK13"
          onChange={(e) =>
            updateField(
              "tags",
              e.target.value
            )
          }
        />

        <Select
          label="Status"
          value={data.status}
          options={statusOptions}
          onChange={(e) =>
            updateField(
              "status",
              e.target.value
            )
          }
        />

      </div>

      <div className="mt-6">
        <Alert variant="info">
          <strong>Maklumat</strong>

          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              Metadata membantu proses carian dan analisis AI.
            </li>

            <li>
              Gunakan tag yang ringkas dan konsisten.
            </li>

            <li>
              Status <strong>Draf</strong> sesuai untuk dokumen yang
              belum dimuktamadkan.
            </li>

            <li>
              Status <strong>Arkib</strong> digunakan untuk dokumen lama
              yang masih disimpan sebagai rujukan.
            </li>
          </ul>
        </Alert>
      </div>

    </SectionCard>
  );
}