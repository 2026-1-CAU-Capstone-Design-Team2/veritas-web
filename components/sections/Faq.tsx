import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion, type QA } from "@/components/ui/Accordion";

const items: QA[] = [
  {
    q: "무료인가요?",
    a: "네, 무료입니다. 별도의 구독이나 결제 없이 Windows 설치 파일을 받아 바로 사용할 수 있습니다.",
  },
  {
    q: "사내 문서가 외부로 나가나요?",
    a: "아니요. 외부와 통신하는 것은 웹 검색뿐이며, 로컬 문서는 코드 레벨에서 외부 전송이 차단됩니다. 추론·임베딩·검증·저장은 모두 내 PC 안에서 처리됩니다.",
  },
  {
    q: "설치·실행이 복잡한가요?",
    a: "아니요. 설치 파일을 받아 한 번 실행하면 됩니다. 터미널이나 개발 지식은 필요 없습니다.",
  },
  {
    q: "API 키가 필요한가요?",
    a: "아니요. 기본 동작에는 API 키가 필요 없습니다. OpenAI 가속은 선택 사항이며, 사용하더라도 조사 단계에 한정됩니다.",
  },
  {
    q: "GPU가 필요한가요?",
    a: "아니요. CPU만으로도 동작합니다. PC 사양에 맞춰 로컬 모델 크기(0.8B~9B)를 선택하면 됩니다.",
  },
  {
    q: "Mac · Linux도 지원하나요?",
    a: "현재 VERITAS는 Windows 전용입니다.",
  },
];

export function Faq() {
  return (
    <Section id="faq" className="border-t border-white/5">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="자주 묻는 질문"
            title={
              <>
                궁금한 점, <span className="text-gradient">먼저 정리했습니다</span>
              </>
            }
          />
          <Reveal className="mt-10">
            <Accordion items={items} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
