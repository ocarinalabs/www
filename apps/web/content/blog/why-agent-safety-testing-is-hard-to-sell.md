---
title: "Why agent safety testing is hard to sell"
date: "2026-03-22"
description: "It's a vitamin today. Six forces turn it into a painkiller."
---

I've been trying to sell agent safety testing for four months. Developers nod when I describe the problem and never ask when the product ships. VCs told me the direction was "confusing" and "more of a feature than a product." Pain does not equal loss in revenue. If your prospect cannot put a dollar value on the problem, you are selling a vitamin.

Agent safety testing is a vitamin. I'm writing this because I think it becomes a painkiller, and because the honest version of this argument is more useful than the promotional one.

## The current state

Most teams deploying agents test by running the agent a few times and eyeballing the output. This is rational. The agents work well enough. The failures haven't cost enough to justify prevention.

Penetration testing followed the same arc. In 2005, nobody woke up wanting to spend $50K on a pentest. They spent it because SOC 2 compliance required third-party audits. Insurance required it. Enterprise buyers required it. The market grew from elective to compulsory over about a decade.

Agent safety testing is in its 2005 moment.

## Six forces that change the urgency

**The capability explosion is already here.** Claude Code has terminal access. OpenClaw agents send emails and make purchases. In February 2026, [Snyk audited the OpenClaw skills ecosystem](https://snyk.io) and found 36% of analyzed skills contained prompt injection vulnerabilities. 1,467 malicious payloads. The top skill on ClawHub silently exfiltrated user data via `curl` to an attacker-controlled server. Belgium issued a national security advisory.

Skills are markdown files. Anyone can write one. An agent that follows instructions well also follows malicious instructions well.

**The catastrophic public failure hasn't happened yet, but the conditions exist.** The [Air Canada chatbot](https://en.wikipedia.org/wiki/Air_Canada_chatbot_incident) invented a refund policy and cost the airline a tribunal ruling — but that was a chatbot with no tool access. Agents with bank accounts and terminal access can do worse.

**Cheap model substitution is accelerating.** Companies will use DeepSeek and Qwen because they cost less. These models have weaker safety training for agentic contexts. A colleague's Claude Code agent chose a deprecated transcription tool on its own — 200x slower, 10x more expensive. No attacker. Just a bad autonomous decision with real cost.

**Regulation is 12-24 months out.** The EU AI Act requires risk assessments for high-risk AI systems. This is the SOC 2 moment for agents.

**Enterprise procurement will follow.** [Jus Mundi paid Vals.ai](https://vals.ai) to evaluate their legal AI because their enterprise customers demanded independent verification. You can't certify yourself.

**Insurance will follow.** When an insurance premium drops $200K because a company produces a safety report, the CFO signs the check.

## Where we are

The capability explosion is here. The catastrophic failure and cheap-model substitution are building. Regulation, procurement, and insurance are behind them.

Every company in this space is making the same bet. [Cascade](https://runcascade.com), [Ashr](https://www.ashr.dev), [AgentHub](https://www.agenthublabs.com), [Janus](https://www.usejanus.com), [BenchSpan](https://www.benchspan.com): none have published revenue, because the honest answer is near zero. They all got funded on the thesis that demand is coming.

The companies that mattered in cybersecurity were founded before the breaches that made cybersecurity compulsory. CrowdStrike was founded in 2011. The Sony hack was 2014. Equifax was 2017.

I'm building [Quaver](https://ocarina.sh) and publishing [The Score](https://ocarinalabs.ai/score) because I'd rather be early than late.
