import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Server,
  Cpu,
  Database,
  ShieldCheck,
  FolderTree,
  Globe,
  Cloud,
  Lock,
  Workflow,
  Search,
  Layers,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

type Node = { icon: LucideIcon; title: string; sub: string };

const localNodes: Node[] = [
  { icon: Monitor, title: "데스크톱 앱", sub: "통합 워크스페이스 UI" },
  { icon: Server, title: "FastAPI", sub: "로컬 백엔드" },
  { icon: Cpu, title: "로컬 LLM", sub: "llama.cpp · GGUF" },
  { icon: Database, title: "RAG · 임베딩", sub: "ChromaDB" },
  { icon: ShieldCheck, title: "검증 엔진", sub: "BM25 + Dense · RRF" },
  { icon: FolderTree, title: "로컬 문서", sub: "PDF·DOCX·XLSX…" },
];

const externalNodes: Node[] = [
  { icon: Globe, title: "웹 검색", sub: "crawl4ai · DuckDuckGo" },
  { icon: Cloud, title: "OpenAI", sub: "선택 · 조사 단계 한정" },
];

const techChips = [
  {
    icon: Workflow,
    title: "자율 조사 파이프라인",
    desc: "6단계 + 부족분 Gap 재계획 루프 + 조기 종료",
  },
  {
    icon: Search,
    title: "하이브리드 검색 + 4종 검증",
    desc: "Sections · Reliability · Consensus · Crosscheck",
  },
  {
    icon: Layers,
    title: "4계층 대화 메모리",
    desc: "Working · FIFO · Summary · Recall — 긴 대화에도 빠르고 정확하게",
  },
];

function NodeCard({ node }: { node: Node }) {
  const Icon = node.icon;
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-ink">{node.title}</p>
        <p className="truncate font-mono text-[11px] text-ink-muted">
          {node.sub}
        </p>
      </div>
    </div>
  );
}

export function Trust() {
  return (
    <Section id="trust" className="border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="프라이버시 & 신뢰"
          title={
            <>
              내 PC 안에서,{" "}
              <span className="text-gradient">그런데 어떻게 믿나</span>
            </>
          }
          subtitle="구조로 증명합니다. 모든 처리는 로컬에서 끝나고, 외부와의 통신은 단 한 갈래뿐입니다."
        />

        {/* system / privacy diagram */}
        <Reveal className="mt-14">
          <div className="grid gap-5 lg:grid-cols-[1.7fr_auto_1fr] lg:items-center">
            {/* local */}
            <div className="rounded-2xl border border-sky/25 bg-sky/[0.04] p-5 shadow-glow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-sky" />
                  <span className="text-sm font-bold text-ink">
                    내 PC <span className="font-mono text-xs text-sky">(Local)</span>
                  </span>
                </div>
                <span className="rounded-full border border-sky/30 bg-sky/10 px-2.5 py-1 text-[11px] font-medium text-sky">
                  사내 문서 외부 전송 0
                </span>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {localNodes.map((n) => (
                  <NodeCard key={n.title} node={n} />
                ))}
              </div>
            </div>

            {/* connector */}
            <div
              className="flex items-center justify-center gap-2 lg:flex-col"
              aria-hidden="true"
            >
              <div className="h-px w-10 border-t border-dashed border-white/25 lg:hidden" />
              <div className="hidden h-16 w-px border-l border-dashed border-white/25 lg:block" />
              <span className="whitespace-nowrap text-center font-mono text-[10px] uppercase tracking-wider text-sky/80 lg:whitespace-normal lg:px-1">
                유일한 외부 통신
              </span>
              <div className="h-px w-10 border-t border-dashed border-white/25 lg:hidden" />
              <div className="hidden h-16 w-px border-l border-dashed border-white/25 lg:block" />
            </div>

            {/* external */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-ink-muted" />
                <span className="text-sm font-bold text-ink">
                  외부 <span className="font-mono text-xs text-ink-muted">(선택)</span>
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {externalNodes.map((n) => (
                  <NodeCard key={n.title} node={n} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* banner */}
        <Reveal className="mt-6">
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:items-center">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <Lock className="h-5 w-5" />
            </span>
            <p className="text-pretty text-[15px] leading-relaxed text-ink sm:text-base">
              모든 처리는 내 PC 안에서.{" "}
              <span className="font-semibold text-gradient">
                사내 문서는 한 글자도 밖으로 나가지 않습니다.
              </span>
            </p>
          </div>
        </Reveal>

        {/* tech chips */}
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3" gap={0.1}>
          {techChips.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-sky">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 font-mono text-xs leading-relaxed text-ink-muted">
                  {c.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
