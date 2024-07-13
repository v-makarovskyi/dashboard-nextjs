import { Revenue } from "./definitions";

export const generateYAxis = (revenue: Revenue[]) => {
  const yLabelsAxis = [];
  const highestRecord = Math.max(...revenue.map((r) => r.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;
  for (let i = topLabel; i >= 0; i -= 1000) {
    yLabelsAxis.push(`$${i / 1000}K`);
  }
  return { yLabelsAxis, topLabel };
};

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
  });
};

export const formatDate = (dateStr: string, locale: string = "en-US") => {
  const date = new Date(dateStr);
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  };
  const formatter = new Intl.DateTimeFormat(locale, dateOptions);
  return formatter.format(date);
};

export function generatePaginaton(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  }
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}
