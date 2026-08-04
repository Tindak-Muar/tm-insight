/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Enjin Konfigurasi Penyedia
 *
 * Domain:
 * Medan Konfigurasi
 * ============================================================
 */

/**
 * Jenis medan yang disokong oleh Enjin Konfigurasi.
 */
export type FieldType =
  | "text"
  | "password"
  | "email"
  | "url"
  | "number"
  | "textarea"
  | "select"
  | "switch";

/**
 * Pilihan untuk medan jenis "select".
 */
export interface FieldOption {
  label: string;
  value: string;
}

/**
 * Definisi satu medan konfigurasi.
 */
export interface ConfigurationField {
  /**
   * ID unik medan.
   */
  id: string;

  /**
   * Label yang dipaparkan kepada pengguna.
   */
  label: string;

  /**
   * Jenis medan.
   */
  type: FieldType;

  /**
   * Keterangan ringkas.
   */
  description?: string;

  /**
   * Placeholder.
   */
  placeholder?: string;

  /**
   * Nilai lalai.
   */
  defaultValue?: string | number | boolean;

  /**
   * Medan wajib diisi.
   */
  required: boolean;

  /**
   * Medan boleh disunting.
   */
  editable?: boolean;

  /**
   * Pilihan bagi medan jenis select.
   */
  options?: FieldOption[];
}