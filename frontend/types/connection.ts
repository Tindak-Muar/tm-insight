/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Enjin Konfigurasi Penyedia
 *
 * Domain:
 * Connection
 * ============================================================
 */

/**
 * Status keputusan ujian sambungan.
 */
export type ConnectionTestStatus =
  | "success"
  | "failed";

/**
 * Keputusan ujian sambungan.
 */
export interface ConnectionTestResult {
  /**
   * Status ujian.
   */
  status: ConnectionTestStatus;

  /**
   * Sama ada sambungan berjaya.
   */
  success: boolean;

  /**
   * Mesej kepada pengguna.
   */
  message: string;

  /**
   * Masa ujian dijalankan.
   */
  testedAt: Date;

  /**
   * Tempoh ujian (ms).
   */
  duration?: number;

  /**
   * Maklumat tambahan.
   */
  details?: Record<string, unknown>;
}

/**
 * Permintaan ujian sambungan.
 */
export interface ConnectionTestRequest {
  /**
   * ID penyedia.
   */
  providerId: string;
}