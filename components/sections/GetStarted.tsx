import { Fragment } from "react";
import { Download, Cpu, Rocket, ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { download } from "@/lib/site.config";

const steps = [
  {
    n: "01",
    icon: Download,
    title: "다운로드 & 실행",
    desc: "설치 파일을 받아 더블클릭으로 실행합니다. 개발 환경도, 터미널도 필요 없습니다.",
  },
  {
    n: "02",
    icon: Cpu,
    title: "첫 실행 시 모델 자동 준비",
    desc: "원하는 크기의 로컬 모델(0.8B~9B)을 골라 자동으로 내려받습니다.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "주제 입력 → 시작",
    desc: "새 주제로 조사를 시작하면 워크스페이스가 자동 생성되고, 조사·검증·작성이 이어집니다.",
  },
];

const notes = ["터미널 불필요", "개발 지식 불필요", "API 키 불필요", "100% 무료"];

export function GetStarted() {
  return (
    <Section id="get-started" className="border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="시작하기"
          title={
            <>
              설치 파일 하나로 <span className="text-gradient">끝</span>
            </>
          }
          subtitle="개발 환경도, 터미널도 필요 없습니다. 받아서 실행하면 바로 쓸 수 있습니다."
        />

        <div className="mt-14 flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {steps.map((s, i) => (
            <Fragment key={s.n}>
              <Reveal className="flex-1" delay={i * 0.08}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-4 font-mono text-4xl font-bold text-white/[0.05]"
                  >
                    {s.n}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-sm">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center text-ink-muted/40">
                  <ArrowRight className="hidden h-5 w-5 lg:block" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col items-center gap-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-ink-muted">
              {notes.map((n) => (
                <li key={n} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-sky" />
                  {n}
                </li>
              ))}
            </ul>
            <Button href={download.url} external size="lg">
              <Download className="h-5 w-5" />
              Windows용 무료 다운로드
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
