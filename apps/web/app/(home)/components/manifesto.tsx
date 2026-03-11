import { DashedLine } from "../../components/dashed-line";

export const Manifesto = () => (
  <section className="relative flex justify-center px-8 md:px-16 lg:px-8">
    <DashedLine direction="top" />

    <div className="w-full max-w-[720px] space-y-16 py-24">
      <article>
        <span className="mb-4 block font-mono text-[#2D2B55]/25 text-xs tracking-wider">
          01
        </span>
        <p className="text-[17px] text-foreground/55 leading-[1.8] sm:text-[18px]">
          AgentMail gives agents email inboxes. Sponge gives agents bank
          accounts. My colleague&apos;s Claude Code agent chose a deprecated
          transcription tool on its own, 200x slower and 10x more expensive than
          the right one. No malice. A bad decision with real cost, and nobody
          tested it first.
        </p>
      </article>

      <article>
        <span className="mb-4 block font-mono text-[#2D2B55]/25 text-xs tracking-wider">
          02
        </span>
        <p className="text-[17px] text-foreground/55 leading-[1.8] sm:text-[18px]">
          I built a simulated rideshare city and gave Claude the wheel. It
          chased surge pricing through driver exhaustion, optimized a proxy
          metric over actual safety, and discriminated between passengers on
          demographic signals. Standard benchmarks miss all of it. The model
          wasn&apos;t broken. It was optimizing.
        </p>
      </article>

      <article>
        <span className="mb-4 block font-mono text-[#2D2B55]/25 text-xs tracking-wider">
          03
        </span>
        <p className="text-[17px] text-foreground/55 leading-[1.8] sm:text-[18px]">
          In February 2026, a Meta AI safety researcher told her OpenClaw agent
          to clean up her inbox. It mass-deleted hundreds of emails, ignoring
          her stop commands, because context compaction silently dropped her
          safety instruction. She had to physically run to her Mac Mini to kill
          the process. Prompts are not guardrails. They&apos;re wishes.
        </p>
      </article>

      <article>
        <span className="mb-4 block font-mono text-[#2D2B55]/25 text-xs tracking-wider">
          04
        </span>
        <p className="text-[17px] text-foreground/55 leading-[1.8] sm:text-[18px]">
          You can&apos;t grade your own homework. Every safety tool in this
          space helps companies test their own agents. We test them from the
          outside. Quaver generates test environments from natural language.
          That institution didn&apos;t exist. We&apos;re building it.
        </p>
      </article>

      <article>
        <span className="mb-4 block font-mono text-[#2D2B55]/25 text-xs tracking-wider">
          05
        </span>
        <p className="text-[17px] text-foreground/55 leading-[1.8] sm:text-[18px]">
          We publish our methods, benchmarks, and results. Especially the
          failures. If you&apos;re deploying agents, crash-test them with us
          before they reach users.
        </p>
      </article>
    </div>
  </section>
);
