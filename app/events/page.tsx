import type { Metadata } from "next";
import { EventsHero } from "@/components/events/EventsHero";
import { LiveEventFacts, EventFlow, EventsCompare, SpeakerSetups } from "@/components/events/EventsSections";
import { DemoSection } from "@/components/sections/DemoSection";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: { absolute: "Vivra Events — Live AI Translation for Conferences & Events" },
  description:
    "Real-time AI translation for conferences, panels, meetings and live presentations. Guests listen in their own language on their own phone — no app, no headsets, no booths.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Vivra Events — One stage. Every language.",
    description: "Real-time AI translation for conferences, events, panels and live presentations.",
    url: `${SITE.url}/events`,
    images: [{ url: "/og/events.png", width: 1200, height: 630, alt: "Vivra Events" }],
  },
  twitter: { card: "summary_large_image", title: "Vivra Events — One stage. Every language.", images: ["/og/events.png"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vivra Events",
  brand: { "@type": "Brand", name: "Vivra" },
  description: "Real-time AI translation for conferences, corporate events, panels, seminars, meetings and international summits.",
  url: `${SITE.url}/events`,
  category: "Live translation software",
};

export default function EventsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EventsHero />
      <LiveEventFacts />
      <EventFlow />
      <EventsCompare />
      <SpeakerSetups />
      <DemoSection
        index="06"
        lines={["Bring Live Translation", "to Your Next Event."]}
        copy="Tell us the venue, the expected audience and the languages in the room. We'll walk you through a live session and how guests join."
        product="Vivra Events"
        variant="brand"
        tone
        actions
      />
    </>
  );
}
