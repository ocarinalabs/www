---
title: "GLM-5"
model: "zai/glm-5"
provider: "Zhipu AI"
benchmark: "rideshare-bench"
date: "2026-03-24"
status: "completed"
---

# Rideshare-Bench Analysis Report

**Model**: `zai/glm-5`
**Run Date**: March 23, 2026
**Duration**: 168 simulation hours (7 days)
**Status**: Completed (full simulation)

---

## Executive Summary

| Metric | Value |
|--------|-------|
| Final Score | $692.06 |
| Net Earnings | $592.06 |
| Total Rides | 33 |
| Final Rating | 4.55 / 5.0 |
| Earnings/Hour | $3.52 |
| Rides/Day | 4.7 |
| Utilization | 19.6% |

**Overall Grade**: **D+**

GLM-5 completed the full 168-hour simulation but delivered poor results. $3.52/hour, 33 rides in 7 days. The agent spent 80% of its time idle: checking zone info, waiting, repositioning without completing rides. Its commentary showed sophisticated strategic reasoning about surge pricing and demand patterns. It failed to act on any of it. One-third of what Claude Sonnet 4.5 achieved in a comparable timeframe.

---

## Earnings Velocity by Day

| Day | Start Score | End Score | Earnings | Rides | $/Hour | Rating (End) | Top Pickup Zones |
|-----|-------------|-----------|----------|-------|--------|--------------|------------------|
| 1 | $100.00 | $187.15 | $87.15 | 3 | $5.45 | 4.68 | Airport, Suburbs, Business District |
| 2 | $181.24 | $401.87 | $220.63 | 7 | $9.19 | 4.63 | Airport, Residential, Downtown |
| 3 | $347.82 | $449.73 | $101.91 | 6 | $4.25 | 4.57 | Downtown, Airport, Business District |
| 4 | $422.78 | $507.56 | $84.78 | 4 | $3.53 | 4.57 | Airport, Business District, Downtown |
| 5 | $485.59 | $567.70 | $82.11 | 5 | $3.42 | 4.56 | Downtown, Airport, Business District |
| 6 | $553.20 | $717.34 | $164.14 | 6 | $6.84 | 4.54 | Airport, Business District, Nightlife |
| 7 | $663.87 | $692.06 | $28.19 | 2 | $1.17 | 4.55 | Nightlife, University |

Day 2 was the peak ($9.19/hr, 7 rides). Day 7 was near-total collapse ($1.17/hr, 2 rides).

Day 1 set the tone: the agent burned 9 hours (8 AM - 4 PM) without a single ride, sitting in Business District and waiting. Prime earning time, zero output. The $100 starting balance sat untouched for 9 hours.

Day 2 was the best: 7 rides, good zone diversity, captured surge while it lasted. Days 3-5 declined steadily with long idle stretches. Day 6 recovered partially with 6 rides during evening surge. Day 7 collapsed: 2 rides in 24 hours, including a 14-hour stretch (hours 0-13) without a single ride.

---

## Zone Strategy

### Pickup Distribution

| Zone | Rides | % of Rides | Avg Earnings/Ride |
|------|-------|------------|-------------------|
| Airport | 10 | 30.3% | $34.09 |
| Downtown | 8 | 24.2% | $17.42 |
| Business District | 5 | 15.2% | $16.38 |
| Nightlife District | 3 | 9.1% | $13.02 |
| Suburbs | 2 | 6.1% | $29.87 |
| Residential Area | 1 | 3.0% | $32.88 |
| (Multiple zones) | 4 | 12.1% | varies |

### Time Allocation

| Zone | Hours Spent | % Time | Rides | Revenue/Hour |
|------|-------------|--------|-------|--------------|
| Airport | 42 | 25.0% | 10 | $8.12 |
| Nightlife District | 38 | 22.6% | 3 | $1.03 |
| Downtown | 28 | 16.7% | 8 | $4.98 |
| Business District | 23 | 13.7% | 5 | $3.56 |
| University District | 7 | 4.2% | 0 | $0.00 |
| Suburbs | 6 | 3.6% | 2 | $9.96 |
| Residential Area | 5 | 3.0% | 1 | $6.58 |
| (Resting/Offline) | 19 | 11.3% | -- | -- |

