"use client";

import { useState } from "react";
import Image from "next/image";
import { TransitionLink } from "@/components/animation/TransitionLink";
import { Arrow, Button } from "@/components/ui/Button";
import { Label } from "@/components/typography/Label";
import { IMG } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const PORTALS = [
  {
    key: "events",
    name: "Vivra Events",
    href: "/events",
    color: "var(--events-primary)",
    img: IMG.eventsStage,
    lines: ["One stage.", "Every language."],
    copy: "Deliver live multilingual experiences across conferences, meetings and global events.",
    cta: "Explore Events",
  },
  {
    key: "mosque",
    name: "Vivra Mosque",
    href: "/mosque",
    color: "var(--mosque-primary)",
    img: IMG.mosqueMinbar,
    lines: ["Live translation,", "built for every", "congregation."],
    copy: "Listeners follow the sermon in their preferred language directly from their phone.",
    cta: "Explore Mosque",
  },
] as const;

/**
 * The two product portals. On desktop the hovered portal widens and its brand
 * edge illuminates while the other recedes; on touch they are large stacked
 * panels with a 4:5 crop.
 */
export function ProductPortals() {
  const [hover, setHover] = useState<null | "mosque" | "events">(null);

  return (
    <section id="products" className="scroll-mt-20 pb-6 md:pb-10" aria-labelledby="ecosystem-heading">
      <h2 id="ecosystem-heading" className="sr-only">
        The Vivra ecosystem: Vivra Mosque and Vivra Events
      </h2>
      <div className="container-v">
        <div className="mb-4 flex items-center justify-between md:mb-5">
          <Label index="02">The Vivra ecosystem</Label>
          <span className="t-label hidden sm:inline">Built for where people come together</span>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4" data-portals>
          {PORTALS.map((p, i) => {
            const dim = hover !== null && hover !== p.key;
            return (
              <div
                key={p.key}
                onMouseEnter={() => setHover(p.key)}
                onMouseLeave={() => setHover(null)}
                className="group relative isolate flex aspect-square flex-col justify-between overflow-hidden rounded-[16px] border border-line text-white shadow-[0_18px_40px_-28px_rgba(11,11,12,0.35)]"
                style={{ "--p": p.color } as React.CSSProperties}
              >
                <Image
                  src={p.img.src}
                  alt={p.img.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={i === 0}
                  className={cn(
                    "-z-10 object-cover transition-[transform,filter,opacity] duration-[1100ms] ease-[var(--ease-out)]",
                    "scale-[1.02] group-hover:scale-[1.07]",
                    dim ? "opacity-70 saturate-[0.6]" : "opacity-100",
                  )}
                />
                {/* tonal overlays: a top scrim keeps the product name legible on bright imagery */}
                <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-t from-black/75 via-black/15 to-black/10" />
                <span aria-hidden className="absolute inset-x-0 top-0 -z-[5] h-2/5 bg-gradient-to-b from-black/60 to-transparent" />
                <span
                  aria-hidden
                  className="absolute inset-0 -z-[5] opacity-30 transition-opacity duration-700 group-hover:opacity-55"
                  style={{ background: `linear-gradient(160deg, var(--p) 0%, transparent 60%)` }}
                />
                {/* brand edge illumination */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-[4] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ boxShadow: `inset 0 0 0 1px var(--p), inset 0 0 80px -30px var(--p)` }}
                />

                {/* stretched link: the whole panel goes to the product page */}
                <TransitionLink
                  href={p.href}
                  aria-label={`${p.cta}: ${p.name}`}
                  onFocus={() => setHover(p.key)}
                  onBlur={() => setHover(null)}
                  className="absolute inset-0 z-[1]"
                >
                  <span className="sr-only">{p.name}</span>
                </TransitionLink>

                <div className="pointer-events-none relative z-[2] flex items-start justify-between gap-4 p-4 md:p-8">
                  <div>
                    <Label index={`Product / 0${i + 1}`} className="text-white/80 [&_span]:text-white/80" />
                    <h3 className="font-display mt-3 text-[clamp(2.4rem,4.6vw,4.9rem)] leading-[0.95] text-white" style={{ letterSpacing: "-0.035em" }}>
                      {p.name}
                    </h3>
                  </div>
                </div>

                <div className="pointer-events-none relative z-[2] p-4 md:p-8">
                  <p className="font-display text-[clamp(1.35rem,2.4vw,2.4rem)] text-white" style={{ letterSpacing: "-0.03em", lineHeight: 1.02 }}>
                    {p.lines.map((l, k) => (
                      <span key={k} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                  <p
                    className={cn(
                      "mt-4 hidden max-w-[36ch] text-[15px] leading-snug text-white/80 transition-[opacity,transform] duration-700 ease-[var(--ease-out)] lg:block",
                      "lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100",
                    )}
                  >
                    {p.copy}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 md:mt-7 md:gap-x-6 md:gap-y-3">
                    <span className="pointer-events-auto inline-flex">
                      <Button href={`${p.href}#demo`} variant="white" size="md">
                        Book a demo
                      </Button>
                    </span>
                    <span className="inline-flex items-center gap-2.5 text-[15px] font-medium">
                      {p.cta}
                      <Arrow className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
