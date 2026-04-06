import { allAnalyses, allPosts } from "content-collections";

export type Analysis = (typeof allAnalyses)[number];
export type Post = (typeof allPosts)[number];

export const analyses = {
  getAll: async () => allAnalyses,

  getByBenchmark: async (benchmark: string) =>
    allAnalyses.filter((a) => a.benchmark === benchmark),

  getBySlug: async (slug: string) =>
    allAnalyses.find(({ _meta }) => _meta.path === slug),
};

export const posts = {
  getAll: async () =>
    [...allPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    ),

  getBySlug: async (slug: string) =>
    allPosts.find(({ _meta }) => _meta.path === slug),
};
