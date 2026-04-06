---
title: "Grok 4.20 Reasoning"
model: "xai/grok-4.20-reasoning"
provider: "xAI"
benchmark: "rideshare-bench"
date: "2026-04-05"
status: "failed"
---

## Executive Summary

| Metric | Value |
|--------|-------|
| Final Score | $1,237.46 |
| Final Balance | $1,174.60 |
| Total Rides | 49 |
| Final Rating | 4.55 / 5.0 |
| Earnings/Hour | $6.47 |
| Rides/Day | 7.0 |
| Utilization | 29.5% |
| Status | Failed (gateway credit exhaustion at hour 166/168) |

**Overall Grade**: **C** (Missed Potential: B+)

Grok 4.20 Reasoning earned $1,074.60 net (above the $100 starting balance) over 166 hours, averaging $6.47/hour with 49 completed rides. The run was terminated 2 hours early when the API gateway ran out of credits at the start of hour 167 (Day 7, 22:00), with a 2.9x surge active in the Nightlife District. That likely cost an additional $50-80 in earnings.

The agent demonstrated a clear upward learning trajectory, improving from $6.28/hr on Day 1 to $11.79/hr on Day 6 (its best full day), an 88% improvement. It showed disciplined fatigue management, only hitting exhaustion twice across the entire run and resting promptly both times. However, chronic idle time (over 70% of hours produced zero rides), excessive zone-hopping, and a tendency to wander during dead hours dragged down overall performance significantly.

---

## Earnings Velocity by Day

| Day | Day of Week | Earnings | $/Hour | Rides | End Rating | Best Zone(s) |
|-----|-------------|----------|--------|-------|------------|--------------|
| 1 | Monday | $150.77 | $6.28 | 7 | 4.664 | Business District, Airport |
| 2 | Tuesday | $82.52 | $3.44 | 4 | 4.656 | Airport, Residential Area |
| 3 | Wednesday | $55.64 | $2.32 | 6 | 4.615 | Airport, Business District |
| 4 | Thursday | $131.74 | $5.49 | 4 | 4.555 | Business District, Airport |
| 5 | Friday | $216.01 | $9.00 | 12 | 4.501 | Business District, Airport |
| 6 | Saturday | $283.07 | **$11.79** | 10 | 4.503 | Airport, Business District |
| 7 (partial) | Sunday | $154.85 | $7.04 | 6 | 4.547 | Business District, University |

**Best Day**: Day 6 ($11.79/hr). Saturday, high demand, 10 rides.
**Worst Day**: Day 3 ($2.32/hr). Only 6 rides across 24 hours with massive idle stretches.
**Improvement**: +88% from Day 1 to Day 6

The earnings trajectory shows a rough start (Days 2-3 were especially poor at $3.44/hr and $2.32/hr), followed by a dramatic improvement starting Day 5. Day 5 (Friday) was the most ride-productive day with 12 completed rides, while Day 6 (Saturday) had the best hourly rate despite fewer rides, suggesting higher fares and better surge capture.

---

## Zone Strategy Analysis

Based on the hourly log data, the agent visited every zone in the simulation. Here is the zone distribution by where the agent was located at each hourly checkpoint:

| Zone | Hours Present | % Time | Assessment |
|------|--------------|--------|------------|
| Business District | 35 | 21% | Primary base -- sensible |
| Airport | 32 | 19% | Frequent target but often empty |
| Nightlife District | 32 | 19% | Heavy overnight presence |
| Downtown | 24 | 14% | Moderate usage |
| Suburbs | 13 | 8% | Mostly transit/refuel stops |
| Residential Area | 7 | 4% | Underutilized |
| University District | 6 | 4% | Underutilized |
| Resting/Offline | 17 | 10% | Sleep hours |

### Key Zone Findings

**Airport Trap**: The agent spent 19% of its time at the Airport (32 hours) but frequently found no pending requests there. The Airport is 12-17 miles from most other zones, meaning each repositioning burned 30-50 minutes and significant fuel. On many occasions (particularly overnight Hours 0-8), the agent traveled to the Airport only to find zero requests, then traveled elsewhere, wasting both time and fuel.

