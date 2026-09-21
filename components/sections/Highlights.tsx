import { HeroBento } from "@/components/hero/HeroBento";
import { RequestCall } from "@/components/forms/RequestCall";
import { Button } from "@/components/ui/Button";
import { Label, MaskedHeading } from "@/components/typography/Label";
import { SITE } from "@/lib/constants/site";

/** Why Vivra: heading, the highlight cards, and the two ways to reach the team. */
export function Highlights() {
  return (
    <section id="why" aria-labelledby="why-heading" className="scroll-mt-20 rule-b py-14 md:py-24">
      <div className="container-v">
        <div className="flex flex-col items-center text-center">
          <Label index="03">Why Vivra</Label>
          <MaskedHeading as="h2" id="why-heading" lines={["Built for every", "listener."]} className="t-display mt-6" />
          <p className="t-lead mt-6 max-w-[50ch]" data-reveal>
            Vivra turns one live voice into each listener’s own language, spoken and subtitled, on the phone they already carry.
          </p>
        </div>

        <div className="mt-10 md:mt-14">
          <HeroBento />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row" data-reveal>
          <Button href={`mailto:${SITE.email}`} variant="ink" size="lg">
            Contact us
          </Button>
          <RequestCall variant="outline" size="lg" />
        </div>
      </div>
    </section>
  );
}
