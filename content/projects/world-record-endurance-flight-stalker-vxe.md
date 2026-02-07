---
title: "World-Record Endurance Flight (Stalker VXE)"
date: "2022-04-11"
summary: "High-level lessons from supporting a 39-hour endurance flight record program."
tags:
  - UAV
  - Flight Test
  - Endurance
draft: false
---

## Problem / context

Long-endurance unmanned aircraft programs face a compounding challenge: aerodynamic and propulsion efficiency are necessary, but operational reliability and integration quality usually decide real mission duration. For this effort, the target was a sustained, officially monitored duration flight in the 5-25 kg class with a VTOL-capable platform using hybrid electric propulsion. The event was flown from Santa Margarita, California and adjudicated under official duration-record procedures.

## Approach

The flight used the Stalker VXE30 with a hybrid propane solid oxide fuel cell plus battery architecture, then added targeted configuration changes to extend duration while keeping operations practical:

- External asymmetric 8.6 L composite propane wing tank for additional onboard energy.
- Weight increase from baseline 48 lb to 53.5 lb takeoff for the record attempt.
- Adjusted control and mission parameters, including a 10% airspeed setpoint increase.
- Vertical profile changes for heavy launch conditions (30% climb-rate reduction and transition altitude reduced from 300 ft to 150 ft).
- Evening launch timing to reduce thermal-convection risk during the heaviest part of the mission.
- Fuel-system update using a vaporizer to prevent regulator freeze from liquid propane feed in the external tank architecture.

Operationally, the event used continuous official monitoring, NIST-traceable timing devices (six total across three contest directors), and full telemetry logging to support record adjudication. The aircraft flew a 1 km orbit at roughly 350 ft AGL with 424 logged data columns preserved for review.

## Outcome / lessons

The aircraft launched on February 16, 2022 at 5:20 PM PST and landed on February 18, 2022 at 8:37 AM PST after 39 hours 17 minutes 7 seconds of flight. The record was later ratified by FAI.

The white paper data highlights why the result was system-level rather than single-component:

- Cruise-power margin was managed carefully as the full wing tank increased required power from baseline levels.
- Fuel burn reduced aircraft weight through the mission (about 53.5 lb down to about 43.5 lb), lowering required power over time.
- Battery/fuel-cell hybrid behavior enabled launch/transition demands while sustaining long cruise phases.
- Logistics, observer coverage, and calibrated timing were designed as part of the engineering plan, not as an afterthought.

The core lesson is that endurance performance is a systems outcome, not an isolated design trick: propulsion architecture, airframe integration, launch-window planning, crew operations, and verification logistics all matter.

This was documented in a technical out-brief paper prepared for AIAA SciTech 2023.

## Links

- Technical paper (PDF): [/papers/world-record-duration-flight-2023-aiaa.pdf](/papers/world-record-duration-flight-2023-aiaa.pdf)
- AIAA DOI abstract: https://arc.aiaa.org/doi/abs/10.2514/6.2023-1725
- Lockheed Martin public release: https://news.lockheedmartin.com/2022-04-11-Lockheed-Martin-Stalker-VXE-UAS-Completes-World-Record-39-Hour-Flight
- FAI record listing: https://www.fai.org/record/19634
- TODO: Add additional publicly approved references and any approved presentation slides.
