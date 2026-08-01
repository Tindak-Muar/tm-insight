/**
 * Menyeragamkan nilai untuk tujuan eksport.
 */
export function exportValue(
  value: string | number | boolean | null | undefined
): string {

  if (value === null || value === undefined) {
    return "-";
  }

  if (typeof value === "string") {
    const text = value.trim();

    return text.length > 0
      ? text
      : "-";
  }

  return String(value);

}