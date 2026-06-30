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
