import { Button } from "@/components/ui/Button";
import { Label, MaskedHeading } from "@/components/typography/Label";

/** Loud close for the master brand: one idea, then the two products (Events left, Mosque right). */
export function ClosingBand() {
  return (
    <section className="on-ink bg-ink" aria-labelledby="close-heading">
      <div className="container-v flex flex-col items-center py-20 text-center md:py-32">
        <Label index="08" className="[&_span]:text-white/60">
          Vivra
        </Label>
        <MaskedHeading as="h2" id="close-heading" lines={["One voice.", "Every language."]} className="t-loud mt-8 text-white" />
        <p className="mt-8 max-w-[44ch] text-[clamp(1rem,1.4vw,1.25rem)] leading-snug text-white/70" data-reveal>
          Real-time AI translation for events and places of worship.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <Button href="/events" variant="white" size="lg">
            Vivra Events
          </Button>
          <Button href="/mosque" variant="white" size="lg">
            Vivra Mosque
          </Button>
        </div>
      </div>
    </section>
  );
}
