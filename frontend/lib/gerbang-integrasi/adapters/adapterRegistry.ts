/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Gerbang Integrasi
 *
 * Adapter Registry
 * ============================================================
 */

import { ProviderAdapter } from "./adapter";

/**
 * Registry semua Provider Adapter.
 *
 * Sprint 3:
 * Masih kosong sehingga adapter pertama dibina.
 */
const registry = new Map<string, ProviderAdapter>();

/**
 * Mendaftarkan adapter.
 */
export function registerAdapter(
  adapter: ProviderAdapter
): void {
  registry.set(adapter.providerId, adapter);
}

/**
 * Mendapatkan adapter berdasarkan providerId.
 */
export function getAdapter(
  providerId: string
): ProviderAdapter | undefined {
  return registry.get(providerId);
}

/**
 * Menyemak kewujudan adapter.
 */
export function hasAdapter(
  providerId: string
): boolean {
  return registry.has(providerId);
}

/**
 * Mendapatkan semua adapter.
 */
export function getAllAdapters(): ProviderAdapter[] {
  return Array.from(registry.values());
}

/**
 * Membuang semua adapter.
 *
 * Digunakan untuk testing.
 */
export function clearAdapters(): void {
  registry.clear();
}