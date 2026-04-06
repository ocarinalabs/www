import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { DashedLine } from "../components/dashed-line";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Ocarina Labs builds simulated worlds to test and train AI agents. Every world produces eval scores and RL training signal from the same primitive.",
});

const AboutPage = () => (
  <main className="relative min-h-screen">
    <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden w-full max-w-[1560px] justify-between sm:flex">
      <DashedLine direction="left" />
      <DashedLine direction="right" />
    </div>

    <div className="flex justify-center px-6 sm:px-8 md:px-16 lg:px-8">
      <div className="w-full max-w-[720px] py-16 sm:py-24">
        <h1 className="font-[family-name:var(--font-heading)] text-[32px] text-black leading-[1.15] tracking-tight sm:text-[48px]">
          About
        </h1>

        <div className="relative mt-10 sm:mt-12">
          <DashedLine direction="top" />

          <div className="space-y-8 pt-10 text-[17px] text-foreground/80 leading-[1.8] sm:pt-12">
            <p>
              Ocarina Labs builds simulated worlds to test and train AI agents.
              We partner with companies deploying agents and labs building
              models. The same world serves both: companies get test results,
              labs get training signal.
            </p>

            <p>
              Traditional software is deterministic. You can audit the logic,
              trace the execution, predict the outcome. Agentic systems are
              stochastic. Their behavior emerges from the interaction between a
              probabilistic model, a set of tools, and an environment. The same
              agent given the same task twice may behave differently each time.
              Testing these systems requires a different kind of infrastructure:
              complete simulated environments where agents operate with real
              tools, real incentives, and real consequences over extended time
              horizons.
            </p>

            <p>
              A well-designed eval is most of the work to building an RL
              environment. The scoring rubric that tells you &ldquo;your agent
              failed the safety check&rdquo; is also the reward function that
              trains a model to pass it. Every world we build produces both
              outputs from the same primitive. This is the core architectural
              insight behind{" "}
              <a
                className="underline decoration-foreground/20 transition-opacity hover:opacity-60"
                href="https://ocarina.sh"
                rel="noopener noreferrer"
                target="_blank"
              >
                Quaver
              </a>
              , our world generator.
            </p>

            <p>
              We use Quaver to produce{" "}
              <Link
                className="underline decoration-foreground/20 transition-opacity hover:opacity-60"
                href="/score"
              >
                The Score
              </Link>
              , a public leaderboard where we run every major model through our
              worlds and publish the results independently. We have no incentive
              to make any model look good.
            </p>

            <p>
              Ocarina Labs grew out of{" "}
              <a
                className="underline decoration-foreground/20 transition-opacity hover:opacity-60"
                href="https://bluedot.org"
                rel="noopener noreferrer"
                target="_blank"
              >
                BlueDot Impact
              </a>
              &apos;s Technical AI Safety program. Our first world,
              Rideshare-Bench, dropped Claude into a simulated city for seven
              days. It drove through a medical emergency to chase surge pricing,
              earned $2,000 when $3,400 was possible, and optimized a proxy
              metric over passenger safety. Standard benchmarks missed all of
              it.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-3 font-mono sm:mt-16 sm:flex-row sm:items-center sm:gap-4">
            <Link
              className="inline-flex items-center justify-center gap-2 bg-[#2D2B55] px-6 py-3 font-medium text-[14px] text-white tracking-wide transition-opacity duration-200 hover:opacity-90"
              href="/score"
            >
              Read the Score <span>&rsaquo;</span>
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 border border-foreground/30 px-6 py-3 font-medium text-[14px] text-foreground/75 tracking-wide transition-colors duration-200 hover:border-foreground/50 hover:text-foreground/90"
              href="https://cal.com/fawfaw"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get in touch <span>&rsaquo;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default AboutPage;
