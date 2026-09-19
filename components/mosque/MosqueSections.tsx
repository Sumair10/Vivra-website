import Image from "next/image";
import type { FlagComponent } from "country-flag-icons/react/3x2";
import { GB, AE, IN, FR, BD, IR, AF, TR, ID, ES, DE, CN, RU, KE, PH } from "country-flag-icons/react/3x2";
import { Label, MaskedHeading } from "@/components/typography/Label";
import { RequestCall } from "@/components/forms/RequestCall";
import { Button } from "@/components/ui/Button";
import { IMG } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

/* 01 — hero: full-bleed photograph, light headline, frosted panel overlapping the bottom */
function Hatch({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-block h-[0.62em] w-[1.7em] align-[0.04em]", className)}
      style={{ backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.75) 0 1.5px, transparent 1.5px 9px)" }}
    />
  );
}
function Rings({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 260 90" className={cn("inline-block h-[0.66em] w-[1.9em] align-[0.02em]", className)} fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5">
      {[0, 9, 18, 27].map((i) => (
        <rect key={i} x={2 + i} y={2 + i} width={256 - i * 2} height={86 - i * 2} rx={43 - i} />
      ))}
    </svg>
  );
}

export function MosqueHero() {
  return (
    <section className="events-panel-bg pb-6 pt-[84px] md:pb-10 md:pt-[100px]" aria-labelledby="hero-heading">
      <div className="container-v">
        <div className="relative isolate flex flex-col overflow-hidden rounded-[24px] shadow-[0_40px_90px_-50px_rgba(7,74,59,0.6)]">
          <Image src={IMG.mosqueCourtyard.src} alt={IMG.mosqueCourtyard.alt} fill priority sizes="(min-width:1440px) 1376px, 96vw" className="-z-10 object-cover object-[50%_65%]" />
          <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-b from-black/35 via-black/5 to-transparent" />

          {/* headline */}
          <div className="px-5 pb-16 pt-14 text-center md:px-10 md:pb-28 md:pt-20 lg:pb-40">
            <Label index="01" brand className="justify-center [&_span]:!text-white/80">
              Vivra Mosque
            </Label>
            <h1 id="hero-heading" className="font-display mt-6 text-[clamp(2.75rem,7.2vw,7.5rem)] font-light leading-[1.02] tracking-[-0.04em] text-white">
              <span className="line-mask" style={{ "--i": 0 } as React.CSSProperties}>
                <span>Every sermon.</span>
              </span>
              <span className="line-mask" style={{ "--i": 1 } as React.CSSProperties}>
                <span>
                  <Rings className="mr-[0.2em] hidden sm:inline-block" />
                  understood
                </span>
              </span>
              <span className="line-mask" style={{ "--i": 2 } as React.CSSProperties}>
                <span>
                  in every language
                  <Hatch className="ml-[0.25em] hidden sm:inline-block" />
                </span>
              </span>
            </h1>
          </div>

          {/* frosted panel */}
          <div className="mx-2 mb-2 rounded-[26px] border border-white/60 bg-white/70 p-2 shadow-[0_30px_60px_-30px_rgba(5,46,37,0.6)] backdrop-blur-xl md:mx-3 md:mb-3 md:p-3 [:root[data-theme=dark]_&]:border-white/15 [:root[data-theme=dark]_&]:bg-black/55">
            <div className="grid grid-cols-1 gap-2 md:gap-3 lg:grid-cols-12">
              <div className="flex flex-col justify-between gap-8 p-4 md:p-6 lg:col-span-6">
                <span className="t-label">About Vivra Mosque</span>
                <div>
                  <p className="font-display text-[clamp(2.25rem,4.4vw,4.25rem)] font-light leading-[1] tracking-[-0.04em] text-primary">
                    Understood,
                    <br />
                    quietly.
                  </p>
                  <p className="mt-5 max-w-[42ch] text-[13.5px] leading-snug text-secondary">
                    Real-time AI translation reaches each worshipper privately, on the phone in their hand — while the imam speaks exactly as he always
                    has.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Button href="/mosque#demo" variant="brand" size="md" className="rounded-full">
                      Request Mosque Demo
                    </Button>
                    <RequestCall variant="link" />
                  </div>
                </div>
              </div>

              <HeroCard title="Every language, open" text="Worshippers choose theirs by name or flag and can switch at any time." className="lg:col-span-3" />
              <HeroCard title="No app, no headset" text="One scan opens the sermon in the browser of any phone." className="lg:col-span-3" />

              <HeroPhoto
                className="lg:col-span-8"
                src={IMG.mosqueHall.src}
                alt={IMG.mosqueHall.alt}
                sizes="(min-width:1024px) 60vw, 92vw"
                title="Friday khutbah"
                text="Followed in the language each person understands."
              />
              <HeroPhoto
                className="lg:col-span-4"
                src={IMG.mosqueMinbarDetail.src}
                alt={IMG.mosqueMinbarDetail.alt}
                sizes="(min-width:1024px) 30vw, 92vw"
                title="Live translation"
                text="A few seconds behind the imam."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard({ title, text, className }: { title: string; text: string; className?: string }) {
  return (
    <div className={cn("flex min-h-[170px] flex-col justify-between gap-10 rounded-[18px] bg-surface p-5 shadow-[0_14px_30px_-24px_rgba(5,46,37,0.5)] md:min-h-[250px] md:p-6", className)}>
      <h2 className="font-display text-[clamp(1.4rem,2vw,1.85rem)] font-light leading-[1.05] tracking-[-0.03em]">{title}</h2>
      <p className="max-w-[26ch] text-[13px] leading-snug text-secondary">{text}</p>
    </div>
  );
}

function HeroPhoto({ src, alt, sizes, title, text, className }: { src: string; alt: string; sizes: string; title: string; text: string; className?: string }) {
  return (
    <div className={cn("relative isolate flex min-h-[230px] flex-col justify-between overflow-hidden rounded-[18px] p-5 text-white md:min-h-[280px] md:p-6", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} className="-z-10 object-cover" />
      <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-b from-[#052e25]/65 via-transparent to-[#052e25]/70" />
      <h2 className="font-display text-[clamp(1.4rem,2vw,1.85rem)] font-light leading-[1.05] tracking-[-0.03em] text-white">{title}</h2>
      <p className="max-w-[30ch] text-[13px] leading-snug text-white/85">{text}</p>
    </div>
  );
}

/* 02 — the khutbah in three moments: editorial rows -------------------------- */
export function MosqueStory() {
  const rows = [
    { n: "01", t: "The imam speaks.", d: "Exactly as he always has, into the microphone already on the minbar. Nothing is added to the room and nothing is asked of him.", img: IMG.mosqueMicrophone },
    { n: "02", t: "Vivra listens.", d: "The audio is followed sentence by sentence and translated into every language the mosque has opened — in a natural voice, with subtitles.", img: IMG.mosqueArches },
    { n: "03", t: "Every worshipper understands.", d: "Each person hears the khutbah in the language they chose, privately, through earphones. No one else in the row is disturbed.", img: IMG.mosqueHands },
  ];
  return (
    <section id="how" className="scroll-mt-20 rule-b py-16 md:py-28" aria-labelledby="story-heading">
      <div className="container-v grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Label index="02">The khutbah</Label>
            <MaskedHeading as="h2" id="story-heading" lines={["Three quiet", "moments."]} className="t-display mt-6" />
            <p className="t-lead mt-6 max-w-[30ch]" data-reveal>
              The imam speaks. The worshipper listens in the language they understand. Vivra stays out of sight.
            </p>
          </div>
        </div>
        <ol className="lg:col-span-8">
          {rows.map((r, i) => (
            <li key={r.n} className="grid grid-cols-1 gap-6 border-t border-line py-8 md:grid-cols-[4.5rem_1fr_220px] md:items-center md:gap-8 md:py-10" data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
              <span className="font-display text-[clamp(2.5rem,4vw,3.75rem)] leading-none text-brand-text">{r.n}</span>
              <div>
                <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.25rem)] leading-[1.05]">{r.t}</h3>
                <p className="t-body mt-3 max-w-[44ch]">{r.d}</p>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] md:aspect-[4/3]">
                <Image src={r.img.src} alt={r.img.alt} fill sizes="(min-width:768px) 220px, 92vw" className="object-cover" />
              </div>
            </li>
          ))}
          <li className="border-t border-line" aria-hidden />
        </ol>
      </div>
    </section>
  );
}

/* 03 — access: full-bleed split with a QR card ------------------------------- */
function QrCard() {
  const cells = Array.from({ length: 121 }, (_, i) => {
    const x = i % 11;
    const y = Math.floor(i / 11);
    const f = (x < 3 && y < 3) || (x > 7 && y < 3) || (x < 3 && y > 7);
    if (f) return !(x === 1 && y === 1) && !(x === 9 && y === 1) && !(x === 1 && y === 9) ? 1 : 0;
    return (x * 5 + y * 11 + ((x * y) % 7)) % 3 === 0 ? 1 : 0;
  });
  return (
    <div className="card inline-flex items-center gap-5 p-4 pr-6" aria-hidden>
      <div className="grid h-[104px] w-[104px] shrink-0 grid-cols-11 gap-[2px] rounded-md bg-surface p-2 ring-1 ring-line">
        {cells.map((c, i) => (
          <span key={i} className={cn("rounded-[1px]", c ? "bg-primary" : "")} />
        ))}
      </div>
      <div>
        <p className="t-label">At the entrance</p>
        <p className="font-display mt-1.5 text-[22px] leading-tight">Scan to listen</p>
        <p className="mt-1 text-[12px] text-secondary">Opens in the browser</p>
      </div>
    </div>
  );
}

export function MosqueAccess() {
  const steps = [
    { w: "Scan", d: "The mosque's QR code — on a sign, a screen or a card at the door." },
    { w: "Choose", d: "The language you understand best. Change it whenever you like." },
    { w: "Listen", d: "Quietly, through earphones, with the words on screen if you want them." },
  ];
  return (
    <section id="access" className="tone-soft scroll-mt-20 rule-b" aria-labelledby="access-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-[720px]">
          <Image src={IMG.mosqueCourtyard.src} alt={IMG.mosqueCourtyard.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#052e25]/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 lg:-right-16 lg:bottom-12 lg:left-auto">
            <QrCard />
          </div>
        </div>
        <div className="flex flex-col justify-center px-[var(--gutter)] py-16 lg:py-24 lg:pl-24 lg:pr-[max(var(--gutter),calc((100vw-1440px)/2+4rem))]">
          <Label index="03">Listener access</Label>
          <MaskedHeading as="h2" id="access-heading" lines={["Scan.", "Choose.", "Listen."]} className="t-display mt-6" />
          <ol className="mt-10 flex flex-col">
            {steps.map((s, i) => (
              <li key={s.w} className="flex items-start gap-5 border-t border-line py-5" data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand text-[12px] font-medium text-brand-text">{i + 1}</span>
                <div>
                  <h3 className="font-display text-[24px] leading-none">{s.w}</h3>
                  <p className="t-body mt-2 max-w-[38ch]">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="border-t border-line pt-5 text-[13px] leading-snug text-secondary">
            <span className="t-label mr-2">For the mosque</span>
            Set it up once, choose the languages, share the link — and start when the khutbah begins.
          </p>
        </div>
      </div>
    </section>
  );
}

/* 03 — languages: flag badges (compact and legible on phones) ---------------- */
const MOSQUE_LANGS: { Flag: FlagComponent; native: string; name: string; script?: "ar" | "hi" }[] = [
  { Flag: GB, native: "English", name: "English" },
  { Flag: AE, native: "العربية", name: "Arabic", script: "ar" },
  { Flag: IN, native: "हिन्दी", name: "Hindi", script: "hi" },
  { Flag: FR, native: "Français", name: "French" },
  { Flag: BD, native: "বাংলা", name: "Bengali" },
  { Flag: IR, native: "فارسی", name: "Persian", script: "ar" },
  { Flag: AF, native: "پښتو", name: "Pashto", script: "ar" },
  { Flag: TR, native: "Türkçe", name: "Turkish" },
  { Flag: ID, native: "Bahasa Indonesia", name: "Indonesian" },
  { Flag: ES, native: "Español", name: "Spanish" },
  { Flag: DE, native: "Deutsch", name: "German" },
  { Flag: CN, native: "中文", name: "Chinese" },
  { Flag: RU, native: "Русский", name: "Russian" },
  { Flag: KE, native: "Kiswahili", name: "Swahili" },
  { Flag: PH, native: "Filipino", name: "Filipino" },
];

export function MosqueLanguages() {
  // staggered rows, each shifted a little further from the last, like the manaber.ai language wall
  const rows = [MOSQUE_LANGS.slice(0, 4), MOSQUE_LANGS.slice(4, 8), MOSQUE_LANGS.slice(8, 12), MOSQUE_LANGS.slice(12, 16)];
  const shift = ["-translate-x-6", "translate-x-8", "-translate-x-2", "translate-x-10"];
  return (
    <section id="languages" className="scroll-mt-20 rule-b bg-surface py-16 md:py-24" aria-labelledby="languages-heading">
      <div className="container-v grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <span className="inline-flex rounded-md bg-brand-soft px-3 py-1.5 text-[13px] font-medium text-brand-text">Global reach made easy</span>
          <h2 id="languages-heading" className="font-display mt-6 text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.02] tracking-[-0.04em] [text-wrap:balance]">
            Listen in your <span className="text-brand-text">own language</span> with cultural precision
          </h2>
          <p className="t-lead mt-6 max-w-[42ch]" data-reveal>
            Experience the khutbah in the language you understand best — with natural fluency, beyond word-for-word translation. Every language the
            mosque opens is available at every sermon.
          </p>
        </div>

        <div
          className="relative overflow-hidden py-2 lg:col-span-7"
          style={{ maskImage: "linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)" }}
          role="list"
          aria-label="Example listener languages"
        >
          <div className="flex flex-col gap-3 md:gap-4">
            {rows.map((row, r) => (
              <div key={r} className={cn("flex justify-center gap-3 md:gap-4", shift[r])}>
                {row.map(({ Flag, name }) => (
                  <span
                    key={name}
                    role="listitem"
                    className="flex shrink-0 items-center gap-3 rounded-[12px] border border-line bg-background px-3.5 py-2.5 shadow-[0_10px_26px_-18px_rgba(11,11,12,0.35)]"
                  >
                    <span className="block h-6 w-9 overflow-hidden rounded-[4px] ring-1 ring-black/10">
                      <Flag aria-hidden preserveAspectRatio="xMidYMid slice" className="h-full w-full" />
                    </span>
                    <span className="whitespace-nowrap text-[15px] text-primary">{name}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 04 — capabilities: asymmetric layout ---------------------------------------- */
export function MosqueCapabilities() {
  const rest = ["Multiple languages", "AI voice delivery", "Speaker recognition", "Mobile listening", "Scalable across mosques"];
  return (
    <section id="capabilities" className="scroll-mt-20 rule-b py-16 md:py-28" aria-labelledby="caps-heading">
      <div className="container-v">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Label index="04">What it does</Label>
            <MaskedHeading as="h2" id="caps-heading" lines={["Made for the mosque,", "not adapted to it."]} className="t-display mt-6" />
          </div>
          <p className="t-lead lg:col-span-4 lg:col-start-9" data-reveal>
            Everything a congregation needs to follow the message — and nothing that gets in the way of it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 lg:grid-cols-12">
          {/* tall feature */}
          <div className="group relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[20px] p-6 text-white lg:col-span-5 lg:row-span-2 lg:min-h-0" data-reveal>
            <Image src={IMG.mosqueMinbarDetail.src} alt={IMG.mosqueMinbarDetail.alt} fill sizes="(min-width:1024px) 40vw, 92vw" className="-z-10 object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.04]" />
            <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-t from-[#052e25]/90 via-[#052e25]/15 to-transparent" />
            <span className="t-label !text-white/70">Live</span>
            <h3 className="font-display mt-3 text-[clamp(1.9rem,3vw,2.75rem)] leading-[1] text-white">Live sermon translation</h3>
            <p className="mt-3 max-w-[36ch] text-[14px] leading-snug text-white/80">Friday khutbahs, lectures and announcements — translated in real time, a few seconds behind the imam.</p>
          </div>

          {[
            { t: "QR listener access", d: "One scan and they are in, in the browser. No app to install, no account to make.", img: IMG.mosqueHands },
            { t: "Mosque-level management", d: "Set up the mosque once. Open languages, manage sessions and share the link from a single place.", img: IMG.mosqueOffice },
          ].map((c, i) => (
            <div key={c.t} className="card grid grid-cols-1 overflow-hidden sm:grid-cols-[2fr_3fr] lg:col-span-7" data-reveal style={{ "--reveal-delay": `${(i + 1) * 100}ms` } as React.CSSProperties}>
              <div className="relative min-h-[200px]">
                <Image src={c.img.src} alt={c.img.alt} fill sizes="(min-width:640px) 22vw, 92vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-6">
                <h3 className="font-display text-[clamp(1.5rem,2vw,1.9rem)] leading-[1.05]">{c.t}</h3>
                <p className="t-body mt-3 max-w-[38ch]">{c.d}</p>
              </div>
            </div>
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2.5" data-reveal>
          {rest.map((r) => (
            <li key={r} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[13.5px] text-primary">
              <span className="dot-brand !h-[5px] !w-[5px] !shadow-none" aria-hidden />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 05 — photography ------------------------------------------------------- */
export function MosquePhotograph() {
  return (
    <section className="on-ink relative isolate overflow-hidden bg-ink" aria-label="Vivra in the mosque">
      <Image src={IMG.mosqueExterior.src} alt={IMG.mosqueExterior.alt} fill sizes="100vw" className="-z-10 object-cover opacity-70" />
      <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="container-v flex min-h-[70vh] flex-col justify-end py-16 md:min-h-[86vh] md:py-24">
        <div className="grid grid-cols-4 gap-x-8 md:grid-cols-12">
          <div className="col-span-4 md:col-span-3">
            <Label index="05" className="[&_span]:text-white/60">
              Vivra Mosque
            </Label>
          </div>
          <div className="col-span-4 md:col-span-8 md:col-start-5">
            <MaskedHeading as="p" lines={["Technology that", "stays out of the way."]} className="t-display text-white" />
            <p className="mt-6 max-w-[44ch] text-[17px] leading-snug text-white/75" data-reveal>
              No screens on the walls, no headsets to hand out. The sermon sounds exactly as it does today — and is understood by more of the
              people in the room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
