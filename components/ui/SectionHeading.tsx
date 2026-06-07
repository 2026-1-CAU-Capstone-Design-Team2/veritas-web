import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-gradient font-mono text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-ink" : "text-navy",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-muted" : "text-navy/70",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
