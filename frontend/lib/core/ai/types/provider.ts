/**
 * ============================================================
 * SINAR AI Core
 * Sprint 4
 *
 * AI Provider
 * ============================================================
 */

export type AIProviderId =
  | "openai"
  | "gemini"
  | "claude"
  | "copilot"
  | "deepseek"
  | "grok";

/**
 * Metadata provider AI.
 *
 * AI Core tidak memiliki provider.
 * Ia hanya mengenali ID provider.
 */
export interface AIProvider {

  id: AIProviderId;

  name: string;

}