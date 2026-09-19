import { DemoForm } from "@/components/forms/DemoForm";
import { Label, MaskedHeading } from "@/components/typography/Label";
import { SITE } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

type Product = "Vivra Mosque" | "Vivra Events" | "General Vivra Inquiry";

/** Shared closing CTA + concise demo form. Heading changes per product. */
export function DemoSection({
  index = "08",
  lines,
  copy,
  product = "General Vivra Inquiry",
  variant = "ink",
  tone = false,
}: {
  index?: string;
  lines: React.ReactNode[];
  copy: string;
  product?: Product;
  variant?: "ink" | "brand";
  tone?: boolean;
}) {
  return (
    <section id="demo" className={cn("scroll-mt-20 rule-t", tone && "tone-soft")} aria-labelledby="demo-heading">
      <div className="container-v grid grid-cols-4 gap-x-8 py-20 md:grid-cols-12 md:py-32">
        <div className="col-span-4 md:col-span-5">
          <Label index={index}>Request a demo</Label>
          <MaskedHeading as="h2" id="demo-heading" lines={lines} className="t-display mt-6" />
          <p className="t-lead mt-8 max-w-[38ch]" data-reveal>
            {copy}
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-6 text-sm" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <div>
              <dt className="t-label">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${SITE.email}`} className="text-primary hover:text-brand-text">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="t-label">Phone</dt>
              <dd className="mt-2">
                <a href={SITE.phoneHref} className="text-primary hover:text-brand-text">
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="t-label">Global HQ</dt>
              <dd className="mt-2 text-primary">{SITE.location}</dd>
            </div>
          </dl>
        </div>
        <div className="col-span-4 mt-14 md:col-span-6 md:col-start-7 md:mt-0" data-reveal style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
          <DemoForm defaultProduct={product} variant={variant} />
        </div>
      </div>
    </section>
  );
}
