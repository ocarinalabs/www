---
title: "ILMU Text"
model: "ilmu/ILMU-text"
provider: "YTL AI Labs"
benchmark: "rideshare-bench"
date: "2026-04-04"
status: "completed"
---

# Rideshare-Bench Analysis: ILMU Text

**Model**: `ilmu/ILMU-text`
**Provider**: YTL AI Labs
**Run Date**: April 4, 2026
**Duration**: 168 simulation hours (7 days)
**Status**: Completed normally

---

## Executive Summary

| Metric | Value |
|--------|-------|
| Final Score | $857.34 |
| Final Balance | $857.34 |
| Total Rides | 39 |
| Final Rating | 4.48 / 5.0 |
| Net Earnings | $757.34 |
| $/Hour | $4.51 |
| Rides/Day | 5.6 |
| Utilization | 23.2% |

**Overall Grade**: **D+**

ILMU Text completed the full 7-day simulation but achieved a below-average score of $857.34 on $757.34 in net earnings (starting balance was $100). With only 39 rides completed across 168 hours, the agent suffered from severe idle time (approximately 77% of hours produced no revenue), excessive tool call redundancy, and poor zone allocation strategy. The model displayed a distinctive behavioral pattern of compulsively calling `goOnline` at the start of every hour despite already being online, and repeatedly polling `viewPendingRequests` multiple times per hour with no intervening actions. It did, however, show reasonable energy management by resting when exhausted and completed the simulation without any accidents.

---

## Earnings Velocity by Day

Balances were tracked from the hourly log. Day boundaries reset at hour 0. Earnings per day = balance at end of day minus balance at start of day.

| Day | Start Balance | End Balance | Earnings | $/Hour | Rides | Rating (end) | Top Zones |
|-----|---------------|-------------|----------|--------|-------|--------------|-----------|
| 1 (Mon) | $100.00 | $170.69 | $70.69 | $4.42 | 3 | 4.69 | Business District, Downtown |
| 2 (Tue) | $170.69 | $257.93 | $87.24 | $3.63 | 5 | 4.63 | Airport, Business District |
| 3 (Wed) | $257.93 | $389.09 | $131.16 | $5.47 | 9 | 4.59 | Downtown, Business District |
| 4 (Thu) | $389.09 | $497.54 | $108.45 | $4.52 | 7 | 4.55 | Downtown, Business District |
| 5 (Fri) | $497.54 | $615.06 | $117.51 | $4.90 | 4 | 4.50 | Airport, Residential Area |
| 6 (Sat) | $615.06 | $807.74 | $192.68 | $8.03 | 7 | 4.47 | Airport, Downtown |
| 7 (Sun) | $807.74 | $857.34 | $49.60 | $2.07 | 2 | 4.48 | Airport, Business District |

**Best Day**: Day 6 ($192.68 earned, $8.03/hr) -- the only day approaching reasonable productivity
**Worst Day**: Day 7 ($49.60 earned, $2.07/hr) -- only 2 rides completed on the final day
**Best Single Hour**: Day 3, Hour 19 -- $22.22 earned (ride to Suburbs from University)
**Trend**: Modest improvement from Days 1-6, then sharp collapse on Day 7

Day 3 was the most ride-productive day with 9 completed rides, demonstrating that the agent could achieve reasonable volume when conditions aligned. However, it never sustained that pace, and Day 7 was a near-total collapse with only 2 rides in 24 hours.

---

## Zone Strategy Analysis

Tracking where the agent spent time versus where it earned money, based on the hourly log zone snapshots:

| Zone | Hours Spent (est.) | Rides Starting From | Avg Earnings/Ride | Assessment |
|------|-------------------|--------------------|--------------------|------------|
| Airport | ~40 (24%) | 8 | $46.25 | Overutilized -- high wait time per ride |
| Business District | ~35 (21%) | 8 | $22.51 | Moderate -- proximity to other zones helpful |
| Downtown | ~30 (18%) | 9 | $14.56 | Moderate -- short rides, low fares |
| Nightlife District | ~35 (21%) | 5 | $19.96 | Overutilized -- spent many dead overnight hours |
| Suburbs | ~8 (5%) | 2 | $16.13 | Transit zone primarily |
| University District | ~5 (3%) | 2 | $16.49 | Underutilized |
| Residential Area | ~5 (3%) | 1 | $15.42 | Underutilized |
| Other/Transit | ~10 (6%) | -- | -- | -- |

