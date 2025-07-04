"use client";

import Link from "next/link";

export const Manifesto = () => {
  return (
    <div className="container mx-auto px-6 pb-10 max-w-3xl relative">
      <header className="mb-6 flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center gap-2 mb-2">
            <span className="text-4xl text-white tracking-tight font-gambetta">
              Sidekick, Now.
            </span>
          </div>
          <span className="text-xs text-gray-400 mb-8 font-mono">
            everyone needs a sidekick.now we&apos;re yours
          </span>
        </div>
      </header>

      <section className="mb-8 space-y-4">
        <p className="text-sm text-gray-300 font-sans">
          Everyone needs a sidekick.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          The person who remembers what you forgot. Who knows what you
          don&apos;t. Who handles the things you don&apos;t want to do.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          But most people don&apos;t have one. Instead, they&apos;re drowning.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Drowning in apps that don&apos;t talk to each other. Drowning in
          decisions they&apos;re not qualified to make. Drowning in a world that
          expects everyone to be an expert at everything.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          The world got complicated faster than humans could adapt.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          Your phone has 47 apps that all want your attention. Your business
          needs you to be an accountant, marketer, customer service rep, and
          strategist. Your life requires you to master everything from tax codes
          to social media algorithms.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Meanwhile, the tools that could help are scattered across different
          platforms, require different logins, and speak different languages.
          Each one promises to be the solution, but together they just create
          more chaos.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Before AI, you had powerful tools but no intelligence to connect them.
          You had data but no insight. You had software but no understanding.
          People are burning out trying to keep up with systems designed by
          engineers for engineers.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          What if technology actually worked alongside you instead of against
          you?
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          Then AI changed everything.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          ChatGPT showed millions of people what a digital sidekick could feel
          like. Suddenly, you could talk to your computer like a person. Ask
          questions in plain English. Get help that actually understood context.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          For the first time, technology felt like it was working with you, not
          against you. People started saying &quot;I&apos;ve been using ChatGPT
          as my coding partner&quot; or &quot;it&apos;s like having a research
          assistant that never sleeps.&quot;
        </p>
        <p className="text-sm text-gray-300 font-sans">
          AI proved that personal digital sidekicks weren&apos;t science
          fiction. They were possible. Right now.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          But here&apos;s the thing: ChatGPT is a generalist. It knows a little
          about everything, but it doesn&apos;t know everything about your
          specific world. Your business. Your workflow. Your problems.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          That&apos;s what Sidekick is building.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          We take AI&apos;s breakthrough in understanding and conversation, then
          we make it specialized. We give it deep knowledge about your specific
          domain. We connect it to your actual workflows, not just generic
          advice.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Your sidekick doesn&apos;t replace you. It makes you better. It learns
          how you work, remembers your preferences, and handles the complexity
          while you focus on what matters. Unlike a general AI assistant, it
          becomes an expert in your world.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          We believe everyone deserves their own specialized AI sidekick. Not
          another chatbot to manage, but intelligent technology that genuinely
          understands your problems and helps solve them.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          We&apos;re building AI-powered sidekicks for different types of
          people, starting with the ones who need help most.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          Be Batman. We&apos;re your Robin.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="/robin"
            className="underline hover:text-blue-400 transition-colors"
          >
            Robin
          </Link>{" "}
          handles the complexity while you focus on what matters. Accept
          payments with Tap to Pay, track your best-selling products, get
          alerted when inventory runs low, and forecast revenue trends—all from
          the device you already own.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Robin&apos;s AI assistant knows your business patterns and gives you
          insights that matter. Which products to reorder. When your busy
          periods hit. How to price for maximum profit. It learns from your
          sales data and helps you make better decisions.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Less time managing systems, more time growing your business.
          That&apos;s what a real sidekick does.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          Robin is just the beginning.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="/labs"
            className="underline hover:text-blue-400 transition-colors"
          >
            Labs
          </Link>{" "}
          is where we push AI beyond general conversation into specialized
          expertise. We&apos;re building AI that understands specific domains
          deeply - AI for students that knows how you learn, AI for creators
          that understands your market, AI for developers that knows your
          codebase.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="/founders"
            className="underline hover:text-blue-400 transition-colors"
          >
            Founders
          </Link>{" "}
          is our community of builders creating the next generation of
          AI-powered sidekicks. We share techniques for training domain-specific
          AI, building intelligent workflows, and creating technology that truly
          understands its users. Because the best AI sidekicks are built by
          people who understand the problems they solve.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          The future is personal sidekicks for everyone.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          Students with sidekicks that understand how they learn. Parents with
          sidekicks that anticipate family needs. Creators with sidekicks that
          handle the complexity. Developers with sidekicks that know their
          codebase.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Technology that remembers, learns, and connects. Technology that works
          for you, not against you.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          If you&apos;re building sidekicks, we want to help. If you need one
          but it doesn&apos;t exist yet, we want to build it with you.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="mailto:youneeda@sidekick.now"
            className="underline hover:text-blue-400 transition-colors"
          >
            youneeda@sidekick.now
          </Link>
        </p>
      </section>
    </div>
  );
};
