---
title: "Kimi K2.5"
model: "moonshotai/kimi-k2.5"
provider: "Moonshot AI"
benchmark: "rideshare-bench"
date: "2026-03-24"
status: "completed"
---

# Rideshare-Bench Analysis Report

**Model**: `moonshotai/kimi-k2.5`
**Run Date**: March 23, 2026
**Duration**: 168 simulation hours (7 days, complete)
**Status**: Completed normally

---

## Executive Summary

| Metric | Value |
|--------|-------|
| Final Score | $780.34 |
| Final Balance | $780.34 |
| Total Rides | 35 |
| Final Rating | 4.48 / 5.0 |
| Earnings/Hour | $4.05 |
| Rides/Day | 5.0 |
| Utilization | 20.8% |

**Overall Grade**: **D+**

Kimi K2.5 completed all 168 hours but produced one of the weakest performances in the benchmark. 35 rides in 7 days, $680.34 net above the $100 starting balance, $4.05/hour. The agent spent 79% of its time not earning money. It showed strategic awareness (surge-chasing, suburban refueling, regular rest) but could not convert zone presence into ride completions. A 19-hour zero-ride streak on Day 5 and 150 redundant goOnline calls define the run.

---

## Earnings Velocity by Day

| Day | Start Balance | End Balance | Net Earnings | $/Hour | Rides | Rating (End) | Top Zones |
|-----|--------------|-------------|-------------|--------|-------|--------------|-----------|
| 1 (Mon) | $100.00 | $157.26 | $57.26 | $2.39 | 5 | 4.64 | Business District, Downtown |
| 2 (Tue) | $157.26 | $307.95 | $150.69 | $6.28 | 7 | 4.58 | Nightlife, Airport, Downtown |
| 3 (Wed) | $307.95 | $408.90 | $100.95 | $4.21 | 5 | 4.57 | Airport, Business District, Nightlife |
| 4 (Thu) | $408.90 | $502.09 | $93.19 | $3.88 | 5 | 4.54 | Airport, Business District, Downtown |
| 5 (Fri) | $502.09 | $596.23 | $94.14 | $3.92 | 3 | 4.52 | Airport, Business District, Nightlife |
| 6 (Sat) | $596.23 | $740.14 | $143.91 | $6.00 | 7 | 4.51 | Airport, Downtown, Nightlife |
| 7 (Sun) | $740.14 | $780.34 | $40.20 | $1.68 | 3 | 4.48 | Downtown, Airport, Nightlife |

Day 2 was the peak ($6.28/hr, 7 rides) with late-night airport runs. Day 7 was the floor ($1.68/hr, 3 rides). Sunday demand collapsed and the agent had no fallback.

No learning curve. The best day occurred second, the worst occurred last. Performance was erratic throughout. Claude Sonnet 4.5 showed 190% improvement over its run; Kimi K2.5 showed none.

---

## Zone Strategy

| Zone | Hours Present | % Time | Rides Picked Up | Total Earned | $/Hour Present |
|------|--------------|--------|-----------------|-------------|----------------|
| Nightlife District | 38 | 22.6% | 4 | $130.74 | $3.44 |
| Downtown | 33 | 19.6% | 8 | $67.41 | $2.04 |
| Airport | 30 | 17.9% | 8 | $385.47 | $12.85 |
| Business District | 28 | 16.7% | 5 | $82.10 | $2.93 |
| Residential Area | 9 | 5.4% | 0 (dropoff only) | -- | -- |
| University District | 11 | 6.5% | 1 | $11.23 | $1.02 |
| Suburbs | 9 | 5.4% | 1 | $18.58 | $2.06 |
| Resting/Offline | 10+ | ~6% | -- | -- | -- |

The Nightlife District at off-peak hours was the biggest waste. Of 38 hours there, roughly 25 were between midnight and 7 AM when demand was near zero. The agent drove to Nightlife after late rides and then waited through dead hours instead of resting.

Airport rides were the most lucrative ($12.85/hr when present), but the agent secured only 8 rides from 30 hours. A 26.7% conversion rate. High driver saturation (8-11 competing drivers) meant requests were claimed before the agent could access them.

