/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Gerbang Integrasi
 *
 * OpenAI Adapter (Mock)
 * ============================================================
 */

import { ProviderAdapter } from "../../adapter";

import {
  ConnectionTestRequest,
  ConnectionTestResult,
} from "@/types/connection";

import {
  ProviderConfigurationValues,
} from "@/types/configurationValue";

/**
 * Mock Adapter untuk OpenAI.
 *
 * Sprint 3:
 * Belum membuat panggilan API sebenar.
 *
 * Sprint 4:
 * Akan menggunakan OpenAI Responses API.
 */
export const openAIAdapter: ProviderAdapter = {
  providerId: "openai",

  /**
   * Ujian sambungan.
   */
  async testConnection(
    request: ConnectionTestRequest
  ): Promise<ConnectionTestResult> {

    console.info(
      `[OpenAI Adapter] Testing connection (${request.providerId})`
    );

    const startedAt = performance.now();

    // Simulasi kelewatan rangkaian
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    const duration = Math.round(
      performance.now() - startedAt
    );

    return {
      success: true,
      status: "success",
      message:
        "Berjaya menyambung ke pelayan OpenAI (Mock).",
      testedAt: new Date(),
      duration,
      details: {
        provider: "OpenAI",
        mode: "Mock",
      },
    };
  },

  /**
   * Validasi konfigurasi.
   */
  async validateConfiguration(
    configuration: ProviderConfigurationValues
  ): Promise<boolean> {

    const apiKey = configuration.values.apiKey;

    return (
      typeof apiKey === "string" &&
      apiKey.trim().length > 0
    );

  },

  /**
   * Putuskan sambungan.
   */
  async disconnect(): Promise<void> {

    console.info(
      "[OpenAI Adapter] Connection closed."
    );

  },
};