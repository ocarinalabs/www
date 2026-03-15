import Link from "next/link";

export const Header = () => (
  <header className="flex justify-center px-8 pt-10 pb-4 md:px-16 lg:px-8">
    <div className="flex w-full max-w-[720px] items-center justify-between">
      <Link
        className="font-display font-medium text-[18px] text-foreground/70 transition-opacity duration-200 hover:opacity-70"
        href="/"
      >
        <span className="text-[22px]">❍</span> Ocarina
      </Link>

      <nav className="flex items-center gap-5">
        <Link
          className="text-[15px] text-foreground/40 transition-opacity duration-200 hover:text-foreground/60"
          href="/score"
        >
          The Score
        </Link>
        <a
          className="text-[15px] text-foreground/40 transition-opacity duration-200 hover:text-foreground/60"
          href="https://ocarina.sh"
          rel="noopener noreferrer"
          target="_blank"
        >
          Quaver
        </a>
        <Link
          className="text-[15px] text-foreground/40 transition-opacity duration-200 hover:text-foreground/60"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="text-[15px] text-foreground/40 transition-opacity duration-200 hover:text-foreground/60"
          href="/about"
        >
          About
        </Link>
        <a
          className="text-[15px] text-foreground/40 transition-opacity duration-200 hover:text-foreground/60"
          href="https://github.com/ocarinalabs"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </nav>
    </div>
  </header>
);