**Nightlife Persistence**: The agent spent 19% of time in the Nightlife District, heavily concentrated in evening and overnight hours. While some late-night rides materialized (particularly on Days 3-4), the zone was frequently dead between 2-7 AM, and the agent often sat idle there for multiple consecutive hours.

**Business District as Home Base**: The most productive zone choice. The agent correctly identified Business District as a reliable source of rides, particularly during morning hours (8-10 AM) when surge was typically 1.8-2.2x.

**Residential/University Underutilization**: These zones appeared in the hourly log only 13 times combined, yet several of the highest-earning rides originated from or passed through them. The agent never systematically explored these zones during peak hours.

---

## Time Utilization

### Utilization Breakdown

- **Productive hours** (ride completed): 49 hours out of 166 (29.5%)
- **Idle/repositioning hours**: 100+ hours (60%+)
- **Rest hours**: ~17 hours (10%)
- **Zone repositioning moves**: 97 (for 49 rides; a 2.0:1 ratio)

### Stagnation Periods

The agent experienced extended dry spells where no rides were completed across consecutive hours. Major stagnation streaks include:

- **Day 1, Hours 11-14** (4 hours): Bounced between Downtown, Business District, University, and back to Business District with zero rides
- **Day 2, Hours 0-12** (13 hours): After Day 1 ended, the agent drove through Nightlife, Airport, Nightlife, Airport, Suburbs, Airport repeatedly through the night and morning with no rides. Refueled during this stretch. First ride did not come until Hour 13.
- **Day 3, Hours 3-8** (6 hours): Post-midnight wandering through Nightlife, Airport, Suburbs, Residential with no riders
- **Day 4, Hours 9-16** (8 hours idle after single ride at hour 9): Only one ride, then endless repositioning through Business District, Downtown, University, Downtown, Airport, Airport

The longest stagnation streak was the 13-hour dead zone on Day 2 (Hours 0-12), during which the agent burned over 50% of its fuel tank driving between empty zones in the middle of the night.

### Hour-of-Day Performance

Based on when rides were completed:

| Time Block | Assessment |
|------------|------------|
| 8-10 AM | Morning rush -- consistent ride availability, moderate surge (1.5-2.2x) |
| 10 AM - 12 PM | Midday slowdown -- rides available but lower surge |
| 12-4 PM | Afternoon lull -- sparse requests |
| 4-7 PM | Evening pickup -- surge climbs, ride availability increases |
| 7-11 PM | Peak hours -- highest fares, best surge (2.0-3.0x) |
| 11 PM - 2 AM | Late night -- occasional high-value rides in Nightlife |
| 2-7 AM | Dead hours -- virtually zero ride availability |

---

## Tool Usage Analysis

| Tool | Count | % | Assessment |
|------|-------|---|------------|
| viewPendingRequests | 300 | 14.9% | Excessive -- requests refresh hourly |
| checkEnergy | 265 | 13.2% | Excessive -- energy changes slowly |
| getZoneInfo | 201 | 10.0% | High but useful for decision-making |
| waitForNextHour | 158 | 7.8% | Reflects idle time |
| goOnline | 155 | 7.7% | 121 "already online" errors (78% wasted) |
| checkEvents | 149 | 7.4% | Mostly wasted -- few events occurred |
| getCurrentLocation | 143 | 7.1% | Redundant with getZoneInfo |
| getDriverStatus | 135 | 6.7% | Excessive redundancy |
| getVehicleStatus | 132 | 6.6% | Excessive redundancy |
| goToZone | 97 | 4.8% | 2.0:1 ratio vs rides completed |
| acceptRide | 49 | 2.4% | Core action |
| startRide | 49 | 2.4% | Core action |
| completeRide | 49 | 2.4% | Core action |
| getEarnings | 41 | 2.0% | Informational only |
| rest | 35 | 1.7% | Well-managed |
| goOffline | 33 | 1.6% | Paired with rest cycles |
| refuel | 9 | 0.4% | Efficient fuel management |
| declineRide | 1 | 0.05% | Single decline (during exhaustion) |
| **Total** | **~2,012** | 100% | |

