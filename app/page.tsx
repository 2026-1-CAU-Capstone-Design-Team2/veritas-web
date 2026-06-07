import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { CoreValues } from "@/components/sections/CoreValues";
import { Workflow } from "@/components/sections/Workflow";
import { Features } from "@/components/sections/Features";
import { GetStarted } from "@/components/sections/GetStarted";
import { Trust } from "@/components/sections/Trust";
import { Benchmark } from "@/components/sections/Benchmark";
import { UseCases } from "@/components/sections/UseCases";
import { Download } from "@/components/sections/Download";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <CoreValues />
      <Workflow />
      <Features />
      <GetStarted />
      <Trust />
      <Benchmark />
      <UseCases />
      <Download />
      <Faq />
    </>
  );
}
