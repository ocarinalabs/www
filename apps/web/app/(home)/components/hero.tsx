import Link from "next/link";
import { DitheredOcarina } from "./dithered-ocarina";

export const Hero = () => (
  <section className="relative min-h-[60vh] overflow-hidden sm:min-h-[80vh]">
    <DitheredOcarina />

    <div className="relative z-10 flex justify-center px-6 sm:px-8 md:px-16 lg:px-8">
      <div className="w-full max-w-[720px] pt-6 pb-20 sm:pt-8 sm:pb-32">
        <h1 className="font-[family-name:var(--font-heading)] text-[28px] text-black leading-[1.15] tracking-tight sm:text-[44px] md:text-[52px]">
          Simulated worlds to test
          <br />
          and train AI agents
        </h1>

        <p className="mt-4 max-w-[420px] text-[15px] text-foreground/70 leading-relaxed sm:mt-5 sm:text-[16px]">
          We generate environments, run agents through them, and publish the
          results.
        </p>

        <div className="mt-6 flex flex-col gap-3 font-mono sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
          <Link
            className="inline-flex items-center justify-center gap-2 bg-[#2D2B55] px-6 py-3 font-medium text-[14px] text-white tracking-wide transition-opacity duration-200 hover:opacity-90"
            href="/score"
          >
            Read the Score <span>&rsaquo;</span>
          </Link>
          <a
            className="inline-flex items-center justify-center gap-2 border border-foreground/30 px-6 py-3 font-medium text-[14px] text-foreground/75 tracking-wide transition-colors duration-200 hover:border-foreground/50 hover:text-foreground/90"
            href="https://cal.com/fawfaw"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get in touch <span>&rsaquo;</span>
          </a>
        </div>

        <div className="mt-4 font-mono text-[13px] text-foreground/45 sm:mt-5">
          <span className="select-all">bunx @ocarinalabs/quaver</span>
        </div>
      </div>
    </div>
  </section>
);
