import type { Metadata } from "next";
import { Figure } from "@/components/media/Figure";
import { Label, MaskedHeading } from "@/components/typography/Label";
import { TransitionLink } from "@/components/animation/TransitionLink";
import { Arrow } from "@/components/ui/Button";
import { IMG } from "@/lib/constants/images";
import { PRODUCTS, SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "About",
  description: "Vivra builds real-time AI translation for live human communication — in mosques, at events, in conferences and meetings.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-[72px] md:pt-[100px]">
        <div className="container-v">
          <div className="grid grid-cols-4 rule-t md:grid-cols-12">
            <div className="col-span-4 py-12 md:col-span-7 md:py-20 md:pr-12 lg:py-24">
              <Label index="01" brand>
                About Vivra
              </Label>
              <MaskedHeading as="h1" lines={["One voice.", "Every language."]} className="t-hero mt-8" />
            </div>
            <div className="col-span-4 flex flex-col justify-end border-t border-line py-10 md:col-span-5 md:border-l md:border-t-0 md:py-20 md:pl-12 lg:py-24">
              <p className="t-lead max-w-[38ch]" data-reveal>
                Vivra is a Dubai-based technology company building real-time AI translation for the moments when people gather to listen —
                a khutbah, a keynote, a panel, a meeting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 rule-t md:grid-cols-12">
            <div className="col-span-4 md:col-span-7">
              <Figure
                src={IMG.techRibbons.src}
                width={IMG.techRibbons.w}
                height={IMG.techRibbons.h}
                alt={IMG.techRibbons.alt}
                sizes="(min-width: 768px) 58vw, 100vw"
                className="aspect-[16/10]"
                label="Vivra / Technology"
              />
            </div>
            <div className="col-span-4 flex flex-col justify-between gap-10 py-10 md:col-span-5 md:border-l md:border-line md:py-12 md:pl-12">
              <div className="flex flex-col gap-6 text-[15px] leading-relaxed text-secondary" data-reveal>
                <p>
                  We started with a simple observation: in most rooms where someone speaks, not everyone understands. The equipment that used to
                  solve this — booths, interpreters, headsets — belongs to a very small number of very large events.
                </p>
                <p>
                  Vivra puts live translation on the phone every listener already carries. A speaker speaks naturally; the audience hears a
                  natural voice, in their language, a few seconds behind. The same engine serves a mosque on Friday and a conference on Monday.
                </p>
              </div>
              <div>
                <span className="t-label">Products</span>
                <ul className="mt-3 border-t border-line">
                  {PRODUCTS.map((p) => (
                    <li key={p.key}>
                      <TransitionLink href={p.href} className="group flex items-center justify-between border-b border-line py-4">
                        <span>
                          <span className="font-display block text-[24px]" style={{ color: p.key === "mosque" ? "var(--mosque-primary)" : "var(--events-primary)" }}>
                            {p.name}
                          </span>
                          <span className="text-sm text-secondary">{p.tagline}</span>
                        </span>
                        <Arrow className="text-tertiary transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                      </TransitionLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-8 rule-t rule-b py-10 md:grid-cols-4" data-reveal>
            <div>
              <dt className="t-label">Company</dt>
              <dd className="mt-2 text-sm">{SITE.legalName}</dd>
            </div>
            <div>
              <dt className="t-label">Headquarters</dt>
              <dd className="mt-2 text-sm">{SITE.location}</dd>
            </div>
            <div>
              <dt className="t-label">Email</dt>
              <dd className="mt-2 text-sm">
                <a href={`mailto:${SITE.email}`} className="hover:text-brand-text">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="t-label">Phone</dt>
              <dd className="mt-2 text-sm">
                <a href={SITE.phoneHref} className="hover:text-brand-text">
                  {SITE.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
