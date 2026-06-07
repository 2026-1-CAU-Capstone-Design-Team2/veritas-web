import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Chip({
  children,
  className,
  icon,
}: {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-ink-muted",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
