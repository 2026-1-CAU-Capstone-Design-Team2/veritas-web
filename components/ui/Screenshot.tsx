"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";
import type { Shot } from "@/lib/site.config";
import { cn } from "@/lib/utils";

/**
 * Renders a product screenshot, falling back to a labeled placeholder frame
 * when the source is absent or fails to load — so the layout never breaks.
 */
export function Screenshot({
  shot,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 820px",
  className,
}: {
  shot: Shot;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (!shot.src || errored) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface text-center">
        <ImageOff className="h-7 w-7 text-ink-muted/60" aria-hidden="true" />
        <span className="max-w-[80%] text-sm font-medium text-ink-muted">
          {shot.label}
        </span>
        <span className="text-xs text-ink-muted/50">미리보기 준비 중</span>
      </div>
    );
  }

  return (
    <Image
      src={shot.src}
      alt={shot.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover object-top", className)}
      onError={() => setErrored(true)}
    />
  );
}
