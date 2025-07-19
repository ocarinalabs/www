"use client";

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-black text-gray-300">
      <Header />
      
      {/* Main content */}
      <main className="min-h-screen flex flex-col">
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}