/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Enjin Konfigurasi Penyedia
 *
 * Configuration Store
 * ============================================================
 */

import {
  ProviderConfigurationValues,
} from "@/types/configurationValue";

/**
 * Simpanan sementara konfigurasi.
 *
 * Sprint 3:
 * Menggunakan Memory Store.
 *
 * Sprint akan datang:
 * Prisma / PostgreSQL / Supabase
 */
const configurationStore = new Map<
  string,
  ProviderConfigurationValues
>();

/**
 * Mendapatkan konfigurasi penyedia.
 */
export function loadConfiguration(
  providerId: string
): ProviderConfigurationValues | undefined {
  return configurationStore.get(providerId);
}

/**
 * Menyimpan konfigurasi penyedia.
 */
export function saveConfiguration(
  configuration: ProviderConfigurationValues
): void {
  configurationStore.set(
    configuration.providerId,
    configuration
  );
}

/**
 * Memadam konfigurasi penyedia.
 */
export function removeConfiguration(
  providerId: string
): boolean {
  return configurationStore.delete(providerId);
}

/**
 * Menyemak sama ada konfigurasi wujud.
 */
export function hasConfiguration(
  providerId: string
): boolean {
  return configurationStore.has(providerId);
}

/**
 * Mendapatkan semua konfigurasi.
 */
export function getAllConfigurations(): ProviderConfigurationValues[] {
  return Array.from(configurationStore.values());
}

/**
 * Mengosongkan semua konfigurasi.
 */
export function clearConfigurations(): void {
  configurationStore.clear();
}