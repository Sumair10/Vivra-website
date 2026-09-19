import { cn } from "@/lib/utils";

/** Small listener phone. Screen shows the chosen language, one live line and an audio meter. */
export function PhoneMock({
  language,
  text,
  cls,
  className,
  tall,
}: {
  language: string;
  text: string;
  cls?: string;
  className?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={cn("w-[120px] shrink-0 rounded-[16px] border border-line-strong bg-background p-2 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.4)] sm:w-[136px]", className)}
      aria-hidden
    >
      <div className={cn("flex flex-col justify-between rounded-[10px] bg-surface p-3", tall ? "h-[240px]" : "h-[200px]")}>
        <span className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="t-label !text-[9px]">Live</span>
          </span>
          <span className="t-label !text-[9px] text-tertiary">Vivra</span>
        </span>
        <span className={cn("text-[13px] leading-snug text-primary", cls)}>{text}</span>
        <span className="flex items-center justify-between border-t border-line pt-2.5">
          <span className={cn("text-[11px] text-secondary", cls)}>{language}</span>
          <span className="flex items-end gap-[2px]">
            {[3, 6, 4, 7, 3, 5].map((h, k) => (
              <span key={k} className="wave-bar w-[2px] rounded-full bg-brand" style={{ height: h * 1.5, animationDelay: `${(k * 0.12).toFixed(2)}s` }} />
            ))}
          </span>
        </span>
      </div>
    </div>
  );
}
