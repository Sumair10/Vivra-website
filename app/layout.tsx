import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Noto_Naskh_Arabic, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { BOOT_SCRIPT } from "@/lib/brand";
import { SITE } from "@/lib/constants/site";
import { Providers } from "@/components/layout/Providers";
import { Nav } from "@/components/navigation/Nav";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap", weight: ["300", "400", "500"] });
const arabic = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-arabic", display: "swap", weight: ["400", "500"] });
const devanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-devanagari", display: "swap", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Vivra — Real-Time AI Translation", template: "%s — Vivra" },
  description:
    "Vivra translates live speech into multiple languages in real time — connecting audiences across mosques, events, conferences and conversations.",
  applicationName: "Vivra",
  openGraph: {
    type: "website",
    siteName: "Vivra",
    locale: "en_US",
    url: SITE.url,
    title: "Vivra — Real-Time AI Translation",
    description: "Live speech, understood in every language. AI-powered real-time translation for mosques, events and conferences.",
    images: [{ url: "/og/vivra.png", width: 1200, height: 630, alt: "Vivra — Real-Time AI Translation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivra — Real-Time AI Translation",
    description: "Live speech, understood in every language.",
    images: ["/og/vivra.png"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${arabic.variable} ${devanagari.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
