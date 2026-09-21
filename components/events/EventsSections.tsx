import Image from "next/image";
import { Figure } from "@/components/media/Figure";
import { Label, MaskedHeading } from "@/components/typography/Label";
import { PhoneMock } from "@/components/products/PhoneMock";
import { IMG } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

/* 02 — the event experience: four cards, same language as the homepage ---- */
export function EventFlow() {
  return (
    <section id="how" className="tone-surface scroll-mt-20 rule-b py-16 md:py-24" aria-labelledby="how-heading">
      <div className="container-v">
        <div className="flex flex-col items-center text-center">
          <Label index="03">How it works</Label>
          <MaskedHeading as="h2" id="how-heading" lines={["From the stage", "to every seat."]} className="t-display mt-6" />
          <p className="t-lead mt-6 max-w-[46ch]" data-reveal>
            The speaker changes nothing. Everyone in the room hears the same moment, in the language they chose.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          <FlowCard n={1} title="The speaker speaks." copy="A microphone, the mixer or a laptop near the sound desk. Nothing changes on stage." i={0}>
            <div className="relative -m-4 aspect-[4/3] overflow-hidden rounded-[12px]">
              <Image src={IMG.eventsPanel.src} alt="" fill sizes="(min-width:1024px) 22vw, 90vw" className="object-cover" />
              <span className="t-label absolute left-3 top-3 !text-white/90">Stage / Input</span>
            </div>
          </FlowCard>
          <FlowCard n={2} title="Understood and translated, live." copy="Each sentence is translated as it is spoken — a few seconds behind, like a human interpreter." i={1}>
            <div className="flex h-full min-h-[150px] flex-col items-center justify-center gap-4">
              <span className="flex items-end gap-[3px]">
                {[5, 11, 7, 14, 6, 12, 5, 10, 7, 13, 5].map((h, k) => (
                  <span key={k} className="wave-bar w-[3px] rounded-full bg-primary" style={{ height: h * 1.7, animationDelay: `${(k * 0.1).toFixed(1)}s` }} />
                ))}
              </span>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                  <path d="M4 7 L12 16 L20 7" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="t-label">AR · EN · FR · HI · ZH</span>
            </div>
          </FlowCard>
          <FlowCard n={3} title="Every language, open at once." copy="Guests pick any language by name or native script, and can switch at any moment." i={2}>
            <ul className="grid grid-cols-2 gap-1.5" aria-hidden>
              {[
                ["English", ""],
                ["العربية", "lang-ar"],
                ["Español", ""],
                ["Français", ""],
                ["हिन्दी", "lang-hi"],
                ["中文", ""],
              ].map(([t, c]) => (
                <li key={t} className={cn("rounded-md border border-line bg-surface px-3 py-2.5 text-[15px] text-primary", c)}>
                  {t}
                </li>
              ))}
            </ul>
          </FlowCard>
          <FlowCard n={4} title="Heard on every phone." copy="A natural voice through earphones, with subtitles on screen." i={3}>
            <div className="flex items-end justify-center gap-3">
              <PhoneMock language="English" text="Welcome, everyone." className="!w-[104px]" />
              <PhoneMock language="العربية" text="أهلاً بكم جميعاً." cls="lang-ar" className="!w-[104px] -translate-y-3" />
            </div>
          </FlowCard>
        </ol>
      </div>
    </section>
  );
}

function FlowCard({ n, i, title, copy, children }: { n: number; i: number; title: string; copy: string; children: React.ReactNode }) {
  return (
    <li className="card flex flex-col gap-5 p-4 md:p-5" data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
      <div className="card-inset flex min-h-[188px] flex-col justify-center overflow-hidden p-4" aria-hidden>
        {children}
      </div>
      <div className="px-1 pb-1">
        <span className="t-label inline-flex rounded-full bg-primary px-2.5 py-1 !text-[10px] !text-background">Step {n}</span>
        <h3 className="font-display mt-4 text-[22px] leading-[1.05] md:text-[24px]">{title}</h3>
        <p className="t-body mt-2.5 max-w-[40ch]">{copy}</p>
      </div>
    </li>
  );
}

