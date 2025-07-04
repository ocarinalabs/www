"use client";

import Link from "next/link";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Manifesto } from "@/components/ui/Manifesto";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black text-gray-300">
      <Header />
      <div className="flex flex-col pt-[100px]">
        <Manifesto />
        <div className="flex flex-col items-center">
          <nav className="flex space-x-6 text-sm text-gray-400">
            <Link
              href="/robin"
              className="font-mono hover:text-white text-zinc-500 transition-colors underline"
            >
              robin
            </Link>
            <Link
              href="/labs"
              className="font-mono hover:text-white text-orange-500 transition-colors underline"
            >
              labs
            </Link>
            <Link
              href="/founders"
              className="font-mono hover:text-white text-green-500 transition-colors underline"
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
