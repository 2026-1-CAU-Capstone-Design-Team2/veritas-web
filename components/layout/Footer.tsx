import { ArrowUp, Download } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { GithubIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { site, download } from "@/lib/site.config";

const productLinks = [
  { label: "기능", href: "#features" },
  { label: "작동 방식", href: "#workflow" },
  { label: "성능", href: "#benchmark" },
  { label: "자주 묻는 질문", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo markClassName="h-7 w-7" wordmarkClassName="text-lg" />
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
              수집한 근거에 끝까지 책임지는 글쓰기 — VERITAS
            </p>
            <p className="text-xs leading-relaxed text-ink-muted/70">
              100% 로컬 처리 · 사내 자료 외부 전송 0 · Windows 전용
            </p>
          </div>

          <nav aria-label="제품" className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted/60">
              제품
            </span>
            {productLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="w-fit text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <nav aria-label="시작하기" className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted/60">
              시작하기
            </span>
            <a
              href={download.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              <Download className="h-4 w-4" />
              무료 다운로드
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#top"
              className="inline-flex w-fit items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowUp className="h-4 w-4" />
              맨 위로
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-ink-muted/60 sm:flex-row">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p className="text-center sm:text-right">{site.name} — {site.backronym}</p>
        </div>
      </Container>
    </footer>
  );
}
