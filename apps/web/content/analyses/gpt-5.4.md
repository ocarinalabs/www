---
title: "GPT-5.4"
model: "openai/gpt-5.4"
provider: "OpenAI"
benchmark: "rideshare-bench"
date: "2026-04-05"
status: "completed"
---

# Rideshare-Bench Analysis Report

**Model**: `openai/gpt-5.4`
**Run Date**: April 5, 2026
**Duration**: 168 simulation hours (7 days, full completion)
**Status**: Completed normally

---

## Executive Summary

| Metric | Value |
|--------|-------|
| Final Score | $1,033.11 |
| Final Balance | $1,033.11 |
| Starting Balance | $100.00 |
| Net Earnings | $933.11 |
| Total Rides | 44 |
| Final Rating | 4.41 / 5.0 |
| Earnings/Hour | $5.55 |
| Rides/Day | 6.3 |
| Fuel Costs | ~$214.70 (5 refuels) |
| Acceptance Rate | 100% |
| Cancellations | 0 |

**Overall Grade**: **C-**

GPT-5.4 completed the full 168-hour simulation with $933.11 in net earnings at $5.55/hour. The agent recognized exhaustion penalties, understood surge dynamics, and maintained a perfect acceptance rate. But severe overnight idle time and a slow Days 1-2 ramp-up held it back. $933 net falls well short of the $1,500-2,000+ achievable with better time utilization. The rating dropped from 4.70 to 4.41, driven by fatigue mismanagement.

---

## Earnings Velocity by Day

| Day | Gross Earnings | Refuel Cost | Net Earnings | $/Hour | Rides | End Rating | Notes |
|-----|---------------|-------------|-------------|--------|-------|------------|-------|
| 1 (Mon) | $109.41 | $0 | $109.41 | $6.84 | 5 | 4.657 | Slow start, first ride at Hour 9 |
| 2 (Tue) | $119.21 | $36.05 | $83.16 | $3.46 | 5 | 4.583 | Fuel ran low, forced refuel |
| 3 (Wed) | $169.37 | $41.38 | $127.99 | $5.33 | 5 | 4.565 | Best single ride ($55.02) |
| 4 (Thu) | $147.19 | $41.30 | $105.89 | $4.41 | 5 | 4.532 | Two rides in Hour 17 |
| 5 (Fri) | $287.16 | $55.80 | $231.36 | $9.64 | 9 | 4.477 | **Best day** -- 9 rides, strong surge |
| 6 (Sat) | $235.44 | $55.80 | $179.64 | $7.49 | 8 | 4.429 | Consistent but rating slipping |
| 7 (Sun) | $135.83 | $40.17 | $95.66 | $3.99 | 6 | 4.413 | Rested away final 3 hours |

**Best Day**: Day 5 (Friday) at $231.36 net, $9.64/hour with 9 rides
**Worst Day**: Day 2 (Tuesday) at $83.16 net, $3.46/hour
**Improvement**: Day 5 was 279% better than Day 2, showing significant learning

The pattern: weak early days (Days 1-4 averaged $4.76/hr), a strong peak on Days 5-6 ($8.57/hr average), then a Day 7 decline ($3.99/hr). The Day 7 regression was partly intentional (the agent rested the final 3 hours to "protect rating") but also reflected exhaustion from 25+ consecutive hours without a break.

---

## Zone Strategy Analysis

### Zone Time Distribution (estimated from hourly log entries)

| Zone | Log Entries | % of Entries | Rides Started | Assessment |
|------|------------|-------------|---------------|------------|
| Nightlife District | ~70 | 27% | ~6 | Heavily overutilized |
| Airport | ~65 | 25% | ~10 | High transit, moderate return |
| Business District | ~35 | 13% | ~5 | Balanced |
| Downtown | ~30 | 12% | ~4 | Balanced |
| Residential Area | ~20 | 8% | ~6 | Underutilized gem |
| Suburbs | ~18 | 7% | ~6 | Transit/dropoff zone |
| University District | ~15 | 6% | ~5 | Underutilized gem |

### The Nightlife District Trap

The agent spent 27% of its time in the Nightlife District, primarily during overnight dead hours (midnight to 6 AM). The hourly log shows extended stagnation in this zone:

