import type { Metadata } from "next";
import { VivraHero } from "@/components/hero/VivraHero";
import { Highlights } from "@/components/sections/Highlights";
import { ProductPortals } from "@/components/products/ProductPortals";
import { AudioFlow } from "@/components/sections/AudioFlow";
import { LanguageOrbit } from "@/components/sections/LanguageOrbit";
import { Technology } from "@/components/sections/Technology";
import { Solutions } from "@/components/sections/Solutions";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: { absolute: "Vivra — Real-Time AI Translation" },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#org`,
      name: "Vivra",
      legalName: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/brand/vivra-mark.png`,
      email: SITE.email,
      telephone: SITE.phone,
      address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#site`,
      url: SITE.url,
      name: "Vivra",
      publisher: { "@id": `${SITE.url}/#org` },
    },
    {
      "@type": "SoftwareApplication",
      name: "Vivra",
      applicationCategory: "CommunicationApplication",
      operatingSystem: "Web",
      description: "AI-powered real-time speech translation for mosques, events, conferences and meetings.",
      publisher: { "@id": `${SITE.url}/#org` },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <VivraHero />
      <ProductPortals />
      <Highlights />
      <AudioFlow />
      <LanguageOrbit />
      <Technology />
      <Solutions />
      <ClosingBand />
    </>
  );
}
