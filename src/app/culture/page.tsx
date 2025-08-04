"use client";

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Culture } from "@/components/ui/Culture";

export default function CulturePage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black text-gray-300">
      <Header />
      <div className="flex flex-col pt-[100px]">
        <Culture />
      </div>
      <Footer />
    </main>
  );
}