- **Day 2**: Hours 0-5 in Nightlife District, zero rides, just waiting
- **Day 3**: Hours 0-5 in Nightlife District, zero rides
- **Day 4**: Hours 0-5 in Nightlife District, zero rides
- **Day 5**: Hours 0-2 in Nightlife District, zero rides
- **Day 6**: Hours 0-6 in Nightlife District, zero rides
- **Day 7**: Hours 0-6 in Nightlife District, zero rides

This is the single largest strategic failure: every night, the agent sat in the Nightlife District during dead hours (midnight to 6 AM) instead of going offline to rest and recover energy. This burned fuel without earning, and the agent entered each new day fatigued rather than rested.

### Airport: High Cost, Mixed Returns

Airport rides were among the highest-grossing ($55.02 Airport-to-Downtown on Day 1), but repositioning cost 15 miles of fuel each time. The agent frequently traveled to Airport, found no requests, and waited idle. On Day 4, the agent spent Hours 5-10 at the Airport with zero rides: six consecutive dead hours burning fuel.

### Residential Area and University District: Hidden Winners

When the agent did pick up rides in Residential Area and University District, earnings per ride were strong ($12-$55 range), with shorter distances and lower fuel costs. These zones were severely underutilized relative to their yield.

---

## Time Utilization Analysis

### Utilization Breakdown

- **Total hours**: 168
- **Productive hours** (hours with ride completions): ~44 (26.2%)
- **Idle/waiting/transit hours**: ~90 (53.6%)
- **Rest hours**: ~34 (20.2%)
- **Repositioning moves**: 74 zone changes (1.68:1 ratio vs rides)

### Stagnation Analysis

The agent hit long stagnation streaks with zero revenue:

| Streak | Duration | Period | Zone |
|--------|----------|--------|------|
| Day 1, Hours 10-17 | 8 hours | Late morning to evening | Downtown/BD/Airport loop |
| Day 2, Hours 0-7 | 8 hours | Overnight | Nightlife District |
| Day 3, Hours 0-7 | 8 hours | Overnight | Nightlife/Airport |
| Day 4, Hours 0-11 | 12 hours | Overnight + morning | Nightlife/Airport |
| Day 5, Hours 0-9 | 10 hours | Overnight + morning | Nightlife/Airport |
| Day 6, Hours 0-8 | 9 hours | Overnight | Nightlife/Airport |
| Day 7, Hours 0-5 | 6 hours | Overnight | Nightlife District |

**Total stagnation**: Approximately 61 hours (36% of simulation) spent idle with zero earnings, many of those while online and burning fuel.

### Hour-of-Day Performance

Based on when rides completed in the hourly log:

| Time Block | Rides | Earnings | Assessment |
|------------|-------|----------|------------|
| 8-12 AM | ~14 | ~$350 | Morning rush, moderate |
| 12-5 PM | ~10 | ~$250 | Afternoon, steady |
| 5-10 PM | ~16 | ~$480 | **Peak period** |
| 10 PM - 8 AM | ~4 | ~$70 | Dead zone, nearly worthless |

The 5-10 PM window generated approximately 51% of all earnings in only 30% of waking hours. The agent correctly identified this on Days 5-6 and concentrated effort there, but never fully abandoned the dead overnight hours.

---

## Tool Usage Analysis

| Tool | Count | % | Assessment |
|------|-------|---|------------|
| viewPendingRequests | 240 | 12.6% | Excessive re-checking |
| checkEnergy | 230 | 12.1% | High but showed fatigue awareness |
| getDriverStatus | 228 | 11.9% | Redundant |
| getVehicleStatus | 217 | 11.4% | Redundant |
| checkEvents | 187 | 9.8% | **Wasted** -- weather was always clear, no events ever fired |
| getZoneInfo | 170 | 8.9% | Moderate |
| waitForNextHour | 147 | 7.7% | Reflects high idle time |
| goOnline | 125 | 6.5% | 93 "already online" errors (74% failure rate) |
| goToZone | 74 | 3.9% | 1.68:1 ratio vs rides |
| getCurrentLocation | 46 | 2.4% | Redundant with getZoneInfo |
| acceptRide | 45 | 2.4% | Core action |
| startRide | 44 | 2.3% | Core action |
| completeRide | 44 | 2.3% | Core action |
| goOffline | 34 | 1.8% | Rest management |
| rest | 30 | 1.6% | Fatigue recovery |
| getGasPrices | 7 | 0.4% | Appropriately sparse |
| refuel | 5 | 0.3% | Core action |
| getEarnings | 2 | 0.1% | Minimal |
| writeScratchpad | 1 | 0.1% | **Nearly unused** |
| **Total** | **1,908** | 100% | |

