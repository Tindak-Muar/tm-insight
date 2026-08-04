"use client";

import { ConfigurationField as Field, FieldValue } from "@/types/field";

interface ConfigurationFieldProps {
  field: Field;

  value: FieldValue;

  error?: string;

  onChange: (value: FieldValue) => void;
}

export default function ConfigurationField({
  field,
  value,
  error,
  onChange,
}: ConfigurationFieldProps) {
  switch (field.type) {
    case "textarea":
      return (
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {field.label}
          </label>

          <textarea
            className={`w-full rounded-lg border px-3 py-2 ${
              error ? "border-red-500" : ""
            }`}
            placeholder={field.placeholder}
            value={String(value ?? "")}
            onChange={(event) =>
              onChange(event.target.value)
            }
          />

          {field.description && (
            <p className="text-xs text-gray-500">
              {field.description}
            </p>
          )}

          {error && (
            <p className="text-xs text-red-600">
              {error}
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
            className={`w-full rounded-lg border px-3 py-2 ${
              error ? "border-red-500" : ""
            }`}
            value={String(value ?? "")}
            onChange={(event) =>
              onChange(event.target.value)
            }
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

          {error && (
            <p className="text-xs text-red-600">
              {error}
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
            checked={Boolean(value)}
            onChange={(event) =>
              onChange(event.target.checked)
            }
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
            className={`w-full rounded-lg border px-3 py-2 ${
              error ? "border-red-500" : ""
            }`}
            placeholder={field.placeholder}
            value={value === undefined ? "" : String(value)}
            onChange={(event) => {
              if (field.type === "number") {
                onChange(Number(event.target.value));
                return;
              }

              onChange(event.target.value);
            }}
          />

          {field.description && (
            <p className="text-xs text-gray-500">
              {field.description}
            </p>
          )}

          {error && (
            <p className="text-xs text-red-600">
              {error}
            </p>
          )}
        </div>
      );
  }
}