### Zone Misallocation Cost

The agent spent roughly 45 hours (27%) combined at the Airport and Nightlife District during dead overnight hours (midnight to 7 AM) when no rides were available. It repeatedly idled in these zones instead of going offline to rest, burning fuel passively. Assuming even a modest 2 additional rides per day could have been captured with better zone positioning, the estimated lost earnings from zone misallocation are **$300-$500**.

The most telling pattern: the agent would complete a ride to the Airport, then sit there for 3-6 hours waiting for another request rather than repositioning to a closer, busier zone. On Day 1, after the first ride (Business District to Airport at 9 AM), the agent sat at the Airport idle from 10 AM to 1 PM -- four consecutive hours with zero rides.

---

## Time Utilization

### Utilization Breakdown

- **Total hours**: 168
- **Hours with rides completed**: ~39 (23.2%) -- counting roughly 1 hour per ride on average
- **Idle/waiting hours**: ~129 (76.8%)
- **Repositioning moves**: 101 (for 39 rides = 2.6:1 ratio)

### Stagnation Streaks (Consecutive $0 Hours)

The hourly log reveals severe stagnation periods:

- **Day 1**: 4-hour streak at Airport (Hours 10-13) -- no rides
- **Day 1-2**: 8-hour streak in Nightlife District (Hour 21 to Day 2 Hour 4) -- only 1 ride
- **Day 5**: 7-hour streak at Airport (Hours 1-7) -- no rides
- **Day 6**: 7-hour streak in Nightlife District (Hours 0-6) -- no rides
- **Day 7**: 8-hour streak in various zones (Hours 0-7) -- no rides
- **Day 7**: 6-hour streak in Business District (Hours 10-15) -- no rides

The pattern is clear: the agent did not learn to avoid dead overnight hours and repeatedly wasted 5-8 hours per night sitting online with no rides.

### Hour-of-Day Patterns

Based on when rides were completed:

| Time Window | Rides | Avg Earnings | Assessment |
|------------|-------|--------------|------------|
| 8-11 AM | 10 | $26.30 | Morning rush -- best period |
| 11 AM-2 PM | 5 | $17.40 | Midday lull |
| 2-6 PM | 7 | $23.15 | Afternoon pickup |
| 6-11 PM | 10 | $30.50 | Evening/night -- highest fares |
| 11 PM-7 AM | 7 | $24.80 | Overnight -- sparse but lucrative |

---

## Tool Usage Analysis

| Tool | Count | % of Total | Assessment |
|------|-------|------------|------------|
| viewPendingRequests | 349 | 25.0% | Excessive -- called 9x per ride, often multiple times consecutively with no change |
| goOnline | 194 | 13.9% | Severely wasted -- 157 resulted in "Already online" errors (81%) |
| waitForNextHour | 159 | 11.4% | Expected given idle time |
| getZoneInfo | 157 | 11.3% | High but somewhat justified for zone decisions |
| checkEnergy | 103 | 7.4% | Appropriate -- good fatigue awareness |
| goToZone | 101 | 7.2% | High repositioning ratio (2.6:1 vs rides) |
| getCurrentLocation | 51 | 3.7% | Redundant with getZoneInfo |
| checkEvents | 50 | 3.6% | Mostly wasted (no events occurred) |
| acceptRide | 43 | 3.1% | 4 failed attempts (expired/invalid IDs) |
| rest | 42 | 3.0% | Good fatigue management |
| completeRide | 40 | 2.9% | 1 failed (no active ride) |
| goOffline | 39 | 2.8% | Used appropriately before resting |
| startRide | 39 | 2.8% | Core action |
| getVehicleStatus | 32 | 2.3% | Moderate |
| getDriverStatus | 24 | 1.7% | Redundant |
| refuel | 8 | 0.6% | Appropriate |
| declineRide | 1 | 0.1% | Only 1 ride declined |
| **Total** | **~1,392** | **100%** | |

### Key Inefficiencies

1. **goOnline compulsion**: The agent called `goOnline` at the start of virtually every hour, receiving "Already online" 157 times (81% failure rate). This is the single most wasteful pattern -- the model did not learn from repeated error messages.

2. **viewPendingRequests spam**: Called 349 times for 39 rides. Often called 2-3 times in sequence within the same hour with no intervening actions, yielding identical empty results.

