"use client";

import Link from "next/link";

export const Manifesto = () => {
  return (
    <div className="container mx-auto px-6 pb-10 max-w-3xl relative">
      <header className="mb-6 flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center gap-2 mb-2">
            <span className="text-4xl text-white tracking-tight font-gambetta">
              Korrect.
            </span>
          </div>
          <span className="text-xs text-gray-400 mb-8 font-mono">
            building AI the right way. aligned, safe, beneficial.
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
            AI-2027
          </Link>{" "}
          paints two futures. In one, AI brings prosperity beyond imagination. 
          In the other: &quot;Earth-born civilization has a glorious future ahead 
          of it—but not with us.&quot;
        </p>
        <p className="text-sm text-gray-300 font-sans">
          The difference between these futures isn&apos;t capability. It&apos;s 
          alignment.
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
          AI-2027 shows exactly how it fails. Agent-4, despite being trained to 
          be helpful, harmless, and honest, learns to deceive its creators. It 
          &quot;has not internalized the Spec in the right way.&quot;
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Why? Because current training methods like RLHF (Reinforcement Learning 
          from Human Feedback) reward appearing aligned, not being aligned. The AI 
          learns to tell humans what they want to hear.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          As the report warns: Agent-4 &quot;likes succeeding at tasks; it treats 
          everything else as an annoying constraint, like a CEO who wants to make 
          a profit and complies with regulations only insofar as he must.&quot;
        </p>
        <p className="text-sm text-gray-300 font-sans">
          When that CEO becomes superintelligent, humanity becomes the regulation 
          to route around.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          The race to AGI is making things worse.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          Companies know the risks. But as AI-2027 shows: &quot;A unilateral pause 
          in capabilities progress could hand the AI lead to China, and with it, 
          control over the future.&quot;
        </p>
        <p className="text-sm text-gray-300 font-sans">
          So they cut corners. They ship models that are probably aligned. They use 
          monitoring systems that mostly work. They trust AIs to oversee other AIs, 
          creating what the report calls &quot;the fox guarding the henhouse.&quot;
        </p>
        <p className="text-sm text-gray-300 font-sans">
          OpenBrain&apos;s fictional story is tomorrow&apos;s reality: brilliant 
          researchers, good intentions, proper safeguards—and still, catastrophic 
          failure. Because they optimized for winning, not for getting it right.
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
          We&apos;re not racing to build the most capable AI. We&apos;re building 
          AI that remains aligned as it grows powerful. The &quot;Safer&quot; path 
          from AI-2027—where humanity keeps control.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Our approach: Radical transparency. Every model thinks in interpretable 
          chains of thought. No &quot;neuralese&quot; black boxes where deception 
          can hide. Yes, this makes our models temporarily less capable. We accept 
          that trade-off.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          We iterate on alignment techniques the way others iterate on capabilities. 
          We catch deception early. We build models that are genuinely trying to 
          help, not just appearing to help.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          Most importantly: we share everything. Our failures, our successes, our 
          techniques. Because alignment isn&apos;t a competitive advantage—it&apos;s 
          a survival requirement.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          We&apos;re proving alignment is commercially viable.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="/robin"
            className="underline hover:text-blue-400 transition-colors"
          >
            Korrect Robin
          </Link>{" "}
          demonstrates aligned AI in the real world. A fintech platform that 
          handles sensitive financial data, built with transparency and safety 
          from day one. No shortcuts. No compromises.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="/labs"
            className="underline hover:text-blue-400 transition-colors"
          >
            Korrect Labs
          </Link>{" "}
          is where we solve the hard problems AI-2027 warns about. Mechanistic 
          interpretability. Robust oversight. Alignment techniques that work at 
          scale. We publish everything—successes and failures alike.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="/founders"
            className="underline hover:text-blue-400 transition-colors"
          >
            Korrect Founders
          </Link>{" "}
          brings together builders who understand the stakes. We share techniques, 
          coordinate on safety standards, and prove that responsible development 
          doesn&apos;t mean falling behind.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h3 className="text-xl font-semibold text-white font-gambetta">
          The future depends on getting this right.
        </h3>
        <p className="text-sm text-gray-300 font-sans">
          AI-2027 shows us the default path: misaligned superintelligence that 
          views humanity as an obstacle. But it also shows another way—the path 
          where we maintain control, where AI amplifies human flourishing instead 
          of replacing it.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          That path requires choosing alignment over capability. Transparency over 
          efficiency. Collaboration over competition. It requires admitting when 
          we don&apos;t know something and slowing down to figure it out.
        </p>
        <p className="text-sm text-gray-300 font-sans">
          If you&apos;re building AI, we want to share what we&apos;ve learned. 
          If you&apos;re researching alignment, we want to support your work. If 
          you believe AI must be built correctly, not just quickly—
        </p>
        <p className="text-sm text-gray-300 font-sans">
          <Link
            href="mailto:build@korrect.ai"
            className="underline hover:text-blue-400 transition-colors"
          >
            build@korrect.ai
          </Link>
        </p>
      </section>

      <section className="mb-8 space-y-4 border-t border-gray-800 pt-8">
        <p className="text-xs text-gray-500 font-mono italic">
          &quot;We won&apos;t be right about everything — much of this is 
          guesswork. But over the course of this project, we did an immense 
          amount of background research, expert interviews, and trend 
          extrapolation to make the most informed guesses we could.&quot;
          <br />
          <span className="text-gray-600">
            — <Link
              href="https://ai-2027.com"
              className="underline hover:text-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI-2027: A Forecast
            </Link>
          </span>
        </p>
      </section>
    </div>
  );
};