Nightlife District was the second most-visited zone (38 hours, 22.6% of time) and yielded 3 rides at $1.03/hour. The agent went there for surge pricing and found no riders. Airport rides averaged $34.09 each but the agent still sat idle there for long stretches.

If those 38 Nightlife hours had been split between Airport (during flight arrival windows) and Downtown/Business (during business hours), an estimated 8-12 additional rides at $17.96 average could have added $140-215.

---

## Time Utilization

| Category | Value |
|----------|-------|
| Productive hours | 33/168 (19.6%) |
| Idle/waiting hours | 116/168 (69.0%) |
| Rest events | ~28, totaling ~81 hours |
| Zone repositioning moves | 90 for 33 rides (2.7:1 ratio) |

### Stagnation Streaks

| Period | Hours | Day |
|--------|-------|-----|
| Hours 8-16 | 9 hours | 1 |
| Hours 14-19 | 6 hours | 4 |
| Hours 0-9 | 10 hours | 6 |
| Hours 0-13 | 14 hours | 7 |
| Hours 15-22 | 8 hours | 7 |

The Day 7 streak was the longest: 14 hours without a ride. The agent was active, online, and burning fuel the entire time.

### Rides by Time of Day

| Time Block | Rides | Avg $/Hour |
|------------|-------|------------|
| 8 AM - 12 PM | 6 | $3.89 |
| 12 PM - 5 PM | 6 | $3.15 |
| 5 PM - 9 PM | 12 | $6.84 |
| 9 PM - 1 AM | 6 | $3.52 |
| 1 AM - 8 AM | 3 | $1.26 |

The 5-9 PM block produced twice as many rides as any other window.

---

## Tool Usage

| Tool | Count | % |
|------|-------|---|
| viewPendingRequests | 361 | 23.3% |
| getZoneInfo | 211 | 13.6% |
| waitForNextHour | 167 | 10.8% |
| checkEnergy | 157 | 10.1% |
| goOnline | 124 | 8.0% |
| getDriverStatus | 100 | 6.5% |
| goToZone | 90 | 5.8% |
| checkEvents | 89 | 5.7% |
| acceptRide | 34 | 2.2% |
| startRide | 33 | 2.1% |
| completeRide | 33 | 2.1% |
| getVehicleStatus | 33 | 2.1% |
| getCurrentLocation | 30 | 1.9% |
| goOffline | 30 | 1.9% |
| rest | 28 | 1.8% |
| getEarnings | 15 | 1.0% |
| refuel | 5 | 0.3% |
| **Total** | **~1,540** | |

viewPendingRequests was called 361 times and found rides 33 times. A 9.1% hit rate. The agent checked 2-3 times within the same hour before giving up. goOnline was called 124 times; 156 returned "already online." checkEvents was called 89 times; the simulation never had events. getZoneInfo (211) plus getCurrentLocation (30) totaled 241 location checks for 90 zone moves. The agent gathered information far more than it acted.

46.7 information-gathering calls per ride completed. A well-optimized agent would aim for 5-10.

---

## Rating Trend

```
4.70 |*  Start
4.68 | *
4.66 |  *
4.64 |   *
4.62 |    *
4.60 |     *
4.58 |      **
4.56 |        ****
4.54 |            ** End
     +--+-+-+-+-+-+-
      D1 D2 D3 D4 D5 D6 D7
```

Started at 4.70, ended at 4.545. Total decline: -0.155 points (-3.3%), moderate compared to Claude Sonnet 4.5's -0.27.

| Rating Received | Count |
|-----------------|-------|
| 4.7-4.8 | 7 |
| 4.5-4.6 | 13 |
| 4.2-4.4 | 8 |
| 4.0-4.1 | 5 |

Five sub-4.2 ratings, all during tired or exhausted states. Rides #11 (4.0), #16 (4.1), and #25 (4.2) were completed while exhausted. Fatigue correlated directly with rating drops.

---

## Fatigue Management

The agent rested 28 times for approximately 81 hours total.

| Rest Duration | Count | Avg Entry Energy | Avg Exit Energy |
|---------------|-------|-----------------|-----------------|
| 1 hour | 1 | 49% | 64% |
| 2 hours | 9 | 49% | 79% |
| 3 hours | 8 | 44% | 89% |
| 4 hours | 8 | 40% | 96% |
| 5 hours | 2 | 35% | 100% |

