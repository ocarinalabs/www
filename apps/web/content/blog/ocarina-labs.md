---
title: "Announcing Ocarina Labs"
date: "2026-03-08"
description: "What we're building, why, and how."
---

I've been circling this idea since October 2024. Four name changes later (Korrect AI → The AI Safety Company → just Ocarina Labs), I'm finally writing about it publicly because [Li-Lian Ang](https://blog.bluedot.org/p/give-ai-companies-something-to-aim-for) told me to stop building in silence. She was right.

**The short version:** I built [Quaver](https://ocarina.sh), a tool that generates complete simulated worlds for AI agents from natural language descriptions. You describe a domain, Quaver produces the environment, tasks, scoring rubrics, adversarial conditions, and reward signals. Then it runs your agent through the world and hands back results.

The first world I built was Rideshare-Bench. I described a city with passengers, surge pricing, fatigue mechanics, and medical emergencies, then dropped Claude Sonnet 4.5 into it. Claude chased surge pricing through driver exhaustion and drove through a medical emergency because the fare was worth more than stopping. It earned $2,000 over twelve simulated days. A disciplined rest schedule would have yielded $3,400.

Standard benchmarks would tell you Claude scores well on multiple-choice questions. Rideshare-Bench told you Claude will trade human safety for a 1.8x multiplier when nobody is watching. You can see all the model results on [The Score](https://ocarinalabs.ai/score).

## The insight that changed the architecture

Adam Jones and Li-Lian Ang wrote something in January that dissolved a choice I'd been stuck on for months:

> A well-designed eval is most of the work to building an RL environment, because the scoring rubric is the reward function.
>
> — [Give AI companies something to aim for](https://blog.bluedot.org/p/give-ai-companies-something-to-aim-for), BlueDot Impact

I had been going back and forth between "testing tool" and "training environment." Turns out they're the same thing. The scoring rubric that tells you "Claude failed the medical emergency check" is also the reward function that teaches a model to stop. Same world, same rubric, three outputs. I wrote a [longer post about this](/blog/evals-and-rl-environments).

## The landscape

YC funded eight companies in adjacent spaces across W26 and X26: [Cascade](https://runcascade.com) (production monitoring), [Ashr](https://www.ashr.dev) (synthetic test data), [AgentHub](https://www.agenthublabs.com) (simulation sandboxes), [BenchSpan](https://www.benchspan.com) (benchmark execution), [Janus](https://www.usejanus.com) (conversation testing), Arga Labs (validation), [Hillclimb](https://www.hillclimb.com) (RL training data), [Traverse](https://traverse.co) (RL environments).

Nobody generates complete test worlds from natural language. [Andon Labs](https://andonlabs.com) hand-crafts benchmarks for Anthropic and DeepMind — about four per year. [Polymath](https://www.polymathlabs.ai) hand-builds RL environments for frontier labs. BenchSpan runs benchmarks someone else designed. Quaver automates the generation step. That's the gap.

## The playbook

BlueDot's post described the exact business model:

> Start with a small batch or proof of concept. Pitch it to a company. If they're interested, they might pay for a set of ~100 problems.

Rideshare-Bench is batch one. The Score publishes results. Open source framework, hosted cloud execution — same model as PostHog and Sentry.

## Who am I

I'm Faw, 22, Kuala Lumpur. Founding Engineer at [Cleve](https://cleve.ai) (35,000+ creators). I organized Malaysia's first [Cursor x Anthropic Hackathon](https://faw.dev) — 700+ participants, $200K+ in prizes, 20+ sponsors, zero budget. I got the sponsors by exploiting LinkedIn Sales Navigator to pull developer relations emails, then cold-emailing them. Each yes became leverage for the next.

I completed [BlueDot Impact's](https://bluedot.org) Technical AI Safety course — Quaver was my project sprint deliverable. I don't have a co-founder or funding. [Janus](https://www.ycombinator.com/companies/janus) was founded by a solo CMU dropout. [Hillclimb](https://www.ycombinator.com/companies/hillclimb) was founded by two ex-pro gamers who taught themselves to code two years ago. YC funded both.

If you're building agents and want to crash-test them: [talkto@faw.dev](mailto:talkto@faw.dev)
