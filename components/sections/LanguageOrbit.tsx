import type { FlagComponent } from "country-flag-icons/react/3x2";
import { GB, US, IT, IN, DE, FR, TR, ID, ES, CN, RU, PK, AE } from "country-flag-icons/react/3x2";
import { Label, MaskedHeading } from "@/components/typography/Label";
import { cn } from "@/lib/utils";

type Flag = FlagComponent;

/** Flags sit around the rings the way app icons do in the reference. x/y are % of the stage. */
const ORBIT: { Flag: Flag; label: string; x: number; y: number; delay: number }[] = [
  { Flag: GB, label: "English", x: 22, y: 19, delay: 0 },
  { Flag: IT, label: "Italian", x: 13, y: 38, delay: 0.8 },
  { Flag: FR, label: "French", x: 26.5, y: 50, delay: 1.6 },
  { Flag: DE, label: "German", x: 9, y: 59, delay: 2.4 },
  { Flag: ES, label: "Spanish", x: 27.5, y: 72, delay: 3.2 },
  { Flag: US, label: "English (US)", x: 77.5, y: 19, delay: 0.4 },
  { Flag: IN, label: "Hindi", x: 87, y: 38, delay: 1.2 },
  { Flag: TR, label: "Turkish", x: 73.5, y: 50, delay: 2 },
  { Flag: ID, label: "Indonesian", x: 91, y: 59, delay: 2.8 },
  { Flag: CN, label: "Chinese", x: 79.5, y: 72, delay: 3.6 },
  { Flag: PK, label: "Urdu", x: 17, y: 82, delay: 1.4 },
  { Flag: AE, label: "Arabic", x: 86, y: 80, delay: 2.2 },
];

/** Extra flags for the compact (tablet/phone) layout. */
const MORE: { Flag: Flag; label: string }[] = [{ Flag: RU, label: "Russian" }];

const CARDS = [
  { Flag: GB, tag: "EN · Speaker", text: "Welcome, everyone. Today we open the floor to every voice.", cls: "" },
  { Flag: AE, tag: "AR · Live", text: "أهلاً بكم جميعاً. اليوم نفتح المجال لكل صوت.", cls: "lang-ar" },
  { Flag: IT, tag: "IT · Live", text: "Benvenuti a tutti. Oggi diamo spazio a ogni voce.", cls: "" },
];

function Badge({ Flag, label, size = "lg" }: { Flag: Flag; label: string; size?: "lg" | "sm" }) {
  return (
    <span
      title={label}
      className={cn(
        "grid place-items-center rounded-full border border-line bg-surface shadow-[0_10px_30px_-12px_rgba(11,11,12,0.35)]",
        size === "lg" ? "h-[68px] w-[68px]" : "h-12 w-12",
      )}
    >
      <span className={cn("block overflow-hidden rounded-full ring-1 ring-black/15", size === "lg" ? "h-11 w-11" : "h-8 w-8")}>
        <Flag aria-hidden preserveAspectRatio="xMidYMid slice" className="h-full w-full" />
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}

export function LanguageOrbit() {
  return (
    <section id="languages" aria-labelledby="orbit-heading" className="relative scroll-mt-20 overflow-hidden rule-b">
      {/* concentric rings, centred behind the copy */}
      <svg aria-hidden viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 h-full w-full">
        <g fill="none" stroke="var(--border)" strokeWidth="1">
          {[210, 300, 400, 510, 630, 760].map((r) => (
            <circle key={r} cx="600" cy="380" r={r} />
          ))}
        </g>
        {/* brand arcs travelling along the rings */}
        <g fill="none" stroke="var(--brand-primary)" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="600" cy="380" r="300" strokeDasharray="220 2000" className="orbit-arc" style={{ animationDuration: "38s" }} />
          <circle cx="600" cy="380" r="510" strokeDasharray="300 3000" className="orbit-arc" style={{ animationDuration: "62s", animationDirection: "reverse" }} />
        </g>
      </svg>
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[62%] h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--brand-soft), transparent)" }}
      />

      <div className="container-v relative">
        {/* wide screens: flags placed on the stage */}
        <ul aria-label="Example languages" className="pointer-events-none absolute inset-x-[var(--gutter)] inset-y-0 hidden lg:block">
          {ORBIT.map(({ Flag, label, x, y, delay }) => (
            <li key={label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
              <span className="orbit-float block" style={{ animationDelay: `${delay}s` }}>
                <Badge Flag={Flag} label={label} />
              </span>
            </li>
          ))}
        </ul>

        <div className="relative mx-auto flex max-w-[640px] flex-col items-center px-0 py-16 text-center md:py-24 lg:py-28">
          <Label index="05">Languages</Label>
          <MaskedHeading as="h2" id="orbit-heading" lines={["Every language", "in the room."]} className="t-display mt-6" />
          <p className="t-lead mt-6 max-w-[46ch]" data-reveal>
            From English to Arabic, French to Spanish, Urdu and Hindi — Vivra turns one live voice into the languages your audience actually speaks.
          </p>

          {/* compact layout: flags as a wrapped row */}
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:hidden" aria-label="Example languages">
            {[...ORBIT, ...MORE].map(({ Flag, label }) => (
              <li key={label}>
                <Badge Flag={Flag} label={label} size="sm" />
              </li>
            ))}
          </ul>

          {/* live translation stack */}
          <div className="relative mt-12 w-full max-w-[430px] text-left md:mt-14" data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
            {CARDS.map((c, i) => (
              <div
                key={c.tag}
                className={cn("card relative flex items-start gap-3 p-4", i > 0 && "pt-7")}
                style={{
                  width: `${100 - i * 8}%`,
                  marginInline: "auto",
                  marginTop: i === 0 ? 0 : -16,
                  zIndex: 3 - i,
                  opacity: 1 - i * 0.12,
                }}
              >
                <span className="mt-0.5 block h-8 w-8 shrink-0 overflow-hidden rounded-full border border-line">
                  <c.Flag aria-hidden preserveAspectRatio="xMidYMid slice" className="h-full w-full" />
                </span>
                <span className="min-w-0">
                  <span className="t-label flex items-center gap-2">
                    {c.tag}
                    <span className="dot-brand" aria-hidden />
                  </span>
                  <span className={cn("mt-1.5 block text-[15px] leading-snug text-primary", c.cls)} dir={c.cls ? "rtl" : undefined}>
                    {c.text}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
