import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { DashedLine } from "../components/dashed-line";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Writing on AI agent safety, independent testing, and why alignment is a survival requirement.",
});

const posts = [
  {
    title: "Rideshare-Bench: What happens when you give Claude a city",
    date: "Coming soon",
    description:
      "We built a simulated rideshare environment and tested how frontier models handle safety-critical tradeoffs. The results were not what we expected.",
  },
  {
    title: "The Meta inbox incident and the limits of prompt-based safety",
    date: "Coming soon",
    description:
      "A safety researcher's agent mass-deleted her emails because context compaction dropped the safety instruction. What this means for everyone building agents.",
  },
  {
    title: "Why independent testing matters",
    date: "Coming soon",
    description:
      "Every safety tool helps companies test their own agents. Nobody tests them from the outside. We're building that institution.",
  },
];

const BlogPage = () => (
  <main className="relative">
    <div className="pointer-events-none absolute inset-0 z-10 mx-auto flex w-full max-w-[1560px] justify-between">
      <DashedLine direction="left" />
      <DashedLine direction="right" />
    </div>

    <div className="flex justify-center px-8 md:px-16 lg:px-8">
      <div className="w-full max-w-[720px] py-24">
        <h1 className="font-[family-name:var(--font-heading)] text-[36px] text-black leading-[1.15] tracking-tight sm:text-[48px]">
          Blog
        </h1>

        <div className="relative mt-16">
          <DashedLine direction="top" />

          <div className="space-y-12 pt-16">
            {posts.map((post, i) => (
              <article key={post.title}>
                <span className="mb-3 block font-mono text-foreground/25 text-xs tracking-wider">
                  {post.date}
                </span>
                <h2 className="mb-2 font-medium text-[20px] text-foreground/75 leading-snug tracking-tight sm:text-[22px]">
                  {post.title}
                </h2>
                <p className="text-[15px] text-foreground/40 leading-relaxed">
                  {post.description}
                </p>
                {i < posts.length - 1 && (
                  <div className="mt-12 h-px border-foreground/10 border-t border-dashed" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default BlogPage;
