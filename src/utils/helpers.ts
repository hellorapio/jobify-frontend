export function formatCurrency(num: number, currency: string) {
  return new Intl.NumberFormat("en", {
    currency,
    style: "currency",
  }).format(num);
}
