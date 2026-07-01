// Formátovanie cien (EUR, bez DPH) v slovenskom formáte.

const formatter = new Intl.NumberFormat("sk-SK", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

export function formatPrice(value: number | null): string {
  if (value === null) return "na vyžiadanie";
  return formatter.format(value);
}

// Formátovanie sumy v EUR s voliteľným počtom desatinných miest
// (napr. cena za stranu 0,009 €).
export function formatEur(value: number, min = 2, max = 2): string {
  return `${value.toLocaleString("sk-SK", {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  })} €`;
}
