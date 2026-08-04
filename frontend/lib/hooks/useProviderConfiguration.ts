/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Hook:
 * Provider Configuration
 * ============================================================
 */

"use client";

import {
  loadConfiguration,
  resetConfiguration,
  saveConfiguration,
} from "@/lib/gerbang-integrasi/services/configurationEngine";

import { ProviderConfigurationValues } from "@/types/configurationValue";

export function useProviderConfiguration() {
  /**
   * Mendapatkan konfigurasi penyedia.
   */
  function load(providerId: string) {
    return loadConfiguration(providerId);
  }

  /**
   * Menyimpan konfigurasi penyedia.
   */
  function save(
    configuration: ProviderConfigurationValues
  ) {
    saveConfiguration(configuration);
  }

  /**
   * Menetapkan semula konfigurasi penyedia.
   */
  function reset(providerId: string) {
    return resetConfiguration(providerId);
  }

  return {
    load,
    save,
    reset,
  };
}