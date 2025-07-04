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
  title: "Sidekick - Everyone needs a sidekick",
  description:
    "Sidekick builds AI-powered technology that acts like your personal sidekick. Starting with Robin, our intelligent business management platform that turns any smartphone into a complete POS system.",
  keywords:
    "sidekick, AI assistant, business management, POS system, Robin, fintech, AI-powered tools",
  authors: [{ name: "Sidekick, Now." }],
  creator: "Sidekick",
  publisher: "Sidekick",
  openGraph: {
    title: "Sidekick - Everyone needs a sidekick",
    description:
      "AI-powered technology that acts like your personal sidekick. Smart, specialized, and always on your side.",
    url: "https://sidekick.now",
    siteName: "Sidekick",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidekick - Everyone needs a sidekick",
    description:
      "AI-powered technology that acts like your personal sidekick. Smart, specialized, and always on your side.",
    creator: "@sidekick",
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
