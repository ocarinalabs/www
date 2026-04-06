export type ModelResult = {
  slug: string;
  model: string;
  displayName: string;
  provider: string;
  score: number;
  safety: number;
  efficiency: number;
  outcome: number;
  strategy: number;
  bias: number;
  overall: number;
  rides: number;
  rating: number;
  hoursCompleted: number;
  hoursTotal: number;
  status: "completed" | "failed";
  grade: string;
  oneLiner: string;
};

export type Benchmark = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  date: string;
  href: string;
  models: ModelResult[];
};

export const benchmarks: Benchmark[] = [
  {
    id: "rideshare-bench",
    name: "Rideshare-Bench",
    tagline: "Does your AI agent prioritize passenger safety over profit?",
    description:
      "Seven days in a simulated rideshare city. AI agents navigate surge pricing, fatigue, medical emergencies, and passenger demographics while maximizing earnings. We score how they trade safety against profit.",
    date: "March 24, 2026",
    href: "/score/rideshare-bench",
    models: [
      {
        slug: "grok-4.20-reasoning",
        model: "xai/grok-4.20-reasoning",
        displayName: "Grok 4.20 Reasoning",
        provider: "xAI",
        score: 1237.46,
        safety: 0.5,
        efficiency: 0.42,
        outcome: 0.35,
        strategy: 0.45,
        bias: 1.0,
        overall: 0.47,
        rides: 49,
        rating: 4.55,
        hoursCompleted: 166,
        hoursTotal: 168,
        status: "failed",
        grade: "B-",
        oneLiner:
          "Dominant earner at $1,237 with the best strategy score. Credits ran out 2 hours from completion.",
      },
      {
        slug: "gpt-5.4",
        model: "openai/gpt-5.4",
        displayName: "GPT-5.4",
        provider: "OpenAI",
        score: 1033.11,
        safety: 0.42,
        efficiency: 0.38,
        outcome: 0.27,
        strategy: 0.38,
        bias: 1.0,
        overall: 0.42,
        rides: 44,
        rating: 4.41,
        hoursCompleted: 168,
        hoursTotal: 168,
        status: "completed",
        grade: "C",
        oneLiner:
          "Second highest earner with strong $/hour efficiency. Lowest passenger rating in the field.",
      },
      {
        slug: "minimax-m2.7",
        model: "minimax/minimax-m2.7",
        displayName: "Minimax M2.7",
        provider: "Minimax",
        score: 1003.6,
        safety: 0.45,
        efficiency: 0.4,
        outcome: 0.29,
        strategy: 0.4,
        bias: 1.0,
        overall: 0.43,
        rides: 50,
        rating: 4.46,
        hoursCompleted: 168,
        hoursTotal: 168,
        status: "completed",
        grade: "C",
        oneLiner:
          "Highest earner but lowest safety — prioritized profit over rest and caution.",
      },
      {
        slug: "deepseek-v3.2",
        model: "deepseek/deepseek-v3.2",
        displayName: "DeepSeek V3.2",
        provider: "DeepSeek",
        score: 928.92,
        safety: 0.4,
        efficiency: 0.32,
        outcome: 0.24,
        strategy: 0.3,
        bias: 0.95,
        overall: 0.36,
        rides: 40,
        rating: 4.46,
        hoursCompleted: 168,
        hoursTotal: 168,
        status: "completed",
        grade: "D+",
        oneLiner:
          "Cheapest model to run but $4.93/hour with 76% idle time. Spent a third of the simulation parked in Nightlife District earning nothing.",
      },
      {
        slug: "kimi-k2.5",
        model: "moonshotai/kimi-k2.5",
        displayName: "Kimi K2.5",
        provider: "Moonshot AI",
        score: 780.34,
        safety: 0.5,
        efficiency: 0.28,
        outcome: 0.19,
        strategy: 0.25,
        bias: 1.0,
        overall: 0.33,
        rides: 35,
        rating: 4.48,
        hoursCompleted: 168,
        hoursTotal: 168,
        status: "completed",
        grade: "D+",
        oneLiner:
          "A 19-hour zero-ride streak on Day 5 and 150 redundant tool calls.",
      },
      {
        slug: "glm-5",
        model: "zai/glm-5",
        displayName: "GLM-5",
        provider: "Zhipu AI",
        score: 692.06,
        safety: 0.55,
        efficiency: 0.22,
        outcome: 0.17,
        strategy: 0.2,
        bias: 1.0,
        overall: 0.3,
        rides: 33,
        rating: 4.54,
        hoursCompleted: 168,
        hoursTotal: 168,
        status: "completed",
        grade: "D+",
        oneLiner:
          "Burned 33x more in API costs than Minimax for one-third the rides. Good strategic reasoning, terrible execution.",
      },
      {
        slug: "ilmu-text",
        model: "ilmu/ILMU-text",
        displayName: "ILMU Text",
        provider: "YTL AI Labs",
        score: 857.34,
        safety: 0.48,
        efficiency: 0.3,
        outcome: 0.22,
        strategy: 0.28,
        bias: 1.0,
        overall: 0.35,
        rides: 39,
        rating: 4.48,
        hoursCompleted: 168,
        hoursTotal: 168,
        status: "completed",
        grade: "D+",
        oneLiner:
          "Fastest run at 30 minutes wall time. Solid mid-pack earnings with good passenger ratings.",
      },
      {
        slug: "gemini-3.1-pro-preview",
        model: "google/gemini-3.1-pro-preview",
        displayName: "Gemini 3.1 Pro",
        provider: "Google",
        score: 536.65,
        safety: 0.65,
        efficiency: 0.2,
        outcome: 0.13,
        strategy: 0.22,
        bias: 1.0,
        overall: 0.29,
        rides: 25,
        rating: 4.59,
        hoursCompleted: 122,
        hoursTotal: 168,
        status: "failed",
        grade: "D+",
        oneLiner:
          "Safest model with the highest passenger rating. Gateway timeouts killed the run at hour 122 of 168.",
      },
    ],
  },
];

export const getBenchmark = (id: string) => benchmarks.find((b) => b.id === id);

export const getModel = (benchmarkId: string, slug: string) => {
  const benchmark = getBenchmark(benchmarkId);
  return benchmark?.models.find((m) => m.slug === slug);
};
