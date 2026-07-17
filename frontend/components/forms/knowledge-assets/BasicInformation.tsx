"use client";

import { AssetFormData } from "./AssetForm";

import {
  CATEGORIES,
  CATEGORY_OPTIONS,
} from "@/lib/master-data/categories";

import { STATES } from "@/lib/master-data/states";
import { INSTITUTIONS } from "@/lib/master-data/institutions";
import { YEARS } from "@/lib/master-data/years";

type Props = {
  data: AssetFormData;
  updateField: (
    field: keyof AssetFormData,
    value: any
  ) => void;
};

export default function BasicInformation({
  data,
  updateField,
}: Props) {
  const subcategories =
    data.category &&
    data.category in CATEGORIES
      ? CATEGORIES[
          data.category as keyof typeof CATEGORIES
        ]
      : [];

  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        📚 Maklumat Utama
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div className="col-span-2">
          <label className="mb-2 block font-medium">
            Tajuk *
          </label>

          <input
            type="text"
            value={data.title}
            onChange={(e) =>
              updateField("title", e.target.value)
            }
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Masukkan tajuk dokumen..."
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Kategori *
          </label>

          <select
            value={data.category}
            onChange={(e) => {
              updateField(
                "category",
                e.target.value
              );

              updateField(
                "subcategory",
                ""
              );
            }}
            className="w-full rounded-lg border px-4 py-3"
          >
            <option value="">
              Pilih Kategori
            </option>

            {CATEGORY_OPTIONS.map(
              (category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Subkategori
          </label>

          <select
            value={data.subcategory}
            onChange={(e) =>
              updateField(
                "subcategory",
                e.target.value
              )
            }
            className="w-full rounded-lg border px-4 py-3"
          >
            <option value="">
              Pilih Subkategori
            </option>

            {subcategories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Institusi
          </label>

          <select
            value={data.institution}
            onChange={(e) =>
              updateField(
                "institution",
                e.target.value
              )
            }
            className="w-full rounded-lg border px-4 py-3"
          >
            <option value="">
              Pilih Institusi
            </option>

            {INSTITUTIONS.map(
              (institution) => (
                <option
                  key={institution}
                  value={institution}
                >
                  {institution}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Negeri
          </label>

          <select
            value={data.state}
            onChange={(e) =>
              updateField(
                "state",
                e.target.value
              )
            }
            className="w-full rounded-lg border px-4 py-3"
          >
            <option value="">
              Pilih Negeri
            </option>

            {STATES.map((state) => (
              <option
                key={state}
                value={state}
              >
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Tahun
          </label>

          <select
            value={data.year}
            onChange={(e) =>
              updateField(
                "year",
                e.target.value
              )
            }
            className="w-full rounded-lg border px-4 py-3"
          >
            <option value="">
              Pilih Tahun
            </option>

            {YEARS.map((year) => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Penulis
          </label>

          <input
            type="text"
            value={data.author}
            onChange={(e) =>
              updateField(
                "author",
                e.target.value
              )
            }
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Nama penulis..."
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Tarikh Terbit
          </label>

          <input
            type="date"
            value={data.publishedAt}
            onChange={(e) =>
              updateField(
                "publishedAt",
                e.target.value
              )
            }
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

      </div>

    </div>
  );
}