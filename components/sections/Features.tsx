import type { LucideIcon } from "lucide-react";
import {
  Search,
  ShieldCheck,
  MessageSquare,
  WandSparkles,
  PenLine,
  Database,
  FileText,
  FileDown,
  SlidersHorizontal,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppWindow } from "@/components/ui/AppWindow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { shots, type Shot } from "@/lib/site.config";
import { cn } from "@/lib/utils";

type Feature = {
  eyebrow: string;
  hook: string;
  body: string;
  shot: Shot;
  tags: string[];
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    eyebrow: "자료조사 · AutoSurvey",
    hook: "주제만 던지면, 알아서 조사합니다.",
    body: "주제와 참고 URL, 최대 문서 수(기본 15)를 입력하면 웹에서 자료를 모아 정제·요약합니다. 진행률·소요시간·수집 문서 목록을 실시간으로 보여주고, 결과를 보고서로 통합해 그대로 '이 보고서로 글쓰기'까지 이어집니다.",
    shot: shots.researchResult,
    tags: ["실시간 진행률", "수집 문서 목록", "보고서로 바로 글쓰기"],
    icon: Search,
  },
  {
    eyebrow: "정합성 검증 · Verify",
    hook: "요약이 아니라, 재검증합니다.",
    body: "'검증 시작' 한 번으로 자료별 신뢰도(높음/중간/낮음)를 추가 LLM 호출 없이 IR·NLP 알고리즘으로 평가합니다. 등급 근거와 점검 필요 항목, 보고서 흐름 구조를 제시하고, 하이브리드 검색(BM25+임베딩)과 RRF로 문장–출처를 매칭합니다. 로컬 문서가 있으면 내부↔외부 수치를 교차 검증합니다.",
    shot: shots.verifyEvidence,
    tags: ["신뢰도 등급", "BM25 + 임베딩 · RRF", "내부↔외부 Cross-check"],
    icon: ShieldCheck,
  },
  {
    eyebrow: "근거 기반 채팅 · RAG",
    hook: "지어내지 않습니다.",
    body: "워크스페이스 자료에서 근거를 찾아 답하고 [Document 001]처럼 출처를 표기합니다. 자료에 없으면 '근거 없음'이라고 분명히 말합니다. /autosurvey · /rag 슬래시 명령으로 빠르게 호출하세요.",
    shot: shots.chat,
    tags: ["출처 표기", "‘근거 없음’ 명시", "슬래시 명령"],
    icon: MessageSquare,
  },
  {
    eyebrow: "실시간 작성 보조 · AI 보조창",
    hook: "묻기 전에, 먼저 돕습니다.",
    body: "워드·PPT·에디터 등 다른 프로그램의 작성 맥락을 OCR/UIA로 인식해 '이 문단에 근거를 덧붙일까요?' 같은 제안을 먼저 건넵니다. 검증된 워크스페이스 근거를 기반으로, 로컬에서만 동작하며 화면 내용은 외부로 전송되지 않습니다.",
    shot: shots.writingAssist,
    tags: ["OCR / UIA 맥락 인식", "선제적 제안", "화면 내용 외부 전송 없음"],
    icon: WandSparkles,
  },
  {
    eyebrow: "초안 생성 · Draft",
    hook: "근거에서 곧장, 초안으로.",
    body: "양식 파일을 올리거나 직접 구성합니다(소스 → 자료 선택 → 대분류 → 소분류 → 구성 → 목차 확정 → 초안). 섹션·톤·분량·대상 독자를 고르고 목차를 추가·수정·재정렬하면, 에이전트가 섹션별로 작성합니다. 초안은 복사·재생성하거나 에디터로 보낼 수 있습니다.",
    shot: shots.drafts[6],
    tags: ["목차 편집", "섹션별 자동 작성", "에디터로 보내기"],
    icon: PenLine,
  },
];

const extras = [
  {
    icon: Database,
    title: "로컬 문서 연결",
    desc: "PDF·DOCX·XLSX·CSV·MD·TXT를 자동 색인. 외부 전송 없이 워크스페이스 근거로 사용합니다.",
  },
  {
    icon: FileText,
    title: "요약",
    desc: "Executive Summary와 출처 인용, 통합 정리(Consolidated Findings)를 한 번에.",
  },
  {
    icon: FileDown,
    title: "문서 내보내기",
    desc: "결과를 Markdown · DOCX · HTML · PDF로 내보냅니다.",
  },
  {
    icon: SlidersHorizontal,
    title: "설정",
    desc: "로컬 모델(0.8B~9B) 선택, 로컬 접근 폴더 지정. OpenAI 가속은 선택이며 조사 단계에 한정됩니다.",
  },
];

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const reverse = index % 2 === 1;
  const Icon = feature.icon;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <Reveal className={cn(reverse && "lg:order-2")}>
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-sm">
              <Icon className="h-5 w-5" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sky">
              {feature.eyebrow}
            </span>
          </div>
          <h3 className="mt-5 text-balance text-2xl font-bold leading-tight text-ink sm:text-3xl">
            {feature.hook}
          </h3>
          <p className="mt-4 text-pretty leading-relaxed text-ink-muted">
            {feature.body}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {feature.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className={cn(reverse && "lg:order-1")} y={24}>
        <AppWindow
          shot={feature.shot}
          sizes="(max-width: 1024px) 100vw, 560px"
        />
      </Reveal>
    </div>
  );
}

export function Features() {
  return (
    <Section id="features" className="border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="기능 상세"
          title={
            <>
              조사하고, 검증하고,{" "}
              <span className="text-gradient">근거 위에서 씁니다</span>
            </>
          }
          subtitle="실제 제품 화면으로 확인하세요. 모든 기능은 같은 워크스페이스의 근거를 공유합니다."
        />

        <div className="mt-16 space-y-20 sm:space-y-24">
          {features.map((f, i) => (
            <FeatureRow key={f.eyebrow} feature={f} index={i} />
          ))}
        </div>

        {/* supporting features */}
        <div className="mt-24">
          <Reveal>
            <h3 className="text-center text-lg font-semibold text-ink">
              그리고, 작업을 받쳐 주는 기능들
            </h3>
          </Reveal>
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {extras.map((e) => (
              <StaggerItem key={e.title} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-sky">
                    <e.icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-semibold text-ink">{e.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {e.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