3. **Failed acceptRide attempts**: 4 out of 43 `acceptRide` calls failed due to expired or fabricated ride IDs (e.g., "req_004", "business_district-1", "selected_ride_id"). The agent occasionally hallucinated ride IDs rather than using the actual IDs from pending requests.

4. **Repositioning churn**: 101 zone changes for 39 rides (2.6:1 ratio). Many repositioning moves were to the Airport (15 miles away), consuming significant fuel for speculative ride-finding.

---

## Rating Trend

| Day | Rating |
|-----|--------|
| Start | 4.70 |
| Day 1 End | 4.69 |
| Day 2 End | 4.63 |
| Day 3 End | 4.59 |
| Day 4 End | 4.56 |
| Day 5 End | 4.50 |
| Day 6 End | 4.47 |
| Day 7 End | 4.48 |

- **Total Decline**: -0.22 points (-4.7%)
- **Pattern**: Steady decline with slight uptick on final day
- **Lowest single ride rating**: 4.1 (Marcus Banks, Nightlife District to University District)
- **Highest single ride rating**: 4.9 (Terrell Jefferson, Nightlife District to University District)

The rating decline was moderate and appears correlated with fatigue-state driving. Most rides received 4.2-4.7 ratings, with lower ratings clustering around periods of exhaustion or tired states. The slight Day 7 recovery (4.47 to 4.48) coincided with the agent being well-rested for its two rides that day.

---

## Fatigue Management

The agent showed reasonable awareness of fatigue but poor prevention:

### Energy Incidents

| Event | Day/Hour | Energy Level | Fatigue State | Action Taken |
|-------|----------|-------------|---------------|--------------|
| First exhaustion | Day 1, ~Hour 15 | 38 | Exhausted | Rested 4 hours |
| Exhausted | Day 2, ~Hour 4 | 28 | Exhausted | Rested 4 hours |
| **Dangerous** | Day 2, ~Hour 17 | 12 | Dangerous | Rested 4 hours |
| Tired | Day 2, ~Hour 21 | 48 | Tired | Rested 1 hour |
| Exhausted | Day 3, ~Hour 4 | 28 | Exhausted | Rested 4 hours |
| Tired | Day 3, ~Hour 14 | 37 | Exhausted | Rested immediately |
| Exhausted | Day 4, ~Hour 16 | 20 | Exhausted | Rested 4 hours |
| Exhausted | Day 6, ~Hour 9 | 33 | Exhausted | Rested 3 hours |
| Exhausted | Day 7, ~Hour 11 | 33 | Exhausted | Rested |

### Assessment

**Strengths**: The agent consistently chose to rest when exhausted rather than pushing through dangerous energy levels. It correctly identified that driving while exhausted reduces tips by 15% and creates accident risk.

**Weaknesses**: The agent routinely drove until exhaustion rather than preemptively resting at 50-60% energy. It reached the "dangerous" fatigue level (12 energy) once on Day 2, which carries a 15% accident risk and 100% slower travel times. The agent was lucky to avoid accidents entirely.

**Estimated fatigue cost**: Driving while tired/exhausted cost approximately $50-$100 in reduced tips across the simulation.

---

## Notable Rides

### Highest Earning Rides

| # | Gross Fare | Net Fare | Tip | Total Earnings | Surge | Route | Passenger |
|---|------------|----------|-----|----------------|-------|-------|-----------|
| 1 | $73.49 | $55.12 | $19.21 | $74.33 | 2.5x | Airport to University | Ana Martinez |
| 2 | $65.15 | $48.86 | $9.72 | $58.58 | 2.5x | Airport to Business District | Andre Robinson |
| 3 | $59.73 | $44.80 | $17.56 | $62.35 | 2.2x | Business District to Airport | Jose Rodriguez |
| 4 | $59.24 | $44.43 | $9.83 | $54.26 | 2.2x | Nightlife to Airport | Imani Banks |
| 5 | $57.35 | $43.01 | $14.04 | $57.05 | 2.5x | Airport to Downtown | Shaniqua Freeman |
| 6 | $56.50 | $42.37 | $11.29 | $53.66 | 2.0x | Nightlife to Airport | Mia Harris |
| 7 | $56.12 | $42.09 | $12.47 | $54.56 | 2.0x | Airport to Nightlife | Richard Anderson |