export function AccessCard({ title, note, steps, className }: { title: string; note: string; steps: { t: string; d: string }[]; className?: string }) {
  return (
    <div className={cn("flex flex-col justify-between gap-8 rounded-[18px] bg-surface p-5 shadow-[0_18px_40px_-30px_rgba(12,58,62,0.35)] md:p-6", className)} data-reveal>
      <h3 className="font-display text-[clamp(1.4rem,2vw,1.9rem)] leading-[1.05]">{title}</h3>
      <ol className="flex flex-col gap-4">
        {steps.map((s, i) => (
          <li key={s.t} className="grid grid-cols-[1.5rem_1fr] items-baseline gap-2">
            <span className="t-mono text-[11px] text-brand-text">0{i + 1}</span>
            <span>
              <span className="block text-[15px] font-medium leading-tight text-primary">{s.t}</span>
              <span className="mt-0.5 block text-[12.5px] leading-snug text-secondary">{s.d}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="t-label">{note}</p>
    </div>
  );
}

export function PhotoCard({ src, alt, sizes, title, caption, className, tint = "#062a2e" }: { src: string; alt: string; sizes: string; title: string; caption: string; className?: string; tint?: string }) {
  return (
    <div className={cn("relative isolate flex flex-col justify-between overflow-hidden rounded-[18px] p-5 text-white md:p-6", className)} data-reveal>
      <Image src={src} alt={alt} fill sizes={sizes} className="-z-10 object-cover" />
      <span aria-hidden className="absolute inset-0 -z-[5]" style={{ background: `linear-gradient(180deg, ${tint}b3 0%, ${tint}0d 45%, ${tint}bf 100%)` }} />
      <h3 className="font-display max-w-[16ch] text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.05] text-white">{title}</h3>
      <p className="max-w-[34ch] text-[12.5px] leading-snug text-white/80">{caption}</p>
    </div>
  );
}

/* 04 — speaker setups: three image cards ------------------------------------- */
export function SpeakerSetups() {
  const modes = [
    {
      t: "Moderator control",
      s: "One console. You decide who is on air.",
      d: "Sound comes into one laptop near the desk — a microphone, the mixer, a browser tab or a video. When a new person starts talking, the moderator taps their name and the translation follows.",
      best: "Keynotes, moderated sessions, streamed video",
      img: IMG.eventsModeModerator,
    },
    {
      t: "Multi-mic",
      s: "Every speaker on their own microphone.",
      d: "Vivra listens to all microphones at once and follows whoever is talking, even when the discussion jumps across the table. The moderator can lock the floor on one person at any moment.",
      best: "Debates, panels, boardrooms and round tables",
      img: IMG.eventsModeMultimic,
    },
    {
      t: "Voice ID",
      s: "One shared microphone. The voice says who is speaking.",
      d: "Each speaker records a short voice sample before the session. During it, Vivra recognises who has the microphone and names them in every caption.",
      best: "Podiums, passed microphones and Q&A",
      img: IMG.eventsModeVoiceId,
    },
  ];
  return (
    <section id="speakers" className="scroll-mt-20 rule-b py-16 md:py-24" aria-labelledby="speakers-heading">
      <div className="container-v">
        <div className="flex flex-col items-center text-center">
          <Label index="05">Multiple speakers</Label>
          <MaskedHeading as="h2" id="speakers-heading" lines={["One microphone, a full panel,", "or something in between."]} className="t-display mt-6" />
          <p className="t-lead mt-6 max-w-[46ch]" data-reveal>
            Three ways to bring speakers in. Choose per event, and switch while live.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-4 md:mt-16 lg:grid-cols-3">
          {modes.map((m, i) => (
            <li
              key={m.t}
              className="group relative isolate flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[20px] p-5 text-white sm:aspect-[16/11] lg:aspect-[3/4] md:p-6"
              data-reveal
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <Image src={m.img.src} alt={m.img.alt} fill sizes="(min-width:1024px) 33vw, 92vw" className="-z-10 object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
              <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-b from-[#062a2e]/70 via-[#062a2e]/10 to-[#062a2e]/90" />
              <div>
                <span className="t-label !text-white/70">0{i + 1}</span>
                <h3 className="font-display mt-3 text-[clamp(1.75rem,2.6vw,2.5rem)] leading-none text-white">{m.t}</h3>
                <p className="mt-2 max-w-[28ch] text-[15px] leading-snug text-white/90">{m.s}</p>
              </div>
              <div>
                <p className="max-w-[40ch] text-[13px] leading-snug text-white/75">{m.d}</p>
                <p className="mt-4 inline-flex max-w-full rounded-full bg-white/90 px-3 py-1.5 text-[11.5px] font-medium leading-tight text-[#0c3a3e]">
                  <span className="mr-1.5 opacity-60">Best for</span>
                  {m.best}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 02 — Built for Live Events: the facts an organiser decides on ---------------- */
export function LiveEventFacts() {
  const facts = [
    { k: "Languages", v: "80", n: "Speak in any, listen in any. Every language open at every event." },
    { k: "Translation delay", v: "A few seconds", n: "Behind the speaker, like a human interpreter." },
    { k: "Simultaneous attendees", v: "5,000+", n: "At once, from one laptop and one microphone or the room's sound desk." },
    { k: "Captions & audio", v: "Both", n: "A natural voice through earphones, with subtitles on screen." },
    { k: "Access", v: "QR code", n: "Or a short code. No app to install, no account to create." },
    { k: "Devices", v: "Any phone", n: "iPhone or Android, in the browser they already use." },
    { k: "Connectivity", v: "Internet", n: "Guests use venue Wi-Fi or mobile data. The operator laptop needs a stable connection." },
    { k: "Data & security", v: "Not recorded", n: "Nothing is kept unless the organiser keeps the transcript. Voice samples are never stored." },
  ];
  return (
    <section id="facts" className="tone-surface scroll-mt-20 rule-b py-16 md:py-24" aria-labelledby="facts-heading">
      <div className="container-v">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Label index="02">The facts</Label>
            <MaskedHeading as="h2" id="facts-heading" lines={["Built for", "Live Events."]} className="t-display mt-6" />
          </div>
          <p className="t-lead lg:col-span-4 lg:col-start-9" data-reveal>
            Eight things an organiser needs to know before saying yes.
          </p>
        </div>
        <dl className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.k} className="card flex flex-col justify-between gap-8 p-5 md:p-6" data-reveal style={{ "--reveal-delay": `${(i % 4) * 70}ms` } as React.CSSProperties}>
              <dt className="t-label">{f.k}</dt>
              <div>
                <dd className="font-display text-[clamp(1.75rem,2.6vw,2.5rem)] leading-[1] text-brand-text">{f.v}</dd>
                <p className="t-body mt-3 !text-[13.5px]">{f.n}</p>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* 04 — Vivra vs traditional translation ---------------------------------------- */
export function EventsCompare() {
  const rows = [
    { k: "Who translates", a: "Interpreters, usually a team per language", b: "AI live translation, no booth" },
    { k: "Equipment", a: "Booths, consoles, receivers and headsets", b: "Attendees' own phones" },
    { k: "Reaching guests", a: "Receivers handed out, then collected", b: "A QR code, opened in the browser" },
    { k: "Languages", a: "Set in advance, one channel each", b: "Every language open at once" },
    { k: "In the room", a: "Physical installation before the event", b: "One laptop near the sound desk" },
  ];
  return (
    <section id="compare" className="scroll-mt-20 rule-b py-16 md:py-24" aria-labelledby="compare-heading">
      <div className="container-v">
        <div className="flex flex-col items-center text-center">
          <Label index="04">The comparison</Label>
          <MaskedHeading as="h2" id="compare-heading" lines={["Vivra vs", "traditional translation."]} className="t-display mt-6" />
          <p className="t-lead mt-6 max-w-[48ch]" data-reveal>
            Less to hire, ship, set up and collect. The same moment, heard in every language.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[1040px] md:mt-16" data-reveal>
          <div className="hidden grid-cols-[1fr_1.15fr_1.15fr] gap-3 px-2 pb-3 md:grid">
            <span />
            <span className="t-label">Traditional interpretation</span>
            <span className="t-label !text-brand-text">Vivra Events</span>
          </div>
          <ul className="flex flex-col gap-3">
            {rows.map((r) => (
              <li key={r.k} className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1.15fr_1.15fr] md:gap-3">
                <span className="font-display px-2 text-[20px] leading-tight md:self-center md:text-[22px]">{r.k}</span>
                <span className="card flex items-center gap-3 !bg-surface-alt px-4 py-4 text-[14.5px] text-secondary shadow-none">
                  <span aria-hidden className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line-strong text-tertiary">
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5"><path d="M2.5 2.5l7 7M9.5 2.5l-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                  </span>
                  <span><span className="t-label mr-2 md:hidden">Traditional</span>{r.a}</span>
                </span>
                <span className="card flex items-center gap-3 !border-brand px-4 py-4 text-[14.5px] text-primary">
                  <span aria-hidden className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5"><path d="M2.5 6.5l2.4 2.4 4.6-5.3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span><span className="t-label mr-2 !text-brand-text md:hidden">Vivra</span>{r.b}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-[62ch] text-center text-[13px] leading-snug text-secondary">
            Vivra is AI translation. Professional interpreters remain the right choice for some sessions, and where certified human interpretation is
            required the two can work side by side.
          </p>
        </div>
      </div>
    </section>
  );
}
