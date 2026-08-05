/**
 * ============================================================
 * SINAR AI Core
 * Sprint 4
 *
 * Provider Resolver
 * ============================================================
 */

import { AIProviderId } from "../types/provider";

/**
 * Menentukan provider AI yang akan digunakan.
 *
 * Sprint 4:
 * Menggunakan provider yang diminta.
 *
 * Sprint akan datang:
 * - Default Provider
 * - Fallback Provider
 * - Auto Routing
 */
export class ProviderResolver {

  resolve(
    provider: AIProviderId
  ): AIProviderId {

    return provider;

  }

}