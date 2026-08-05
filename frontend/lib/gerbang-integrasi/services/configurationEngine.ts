/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Configuration Engine
 * ============================================================
 */

export {
  getProviderConfigurations,
  getProviderConfiguration,
  hasProviderConfiguration,

  getConfiguration,

  saveProviderConfiguration,

  deleteProviderConfiguration,

  configurationExists,
} from "./configurationService";

export {
  getConfiguration as loadConfiguration,
  saveProviderConfiguration as saveConfiguration,
  deleteProviderConfiguration as resetConfiguration,
} from "./configurationService";

import {
  ConnectionTestRequest,
  ConnectionTestResult,
} from "@/types/connection";

import {
  getAdapter,
} from "../adapters/adapterRegistry";

/**
 * Menguji sambungan kepada penyedia.
 */
export async function testConnection(
  request: ConnectionTestRequest
): Promise<ConnectionTestResult> {

  const adapter = getAdapter(request.providerId);

  if (!adapter) {
    return {
      success: false,
      status: "failed",
      message: `Adapter '${request.providerId}' tidak dijumpai.`,
      testedAt: new Date(),
    };
  }

  return adapter.testConnection(request);

}