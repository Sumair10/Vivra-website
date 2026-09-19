import type { FlagComponent } from "country-flag-icons/react/3x2";
import { AE, FR, ES, IN } from "country-flag-icons/react/3x2";
import { Label, MaskedHeading } from "@/components/typography/Label";
import { cn } from "@/lib/utils";

/** Glass tile used for both input sources and output languages. */
function Tile({ children, label, className }: { children: React.ReactNode; label: string; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <span className="grid h-14 w-14 place-items-center rounded-[16px] border border-white/25 bg-white/90 text-[#1a1a2e] shadow-[0_12px_32px_-10px_rgba(0,0,0,0.6),0_0_0_6px_rgba(255,255,255,0.06)] md:h-16 md:w-16">
        {children}
      </span>
      <span className="t-label whitespace-nowrap !text-[9px] !text-white/70 md:!text-[10px]">{label}</span>
    </div>
  );
}

const Icon = {
  mic: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
    </svg>
  ),
  mixer: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
      <path d="M6 4v16M12 4v16M18 4v16" />
      <circle cx="6" cy="9" r="2" fill="currentColor" />
      <circle cx="12" cy="15" r="2" fill="currentColor" />
      <circle cx="18" cy="8" r="2" fill="currentColor" />
    </svg>
  ),
  tab: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 9.5h18M7 7.3h.01M10 7.3h.01" />
    </svg>
  ),
};

function Flag({ C, label, className }: { C: FlagComponent; label: string; className?: string }) {
  return (
    <Tile label={label} className={className}>
      <span className="block h-9 w-9 overflow-hidden rounded-full ring-1 ring-black/15">
        <C aria-hidden preserveAspectRatio="xMidYMid slice" className="h-full w-full" />
      </span>
    </Tile>
  );
}

/** Dotted connector column. Paths are drawn in a 0–200 × 0–100 box and stretched to the column height. */
function Connectors({ side }: { side: "in" | "out" }) {
  const ys = [16, 50, 84];
  const d = (y: number) => (side === "in" ? `M 8 ${y} H 110 V 50 H 200` : `M 0 50 H 90 V ${y} H 192`);
  return (
    <svg viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full">
      {ys.map((y) => (
        <path
          key={y}
          d={d(y)}
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="flow-dash"
        />
      ))}
    </svg>
  );
}

export function AudioFlow() {
  return (
    <section id="flow" aria-labelledby="flow-heading" className="scroll-mt-20 rule-b py-10 md:py-16">
      <div className="container-v">
        <div className="flow-panel relative overflow-hidden rounded-[20px] px-5 py-14 text-white md:px-10 md:py-20">
          <div aria-hidden className="flow-grid pointer-events-none absolute inset-0" />

          <div className="relative flex flex-col items-center text-center">
            <Label index="04" className="[&_span]:!text-white/70">
              How it flows
            </Label>
            <MaskedHeading as="h2" id="flow-heading" lines={["Plug in the room.", "Vivra does the rest."]} className="t-display mt-6 text-white" />
            <p className="mt-6 max-w-[52ch] text-[clamp(1rem,1.3vw,1.2rem)] leading-snug text-white/75" data-reveal>
              Connect a microphone, the mixer or a browser tab — and every listener hears the speaker in their own language, seconds later.
            </p>
          </div>

          {/* stage */}
          <div className="relative mt-16 grid grid-cols-[minmax(0,1fr)] items-stretch gap-y-6 lg:mt-20 lg:grid-cols-[minmax(150px,220px)_minmax(0,1fr)_minmax(150px,220px)] lg:gap-x-0">
            {/* sources */}
            <div className="relative lg:min-h-[380px]">
              <div className="hidden lg:block">
                <Connectors side="in" />
              </div>
              <div className="relative flex justify-center gap-4 lg:absolute lg:inset-0 lg:block lg:gap-0">
                <Tile label="Microphone" className="lg:absolute lg:left-0 lg:top-[16%] lg:-translate-y-1/2">
                  {Icon.mic}
                </Tile>
                <Tile label="Mixer" className="lg:absolute lg:left-0 lg:top-[50%] lg:-translate-y-1/2">
                  {Icon.mixer}
                </Tile>
                <Tile label="Browser tab" className="lg:absolute lg:left-0 lg:top-[84%] lg:-translate-y-1/2">
                  {Icon.tab}
                </Tile>
              </div>
            </div>

            {/* mobile connector */}
            <span aria-hidden className="flow-vert mx-auto h-10 lg:hidden" />

            {/* card */}
            <div className="relative mx-auto w-full min-w-0 max-w-[720px] lg:max-w-none">
              <span aria-hidden className="absolute -top-8 left-1/2 z-10 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border border-white/25 bg-[#23234a] shadow-[0_0_0_10px_rgba(255,255,255,0.05),0_20px_40px_-12px_rgba(0,0,0,0.6)]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path d="M4 7 L12 16 L20 7" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="flow-card relative h-full rounded-[20px] p-5 pt-10 md:p-7 md:pt-12">
                <span className="inline-flex items-center gap-2 rounded-md bg-[#3ddba0] px-2.5 py-1 text-[12px] font-medium text-[#0b3b2a]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0b3b2a]" />
                  Live
                </span>
                <h3 className="font-display mt-4 text-[clamp(1.4rem,2.2vw,2rem)] leading-tight text-white [overflow-wrap:anywhere]">Every listener, in their own language.</h3>
                <p className="mt-2 max-w-[46ch] text-[14px] leading-snug text-white/70">
                  Vivra follows the speaker sentence by sentence and delivers natural voice and readable subtitles — as it is spoken.
                </p>

                <div className="mt-5 grid gap-2 border-t border-white/10 pt-4 text-[13px]">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="t-label !text-white/55">EN · Speaker</span>
                    <span className="text-white">Welcome, everyone.</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="t-label !text-white/55">AR · Live</span>
                    <span className="lang-ar text-white" dir="rtl">مرحباً بالجميع.</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="t-label !text-white/55">FR · Live</span>
                    <span className="text-white">Bienvenue à tous.</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-full border border-white/15 bg-black/25 py-2 pl-2 pr-3 text-[13px] md:text-[14px]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/25 text-white/80">+</span>
                  <span className="min-w-0 flex-1 truncate text-white/80">
                    Translate into <span className="text-[#b6a8ff]">Arabic</span>, <span className="text-[#8fb4ff]">French</span> and <span className="text-[#8fb4ff]">Hindi</span>
                  </span>
                  <span className="flex shrink-0 -space-x-2" aria-hidden>
                    {[AE, FR, IN].map((C, i) => (
                      <span key={i} className="block h-6 w-6 overflow-hidden rounded-full ring-2 ring-[#22224a]">
                        <C preserveAspectRatio="xMidYMid slice" className="h-full w-full" />
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <span aria-hidden className="flow-vert flow-vert-out mx-auto h-10 lg:hidden" />

            {/* outputs */}
            <div className="relative lg:min-h-[380px]">
              <div className="hidden lg:block">
                <Connectors side="out" />
              </div>
              <div className="relative flex justify-center gap-4 lg:absolute lg:inset-0 lg:block lg:gap-0">
                <Flag C={AE} label="Arabic" className="lg:absolute lg:right-0 lg:top-[16%] lg:-translate-y-1/2" />
                <Flag C={FR} label="French" className="lg:absolute lg:right-0 lg:top-[50%] lg:-translate-y-1/2" />
                <Flag C={ES} label="Spanish" className="lg:absolute lg:right-0 lg:top-[84%] lg:-translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
