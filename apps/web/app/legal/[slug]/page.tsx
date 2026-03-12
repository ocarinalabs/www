import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import Link from "next/link";

type LegalPageProperties = {
  readonly params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: LegalPageProperties): Promise<Metadata> => {
  const { slug } = await params;

  return createMetadata({
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: "Legal information for Ocarina Labs.",
  });
};

const LegalPage = async ({ params }: LegalPageProperties) => {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="container mx-auto max-w-3xl px-8 py-24">
      <Link
        className="mb-8 inline-flex items-center gap-1 font-mono text-foreground/40 text-xs tracking-wider hover:text-foreground/60"
        href="/"
      >
        &larr; Back to Home
      </Link>
      <h1 className="font-[family-name:var(--font-heading)] text-[36px] text-black leading-[1.15] tracking-tight sm:text-[48px]">
        {title}
      </h1>
      <p className="mt-8 text-[15px] text-foreground/40 leading-relaxed">
        This page is coming soon.
      </p>
    </div>
  );
};

export default LegalPage;
