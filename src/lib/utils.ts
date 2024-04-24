import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(num: number, currency: string) {
  return new Intl.NumberFormat("en", {
    currency,
    style: "currency",
  }).format(num);
}