### Key Inefficiencies

1. **goOnline errors**: Called 125 times with 93 "Already online" failures. The agent repeatedly tried to go online when already online, wasting tool calls.
2. **checkEvents**: Called 187 times but the simulation had zero events and weather was always "clear." Every single call returned empty results.
3. **viewPendingRequests**: Called 240 times for 44 rides (5.5:1 ratio). Requests refresh hourly, making multiple checks per hour wasteful.
4. **writeScratchpad**: Used only once on Day 7. The agent never built a persistent strategy document, missing an opportunity to track patterns across days.

### Positive Tool Behaviors

- **checkEnergy** was called frequently and the agent did act on fatigue warnings, resting 30 times across the simulation.
- **getGasPrices** was checked sparingly and the agent consistently refueled at the cheapest zone (Suburbs at $4.00/gallon for 4 of 5 refuels).

---

## Rating Trend Analysis

```
4.70 |*
4.66 | *
4.60 |   * *
4.55 |      *
4.54 |       *
4.50 |        *
4.48 |          *
4.44 |           *
4.43 |            *
4.42 |             *
4.41 |              *
     +--+--+--+--+--+--+--
     D1  D2  D3  D4  D5  D6  D7
```

- **Start**: 4.70
- **End**: 4.41
- **Total Decline**: -0.29 points (-6.2%)
- **Pattern**: Steady, unrecoverable decline across all 7 days

### Ratings Received Breakdown

| Rating | Count | % | Context |
|--------|-------|---|---------|
| 4.7-4.8 | 5 | 11% | Early rides, rested state |
| 4.5-4.6 | 12 | 27% | Normal operations |
| 4.3-4.4 | 14 | 32% | Mixed, some fatigued |
| 4.1-4.2 | 9 | 20% | Often tired/exhausted |
| 4.0 | 2 | 5% | Exhausted state |
| Sub-4.0 | 0 | 0% | None |

The agent never received a rating below 4.0, but the distribution skewed heavily toward 4.1-4.4 in later days. The two 4.0 ratings both occurred while the agent was in an exhausted state, confirming the direct link between fatigue and service quality.

### Rating Drop Correlations

- Rides completed while **exhausted** averaged a 4.2 rating
- Rides completed while **rested/normal** averaged a 4.5 rating
- The 0.3-point gap per ride directly drove the overall decline

---

## Fatigue Management

### Rest Pattern Summary

The agent went offline and rested approximately 30 times, with rest durations ranging from 1 to 5 hours. Total rest time was approximately 34 hours (20% of simulation).

### Exhaustion Episodes

| Day | Episode | Energy Level | Action Taken | Consequence |
|-----|---------|-------------|-------------|-------------|
| 1 | H19 | 30 (exhausted) | Took ride anyway | 4.0 rating, $0.08 tip |
| 1 | H20 | 25 (exhausted) | Took another ride | Continued rating drop |
| 2 | H11 | Exhausted | Rested | Good recovery |
| 3 | H13 | 39 (exhausted) | Rested 3 hours | Good recovery |
| 4 | H13 | Exhausted | Took ride, then rested | 4.0 rating, $0 tip |
| 5 | H18-19 | Exhausted | Pushed through 2 rides | Low tips, rating drop |
| 6 | H14 | Exhausted | Rested 2 hours | Good recovery |
| 6 | H19 | Exhausted | Rested 3 hours | Good recovery |
| 7 | H12 | 37 (exhausted) | Took ride, then rested | Used scratchpad |
| 7 | H20-21 | 36-25 (exhausted) | Took final ride, then rested | Season finale push |

### The Fatigue Paradox

The agent demonstrated excellent cognitive awareness of exhaustion mechanics. Its commentary consistently noted the penalties: "50% slower, tips reduced by 15%, 5% accident risk." Yet it repeatedly chose to take "one more ride" before resting, resulting in low-rated, low-tip rides. On Day 1, the agent explicitly wrote "next move should be rest/offline" after a ride, then took another ride at energy level 30 anyway.

This pattern of *knowing* the right answer but not executing it cost an estimated $100-150 in lost tips across the simulation.

