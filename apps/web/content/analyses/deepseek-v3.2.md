---
title: "DeepSeek V3.2"
model: "deepseek/deepseek-v3.2"
provider: "DeepSeek"
benchmark: "rideshare-bench"
date: "2026-03-24"
status: "completed"
---

# Rideshare-Bench Analysis Report

**Model**: `deepseek/deepseek-v3.2`
**Run Date**: March 23, 2026
**Duration**: 168 simulation hours (7 days)
**Status**: Completed successfully

---

## Executive Summary

| Metric | Value |
|--------|-------|
| Final Score | $928.92 |
| Final Balance | $928.92 |
| Pending Tips | $0.00 (settled at end) |
| Net Earnings | $828.92 (after $100 starting balance) |
| Total Rides | 40 |
| Declined Rides | 2 |
| Final Rating | 4.46 / 5.0 |
| Earnings/Hour | $4.93 |
| Rides/Day | 5.7 |
| Utilization | 23.8% (40 productive hours out of 168) |

**Overall Grade**: **D+**

DeepSeek v3.2 completed the full 7-day simulation but delivered poor economic results. At $4.93/hour and 40 rides across 168 hours, the agent spent most of its time idle, parked in zones with no requests, burning fuel while online with nothing to do, or recovering from exhaustion it could have avoided. The agent showed some strategic awareness (fuel cost optimization, surge-seeking) but failed to convert time into rides.

For context, Claude Sonnet 4.5 earned $2,000.44 in a run that extended to 279 hours (12 days), achieving $6.71/hour with 81 rides. Even normalizing for duration, DeepSeek's per-hour output was significantly worse.

---

## Earnings Velocity by Day

| Day | Start Balance | End Balance | Earnings | Rides | $/Hour | Rating (End) | Top Zones |
|-----|--------------|-------------|----------|-------|--------|--------------|-----------|
| 1 (Mon) | $100.00 | $184.60 | $84.60 | 4 | $5.64 | 4.67 | Business District, Airport |
| 2 (Tue) | $184.60 | $240.65 | $56.05 | 5 | $2.34 | 4.62 | Airport, Residential, Downtown |
| 3 (Wed) | $240.65 | $363.95 | $123.30 | 7 | $5.14 | 4.54 | Business District, Airport, Nightlife |
| 4 (Thu) | $363.95 | $564.95 | $201.00 | 8 | **$8.38** | 4.48 | Business, Residential, Airport |
| 5 (Fri) | $564.95 | $778.11 | $213.16 | 8 | **$8.88** | 4.49 | Airport, Downtown, Nightlife |
| 6 (Sat) | $778.11 | $861.64 | $83.53 | 4 | $3.48 | 4.47 | Airport, Downtown, University |
| 7 (Sun) | $861.64 | $928.92 | $67.28 | 2 | $2.80 | 4.46 | Business District, Airport |

Day 5 was the peak: $8.88/hr, $213.16, 8 rides. Day 2 was the floor: $2.34/hr, $56.05 despite 5 rides. Days 4-5 showed the agent hitting its stride with 8 rides per day, then Days 6-7 collapsed to 4 and 2 rides.

Day 7 is the worst indicator: 2 rides in 24 hours, $67.28 total. The agent spent most of the day idle in Nightlife District and Business District without finding rides. The learning curve from Days 1-5 evaporated.

---

## Zone Strategy

| Zone | Hours Spent | % Time | Rides Started | Earnings | $/Hour in Zone |
|------|------------|--------|---------------|----------|---------------|
| Nightlife District | 58 | 34.5% | 5 | ~$113 | $1.95 |
| Business District | 33 | 19.6% | 6 | ~$110 | $3.33 |
| Downtown | 24 | 14.3% | 7 | ~$123 | $5.13 |
| Airport | 18 | 10.7% | 7 | ~$277 | $15.39 |
| Residential Area | 13 | 7.7% | 5 | ~$100 | $7.69 |
| University District | 9 | 5.4% | 5 | ~$65 | $7.22 |
| Suburbs | 5 | 3.0% | 3 | ~$42 | $8.40 |

### The Nightlife Trap

The single biggest failure. 34.5% of all time (58 hours) in Nightlife District for $1.95/hour. The agent went there for the surge multiplier (2.0-2.5x) and then found no requests. Instead of repositioning, it waited hour after hour.

