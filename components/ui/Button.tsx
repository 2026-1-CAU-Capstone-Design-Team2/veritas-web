import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 will-change-transform disabled:opacity-50";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px] sm:text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-glow-sm hover:-translate-y-0.5 hover:shadow-glow",
  secondary:
    "border border-white/15 bg-white/[0.06] text-ink backdrop-blur hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1]",
  ghost: "text-ink-muted hover:text-ink",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
  children,
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
