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
  const date = new Date(dateStr)
  const dateOptions:Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year:'2-digit'
  }
  const formatter = new Intl.DateTimeFormat(locale, dateOptions)
  return formatter.format(date)
};

