import { Button } from "@/components/ui/Button";
import { Label, MaskedHeading } from "@/components/typography/Label";

/** Loud close for the master brand: a statement and the two products. No demo form here. */
export function ClosingBand() {
  return (
    <section className="on-ink bg-ink" aria-labelledby="close-heading">
      <div className="container-v flex flex-col items-center py-20 text-center md:py-32">
        <Label index="08" className="[&_span]:text-white/60">
          Vivra
        </Label>
        <MaskedHeading as="h2" id="close-heading" lines={["One intelligence.", "Every language."]} className="t-loud mt-8 text-white" />
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3" data-reveal>
          <Button href="/mosque" variant="white" size="lg">
            Vivra Mosque
          </Button>
          <Button href="/events" variant="white" size="lg">
            Vivra Events
          </Button>
        </div>
      </div>
    </section>
  );
}
