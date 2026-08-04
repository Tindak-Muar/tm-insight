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
 * Nilai yang boleh disimpan oleh sesuatu medan.
 */
export type FieldValue =
  | string
  | number
  | boolean
  | undefined;

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
   * Nilai lalai daripada Configuration Registry.
   */
  defaultValue?: FieldValue;

  /**
   * Nilai semasa.
   *
   * Digunakan oleh Configuration Form ketika pengguna
   * mengubah nilai konfigurasi.
   */
  value?: FieldValue;

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