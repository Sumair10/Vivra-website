import type { Metadata } from "next";
import { MosqueHero, MosqueStory, MosqueAccess, MosqueLanguages, MosqueCapabilities, MosquePhotograph } from "@/components/mosque/MosqueSections";
import { DemoSection } from "@/components/sections/DemoSection";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: { absolute: "Vivra Mosque | Real-Time Sermon Translation" },
  description:
    "Real-time AI translation for Friday khutbahs, lectures and announcements. Worshippers listen in their preferred language on their own phone, no app required.",
  alternates: { canonical: "/mosque" },
  openGraph: {
    title: "Vivra Mosque | Every sermon. Understood.",
    description: "Real-time AI translation helps worshippers understand sermons in their preferred language directly from their phone.",
    url: `${SITE.url}/mosque`,
    images: [{ url: "/og/mosque.png", width: 1200, height: 630, alt: "Vivra Mosque" }],
  },
  twitter: { card: "summary_large_image", title: "Vivra Mosque | Every sermon. Understood.", images: ["/og/mosque.png"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vivra Mosque",
  brand: { "@type": "Brand", name: "Vivra" },
  description: "Real-time AI translation for mosque sermons, lectures and announcements, delivered to worshippers' phones.",
  url: `${SITE.url}/mosque`,
  category: "Live translation software",
};

export default function MosquePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MosqueHero />
      <MosqueStory />
      <MosqueAccess />
      <MosqueLanguages />
      <MosqueCapabilities />
      <MosquePhotograph />
      <DemoSection
        index="06"
        lines={["Help every worshipper", "understand the message."]}
        copy="Tell us about your mosque and the languages your congregation speaks. We'll set up a live session so you can hear it in your own space."
        product="Vivra Mosque"
        variant="brand"
        tone
      />
    </>
  );
}
