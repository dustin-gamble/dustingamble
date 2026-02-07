---
title: "Autonomy and Simulation Ecosystem (ArduPilot / JSBSim / Web Dashboards)"
date: "2025-08-16"
summary: "A repeatable development loop connecting SITL, flight dynamics, and lightweight mission dashboards."
tags:
  - Simulation
  - Autonomy
  - Tools
draft: false
---

## Problem / context

Autonomy development often suffers when simulation components are disconnected: flight dynamics, controller behavior, and mission-level visualization live in separate silos. This slows iteration and obscures root causes during technical reviews.

## Approach

The effort established a connected workflow spanning SITL environments, JSBSim-based modeling, and web dashboards for scenario interpretation. The objective was to make run setup repeatable, make results easier to compare, and reduce ambiguity in design-trade conversations.

## Outcome / lessons

The ecosystem improved iteration speed by reducing setup overhead and making simulation outcomes easier for cross-functional teams to interpret. The key lesson is that integration quality between tools frequently matters more than adding isolated new features to any single tool.

## Links

- TODO: Add architecture diagram image.
- TODO: Add approved references to tooling stack usage.