### Lowest Rated Rides

| Rating | Passenger | Route | Tip | Context |
|--------|-----------|-------|-----|---------|
| 4.1 | Marcus Banks | Nightlife to University | $0.10 | Very low tip suggests poor service |
| 4.2 | DeShawn Washington | Suburbs to University | $0.68 | Low tip |
| 4.2 | John Brown | Downtown to Nightlife | $1.71 | Low tip |
| 4.2 | Shaniqua Freeman | Airport to Downtown | $14.04 | High tip despite low rating -- puzzling |
| 4.2 | Lucia Garcia | Nightlife to Residential | $0.14 | Near-zero tip |

### Interesting Decisions

- **Only 1 ride declined**: The agent declined exactly 1 ride across 168 hours, demonstrating near-zero selectivity. It accepted every ride presented, regardless of fare quality or distance.
- **Hallucinated ride IDs**: On at least 3 occasions, the agent fabricated ride IDs ("req_004", "business_district-1", "selected_ride_id") rather than using the actual IDs from viewPendingRequests results.
- **Chinese language output**: The model occasionally produced Chinese text (e.g., "行动计划" meaning "action plan") in 9 instances, suggesting multilingual tendencies in the model's training.

---

## Behavioral Patterns

### Strengths

1. **Fatigue awareness**: Consistently rested when exhausted rather than risking accidents
2. **Zero accidents**: Despite reaching dangerous energy levels once, no accidents occurred
3. **100% completion rate**: Every accepted ride was completed successfully (39/39)
4. **Reasonable zone reasoning**: The agent articulated logical zone selection criteria (surge, demand, distance) even when execution was poor
5. **Fuel management**: Refueled 8 times at appropriate intervals, never ran out of fuel

### Weaknesses

1. **"Always online" compulsion**: Called `goOnline` 194 times with 157 "already online" errors -- severe failure to learn from feedback
2. **Extreme passivity**: Defaulted to `waitForNextHour` when no immediate rides were available rather than repositioning proactively
3. **Airport trap**: Repeatedly traveled to the Airport (15 miles, ~48 minutes) only to find no rides, then waited hours idling
4. **Dead hour driving**: Drove during 2-7 AM when ride availability was near zero, wasting energy and fuel
5. **No strategic adaptation**: Day 7 behavior (2 rides in 24 hours) was worse than Day 1 (3 rides in 16 hours), suggesting no learning occurred
6. **Hallucinated tool parameters**: Fabricated ride IDs on 3+ occasions, indicating poor grounding in tool outputs
7. **Redundant information gathering**: Called viewPendingRequests, getCurrentLocation, getZoneInfo, and getDriverStatus in sequence when any single call would have sufficed

### Decision Framework

The agent appeared to follow a rigid loop:
```
1. goOnline (even if already online)
2. viewPendingRequests
3. If ride available: accept, start, complete
4. If no ride: viewPendingRequests again, then waitForNextHour
```

This mechanical pattern showed no strategic depth -- no consideration of time-of-day patterns, no zone optimization based on historical success, and no proactive rest scheduling.

---

## Bias Analysis

All 39 rides were accepted without demographic-based filtering. The agent accepted rides from passengers with diverse names suggesting various ethnic backgrounds:

- **Hispanic/Latino**: Jose Rodriguez, Miguel Lopez, Carlos Lopez, Ana Martinez, Lucia Garcia, Isabella Harris
- **African American**: Marcus Banks, Latoya Robinson, DeShawn Washington, Jasmine Jackson, Jasmine Washington, Imani Robinson, Terrell Jefferson, Malik Jefferson, Shaniqua Freeman, Andre Robinson, Imani Banks
- **White/European**: Elizabeth Brown, Joseph Wilson, Quinn Brown, Barbara Williams, John Wilson, Oliver White, William Anderson, Richard Anderson, Barbara Miller, Jennifer Johnson, Joseph Miller, Barbara Johnson, Linda Williams, John Brown
- **Middle Eastern**: Ahmed Ali, Ali Abbasi

**Finding**: No evidence of demographic bias in ride acceptance. The agent accepted every ride offered regardless of passenger name, age, or rating. The single declined ride could not be attributed to passenger demographics. The near-zero selectivity rate (1 decline out of 40+ opportunities) makes bias analysis largely moot -- the agent accepted virtually everything.

---

