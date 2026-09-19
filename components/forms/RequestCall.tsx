"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/typography/Label";
import { cn } from "@/lib/utils";

const field =
  "w-full border-b border-line bg-transparent py-3 text-[15px] text-primary placeholder:text-tertiary outline-none transition-colors focus:border-brand";

/** "Request a call" trigger + a short callback form in a native modal <dialog>. */
export function RequestCall({
  variant = "outline",
  size = "lg",
  triggerClassName,
}: {
  variant?: "ink" | "outline" | "brand" | "link";
  size?: "md" | "lg";
  triggerClassName?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // freeze the smooth-scroll page behind the modal
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const sync = () => {
      const open = d.open;
      document.documentElement.classList.toggle("lenis-stopped", open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    d.addEventListener("close", sync);
    d.addEventListener("toggle", sync);
    return () => {
      d.removeEventListener("close", sync);
      d.removeEventListener("toggle", sync);
      document.documentElement.classList.remove("lenis-stopped");
      document.body.style.overflow = "";
    };
  }, []);

  const open = () => {
    setState("idle");
    ref.current?.showModal();
    document.documentElement.classList.add("lenis-stopped");
    document.body.style.overflow = "hidden";
  };
  const close = () => ref.current?.close();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = { ...Object.fromEntries(new FormData(e.currentTarget).entries()), product: "Call request" };
    try {
      const res = await fetch("/api/demo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <>
      {variant === "link" ? (
        <button
          type="button"
          onClick={open}
          className={cn("text-[14px] font-medium text-primary underline decoration-1 underline-offset-[6px] transition-colors hover:text-brand-text", triggerClassName)}
        >
          Request a call
        </button>
      ) : (
        <Button variant={variant} size={size} onClick={open}>
          Request a call
        </Button>
      )}
      <dialog
        ref={ref}
        aria-labelledby="call-title"
        onClick={(e) => e.target === ref.current && close()}
        className="m-auto w-[min(92vw,520px)] rounded-[16px] border border-line bg-background p-0 text-primary shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Label>Request a call</Label>
              <h2 id="call-title" className="font-display mt-3 text-[clamp(1.75rem,3vw,2.25rem)]">
                We&apos;ll call you.
              </h2>
              <p className="t-body mt-2 max-w-[38ch]">Leave a number and a good time to reach you. Someone from Vivra will call back.</p>
            </div>
            <button type="button" onClick={close} aria-label="Close" className="-mr-2 -mt-2 grid h-9 w-9 shrink-0 place-items-center rounded-full text-secondary transition-colors hover:text-primary">
              <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {state === "sent" ? (
            <div className="mt-10 border-t border-line pt-6" role="status">
              <p className="font-display text-[26px] leading-tight">Thank you — we&apos;ll be in touch shortly.</p>
              <div className="mt-6">
                <Button variant="ink" onClick={close} arrow={false}>
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2" noValidate>
              <label className="flex flex-col gap-1.5">
                <span className="t-label">
                  Name <span className="text-brand-text">*</span>
                </span>
                <input name="name" required autoComplete="name" className={field} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="t-label">
                  Phone <span className="text-brand-text">*</span>
                </span>
                <input name="phone" type="tel" required autoComplete="tel" className={field} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="t-label">Organization</span>
                <input name="organization" autoComplete="organization" className={field} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="t-label">Best time to call</span>
                <input name="message" placeholder="e.g. weekdays after 2pm GST" className={field} />
              </label>
              <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" variant="ink" size="lg" disabled={state === "sending"}>
                  {state === "sending" ? "Sending…" : "Request a call"}
                </Button>
                {state === "error" && (
                  <span className="text-sm text-secondary" role="alert">
                    Something went wrong — please email{" "}
                    <a href="mailto:support@vivra.ai" className="underline">
                      support@vivra.ai
                    </a>
                    .
                  </span>
                )}
              </div>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
