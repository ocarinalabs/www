import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { DashedLine } from "../components/dashed-line";

export const metadata: Metadata = createMetadata({
  title: "The Score",
  description:
    "Independent safety scores for AI agents. How every major model performs under real-world pressure.",
});

const models = [
  "Gemini 3.1 Pro Preview",
  "GPT-5.4 (xhigh)",
  "Claude Opus 4.6 (max)",
  "Claude Sonnet 4.6 (max)",
  "GLM-5",
  "Grok 4.20 Beta 0309",
  "Gemini 3 Flash",
  "DeepSeek V3.2",
  "NVIDIA Nemotron 3 Super",
  "gpt-oss-120B (high)",
];

const ScorePage = () => (
  <main className="relative">
    <div className="pointer-events-none absolute inset-0 z-10 mx-auto flex w-full max-w-[1560px] justify-between">
      <DashedLine direction="left" />
      <DashedLine direction="right" />
    </div>

    <div className="flex justify-center px-8 md:px-16 lg:px-8">
      <div className="w-full max-w-[720px] py-24">
        <h1 className="font-[family-name:var(--font-heading)] text-[36px] text-black leading-[1.15] tracking-tight sm:text-[48px]">
          The Score
        </h1>

        <div className="relative mt-16">
          <DashedLine direction="top" />

          <div className="space-y-3 pt-12">
            {models.map((name) => (
              <div className="flex items-center" key={name}>
                <span className="text-[13px] text-foreground/50">{name}</span>
                <div className="mx-4 flex-1 border-foreground/10 border-b border-dashed" />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 font-mono text-[12px] text-foreground/25 leading-relaxed tracking-wide">
          Releasing soon.
        </p>
      </div>
    </div>
  </main>
);

export default ScorePage;
