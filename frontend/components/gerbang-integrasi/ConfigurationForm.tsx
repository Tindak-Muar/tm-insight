"use client";

import { ProviderConfiguration } from "@/types/configuration";

import ConfigurationField from "./ConfigurationField";

interface ConfigurationFormProps {
  configuration: ProviderConfiguration;
}

export default function ConfigurationForm({
  configuration,
}: ConfigurationFormProps) {
  return (
    <form className="space-y-6">

      <div>

        <h2 className="text-xl font-semibold">
          {configuration.title}
        </h2>

        {configuration.description && (
          <p className="mt-1 text-sm text-gray-500">
            {configuration.description}
          </p>
        )}

      </div>

      <div className="space-y-5">

        {configuration.fields.map((field) => (
          <ConfigurationField
            key={field.id}
            field={field}
          />
        ))}

      </div>

      <div className="flex justify-end gap-3 border-t pt-6">

        <button
          type="button"
          className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Batal
        </button>

        <button
          type="submit"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Simpan Konfigurasi
        </button>

      </div>

    </form>
  );
}