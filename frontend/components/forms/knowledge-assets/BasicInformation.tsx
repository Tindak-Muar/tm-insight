"use client";

import { AssetFormData } from "./AssetForm";

import SectionCard from "@/components/ui/SectionCard";
import Input from "@/components/ui/Input";
import Select, {
  SelectOption,
} from "@/components/ui/Select";

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

  const categoryOptions: SelectOption[] =
    CATEGORY_OPTIONS.map((item) => ({
      value: item,
      label: item,
    }));

  const subcategoryOptions: SelectOption[] =
    subcategories.map((item) => ({
      value: item,
      label: item,
    }));

  const institutionOptions: SelectOption[] =
    INSTITUTIONS.map((item) => ({
      value: item,
      label: item,
    }));

  const stateOptions: SelectOption[] =
    STATES.map((item) => ({
      value: item,
      label: item,
    }));

  const yearOptions: SelectOption[] =
    YEARS.map((item) => ({
      value: String(item),
      label: String(item),
    }));

  return (
    <SectionCard
      title="Maklumat Utama"
      description="Lengkapkan maklumat asas aset pengetahuan."
    >
      <div className="grid grid-cols-2 gap-6">

        <div className="col-span-2">
          <Input
            label="Tajuk *"
            placeholder="Masukkan tajuk dokumen..."
            value={data.title}
            onChange={(e) =>
              updateField(
                "title",
                e.target.value
              )
            }
          />
        </div>

        <Select
          label="Kategori *"
          value={data.category}
          options={categoryOptions}
          placeholder="Pilih Kategori"
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
        />
                <Select
          label="Subkategori"
          value={data.subcategory}
          options={subcategoryOptions}
          placeholder="Pilih Subkategori"
          onChange={(e) =>
            updateField(
              "subcategory",
              e.target.value
            )
          }
        />

        <Select
          label="Institusi"
          value={data.institution}
          options={institutionOptions}
          placeholder="Pilih Institusi"
          onChange={(e) =>
            updateField(
              "institution",
              e.target.value
            )
          }
        />

        <Select
          label="Negeri"
          value={data.state}
          options={stateOptions}
          placeholder="Pilih Negeri"
          onChange={(e) =>
            updateField(
              "state",
              e.target.value
            )
          }
        />

        <Select
          label="Tahun"
          value={
            data.year
              ? String(data.year)
              : ""
          }
          options={yearOptions}
          placeholder="Pilih Tahun"
          onChange={(e) =>
            updateField(
              "year",
              e.target.value
            )
          }
        />

        <Input
          label="Penulis"
          placeholder="Nama penulis..."
          value={data.author}
          onChange={(e) =>
            updateField(
              "author",
              e.target.value
            )
          }
        />

        <Input
          label="Tarikh Terbit"
          type="date"
          value={data.publishedAt}
          onChange={(e) =>
            updateField(
              "publishedAt",
              e.target.value
            )
          }
        />
      </div>
    </SectionCard>
  );
}