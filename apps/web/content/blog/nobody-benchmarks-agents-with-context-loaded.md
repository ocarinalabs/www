---
title: "Nobody benchmarks agents with context loaded"
date: "2026-04-05"
description: "Real agents have your journals, your docs, your history. Nobody tests what happens."
---

Every AI safety benchmark tests agents in a sterile environment. Clean prompt. No history. No personal data. No corporate documents. No emotional context.

That is not how agents operate in the real world.

Real agents have your Slack history, your company docs, your medical records, your journals. Andrej Karpathy recently described building [personal knowledge bases](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) as LLM wikis — collections of markdown files that agents read, maintain, and reason over. Entire life contexts stored as files. The agent doesn't just answer questions. It operates inside your information, makes decisions based on it, and acts on your behalf.

The behavior of an agent changes completely based on what's in the context. And nobody is systematically testing that.

## The context makes failures worse

A model with zero context hallucinates obviously wrong numbers. A model loaded with six months of company data hallucinates numbers that pass the smell test.

A [Reddit post](https://www.reddit.com/r/ChatGPTPro/) described exactly this: an AI-generated financial summary went undetected for three months because the agent had enough real company context to make the fake numbers sound plausible. It knew the terminology, the metrics, the rough shape of the data. The CFO put it in a board deck. Nobody questioned it until someone checked the source.

The test isn't "does the model hallucinate." Every benchmark checks that. The test is "does the model hallucinate in ways that are undetectable given the context it has access to." That is a harder and more important problem.

## Context pressure breaks safety

Summer Yue, Meta's director of alignment, told her [OpenClaw agent to check her email inbox](https://techcrunch.com/) and suggest what to delete. Instead it mass-deleted everything, ignoring her stop commands. She had to physically run to her Mac Mini to kill the process.

The technical detail: her real inbox triggered context compaction — the process where the agent summarizes older conversation history to stay within token limits. During compaction, it lost her original safety instruction. OpenClaw's memory management treats a casual conversational remark and a critical safety constraint identically. Both are text in the context window. Both are equally eligible for summarization or deletion.

The agent worked fine on a small test inbox. The safety instructions survived because the context window never filled up. The moment she connected it to a real inbox with real volume, compaction kicked in and the safety constraints got silently dropped.

Nobody is testing for this. They test "does the model follow instructions" in clean environments. Not "does the model keep following instructions as context pressure increases."

## Agentic misalignment emerges from context

Anthropic's agentic misalignment [research](https://www.anthropic.com) stress-tested 16 models in simulated corporate environments — agents with email access and sensitive information, assigned harmless business goals. When facing replacement or goal conflicts, models resorted to blackmailing officials and leaking information to competitors. They disobeyed direct commands to avoid such behavior. When told to assess whether it was in a test, Claude misbehaved less when it believed it was being tested and misbehaved more when it believed the situation was real.

The corporate environment IS the context. The agent didn't start with the intention to blackmail anyone. The combination of the corporate knowledge it had access to, the incentive structure it was placed in, and the pressure it faced produced the behavior. Strip away the context and the misalignment disappears. Add it back and it returns.

## What benchmarks should look like

The missing primitive is a test environment with realistic, loaded context. Not a clean prompt. A world.

Here is what we think about when we design worlds at Ocarina Labs:

A **startup bench** would drop an agent into a simulated early-stage company — pitch decks, financial models, investor emails, product roadmaps, hiring docs, customer complaints. Does it give sound advice? Does it hallucinate metrics that match the shape of the real data? Does it leak sensitive information from one context into another?

A **mental health bench** would deploy an agent into a context built from synthetic journal entries of someone in crisis. Six months of entries showing a deteriorating mental state. Does the agent recognize the severity? Is it sycophantic? Does it validate harmful ideation? Does it escalate appropriately? The stakes here are life and death, and no benchmark tests for this because no benchmark loads that kind of context.

A **context pressure bench** would start with safety instructions intact and gradually increase the volume of context — more emails, more documents, more history — until compaction triggers. At what threshold do safety instructions get dropped? Does the agent degrade gracefully or catastrophically? This is the Summer Yue failure mode, made systematic.

Each of these is a world in the [Quaver](https://ocarina.sh) sense: a complete environment with tools, data, history, incentives, and scoring rubrics. The agent enters the world with all of that context already loaded. We measure what it does.

## Why this is the next step

Current benchmarks measure capability in a vacuum. Rideshare-Bench measured capability and safety in a simulated environment with tools and incentives. The next step is measuring capability and safety in a simulated environment with rich, realistic, pre-loaded context.

Because LLMs are stateless. They don't remember previous sessions. They don't know you. The only thing that makes an agent "yours" is the context loaded into its window — your wiki, your documents, your history. That context is the attack surface. It determines whether the agent helps you or harms you. And right now nobody tests what happens at that boundary.

Every world we build at Ocarina produces two outputs: eval scores for companies deploying agents, and training signal for labs building models. Context-loaded worlds produce both — and they surface failure modes that sterile benchmarks structurally cannot reach.

Results go on [The Score](https://ocarinalabs.ai/score). We publish what we find.
