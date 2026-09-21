import Image from "next/image";
import { TransitionLink } from "@/components/animation/TransitionLink";
import { Button, Arrow } from "@/components/ui/Button";
import { RequestCall } from "@/components/forms/RequestCall";
import { Label } from "@/components/typography/Label";
import { IMG } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const CONTEXTS = ["Conferences", "Panels", "Summits", "Meetings", "Exhibitions"];

function RoundArrow({ className }: { className?: string }) {
  return (
    <span className={cn("grid h-10 w-10 place-items-center rounded-full bg-white text-[#0c3a3e] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5", className)}>
      <Arrow className="h-3 w-3" />
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium leading-none text-[#0c3a3e] backdrop-blur">{children}</span>;
}

/** Vivra Events hero: editorial headline left, three image cards right, on a soft teal field. */
export function EventsHero() {
  return (
    <section className="events-panel-bg pb-6 pt-[88px] md:pb-10 md:pt-[104px]" aria-labelledby="hero-heading">
      <div className="container-v">
        <div className="rounded-[24px] bg-surface p-5 shadow-[0_30px_80px_-40px_rgba(12,58,62,0.45)] md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* left */}
            <div className="flex flex-col justify-between gap-10 lg:col-span-7 lg:min-h-[560px]">
              <div>
                <Label index="01" brand>
                  Vivra Events
                </Label>
                <p className="mt-3 text-[15px] italic text-secondary">Events that speak your language.</p>
                <h1 id="hero-heading" className="font-display mt-6 text-[clamp(2.2rem,4.4vw,4.5rem)] leading-[1.02] tracking-[-0.04em]">
                  <span className="line-mask" style={{ "--i": 0 } as React.CSSProperties}>
                    <span>
                      <span aria-hidden className="stripe-chip mr-[0.22em] inline-block h-[0.6em] w-[1.35em] rounded-full align-[0.02em]" />
                      Live AI Translation
                    </span>
                  </span>
                  <span className="line-mask" style={{ "--i": 1 } as React.CSSProperties}>
                    <span>for Every Attendee —</span>
                  </span>
                  <span className="line-mask" style={{ "--i": 2 } as React.CSSProperties}>
                    <span>
                      Directly on Their Phone.
                      <TransitionLink
                        href="/events#how"
                        className="ml-3 inline-flex translate-y-[-0.2em] items-center gap-2 rounded-full border border-line-strong px-3.5 py-2 align-middle font-sans text-[13px] font-medium leading-none tracking-normal text-primary transition-colors hover:border-brand hover:text-brand-text"
                      >
                        <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" aria-hidden>
                          <path d="M2 1.2 L8.4 5 L2 8.8 Z" fill="currentColor" />
                        </svg>
                        How it works
                      </TransitionLink>
                    </span>
                  </span>
                </h1>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4" data-reveal style={{ "--reveal-delay": "450ms" } as React.CSSProperties}>
                  <Button href="/events#demo" variant="brand" size="lg" className="rounded-full">
                    Request an Event Demo
                  </Button>
                  <RequestCall variant="link" />
                </div>
              </div>

              <div data-reveal style={{ "--reveal-delay": "550ms" } as React.CSSProperties}>
                <p className="max-w-[46ch] text-[14px] leading-snug text-secondary">
                  Real-time AI translation for conferences, events, panels and live presentations. Everyone in the room hears the same moment —
                  in their own language, on their own phone.
                </p>
                <ul className="font-display mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[17px] tracking-[-0.02em] text-tertiary" aria-label="Where Vivra Events is used">
                  {CONTEXTS.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* right: cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:col-span-5" data-reveal style={{ "--reveal-delay": "250ms" } as React.CSSProperties}>
              {/* big */}
              <TransitionLink
                href="/events#demo"
                className="group relative isolate col-span-2 flex aspect-[8/5] flex-col justify-between overflow-hidden rounded-[18px] p-5 text-white"
              >
                <Image src={IMG.eventsConfHall.src} alt="" fill sizes="(min-width:1024px) 520px, 92vw" priority className="-z-10 object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
                <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-b from-[#062a2e]/65 via-[#062a2e]/5 to-[#062a2e]/70" />
                <h2 className="font-display max-w-[16ch] text-[clamp(1.35rem,2.1vw,1.9rem)] leading-[1.05] text-white">Make your next event understood by everyone.</h2>
                <div className="flex items-end justify-between gap-4">
                  <p className="max-w-[30ch] text-[12px] leading-snug text-white/80">Guests scan a code and follow along in their own language.</p>
                  <RoundArrow />
                </div>
              </TransitionLink>

              {/* languages */}
              <TransitionLink
                href="/events#access"
                className="group relative isolate flex aspect-square flex-col justify-between overflow-hidden rounded-[18px] p-4 text-white"
              >
                <Image src={IMG.eventsConfCrowd.src} alt="" fill sizes="(min-width:1024px) 250px, 46vw" className="-z-10 object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.06]" />
                <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-b from-transparent via-transparent to-[#062a2e]/75" />
                <div className="flex items-start justify-between">
                  <Pill>languages</Pill>
                  <RoundArrow className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-display text-[clamp(1.1rem,1.6vw,1.45rem)] leading-[1.05]">Every language, open.</p>
                  <p className="mt-1.5 hidden text-[11.5px] leading-snug text-white/80 sm:block">Pick any, switch any time.</p>
                </div>
              </TransitionLink>

              {/* any phone */}
              <TransitionLink
                href="/events#speakers"
                className="group relative isolate flex aspect-square flex-col justify-between overflow-hidden rounded-[18px] p-4 text-white"
              >
                <Image src={IMG.eventsConfListener.src} alt="" fill sizes="(min-width:1024px) 250px, 46vw" className="-z-10 object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.06]" />
                <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-b from-transparent via-[#0c3a3e]/10 to-[#062a2e]/80" />
                <div className="flex items-start justify-between">
                  <Pill>listeners</Pill>
                  <RoundArrow className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-display text-[clamp(1.5rem,2.6vw,2.4rem)] leading-[0.95]">Any phone.</p>
                  <p className="mt-1.5 hidden text-[11.5px] leading-snug text-white/80 sm:block">Nothing to install.</p>
                </div>
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
