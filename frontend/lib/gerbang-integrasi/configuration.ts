/**
 * ============================================================
 * SINARLabs / TM Insight
 * Sprint 3 - Enjin Konfigurasi Penyedia
 * Fail: lib/gerbang-integrasi/configuration.ts
 * ============================================================
 */

import { providerRegistry } from "./providerRegistry";
import { Provider } from "@/types/provider";

/**
 * Mendapatkan semua penyedia
 */
export function getProviders(): Provider[] {
  return providerRegistry;
}

/**
 * Mendapatkan penyedia berdasarkan ID
 */
export function getProviderById(id: string): Provider | undefined {
  return providerRegistry.find((provider) => provider.id === id);
}

/**
 * Menyemak sama ada penyedia wujud
 */
export function providerExists(id: string): boolean {
  return providerRegistry.some((provider) => provider.id === id);
}

/**
 * Mendapatkan semua penyedia mengikut kategori
 */
export function getProvidersByCategory(
  kategori: Provider["kategori"]
): Provider[] {
  return providerRegistry.filter(
    (provider) => provider.kategori === kategori
  );
}

/**
 * Mendapatkan semua penyedia yang boleh dikonfigurasi
 */
export function getConfigurableProviders(): Provider[] {
  return providerRegistry.filter(
    (provider) => provider.configurable
  );
}

/**
 * Mendapatkan semua penyedia yang aktif
 */
export function getEnabledProviders(): Provider[] {
  return providerRegistry.filter(
    (provider) => provider.enabled
  );
}