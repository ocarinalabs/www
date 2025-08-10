"use client";

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import Link from "next/link";
import { Book } from "@/components/ui/book";

export default function LearnPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black text-gray-300">
      <Header />
      <div className="flex flex-col pt-[140px]">
        <div className="container mx-auto px-6 pb-10 max-w-3xl">
          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="flex justify-center mb-8">
              <Book depth={10} color="#536B78">
                <div className="p-3 mb-2 grid gap-3">
                  <h1 className="font-semibold">Book Five: Learn</h1>
                </div>
              </Book>
            </div>
            <p className="text-xs text-gray-400 font-mono">
              learn from the best, not the rest
            </p>
          </header>

          {/* Main Content */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white font-gambetta">
                Your Education is Just Beginning
              </h2>
              <p className="text-sm text-gray-300 font-sans">
                Malaysian universities teach you to be employees. YouTube
                University teaches you to be founders.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                The best startup education is free, online, and taught by people
                who actually built billion-dollar companies. Not professors
                who&apos;ve never shipped a product.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Here&apos;s your real MBA.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Essential Curriculum
              </h3>

              <div className="space-y-4">
                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold text-white">
                    <Link
                      href="https://www.startupschool.org"
                      className="underline hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Y Combinator Startup School
                    </Link>
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Free. The accelerator that created Airbnb, Stripe, and
                    Dropbox teaching you their exact playbook. If you only take
                    one course, make it this.
                  </p>
                </div>

                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold text-white">
                    <Link
                      href="https://youtube.com/playlist?list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB"
                      className="underline hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YC Essential Startup Advice
                    </Link>
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    The concentrated wisdom. How to get ideas, build products,
                    find users, and grow. No fluff, just what works.
                  </p>
                </div>

                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold text-white">
                    <Link
                      href="https://youtube.com/playlist?list=PL5q_lef6zVkaTY_cT1k7qFNF2TidHCe-1"
                      className="underline hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      How to Start a Startup (Stanford)
                    </Link>
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Sam Altman&apos;s legendary Stanford course. Features
                    founders of Reddit, Pinterest, and more. University-level
                    depth, practitioner-level insight.
                  </p>
                </div>

                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold text-white">
                    <Link
                      href="https://www.youtube.com/@slidebean"
                      className="underline hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Slidebean
                    </Link>
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Real startup case studies. See exactly how companies
                    succeeded or failed. Learn from their pitch decks,
                    strategies, and mistakes.
                  </p>
                </div>

                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold text-white">
                    <Link
                      href="https://www.hubspot.com/resources/startups"
                      className="underline hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HubSpot Startup Resources
                    </Link>
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Practical guides on sales, marketing, and growth. Less
                    philosophy, more tactics. Useful when you need to figure out
                    the &quot;how&quot;.
                  </p>
                </div>

                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold text-white">
                    <Link
                      href="https://youtu.be/0lJKucu6HJc"
                      className="underline hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Paul Graham Essays
                    </Link>
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    The godfather of YC. His essays shaped how Silicon Valley
                    thinks. Start with &quot;Do Things That Don&apos;t
                    Scale&quot; and &quot;How to Get Startup Ideas&quot;.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Unspoken Truth About Learning
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                Malaysians love certificates. Degrees. Credentials. Proof that
                they &quot;learned&quot; something.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Silicon Valley doesn&apos;t give a shit about your certificates.
                They care about what you built.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                The best way to learn isn&apos;t to watch these videos.
                It&apos;s to watch one video, then immediately apply it. Launch
                something. See what breaks. Fix it. Repeat.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                Learn in Public
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                The secret weapon of fast learners: they learn in public. They
                share their journey. Their failures. Their insights.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                This terrifies Malaysians. We&apos;re taught to only show
                success. To hide our learning process. To pretend we knew it all
                along.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                But learning in public attracts mentors. Builds your network.
                Creates opportunities. Most importantly, it forces you to
                actually understand what you&apos;re learning.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Start a build log. Tweet your progress. Share your failures. The
                internet rewards authenticity, not perfection.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                Never Stop Learning
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                The moment you think you know enough is the moment you start
                dying.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Technology changes. Markets evolve. What worked yesterday
                won&apos;t work tomorrow. The only constant is change.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                But here&apos;s the beautiful thing: if you&apos;ve made it
                through these five books, you already have what most people
                lack.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                The mindset to fail. The urgency to ship. The tools to build.
                The courage to launch. And now, the resources to keep growing.
              </p>
              <p className="text-sm text-gray-300 font-sans font-semibold">
                You&apos;re ready. Now go build something that matters.
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-900/50 rounded-lg text-center">
              <p className="text-sm text-gray-300 font-sans mb-4">
                Ready to put it all into practice?
              </p>
              <Link
                href="/mf2"
                className="inline-block px-6 py-2 bg-white text-black rounded font-semibold text-sm hover:bg-gray-200 transition-colors"
              >
                Get Started with MF2
              </Link>
            </div>
          </section>

          {/* Navigation */}
          <nav className="mt-16 flex justify-between items-center">
            <Link
              href="/culture/launch"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Book Four: Launch
            </Link>
            <Link
              href="/culture"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Back to Library →
            </Link>
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  );
}
