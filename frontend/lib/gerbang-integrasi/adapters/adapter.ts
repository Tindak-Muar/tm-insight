/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Adapter Interface
 * ============================================================
 */

import { ProviderConfigurationValues } from "@/types/configurationValue";

/**
 * Keputusan ujian sambungan.
 */
export interface ConnectionResult {
  success: boolean;

  message: string;

  responseTime?: number;
}

/**
 * Kontrak rasmi semua adapter penyedia.
 */
export interface ProviderAdapter {
  /**
   * ID penyedia.
   */
  providerId: string;

  /**
   * Menyemak konfigurasi.
   */
  validate(
    configuration: ProviderConfigurationValues
  ): boolean;

  /**
   * Menguji sambungan.
   */
  testConnection(
    configuration: ProviderConfigurationValues
  ): Promise<ConnectionResult>;
}