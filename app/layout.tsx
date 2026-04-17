import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI Τεκμηρίωση για Ψυχοθεραπευτές | MedScribe.gr",
  description:
    "Εξοικονομήστε 5 ώρες/εβδομάδα με AI τεκμηρίωση συνεδριών. Αυτόματες κλινικές σημειώσεις σε SOAP, DAP, BIRP, GIRP. GDPR compliant.",
  keywords: [
    "AI τεκμηρίωση",
    "ψυχοθεραπεία",
    "κλινικές σημειώσεις",
    "SOAP",
    "DAP",
    "BIRP",
    "GIRP",
    "ψυχολογία",
    "συμβουλευτική",
  ],
  openGraph: {
    title: "MedScribe.gr - AI Τεκμηρίωση για Ψυχοθεραπευτές",
    description:
      "Εξοικονομήστε 5 ώρες/εβδομάδα με AI τεκμηρίωση συνεδριών.",
    type: "website",
    locale: "el_GR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className="scroll-smooth">
      <head>
        {/* Phosphor Icons */}
        <Script
          src="https://unpkg.com/@phosphor-icons/web"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
