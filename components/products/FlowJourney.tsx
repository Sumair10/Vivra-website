"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion/gsap";
import { Label, MaskedHeading } from "@/components/typography/Label";
import { cn } from "@/lib/utils";

export type Station = {
  label: string;
  title: React.ReactNode;
  copy?: string;
  visual?: React.ReactNode;
  align?: "left" | "right";
};

/**
 * Editorial journey: a single vertical line draws itself as you scroll, with
 * stations alternating either side. Used for Stage → Vivra → Languages → Phones.
 */
export function FlowJourney({ index, eyebrow, lines, stations, id }: { index: string; eyebrow: string; lines: React.ReactNode[]; stations: Station[]; id?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const l = line.current;
    if (!el || !l || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        l,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 70%", end: "bottom 70%", scrub: 0.6 },
        },
      );
      el.querySelectorAll<HTMLElement>("[data-station]").forEach((s) => {
        gsap.fromTo(
          s.querySelector("[data-node]"),
          { scale: 0.4, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)", scrollTrigger: { trigger: s, start: "top 68%" } },
        );
      });
    }, el);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section id={id} className="scroll-mt-20 rule-b" aria-labelledby={`${id ?? "flow"}-heading`}>
      <div className="container-v">
        <div className="grid grid-cols-4 gap-x-8 py-16 md:grid-cols-12 md:py-24">
          <div className="col-span-4 md:col-span-3">
            <Label index={index}>{eyebrow}</Label>
          </div>
          <div className="col-span-4 md:col-span-8 md:col-start-5">
            <MaskedHeading as="h2" id={`${id ?? "flow"}-heading`} lines={lines} className="t-display" />
          </div>
        </div>

        <div ref={root} className="relative pb-20 md:pb-28">
          {/* spine */}
          <div aria-hidden className="absolute bottom-0 left-4 top-0 w-px bg-line md:left-1/2">
            <div ref={line} className="absolute inset-0 origin-top bg-brand" style={{ transform: "scaleY(0)" }} />
          </div>

          <ol className="flex flex-col gap-16 md:gap-24">
            {stations.map((s, i) => {
              const right = (s.align ?? (i % 2 === 0 ? "left" : "right")) === "right";
              return (
                <li key={i} data-station className="relative grid grid-cols-[2rem_1fr] md:grid-cols-2 md:gap-x-16">
                  {/* node */}
                  <span
                    data-node
                    className="absolute left-4 top-1 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-brand bg-background md:left-1/2"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand" />
                  </span>
                  <div className="hidden md:block" />
                  <div className={cn("col-start-2 md:col-start-auto", right ? "md:col-start-2 md:pl-0" : "md:col-start-1 md:row-start-1 md:pr-0 md:text-right")}>
                    <span className="t-label">
                      {String(i + 1).padStart(2, "0")} / {s.label}
                    </span>
                    <h3 className="font-display mt-3 text-[clamp(1.6rem,3vw,3rem)]">{s.title}</h3>
                    {s.copy && <p className={cn("t-body mt-3 max-w-[38ch]", !right && "md:ml-auto")}>{s.copy}</p>}
                    {s.visual && <div className={cn("mt-6 flex", !right && "md:justify-end")}>{s.visual}</div>}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
