/**
 * ============================================================
 * SINARLabs / TM Insight
 * Sprint 3
 * Validation Service
 * ============================================================
 */

import {
  ConfigurationValues,
  ValidationErrors,
  ValidationResult,
} from "@/types/validation";

import { ConfigurationField } from "@/types/field";

export class ValidationService {
  /**
   * Menjalankan validasi terhadap semua medan konfigurasi.
   */
  static validate(
    fields: ConfigurationField[],
    values: ConfigurationValues
  ): ValidationResult {
    const errors: ValidationErrors = {};

    for (const field of fields) {
      const value = values[field.id];

      // Required
      if (field.required && this.isEmpty(value)) {
        errors[field.id] = `${field.label} diperlukan.`;
        continue;
      }

      // Skip validation jika kosong & optional
      if (this.isEmpty(value)) {
        continue;
      }

      switch (field.type) {
        case "url":
          if (!this.isValidUrl(String(value))) {
            errors[field.id] = "URL tidak sah.";
          }
          break;

        case "email":
          if (!this.isValidEmail(String(value))) {
            errors[field.id] = "Alamat e-mel tidak sah.";
          }
          break;

        case "number":
          if (Number.isNaN(Number(value))) {
            errors[field.id] = "Nilai mestilah nombor.";
          }
          break;

        case "select":
          if (
            field.options &&
            !field.options.some((option) => option.value === value)
          ) {
            errors[field.id] = "Pilihan tidak sah.";
          }
          break;
      }
    }

    return {
      valid: Object.keys(errors).length === 0,
      errors,
    };
  }

  /**
   * Menentukan sama ada nilai kosong.
   */
  private static isEmpty(
    value: string | number | boolean | undefined
  ): boolean {
    if (value === undefined) {
      return true;
    }

    if (typeof value === "string") {
      return value.trim() === "";
    }

    return false;
  }

  /**
   * Validasi URL.
   */
  private static isValidUrl(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validasi e-mel.
   */
  private static isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
}