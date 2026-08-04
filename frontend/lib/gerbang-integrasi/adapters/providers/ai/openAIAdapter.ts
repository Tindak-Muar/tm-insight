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
 */
export const openAIAdapter: ProviderAdapter = {
  providerId: "openai",

  /**
   * Ujian sambungan.
   */
  async testConnection(
    request: ConnectionTestRequest
  ): Promise<ConnectionTestResult> {
    console.log(
      `[OpenAI Adapter] Testing ${request.providerId}...`
    );

    // Simulasi kelewatan rangkaian
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    return {
      success: true,
      status: "success",
      message: "Mock connection successful.",
      testedAt: new Date(),
      duration: 500,
      details: {
        provider: "OpenAI",
        mode: "mock",
      },
    };
  },

  /**
   * Validasi konfigurasi.
   */
  async validateConfiguration(
    configuration: ProviderConfigurationValues
  ): Promise<boolean> {
    const apiKey = configuration.values["apiKey"];

    return (
      typeof apiKey === "string" &&
      apiKey.trim().length > 0
    );
  },

  /**
   * Putuskan sambungan.
   */
  async disconnect(): Promise<void> {
    console.log(
      "[OpenAI Adapter] Disconnected."
    );
  },
};