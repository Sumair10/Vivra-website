"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/animation/TransitionLink";
import { Arrow } from "@/components/ui/Button";
import { PRODUCTS, SITE } from "@/lib/constants/site";
import { brandFromPath } from "@/lib/brand";

const COMPANY = [
  { label: "Technology", href: "/#technology" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "mailto:support@vivra.ai" },
];
const LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  const pathname = usePathname();
  const brand = brandFromPath(pathname);
  const word = brand === "vivra" ? "VIVRA" : brand === "events" ? "EVENTS" : "MOSQUE";
  const size = brand === "vivra" ? "text-[26vw]" : "text-[21.5vw]";

  return (
    <footer className="on-ink relative overflow-hidden bg-ink" style={{ "--brand-fill": "var(--brand-primary)" } as React.CSSProperties}>
      <div className="container-v">
        <div className="grid grid-cols-4 gap-y-12 border-b border-line py-16 md:grid-cols-12 md:py-24">
          <div className="col-span-4 md:col-span-5">
            <span className="t-label">{brand === "vivra" ? "Vivra Technology" : `Vivra ${brand} — a Vivra technology`}</span>
            <p className="font-display mt-6 max-w-[14ch] text-[clamp(1.75rem,3vw,2.75rem)] text-white">
              Real-time intelligence for human communication.
            </p>
            <div className="mt-10 flex flex-col gap-2 text-sm text-secondary">
              <a href={`mailto:${SITE.email}`} className="w-fit transition-colors hover:text-white">
                {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="w-fit transition-colors hover:text-white">
                {SITE.phone}
              </a>
              <span>{SITE.location}</span>
            </div>
          </div>

          <FooterCol title="Products" className="col-span-2 md:col-span-2 md:col-start-7">
            {PRODUCTS.map((p) => (
              <FooterLink key={p.key} href={p.href}>
                {p.name}
              </FooterLink>
            ))}
          </FooterCol>
          <FooterCol title="Company" className="col-span-2 md:col-span-2">
            {COMPANY.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>
          <FooterCol title="Legal" className="col-span-2 md:col-span-2">
            {LEGAL.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>
        </div>

        <div className="flex flex-col gap-3 py-6 text-[12px] text-tertiary sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <span className="t-label">One intelligence. Every language.</span>
        </div>
      </div>

      {/* giant wordmark, cut by the bottom edge like a printed page */}
      <div aria-hidden className="pointer-events-none relative h-[18vw] max-h-[260px] min-h-[96px] select-none overflow-hidden">
        <span
          className={`font-display absolute left-1/2 top-[8%] -translate-x-1/2 whitespace-nowrap ${size} font-medium leading-none tracking-[-0.06em]`}
          style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.14)" }}
        >
          {word}
        </span>
        <span
          className={`font-display absolute left-1/2 top-[8%] -translate-x-1/2 whitespace-nowrap ${size} font-medium leading-none tracking-[-0.06em]`}
          style={{
            backgroundImage: "linear-gradient(180deg, var(--brand-fill) 0%, transparent 78%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            opacity: 0.55,
          }}
        >
          {word}
        </span>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <span className="t-label">{title}</span>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  );
}
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <TransitionLink href={href} className="group inline-flex items-center gap-2 text-[15px] text-white/85 transition-colors hover:text-white" {...(href.startsWith("mailto:") ? { rel: "noopener" } : {})}>
        {children}
        <Arrow className="h-2.5 w-2.5 text-tertiary transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      </TransitionLink>
    </li>
  );
}
