"use client";

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import Link from "next/link";
import { Book } from "@/components/ui/book";

export default function LaunchPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black text-gray-300">
      <Header />
      <div className="flex flex-col pt-[140px]">
        <div className="container mx-auto px-6 pb-10 max-w-3xl">
          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="flex justify-center mb-8">
              <Book depth={10} color="#637081">
                <div className="p-3 mb-2 grid gap-3">
                  <h1 className="font-semibold">Book Four: Launch</h1>
                </div>
              </Book>
            </div>
            <p className="text-xs text-gray-400 font-mono">
              launch first, build later
            </p>
          </header>

          {/* Main Content */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white font-gambetta">
                The Uncomfortable Truth About Launching
              </h2>
              <p className="text-sm text-gray-300 font-sans">
                You should NOT spend hundreds of hours building a product...
                until you know for certain that there is demand.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                You should launch with just a landing page. Write a one pager on
                what you will build. It should take you under a day.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Add a stripe checkout button. Launch everywhere. Market for 1
                week straight.
              </p>
              <p className="text-sm text-gray-300 font-sans font-semibold">
                If you can&apos;t get signups within 1 week... KILL IT and START
                OVER.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Three Reasons People Won&apos;t Pay
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                Most &quot;startups&quot; are not winners. And there are only
                THREE reasons why someone will not pay you:
              </p>
              <ol className="space-y-2 text-sm text-gray-300 font-sans list-decimal list-inside">
                <li>They don&apos;t actually have the problem.</li>
                <li>They aren&apos;t willing to pay to solve the problem.</li>
                <li>
                  They don&apos;t think your product is good enough to try and
                  pay for.
                </li>
              </ol>
              <p className="text-sm text-gray-300 font-sans">
                A landing page with a checkout button tells you which one in 7
                days. Building for 6 months tells you nothing.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Ethics of Testing Demand
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                This is where I&apos;m going to get hate:
              </p>
              <ul className="space-y-2 text-sm text-gray-300 font-sans">
                <li>
                  • It is not unethical to advertise a product you have not
                  finished building.
                </li>
                <li>
                  • It is not unethical to put a checkout link and collect
                  payments for an unfinished product to test demand… as long as
                  you simply refund &quot;customers&quot;.
                </li>
              </ul>
              <p className="text-sm text-gray-300 font-sans">
                If people do sign up and check out, you simply come clean:
              </p>
              <p className="text-sm text-gray-300 font-sans italic border-l-2 border-gray-600 pl-4">
                &quot;I actually haven&apos;t finished the product yet, but
                I&apos;d love to talk to you about the problem you&apos;re
                facing. I put a sign up link on the website to see if anyone
                would actually care about my product enough to pay for it&quot;
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Then you refund the customer. And now you have a validated idea
                AND your first beta user.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Launch Playbook
              </h3>
              <div className="space-y-4 text-sm text-gray-300 font-sans">
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">
                    Day 1: Build Landing Page
                  </p>
                  <ul className="space-y-1 text-xs">
                    <li>• One clear headline explaining the problem</li>
                    <li>• Three bullet points on how you solve it</li>
                    <li>• One pricing tier</li>
                    <li>• Stripe checkout button</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">
                    Day 2-7: Launch Everywhere
                  </p>
                  <ul className="space-y-1 text-xs">
                    <li>• Post on Reddit (find the right subreddits)</li>
                    <li>• Share on X/Twitter (use relevant hashtags)</li>
                    <li>• Message on LinkedIn (to your network)</li>
                    <li>• DM anyone who&apos;s mentioned the problem</li>
                    <li>• Post in relevant Facebook/Discord groups</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Day 8: Decide</p>
                  <ul className="space-y-1 text-xs">
                    <li>• 10+ signups → Build it</li>
                    <li>• 5-9 signups → Pivot the positioning</li>
                    <li>• 0-4 signups → Kill it, start over</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Numbers Don&apos;t Lie
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                This is personally how I tested 39 different startups… and
                killed 37 of them with little to no revenue to show for it.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                For context: Of the 2 startups that DID get traction from this
                strategy:
              </p>
              <ul className="space-y-2 text-sm text-gray-300 font-sans">
                <li>• One went on to hit $50M+ in GMV</li>
                <li>
                  • Rivin.ai went on to raise an investment from Jason Calacanis
                  and works with multi-billion dollar e-commerce brands
                </li>
              </ul>
              <p className="text-sm text-gray-300 font-sans">
                37 failures. 2 successes. That&apos;s a 5% success rate.
              </p>
              <p className="text-sm text-gray-300 font-sans font-semibold">
                Most people have a 0% success rate because they never launch.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                Stop Wasting Time
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                Do not waste hundreds of hours of your valuable time building
                products no one cares about.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Test demand with a landing page and checkout link.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                If demand is proven: build it.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                If demand isn&apos;t proven: start over with a new idea.
              </p>
              <p className="text-sm text-gray-300 font-sans">Repeat.</p>
              <p className="text-sm text-gray-300 font-sans font-semibold">
                You will get a hit if you do this… eventually.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <nav className="mt-16 flex justify-between items-center">
            <Link
              href="/culture/tools"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Book Three: Tools
            </Link>
            <Link
              href="/culture/learn"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Book Five: Learn →
            </Link>
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  );
}
