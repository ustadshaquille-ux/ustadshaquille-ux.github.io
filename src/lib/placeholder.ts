/* ══════════════════════════════════════════════════════════════════
   PLACEHOLDER
   Aturannya satu: nilai apa pun yang diawali "[ADD" dianggap BELUM
   DIISI. Komponen tidak pernah merender link rusak — ia merender chip
   putus-putus supaya jelas apa yang masih kurang, dan tidak ada
   informasi yang dikarang untuk menutupinya.
   ══════════════════════════════════════════════════════════════════ */

export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true;
  return value.trim().toUpperCase().startsWith("[ADD");
}

/** Kebalikannya, dipakai untuk memfilter daftar. */
export function isFilled(value: string | undefined | null): value is string {
  return !isPlaceholder(value);
}

/** Buang tanda kurung siku supaya enak dibaca di chip. */
export function placeholderLabel(value: string): string {
  return value.replace(/^\[|\]$/g, "").trim();
}
