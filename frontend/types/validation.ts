/**
 * ============================================================
 * SINARLabs / TM Insight
 * Sprint 3
 * Validation Types
 * ============================================================
 */

/**
 * Ralat bagi setiap medan.
 */
export type ValidationErrors = Record<string, string>;

/**
 * Keputusan proses validasi.
 */
export interface ValidationResult {
  /**
   * Adakah semua medan sah?
   */
  valid: boolean;

  /**
   * Senarai ralat mengikut ID medan.
   */
  errors: ValidationErrors;
}

/**
 * Nilai konfigurasi yang akan divalidasi.
 */
export type ConfigurationValues = Record<
  string,
  string | number | boolean | undefined
>;