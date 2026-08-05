/**
 * ============================================================
 * TM Insight
 * Integration Core
 *
 * Request
 * ============================================================
 */

export interface IntegrationRequest {

  /**
   * ID provider.
   */
  providerId: string;

  /**
   * Nama operasi.
   */
  operation: string;

  /**
   * Payload operasi.
   */
  payload?: unknown;

}