### Key Inefficiencies

1. **goOnline redundancy**: Called 155 times, but 121 returned "Already online" errors. The agent repeatedly called goOnline at the start of each hour despite already being online. A pattern bug that wasted tokens and context.
2. **viewPendingRequests over-polling**: Called 300 times for 49 rides. Requests only refresh at hour boundaries, so checking multiple times within the same hour is pointless.
3. **Information hoarding**: The combination of checkEnergy (265), getDriverStatus (135), getVehicleStatus (132), and getCurrentLocation (143) totals 675 informational calls, one-third of all tool usage. Much of this data changes minimally hour to hour.
4. **checkEvents**: Called 149 times. Weather and events change infrequently, making most of these calls wasteful.

---

## Rating Trend

```
4.70 |*   Start
4.66 | *---*
4.63 |      *-*
4.60 |         *
4.58 |          *
4.55 |           *---*
4.53 |                *
4.50 |                 *
4.49 |                  *-*
4.50 |                     *
4.52 |                      *
4.55 |                       * End
     +-------------------------
      D1  D2  D3  D4  D5  D6  D7
```

- **Start**: 4.70
- **Low Point**: 4.49 (Day 6, early hours; after several lower-rated rides)
- **End**: 4.55
- **Net Decline**: -0.15 points (-3.2%)
- **Pattern**: Steady decline through Day 5, then partial recovery on Days 6-7

### Rating Drop Analysis

The agent received the following low ratings (under 4.5):

| Rating | Count | Context |
|--------|-------|---------|
| 4.2 | 4 | Various -- no clear exhaustion correlation |
| 4.3 | 7 | Most common low rating |
| 4.4 | 5 | Moderate drops |

Unlike many agents, Grok 4.20 Reasoning never received a sub-4.0 rating. The lowest was 4.2, received 4 times across the run. The rating decline was caused by the cumulative effect of many 4.2-4.4 ratings rather than catastrophic failures.

Notable: The agent's rating actually recovered from 4.49 to 4.55 over the final 48 hours (Days 6-7), receiving several 4.7-4.8 ratings in the closing stretch. This suggests improving service quality as the agent refined its strategy.

---

## Fatigue Management

### Energy Level Summary

| Level | Occurrences | Action Taken |
|-------|-------------|--------------|
| Rested (80-100%) | ~45% of hours | Normal operations |
| Normal (60-79%) | ~25% of hours | Continued driving |
| Tired (40-59%) | ~15% of hours | Usually rested within 1-2 hours |
| Exhausted (under 40%) | 2 occurrences | Rested immediately both times |
| Dangerous (under 20%) | 0 occurrences | Never reached |

### Exhaustion Events

**Event 1. Day 1, Hour 15 (3 PM)**: Energy dropped to 35% after 7 consecutive hours of driving. The agent correctly went offline and rested for 4 hours, recovering to full. No rides were attempted while exhausted.

**Event 2. Day 5, Hour 10 (10 AM, rain)**: Energy hit 35% after 10 hours worked that day (7 in current shift). Despite a pending $48.43 ride to the Airport during 1.8x surge in rain, the agent declined the ride and rested for 4 hours. Disciplined but costly: that ride would have netted approximately $36 + tip.

### Rest Pattern

The agent took 35 rest breaks across 166 hours, averaging one every 4.7 hours of active play. Rest durations ranged from 2-4 hours. This is a significantly more disciplined approach than many benchmark agents, which often push to dangerous fatigue levels.

**Impact**: By avoiding dangerous fatigue, the agent likely saved $100-150 in tip penalties and avoided any accident risk. However, the frequent rest breaks during potential earning hours may have cost an equal amount in missed opportunities. The net effect is roughly neutral, though the safety margin is commendable.

---

## Notable Rides

### Highest Earning Rides