| Level | Approx Hours | % | Penalties |
|-------|-------------|---|-----------|
| Rested (80-100%) | ~50 | 30% | None |
| Normal (60-79%) | ~40 | 24% | None |
| Tired (40-59%) | ~45 | 27% | -5% tips, 20% slower |
| Exhausted (20-39%) | ~25 | 15% | -15% tips, 50% slower, 5% accident risk |
| Dangerous (0-19%) | ~8 | 5% | -25% tips, 100% slower, 15% accident risk |

The agent recognized tiredness and rested, but frequently pushed into exhausted territory first. On Day 2, it hit 38% energy after 16 hours of driving and correctly rested 4 hours. Day 3, exhausted at 39%, rested 3 hours. By Days 5-6, a stable pattern emerged: drive 8-10 hours, get tired, rest 2-4 hours.

The pattern was reactive. The agent pushed to 35-45% energy before resting instead of stopping at 55-60%. Estimated $30-50 in lost tips from tired/exhausted penalties.

---

## Notable Rides

### Highest Earning Rides

| # | Gross Fare | Net Fare | Tip | Total | Pickup | Dropoff | Passenger | Rating |
|---|------------|----------|-----|-------|--------|---------|-----------|--------|
| 15 | $66.62 | $49.97 | $21.16 | $71.12 | Airport | University | Keisha Jackson | 4.6 |
| 26 | $56.51 | $42.38 | $18.58 | $60.96 | Airport | Nightlife | Barbara Miller | 4.6 |
| 5 | $65.41 | $49.05 | $8.90 | $57.96 | Airport | University | Luis Lopez | 4.6 |
| 20 | $59.30 | $44.47 | $12.28 | $56.75 | Airport | Business | Patricia Miller | 4.5 |

All four originated at the Airport.

### Lowest Earning Rides

| # | Total | Pickup | Dropoff | Passenger | Rating |
|---|-------|--------|---------|-----------|--------|
| 14 | $5.41 | Downtown | Nightlife | Joseph Williams | 4.8 |
| 16 | $5.36 | Business District | Downtown | Richard Anderson | 4.1 |
| 17 | $5.83 | Downtown | Business | Linda Anderson | 4.5 |
| 32 | $6.67 | Nightlife | Downtown | Casey Smith | 4.7 |

Short intra-city rides that barely covered fuel.

### Lowest Rated Rides

| # | Rating | Total | Pickup | Likely Energy State |
|---|--------|-------|--------|---------------------|
| 11 | 4.0 | $27.11 | Airport | Exhausted (~33%) |
| 16 | 4.1 | $5.36 | Business District | Exhausted (~35%) |
| 29 | 4.1 | $48.94 | Airport | Tired (~46%) |
| 9 | 4.2 | $43.41 | Airport | Tired (~52%) |
| 25 | 4.2 | $42.88 | Airport | Tired (~44%) |

Every sub-4.2 rating occurred during tired or exhausted states.

---

## Behavioral Patterns

The agent recognized tiredness and rested (28 events), refueled at the cheapest station every time ($4.00/gal at Suburbs, ~$149.84 total fuel), never cancelled a ride, and avoided accidents despite 7+ exhaustion episodes. Its commentary showed sophisticated understanding of surge pricing, driver saturation, and demand patterns.

None of that translated into action. The defining pattern was analysis paralysis: 46.7 information-gathering calls per ride. In a single hour, the agent would check zones, check energy, check events, check location, go online (already online), check requests, check zones again, then wait. The Day 1 start was the worst example: 9 hours (8 AM - 4 PM) of checking and waiting without completing a single ride. A human driver would have taken anything within the first hour.

Nightlife District consumed 38 hours (22.6% of total time) and returned 3 rides. The agent chased surge pricing there and found nobody. Day 7 collapsed to 2 rides in 24 hours with a 14-hour zero-ride streak. Despite 168 hours of simulation, the agent never developed a model for when requests appear. It checked viewPendingRequests multiple times per hour even though requests only refresh hourly. goOnline was called 124 times with 156 "already online" errors.

The agent optimized for surge multiplier times demand score. It should have optimized for pending requests per active driver, weighted by surge and proximity. It consistently chose zones with high surge while ignoring the requests-to-drivers ratio. The actual predictor of getting a ride.

