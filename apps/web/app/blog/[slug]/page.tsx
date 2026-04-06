import { posts } from "@repo/cms";
import { Body } from "@repo/cms/components/body";
import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DashedLine } from "../../components/dashed-line";

type BlogPostProperties = {
  readonly params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = async () => {
  const allPosts = await posts.getAll();
  return allPosts.map((post) => ({ slug: post._slug }));
};

export const generateMetadata = async ({
  params,
}: BlogPostProperties): Promise<Metadata> => {
  const { slug } = await params;
  const post = await posts.getBySlug(slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post._title,
    description: post.description,
  });
};

const BlogPost = async ({ params }: BlogPostProperties) => {
  const { slug } = await params;
  const post = await posts.getBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden w-full max-w-[1560px] justify-between sm:flex">
        <DashedLine direction="left" />
        <DashedLine direction="right" />
      </div>

      <div className="flex justify-center px-6 sm:px-8 md:px-16 lg:px-8">
        <div className="w-full max-w-[720px] py-16 sm:py-24">
          <h1 className="font-[family-name:var(--font-heading)] text-[32px] text-black leading-[1.15] tracking-tight sm:text-[48px]">
            {post._title}
          </h1>

          <span className="mt-3 block font-mono text-foreground/45 text-xs tracking-wider">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>

          <div className="relative mt-10 sm:mt-12">
            <DashedLine direction="top" />
            <div className="prose prose-neutral prose-p:mb-6 max-w-none pt-10 prose-headings:font-[family-name:var(--font-heading)] prose-a:text-foreground/75 prose-code:text-[13px] prose-code:text-foreground/75 prose-h2:text-[24px] prose-h3:text-[18px] prose-headings:text-foreground/90 prose-strong:text-foreground/85 text-[16px] text-foreground/80 leading-[1.85] prose-headings:tracking-tight prose-a:underline prose-a:decoration-foreground/20 hover:prose-a:decoration-foreground/40 sm:pt-12">
              <Body content={post.body} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
