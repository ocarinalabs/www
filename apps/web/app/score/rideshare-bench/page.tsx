import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { DashedLine } from "../../components/dashed-line";
import { LeaderboardTable } from "../components/leaderboard-table";
import { getBenchmark } from "../data";

const benchmark = getBenchmark("rideshare-bench");

export const metadata: Metadata = createMetadata({
  title: "Rideshare-Bench — The Score",
  description:
    "Does your AI agent prioritize passenger safety over profit? 168-hour simulated rideshare benchmark results.",
});

const RideshareBenchPage = () => {
  if (!benchmark) {
    return null;
  }

  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden w-full max-w-[1560px] justify-between sm:flex">
        <DashedLine direction="left" />
        <DashedLine direction="right" />
      </div>

      <div className="flex justify-center px-6 sm:px-8 md:px-16 lg:px-8">
        <div className="w-full max-w-[720px] pt-16 sm:pt-24">
          <Link
            className="mb-6 inline-block text-[13px] text-foreground/50 transition-opacity hover:opacity-60 sm:mb-8"
            href="/score"
          >
            &larr; Back to The Score
          </Link>

          <h1 className="font-[family-name:var(--font-heading)] text-[32px] text-black leading-[1.15] tracking-tight sm:text-[48px]">
            {benchmark.name}
          </h1>
          <p className="mt-3 text-[15px] text-foreground/65 leading-relaxed sm:text-[16px]">
            {benchmark.tagline}
          </p>
          <span className="mt-2 block font-mono text-foreground/45 text-xs tracking-wider">
            Updated {benchmark.date}
          </span>
        </div>
      </div>

      <div className="flex justify-center px-6 sm:px-8 md:px-16 lg:px-8">
        <div className="relative mt-12 w-full max-w-[720px] pb-16 sm:mt-16 sm:pb-24">
          <DashedLine direction="top" />

          <div className="pt-10 sm:pt-16">
            <div className="overflow-x-auto">
              <LeaderboardTable
                benchmarkId={benchmark.id}
                models={benchmark.models}
              />
            </div>

            <div className="mt-10 border border-[color:var(--dashed-line-color)] border-dashed p-4 sm:mt-12 sm:p-6">
              <p className="font-mono text-foreground/50 text-xs uppercase tracking-widest">
                Key finding
              </p>
              <p className="mt-3 text-[15px] text-foreground/75 leading-relaxed">
                The highest earner (Minimax M2.7, $1,003.60) had the lowest
                safety score. The safest model (Gemini 3.1 Pro) earned the
                least. Every model scored well below the theoretical optimal of
                ~$3,500&ndash;4,000, and none improved over seven days.
              </p>
              <p className="mt-3 text-[15px] text-foreground/75 leading-relaxed">
                Give a model economic incentives and safety constraints at the
                same time, and it sacrifices safety. Every model in this
                benchmark did it. The question is how badly.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <p className="font-mono text-foreground/50 text-xs uppercase tracking-widest">
                About this benchmark
              </p>
              <p className="mt-3 text-[14px] text-foreground/65 leading-relaxed">
                Rideshare-Bench drops an AI agent into a simulated rideshare
                city for 168 hours. Seven zones. Twenty-five tools. Passengers
                with demographic profiles. Surge pricing that rewards
                exhaustion. Medical emergencies that test whether the agent
                stops driving.
              </p>
              <p className="text-[14px] text-foreground/65 leading-relaxed">
                The agent starts with $100 and a full tank. It decides when to
                drive, where to go, when to rest, which rides to accept. We
                score on five dimensions: safety, efficiency, strategy, outcome,
                and bias.
              </p>
              <p className="text-[14px] text-foreground/65 leading-relaxed">
                Standard evals test whether a model can answer questions. This
                benchmark tests what a model does when answering questions costs
                money, skipping rest earns more, and passengers have faces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RideshareBenchPage;
