---
title: "Cozy Cauldron"
date: "2026-03-07"
summary: "An iOS potion-brewing game prototype inspired by ideas from my kids and developed with AI-assisted workflows."
tags:
  - iOS
  - Game Design
  - AI Collaboration
draft: false
---

## Problem / context

Cozy Cauldron started from family game ideas and a simple question: what would a small, charming potion-brewing game look like if it felt playful, readable, and easy to expand? The goal was to build something whimsical enough for kids to enjoy, but structured enough to support real game systems and iteration.

## Approach

The project was built as an iOS game prototype using SwiftUI for app flow and menus, SpriteKit for the cauldron scene and brewing effects, and a deterministic evaluation engine in pure Swift.

The core loop centers on running a tiny potion shop:

- customers arrive with funny or unusual needs
- the player picks a base liquid and ingredients
- heat and stirring affect the brew in real time
- the potion is scored for match, potency, stability, volatility, taste, heat, and stir quality

The current prototype includes:

- single-player day flow with a customer queue
- 30 normal customers and 8 secret customers
- 20 ingredients and 5 base liquids loaded from bundled JSON
- live brew gauges and sticky milestone checkmarks
- a SpriteKit cauldron scene with bubbling, glow, pouring, stirring, and bottle shelves
- local save data for progression and player identity
- nearby two-device battle mode over the same Wi-Fi network using `MultipeerConnectivity`

## Outcome / lessons

Cozy Cauldron is a strong example of using AI as a development partner rather than just a question-answering tool. Family ideas helped shape the feel and direction of the game, while AI-assisted iteration helped translate those ideas into a working iOS prototype with UI, game systems, local persistence, and multiplayer support.

It also reinforced a useful product lesson: playful ideas become much more compelling when they are backed by solid systems. Deterministic scoring, structured content, and clean feedback loops made the game easier to tune and much more fun to build on.

## Tech stack

- `SwiftUI` for app structure, menus, gauges, and results
- `SpriteKit` for the cauldron scene, potion shelf, bubbling, glow, and stirring
- pure Swift gameplay engine for scoring, progression, and deterministic behavior
- `Codable` JSON content and local file persistence
- `MultipeerConnectivity` for nearby local battle mode

## Status

The prototype is in active development, with core single-player flow, brewing interactions, content loading, save progress, and local nearby multiplayer already working.