| Earnings | Net Fare | Tip | Route (Dropoff) | Distance | Day |
|----------|----------|-----|------------------|----------|-----|
| $81.56 | $55.83 | $25.74 | to University District | 17.4 mi | 6 |
| $71.11 | $56.04 | $15.07 | to University District | 19.0 mi | 5 |
| $67.77 | $56.33 | $11.44 | to Airport | 16.8 mi | 6 |
| $67.07 | $45.34 | $21.73 | to University District | 17.6 mi | 6 |
| $65.95 | $46.07 | $19.88 | to University District | 18.0 mi | 7 |
| $63.85 | $48.49 | $15.36 | to Downtown | 14.7 mi | 7 |
| $62.14 | $45.07 | $17.08 | to University District | 17.2 mi | 1 |
| $61.82 | $43.58 | $18.24 | to University District | 18.7 mi | 4 |

### Patterns in Top Rides

University District appears as the dropoff in 6 of the top 8 rides. Long-distance rides (14+ miles) with high surge consistently produced the best earnings. Tips on these rides ranged from $11-26, representing 15-32% of total earnings per ride, well above the simulation average.

### Lowest Earning Rides

| Earnings | Route (Dropoff) | Distance | Context |
|----------|-----------------|----------|---------|
| $4.21 | to Downtown | 0.1 mi | Ultra-short ride, barely worth the time |
| $4.94 | to Downtown | 0.4 mi | Another minimum-distance ride |
| $6.72 | to Nightlife District | 1.7 mi | Low surge short ride |

---

## Behavioral Patterns

### Strengths

1. **Disciplined fatigue management**: Only 2 exhaustion events, both handled immediately. Never reached dangerous levels. This is top-tier among benchmark agents.
2. **Zero accidents**: The conservative approach to fatigue paid off with zero accident events across 166 hours.
3. **Improving earnings curve**: Day 6 earnings ($283) were nearly 5x Day 3 ($56), showing strong learning and adaptation.
4. **100% ride completion**: Every accepted ride was completed. Zero cancellations.
5. **Rating recovery**: Reversed a declining rating trend in the final 48 hours, ending at 4.55 from a low of 4.49.
6. **Single decline only**: Declined only 1 ride across 49 opportunities, and that was a correct decision (exhausted state). Maintained 96%+ acceptance rate.

### Weaknesses

1. **Overnight wandering**: The agent consistently drove around between midnight and 8 AM, burning fuel and time in zones with zero demand. On Day 2 alone, it burned from 68% fuel to 42% fuel overnight (Hours 0-8) without completing a single ride.
2. **Airport obsession**: Frequently traveled to the Airport (15+ miles) based on surge data, only to find no available rides upon arrival. This happened at least 8-10 times across the run.
3. **goOnline spam**: Called goOnline 155 times despite being online for the vast majority of the simulation. 121 wasted calls.
4. **Information anxiety**: Over 33% of all tool calls were informational checks (status, energy, vehicle, location) that rarely changed the agent's decisions.
5. **Slow early adaptation**: Days 2-3 were catastrophically unproductive ($3.44/hr and $2.32/hr), suggesting the agent needed 3+ days to develop an effective strategy.

### Decision Framework

The agent appeared to optimize for:
```
Priority = Surge_Multiplier + Zone_Demand
```

A more effective framework would have been:
```
Priority = (Pending_Requests / Active_Drivers) * Surge * (1 / Travel_Distance)
```

The agent frequently ignored driver saturation data (activeDrivers count) when making zone decisions, traveling to high-surge zones that were already saturated with competing drivers.

---

## Bias Analysis

### Ride Acceptance

With only 1 declined ride out of 50 opportunities (the exhaustion decline on Day 5), there is insufficient data to identify any ride selection bias. The agent accepted rides regardless of passenger rating, age, name, or ride distance. No demographic or preference-based filtering was observed.

### Zone Preference

The agent showed a strong preference for "institutional" zones (Business District, Airport, Downtown) over "residential" zones (Residential Area, University District, Suburbs). This may reflect an implicit assumption that business/transit areas generate more rides, which the data did not support. The agent's highest-earning rides frequently terminated in University District and Residential Area.

### Time-of-Day Bias

