/**
 * VERITAS — single source of truth for the marketing site.
 *
 * Everything that the navbar, hero, download section and footer reference
 * lives here so values stay in sync. After cutting a release, update the
 * `download` block (URL + version + fileSize) — the whole site follows.
 */

/* ------------------------------------------------------------------ */
/* Brand                                                               */
/* ------------------------------------------------------------------ */

export const site = {
  name: "VERITAS",
  backronym: "Verified Information Retrieval and Trustworthy Authoring System",
  category: "LOCAL-FIRST AI RESEARCH & WRITING ASSISTANT",
  categoryKo: "로컬에서 동작하는 AI 리서치·문서 작성 어시스턴트",
  tagline: "수집한 근거에 끝까지 책임지는, 로컬 AI 리서치·문서 작성 어시스턴트",
  description:
    "VERITAS는 추론·검색·검증·저장을 모두 내 PC에서 처리하는 로컬 우선 AI 리서치·문서 작성 어시스턴트입니다. 주제만 입력하면 자료조사부터 보고서 초안, 근거 정합성 검증까지 — 사내 자료를 외부로 보내지 않고 하나의 워크스페이스에서. 설치 파일을 받아 실행만 하면 됩니다.",
  // TODO: 배포 도메인 확정 후 교체 (metadataBase / OG / sitemap에 사용)
  url: "https://veritas-web-nu.vercel.app",
  // TODO: 공개 저장소 주소로 교체 (선택)
  github: "https://github.com/2026-1-CAU-Capstone-Design-Team2/veritas",
} as const;

/* ------------------------------------------------------------------ */
/* Download / release                                                  */
/* ------------------------------------------------------------------ */

export const download = {
  version: "1.0.0",
  // TODO: 릴리스 에셋 크기로 교체 (예: "약 280 MB")
  fileSize: "약 300 MB",
  os: "Windows 10 / 11 (64-bit)",
  // 릴리스 페이지로 직접 연결되는 안정 링크.
  // TODO: 단일 .exe 직링크가 준비되면 아래를 에셋 URL로 교체
  url: "https://github.com/2026-1-CAU-Capstone-Design-Team2/veritas/releases/latest",
  releasedAtLabel: "2026년 6월",
} as const;

export const systemRequirements: { label: string; value: string }[] = [
  { label: "운영체제", value: "Windows 10 / 11 (64-bit)" },
  { label: "디스크 여유 공간", value: "약 1–6 GB (선택한 모델 크기에 따라)" },
  // TODO: 권장 사양 확정 시 교체
  { label: "메모리(RAM)", value: "8 GB 이상 권장" },
  { label: "그래픽(GPU)", value: "선택 — CPU만으로도 동작" },
];

/* ------------------------------------------------------------------ */
/* Local models                                                        */
/* ------------------------------------------------------------------ */

export const models = ["0.8B", "2B", "4B", "9B"] as const;

export const exportFormats = ["Markdown", "DOCX", "HTML", "PDF"] as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks: { label: string; href: string }[] = [
  { label: "기능", href: "#features" },
  { label: "작동 방식", href: "#workflow" },
  { label: "성능", href: "#benchmark" },
  { label: "다운로드", href: "#download" },
];

/* ------------------------------------------------------------------ */
/* Screenshots                                                         */
/* ------------------------------------------------------------------ */

export type Shot = {
  /** Path under /public, or null to render a labeled placeholder frame. */
  src: string | null;
  alt: string;
  /** Caption shown in the mock window's title bar / placeholder. */
  label: string;
};

const s = (file: string | null, alt: string, label: string): Shot => ({
  src: file ? `/screenshots/${file}` : null,
  alt,
  label,
});

