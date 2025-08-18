"use client";

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import Link from "next/link";
import { Book } from "@/components/ui/book";

export default function ToolsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black text-gray-300">
      <Header />
      <div className="flex flex-col pt-[140px]">
        <div className="container mx-auto px-6 pb-10 max-w-3xl">
          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="flex justify-center mb-8">
              <Book depth={10} color="#7C98B3">
                <div className="p-3 mb-2 grid gap-3">
                  <h1 className="font-semibold">Book Three: Tools</h1>
                </div>
              </Book>
            </div>
            <p className="text-xs text-gray-400 font-mono">
              skip the setup. ship the slop.
            </p>
          </header>

          {/* Main Content */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white font-gambetta">
                Your Stack is Slowing You Down
              </h2>
              <p className="text-sm text-gray-300 font-sans">
                Malaysian developers love to debate. React vs Vue. Postgres vs
                MySQL. AWS vs Google Cloud. Meanwhile, they haven&apos;t shipped
                anything in months.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                We built MF2 (Move F*cking Fast) - the stack AI moves fast with.
                Stop overthinking your stack, we already did that for you.
              </p>
              <div className="bg-gray-900 p-4 rounded font-mono text-sm">
                npx create-mf2-app@latest
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The MF2 Philosophy
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                Every tool in MF2 was chosen for one reason: speed. Not the
                fastest runtime. Not the smallest bundle. Speed of shipping.
              </p>
              <ul className="space-y-2 text-sm text-gray-300 font-sans">
                <li>
                  • <strong>Next.js</strong> - Because it just works
                </li>
                <li>
                  • <strong>TypeScript</strong> - Catch errors before users do
                </li>
                <li>
                  • <strong>Tailwind CSS</strong> - Stop naming things, start
                  shipping
                </li>
                <li>
                  • <strong>shadcn/ui</strong> - Beautiful components, zero
                  setup
                </li>
                <li>
                  • <strong>Convex</strong> - Real-time database that syncs
                  itself
                </li>
                <li>
                  • <strong>Clerk</strong> - Auth in 5 minutes, not 5 days
                </li>
                <li>
                  • <strong>Polar</strong> - Payments that don&apos;t suck
                </li>
                <li>
                  • <strong>Resend</strong> - Emails that actually arrive
                </li>
                <li>
                  • <strong>PostHog</strong> - Know what users do, not what they
                  say
                </li>
                <li>
                  • <strong>Vercel</strong> - Deploy in seconds, scale
                  automatically
                </li>
                <li>
                  • <strong>Mintlify</strong> - Docs that write themselves
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                Why These Tools Win
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                It&apos;s not about having the &quot;best&quot; tools. It&apos;s
                about having tools that get out of your way.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                In Malaysia, developers spend weeks setting up authentication.
                Months getting payments to work. Years maintaining
                infrastructure.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                With MF2, you have working auth in 5 minutes. Payments in 10.
                Deployed to production in 15.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Now you have no excuse not to ship.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                Built for AI Development
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                MF2 isn&apos;t just fast for humans. It&apos;s optimized for AI
                development. Every tool was chosen because Claude and GPT-4
                already know how to use it.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                No obscure frameworks. No custom abstractions. No
                &quot;clever&quot; patterns. Just battle-tested tools that every
                LLM has seen a million times.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                This means you can build faster with AI. And when you&apos;re
                stuck, the AI can actually help.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-gambetta">
                The Stack is Not the Product
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                Here&apos;s what Malaysian developers get wrong: they think the
                stack matters. It doesn&apos;t.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Facebook was built on PHP. WhatsApp ran on Erlang. Dropbox
                started with Python. None of their users cared.
              </p>
              <p className="text-sm text-gray-300 font-sans">
                Your users don&apos;t care if you use React or Vue. They care if
                your product solves their problem.
              </p>
              <p className="text-sm text-gray-300 font-sans font-semibold">
                MF2 exists so you can stop thinking about the stack and start
                thinking about the user.
              </p>
            </div>

            <div className="space-y-4 bg-gray-900/50 p-6 rounded-lg">
              <p className="text-sm text-gray-300 font-mono">
                $ npx create-mf2-app@latest my-startup
              </p>
              <p className="text-sm text-gray-300 font-mono">$ cd my-startup</p>
              <p className="text-sm text-gray-300 font-mono">$ npm run dev</p>
              <p className="text-xs text-gray-500 font-sans mt-4">
                3 commands. 2 minutes. 0 excuses.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <nav className="mt-16 flex justify-between items-center">
            <Link
              href="/founders/speed"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Book Two: Speed
            </Link>
            <Link
              href="/founders/launch"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Book Four: Launch →
            </Link>
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  );
}
