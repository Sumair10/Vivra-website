import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/media/Figure";
import { Label, MaskedHeading } from "@/components/typography/Label";

type Img = { src: string; w: number; h: number; alt: string };

/** Shared product hero: headline left, supporting copy right, cinematic image below touching the grid. */
export function ProductHero({
  product,
  lines,
  copy,
  primary,
  secondary,
  image,
  imageLabel,
  strip,
}: {
  product: string;
  lines: React.ReactNode[];
  copy: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  image: Img;
  imageLabel: string;
  strip: string[];
}) {
  return (
    <section className="pt-16 md:pt-[72px]" aria-labelledby="hero-heading">
      <div className="container-v">
        <div className="grid grid-cols-4 rule-t md:grid-cols-12">
          <div className="col-span-4 py-12 md:col-span-8 md:py-20 md:pr-12 lg:py-24">
            <Label index="01" brand>
              {product}
            </Label>
            <MaskedHeading as="h1" id="hero-heading" lines={lines} className="t-hero mt-8" />
          </div>
          <div className="col-span-4 flex flex-col justify-end gap-8 border-t border-line py-10 md:col-span-4 md:border-l md:border-t-0 md:py-20 md:pl-12 lg:py-24">
            <p className="t-lead max-w-[34ch]" data-reveal style={{ "--reveal-delay": "500ms" } as React.CSSProperties}>
              {copy}
            </p>
            <div className="flex flex-wrap items-center gap-4" data-reveal style={{ "--reveal-delay": "620ms" } as React.CSSProperties}>
              <Button href={primary.href} size="lg" variant="brand">
                {primary.label}
              </Button>
              <Button href={secondary.href} variant="ghost" size="lg">
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>

        <div className="t-label flex flex-wrap items-center gap-x-6 gap-y-3 rule-t py-4" data-reveal style={{ "--reveal-delay": "700ms" } as React.CSSProperties}>
          {strip.map((s, i) => (
            <span key={s} className="flex items-center gap-6">
              {i > 0 && <span className="text-tertiary/50">·</span>}
              {s}
            </span>
          ))}
        </div>

        <Figure
          src={image.src}
          width={image.w}
          height={image.h}
          alt={image.alt}
          priority
          sizes="(min-width: 1440px) 1376px, 96vw"
          className="rule-t rule-b aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9]"
          label={imageLabel}
          shade={0.35}
        />
      </div>
    </section>
  );
}
