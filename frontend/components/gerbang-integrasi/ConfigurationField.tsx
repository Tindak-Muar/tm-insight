"use client";

import { ConfigurationField as Field } from "@/types/field";

interface ConfigurationFieldProps {
  field: Field;
}

export default function ConfigurationField({
  field,
}: ConfigurationFieldProps) {
  switch (field.type) {
    case "textarea":
      return (
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {field.label}
          </label>

          <textarea
            className="w-full rounded-lg border px-3 py-2"
            placeholder={field.placeholder}
            defaultValue={field.defaultValue as string}
          />

          {field.description && (
            <p className="text-xs text-gray-500">
              {field.description}
            </p>
          )}
        </div>
      );

    case "select":
      return (
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {field.label}
          </label>

          <select
            className="w-full rounded-lg border px-3 py-2"
            defaultValue={field.defaultValue as string}
          >
            {field.options?.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>

          {field.description && (
            <p className="text-xs text-gray-500">
              {field.description}
            </p>
          )}
        </div>
      );

    case "switch":
      return (
        <label className="flex items-center justify-between rounded-lg border p-3">
          <span className="text-sm font-medium">
            {field.label}
          </span>

          <input
            type="checkbox"
            defaultChecked={Boolean(field.defaultValue)}
          />
        </label>
      );

    default:
      return (
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {field.label}
          </label>

          <input
            type={field.type}
            className="w-full rounded-lg border px-3 py-2"
            placeholder={field.placeholder}
            defaultValue={
              field.defaultValue as string | number | undefined
            }
          />

          {field.description && (
            <p className="text-xs text-gray-500">
              {field.description}
            </p>
          )}
        </div>
      );
  }
}