import { Label, MaskedHeading } from "@/components/typography/Label";
import { cn } from "@/lib/utils";

/**
 * Capabilities as modules: a small illustrative panel above each title.
 * Copy follows the existing Vivra product feature set.
 */
export function Technology() {
  return (
    <section id="technology" className="scroll-mt-20 rule-b" aria-labelledby="tech-heading">
      <div className="container-v py-16 md:py-24">
        <div className="grid grid-cols-4 gap-x-8 gap-y-6 md:grid-cols-12 md:items-end">
          <div className="col-span-4 md:col-span-6">
            <Label index="06">Technology</Label>
            <MaskedHeading as="h2" id="tech-heading" lines={["Translation built", "for the moment."]} className="t-display mt-6" />
          </div>
          <p className="t-lead col-span-4 max-w-[40ch] md:col-span-5 md:col-start-8" data-reveal>
            Engineered for live speech: interruptions, accents, several people talking, not for text pasted into a box.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          <Feature i={0} title="Real-time translation" copy="Speech is processed and translated while the conversation is happening, a few seconds behind the speaker.">
            <div className="flex flex-col gap-2">
              <Line label="EN" text="Welcome, everyone." />
              <Line label="AR" text="مرحباً بالجميع." cls="lang-ar" />
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-line">
                <div className="h-full w-2/3 rounded-full bg-brand" />
              </div>
            </div>
          </Feature>
          <Feature i={1} title="Multilingual delivery" copy="One speaker reaches listeners across many languages simultaneously. Every language is open at every session.">
            <ul className="flex flex-wrap gap-1.5">
              {[
                ["English", ""],
                ["العربية", "lang-ar"],
                ["Deutsch", ""],
                ["हिन्दी", "lang-hi"],
                ["Français", ""],
                ["Türkçe", ""],
                ["中文", ""],
                ["Kiswahili", ""],
              ].map(([t, c]) => (
                <li key={t} className={cn("rounded-md border border-line bg-surface px-2.5 py-1 text-[12px] text-primary", c)}>
                  {t}
                </li>
              ))}
            </ul>
          </Feature>
          <Feature i={2} title="AI voice" copy="A natural spoken voice in each language, alongside readable subtitles, not robotic translated text.">
            <div className="flex items-center justify-between rounded-md border border-line bg-surface px-3 py-2.5">
              <span className="flex items-end gap-[2px]" aria-hidden>
                {[4, 10, 6, 14, 8, 12, 5, 9, 6, 11, 4].map((h, k) => (
                  <span key={k} className="wave-bar w-[2px] rounded-full bg-brand" style={{ height: h * 1.4, animationDelay: `${(k * 0.09).toFixed(2)}s` }} />
                ))}
              </span>
              <span className="flex items-center gap-2 text-[12px] text-secondary">
                Voice
                <span className="relative h-4 w-7 rounded-full bg-brand">
                  <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
                </span>
              </span>
            </div>
          </Feature>
          <Feature i={3} title="Speaker recognition" copy="Follows whoever is talking across several microphones, or identifies speakers by voice on a shared one, and names them.">
            <div className="flex flex-col gap-1.5 text-[12px]">
              {[
                ["Speaker A", true],
                ["Speaker B", false],
                ["Speaker C", false],
              ].map(([n, on]) => (
                <div key={n as string} className="flex items-center justify-between rounded-md border border-line bg-surface px-3 py-1.5">
                  <span className="flex items-center gap-2">
                    <span className={cn("h-5 w-5 rounded-full", on ? "bg-brand" : "bg-line")} />
                    <span className={on ? "text-primary" : "text-secondary"}>{n as string}</span>
                  </span>
                  <span className={cn("text-[10px] uppercase tracking-[0.12em]", on ? "text-brand-text" : "text-tertiary")}>{on ? "Speaking" : "Idle"}</span>
                </div>
              ))}
            </div>
          </Feature>
          <Feature i={4} title="Low-latency streaming" copy="Audio goes from the microphone to the listener's phone without booths, headsets or dedicated hardware.">
            <div className="flex items-center gap-2 text-[11px] text-secondary">
              <Node>Speaker</Node>
              <Wire />
              <Node brand>Vivra</Node>
              <Wire />
              <Node>Listener</Node>
            </div>
          </Feature>
          <Feature i={5} title="QR listener access" copy="Listeners scan once and join in the browser on their own phone. No app, no download, no account.">
            <div className="flex items-center gap-3 text-[12px]">
              <div className="grid h-14 w-14 shrink-0 grid-cols-6 gap-[2px] rounded-md bg-surface p-1.5" aria-hidden>
                {Array.from({ length: 36 }, (_, i) => (
                  <span key={i} className={cn("rounded-[1px]", (i * 7 + Math.floor(i / 6) * 3) % 4 === 0 || i < 2 || i > 33 ? "bg-primary" : "")} />
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary">Scan to listen</span>
                <span className="text-secondary">Opens in the browser</span>
              </div>
            </div>
          </Feature>
        </ul>
      </div>
    </section>
  );
}

function Feature({ i, title, copy, children }: { i: number; title: string; copy: string; children: React.ReactNode }) {
  return (
    <li className="card flex flex-col gap-5 p-4 md:p-5" data-reveal style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}>
      <div className="card-inset flex min-h-[132px] flex-col justify-center p-4" aria-hidden>
        {children}
      </div>
      <div className="px-1 pb-1">
        <h3 className="font-display text-[22px] leading-none md:text-[24px]">{title}</h3>
        <p className="t-body mt-2.5 max-w-[40ch]">{copy}</p>
      </div>
    </li>
  );
}

function Line({ label, text, cls }: { label: string; text: string; cls?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 rounded-md border border-line bg-surface px-3 py-2">
      <span className="t-label !text-[9px]">{label}</span>
      <span className={cn("text-[13px] text-primary", cls)}>{text}</span>
    </div>
  );
}
function Node({ children, brand }: { children: React.ReactNode; brand?: boolean }) {
  return <span className={cn("rounded-md border px-2.5 py-1.5", brand ? "border-brand bg-brand text-white" : "border-line bg-surface text-primary")}>{children}</span>;
}
function Wire() {
  return (
    <span className="relative h-px flex-1 bg-line-strong" aria-hidden>
      <span className="absolute -top-[2px] h-[5px] w-[5px] rounded-full bg-brand" style={{ animation: "wire 1.8s linear infinite" }} />
      <style>{`@keyframes wire{from{left:0}to{left:100%}}`}</style>
    </span>
  );
}
