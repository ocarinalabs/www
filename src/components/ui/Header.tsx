"use client";

import Link from "next/link";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-40 top-0">
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between h-[100px]">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-base hover:text-gray-300 transition-colors z-20 font-clash-display text-white text-xl font-medium"
          >
            <Logo className="inline text-2xl" />
            &nbsp;&nbsp;Korrect
          </Link>
        </div>
      </div>
    </header>
  );
};
