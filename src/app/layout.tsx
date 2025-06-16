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

export const metadata: Metadata = {
  title: "sidekick",
  description: "your everything sidekick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${heming.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
