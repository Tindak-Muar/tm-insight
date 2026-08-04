/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Configuration Engine
 *
 * Facade
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

/**
 * ============================================================
 * Alias API untuk UI
 * ============================================================
 */

export {
  getConfiguration as loadConfiguration,
  saveProviderConfiguration as saveConfiguration,
  deleteProviderConfiguration as resetConfiguration,
} from "./configurationService";