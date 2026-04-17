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

        {/* Swiper CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* GSAP for Animations */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />

        {/* Swiper JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Initialize GSAP Animations */}
        <Script id="gsap-init" strategy="afterInteractive">
          {`
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
              gsap.registerPlugin(ScrollTrigger);

              // Fade up animations
              gsap.utils.toArray('.animate-fade-up').forEach((element) => {
                gsap.from(element, {
                  y: 30,
                  opacity: 0,
                  duration: 0.6,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    once: true,
                  },
                });
              });

              // Scale up animations
              gsap.utils.toArray('.animate-scale-up').forEach((element) => {
                gsap.from(element, {
                  scale: 0.95,
                  opacity: 0,
                  duration: 0.6,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    once: true,
                  },
                });
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
