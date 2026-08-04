/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Enjin Konfigurasi Penyedia
 *
 * Domain:
 * Konfigurasi Penyedia
 * ============================================================
 */

import { ConfigurationField } from "./field";

/**
 * Definisi konfigurasi bagi setiap penyedia.
 */
export interface ProviderConfiguration {
  /**
   * ID penyedia.
   * Contoh:
   * openai
   * telegram
   * google-drive
   */
  providerId: string;

  /**
   * Nama konfigurasi.
   */
  title: string;

  /**
   * Keterangan konfigurasi.
   */
  description?: string;

  /**
   * Senarai medan konfigurasi.
   */
  fields: ConfigurationField[];
}