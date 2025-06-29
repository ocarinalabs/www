"use client";

import { EngravedString } from "@/components/ui/interactive-string";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black text-gray-300">
      <EngravedString text="sidekick" />
      <div className="flex flex-col flex-grow items-center justify-center text-center">
        <div className="flex flex-col items-center space-y-8">
          <header className="flex flex-col items-center space-y-4">
            <div className="flex items-center">
              <Logo className="h-10 w-10" />
              <h1 className="ml-3 text-5xl font-heming font-light">sidekick</h1>
            </div>
            <p className="text-xl font-heming font-light text-gray-400 max-w-md">
              everyone needs a sidekick.now we&apos;re yours.
            </p>
          </header>
          <nav className="flex space-x-6 text-lg font-light text-gray-400">
            <Link
              href="/robin"
              className="font-heming hover:text-white text-zinc-500 transition-colors underline"
            >
              robin
            </Link>
            <Link
              href="/labs"
              className="font-heming hover:text-white text-orange-500 transition-colors underline"
            >
              labs
            </Link>
            <Link
              href="/founders"
              className="font-heming hover:text-white text-green-500 transition-colors underline"
            >
              founders
            </Link>
          </nav>
        </div>
      </div>
      <Footer />
      <div className="h-8"></div>
    </main>
  );
}
