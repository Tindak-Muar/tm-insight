"use client";

import { AssetFormData } from "./AssetForm";

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
  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        🏷️ Metadata
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="mb-2 block font-medium">
            Tag
          </label>

          <input
            type="text"
            value={data.tags}
            onChange={(e) =>
              updateField("tags", e.target.value)
            }
            placeholder="Contoh: Johor, Ekonomi, RMK13"
            className="w-full rounded-lg border px-4 py-3"
          />

          <p className="mt-2 text-sm text-gray-500">
            Pisahkan setiap tag menggunakan koma (,)
          </p>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Status
          </label>

          <select
            value={data.status}
            onChange={(e) =>
              updateField("status", e.target.value)
            }
            className="w-full rounded-lg border px-4 py-3"
          >
            {STATUS.map((status) => (
              <option
                key={status}
                value={status}
              >
                {status}
              </option>
            ))}
          </select>
        </div>

      </div>

      <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">

        <h3 className="mb-2 font-semibold">
          📌 Maklumat
        </h3>

        <ul className="list-disc space-y-1 pl-5">
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
            Status <strong>Arkib</strong> untuk dokumen lama yang
            masih perlu disimpan sebagai rujukan.
          </li>
        </ul>

      </div>

    </div>
  );
}