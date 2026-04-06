import Link from "next/link";
import { DashedLine } from "./dashed-line";

export const Footer = () => (
  <footer className="relative flex justify-center overflow-hidden px-6 pt-14 pb-8 sm:px-8 sm:pt-20 sm:pb-10 md:px-16 lg:px-8">
    <DashedLine direction="top" />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] select-none text-[160px] text-foreground/10 leading-none sm:text-[300px]"
    >
      ❍
    </div>

    <div className="relative z-10 w-full max-w-[720px]">
      <div className="flex items-end justify-between text-[14px] text-foreground/70 leading-relaxed">
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
            <span className="mx-1.5 text-foreground/30">&middot;</span>
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

        <div className="space-y-1 text-right">
          <div>
            <Link
              className="transition-opacity duration-200 hover:opacity-60"
              href="/legal/privacy"
            >
              Privacy
            </Link>
            <span className="mx-1.5 text-foreground/30">&middot;</span>
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
