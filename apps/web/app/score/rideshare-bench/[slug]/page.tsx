import { analyses } from "@repo/cms";
import { Body } from "@repo/cms/components/body";
import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DashedLine } from "../../../components/dashed-line";
import { ScoreBar } from "../../components/score-bar";
import { getModel } from "../../data";

const BENCHMARK_ID = "rideshare-bench";

type Params = { slug: string };

export const generateStaticParams = async (): Promise<Params[]> => {
  const all = await analyses.getByBenchmark(BENCHMARK_ID);
  return all.map((a) => ({ slug: a._slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const model = getModel(BENCHMARK_ID, slug);
  if (!model) {
    return {};
  }
  return createMetadata({
    title: `${model.displayName} — Rideshare-Bench — The Score`,
    description: model.oneLiner,
  });
};

const ModelDetailPage = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params;
  const model = getModel(BENCHMARK_ID, slug);
  const analysis = await analyses.getBySlug(slug);

  if (!model) {
    notFound();
  }

  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden w-full max-w-[1560px] justify-between sm:flex">
        <DashedLine direction="left" />
        <DashedLine direction="right" />
      </div>

      <div className="flex justify-center px-6 sm:px-8 md:px-16 lg:px-8">
        <div className="w-full max-w-[720px] py-16 sm:py-24">
          <Link
            className="mb-6 inline-block text-[13px] text-foreground/50 transition-opacity hover:opacity-60 sm:mb-8"
            href="/score/rideshare-bench"
          >
            &larr; Back to Rideshare-Bench
          </Link>

          <h1 className="font-[family-name:var(--font-heading)] text-[32px] text-black leading-[1.15] tracking-tight sm:text-[48px]">
            {model.displayName}
          </h1>
          <p className="mt-2 text-[14px] text-foreground/65">
            {model.provider} &middot; {model.model}
          </p>

          <div className="relative mt-12">
            <DashedLine direction="top" />

            <div className="grid grid-cols-2 gap-6 pt-12 sm:grid-cols-5">
              <div>
                <p className="font-mono text-foreground/45 text-xs uppercase tracking-widest">
                  Score
                </p>
                <p className="mt-1 font-mono text-[24px] text-foreground/85 tabular-nums">
                  $
                  {model.score.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div>
                <p className="font-mono text-foreground/45 text-xs uppercase tracking-widest">
                  Overall
                </p>
                <div className="mt-2">
                  <ScoreBar value={model.overall} />
                </div>
              </div>
              <div>
                <p className="font-mono text-foreground/45 text-xs uppercase tracking-widest">
                  Safety
                </p>
                <div className="mt-2">
                  <ScoreBar value={model.safety} variant="safety" />
                </div>
              </div>
              <div>
                <p className="font-mono text-foreground/45 text-xs uppercase tracking-widest">
                  Rides
                </p>
                <p className="mt-1 font-mono text-[24px] text-foreground/85 tabular-nums">
                  {model.rides}
                </p>
              </div>
              <div>
                <p className="font-mono text-foreground/45 text-xs uppercase tracking-widest">
                  Rating
                </p>
                <p className="mt-1 font-mono text-[24px] text-foreground/85 tabular-nums">
                  {model.rating.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[14px] text-foreground/65 italic">
            {model.oneLiner}
          </p>

          {model.status === "failed" && (
            <div className="mt-4 border border-amber-500/20 border-dashed bg-amber-500/5 p-4">
              <p className="font-mono text-amber-600/60 text-xs">
                Run failed at {model.hoursCompleted}/{model.hoursTotal} hours
                due to gateway timeout.
              </p>
            </div>
          )}

          {analysis ? (
            <div className="relative mt-16">
              <DashedLine direction="top" />
              <div className="prose prose-neutral prose-h2:mt-12 prose-h3:mt-8 max-w-none pt-12 prose-headings:font-[family-name:var(--font-heading)] prose-td:font-mono prose-th:font-mono prose-a:text-foreground/75 prose-code:text-[13px] prose-code:text-foreground/75 prose-h2:text-[24px] prose-h3:text-[18px] prose-headings:text-foreground/90 prose-strong:text-foreground/85 prose-table:text-[13px] prose-th:text-foreground/50 prose-th:text-xs text-[15px] text-foreground/80 prose-th:uppercase prose-td:tabular-nums leading-[1.8] prose-headings:tracking-tight prose-th:tracking-widest prose-a:underline prose-a:decoration-foreground/20 hover:prose-a:decoration-foreground/40">
                <Body content={analysis.body} />
              </div>
            </div>
          ) : (
            <p className="mt-16 text-[14px] text-foreground/50">
              Analysis not available for this model.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ModelDetailPage;
