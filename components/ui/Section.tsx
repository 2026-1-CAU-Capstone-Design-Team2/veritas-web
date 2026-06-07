import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Semantic section wrapper with consistent vertical rhythm and an anchor
 * offset that accounts for the sticky navbar (scroll-mt).
 */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}
    >
      {children}
    </section>
  );
}
