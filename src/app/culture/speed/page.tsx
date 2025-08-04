"use client";

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import Link from "next/link";
import { Book } from "@/components/ui/book";
import { Clock } from "@/components/ui/clock";

export default function SpeedPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black text-gray-300">
      <Header />
      <div className="flex flex-col pt-[140px]">
        <div className="container mx-auto px-6 pb-10 max-w-3xl">
          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="flex justify-center mb-8">
              <Book depth={10} color="#ACCBE1">
                <div className="p-3 mb-2 grid gap-3">
                  <h1 className="font-semibold">Book Two: Speed</h1>
                </div>
              </Book>
            </div>
            <p className="text-xs text-gray-400 font-mono">
              move fast and break things
            </p>
          </header>

          {/* Main Content */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white font-gambetta">
                Speed is the Only Competitive Advantage
              </h2>
              <p className="text-sm text-gray-300 font-sans">
                Most &quot;founders&quot; never launch anything. They build for
                months, never complete it and eventually scrap the product.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Startups are truthfully a numbers game. Even the best founders have
                hit rates under 10%. Just look at founders like Pieter Levels.
              </p>
              <p className="text-sm text-gray-300 font-sans font-semibold">
                The honest answer? Increase the number of startups you launch.
              </p>
            </div>

            {/* Clock Component */}
            <div className="flex flex-col items-center my-8">
              <Clock initialSecondsMode="smooth" />
              <p className="text-xs text-gray-500 text-center mt-4">
                Time waits for no one. Every second you hesitate, someone else is shipping.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Malaysian Speed Trap
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                In Malaysia, we&apos;re taught to plan extensively. To get buy-in from 
                everyone. To make sure everything is perfect before launch. To not 
                &quot;malu&quot; ourselves with something half-baked.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Meanwhile, a kid in San Francisco launched three products while you 
                were still designing your logo.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Here&apos;s the truth: Your first version will suck anyway. The 
                difference is whether it sucks after 6 months of building or 6 days.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Speed Formula
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                Speed isn&apos;t about being sloppy. It&apos;s about being smart about 
                what matters.
              </p>
              <div className="bg-gray-900/50 p-4 rounded-lg space-y-3">
                <p className="text-sm text-gray-300 font-mono">Day 1: Idea → Landing page</p>
                <p className="text-sm text-gray-300 font-mono">Day 2-7: Launch and market</p>
                <p className="text-sm text-gray-300 font-mono">Day 8: Kill or continue</p>
              </div>
              <p className="text-sm text-gray-300 font-sans">
                If you can&apos;t explain your idea in one page, it&apos;s too complex. 
                If you can&apos;t build a landing page in one day, you&apos;re 
                overthinking. If you can&apos;t get users in one week, there&apos;s no 
                demand.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                Speed Beats Everything
              </h3>
              <ul className="space-y-2 text-sm text-gray-300 font-sans">
                <li>• Speed beats perfection (perfect products ship too late)</li>
                <li>• Speed beats competition (first mover advantage is real)</li>
                <li>• Speed beats analysis (data from real users &gt; assumptions)</li>
                <li>• Speed beats fear (no time to be scared when you&apos;re moving)</li>
                <li>• Speed beats capital (iterate faster than funded competitors)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Art of Moving F*cking Fast
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                Moving fast doesn&apos;t mean being reckless. It means being ruthless 
                about what doesn&apos;t matter.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Your code doesn&apos;t need to be perfect. Your design doesn&apos;t 
                need to win awards. Your infrastructure doesn&apos;t need to scale to 
                a million users.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                You know what needs to be perfect? Finding out if anyone gives a shit.
              </p>
              <p className="text-sm text-gray-300 font-sans font-semibold">
                Everything else can wait.
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-gray-600 pl-4">
              <p className="text-sm text-gray-300 font-sans italic">
                &quot;If you&apos;re not embarrassed by the first version of your 
                product, you&apos;ve launched too late.&quot;
              </p>
              <p className="text-xs text-gray-500">- Reid Hoffman, LinkedIn founder</p>
            </div>
          </section>

          {/* Navigation */}
          <nav className="mt-16 flex justify-between items-center">
            <Link 
              href="/culture/mindset" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Book One: Mindset
            </Link>
            <Link 
              href="/culture/tools" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Book Three: Tools →
            </Link>
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  );
}