import { Cpu, BadgeCheck, Workflow } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const values = [
  {
    n: "01",
    en: "Local-first",
    ko: "로컬 우선",
    icon: Cpu,
    desc: "추론·임베딩·검색·검증·저장이 전부 내 PC 안에서 일어납니다. 사내 문서는 한 글자도 밖으로 나가지 않습니다.",
  },
  {
    n: "02",
    en: "Verifiable",
    ko: "검증 가능",
    icon: BadgeCheck,
    desc: "단순 요약이 아니라, 수집한 근거를 IR·NLP 알고리즘과 LLM으로 다시 검증합니다. 신뢰도와 근거를 눈으로 확인하세요.",
  },
  {
    n: "03",
    en: "Autonomous",
    ko: "자율 리서치",
    icon: Workflow,
    desc: "주제 하나로 계획 → 수집 → 요약 → 보완 → 리포트까지. 부족한 부분은 스스로 다시 찾아 채웁니다.",
  },
];

export function CoreValues() {
  return (
    <Section id="values">
      <Container>
        <SectionHeading
          eyebrow="세 가지 핵심 가치"
          title={
            <>
              VERITAS를 지탱하는 <span className="text-gradient">세 개의 축</span>
            </>
          }
          subtitle="로컬에서 끝나고, 근거를 검증하며, 스스로 리서치합니다."
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3" gap={0.12}>
          {values.map((v) => (
            <StaggerItem key={v.en} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 font-mono text-5xl font-bold text-white/[0.04]"
                >
                  {v.n}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-sm">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold italic tracking-tight text-ink">
                  {v.en}
                </h3>
                <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-sky">
                  {v.ko}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {v.desc}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
