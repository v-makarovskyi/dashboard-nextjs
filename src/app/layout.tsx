import type { Metadata } from "next";
import { jost } from "./ui/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jost.className}`}>{children}</body>
    </html>
  );
}
