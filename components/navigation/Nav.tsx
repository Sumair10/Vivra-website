"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/animation/TransitionLink";
import { BrandLogo } from "@/components/navigation/BrandLogo";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { Button, Arrow } from "@/components/ui/Button";
import { NAV_LINKS, PRODUCTS } from "@/lib/constants/site";
import { brandFromPath } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const brand = brandFromPath(pathname);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus on route change (state adjusted during render, no effect needed)
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
    setProducts(false);
  }
  // lock scroll while the sheet is open
  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setOpen(false), setProducts(false));
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProducts(true);
  };
  const closeProducts = () => {
    closeTimer.current = setTimeout(() => setProducts(false), 140);
  };

  // which item is "current": route on product/about pages, scroll-spy on the homepage
  const [spy, setSpy] = useState<string>("home");
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["products", "technology", "solutions"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let cur = "home";
      for (const el of els) if (el.getBoundingClientRect().top <= line) cur = el.id;
      setSpy(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
  const activeKey =
    pathname === "/" ? spy : pathname.startsWith("/events") || pathname.startsWith("/mosque") ? "products" : pathname.startsWith("/about") ? "about" : "";
  const pill = (on: boolean) =>
    cn(
      "rounded-full px-4 py-1.5 text-[13px] font-medium tracking-[-0.01em] transition-colors duration-300",
      on ? "bg-primary text-background" : "text-primary/80 hover:bg-surface-alt hover:text-primary",
    );

  const demoHref = `${pathname.split("#")[0]}#demo`;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled || open
            ? "border-b border-line bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
            : "border-b border-transparent",
        )}
      >
        <div className="container-v flex h-16 items-center justify-between md:h-[76px]">
          {/* left: logo + relationship line */}
          <div className="flex items-center gap-4">
            <TransitionLink href={brand === "vivra" ? "/" : `/${brand}`} aria-label={`${brand === "vivra" ? "Vivra" : `Vivra ${brand}`} home`} className="flex items-center">
              <BrandLogo brand={brand} height={44} priority className="translate-y-[1px] max-md:!h-9" />
            </TransitionLink>
            {brand !== "vivra" && (
              <TransitionLink href="/" className="t-label hidden items-center gap-2 border-l border-line pl-4 text-tertiary transition-colors hover:text-primary lg:inline-flex">
                A Vivra technology
              </TransitionLink>
            )}
          </div>

          {/* centre: desktop links — a pill, current page/section highlighted */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 rounded-full border border-line bg-surface/70 p-1 shadow-[0_8px_24px_-16px_rgba(11,11,12,0.3)] backdrop-blur-md lg:flex"
          >
            <TransitionLink href="/" aria-current={activeKey === "home" ? "page" : undefined} className={pill(activeKey === "home")}>
              Home
            </TransitionLink>
            <div className="relative" onMouseEnter={openProducts} onMouseLeave={closeProducts}>
              <button
                type="button"
                aria-expanded={products}
                aria-haspopup="true"
                onClick={() => setProducts((p) => !p)}
                className={cn(pill(activeKey === "products"), "flex items-center gap-1.5")}
              >
                Products
                <svg viewBox="0 0 10 10" className={cn("h-2.5 w-2.5 transition-transform duration-300", products && "rotate-180")} aria-hidden>
                  <path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>
              <div
                className={cn(
                  "absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4 transition-[opacity,transform] duration-300 ease-[var(--ease-out)]",
                  products ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
                )}
              >
                <div className="grid grid-cols-2 overflow-hidden rounded-[16px] border border-line bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
                  {PRODUCTS.map((p, i) => (
                    <TransitionLink
                      key={p.key}
                      href={p.href}
                      className={cn("group/p flex flex-col gap-8 p-6 transition-colors hover:bg-surface-alt", i === 0 && "border-r border-line")}
                    >
                      <span className="t-label flex items-center justify-between">
                        <span>Product / 0{i + 1}</span>
                        <Arrow className="text-tertiary transition-transform duration-300 group-hover/p:-translate-y-[2px] group-hover/p:translate-x-[2px]" />
                      </span>
                      <span>
                        <span className="font-display block text-[22px] leading-none" style={{ color: p.key === "mosque" ? "var(--mosque-primary)" : "var(--events-primary)" }}>
                          {p.name}
                        </span>
                        <span className="mt-2 block text-[13px] leading-snug text-secondary">{p.description}</span>
                      </span>
                    </TransitionLink>
                  ))}
                </div>
              </div>
            </div>
            {NAV_LINKS.map((l) => {
              const key = l.href.startsWith("/#") ? l.href.slice(2) : l.label.toLowerCase();
              return (
                <TransitionLink key={l.href} href={l.href} aria-current={activeKey === key ? "page" : undefined} className={pill(activeKey === key)}>
                  {l.label}
                </TransitionLink>
              );
            })}
          </nav>

          {/* right */}
          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle className="hidden sm:inline-flex" />
            {brand !== "vivra" && (
              <Button href={demoHref} size="sm" variant="brand" className="hidden md:inline-flex">
                Request Demo
              </Button>
            )}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span className={cn("absolute h-px w-5 bg-primary transition-transform duration-400 ease-[var(--ease-out)]", open ? "rotate-45" : "-translate-y-[3.5px]")} />
              <span className={cn("absolute h-px w-5 bg-primary transition-transform duration-400 ease-[var(--ease-out)]", open ? "-rotate-45" : "translate-y-[3.5px]")} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile sheet */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-background pt-16 transition-[clip-path] duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden",
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]",
        )}
      >
        <div className="container-v flex flex-1 flex-col overflow-y-auto pb-8 pt-6">
          <span className="t-label">Products</span>
          <div className="mt-3 border-t border-line">
            {PRODUCTS.map((p, i) => (
              <TransitionLink
                key={p.key}
                href={p.href}
                className="group flex items-center justify-between border-b border-line py-5"
                style={{ transitionDelay: `${80 + i * 60}ms` }}
              >
                <span>
                  <span className="font-display block text-[32px] leading-none" style={{ color: p.key === "mosque" ? "var(--mosque-primary)" : "var(--events-primary)" }}>
                    {p.name}
                  </span>
                  <span className="mt-1.5 block text-sm text-secondary">{p.tagline}</span>
                </span>
                <Arrow className="h-4 w-4 text-tertiary" />
              </TransitionLink>
            ))}
          </div>

          <span className="t-label mt-10">Company</span>
          <div className="mt-3 border-t border-line">
            <TransitionLink href="/" className="font-display flex items-center justify-between border-b border-line py-4 text-[26px] leading-none">
              Home
              <Arrow className="h-3.5 w-3.5 text-tertiary" />
            </TransitionLink>
            {NAV_LINKS.map((l) => (
              <TransitionLink key={l.href} href={l.href} className="font-display flex items-center justify-between border-b border-line py-4 text-[26px] leading-none">
                {l.label}
                <Arrow className="h-3.5 w-3.5 text-tertiary" />
              </TransitionLink>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-10">
            {brand !== "vivra" ? (
              <Button href={demoHref} variant="brand" size="lg">
                Request Demo
              </Button>
            ) : (
              <Button href="/#products" variant="ink" size="lg">
                Explore products
              </Button>
            )}
            <div className="flex items-center gap-3">
              <span className="t-label">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
