"use client";

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import Link from "next/link";
import { Book } from "@/components/ui/book";

export default function MindsetPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black text-gray-300">
      <Header />
      <div className="flex flex-col pt-[140px]">
        <div className="container mx-auto px-6 pb-10 max-w-3xl">
          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="flex justify-center mb-8">
              <Book depth={10} color="#CEE5F2">
                <div className="p-3 mb-2 grid gap-3">
                  <h1 className="font-semibold">Book One: Mindset</h1>
                </div>
              </Book>
            </div>
            <p className="text-xs text-gray-400 font-mono">
              silicon valley thinking for malaysian builders
            </p>
          </header>

          {/* Main Content */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white font-gambetta">
                Bringing the Valley to KL
              </h2>
              <p className="text-sm text-gray-300 font-sans">
                Silicon Valley didn&apos;t become the world&apos;s innovation hub by
                playing it safe. It became legendary by embracing a radical idea:
                failure isn&apos;t just acceptable - it&apos;s essential.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                In KL, we&apos;ve been taught that failure is shameful. That taking
                risks is reckless. That moving slowly and carefully is wisdom.
              </p>
              <p className="text-sm text-gray-300 font-sans font-semibold">
                We&apos;re here to change that.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Mindset Gap
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                A developer in San Francisco isn&apos;t smarter than one in Kuala Lumpur. 
                They don&apos;t have better computers or faster internet. They don&apos;t 
                even work harder.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                What they have is permission to fail.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                In the Valley, your failed startup is a badge of honor. It means you 
                tried. You learned. You&apos;re ready for the next one. In Malaysia, 
                it&apos;s a mark of shame that follows you to job interviews.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                This fear of failure creates a self-fulfilling prophecy. When you&apos;re 
                afraid to fail, you don&apos;t try. When you don&apos;t try, you 
                don&apos;t learn. When you don&apos;t learn, you can&apos;t compete.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                Changing the Script
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                The first step isn&apos;t learning to code better. It&apos;s learning 
                to think different.
              </p>
              <ul className="space-y-2 text-sm text-gray-300 font-sans">
                <li>• Your job is not your identity</li>
                <li>• Your parents&apos; approval is not your North Star</li>
                <li>• Your failures are data points, not dead ends</li>
                <li>• Your ideas are worth testing, not protecting</li>
                <li>• Your time is worth risking, not preserving</li>
              </ul>
              <p className="text-sm text-gray-300 font-sans">
                This isn&apos;t about abandoning Malaysian values. It&apos;s about 
                adding Silicon Valley courage to Malaysian capability.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Permission You&apos;ve Been Waiting For
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                Consider this your official permission slip:
              </p>
              <p className="text-sm text-gray-300 font-sans italic border-l-2 border-gray-600 pl-4">
                You are allowed to quit your stable job. You are allowed to build 
                something that might not work. You are allowed to fail in public. 
                You are allowed to try again. You are allowed to dream bigger than 
                a corner office.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                The builders who change the world aren&apos;t the ones who never fail. 
                They&apos;re the ones who fail fast, fail cheap, and fail forward.
              </p>
              <p className="text-sm text-gray-300 font-sans font-semibold">
                Welcome to the new mindset. Now let&apos;s build something.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <nav className="mt-16 flex justify-between items-center">
            <Link 
              href="/culture" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Culture
            </Link>
            <Link 
              href="/culture/speed" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Book Two: Speed →
            </Link>
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  );
}