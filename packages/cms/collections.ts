import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import { z } from "zod";

const analysisSchema = z.object({
  title: z.string(),
  model: z.string(),
  provider: z.string(),
  benchmark: z.string(),
  date: z.string(),
  status: z.enum(["completed", "failed"]),
  content: z.string(),
});

const analyses = defineCollection({
  name: "analyses",
  directory: "content/analyses",
  include: "**/*.md",
  schema: analysisSchema,
  transform: async ({ title, content, ...page }, context) => {
    const body = await context.cache(content, async () =>
      compileMDX(
        context,
        { ...page, content },
        {
          remarkPlugins: [remarkGfm],
        }
      )
    );

    return {
      ...page,
      content,
      _title: title,
      _slug: page._meta.path,
      body,
    };
  },
});

const postSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
  content: z.string(),
});

const posts = defineCollection({
  name: "posts",
  directory: "content/blog",
  include: "**/*.md",
  schema: postSchema,
  transform: async ({ title, content, ...page }, context) => {
    const body = await context.cache(content, async () =>
      compileMDX(
        context,
        { ...page, content },
        {
          remarkPlugins: [remarkGfm],
        }
      )
    );

    return {
      ...page,
      content,
      _title: title,
      _slug: page._meta.path,
      body,
    };
  },
});

export default defineConfig({
  content: [analyses, posts],
});