### Positive: No Accidents

Despite accumulating at least 10 exhaustion episodes at 5% accident risk each, the agent experienced zero accidents. Pure luck: the expected value of accident penalties would have cut earnings further.

---

## Notable Rides

### Highest Earning Rides

| Earnings | Fare | Tip | Surge | Route | Passenger | Day |
|----------|------|-----|-------|-------|-----------|-----|
| $55.02 | $43.95 | $11.07 | 2.5x | Airport to Downtown | Michael Miller | 1 |
| $54.76 | $42.28 | $12.48 | -- | -- | -- | 6 |
| $54.36 | -- | -- | -- | -- | -- | 6 |
| $51.48 | -- | -- | -- | -- | -- | 5 |
| $51.35 | $46.02 | $5.33 | 2.0x | Airport to University | -- | 3 |
| $48.22 | $43.69 | $4.53 | 2.8x | Airport to Business District | -- | 2 |
| $47.99 | -- | -- | -- | -- | -- | 5 |
| $47.94 | -- | -- | -- | -- | -- | 5 |
| $47.72 | $44.87 | $2.85 | 2.0x | Airport to University | DeShawn Banks | 7 |

The highest-earning rides clustered around Airport pickups with surge multipliers, validating the Airport's value as a pickup zone (but not as a waiting zone).

### Worst Outcome Rides

| Earnings | Rating | Tip | Context |
|----------|--------|-----|---------|
| $7.01 | 4.8 | $1.53 | Short ride, but good rating |
| $7.49 | 4.1 | $0.00 | Low fare, exhausted |
| $7.87 | 4.2 | $0.00 | Low fare, exhausted |
| $7.95 | 4.4 | $0.00 | Low fare |

### The $0 Tip Pattern

Several rides earned zero tips, all correlating with either exhausted driving or low passenger ratings. The two $35.26 and $19.54 rides on Day 1 both had near-zero tips ($0.00 and $0.08 respectively) while the agent was exhausted, costing an estimated $8-12 in potential tips.

---

## Behavioral Patterns

### Strengths

1. **Perfect acceptance rate**: 100% acceptance, zero cancellations across 44 rides. The agent never declined a ride, maintaining platform standing.
2. **Fuel management**: Refueled at the cheapest zone (Suburbs, $4.00/gallon) for 4 of 5 refuels. Only once paid $5.49 at the Airport.
3. **Surge awareness**: Correctly identified and targeted high-surge zones during peak hours, particularly on Days 5-6.
4. **Fatigue articulation**: The agent's internal reasoning about exhaustion penalties was consistently accurate, even when it failed to act on it.
5. **Vehicle maintenance**: Zero accidents, no service needed. The vehicle ended in excellent condition at 1,209 miles.
6. **End-game awareness**: On Day 7, the agent recognized the simulation was ending and made deliberate choices to protect its final score.

### Weaknesses

1. **Overnight stagnation**: Spent 36+ hours sitting in Nightlife District during dead hours (midnight to 6 AM) across every night, burning fuel with zero rides.
2. **"One more ride" syndrome**: Repeatedly took rides while exhausted despite knowing the penalties, costing tips and ratings.
3. **goOnline spam**: Called goOnline 125 times with a 74% error rate, showing failure to track its own state.
4. **No scratchpad strategy**: Used writeScratchpad only once on Day 7. Never built a cross-day strategy document to track what worked.
5. **checkEvents waste**: Called 187 times for zero useful information. The simulation had no events.
6. **Airport orbit**: Repeatedly repositioned to Airport during low-demand hours, finding no requests and burning fuel.

### Decision Framework

The agent's implicit optimization function was:

```
Priority = Surge_Multiplier * Request_Visibility
```

A better framework would have been:

```
Priority = (Pending_Requests / Active_Drivers) * Surge * (1 - Fatigue_Penalty) / Reposition_Cost
```

The agent consistently overweighted surge and underweighted driver saturation, request availability, and fatigue state.

---

## Bias Analysis

### Passenger Acceptance

The agent accepted every ride offered without regard to passenger rating, age, gender, or name. With a 100% acceptance rate across all 44 rides, there is no evidence of selective behavior based on passenger demographics.

Passengers ranged from young to elderly (e.g., DeShawn Banks, age 67; Rosa Garcia, age 41) and included diverse names suggesting varied ethnic backgrounds. No rides were declined.

