import Link from "next/link";
import { DitheredOcarina } from "./dithered-ocarina";

export const Hero = () => (
  <section className="relative min-h-[80vh] overflow-hidden">
    <DitheredOcarina />

    <div className="relative z-10 flex justify-center px-8 md:px-16 lg:px-8">
      <div className="w-full max-w-[720px] pt-8 pb-32">
        <h1 className="font-[family-name:var(--font-heading)] text-[32px] text-black leading-[1.15] tracking-tight sm:text-[44px] md:text-[52px]">
          Independent safety testing
          <br />
          for AI agents
        </h1>

        <p className="mt-5 max-w-[360px] text-[16px] text-foreground/45 leading-relaxed">
          We build simulated environments to test how AI agents behave before
          they ship.
        </p>

        <div className="mt-8 flex items-center gap-4 font-mono">
          <Link
            className="inline-flex items-center gap-2 bg-[#2D2B55] px-6 py-3 font-medium text-[14px] text-white tracking-wide transition-opacity duration-200 hover:opacity-90"
            href="/score"
          >
            Read the Score <span>&rsaquo;</span>
          </Link>
          <a
            className="inline-flex items-center gap-2 border border-foreground/25 px-6 py-3 font-medium text-[14px] text-foreground/60 tracking-wide transition-colors duration-200 hover:border-foreground/40 hover:text-foreground/80"
            href="https://cal.com/fawfaw"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get in touch <span>&rsaquo;</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);
