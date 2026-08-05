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
  testConnection,
} from "@/lib/gerbang-integrasi/services/configurationEngine";

import {
  ConnectionTestRequest,
} from "@/types/connection";

import {
  ProviderConfigurationValues,
} from "@/types/configurationValue";

export function useProviderConfiguration() {

  /**
   * Mendapatkan konfigurasi.
   */
  function load(
    providerId: string
  ) {
    return loadConfiguration(providerId);
  }

  /**
   * Menyimpan konfigurasi.
   */
  function save(
    configuration: ProviderConfigurationValues
  ) {
    saveConfiguration(configuration);
  }

  /**
   * Reset konfigurasi.
   */
  function reset(
    providerId: string
  ) {
    return resetConfiguration(providerId);
  }

  /**
   * Uji sambungan.
   */
  async function test(
    request: ConnectionTestRequest
  ) {
    return testConnection(request);
  }

  return {
    load,
    save,
    reset,
    test,
  };
}