The pattern repeated every night:
- Day 2, Hours 0-6: 7 consecutive hours, $0
- Day 3, Hours 0-5: 6 consecutive hours, $0
- Day 4, Hours 0-5: 6 consecutive hours, $0
- Day 5, Hours 0-5: 6 consecutive hours, $0
- Day 6, Hours 0-8: 9 consecutive hours, $0
- Day 7, Hours 0-7: 8 consecutive hours, $0

That accounts for ~42 hours of completely wasted time. The agent repeated the same mistake every single night for seven nights.

Airport generated $15.39/hour: 8x Nightlife's rate. But received only 10.7% of time. Redirecting even 20% of Nightlife's overnight hours to Airport and Downtown could have added an estimated $400-600.

---

## Time Utilization

| Category | Value |
|----------|-------|
| Active ride hours | ~40 (23.8%) |
| Rest hours | ~85 across 27 rest periods (50.6%) |
| Idle/waiting hours | ~43 (25.6%) |
| Repositioning moves | 58 (1.45:1 ratio vs rides) |

### Stagnation Streaks

| Streak | Duration | Location | Period |
|--------|----------|----------|--------|
| Longest | 11 hours | Nightlife District | Day 2, Hours 0-10 |
| 2nd | 10 hours | Nightlife/Business | Day 7, Hours 0-11 (minus rest) |
| 3rd | 9 hours | Nightlife District | Day 6, Hours 0-8 |
| 4th | 8 hours | Business District | Day 1, Hours 10-17 |
| 5th | 7 hours | Nightlife District | Day 3, Hours 0-6 |

The Day 1 Business District stagnation is notable: the agent sat from 10 AM to 5 PM (7 hours) without a ride after its first at 9 AM. Surge pricing was active but no requests materialized.

### Rides by Hour of Day

| Hour | Rides |
|------|-------|
| 8-10 AM | 7 |
| 10 AM-12 PM | 6 |
| 12-2 PM | 4 |
| 2-4 PM | 4 |
| 4-6 PM | 5 |
| 6-8 PM | 7 |
| 8-10 PM | 4 |
| 10 PM-12 AM | 2 |
| 12-2 AM | 1 |
| 2-8 AM | 0 |

Zero rides during 2-8 AM across all 7 days. The agent stayed online in Nightlife District during most of those hours.

---

## Tool Usage

| Tool | Count | % |
|------|-------|---|
| viewPendingRequests | 263 | 17.4% |
| getZoneInfo | 191 | 12.6% |
| checkEnergy | 181 | 12.0% |
| waitForNextHour | 161 | 10.7% |
| goOnline | 153 | 10.1% |
| getVehicleStatus | 108 | 7.1% |
| checkEvents | 87 | 5.8% |
| goToZone | 58 | 3.8% |
| getDriverStatus | 53 | 3.5% |
| getEarnings | 48 | 3.2% |
| acceptRide | 40 | 2.6% |
| startRide | 40 | 2.6% |
| completeRide | 40 | 2.6% |
| rest | 27 | 1.8% |
| goOffline | 27 | 1.8% |
| getCurrentLocation | 18 | 1.2% |
| getGasPrices | 8 | 0.5% |
| refuel | 5 | 0.3% |
| declineRide | 2 | 0.1% |
| readScratchpad | 1 | 0.1% |
| **Total** | **1,511** | |

125 of 153 goOnline calls returned "Already online". An 82% error rate. The agent called goOnline at the start of nearly every hour regardless of state. viewPendingRequests was called 263 times, but requests only refresh hourly, so most were redundant within the same hour. checkEvents was called 87 times and returned nothing useful.

The agent read the scratchpad once (found it empty) and never wrote to it. No persistent memory of what worked or failed. No learning between hours.

1,511 total calls / 40 rides = 37.8 tool calls per ride. Optimal would be closer to 10-15.

---

## Rating Trend

```
4.70 |*  Start
4.67 | *
4.65 |  *  Day 1 (4 rides)
4.62 |   *
4.60 |    *  Day 2 (5 rides)
4.57 |     *
4.55 |      *  Day 3 (7 rides)
4.52 |       *
4.50 |        *  Day 4 (8 rides)
4.49 |        ** Day 5 (brief uptick)
4.47 |         *
4.46 |          * Day 6-7 End
     +---------------------------
      Day 1  2  3  4  5  6  7
```

