import { Label } from "@/components/typography/Label";
import { AnimatedHeadline } from "@/components/hero/AnimatedHeadline";
import { ParticleSphere } from "@/components/hero/ParticleSphere";

/**
 * Master-brand hero. No call to action by design — the homepage is the loud
 * statement; the products underneath carry the demo requests.
 */
export function VivraHero() {
  return (
    <section className="hero-bg relative overflow-hidden pt-[72px] md:pt-[100px]" aria-labelledby="hero-heading">
      <ParticleSphere className="pointer-events-none absolute left-1/2 top-[10%] h-[80%] w-[110vw] -translate-x-1/2 opacity-90 md:top-[4%] md:h-[96%] md:w-[min(1180px,150vw)]" />
      <div className="container-v relative">
        <div className="flex flex-col items-center pb-12 pt-16 text-center md:pb-14 md:pt-24 lg:pt-28">
          <Label index="01" brand>
            Real-time AI translation
          </Label>
          <div className="relative mt-10 w-full">
            <span aria-hidden className="hero-rule absolute inset-x-0 -top-6" />
            <AnimatedHeadline />
            <span aria-hidden className="hero-rule absolute inset-x-0 -bottom-6" style={{ animationDelay: "-2.7s" }} />
          </div>
          <p className="t-lead mt-14 max-w-[52ch]" data-reveal style={{ "--reveal-delay": "500ms" } as React.CSSProperties}>
            Vivra translates live speech into multiple languages in real time — connecting audiences across mosques, events, conferences
            and conversations.
          </p>
        </div>
      </div>
    </section>
  );
}
