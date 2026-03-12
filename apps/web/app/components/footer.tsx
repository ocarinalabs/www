import Link from "next/link";
import { DashedLine } from "./dashed-line";

export const Footer = () => (
  <footer className="relative flex justify-center overflow-hidden px-8 pt-20 pb-10 md:px-16 lg:px-8">
    <DashedLine direction="top" />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] select-none text-[300px] text-foreground/[0.15] leading-none"
    >
      ❍
    </div>

    <div className="relative z-10 w-full max-w-[720px]">
      <div className="flex items-end justify-between text-[14px] text-foreground/50 leading-relaxed">
        {/* Left */}
        <div className="space-y-1">
          <div>
            <a
              className="transition-opacity duration-200 hover:opacity-60"
              href="https://www.linkedin.com/company/ocarinalabs/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <span className="mx-1.5 text-foreground/20">&middot;</span>
            <a
              className="transition-opacity duration-200 hover:opacity-60"
              href="https://x.com/ocarinalabs"
              rel="noopener noreferrer"
              target="_blank"
            >
              X
            </a>
          </div>
          <a
            className="transition-opacity duration-200 hover:opacity-60"
            href="https://cal.com/fawfaw"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get in touch
          </a>
        </div>

        {/* Right */}
        <div className="space-y-1 text-right">
          <div>
            <Link
              className="transition-opacity duration-200 hover:opacity-60"
              href="/legal/privacy"
            >
              Privacy
            </Link>
            <span className="mx-1.5 text-foreground/20">&middot;</span>
            <Link
              className="transition-opacity duration-200 hover:opacity-60"
              href="/legal/terms"
            >
              Terms
            </Link>
          </div>
          <div>&copy; {new Date().getFullYear()} ❍ Ocarina Labs</div>
        </div>
      </div>
    </div>
  </footer>
);