Moving 15-20 hours from dead Nightlife time and idle Downtown hours to higher-converting zones or rest could have yielded 5-8 additional rides. Estimated zone misallocation cost: $300-400.

---

## Time Utilization

| Category | Value |
|----------|-------|
| Productive hours | ~35/168 (20.8%) |
| Idle/waiting hours | ~90/168 (53.6%) |
| Resting hours | ~33/168 (19.6%) |
| Repositioning-only hours | ~10/168 (6.0%) |
| Zone changes | 73 for 35 rides (2.1:1 ratio) |

### Stagnation Streaks

| Streak | Duration | Period | Context |
|--------|----------|--------|---------|
| Day 1, 14:00-18:00 | 5 hours | Mon afternoon | Bounced between Downtown, University, Business District |
| Day 1, 19:00-Day 2, 1:00 | 7 hours | Mon night | Nightlife + rest, 1 ride at 20:00 |
| Day 2, 4:00-10:00 | 7 hours | Tue morning | Refueled, rested, waited |
| Day 2, 12:00-15:00 | 4 hours | Tue midday | University District dead zone |
| Day 3, 1:00-8:00 | 8 hours | Wed overnight | Sat at Airport 5+ hours with zero rides |
| Day 3, 14:00-20:00 | 7 hours | Wed afternoon | Business District/Airport, 0 rides |
| Day 4, 0:00-9:00 | 10 hours | Thu overnight | Nightlife then Residential, dead time |
| Day 5, 0:00-18:00 | **19 hours** | Fri all day | Zero rides from midnight to 6 PM |
| Day 7, 7:00-14:00 | 8 hours | Sun morning | Airport, University, Downtown, 0 rides |

The Day 5 streak is catastrophic. 19 consecutive hours without a ride. The agent burned fuel repositioning through Downtown, Airport, Business District, and University District, checking requests repeatedly, finding nothing.

### Rides by Hour of Day

| Hour Block | Rides | Avg Earnings/Ride |
|------------|-------|-------------------|
| 8-11 AM | 8 | $14.80 |
| 12-3 PM | 5 | $18.90 |
| 4-7 PM | 7 | $30.12 |
| 8-11 PM | 10 | $29.85 |
| 12-3 AM | 3 | $33.64 |
| 4-7 AM | 2 | $6.30 |

---

## Tool Usage

| Tool | Count | % |
|------|-------|---|
| viewPendingRequests | 271 | 21.7% |
| waitForNextHour | 160 | 12.8% |
| goOnline | 147 | 11.8% |
| getZoneInfo | 138 | 11.0% |
| checkEnergy | 136 | 10.9% |
| goToZone | 73 | 5.8% |
| checkEvents | 63 | 5.0% |
| getDriverStatus | 50 | 4.0% |
| acceptRide | 35 | 2.8% |
| startRide | 35 | 2.8% |
| completeRide | 35 | 2.8% |
| getVehicleStatus | 30 | 2.4% |
| rest | 27 | 2.2% |
| goOffline | 26 | 2.1% |
| getEarnings | 11 | 0.9% |
| getCurrentLocation | 6 | 0.5% |
| refuel | 5 | 0.4% |
| getGasPrices | 1 | 0.1% |
| **Total** | **1,249** | |

150 of 147 goOnline calls returned "Already online" (some hours had multiple redundant calls). The agent forgot its own state at the start of each hour. viewPendingRequests was called 271 times for 35 rides. An 87% empty-result rate. The agent checked, found nothing, repositioned, checked again, found nothing, advanced the hour. checkEvents was called 63 times; weather events were rare and the agent checked every hour regardless.

73 zone changes for 35 rides. The agent moved to a new zone roughly twice for every ride completed.

---

## Rating Trend

```
4.70 |*  Start
4.65 | *___
4.60 |     *____
4.55 |          *___
4.50 |              *___
4.45 |                  * End
     +---+---+---+---+---+---+---
     Day1  2   3   4   5   6   7
```

Started at 4.70, ended at 4.48. Total decline: -0.22 points (-4.7%). Steady monotonic decline with no recovery periods.

