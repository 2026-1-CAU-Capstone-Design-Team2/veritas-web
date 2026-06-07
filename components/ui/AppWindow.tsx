import type { ReactNode } from "react";
import type { Shot } from "@/lib/site.config";
import { cn } from "@/lib/utils";
import { Screenshot } from "./Screenshot";

/**
 * Wraps a screenshot (or arbitrary children) in a desktop-app window chrome:
 * traffic-light buttons + a title bar caption. The content area keeps the
 * real screenshot aspect ratio (2880×1700 ≈ 1.694) to avoid layout shift.
 */
export function AppWindow({
  shot,
  caption,
  priority,
  sizes,
  className,
  contentClassName,
  children,
}: {
  shot?: Shot;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  contentClassName?: string;
  children?: ReactNode;
}) {
  const title = caption ?? shot?.label;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-surface shadow-window ring-1 ring-white/5",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-navy-deep/70 px-4 py-2.5">
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </span>
        {title && (
          <span className="ml-2 truncate font-mono text-[11px] text-ink-muted">
            {title}
          </span>
        )}
      </div>
      <div className={cn("relative aspect-[1440/850]", contentClassName)}>
        {children ?? (shot && <Screenshot shot={shot} priority={priority} sizes={sizes} />)}
      </div>
    </div>
  );
}
