import Link from "next/link";
import { benchmarks } from "../data";

export const BenchmarkSidebar = ({
  activeBenchmark,
}: {
  activeBenchmark?: string;
}) => (
  <aside className="w-full shrink-0 lg:w-[220px]">
    <div className="sticky top-24">
      <h3 className="mb-4 font-mono text-foreground/50 text-xs uppercase tracking-widest">
        Benchmarks
      </h3>
      <nav className="space-y-2">
        {benchmarks.map((b) => (
          <Link
            className={`block text-[14px] leading-relaxed transition-opacity duration-200 hover:opacity-80 ${
              activeBenchmark === b.id
                ? "font-medium text-foreground/90"
                : "text-foreground/60"
            }`}
            href={b.href}
            key={b.id}
          >
            {b.name}
          </Link>
        ))}
        <span className="block text-[13px] text-foreground/40 italic">
          More coming soon
        </span>
      </nav>
    </div>
  </aside>
);
