import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
  className?: string;
  imgClassName?: string;
  shade?: number;
  caption?: React.ReactNode;
  label?: React.ReactNode;
  /** "auto" inverts against any image; "light" is plain white for dark photographs */
  labelTone?: "auto" | "light";
  priority?: boolean;
};

/** Image module with the house treatment: quiet crop, optional bottom shade, tiny corner label. */
export function Figure({ className, imgClassName, shade = 0, caption, label, labelTone = "auto", alt, sizes, ...img }: Props) {
  return (
    <figure className={cn("img-treat", className)} style={{ "--img-shade": shade } as React.CSSProperties}>
      <Image alt={alt} sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"} className={imgClassName} {...img} />
      {label && <span className={`t-label absolute left-4 top-4 z-[1] !text-white/90 ${labelTone === "auto" ? "mix-blend-difference" : ""}`}>{label}</span>}
      {caption && <figcaption className="absolute bottom-4 left-4 z-[1] text-[12px] text-white/80">{caption}</figcaption>}
    </figure>
  );
}
