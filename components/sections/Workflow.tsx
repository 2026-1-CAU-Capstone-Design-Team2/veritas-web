import { Fragment } from "react";
import {
  Search,
  FileText,
  ShieldCheck,
  PenLine,
  WandSparkles,
  MessageSquare,
  Lightbulb,
  Layers,
  FileDown,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { exportFormats } from "@/lib/site.config";

const steps = [
  { n: 1, label: "조사", en: "Research", icon: Search, desc: "웹 자료 수집·정제" },
  { n: 2, label: "요약", en: "Summary", icon: FileText, desc: "핵심을 통합 요약" },
  { n: 3, label: "검증", en: "Verify", icon: ShieldCheck, desc: "근거 신뢰도 재검증" },
  { n: 4, label: "초안", en: "Draft", icon: PenLine, desc: "목차부터 초안까지" },
  {
    n: 5,
    label: "문서 보조",
    en: "Assist",
    icon: WandSparkles,
    desc: "작성 중 실시간 제안",
  },
  { n: 6, label: "채팅", en: "Chat", icon: MessageSquare, desc: "근거 기반 Q&A" },
];

export function Workflow() {
  return (
    <Section id="workflow" className="border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="엔드투엔드 워크플로우"
          title={
            <>
              하나의 워크스페이스에서,{" "}
              <span className="text-gradient">처음부터 끝까지</span>
            </>
          }
          subtitle="조사부터 채팅까지 여섯 단계가 같은 근거를 공유합니다. 필요한 단계만 골라 써도 됩니다."
        />

        {/* stepper */}
        <Reveal className="mt-14">
          <div className="no-scrollbar overflow-x-auto">
            <ol className="mx-auto flex w-max items-start px-1">
              {steps.map((s, i) => (
                <Fragment key={s.n}>
                  <li className="flex w-24 flex-col items-center text-center sm:w-32">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow-sm">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="mt-3 text-sm font-semibold text-ink">
                      {s.label}
                    </span>
                    <span className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-sky">
                      {s.en}
                    </span>
                    <span className="mt-1 text-xs leading-snug text-ink-muted">
                      {s.desc}
                    </span>
                  </li>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mt-6 h-0.5 w-5 flex-none rounded bg-gradient-to-r from-sky/60 to-royal/30 sm:w-10"
                    />
                  )}
                </Fragment>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* highlight + knowledge base + export */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-3">
            <div className="flex flex-col items-start gap-3 rounded-2xl border border-sky/20 bg-sky/[0.06] p-6 sm:flex-row sm:items-center sm:gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky/15 text-sky">
                <Lightbulb className="h-5 w-5" />
              </span>
              <p className="text-pretty text-[15px] leading-relaxed text-ink sm:text-base">
                <span className="font-semibold">전부 다 쓸 필요는 없어요</span> —
                &lsquo;조사 → 요약&rsquo;만으로도 자료조사 보고서가 완성됩니다.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-ink">
                <Layers className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                하나의 지식베이스
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                <span className="text-ink">웹 수집 자료 + 로컬 문서</span>가 하나의
                지식베이스를 이룹니다. 채팅·초안·검증이 모두 같은 근거를
                공유합니다.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-ink">
                <FileDown className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                결과 내보내기
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {exportFormats.map((f) => (
                  <span
                    key={f}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-ink-muted"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