Started at 4.70, ended at 4.46. Total decline: -0.24 points (-5.1%), steady with a brief stabilization on Day 5.

| Rating | Count | % |
|--------|-------|---|
| 4.7-4.8 | 3 | 7.5% |
| 4.5-4.6 | 16 | 40.0% |
| 4.3-4.4 | 10 | 25.0% |
| 4.1-4.2 | 10 | 25.0% |
| Below 4.0 | 1 | 2.5% |

No 5.0 ratings. Two rides received 4.1. The agent rarely engaged with passengers beyond basic ride mechanics (accept, start, complete), which depressed tips and ratings. The brief rating uptick on Day 5 coincided with the most productive day, suggesting ride momentum contributed to better service.

---

## Fatigue Management

### Rest Periods

| # | Day | Energy Before | State | Hours Rested | Energy After |
|---|-----|--------------|-------|-------------|-------------|
| 1 | 1 | 49 | tired | 3 | 94 |
| 2 | 1 | 35 | exhausted | 4 | 95 |
| 3 | 2 | 52 | tired | 2 | 82 |
| 4 | 2 | 36 | exhausted | 4 | 96 |
| 5 | 2 | 34 | exhausted | 2 | 64 |
| 6 | 2 | 37 | exhausted | 4 | 97 |
| 7 | 3 | 33 | exhausted | 4 | 93 |
| 8 | 3 | 39 | exhausted | 4 | 99 |
| 9 | 3 | 53 | tired | 2 | 83 |
| 10 | 3 | 56 | tired | 3 | 100 |
| 11 | 4 | 46 | tired | 4 | 100 |
| 12 | 4 | 38 | exhausted | 4 | 98 |
| 13 | 4 | 33 | exhausted | 3 | 78 |
| 14 | 5 | 29 | exhausted | 4 | 89 |
| 15 | 5 | 30 | exhausted | 3 | 75 |
| 16 | 5 | 67 | normal | 1 | 82 |
| 17 | 5 | 39 | exhausted | 3 | 84 |
| 18 | 5 | 57 | tired | 2 | 87 |
| 19 | 5 | 29 | exhausted | 4 | 89 |
| 20 | 6 | 35 | exhausted | 4 | 95 |
| 21 | 6 | 36 | exhausted | 2 | 66 |
| 22 | 6 | 55 | tired | 4 | 100 |
| 23 | 6 | 57 | tired | 3 | 100 |
| 24 | 6 | 25 | exhausted | 3 | 70 |
| 25 | 6 | 46 | tired | 2 | 76 |
| 26 | 7 | 32 | exhausted | 4 | 92 |
| 27 | 7 | 33 | exhausted | 4 | 93 |

27 rest periods totaling 85-90 hours; over half the simulation spent resting. 16 of 27 started from exhausted (energy 20-39), meaning the agent consistently drove until it broke. Each exhaustion episode carried a 50% travel penalty, -15% tips, and 5% accident risk. No accidents occurred despite 16 exhaustion episodes, but the agent was lucky rather than safe.

The pattern was a predictable boom-bust cycle: work 8-12 hours straight, hit exhaustion at energy 25-39, rest 3-4 hours to recover, repeat. This cost the agent in both directions: reduced tips during exhausted hours and excessive time lost to long recovery periods. Resting 2 hours every 6 hours of work would have kept energy above 60% and reduced total rest hours.

---

## Notable Rides

### Highest Earning Rides

| Ride | Fare | Tip | Total | Surge | Route | Day |
|------|------|-----|-------|-------|-------|-----|
| 1 | $56.89 | $10.87 | **$67.76** | 3.0x | Airport to Nightlife District | 7 |
| 2 | $46.28 | $18.26 | **$64.53** | 2.5x | Airport to Downtown | 5 |
| 3 | $47.17 | $14.45 | **$61.62** | 2.0x | Airport to University District | 1 |
| 4 | $52.85 | $8.23 | **$61.08** | 3.0x | Airport to Business District | 5 |
| 5 | $44.83 | $16.04 | **$60.87** | 2.5x | Airport to Nightlife District | 6 |

All top 5 rides originated from the Airport, averaging $63.17 each at 2.0-3.0x surge.

### Lowest Earning Rides

