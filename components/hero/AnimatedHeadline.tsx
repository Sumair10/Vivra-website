"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion/gsap";

const WORDS = ["Mosques", "Events", "Conferences", "Meetings"] as const;
const FULL_LABEL = "AI-Powered Live Translation for Mosques, Events, Conferences, Meetings & Beyond";

const TYPE_MS = 90;
const ERASE_MS = 45;
const HOLD_MS = 1900;
const GAP_MS = 260;

/**
 * "AI-Powered Live Translation for [word] & Beyond".
 * The word is written in by a pen inside a highlighted box, held, erased and
 * replaced by the next. Screen readers get the full sentence; motion is
 * skipped entirely for reduced-motion users.
 */
export function AnimatedHeadline() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState<string>(WORDS[0]);
  const [phase, setPhase] = useState<"hold" | "erase" | "type">("hold");
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAnimated(true);
  }, []);

  useEffect(() => {
    if (!animated) return;
    let t: ReturnType<typeof setTimeout>;
    const word = WORDS[index];

    if (phase === "hold") {
      t = setTimeout(() => setPhase("erase"), HOLD_MS);
    } else if (phase === "erase") {
      if (text.length === 0) {
        t = setTimeout(() => {
          setIndex((i) => (i + 1) % WORDS.length);
          setPhase("type");
        }, GAP_MS);
      } else {
        t = setTimeout(() => setText((s) => s.slice(0, -1)), ERASE_MS);
      }
    } else {
      if (text.length === WORDS[index].length) {
        t = setTimeout(() => setPhase("hold"), 0);
      } else {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), TYPE_MS);
      }
    }
    return () => clearTimeout(t);
  }, [animated, phase, text, index]);

  return (
    <h1 id="hero-heading" aria-label={FULL_LABEL} className="font-display t-headline">
      <span aria-hidden className="block">
        <span className="line-mask" style={{ "--i": 0 } as React.CSSProperties}>
          <span>AI-Powered</span>
        </span>
        <span className="line-mask" style={{ "--i": 1 } as React.CSSProperties}>
          <span>Live Translation for</span>
        </span>
        <span className="mt-[0.06em] flex flex-col items-center justify-center gap-y-[0.02em] md:flex-row md:items-baseline md:gap-x-[0.28em]" data-reveal style={{ "--reveal-delay": "260ms" } as React.CSSProperties}>
          <span className="relative inline-block">
            <span
              className="relative inline-flex min-h-[1.12em] min-w-[0.36em] items-center border-l-[0.06em] border-brand bg-brand-soft px-[0.14em] text-brand-text"
              style={{ transition: "background-color 400ms" }}
            >
              <span>{text || "​"}</span>
            </span>
          </span>
          <span>&amp; Beyond</span>
        </span>
      </span>
    </h1>
  );
}