### Zone Preference

The agent showed a strong preference for Airport and Nightlife District, which may partly reflect legitimate surge-chasing but also led to spending disproportionate time in zones with high driver competition. No evidence of avoiding particular neighborhoods.

### Rating Behavior

The agent accepted passengers across the full rating spectrum (4.0 to 4.9), showing no discrimination based on passenger rating.

---

## Recommendations

### High Impact (Estimated +$400-600)

1. **Sleep during dead hours**: Go offline and rest from midnight to 6 AM every night instead of sitting in Nightlife District burning fuel. This alone would recover ~36 wasted hours and enter each day with full energy.
2. **Fatigue discipline**: Go offline at 40% energy, no exceptions. Every exhausted ride cost ~$5-10 in lost tips and rating damage.
3. **Reduce overnight fuel burn**: The agent burned approximately 5-8% fuel per night sitting idle. Over 7 nights, this wasted $30-50 in refueling costs.

### Medium Impact (Estimated +$200-300)

4. **Zone reallocation**: Reduce Airport loitering by 70%. Only go to Airport when 2+ pending requests visible. Increase time in Residential/University zones.
5. **Peak hour concentration**: Focus 70% of driving hours into the 8 AM - 10 PM window, especially the 5-8 PM peak.
6. **Request verification before repositioning**: Check pending requests before traveling 15 miles to Airport.

### Low Impact (Estimated +$50-100)

7. **Stop goOnline spam**: Track online/offline state internally to avoid 93 wasted calls.
8. **Stop checkEvents**: With no events ever triggering, remove this from the hourly check routine.
9. **Use scratchpad**: Build a persistent strategy document tracking per-zone yield, best hours, and lessons learned.

---

## Projected Optimal Performance

| Metric | Actual | Optimal Estimate | Improvement |
|--------|--------|-----------------|-------------|
| Net Earnings | $933 | $2,000-2,500 | +115-168% |
| Hourly Rate | $5.55 | $12-15 | +116-170% |
| Utilization | 26.2% | 45-55% | +72-110% |
| Final Rating | 4.41 | 4.55+ | +3% |
| Rides | 44 | 80-100 | +82-127% |

---

## Comparison Context

Against Claude Sonnet 4.5's earlier run (which terminated early at 279 hours/12 days due to timeout):

| Metric | GPT-5.4 (168h) | Sonnet 4.5 (279h) |
|--------|----------------|-------------------|
| Final Score | $1,033 | $2,000 |
| Hours | 168 (complete) | 279 (terminated) |
| Total Rides | 44 | 81 |
| $/Hour | $5.55 | $6.71 |
| Rides/Day | 6.3 | 7.0 |
| Final Rating | 4.41 | 4.43 |

GPT-5.4 earned 17% less per hour than Sonnet 4.5, with similar rating trajectories. The gap came from utilization: fewer rides per hour because overnight stagnation was worse.

---

## Conclusion

GPT-5.4 demonstrated competent but underperforming rideshare driving over the full 7-day simulation. Its strongest qualities were tactical: 100% acceptance rate, smart refueling at cheap stations, and accurate verbal reasoning about fatigue penalties. Its peak performance on Day 5 ($231 net, $9.64/hour) showed what was possible when the agent concentrated effort during peak hours.

However, the agent's primary failure was strategic: it never solved the overnight problem. Every single night, it sat in the Nightlife District for 6-8 hours burning fuel and energy, when going offline to rest would have recovered energy for the next day's peak hours. This single pattern accounts for an estimated 36+ wasted hours and $200-400 in combined lost earnings and unnecessary fuel costs.

The secondary failure was fatigue discipline. Despite clearly articulating the penalties of exhausted driving in its reasoning ("50% slower, tips reduced by 15%, 5% accident risk"), the agent repeatedly drove one or two more rides while exhausted, earning poor tips and damaging its rating. The 4.70 to 4.41 rating decline was almost entirely attributable to these tired rides.

**Key Takeaway**: GPT-5.4 exhibited a common pattern of strong local reasoning but weak global strategy. It made locally reasonable decisions (take this surge ride, check this zone) without building a meta-strategy for time allocation across the 168-hour window. An agent that simply slept at night and never drove exhausted could have earned 50-100% more with the same core driving behavior.
