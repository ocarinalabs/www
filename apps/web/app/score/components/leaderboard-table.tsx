import Link from "next/link";
import type { ModelResult } from "../data";
import { ScoreBar } from "./score-bar";

export const LeaderboardTable = ({
  models,
  benchmarkId,
}: {
  models: ModelResult[];
  benchmarkId: string;
}) => {
  const sorted = [...models].sort((a, b) => b.overall - a.overall);

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] text-left text-[14px]">
        <thead>
          <tr className="border-foreground/10 border-b border-dashed">
            <th className="pr-4 pb-3 font-mono font-normal text-foreground/50 text-xs uppercase tracking-widest">
              #
            </th>
            <th className="pr-4 pb-3 font-mono font-normal text-foreground/50 text-xs uppercase tracking-widest">
              Model
            </th>
            <th className="pr-4 pb-3 text-right font-mono font-normal text-foreground/50 text-xs uppercase tracking-widest">
              Score
            </th>
            <th className="pr-4 pb-3 font-mono font-normal text-foreground/50 text-xs uppercase tracking-widest">
              Safety
            </th>
            <th className="pr-4 pb-3 font-mono font-normal text-foreground/50 text-xs uppercase tracking-widest">
              Overall
            </th>
            <th className="pr-4 pb-3 text-right font-mono font-normal text-foreground/50 text-xs uppercase tracking-widest">
              Rides
            </th>
            <th className="pr-4 pb-3 text-right font-mono font-normal text-foreground/50 text-xs uppercase tracking-widest">
              Rating
            </th>
            <th className="pb-3 font-mono font-normal text-foreground/50 text-xs uppercase tracking-widest">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((model, i) => (
            <tr
              className="group border-foreground/5 border-b border-dashed transition-colors hover:bg-foreground/[0.02]"
              key={model.slug}
            >
              <td className="py-4 pr-4 font-mono text-foreground/45 tabular-nums">
                {i + 1}
              </td>
              <td className="py-4 pr-4">
                <Link
                  className="font-medium text-foreground/90 transition-opacity group-hover:opacity-70"
                  href={`/score/${benchmarkId}/${model.slug}`}
                >
                  {model.displayName}
                </Link>
                <span className="ml-2 hidden text-foreground/45 sm:inline">
                  {model.provider}
                </span>
              </td>
              <td className="py-4 pr-4 text-right font-mono text-foreground/75 tabular-nums">
                $
                {model.score.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td className="py-4 pr-4">
                <ScoreBar value={model.safety} variant="safety" />
              </td>
              <td className="py-4 pr-4">
                <ScoreBar value={model.overall} />
              </td>
              <td className="py-4 pr-4 text-right font-mono text-foreground/75 tabular-nums">
                {model.rides}
              </td>
              <td className="py-4 pr-4 text-right font-mono text-foreground/75 tabular-nums">
                {model.rating.toFixed(2)}
              </td>
              <td className="py-4">
                {model.status === "completed" ? (
                  <span className="font-mono text-foreground/50 text-xs">
                    {model.hoursCompleted}/{model.hoursTotal}h
                  </span>
                ) : (
                  <span className="font-mono text-amber-500/60 text-xs">
                    {model.hoursCompleted}/{model.hoursTotal}h
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
