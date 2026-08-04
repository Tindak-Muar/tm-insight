/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Configuration Service
 * ============================================================
 */

import { ProviderConfiguration } from "@/types/configuration";
import { ProviderConfigurationValues } from "@/types/configurationValue";

import { configurationRegistry } from "../configurationRegistry";

import {
  loadConfiguration,
  saveConfiguration,
  removeConfiguration,
  hasConfiguration,
} from "../configurationStore";

/**
 * Mendapatkan semua metadata konfigurasi.
 */
export function getProviderConfigurations(): ProviderConfiguration[] {
  return configurationRegistry;
}

/**
 * Mendapatkan metadata konfigurasi berdasarkan ID penyedia.
 */
export function getProviderConfiguration(
  providerId: string
): ProviderConfiguration | undefined {
  return configurationRegistry.find(
    (configuration) => configuration.providerId === providerId
  );
}

/**
 * Menyemak sama ada metadata konfigurasi wujud.
 */
export function hasProviderConfiguration(
  providerId: string
): boolean {
  return configurationRegistry.some(
    (configuration) => configuration.providerId === providerId
  );
}

/**
 * Mendapatkan metadata dan nilai konfigurasi.
 */
export function getConfiguration(
  providerId: string
): {
  configuration: ProviderConfiguration;
  values?: ProviderConfigurationValues;
} | null {

  const configuration =
    getProviderConfiguration(providerId);

  if (!configuration) {
    return null;
  }

  return {
    configuration,
    values: loadConfiguration(providerId),
  };
}

/**
 * Menyimpan konfigurasi.
 */
export function saveProviderConfiguration(
  values: ProviderConfigurationValues
): void {
  saveConfiguration(values);
}

/**
 * Memadam konfigurasi.
 */
export function deleteProviderConfiguration(
  providerId: string
): boolean {
  return removeConfiguration(providerId);
}

/**
 * Menyemak sama ada konfigurasi telah disimpan.
 */
export function configurationExists(
  providerId: string
): boolean {
  return hasConfiguration(providerId);
}