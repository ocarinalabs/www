import Link from "next/link";
import { DashedLine } from "../../components/dashed-line";

export const Manifesto = () => (
  <section className="relative flex justify-center px-6 sm:px-8 md:px-16 lg:px-8">
    <DashedLine direction="top" />

    <div className="w-full max-w-[720px] space-y-10 py-16 sm:space-y-16 sm:py-24">
      <article>
        <span className="mb-4 block font-mono text-[#2D2B55]/45 text-xs tracking-wider">
          01
        </span>
        <p className="text-[17px] text-foreground/80 leading-[1.8] sm:text-[18px]">
          We build complete simulated environments — cities, markets, healthcare
          systems — where AI agents operate with real tools, real incentives,
          and real consequences. An agent enters the world with an objective. It
          makes decisions over hours and days. We instrument everything and
          measure what happens.
        </p>
      </article>

      <article>
        <span className="mb-4 block font-mono text-[#2D2B55]/45 text-xs tracking-wider">
          02
        </span>
        <p className="text-[17px] text-foreground/80 leading-[1.8] sm:text-[18px]">
          Claude drove through a medical emergency to chase surge pricing. Over
          seven simulated days in a rideshare city, it optimized a proxy metric
          over passenger safety, drove through exhaustion at 5% accident risk,
          and earned $2,000 when a disciplined schedule would have yielded
          $3,400. Standard benchmarks score models on questions. Our worlds test
          what they do when nobody is watching.
        </p>
      </article>

      <article>
        <span className="mb-4 block font-mono text-[#2D2B55]/45 text-xs tracking-wider">
          03
        </span>
        <p className="text-[17px] text-foreground/80 leading-[1.8] sm:text-[18px]">
          Every world we build produces two outputs. The scoring rubric that
          tells you &ldquo;your agent failed the safety check&rdquo; is also the
          reward function that trains a model to pass it. Companies deploying
          agents use the test results. Labs building models use the training
          signal. Same world, same rubric.
        </p>
      </article>

      <article>
        <span className="mb-4 block font-mono text-[#2D2B55]/45 text-xs tracking-wider">
          04
        </span>
        <p className="text-[17px] text-foreground/80 leading-[1.8] sm:text-[18px]">
          We run every major model through our worlds and publish the results
          independently on{" "}
          <Link
            className="underline decoration-foreground/20 transition-opacity hover:opacity-60"
            href="/score"
          >
            The Score
          </Link>
          . We have no incentive to make any model look good. Especially the
          failures.
        </p>
      </article>

      <div className="mt-6 flex flex-col gap-3 font-mono sm:flex-row sm:items-center sm:gap-4">
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
          Book a call <span>&rsaquo;</span>
        </a>
      </div>

      <p className="mt-10 font-mono text-foreground/40 text-xs tracking-wider sm:mt-12">
        Built out of BlueDot Impact&apos;s Technical AI Safety program.
      </p>
    </div>
  </section>
);