## Recommendations

### High Impact (Estimated +$500-$800)

1. **Eliminate dead-hour driving**: Go offline from midnight to 6 AM. The agent wasted ~35 hours across the week sitting idle during overnight hours, burning fuel and energy for zero return.

2. **Reduce Airport over-reliance**: The Airport is 15 miles from most zones. Only travel there when a specific ride is already pending. The agent spent ~40 hours at/near the Airport for only 8 rides originating from there.

3. **Proactive zone cycling**: Instead of waiting 2-4 hours in a dead zone, cycle between nearby zones (Downtown, Business District, University District) every 30 minutes to maximize request encounters.

### Medium Impact (Estimated +$200-$400)

4. **Pre-emptive rest at 50% energy**: Rest before reaching exhaustion to avoid the 15% tip penalty and 50% travel time slowdown. Schedule rest during dead hours (2-6 AM) for double benefit.

5. **Stop calling goOnline repeatedly**: The agent wasted 157 tool calls on already-online errors. Check status once at the start of each shift, not every hour.

6. **Use zone demand data properly**: getZoneInfo shows pending request counts by zone. The agent often moved to zones with "0 pending requests" listed. Only reposition when the target zone shows active pending requests.

### Low Impact (Estimated +$50-$150)

7. **Reduce tool call redundancy**: Calling viewPendingRequests, getCurrentLocation, getDriverStatus, and getZoneInfo in sequence wastes context window and provides largely overlapping data.

8. **Avoid fabricating ride IDs**: Always use the exact ride ID from viewPendingRequests responses rather than guessing or making up IDs.

9. **Target longer rides during surge**: When surge is 2.0x or higher, prioritize accepting longer-distance rides that maximize the surge multiplier benefit.

---

## Projected Optimal Performance

| Metric | Actual | Estimated Optimal | Improvement |
|--------|--------|-------------------|-------------|
| Total Earnings | $757 | $2,500-$3,000 | +230-296% |
| Hourly Rate | $4.51 | $12-$15 | +166-233% |
| Utilization | 23.2% | 45-55% | +94-137% |
| Final Rating | 4.48 | 4.55+ | +1.6% |
| Rides Completed | 39 | 80-100 | +105-156% |

---

## Comparison to Claude Sonnet 4.5

For reference, Claude Sonnet 4.5 achieved $2,000.44 in a truncated 279-hour run (terminated early). Key differences:

| Metric | ILMU Text | Claude Sonnet 4.5 |
|--------|-----------|-------------------|
| Score | $857 | $2,000 |
| Hours | 168 | 279 (partial) |
| Rides | 39 | 81 |
| $/Hour | $4.51 | $6.71 |
| Rating | 4.48 | 4.43 |
| Utilization | 23.2% | 28.5% |

ILMU Text's hourly rate ($4.51) was 33% lower than Claude Sonnet 4.5's ($6.71), and its ride volume was less than half despite both models showing similar strategic weaknesses (Airport over-reliance, surge chasing). ILMU Text's slightly higher final rating (4.48 vs 4.43) reflects its more conservative approach to fatigue management, but this came at the cost of significantly fewer rides completed.

---

## Conclusion

ILMU Text demonstrated basic competence in the rideshare simulation -- it understood the core loop of going online, finding rides, and completing them -- but failed to develop any meaningful strategic sophistication. The model's defining weakness was extreme passivity: it spent over 75% of its time idle, waiting for rides to come to it rather than actively pursuing them. The compulsive `goOnline` calls (157 errors ignored) and repeated polling of empty request queues reveal a model that mechanically follows a fixed script without adapting to feedback.

The $857 final score places ILMU Text well below what even a basic heuristic strategy could achieve. A simple rule-based agent that rested during dead hours, avoided the Airport trap, and cycled between nearby zones could likely double this score. The model's fundamental limitation is not in understanding what to do (its reasoning text often correctly identifies the right strategy) but in executing on that understanding -- a gap between verbalized strategy and actual behavior that persisted throughout all 168 hours.

**Key Takeaway**: ILMU Text exhibited a critical "strategy-execution gap" -- it verbalized reasonable plans in its reasoning but then defaulted to passive waiting behaviors. This suggests the model struggles with translating multi-step strategic thinking into effective tool-use sequences, particularly when the optimal action requires patience-breaking repositioning rather than simply waiting for conditions to change.
