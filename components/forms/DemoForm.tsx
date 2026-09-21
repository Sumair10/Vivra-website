"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Product = "Vivra Mosque" | "Vivra Events" | "General Vivra Inquiry";

const field =
  "w-full border-b border-line bg-transparent py-3 text-[15px] text-primary placeholder:text-tertiary outline-none transition-colors focus:border-brand";

export function DemoForm({ defaultProduct = "General Vivra Inquiry", variant = "ink" }: { defaultProduct?: Product; variant?: "ink" | "brand" }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/demo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="flex min-h-[320px] flex-col justify-center border-t border-line pt-8" role="status">
        <span className="t-label">Request received</span>
        <p className="font-display mt-4 text-[clamp(1.75rem,3vw,2.5rem)]">Thank you. We&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form id="demo-form" onSubmit={onSubmit} className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2" noValidate>
      <Field label="Name" name="name" autoComplete="name" required />
      <Field label="Organization" name="organization" autoComplete="organization" />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      <label className="flex flex-col gap-1.5 sm:col-span-2">
        <span className="t-label">Product</span>
        <select name="product" defaultValue={defaultProduct} className={cn(field, "cursor-pointer appearance-none")}>
          <option>Vivra Mosque</option>
          <option>Vivra Events</option>
          <option>General Vivra Inquiry</option>
        </select>
      </label>
      <label className="flex flex-col gap-1.5 sm:col-span-2">
        <span className="t-label">Message</span>
        <textarea name="message" rows={3} className={cn(field, "resize-none")} placeholder="Tell us about your venue, audience and languages." />
      </label>
      {/* honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant={variant} size="lg" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Request Demo"}
        </Button>
        {state === "error" && (
          <span className="text-sm text-secondary" role="alert">
            Something went wrong. Email us at{" "}
            <a href="mailto:info@vivra.ai" className="underline">
              info@vivra.ai
            </a>
            .
          </span>
        )}
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", required, autoComplete }: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="t-label">
        {label}
        {required && <span className="text-brand-text"> *</span>}
      </span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} className={field} />
    </label>
  );
}
