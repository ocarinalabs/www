import { posts } from "@repo/cms";
import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { DashedLine } from "../components/dashed-line";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Writing on AI agent safety, independent testing, and why alignment is a survival requirement.",
});

const BlogPage = async () => {
  const allPosts = await posts.getAll();

  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden w-full max-w-[1560px] justify-between sm:flex">
        <DashedLine direction="left" />
        <DashedLine direction="right" />
      </div>

      <div className="flex justify-center px-6 sm:px-8 md:px-16 lg:px-8">
        <div className="w-full max-w-[720px] py-16 sm:py-24">
          <h1 className="font-[family-name:var(--font-heading)] text-[32px] text-black leading-[1.15] tracking-tight sm:text-[48px]">
            Blog
          </h1>

          <div className="relative mt-10 sm:mt-12">
            <DashedLine direction="top" />

            <div className="space-y-12 pt-10 sm:pt-12">
              {allPosts.map((post, i) => (
                <article key={post._slug}>
                  <span className="mb-3 block font-mono text-foreground/45 text-xs tracking-wider">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <Link className="group" href={`/blog/${post._slug}`}>
                    <h2 className="mb-2 font-medium text-[20px] text-foreground/90 leading-snug tracking-tight transition-opacity group-hover:opacity-70 sm:text-[22px]">
                      {post._title}
                    </h2>
                  </Link>
                  <p className="text-[15px] text-foreground/65 leading-relaxed">
                    {post.description}
                  </p>
                  {i < allPosts.length - 1 && (
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
};

export default BlogPage;
