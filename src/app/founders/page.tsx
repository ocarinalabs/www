import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founders | Korrect",
  description: "Cultivating startup culture and innovation in Kuala Lumpur.",
};

export default function FoundersPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-clash-display font-medium text-white mb-6">
          Korrect Founders
        </h1>
        
        <p className="text-xl md:text-2xl font-sans text-gray-400 leading-relaxed">
          Cultivating startup culture and innovation in Kuala Lumpur.
        </p>
      </div>
    </div>
  );
}