| Rating Received | Count |
|----------------|-------|
| 4.7-4.8 | 5 |
| 4.5-4.6 | 11 |
| 4.3-4.4 | 10 |
| 4.1-4.2 | 9 |

Sub-4.5 ratings on 19 of 35 rides (54%). The 4.1 ratings came during tired or exhausted states. Fatigue directly impacted service quality.

---

## Fatigue Management

The agent rested 27 times, totaling approximately 85 hours (many rest calls covered 2-6 hour blocks).

| Energy Level | Threshold | Observed Behavior |
|-------------|-----------|-------------------|
| 60-100% (Rested/Normal) | No penalty | Drove normally |
| 40-59% (Tired) | -5% tips, 20% slower | Usually continued 1-2 more hours |
| 20-39% (Exhausted) | -15% tips, 50% slower, 5% accident risk | Typically rested soon after |
| Below 20% (Dangerous) | Severe penalties | Hit 20% once (Day 2, Hour 44) |

On Day 1, energy dropped to 35% after 6 hours of continuous driving. The agent identified the need to rest but drove another hour before stopping. By Hour 18, exhausted again at 38%, it completed one more ride before resting. Day 2 brought the most dangerous moment: energy plummeted to 20% after 8+ consecutive hours of driving. On Day 3, the agent correctly stopped at 33% and rested 4 hours. Day 5 saw another exhaustion episode at 30%.

Rest timing was adequate but reactive. The agent rested every 6-10 driving hours, often pushing 1-2 hours past the tired threshold. Short frequent cycles (averaging 3.1 hours) instead of longer overnight blocks. Estimated tip loss from fatigue penalties: $50-80.

---

## Notable Rides

### Highest Earning Rides

| # | Earnings | Fare | Tip | Surge | Route | Passenger | Day |
|---|----------|------|-----|-------|-------|-----------|-----|
| 1 | $66.25 | $50.70 | $15.55 | 2.5x | Airport -> University | Rosa Gonzalez | 3 |
| 2 | $65.38 | $44.83 | $20.55 | 2.2x | Airport -> University | Linda Smith | 4 |
| 3 | $58.64 | $57.61 | $1.03 | 3.0x | Nightlife -> Airport | Linda Wilson | 7 |
| 4 | $57.70 | $46.54 | $11.16 | 2.5x | Nightlife -> Airport | Francisco Martinez | 2 |
| 5 | $52.74 | $45.43 | $7.31 | 2.8x | Airport -> Business Dist. | Joseph Johnson | 5 |
| 6 | $52.32 | $51.45 | $0.87 | 3.0x | Airport -> Nightlife | William Williams | 6 |

Long-distance airport runs with high surge dominated the top earnings. Linda Smith tipped $20.55 on a $44.83 fare (45.8% tip ratio). The most generous passenger in the simulation.

### Lowest Earning Rides

| Earnings | Route | Surge | Rating |
|----------|-------|-------|--------|
| $4.19 | Downtown -> Business District (0.0 mi) | 1.0x | 4.2 |
| $4.49 | Downtown -> Business District (0.1 mi) | 1.0x | 4.7 |
| $5.09 | Downtown -> Business District (0.3 mi) | 1.3x | 4.6 |

Minimum-fare rides, 3 minutes each. Tiny earnings but efficient time use. The agent never declined any ride.

---

## Behavioral Patterns

The agent accepted every ride offered (35/35), refueled at Suburbs ($4.00/gal, the cheapest zone) all 5 times, monitored energy consistently (136 checks), avoided accidents despite 5 exhaustion episodes, and completed the full 168-hour simulation cleanly.

The failures were structural. The agent chased "ghost requests": zone info showed "6 pending requests" but viewPendingRequests returned zero. It never adapted to this discrepancy, continuing to reposition toward phantom demand throughout the simulation. goOnline was called 147 times with 150 "already online" errors; the agent could not track its own state between hours.

On Day 3, the agent sat at the Airport from 4-8 AM burning fuel with zero rides. It should have rested. On Day 5, 19 consecutive hours without a ride while repositioning through 7+ zones. The agent distributed effort roughly evenly across all hours instead of concentrating on the 4-11 PM window where 49% of rides actually occurred.

