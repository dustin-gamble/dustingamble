---
title: "BioGyro"
date: "2026-08-08"
summary: "An iOS app that tracked how food affected your body rather than how many calories it contained. Shipped to the App Store, did not find an audience, and was retired."
tags:
  - iOS
  - AI
  - Health
draft: false
---

## Problem / context

Calorie counting answers a question most people do not actually have. The number on the label is the same for everyone, but the response is not. The same meal can leave one person steady and another foggy two hours later.

BioGyro started from that gap. Instead of tracking intake, track response, and let the correlation come out of the data. The organizing metaphor came from aviation: the main dashboard gauge was a Human Stability Index modeled on an HSI, the instrument that tells a pilot not just where they are but whether they are drifting.

## Approach

The core loop was deliberately small:

- photograph a meal, about ten seconds, no weighing or database searching
- answer three questions a couple of hours later on energy, digestion, and mental clarity
- correlate the two overnight
- surface what actually moved the needle for that specific person

The analysis ran in two layers, which turned out to be the right split. A rule-based correlation engine computed per-user baselines and looked for meals whose features moved the following check-in scores consistently enough to clear a confidence threshold. That produced the trigger foods and stable meals, and it was reproducible and cheap.

Separately, a nightly job assembled 30 days of meals, check-ins, digestive events, and weight trend into a structured prompt and stored the result as a written report. The model was used for the thing models are good at, which is turning a pile of correlations into language someone will actually read.

## Outcome / lessons

The app reached the App Store, including the parts nobody sees: subscription tiers with server-side entitlement checks, receipt validation, a medical disclaimer gate, an admin console for tuning the scoring algorithm against live data, and a rejection and resubmission cycle that taught me how App Review actually reads a health app.

It did not find an audience.

A few things are clear looking back at the codebase:

- I built for a scale I never had. The final system carried 26 API modules, 40 database tables, and 30 migrations, serving no one. Each piece answered a real question. The aggregate answered questions nobody had asked yet.
- Some of it was never finished. A job queue, a Redis instance, and a worker process ran in production for months with handlers that logged a line and returned. Nothing ever queued work to them. Unfinished scaffolding does not fail loudly, it just quietly bills you.
- The free tier had no cost floor. Every user got a full generated report every night, including free users. That is fine at zero users and unsound at scale.
- The technology working is not the same as someone wanting to open the app on day four. The correlation engine worked. The photo recognition worked. That was never the hard part.

## Tech stack

- `SwiftUI` on iOS 17+ for the app, with `StoreKit 2` for subscriptions and a `WidgetKit` extension for the gauge
- `Node` and `TypeScript` on `Express` for the API
- `PostgreSQL` for meals, check-ins, and cached insights
- `GPT-4o-mini` for the nightly reports and food recognition from photos
- S3-compatible object storage for meal photos

## Status

Retired in August 2026. The backend, database, and hosting have been shut down and the app withdrawn from the App Store. The marketing site is kept as an archive.

## Links

- Archive: https://biogyro.io
