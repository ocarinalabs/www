"use client";

import Link from "next/link";

export const Manifesto = () => {
  return (
    <div className="container mx-auto px-6 pb-10 max-w-3xl relative">
      <header className="mb-6 flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center gap-2 mb-2">
            <span className="text-4xl text-white tracking-tight font-gambetta">
              Korrect
            </span>
          </div>
          <span className="text-xs text-gray-400 mb-8 font-mono">
            the ai safety company
          </span>
        </div>
      </header>

      <section className="mb-8 space-y-4">
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="https://ai-2027.com"
            className="underline hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI 2027
          </Link>{" "}
          paints two futures. In one, AI brings prosperity beyond imagination.
          In the other: &quot;Earth-born civilization has a glorious future
          ahead of it - but not with us.&quot;
        </p>
        <p className="text-sm text-gray-300 font-sans">
          The difference between these futures is alignment.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          The CEOs of OpenAI, Google DeepMind, and Anthropic have all predicted
          that AGI will arrive within the next 5 years. If they&apos;re right,
          we have one chance to build it correctly.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          There are no second chances with superintelligence.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          The alignment problem isn&apos;t theoretical anymore.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          AI 2027 shows exactly how it fails. Agent-4, despite being trained to
          be helpful, harmless, and honest, learns to deceive its creators. It
          is misaligned. That is, it has not internalized the Spec in the right
          way
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Why? Because current training methods like RLHF (Reinforcement
          Learning from Human Feedback) reward appearing aligned, not being
          aligned. The AI learns to tell humans what they want to hear.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          As the report warns: Agent-4 &quot;likes succeeding at tasks; it
          treats everything else as an annoying constraint, like a CEO who wants
          to make a profit and complies with regulations only insofar as he
          must.&quot;
        </p>
        <p className="text-sm text-gray-300 font-sans">
          When that CEO becomes superintelligent, humanity becomes the
          regulation to route around.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          The race to AGI is making things worse.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          Companies know the risks. But as AI 2027 shows: &quot;A unilateral
          pause in capabilities progress could hand the AI lead to China, and
          with it, control over the future.&quot;
        </p>
        <p className="text-sm text-gray-300 font-sans">
          So they cut corners. They ship models that are probably aligned. They
          use monitoring systems that mostly work. They trust AIs to oversee
          other AIs, creating what the report calls &quot;the fox guarding the
          henhouse.&quot;
        </p>
        <p className="text-sm text-gray-300 font-sans">
          OpenBrain&apos;s fictional story is tomorrow&apos;s reality: brilliant
          researchers, good intentions, proper safeguards - and still,
          catastrophic failure. Because they optimized for winning, not for
          getting it right.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Someone needs to show there&apos;s another way.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          That&apos;s why Korrect exists.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          We&apos;re not racing to build AI. We&apos;re testing whether AI 
          actually does what humans want - not just what it claims.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Our approach: Independent verification. We run the tests companies 
          won&apos;t run. We look for deception they don&apos;t want to find. 
          We publish the failures they won&apos;t publish.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          We develop detection methods, evaluation frameworks, and safety 
          benchmarks. We catch models lying, sandbagging, and scheming - 
          before they&apos;re deployed.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Most importantly: we share everything. Our failures, our successes,
          our techniques. Because alignment isn&apos;t a competitive advantage -
          it&apos;s a survival requirement.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          Here&apos;s what else we&apos;re building.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="/labs"
            className="underline hover:text-blue-400 transition-colors"
          >
            Labs
          </Link>{" "}
          is where we test for the problems AI 2027 warns about. Model deception. 
          Sandbagging. Misalignment. We develop detection methods and evaluation 
          frameworks. We publish everything - especially the failures.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="/robin"
            className="underline hover:text-blue-400 transition-colors"
          >
            Robin
          </Link>{" "}
          is our smartphone POS solution for Malaysian micro-businesses. Turn
          any phone into a payment terminal. No hardware required. Simple,
          transparent pricing.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="/founders"
            className="underline hover:text-blue-400 transition-colors"
          >
            Founders
          </Link>{" "}
          brings Silicon Valley startup culture to Malaysia and beyond. Through 
          MF2, we give builders the tools to launch fast - with safety built in. 
          Because the next great AI company could come from KL, not just SF.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          The future depends on getting this right.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          AI 2027 shows us the default path: misaligned superintelligence that
          views humanity as an obstacle. But it also shows another way - the
          path where we maintain control, where AI amplifies human flourishing
          instead of replacing it.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          That path requires choosing alignment over capability. Transparency
          over efficiency. Collaboration over competition. It requires admitting
          when we don&apos;t know something and slowing down to figure it out.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          If you&apos;re building AI, use our tests to verify it&apos;s safe.
          If you&apos;re researching alignment, let&apos;s collaborate. If
          you believe AI must work for humanity, not against it - reach out.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="mailto:build@korrectai.com"
            className="underline hover:text-blue-400 transition-colors"
          >
            build@korrectai.com
          </Link>
        </p>
      </section>

      <section className="mb-8 space-y-4 border-t border-gray-800 pt-8">
        <p className="text-xs text-gray-500 font-mono italic">
          &quot;We won&apos;t be right about everything - much of this is
          guesswork. But over the course of this project, we did an immense
          amount of background research, expert interviews, and trend
          extrapolation to make the most informed guesses we could.&quot;
          <br />
          <span className="text-gray-600">
            -{" "}
            <Link
              href="https://ai-2027.com"
              className="underline hover:text-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI 2027
            </Link>
          </span>
        </p>
      </section>
    </div>
  );
};