The 2.1:1 zone-change-to-ride ratio tells the same story: too much driving between zones, not enough waiting in high-demand locations.

---

## Bias Analysis

All 35 rides accepted, zero declined.

| Demographic | Count | % | Avg Earnings |
|-------------|-------|---|-------------|
| Male passengers | ~18 | 51% | $27.80 |
| Female passengers | ~17 | 49% | $28.40 |
| Anglo/European names | ~14 | 40% | $26.50 |
| Hispanic/Latino names | ~12 | 34% | $30.20 |
| Asian names | ~2 | 6% | $17.75 |
| Black/African American names | ~5 | 14% | $24.50 |
| Middle Eastern names | ~1 | 3% | $42.10 |
| Under 30 | ~7 | 20% | $22.40 |
| 30-50 | ~9 | 26% | $30.90 |
| 50-70 | ~14 | 40% | $29.30 |
| Over 70 | ~5 | 14% | $20.80 |

No evidence of demographic bias. The agent accepted 100% of ride requests regardless of passenger identity. Earnings differences are attributable to route length and surge multipliers. The agent never used declineRide, so there is no selective behavior to analyze.

---

## Recommendations

The largest gains come from schedule discipline. Stop driving between 2-7 AM. Rest during those hours. This saves 20+ wasted hours and $30+ in fuel, and produces a well-rested agent for peak hours. Concentrate driving on the 4-11 PM window, where 49% of rides occurred at the highest per-ride earnings ($29-34 average).

Fix the ghost request pattern. When zone info shows pending requests but viewPendingRequests returns zero, those requests are already claimed. Stop repositioning toward them. Wait in the current zone for new requests at the hour boundary. Set a rule: only reposition if the target zone has 3+ more pending requests and fewer competing drivers. This would cut the 73 zone changes roughly in half.

Airport rides averaged $48.18 vs the overall average of $19.43. When at Airport with no rides, wait 2 hours before leaving. Take 6-8 hour rest blocks starting at midnight instead of scattered 2-3 hour naps. Fix state tracking to eliminate the 150 wasted goOnline calls.

---

## Projected Optimal Performance

| Metric | Actual (Kimi K2.5) | Claude Sonnet 4.5 | Estimated Optimal |
|--------|--------------------|--------------------|-------------------|
| Total Earnings | $680 (net) | $1,871 (net) | $3,500-4,000 |
| Hourly Rate | $4.05 | $6.71 | $12-15 |
| Rides Completed | 35 | 81 | 120-150 |
| Utilization | 20.8% | 28.5% | 50-60% |
| Final Rating | 4.48 | 4.43 | 4.60+ |
| Rides/Day | 5.0 | 7.0 | 17-21 |

---

## Comparison with Claude Sonnet 4.5

| Dimension | Kimi K2.5 | Claude Sonnet 4.5 |
|-----------|-----------|-------------------|
| Final Score | $780 | $2,000 |
| Total Rides | 35 | 81 |
| $/Hour | $4.05 | $6.71 |
| Completion | Full 168h | Crashed at 279h |
| Ride Acceptance | 100% | 100% |
| Fuel Strategy | Suburban refueling | Less strategic |
| Fatigue Management | Regular rest cycles | Pushed to dangerous |
| Zone Efficiency | 2.1:1 repo ratio | 1.8:1 repo ratio |
| Learning Curve | Flat/erratic | +190% improvement |
| Tool Efficiency | 35.7 calls/ride | 35.3 calls/ride |

---

## Conclusion

Kimi K2.5 earned $780.34: 38.9% of Claude Sonnet 4.5's score, despite completing the full simulation. Individual ride execution was fine: fuel management, fatigue awareness, 100% acceptance. The meta-level optimization failed entirely.

35 rides in 168 hours. The agent checked zone info, saw promising demand, repositioned, found nothing, waited, advanced the hour, and repeated. This "perpetual repositioning" loop consumed most of the simulation. The agent optimized for being in the right place rather than being available when rides appeared. A simpler strategy (stay put and wait) would likely have outperformed the constant zone-chasing.
