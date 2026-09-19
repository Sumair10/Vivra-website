import Image from "next/image";
import { PhoneMock } from "@/components/products/PhoneMock";
import { IMG } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const SCRIPTS = [
  { t: "English", c: "" },
  { t: "العربية", c: "lang-ar" },
  { t: "Deutsch", c: "" },
  { t: "हिन्दी", c: "lang-hi" },
  { t: "Français", c: "" },
  { t: "বাংলা", c: "" },
  { t: "中文", c: "" },
  { t: "Español", c: "" },
];

/**
 * Six modules under the headline. Every tile says something true about the
 * product — no counters, no invented figures.
 */
export function HeroBento() {
  return (
    <div className="grid grid-cols-2 gap-3 pb-6 md:grid-cols-12 md:grid-rows-2 md:gap-4 md:pb-10" data-reveal style={{ "--reveal-delay": "300ms" } as React.CSSProperties}>
      {/* A — languages */}
      <div className="card col-span-2 flex flex-col justify-between gap-6 p-5 md:col-span-3 md:p-6">
        <ul className="flex flex-wrap gap-1.5" aria-hidden>
          {SCRIPTS.map((s) => (
            <li key={s.t} className={cn("card-inset px-2.5 py-1 text-[13px] leading-snug text-primary", s.c)}>
              {s.t}
            </li>
          ))}
        </ul>
        <div>
          <h3 className="font-display text-[22px] leading-none md:text-[24px]">Every language, open.</h3>
          <p className="t-body mt-2">Listeners pick theirs by name or native script and can switch at any time.</p>
        </div>
      </div>

      {/* C — tall photograph */}
      <div className="img-treat card relative col-span-2 aspect-[4/3] overflow-hidden !p-0 md:col-span-3 md:row-span-2 md:aspect-auto" style={{ "--img-shade": 0.25 } as React.CSSProperties}>
        <Image src={IMG.eventsListener.src} alt={IMG.eventsListener.alt} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" priority />
        <span className="t-label absolute left-4 top-4 z-[1] text-white/90">Listener / Row 7</span>
      </div>

      {/* D — brand tile */}
      <div className="card col-span-1 flex flex-col justify-between gap-8 border-transparent bg-brand p-5 text-white md:col-span-3 md:p-6">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="t-label !text-white/80">Live</span>
        </span>
        <div>
          <p className="font-display text-[clamp(2.75rem,4.5vw,4.5rem)] leading-none">Live.</p>
          <p className="mt-3 max-w-[24ch] text-[14px] leading-snug text-white/80">A few seconds behind the speaker, like a human interpreter.</p>
        </div>
      </div>

      {/* E — dark tile: voice → V → languages */}
      <div className="card on-ink col-span-1 flex flex-col justify-between gap-8 border-transparent bg-ink p-5 md:col-span-3 md:p-6">
        <div className="flex items-center gap-3" aria-hidden>
          <span className="flex items-end gap-[2px]">
            {[4, 9, 6, 12, 5, 10, 4, 8].map((h, k) => (
              <span key={k} className="wave-bar w-[2px] rounded-full bg-white" style={{ height: h * 1.6, animationDelay: `${(k * 0.1).toFixed(1)}s` }} />
            ))}
          </span>
          <span className="h-px flex-1 bg-white/20" />
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path d="M4 7 L12 16 L20 7" fill="none" stroke="var(--brand-text)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="font-display text-[22px] leading-none text-white md:text-[24px]">One voice in. Many out.</p>
          <p className="mt-2 text-[14px] leading-snug text-white/65">Natural spoken voice and subtitles in each language, at once.</p>
        </div>
      </div>

      {/* B — no app */}
      <div className="card col-span-2 flex flex-col justify-between gap-8 p-5 md:col-span-3 md:p-6">
        <div className="card-inset flex items-center justify-between px-3 py-2.5 text-[12px]" aria-hidden>
          <span className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-[10px] font-medium text-background">QR</span>
            <span className="text-secondary">Scan to listen</span>
          </span>
          <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-medium text-brand-text">Browser</span>
        </div>
        <div>
          <h3 className="font-display text-[22px] leading-none md:text-[24px]">No app. No headset.</h3>
          <p className="t-body mt-2">Scan once and listen in the browser, on the phone already in your pocket.</p>
        </div>
      </div>

      {/* F — wide phones tile */}
      <div className="card relative col-span-2 flex flex-col justify-between gap-6 overflow-hidden p-5 md:col-span-6 md:flex-row md:items-end md:p-6">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(60% 80% at 100% 100%, var(--brand-soft) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-[30ch] md:basis-1/2 md:shrink-0">
          <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.25rem)] leading-[1.02]">Speak naturally. Vivra handles the language.</h3>
          <p className="t-body mt-3">The speaker changes nothing. The audience hears the same moment in their own language.</p>
        </div>
        <div className="relative flex items-end gap-3 self-end md:self-auto">
          <PhoneMock language="English" text="Welcome, everyone." />
          <PhoneMock language="العربية" text="أهلاً بكم جميعاً." cls="lang-ar" className="-translate-y-3" />
        </div>
      </div>
    </div>
  );
}
