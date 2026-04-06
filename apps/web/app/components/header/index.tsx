"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open, close]);

  const links = [
    { href: "/score", label: "The Score" },
    { href: "https://ocarina.sh", label: "Quaver", external: true },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "https://github.com/ocarinalabs", label: "GitHub", external: true },
  ];

  return (
    <header className="flex justify-center px-6 pt-8 pb-4 sm:px-8 sm:pt-10 md:px-16 lg:px-8">
      <div
        className="flex w-full max-w-[720px] items-center justify-between"
        ref={navRef}
      >
        <Link
          className="font-display font-medium text-[18px] text-foreground/90 transition-opacity duration-200 hover:opacity-70"
          href="/"
          onClick={close}
        >
          <span className="text-[22px]">❍</span> Ocarina
        </Link>

        <nav className="hidden items-center gap-5 sm:flex">
          {links.map((link) =>
            link.external ? (
              <a
                className="text-[15px] text-foreground/60 transition-opacity duration-200 hover:text-foreground/80"
                href={link.href}
                key={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ) : (
              <Link
                className="text-[15px] text-foreground/60 transition-opacity duration-200 hover:text-foreground/80"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex items-center justify-center text-foreground/70 sm:hidden"
          onClick={() => setOpen(!open)}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3.75 9h16.5m-16.5 6.75h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

        {open && (
          <nav className="absolute top-[60px] right-6 left-6 z-50 flex flex-col gap-1 border border-foreground/10 bg-background p-4 shadow-sm sm:hidden">
            {links.map((link) =>
              link.external ? (
                <a
                  className="py-2 text-[15px] text-foreground/70 transition-opacity duration-200 hover:text-foreground/90"
                  href={link.href}
                  key={link.href}
                  onClick={close}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  className="py-2 text-[15px] text-foreground/70 transition-opacity duration-200 hover:text-foreground/90"
                  href={link.href}
                  key={link.href}
                  onClick={close}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
};
