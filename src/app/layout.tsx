import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const heming = localFont({
  src: "./fonts/heming.ttf",
  variable: "--font-heming",
});

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
  weight: "200 700",
});

const gambetta = localFont({
  src: [
    {
      path: "./fonts/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-gambetta",
  weight: "300 700",
});

export const metadata: Metadata = {
  title: "Korrect",
  description:
    "Korrect builds aligned AI systems that remain safe as they grow powerful. We prioritize alignment over capability, transparency over efficiency, and humanity's future over the AI race.",
  keywords:
    "AI alignment, AI safety, responsible AI, RLHF, mechanistic interpretability, aligned AI, Korrect, AI research, superintelligence alignment",
  authors: [{ name: "Korrect" }],
  creator: "Korrect",
  publisher: "Korrect",
  openGraph: {
    title: "Korrect - Building AI the right way",
    description:
      "Aligned AI systems that remain safe as they grow powerful. Because there are no second chances with superintelligence.",
    url: "https://korrect.ai",
    siteName: "Korrect",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korrect",
    description:
      "Aligned AI systems that remain safe as they grow powerful. Because there are no second chances with superintelligence.",
    creator: "@korrect",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${heming.variable} ${clashDisplay.variable} ${gambetta.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
