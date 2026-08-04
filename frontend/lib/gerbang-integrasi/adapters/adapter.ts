/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Gerbang Integrasi
 *
 * Provider Adapter Interface
 * ============================================================
 */

import {
  ConnectionTestRequest,
  ConnectionTestResult,
} from "@/types/connection";

import {
  ProviderConfigurationValues,
} from "@/types/configurationValue";

/**
 * Kontrak rasmi semua Provider Adapter.
 *
 * Semua adapter WAJIB melaksanakan interface ini.
 */
export interface ProviderAdapter {
  /**
   * ID penyedia.
   */
  readonly providerId: string;

  /**
   * Menguji sambungan.
   */
  testConnection(
    request: ConnectionTestRequest
  ): Promise<ConnectionTestResult>;

  /**
   * Menyahkan konfigurasi.
   */
  disconnect?(): Promise<void>;

  /**
   * Menyemak sama ada konfigurasi sah.
   */
  validateConfiguration?(
    configuration: ProviderConfigurationValues
  ): Promise<boolean>;
}