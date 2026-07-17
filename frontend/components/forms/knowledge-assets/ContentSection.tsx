"use client";

import { AssetFormData } from "./AssetForm";

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
    <div className="rounded-xl border bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        📝 Kandungan
      </h2>

      <div className="space-y-6">

        <div>
          <label className="mb-2 block font-medium">
            Ringkasan
          </label>

          <textarea
            rows={5}
            value={data.summary}
            onChange={(e) =>
              updateField(
                "summary",
                e.target.value
              )
            }
            placeholder="Masukkan ringkasan dokumen..."
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Kandungan Penuh
          </label>

          <textarea
            rows={15}
            value={data.content}
            onChange={(e) =>
              updateField(
                "content",
                e.target.value
              )
            }
            placeholder="Masukkan kandungan penuh dokumen..."
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

      </div>

    </div>
  );
}