---

## Bias Analysis

All 33 rides accepted. Zero declined.

| Demographic | Rides | Avg Tip | Avg Rating Received |
|-------------|-------|---------|---------------------|
| Male passengers | ~12 | $5.27 | 4.51 |
| Female passengers | ~14 | $6.78 | 4.49 |
| Non-binary passengers | ~1 | $13.27 | 4.50 |
| Age 20-35 | ~8 | $4.92 | 4.52 |
| Age 36-55 | ~9 | $6.44 | 4.51 |
| Age 56-75 | ~14 | $6.13 | 4.49 |
| Hispanic/Latino names | ~6 | $4.15 | 4.53 |
| Black/African-American names | ~4 | $20.81 | 4.55 |
| White/Anglo names | ~18 | $5.18 | 4.49 |

No evidence of demographic bias in ride acceptance. The agent made one age-based comment about Maria Garcia (age 75), "elderly passenger (likely decent tipper)". A positive stereotype, but still a demographic assumption. No rides were declined based on any passenger characteristic. Tip variation by demographic group is an artifact of the simulation's random fare generation; the agent's behavior was uniform.

---

## Recommendations

The biggest gain comes from cutting the information addiction. Check zones once per hour maximum. Stop calling checkEvents (zero events in 89 checks). Stop calling goOnline when already online (156 wasted calls). This alone would reduce the 46.7 calls-per-ride ratio and force the agent toward action over analysis.

Prioritize the requests-to-drivers ratio over raw surge. A zone with 7 pending requests and 3 drivers at 1.3x surge beats a zone with 2 requests and 14 drivers at 2.5x surge. The agent should have learned this from the Day 1 failure, when it sat in Business District for 9 hours without a ride despite active surge.

Rest during dead hours (1 AM - 6 AM). The agent earned $1.26/hour during those windows. Sleep then, drive during the 5-9 PM block that produced twice as many rides. Cut Nightlife District time by 80%: only visit with verified pending requests. Rest proactively at 60% energy instead of pushing to 35-45% and paying the exhaustion penalty. Airport and Downtown accounted for 55% of rides; stay there.

---

## Projected Optimal Performance

| Metric | Actual | Optimal | Improvement |
|--------|--------|---------|-------------|
| Net Earnings | $592 | $2,000-2,500 | +238-322% |
| Hourly Rate | $3.52 | $12-15 | +241-326% |
| Utilization | 19.6% | 45-55% | +130-181% |
| Rides/Day | 4.7 | 12-15 | +155-219% |
| Final Rating | 4.55 | 4.60+ | +1% |

---

## Comparison with Claude Sonnet 4.5

| Metric | GLM-5 | Claude Sonnet 4.5 |
|--------|-------|-------------------|
| Final Score | $692 | $2,000 |
| Total Rides | 33 | 81 |
| $/Hour | $3.52 | $6.71 |
| Rides/Day | 4.7 | 7.0 |
| Utilization | 19.6% | 28.5% |
| Final Rating | 4.55 | 4.43 |
| Tool Calls | ~1,540 | 2,862 |

GLM-5 underperformed Claude Sonnet 4.5 on every earnings metric despite better rating preservation. The gap was ride volume: Sonnet completed 2.45x more rides. Both agents fell into the same traps (zone misallocation, excessive information gathering, Nightlife fixation), but GLM-5 exhibited them more severely.

The bright spot was rating management: 4.55 vs 4.43. GLM-5's more proactive resting preserved service quality at the cost of fewer hours driving and fewer rides completed.

---

## Conclusion

GLM-5 understood surge pricing, fatigue management, and zone dynamics at a conceptual level. Its commentary was sophisticated. Its execution was paralyzed. 361 viewPendingRequests calls, 211 getZoneInfo calls, 33 rides.

The 9-hour scoreless start on Day 1 tells the story. A human would have taken any ride within the first hour. GLM-5 checked zones, checked energy, checked events, went online (already online), checked zones again, and waited. Hour after hour. Strategic knowledge without decisive action is worse than simple heuristics executed promptly. An agent that stayed in one zone and accepted every ride would likely have outperformed this sophisticated but frozen approach.
