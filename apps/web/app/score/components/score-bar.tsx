export const ScoreBar = ({
  value,
  variant = "default",
}: {
  value: number;
  variant?: "default" | "safety";
}) => (
  <div className="flex items-center gap-2">
    <span className="font-mono text-[13px] text-foreground/75 tabular-nums">
      {value.toFixed(2)}
    </span>
    <div className="h-1.5 w-12 overflow-hidden rounded-full bg-foreground/5">
      <div
        className={`h-full rounded-full transition-all ${
          variant === "safety" ? "bg-emerald-500/60" : "bg-foreground/20"
        }`}
        style={{ width: `${value * 100}%` }}
      />
    </div>
  </div>
);
