import type { LucideIcon } from "lucide-react";
import {
  MonitorDown,
  Download as DownloadIcon,
  Monitor,
  HardDrive,
  MemoryStick,
  Cpu,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { download, systemRequirements } from "@/lib/site.config";

const reqIcons: LucideIcon[] = [Monitor, HardDrive, MemoryStick, Cpu];

export function Download() {
  return (
    <Section id="download" className="border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="다운로드"
          title={
            <>
              지금, <span className="text-gradient">무료로 시작하세요</span>
            </>
          }
          subtitle="설치 후 실행만 하면 됩니다. 첫 실행 시 모델을 자동으로 내려받습니다."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-8 text-center sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-radial-glow"
            />
            <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
              <MonitorDown className="h-8 w-8" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-ink">
              Windows용 무료 다운로드
            </h3>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {[
                `버전 ${download.version}`,
                download.fileSize,
                download.os,
                download.releasedAtLabel,
              ].map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-ink-muted"
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-7 flex justify-center">
              <Button href={download.url} external size="lg">
                <DownloadIcon className="h-5 w-5" />
                Windows용 무료 다운로드
              </Button>
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              첫 실행 시 모델을 자동으로 내려받습니다 · 설치 후 실행만 하면 됩니다.
            </p>
          </div>
        </Reveal>

        {/* system requirements */}
        <div className="mx-auto mt-10 max-w-4xl">
          <Reveal>
            <p className="text-center text-sm font-semibold text-ink-muted">
              시스템 요구사항
            </p>
          </Reveal>
          <Stagger className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {systemRequirements.map((r, i) => {
              const Icon = reqIcons[i] ?? Monitor;
              return (
                <StaggerItem key={r.label} className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-sky">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wider text-ink-muted/70">
                      {r.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">
                      {r.value}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
          <Reveal className="mt-6">
            <p className="text-center text-xs text-ink-muted/60">
              현재 Windows 전용입니다. macOS · Linux 방문자에게는 Windows
              전용임을 안내합니다.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
