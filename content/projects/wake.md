---
title: "WAKE — Rowing Instruments and Games"
date: "2026-09-11"
summary: "An Android app that reads a WaterRower's S4 monitor over USB and turns it into analog instruments, 19 games, and a flight down the California coast — driven by your real power and stroke."
tags: ["Android", "Rowing", "Physics", "Games"]
draft: false
featured: false
order: 0
---

## Problem / context

My rowing machine already measures everything — a WaterRower S4 monitor sits on the rail and reports stroke by stroke. WAKE reads that monitor over the USB cable that is already there (on a WaterRower in an Ergatta fit-out) and turns the numbers into something worth looking at. Nothing was added to the hardware. No root, no system changes, and Ergatta itself is untouched and still the fallback.

## Approach

Three analog gauges — speed, power, rate — with needles that carry momentum. A water paddle spinning at the measured speed, coasting down on its own when you stop. And 19 games that tune themselves to you: River Explorer, Stroke Coach, Crew Boat, Zone Row, Canyon, Wave Rider, Skyline, Night Grid, Zombie Run, and a Coast Flight that flies a 3D globe about 900 km down the California coast, where your power is lift and your progress persists across sessions.

## The interesting part: the decay *is* the instrument

A real boat decelerates between strokes. Rowers call it the *run* of the boat, and reading it is how you judge your own stroke — a strong drive shows a high peak and a slow decay.

The S4 does not decay its readings; it holds the last value until the next one. Showing that value flat was the single mistake that cost this project the most rework. Every needle coasts instead. The first coast model was pure quadratic drag, and on the machine it read wrong — steepest the instant you stop, then hovering just above zero for minutes. The coast now holds its run, eases through the middle, and lands on exactly zero. Knowing *when* to start coasting was the hard part: three candidate triggers were tested against thousands of captured samples before one survived (`watts == 0` fired in 27% of samples taken *while actively rowing* — rejected).

## Outcome / lessons

Work and calories are measured from the paddle's own 40-per-second pulses with a load-scale calibration, so they don't depend on the monitor's formula. An optional laptop dashboard decodes the protocol live; the app finds it on Wi-Fi and works fine without it. The lesson is an old one: the physics you refuse to fake is what makes the thing feel real.

## Links

- App and install guide: [dustin-gamble.github.io/wake](https://dustin-gamble.github.io/wake/)
