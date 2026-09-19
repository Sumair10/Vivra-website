import Image from "next/image";
import { TransitionLink } from "@/components/animation/TransitionLink";
import { Arrow } from "@/components/ui/Button";
import { Label, MaskedHeading } from "@/components/typography/Label";
import { IMG } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const ROOMS = [
  { n: "01", t: "Events", d: "Stages, exhibitions and public gatherings at any scale.", tags: ["Summits", "Launches", "Award nights"], img: IMG.vSummit, href: "/events", span: "lg:col-span-7" },
  { n: "02", t: "Conferences", d: "International audiences following every session in their own language.", tags: ["Congresses", "Seminars", "Educational days"], img: IMG.vPanel, href: "/events", span: "lg:col-span-5" },
  { n: "03", t: "Meetings", d: "Boardrooms, delegations and cross-border teams in one conversation.", tags: ["Board meetings", "Workshops", "Government meetings"], img: IMG.vBoardroom, href: "/events", span: "lg:col-span-5" },
  { n: "04", t: "Mosques", d: "Sermons, lectures and announcements followed by every worshipper.", tags: ["Friday khutbahs", "Lectures", "Community gatherings"], img: IMG.vMosqueHall, href: "/mosque", span: "lg:col-span-7" },
];

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-20 rule-b py-16 md:py-24" aria-labelledby="solutions-heading">
      <div className="container-v">
        <div className="max-w-[900px]">
          <Label index="07">Solutions</Label>
          <MaskedHeading as="h2" id="solutions-heading" lines={["Any room where not everyone", "speaks the same language."]} className="t-display mt-6" />
          <p className="t-lead mt-5" data-reveal>Today, that is almost every room.</p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:mt-16 lg:grid-cols-12">
          {ROOMS.map((r, i) => (
            <li key={r.t} className={cn("min-w-0", r.span)} data-reveal style={{ "--reveal-delay": `${(i % 2) * 100}ms` } as React.CSSProperties}>
              <TransitionLink
                href={r.href}
                className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[20px] p-5 text-white sm:aspect-[16/11] md:p-7 lg:aspect-[16/10]"
              >
                <Image src={r.img.src} alt={r.img.alt} fill sizes="(min-width:1024px) 55vw, 92vw" className="-z-10 object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
                <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-t from-[#120c2e]/90 via-[#120c2e]/30 to-[#120c2e]/10" />
                <span className="t-label !text-white/70">{r.n}</span>
                <span className="mt-2 flex items-center justify-between gap-4">
                  <h3 className="font-display text-[clamp(2rem,3.6vw,3.4rem)] leading-none text-white">{r.t}</h3>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#2a2160] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <Arrow className="h-3 w-3" />
                  </span>
                </span>
                <p className="mt-3 max-w-[44ch] text-[14px] leading-snug text-white/80 md:text-[15px]">{r.d}</p>
                <span className="mt-4 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/35 px-3 py-1 text-[12px] text-white/90 backdrop-blur-sm">{t}</span>
                  ))}
                </span>
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
