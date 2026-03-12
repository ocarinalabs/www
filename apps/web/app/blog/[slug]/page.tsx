import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { DashedLine } from "../../components/dashed-line";

type BlogPostProperties = {
  readonly params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: BlogPostProperties): Promise<Metadata> => {
  const { slug } = await params;

  return createMetadata({
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: "A blog post from Ocarina Labs.",
  });
};

const BlogPost = async ({ params }: BlogPostProperties) => {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 z-10 mx-auto flex w-full max-w-[1560px] justify-between">
        <DashedLine direction="left" />
        <DashedLine direction="right" />
      </div>

      <div className="flex justify-center px-8 md:px-16 lg:px-8">
        <div className="w-full max-w-[720px] py-24">
          <Link
            className="mb-8 inline-flex items-center gap-1 font-mono text-foreground/40 text-xs tracking-wider hover:text-foreground/60"
            href="/blog"
          >
            &larr; Back to Blog
          </Link>
          <h1 className="font-[family-name:var(--font-heading)] text-[36px] text-black leading-[1.15] tracking-tight sm:text-[48px]">
            {title}
          </h1>
          <div className="relative mt-16">
            <DashedLine direction="top" />
            <p className="pt-16 text-[15px] text-foreground/40 leading-relaxed">
              This post is coming soon.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
