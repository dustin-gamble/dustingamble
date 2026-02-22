---
title: "Fast Mechanical Safe Decoder"
date: "2020-03-25"
summary: "A rapid mechanical concept for decoding combination-safe behavior with physical feedback and iteration."
tags:
  - Experiments
  - Mechanisms
  - Rapid Prototyping
draft: false
---

## Problem / context

Many lock mechanisms hide useful physical signal behavior behind interfaces that are hard to observe consistently by hand. The goal for this project was to build a compact electromechanical test rig that could automate dial motion, capture signal cues, and speed up repeatable experimentation.

## Approach

The build combined fast mechanical prototyping with embedded control software:

- MCU: Teensy 4.0
- Motor control: ODrive over `Serial1` at 115200
- Dial feedback: rotary encoder on pins `2` and `3`
- Contact sensing: analog microphone input on `A0`
- Operator interface: SparkFun Qwiic keypad + OpenLCD over I2C

The original sketch implemented a keypad-driven 3-stage search flow:

1. Stage 1 sweep to identify strongest third-number contact signature.
2. Stage 2 sweep with stage-1 candidate fixed to identify the best second-number candidate.
3. Stage 3 sweep with first two candidates fixed, checking opening behavior with timeout-based detection.

Auto-run mode chained all three stages, while manual commands supported quick nudges and spot checks. This kept tuning practical during hardware iteration.

The linked code lab preserves the handwritten baseline (`SafeTherapy_v0.33.ino`) and documents a suggested cleanup starter (`SafeTherapy_v0.34_suggested.ino`) to improve readability and future maintainability without losing the original behavior.

## Outcome / lessons

The project demonstrated that mechanism-heavy experiments move much faster when motion control, sensing, and logging are tightly integrated. It reinforced a recurring engineering theme: testability and setup time have a first-order effect on iteration speed.

It also showed the value of preserving historical code while creating a cleaner forward path. Keeping the original implementation intact and documenting a modernization path made the work easier to revisit and improve later.

## Links

- Project page: https://dustingamble.com/projects/fast-mechanical-safe-decoder/
- GitHub code lab: https://github.com/dustin-gamble/fast-safe-decoder
- Original project video: https://www.youtube.com/watch?v=ClYQULufH2o&t=81s
- Iteration / part 2: https://www.youtube.com/watch?v=2Wp8wdpYOhI
