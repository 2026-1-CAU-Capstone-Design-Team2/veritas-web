import { Fragment } from "react";
import {
  ShieldAlert,
  CloudOff,
  ServerCog,
  Ban,
  EyeOff,
  Lock,
  FileQuestion,
  ArrowRight,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const flow = [
  {
    icon: ShieldAlert,
    title: "사내 보안 정책",
    desc: "인터넷은 되지만, 사내 정보의 외부 반출은 금지",
  },
  {
    icon: CloudOff,
    title: "상용 LLM 사용 불가",
    desc: "사내 문서를 외부 AI에 입력할 수 없음",
  },
  {
    icon: ServerCog,
    title: "자체 구축은 부담",
    desc: "자체 LLM은 비용·인프라 운영 부담이 큼",
  },
  {
    icon: Ban,
    title: "결국 '공백'",
    desc: "쓰고 싶어도 못 쓰는 상태로 남음",
    accent: true,
  },
];

const limits = [
  {
    icon: EyeOff,
    title: "근거 불투명",
    desc: "출처 없는 환각 — 무엇을 근거로 썼는지 알 수 없습니다.",
  },
  {
    icon: Lock,
    title: "프라이버시 · 비용",
    desc: "클라우드 업로드와 토큰 과금 — 민감 정보와 비용이 함께 새어 나갑니다.",
  },
  {
    icon: FileQuestion,
    title: "검증의 부재",
    desc: "맞는지 따로 확인할 방법이 없어, 끝내 신뢰하기 어렵습니다.",
  },
];

export function Problem() {
  return (
    <Section id="problem" className="border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="왜 VERITAS인가"
          title={
            <>
              &ldquo;쓰고 싶어도 못 쓰는 AI&rdquo;
            </>
          }
          subtitle="보안 때문에 클라우드 AI에 사내 자료를 올릴 수 없는 사람들이 있습니다. 인터넷은 되지만, 정작 필요한 문서는 외부 AI에 넣을 수 없습니다."
        />

        {/* blocked path */}
        <Reveal className="mt-14">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {flow.map((step, i) => (
              <Fragment key={step.title}>
                <div
                  className={
                    "flex flex-1 flex-col gap-3 rounded-2xl border p-5 " +
                    (step.accent
                      ? "border-amber-400/30 bg-amber-400/[0.06]"
                      : "border-white/10 bg-white/[0.03]")
                  }
                >
                  <span
                    className={
                      "inline-flex h-10 w-10 items-center justify-center rounded-xl " +
                      (step.accent
                        ? "bg-amber-400/15 text-amber-300"
                        : "bg-white/5 text-ink-muted")
                    }
                  >
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p
                      className={
                        "text-sm font-semibold " +
                        (step.accent ? "text-amber-200" : "text-ink")
                      }
                    >
                      {step.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {i < flow.length - 1 && (
                  <div className="flex items-center justify-center text-ink-muted/40">
                    <ArrowDown className="h-5 w-5 lg:hidden" />
                    <ArrowRight className="hidden h-5 w-5 lg:block" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>

        {/* existing AI limits */}
        <div className="mt-16">
          <Reveal>
            <p className="text-center text-sm font-medium text-ink-muted">
              여기에, 기존 AI 글쓰기의 한계가 겹칩니다
            </p>
          </Reveal>
          <Stagger className="mt-6 grid gap-4 sm:grid-cols-3" gap={0.1}>
            {limits.map((l) => (
              <StaggerItem key={l.title}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-ink-muted">
                    <l.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {l.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* resolution banner */}
        <Reveal className="mt-14">
          <div className="rounded-2xl bg-brand-gradient p-px shadow-glow-sm">
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-navy px-6 py-8 text-center sm:flex-row sm:justify-center sm:gap-4 sm:py-7">
              <Sparkles className="h-6 w-6 shrink-0 text-sky" />
              <p className="text-balance text-lg font-semibold text-ink sm:text-xl">
                VERITAS는 이 공백을{" "}
                <span className="text-gradient">로컬(Local) + 검증(Verify)</span>
                으로 정면 돌파합니다.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
