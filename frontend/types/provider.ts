/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Domain:
 * Penyedia
 * ============================================================
 */

/**
 * Kategori penyedia.
 */
export type ProviderCategory =
  | "ai"
  | "komunikasi"
  | "storan-awan"
  | "analitik"
  | "automasi";

/**
 * Status sambungan.
 */
export type ConnectionStatus =
  | "disambungkan"
  | "tidak-disambungkan"
  | "sedang-menyambung"
  | "ralat"
  | "nyahaktif";

/**
 * Status API.
 */
export type ApiHealthStatus =
  | "normal"
  | "amaran"
  | "kritikal"
  | "belum-diuji";

/**
 * Definisi penyedia.
 */
export interface Provider {
  /**
   * ID unik penyedia.
   */
  id: string;

  /**
   * Nama penyedia.
   */
  nama: string;

  /**
   * Kategori penyedia.
   */
  kategori: ProviderCategory;

  /**
   * Penerangan ringkas.
   */
  description: string;

  /**
   * Menyokong konfigurasi.
   */
  configurable: boolean;

  /**
   * Status aktif.
   */
  enabled: boolean;

  /**
   * Status sambungan.
   */
  connectionStatus: ConnectionStatus;

  /**
   * Status API.
   */
  apiHealth: ApiHealthStatus;
}