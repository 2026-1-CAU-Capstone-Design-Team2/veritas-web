"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * VERITAS wordmark + mark.
 *
 * The mark is two angular blades forming a bold "V" (also reads as a
 * checkmark / shield): left blade deep-blue → royal, right blade royal → sky.
 * Gradient ids are scoped per-instance so multiple logos can coexist.
 */
export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
  wordmark = "VERITAS",
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  wordmark?: string;
}) {
  const raw = useId().replace(/[:]/g, "");
  const left = `vl-${raw}`;
  const right = `vr-${raw}`;

  return (
    <span
      className={cn("inline-flex items-center gap-2.5", className)}
      {...(!showWordmark ? { role: "img", "aria-label": "VERITAS" } : {})}
    >
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={cn("h-7 w-7 shrink-0", markClassName)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={left}
            x1="7"
            y1="11"
            x2="32"
            y2="58"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1D3A8F" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient
            id={right}
            x1="57"
            y1="11"
            x2="31"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        {/* left blade (long, ends at the V point) */}
        <path d="M7 11 L20 11 L41 49 L32 58 Z" fill={`url(#${left})`} />
        {/* right blade (shorter, merges into the seam) */}
        <path d="M57 11 L45 11 L31 42 L38 46 Z" fill={`url(#${right})`} />
      </svg>
      {showWordmark && (
        <span
          className={cn(
            "font-sans text-lg font-extrabold italic tracking-tight",
            wordmarkClassName,
          )}
        >
          {wordmark}
        </span>
      )}
    </span>
  );
}
