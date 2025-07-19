"use client";

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Manifesto } from "@/components/ui/Manifesto";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black text-gray-300">
      <Header />
      <div className="flex flex-col pt-[100px]">
        <Manifesto />
      </div>
      <Footer />
    </main>
  );
}
