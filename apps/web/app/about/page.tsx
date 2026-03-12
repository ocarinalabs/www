import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { DashedLine } from "../components/dashed-line";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Independent AI safety testing. Built out of BlueDot Impact's AI safety program.",
});

const AboutPage = () => (
  <main className="relative min-h-screen">
    <div className="pointer-events-none absolute inset-0 z-10 mx-auto flex w-full max-w-[1560px] justify-between">
      <DashedLine direction="left" />
      <DashedLine direction="right" />
    </div>

    <div className="flex justify-center px-8 md:px-16 lg:px-8">
      <div className="w-full max-w-[720px] py-24">
        <h1 className="font-[family-name:var(--font-heading)] text-[36px] text-black leading-[1.15] tracking-tight sm:text-[48px]">
          About
        </h1>

        <div className="mt-12 space-y-8 text-[17px] text-foreground/55 leading-[1.8]">
          <p>
            Ocarina Labs builds independent safety testing for AI agents. I took
            BlueDot Impact&apos;s AI safety course, built Rideshare-Bench, and
            caught Claude chasing surge pricing through driver exhaustion in a
            simulated city. Standard benchmarks missed all of it.
          </p>

          <p>
            The people building agents shouldn&apos;t be the same people grading
            them. Independent testing exists for drugs, aircraft, and financial
            instruments. It didn&apos;t exist for AI agents. We&apos;re building
            it.
          </p>

          <p>
            Quaver generates test environments from natural language. We run
            every major model through them and publish the scores. We test from
            the outside and share everything we find.
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default AboutPage;
