import Image from "next/image";
import { BRAND_LOGOS, type Brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

/**
 * The supplied logo lock-ups, untouched. `height` controls rendered size;
 * width follows the asset's own proportions.
 */
export function BrandLogo({
  brand,
  className,
  height = 40,
  priority,
}: {
  brand: Brand;
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  const l = BRAND_LOGOS[brand];
  const width = Math.round((l.width / l.height) * height);
  return (
    <Image
      src={l.src}
      alt={l.alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("w-auto select-none", className)}
      style={{ height }}
      sizes={`${width * 2}px`}
    />
  );
}
