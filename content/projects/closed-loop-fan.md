---
title: "Closed-Loop Whole-House Fan"
date: "2026-09-19"
summary: "Autonomous control for a QuietCool whole-house fan: an ESP32 reads temperatures, learns how the house heats and cools, forecasts the evening, and runs the fan over its own 433 MHz radio."
tags: ["ESP32", "Home Automation", "Control", "Maker"]
draft: false
featured: false
order: 0
---

## Problem / context

A whole-house fan is the cheapest way to cool a house on the Central Coast — pull cool evening air in, push hot attic air out — but only if it runs at the right time. Doing that by hand means watching indoor and outdoor temperatures all evening. I wanted the fan to decide for itself, with no cloud service and no hub in the loop.

## Approach

A LILYGO LoRa32 (ESP32 + SX1278) learns the QuietCool wall remote's ID, then transmits *as* that remote on the fan's native 433.92 MHz link — the fan's receiver is never touched and the wall remote keeps working. The controller (`fan_brain`, plain C++17) keeps a learned thermal model of the house, a forecast of the evening, a run planner, and a safety supervisor so it does not short-cycle.

It reads indoor and outdoor temperatures straight from the ecobee cloud on the board itself — the same web login Home Assistant uses, no developer key — with a "windows open" arm that disarms itself at 9 a.m. so the fan never runs against a closed house. The RF component ([joyfulhouse/esphome-quietcool](https://github.com/joyfulhouse/esphome-quietcool)) is used unmodified and pinned to a commit; this project adds the brain and the sensing.

## The dashboard

The board serves its own pages — no app and no cloud. The control dashboard shows status, temperatures, a manual override, and the setpoints. The model page shows what the controller has learned about the house and how it expects the night to run.

<div class="device-shots">
  <figure><img src="/images/projects/closed-loop-fan-dashboard.png" alt="House Fan control dashboard: status, temperatures, manual fan control, and setpoints" loading="lazy"/><figcaption>Control dashboard</figcaption></figure>
  <figure><img src="/images/projects/closed-loop-fan-model.png" alt="The learned thermal model and 12-hour forecast" loading="lazy"/><figcaption>Learned model &amp; forecast</figcaption></figure>
</div>

## Where it is

`fan_brain` and a host simulator — a synthetic house and weather, AUTO versus a plain thermostat — build and run. The ecobee login, token refresh, and sensor read are tested against the real account, and the parser is unit-tested against a real response. The firmware compiles clean for the ESP32 (ESPHome 2026.9, 37% RAM, 64% flash). Next is running it on the board — antenna on before power, always, or you cook the transmitter — and moving the sensing over to UniFi Protect once the hardware is back in stock.

## Links

- Built on ESPHome and [esphome-quietcool](https://github.com/joyfulhouse/esphome-quietcool).
