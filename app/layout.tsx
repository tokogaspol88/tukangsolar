import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tukang Solar - Aditif BBM Terpercaya #1 Indonesia",
  description:
    "Satu-satunya toko aditif dengan rekor penjualan 150.000+ botol & rating 5.0. Aditif Solar, Aditif Bensin, Aditif Oli, Aditif Solar Pro.",
  keywords:
    "aditif solar, aditif bensin, aditif oli, tukang solar, aditif bbm, fuel additive indonesia",
  openGraph: {
    title: "Tukang Solar - Aditif BBM Terpercaya #1 Indonesia",
    description:
      "150.000+ botol terjual. Rating 5.0/5.0. Aditif BBM terpercaya di Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
