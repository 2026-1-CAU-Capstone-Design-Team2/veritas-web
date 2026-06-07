import { Trophy } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MeterBar } from "@/components/ui/MeterBar";
import { benchmark } from "@/lib/site.config";
import { cn } from "@/lib/utils";

const { race, fact } = benchmark;

function ChartCard({
  title,
  subtitle,
  legend,
  children,
}: {
  title: string;
  subtitle: string;
  legend?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <span className="font-mono text-[11px] text-ink-muted">{subtitle}</span>
      </div>
      {legend && <div className="mt-3">{legend}</div>}
      <div className="mt-5 flex flex-col gap-3.5">{children}</div>
    </div>
  );
}

export function Benchmark() {
  return (
    <Section id="benchmark" className="border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="성능 / 벤치마크"
          title={
            <>
              조사 파이프라인이{" "}
              <span className="text-gradient">모델 한 체급을 대체</span>합니다
            </>
          }
          subtitle="소형 로컬 모델 + VERITAS가, 대형 클라우드 모델의 단발 검색급 품질에 근접합니다."
        />

        <Reveal className="mt-14">
          <div className="grid gap-5 lg:grid-cols-2">
            {/* RACE Overall */}
            <ChartCard
              title={race.title}
              subtitle={race.subtitle}
              legend={
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-ink-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-sm bg-sky/40" />
                    단발 검색(Flat)
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-sm bg-brand-gradient" />
                    AutoSurvey 향상분
                  </span>
                </div>
              }
            >
              {race.rows.map((r) => {
                const flatPct = ((r.score - r.delta) / race.axisMax) * 100;
                const deltaPct = (r.delta / race.axisMax) * 100;
                const hero = r.model === "qwen3.5-9B";
                return (
                  <div
                    key={r.model}
                    className={cn(
                      "flex items-center gap-3 rounded-lg",
                      hero && "-mx-2 bg-sky/[0.06] px-2 py-1.5 ring-1 ring-sky/20",
                    )}
                  >
                    <span
                      className={cn(
                        "w-24 shrink-0 text-right font-mono text-xs",
                        r.local ? "text-sky" : "text-ink-muted",
                      )}
                    >
                      {r.model}
                    </span>
                    <MeterBar
                      segments={[
                        { key: "flat", pct: flatPct, className: "bg-sky/40" },
                        {
                          key: "delta",
                          pct: deltaPct,
                          className: "bg-brand-gradient",
                        },
                      ]}
                    />
                    <span className="w-[4.5rem] shrink-0 text-xs tabular-nums">
                      <span className="font-semibold text-ink">
                        {r.score.toFixed(1)}
                      </span>{" "}
                      <span className="text-sky">+{r.delta.toFixed(1)}</span>
                    </span>
                  </div>
                );
              })}
            </ChartCard>

            {/* FACT citation reliability */}
            <ChartCard
              title={fact.title}
              subtitle={fact.subtitle}
              legend={
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-ink-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-sm bg-brand-gradient" />
                    로컬 모델
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-sm bg-sky/40" />
                    클라우드 모델
                  </span>
                </div>
              }
            >
              {fact.rows.map((r) => (
                <div key={r.model} className="flex items-center gap-3">
                  <span
                    className={cn(
                      "w-24 shrink-0 text-right font-mono text-xs",
                      r.local ? "text-sky" : "text-ink-muted",
                    )}
                  >
                    {r.model}
                  </span>
                  <MeterBar
                    segments={[
                      {
                        key: "v",
                        pct: r.value,
                        className: r.local ? "bg-brand-gradient" : "bg-sky/40",
                      },
                    ]}
                  />
                  <span className="w-[4.5rem] shrink-0 text-xs font-semibold tabular-nums text-ink">
                    {r.value}%
                  </span>
                </div>
              ))}
            </ChartCard>
          </div>
        </Reveal>

        {/* callout */}
        <Reveal className="mt-6">
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-brand-gradient p-px shadow-glow-sm sm:flex-row">
            <div className="flex w-full flex-col items-center gap-3 rounded-2xl bg-navy px-6 py-5 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-left">
              <Trophy className="h-6 w-6 shrink-0 text-sky" />
              <p className="text-pretty text-[15px] font-medium text-ink sm:text-base">
                <span className="font-mono text-sky">{benchmark.callout}</span>
              </p>
            </div>
          </div>
        </Reveal>

        <p className="mt-5 text-center text-xs text-ink-muted/60">
          * {benchmark.footnote}
        </p>
      </Container>
    </Section>
  );
}
