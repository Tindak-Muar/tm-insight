/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Adapter Registry
 * ============================================================
 */

import { ProviderAdapter } from "./adapter";

/**
 * Registry rasmi semua adapter penyedia.
 *
 * Sprint 3:
 * Masih kosong.
 *
 * Adapter akan didaftarkan secara berperingkat.
 */
const adapterRegistry = new Map<string, ProviderAdapter>();

/**
 * Mendaftarkan adapter.
 */
export function registerAdapter(
  adapter: ProviderAdapter
): void {
  adapterRegistry.set(
    adapter.providerId,
    adapter
  );
}

/**
 * Mendapatkan adapter berdasarkan ID penyedia.
 */
export function getAdapter(
  providerId: string
): ProviderAdapter | undefined {
  return adapterRegistry.get(providerId);
}

/**
 * Menyemak sama ada adapter telah didaftarkan.
 */
export function hasAdapter(
  providerId: string
): boolean {
  return adapterRegistry.has(providerId);
}

/**
 * Mendapatkan semua adapter.
 */
export function getAdapters(): ProviderAdapter[] {
  return Array.from(
    adapterRegistry.values()
  );
}