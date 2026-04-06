import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { DashedLine } from "../components/dashed-line";
import { Hero } from "./components/hero";
import { Manifesto } from "./components/manifesto";

export const metadata: Metadata = createMetadata({
  title: "Ocarina",
  description:
    "Independent safety testing for AI agents. We test whether agents follow instructions, handle edge cases, and refuse dangerous actions — before they ship.",
});

const Page = () => (
  <main className="relative">
    <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden w-full max-w-[1560px] justify-between sm:flex">
      <DashedLine direction="left" />
      <DashedLine direction="right" />
    </div>
    <Hero />
    <Manifesto />
  </main>
);

export default Page;
