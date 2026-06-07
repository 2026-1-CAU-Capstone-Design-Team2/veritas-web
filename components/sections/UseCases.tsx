import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Stethoscope, FlaskConical, BookOpen, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

type Persona = {
  icon: LucideIcon;
  label: string;
  role: string;
  quote: string;
};

const personas: Persona[] = [
  {
    icon: ShieldCheck,
    label: "보안이 중요한 조직",
    role: "보안 · 컴플라이언스",
    quote:
      "인터넷은 되지만, 사내 자료는 절대 외부로 내보낼 수 없습니다. 그래도 AI는 쓰고 싶어요.",
  },
  {
    icon: Stethoscope,
    label: "의료",
    role: "진료기록 · 증례 · 문헌",
    quote:
      "환자 진료기록은 외부로 한 글자도 나가면 안 됩니다. 그래서 클라우드 AI는 못 씁니다.",
  },
  {
    icon: FlaskConical,
    label: "R&D · 기획",
    role: "영업비밀 · 시장조사",
    quote:
      "시장조사는 AI로 빠르게 하고 싶지만, 핵심 레시피·영업비밀은 외부 AI에 넣을 수 없습니다.",
  },
  {
    icon: BookOpen,
    label: "연구 · 리포트",
    role: "논문 · 보고서",
    quote:
      "근거가 분명한 초안이 필요합니다. 출처 없이 그럴듯하기만 한 글은 신뢰할 수 없어요.",
  },
];

export function UseCases() {
  return (
    <Section id="use-cases" className="border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="사용 시나리오"
          title={
            <>
              이런 환경에 <span className="text-gradient">딱 맞습니다</span>
            </>
          }
          subtitle="민감한 자료를 다루지만, 리서치와 작성은 빨라야 하는 사람들을 위해."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2" gap={0.1}>
          {personas.map((p) => (
            <StaggerItem key={p.label} className="h-full">
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20">
                <Quote className="h-7 w-7 text-sky/40" aria-hidden="true" />
                <p className="text-pretty text-base italic leading-relaxed text-ink">
                  &ldquo;{p.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{p.label}</p>
                    <p className="font-mono text-xs text-ink-muted">{p.role}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
