"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { GithubIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, site, download } from "@/lib/site.config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-white/10 bg-navy/80 backdrop-blur-xl"
          : "border-transparent",
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between gap-4"
          aria-label="주요 메뉴"
        >
          <a href="#top" aria-label="VERITAS 홈" className="rounded-md">
            <Logo markClassName="h-7 w-7" wordmarkClassName="text-base sm:text-lg" />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-1 md:flex">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub 저장소"
              className="rounded-md p-2 text-ink-muted transition-colors hover:text-ink"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <Button href={download.url} external size="md">
              <Download className="h-4 w-4" />
              무료 다운로드
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            className="-mr-2 rounded-md p-2 text-ink md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-white/10 bg-navy/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96 border-t" : "max-h-0",
        )}
      >
        <Container>
          <div className="flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3 px-1">
              <Button
                href={download.url}
                external
                size="md"
                className="flex-1"
              >
                <Download className="h-4 w-4" />
                무료 다운로드
              </Button>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub 저장소"
                className="rounded-full border border-white/15 p-2.5 text-ink-muted transition-colors hover:text-ink"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
