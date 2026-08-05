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

import {
  openAIAdapter,
} from "./providers";

/**
 * Registry semua Provider Adapter.
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

/**
 * ============================================================
 * Auto Registration
 * ============================================================
 */

registerAdapter(openAIAdapter);