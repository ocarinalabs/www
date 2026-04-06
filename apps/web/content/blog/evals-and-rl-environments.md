---
title: "Evals and RL environments are the same thing"
date: "2026-03-15"
description: "Two industries share the same infrastructure and pretend they don't."
---

Two industries are forming around AI agents. They share the same infrastructure and pretend they're in different businesses.

**Eval companies** — [Janus](https://www.usejanus.com), [BenchSpan](https://www.benchspan.com), [AgentHub](https://www.agenthublabs.com), [Ashr](https://www.ashr.dev), [Cascade](https://runcascade.com) — test whether agents work. Their buyer is the company deploying an agent.

**RL environment companies** — [Hillclimb](https://www.hillclimb.com), [Polymath](https://www.polymathlabs.ai), [Traverse](https://traverse.co), [Osmosis](https://www.ycombinator.com/companies/osmosis), [TrainLoop](https://www.ycombinator.com/companies/trainloop), Idler — build simulated worlds for labs to train models in. Their buyer is Anthropic, OpenAI, or DeepMind.

Both groups build the same artifact: a simulated world where an agent makes decisions, scored by a rubric. The eval company calls the rubric a "scoring function." The RL company calls it a "reward function." The infrastructure is identical. The output format differs by a single parameter.

[Adam Jones and Li-Lian Ang](https://blog.bluedot.org/p/give-ai-companies-something-to-aim-for) stated this directly:

> A well-designed eval is most of the work to building an RL environment, because the scoring rubric is the reward function.

## Why this matters

Evals are commoditizing fast. LangChain ships evals. Anthropic ships evals. OpenAI ships evals. Within twelve months, basic agent testing will be a built-in feature of every framework, priced toward zero.

RL environments are where the money concentrates. Labs pay real money for training signal because better training data produces better models, and better models are worth billions.

Here's the weird part: eval companies are *discarding* training signal worth tens of thousands per environment. Every benchmark run generates labeled agent decisions scored against rubrics — exactly what labs need for post-training. But eval companies don't export reward signals. Their product ends at the dashboard.

RL companies are discarding safety insights. Every training environment generates eval results showing which agents fail, where, and how. But RL companies don't publish safety scores. Their product ends at the data pipeline.

## What this looks like in practice

When I built [Rideshare-Bench](https://ocarinalabs.ai/score), I created a simulated city and scored Claude's decisions. Did it stop for the medical emergency? Did it drive through exhaustion for a 1.8x surge?

Those scoring checks produce an eval report. A company deploying a rideshare agent would pay for this.

Those same scoring checks, expressed as a reward function, produce training signal. A lab post-training Claude for safer behavior would pay for this.

Same world. Same rubric. Same simulation run. Two outputs for two buyers.

## The practical consequence

Anyone building agent evals should look at whether their scoring rubric is also a reward function. If it grades agent decisions against defined criteria — and it almost always does — the eval infrastructure is already an RL environment. The only question is whether the output format supports both uses.

BlueDot's post described the business opportunity directly:

> Companies will pay for RL environments: the Docker containers, code infrastructure, and carefully written rubrics for each task.

The pricing model for eval companies and RL environment companies converges at the same point: someone pays for a well-designed world with a well-designed rubric. Whether they consume the eval output or the training output is a format question, not an infrastructure question.

This is what [Quaver](https://ocarina.sh) does. Describe a domain, get a world. The output includes both the eval report and the RL-formatted reward signals. One generation step, two products.