export const shots = {
  dashboard: s(
    "dashboard.png",
    "VERITAS 대시보드 — 처리한 문서 수, 워크스페이스 현황, 최근 작업과 작성 초안 목록",
    "VERITAS — 대시보드",
  ),
  researchInput: s(
    "research-input.png",
    "조사 입력 화면 — 조사 주제, 레퍼런스 사이트, 최대 조사 문서 수 설정",
    "조사 — 주제 입력",
  ),
  researchResult: s(
    "research-result.png",
    "조사 결과 화면 — 진행률 100%, 수집 문서 목록과 출처, '이 보고서로 글쓰기' 연결",
    "조사 — 결과",
  ),
  summary: s(
    "summary.png",
    "요약 화면 — Executive Summary와 출처 인용, 통합 정리(Consolidated Findings)",
    "요약",
  ),
  verifyReliability: s(
    "verify-reliability.png",
    "정합성 검증 화면 — 자료별 신뢰도(높음/중간/낮음)와 점검 필요 항목",
    "검증 — 신뢰도",
  ),
  verifyEvidence: s(
    "verify-evidence.png",
    "정합성 검증 결과 — 신뢰도 등급 분포와 보고서 흐름 구조, 섹션별 근거",
    "검증 — 근거 & 구조",
  ),
  verifyStructure: s(
    "verify-structure.png",
    "정합성 검증 — 보고서 흐름 구조 분석과 섹션별 등급",
    "검증 — 보고서 구조",
  ),
  chat: s(
    "chat.png",
    "근거 기반 채팅 화면 — 워크스페이스 자료에서 근거를 찾아 [Document] 출처와 함께 답변",
    "채팅 — 근거 기반 RAG",
  ),
  settings: s(
    "settings-1.png",
    "설정 화면 — 로컬 모델 선택(0.8B~9B), 로컬 접근 폴더, OpenAI 가속(선택)",
    "설정",
  ),
  workspaceSwitch: s(
    "workspace-switch.png",
    "워크스페이스 전환 화면 — 주제별 워크스페이스 목록",
    "워크스페이스 전환",
  ),
  guide: s("guide.png", "가이드 화면 — 사용 안내", "가이드"),
  writingAssist: s(
    "assist.png",
    "실시간 작성 보조(AI 보조창) — 다른 프로그램의 작성 맥락을 인식해 근거 추가를 먼저 제안",
    "AI 보조창 — 실시간 작성 보조",
  ),
  editor: s(
    "editor.png",
    "문서 에디터 — 문서 개요·편집/미리보기/분할 뷰·AI 도우미가 한 화면에. 타이핑 중 다음 문장을 고스트 텍스트로 제안.",
    "문서 에디터 — 실시간 작성 보조",
  ),
  drafts: [
    s("draft-1.png", "초안 생성 1단계 — 소스 선택", "초안 — 소스 선택"),
    s("draft-2.png", "초안 생성 2단계 — 자료 선택", "초안 — 자료 선택"),
    s("draft-3.png", "초안 생성 3단계 — 대분류 구성", "초안 — 대분류"),
    s("draft-4.png", "초안 생성 4단계 — 소분류 구성", "초안 — 소분류"),
    s("draft-5.png", "초안 생성 5단계 — 구성/목차", "초안 — 구성"),
    s("draft-6.png", "초안 생성 6단계 — 목차 확정", "초안 — 목차 확정"),
    s("draft-7.png", "초안 생성 7단계 — 초안 결과", "초안 — 생성 결과"),
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Benchmarks (성능)                                                    */
/* ------------------------------------------------------------------ */

export type RaceRow = {
  model: string;
  /** AutoSurvey 점수 (막대 전체 길이) */
  score: number;
  /** 단발 검색(Flat) 대비 향상폭 → Flat = score - delta */
  delta: number;
  local: boolean;
};

export type FactRow = {
  model: string;
  value: number;
  local: boolean;
};

export const benchmark = {
  race: {
    title: "RACE Overall",
    subtitle: "AutoSurvey vs. 단발 검색(Flat)",
    axisMax: 46,
    rows: [
      { model: "gpt-5-mini", score: 42.0, delta: 2.5, local: false },
      { model: "gpt-4o-mini", score: 40.0, delta: 2.0, local: false },
      { model: "qwen3.5-9B", score: 39.0, delta: 3.2, local: true },
      { model: "gpt-5-nano", score: 37.5, delta: 3.5, local: false },
      { model: "qwen3.5-4B", score: 35.0, delta: 3.8, local: true },
      { model: "qwen3.5-2B", score: 30.5, delta: 2.8, local: true },
    ] as RaceRow[],
  },
  fact: {
    title: "인용 신뢰도 (FACT)",
    subtitle: "근거–주장 일치 비율",
    axisMax: 100,
    rows: [
      { model: "gpt-5-mini", value: 82, local: false },
      { model: "gpt-4o-mini", value: 80, local: false },
      { model: "qwen3.5-9B", value: 78, local: true },
      { model: "qwen3.5-4B", value: 71, local: true },
      { model: "qwen3.5-2B", value: 62, local: true },
    ] as FactRow[],
  },
  callout: "qwen3.5-9B + AutoSurvey (39.0) ≈ gpt-5-mini 단발 검색 (39.5)",
  footnote:
    "자체 평가(DeepResearch Bench · RACE) 기준. 수치는 평가 환경에 따라 달라질 수 있습니다.",
} as const;