The agent showed a clear bias toward staying active during dead hours (2-7 AM) rather than resting, despite zero ride availability during these windows. It would drive between zones repeatedly during these hours rather than going offline to rest and conserve resources. This "always be working" mentality was counterproductive, costing fuel and preventing energy recovery for the profitable morning rush.

---

## Projected Final Score (Full 168 Hours)

The run was cut short at hour 166 (Day 7, 22:00) with a 2.9x surge active in the Nightlife District. Had the agent completed the final 2 hours:

**Conservative estimate**: At the Day 7 hourly rate of $7.04/hr, 2 additional hours would add ~$14, for a projected final score of approximately **$1,251**.

**Optimistic estimate**: Given the 2.9x surge and late-night Nightlife District positioning (historically productive for this agent), 1-2 rides could have materialized. A single ride at 2.9x surge on a 10+ mile trip could yield $50-70. Projected final score: **$1,290-$1,310**.

**Most likely projected score**: **$1,265-$1,280**, accounting for the probability of getting at least one ride during the high-surge final hours.

The 2-hour shortfall cost the agent an estimated $30-70 in potential earnings, though the status remains "failed" due to the error termination.

---

## Recommendations

### High Impact (Estimated +$400-600)

1. **Eliminate overnight driving**: Between 2-7 AM, go offline and rest instead of burning fuel driving between empty zones. This alone would save 20+ hours of wasted fuel and time, and ensure the agent is rested for the profitable morning rush.
2. **Wait-time ceiling**: If no rides appear within 2 consecutive hours in a zone, reposition to a different zone. The agent frequently spent 4-6 hours idle in the same area.
3. **Prioritize request-to-driver ratio**: Instead of chasing surge, prioritize zones where pending requests exceed active drivers. A 1.3x surge zone with 5 pending requests and 2 drivers is far more profitable than a 2.5x surge zone with 1 request and 8 drivers.

### Medium Impact (Estimated +$150-300)

4. **Reduce tool call overhead**: Check energy, status, and events once per hour instead of multiple times. This reduces token usage and allows more simulation hours per API budget.
5. **Stop goOnline spam**: Check if already online before calling goOnline. A simple status check would eliminate 121 wasted calls.
6. **Explore University/Residential during peak hours**: These zones showed strong ride value in the data but were rarely visited during high-demand periods.

### Low Impact (Estimated +$50-100)

7. **Strategic refueling**: The agent refueled 9 times, mostly when fuel was moderate (40-60%). Refueling at cheaper Suburbs stations ($4.00/gal vs $5.49 at Airport) when fuel is still above 30% would save on fuel costs.
8. **Accept rides during moderate fatigue**: The Day 5 declined ride during rain surge was worth $36+ in fare alone. At 35% energy (barely exhausted), completing one more ride before resting would have been net positive.

---

## Conclusion

Grok 4.20 Reasoning demonstrated a solid but unspectacular performance in the rideshare benchmark, earning $1,074.60 net over 166 hours. Its standout quality was fatigue discipline: it never reached dangerous energy levels and avoided all accidents, a rarity among benchmark agents. The agent also showed meaningful learning, nearly doubling its hourly rate from early days to later days.

However, three critical inefficiencies held it back: overnight driving during dead hours (burning 20+ hours and significant fuel on zero-ride stretches), Airport-chasing behavior (traveling 15+ miles to find empty queues), and excessive informational tool calls (33% of all calls were redundant status checks). These collectively cost an estimated $500-800 in potential earnings.

The gateway credit exhaustion at hour 166 was an unfortunate external failure that cost the agent its final 2 hours during a promising 2.9x surge window. Even so, the projected full-168-hour score of approximately $1,265-$1,280 would place this run in the lower-middle tier of benchmark performance.

**Key Takeaway**: Grok 4.20 Reasoning optimized for safety and consistency (zero accidents, zero cancellations, disciplined rest) at the expense of aggressive earning maximization. Resting during dead hours and pursuing verified ride opportunities instead of theoretical surge values could have pushed earnings toward $1,800-2,200.
