"use client";

import { FormEvent, useMemo, useState } from "react";

import { ProviderConfiguration } from "@/types/configuration";
import {
  ConfigurationValue,
  ProviderConfigurationValues,
} from "@/types/configurationValue";
import { FieldValue } from "@/types/field";
import { ConfigurationValues } from "@/types/validation";

import { ValidationService } from "@/lib/gerbang-integrasi/services/ValidationService";
import { useProviderConfiguration } from "@/lib/hooks/useProviderConfiguration";

import ConfigurationField from "./ConfigurationField";

interface ConfigurationFormProps {
  configuration: ProviderConfiguration;
}

export default function ConfigurationForm({
  configuration,
}: ConfigurationFormProps) {

  const { save } = useProviderConfiguration();

  /**
   * Nilai awal.
   */
  const initialValues = useMemo(() => {
    const values: Record<string, FieldValue> = {};

    for (const field of configuration.fields) {
      values[field.id] =
        field.value ?? field.defaultValue;
    }

    return values;
  }, [configuration]);

  /**
   * State nilai.
   */
  const [values, setValues] =
    useState<Record<string, FieldValue>>(initialValues);

  /**
   * State ralat.
   */
  const [errors, setErrors] =
    useState<Record<string, string>>({});

  /**
   * Kemas kini nilai.
   */
  function handleChange(
    fieldId: string,
    value: FieldValue
  ) {
    setValues((previous) => ({
      ...previous,
      [fieldId]: value,
    }));
  }

  /**
   * Simpan konfigurasi.
   */
  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const result = ValidationService.validate(
      configuration.fields,
      values as ConfigurationValues
    );

    setErrors(result.errors);

    if (!result.valid) {
      return;
    }

    const configurationValues: ProviderConfigurationValues = {
      providerId: configuration.providerId,

      values:
        values as Record<
          string,
          ConfigurationValue
        >,
    };

    save(configurationValues);

    console.log(
      "Konfigurasi berjaya disimpan.",
      configurationValues
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit}
    >

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
            value={values[field.id]}
            error={errors[field.id]}
            onChange={(value) =>
              handleChange(field.id, value)
            }
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