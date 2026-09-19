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
          <Label index="02">The event experience</Label>
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
          <FlowCard n={4} title="Heard on every phone." copy="A natural voice through earphones, with subtitles on screen. No app, no headset, no booth." i={3}>
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

/* 03 — listener access: one framed panel, title block + white cards + image cards ---- */
export function ListenerJourney() {
  const guest = [
    { t: "Scan the code", d: "On the screen, the chair or the invitation." },
    { t: "Pick a language", d: "Any open language. Switch at any time." },
    { t: "Listen", d: "Natural voice with subtitles, seconds behind." },
  ];
  const organiser = [
    { t: "Set up the event", d: "Add speakers and languages. Get a code and QR." },
    { t: "Show the code", d: "Big screen, the door, or every chair." },
    { t: "Go live", d: "Any laptop near the sound desk. One button." },
  ];
  return (
    <section id="access" className="tone-soft scroll-mt-20 rule-b py-12 md:py-20" aria-labelledby="access-heading">
      <div className="container-v">
        <div className="access-panel rounded-[28px] border border-line p-3 md:p-4">
          <div className="grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-12">
            {/* title block */}
            <div className="flex flex-col justify-between gap-10 p-4 md:p-8 lg:col-span-6">
              <Label index="03">Listener access</Label>
              <div>
                <MaskedHeading as="h2" id="access-heading" lines={["Ten seconds", "for a guest."]} className="t-display" />
                <p className="t-lead mt-6 max-w-[40ch]" data-reveal>
                  Nothing to download on either side. Two minutes for you, ten seconds for everyone else.
                </p>
              </div>
            </div>

            <AccessCard title="For guests" note="About ten seconds" steps={guest} className="lg:col-span-3" />
            <AccessCard title="For organisers" note="About two minutes, once" steps={organiser} className="lg:col-span-3" />

            {/* image cards */}
            <PhotoCard
              className="aspect-[16/10] lg:col-span-8 lg:aspect-auto lg:min-h-[340px]"
              src={IMG.eventsConfHall.src}
              alt={IMG.eventsConfHall.alt}
              sizes="(min-width:1024px) 60vw, 92vw"
              title="Show the code on the big screen."
              caption="Guests point their camera at it and they're in. No booth, no headsets to hand out."
            />
            <PhotoCard
              className="aspect-[4/5] sm:aspect-[16/10] lg:col-span-4 lg:aspect-auto"
              src={IMG.eventsListener.src}
              alt={IMG.eventsListener.alt}
              sizes="(min-width:1024px) 30vw, 92vw"
              title="Listen in your own language."
              caption="Voice and subtitles on the phone in their pocket."
            />
          </div>
        </div>
      </div>
    </section>
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
          <Label index="04">Multiple speakers</Label>
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

/* 05 — event scale (dark) ----------------------------------------------- */
export function EventScale() {
  const points = [
    { t: "No booths, no headsets", d: "The room stays as it is. Guests point their camera at a code and put their earphones in." },
    { t: "One laptop, one microphone", d: "Or the room's sound desk. Run it from any laptop near the sound engineer." },
    { t: "Every language, every event", d: "Open all of them. Guests hear each speaker, in order, with their name." },
    { t: "Any audience size", d: "Guests listen on the phone in their pocket, so the room can be as large as the venue." },
  ];
  return (
    <section className="on-ink relative isolate overflow-hidden bg-ink" aria-labelledby="scale-heading">
      <Image
        src={IMG.eventsAuditorium.src}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-40"
        aria-hidden
      />
      <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="container-v grid grid-cols-4 gap-x-8 py-20 md:grid-cols-12 md:py-32">
        <div className="col-span-4 md:col-span-5">
          <Label index="05" className="[&_span]:text-white/60">
            Event scale
          </Label>
          <MaskedHeading as="h2" id="scale-heading" lines={["Built for the room,", "whatever its size."]} className="t-display mt-6 text-white" />
        </div>
        <ul className="col-span-4 mt-12 border-t border-line md:col-span-6 md:col-start-7 md:mt-0">
          {points.map((p, i) => (
            <li key={p.t} className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-b border-line py-6" data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
              <span className="t-mono text-xs text-brand-accent">0{i + 1}</span>
              <div>
                <h3 className="font-display text-[clamp(1.4rem,2.2vw,2rem)] text-white">{p.t}</h3>
                <p className="mt-2 max-w-[44ch] text-[15px] leading-snug text-secondary">{p.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
