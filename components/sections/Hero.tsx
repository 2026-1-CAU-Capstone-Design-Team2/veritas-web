import { Download, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AppWindow } from "@/components/ui/AppWindow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { shots, site, download } from "@/lib/site.config";

const badges = [
  "100% 로컬 처리",
  "사내 자료 외부 전송 0",
  "API 키 불필요",
  "설치 후 실행만",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-12%] h-[560px] w-[880px] -translate-x-1/2 rounded-full bg-royal/20 blur-[130px] animate-drift" />
        <div className="absolute right-[6%] top-[14%] h-[360px] w-[360px] rounded-full bg-sky/15 blur-[110px] animate-float" />
        <div className="mask-fade-y absolute inset-0 bg-grid opacity-50" />
      </div>

      <Container>
        <Stagger
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
          gap={0.1}
        >
          <StaggerItem>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-sky sm:text-xs">
              {site.category}
            </span>
          </StaggerItem>

          <StaggerItem>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              주제만 주면, 조사 · 작성 · 검증을 —
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient">전부 내 PC 안에서.</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
              자료조사부터 보고서 초안, 근거 정합성 검증, 작성 중 실시간 보조까지
              — 데이터를 외부로 보내지 않고 하나의 워크스페이스에서. 설치 파일을
              받아 실행만 하면 됩니다.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Button href={download.url} external size="lg">
                <Download className="h-5 w-5" />
                Windows용 무료 다운로드
              </Button>
              <Button href="#workflow" variant="secondary" size="lg">
                작동 방식 보기
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </StaggerItem>

          <StaggerItem>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-muted sm:text-sm">
              {badges.map((b) => (
                <li key={b} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 shrink-0 text-sky" />
                  {b}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>
      </Container>

      <Container className="mt-14 sm:mt-16">
        <Reveal className="relative mx-auto max-w-5xl" y={28}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -top-12 bottom-0 -z-10 bg-radial-glow blur-2xl"
          />
          <AppWindow
            shot={shots.dashboard}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </Reveal>
      </Container>
    </section>
  );
}
