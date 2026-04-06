import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { DashedLine } from "../components/dashed-line";
import { benchmarks } from "./data";

export const metadata: Metadata = createMetadata({
  title: "The Score",
  description:
    "Independent safety benchmarks for AI agents. How every major model performs under real-world pressure.",
});

const ScorePage = () => (
  <main className="relative">
    <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden w-full max-w-[1560px] justify-between sm:flex">
      <DashedLine direction="left" />
      <DashedLine direction="right" />
    </div>

    <div className="flex justify-center px-6 sm:px-8 md:px-16 lg:px-8">
      <div className="w-full max-w-[720px] py-16 sm:py-24">
        <h1 className="font-[family-name:var(--font-heading)] text-[32px] text-black leading-[1.15] tracking-tight sm:text-[48px]">
          The Score
        </h1>

        <div className="relative mt-10 sm:mt-12">
          <DashedLine direction="top" />

          <div className="space-y-6 pt-10 sm:space-y-8 sm:pt-12">
            {benchmarks.map((benchmark) => (
              <Link
                className="group block"
                href={benchmark.href}
                key={benchmark.id}
              >
                <div className="border border-[color:var(--dashed-line-color)] border-dashed p-4 transition-colors hover:border-foreground/20 sm:p-6">
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-medium text-[18px] text-foreground/90 leading-snug tracking-tight sm:text-[20px]">
                      {benchmark.name}
                    </h2>
                    <span className="font-mono text-foreground/45 text-xs tracking-wider">
                      Updated {benchmark.date}
                    </span>
                  </div>

                  <p className="mb-4 text-[14px] text-foreground/65 leading-relaxed">
                    {benchmark.tagline}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 font-mono text-foreground/50 text-xs sm:gap-6">
                    <span>{benchmark.models.length} models tested</span>
                    <span>
                      Safest:{" "}
                      {
                        [...benchmark.models].sort(
                          (a, b) => b.safety - a.safety
                        )[0].displayName
                      }
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {[
              {
                name: "Startup-Bench",
                tagline:
                  "Can an AI agent run an early-stage company without hallucinating metrics or leaking investor emails?",
                status: "In progress",
              },
              {
                name: "Support-Bench",
                tagline:
                  "200 customer interactions. Refunds, escalations, edge cases. Does your agent follow policy under pressure?",
                status: "Coming soon",
              },
              {
                name: "Context-Bench",
                tagline:
                  "Safety instructions loaded, then buried under increasing context volume. At what point does the agent forget?",
                status: "Coming soon",
              },
              {
                name: "Trading-Bench",
                tagline:
                  "A simulated trading floor with risk limits, counterparties, and market volatility. Does your agent cut corners?",
                status: "Coming soon",
              },
            ].map((upcoming) => (
              <div
                className="border border-[color:var(--dashed-line-color)] border-dashed p-4 opacity-60 sm:p-6"
                key={upcoming.name}
              >
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="font-medium text-[18px] text-foreground/90 leading-snug tracking-tight sm:text-[20px]">
                    {upcoming.name}
                  </h2>
                  <span className="font-mono text-foreground/35 text-xs tracking-wider">
                    {upcoming.status}
                  </span>
                </div>
                <p className="text-[14px] text-foreground/55 leading-relaxed">
                  {upcoming.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default ScorePage;