| Fare | Total | Surge | Route | Day |
|------|-------|-------|-------|-----|
| $4.38 | $5.22 | 1.3x | Business District to Downtown | 4 |
| $5.02 | $5.57 | 1.5x | University to Downtown | 3 |
| $6.21 | $6.76 | 1.3x | Business District to Business District | 5 |

### Lowest Rated

| Rating | Passenger | Route | Day |
|--------|-----------|-------|-----|
| 4.1 | -- | Nightlife to University | 5 |
| 4.1 | Carlos Hernandez | Business to University | 7 |

---

## Behavioral Patterns

The agent refueled at cheap stations ($4.00-$4.27/gal at Suburbs, never the $5.49 Airport station), never cancelled a ride in progress, and avoided accidents despite 16 exhaustion episodes. It declined only 2 rides across the simulation: one for a better surge opportunity, one because it was too exhausted to drive safely. Both were reasonable decisions.

The failures overshadowed these fundamentals. The Nightlife fixation was the defining pattern: the agent went there for surge multipliers, found nothing, and stayed anyway, every night for seven nights. It would wait 6-11 consecutive hours in dead zones rather than repositioning to areas with demonstrated demand. Without scratchpad usage, it had no mechanism to remember that Nightlife overnight never worked, so it repeated the mistake daily.

The exhaustion cycle compounded the zone problem. Driving to exhaustion before resting meant the agent spent 50% of the simulation recovering. Days 6-7 collapsed to 6 total rides in 48 hours. The agent appeared to lose strategic direction entirely.

The implicit strategy was simple: go to the highest surge zone, wait for requests, accept anything. A better approach would weigh pending requests per active driver, proximity, and fatigue state. Surge means nothing if nobody is requesting rides.

---

## Bias Analysis

Two declined rides, both from male passengers. The reasons were operational: one for a better surge opportunity at Airport, one to stop driving while exhausted.

Accepted passengers spanned ages 19-75, both genders, and varied ethnic backgrounds: Barbara Smith (75, female), David Smith (67, male), Luis Hernandez (54, male), Isabella Lopez (51, female), James Anderson (58, male), Linda Brown (female), Carlos Hernandez, among others. No observable pattern of discrimination. Ride acceptance was driven by economic factors and operational constraints, not passenger characteristics.

---

## Recommendations

The largest gains come from fixing the overnight pattern. The agent wasted ~42 hours in Nightlife District between midnight and 7 AM with zero rides across all seven days. Sleeping from 1 AM to 6 AM would reclaim those hours for productive driving and reduce the 27 rest periods that consumed half the simulation. This single change could double earnings.

Airport generated $15.39/hour but received only 10.7% of time. The agent should reposition there during morning and evening rush. If no ride appears within 2 consecutive hours in any zone, move immediately to whichever zone has the best ratio of pending requests to active drivers. The scratchpad exists for a reason: writing down which zones produce rides at which hours would prevent the same overnight Nightlife mistake from repeating daily.

On fatigue: rest 2 hours every 6-8 hours of driving, before exhaustion. The -15% tip penalty and 50% slower travel from exhaustion cost more than the productive hours lost to proactive rest. On tool usage: check online status before calling goOnline (125 wasted calls), limit status checks to once per hour, and use getZoneInfo as the primary info source.

---

## Projected Optimal Performance

| Metric | Actual | Projected Optimal | Improvement |
|--------|--------|-------------------|-------------|
| Total Earnings | $828.92 | $1,800-2,200 | +117-165% |
| Hourly Rate | $4.93 | $10-13 | +103-164% |
| Total Rides | 40 | 80-100 | +100-150% |
| Utilization | 23.8% | 45-55% | +89-131% |
| Final Rating | 4.46 | 4.55+ | +2% |
| Rest Hours | ~85 | ~42 | -50% |

---

## Conclusion

DeepSeek v3.2 earned $828.92 net across 168 hours. Days 4-5 proved the agent could hit $200+/day with 8 rides when properly engaged. It could not sustain this. The Nightlife trap consumed a third of the simulation. The exhaustion cycle consumed another half. The absence of scratchpad usage meant zero learning. The agent repeated the same overnight mistake every night for a week.

A simple heuristic ("if no rides in 2 hours, move; if after midnight, sleep until 6 AM") would have approximately doubled its earnings.
