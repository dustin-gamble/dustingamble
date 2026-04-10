---
title: "Line Starts Here"
date: "2026-04-10"
summary: "A queue simulator game where you navigate maze-like lines, cut across lanes, and try to reach the counter before your patience runs out."
tags:
  - iOS
  - Game Design
  - SpriteKit
draft: false
---

<figure class="inline-logo">
  <img src="/images/projects/line-starts-here-icon.png" alt="Line Starts Here app icon" />
</figure>

## Problem / context

Line Starts Here is a queue simulator game built around a very ordinary frustration: getting trapped in a long, winding line and looking for a better path. The core idea was to turn that everyday annoyance into a simple strategy game with readable rules, fast rounds, and a visual identity that feels clean and playful.

## Game loop

You begin at the back of a switchback queue under the **LINE STARTS HERE** sign and try to reach the service counter before your patience meter runs out.

The core loop is straightforward:

1. Start at the back of the line.
2. Tap to move between available nodes.
3. Use crossover gaps to cut across lanes.
4. Manage the irritation you cause in nearby NPCs.
5. Reach the counter before patience hits zero.

The tension comes from choosing when to be aggressive. Cutting across lanes can save time, but it also irritates nearby NPCs and changes how the line behaves around you.

## Features

- **Maze-like queue layouts** with procedural switchback patterns.
- **Tap-to-move navigation** through a graph-based queue.
- **NPC irritation behavior** that punishes careless shortcuts.
- **A patience meter** that drains over time and faster when you are blocked.
- **Five difficulty levels** ranging from relaxed to chaotic.
- **Persistent score tracking** for wins, recent scores, and progression.

## Difficulty curve

The game uses a five-level difficulty ladder:

| Level | Name | NPC Speed | Patience | Crowd |
| --- | --- | --- | --- | --- |
| 1 | Easy Does It | Slow | Generous | Light |
| 2 | Getting Busy | Moderate | Normal | Medium |
| 3 | Rush Hour | Normal | Normal | Busy |
| 4 | Packed House | Fast | Tight | Heavy |
| 5 | Black Friday | Very Fast | Brutal | Packed |

## Built with

The project is built as a native iOS game with a deliberately lightweight stack:

- `Swift 5.9`
- `SwiftUI`
- `SpriteKit`
- `UserDefaults`
- `XcodeGen`
- `iOS 16+`

## Outcome / lessons

Line Starts Here is a good example of taking a narrow, odd little idea and giving it enough systems structure to become a real game. The design works because the controls are simple, but the line behavior creates just enough pressure to make movement choices interesting.

It also shows how much value there is in framing. A queue is not normally thought of as a game space, but once it is treated as a navigation graph with crowd behavior, timing pressure, and difficulty scaling, it becomes a compact strategy problem.

## Links

- GitHub: https://github.com/dustin-gamble/linestartshere
