"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type Segment = { key: string; pct: number; className: string };

/**
 * Horizontal bar made of one or more segments whose widths are a percentage
 * of the full track (the track = the chart's axis max). Segments grow into
 * view; static when the user prefers reduced motion.
 */
export function MeterBar({
  segments,
  className,
}: {
  segments: Segment[];
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "flex h-3 w-full overflow-hidden rounded-full bg-white/5",
        className,
      )}
    >
      {segments.map((s) =>
        reduce ? (
          <div
            key={s.key}
            style={{ width: `${s.pct}%` }}
            className={s.className}
          />
        ) : (
          <motion.div
            key={s.key}
            className={s.className}
            initial={{ width: 0 }}
            whileInView={{ width: `${s.pct}%` }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.21, 0.5, 0.25, 1] }}
          />
        ),
      )}
    </div>
  );
}
