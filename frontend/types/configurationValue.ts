/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Enjin Konfigurasi Penyedia
 *
 * Domain:
 * Nilai Konfigurasi Penyedia
 * ============================================================
 */

/**
 * Nilai bagi satu medan konfigurasi.
 */
export type ConfigurationValue =
  | string
  | number
  | boolean
  | null;

/**
 * Koleksi nilai konfigurasi bagi sesuatu penyedia.
 */
export interface ProviderConfigurationValues {
  /**
   * ID penyedia.
   * Contoh:
   * openai
   * telegram
   * google-drive
   */
  providerId: string;

  /**
   * Senarai nilai konfigurasi.
   *
   * Contoh:
   * {
   *   apiKey: "...",
   *   model: "gpt-5.5",
   *   baseUrl: "https://api.openai.com"
   * }
   */
  values: Record<string, ConfigurationValue>;

  /**
   * Tarikh konfigurasi dicipta.
   */
  createdAt?: Date;

  /**
   * Tarikh konfigurasi dikemas kini.
   */
  updatedAt?: Date;
}