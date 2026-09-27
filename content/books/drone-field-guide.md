---
title: "Drone Field Guide"
subtitle: "From the garage to the field and back again"
date: "2026-09-27"
summary: "A practical engineering reference for designing, building, and testing unmanned aircraft: how to read an airframe, the handful of numbers that matter, and the failures that teach you the rest."
cover: "/images/books/drone-field-guide-cover.png"
status: "Working manuscript"
meta: "Reference · 79 chapters · in draft"
tags: ["UAV", "Aircraft Design", "Reference"]
featured: true
order: 2
draft: false
---

## About the book

Drone Field Guide is a practical reference for the design and development of unmanned aircraft. It starts where a real project starts: learn to read the aircraft before you reach for a calculator. Then it works through the small set of numbers that connect a mission to the shape of a vehicle — wing loading, disk loading, power loading, energy and endurance — the aerodynamics you actually use, propulsion and stored energy, structures and how to make things, avionics, launch and recovery, and how to run the whole development loop without building a house of cards.

The spine of the book is the way I work: build, test, learn, improve. Make a first-order estimate. Build the simplest thing that can prove or kill the idea. Fly it. Let the result change the design. Every chapter ends by listing what it still wants verified, because the draft ranges are round numbers from general engineering knowledge, not sourced data — yet.

## Inside

Eleven parts and an afterword, 79 chapters:

1. **Know what you're looking at** — read the airframe and the mission.
2. **The numbers that matter** — weight, wing loading, disk loading, power loading, energy.
3. **Aerodynamics you actually use** — lift, drag, airfoils, wings, tails, configuration.
4. **Propulsion and stored energy** — propellers, motors, ESCs, batteries, engines, hybrids, fuel cells.
5. **Structures and making things** — loads, materials, joints, manufacturing by quantity, repair.
6. **Avionics and integration** — flight controllers, navigation, comms, electrical, payloads, autonomy.
7. **Launch, recovery, and operations** — runways, hand launch, catapults, tubes, parachutes, nets, VTOL.
8. **How to develop a drone** — mission, concepts, first sizing, retire the biggest risk first, "Take the Gamble."
9. **Test and learn** — bench, ground, flight, testing the failure, turning data into decisions.
10. **Things go wrong** — one diagnostic pattern for CG, stalls, flutter, structure, power, vibration, EMI.
11. **Field reference** — units, sizing charts, materials and hardware tables, checklists.

The afterword closes on how I think about building aircraft — including a chapter on AI in the development loop, the same progression from chat to tools to agents that runs through [my writing](/writing/the-agent-is-the-tool/).

## A sample — "Carbon fiber is always lighter."

One of the book's myth cards:

> A material saves mass only where the part is sized by stress or stiffness. Most parts on a small aircraft are not — they are sized by minimum gauge: the thinnest thing you can make, pick up, and land on. For carbon, minimum gauge is one ply, and one ply of cloth wetted out is already heavier than the balsa or foam it replaces.
>
> **The better rule:** use carbon where the load path is long and the load is real — spars, booms, tubes, motor arms. For skins, fairings, and trays on a small aircraft, choose by minimum gauge, damage tolerance, and repair time. The lightest part is often the one made from the cheap material at the right thickness.

## A few plates

<div class="book-illustrations">
  <figure><img src="/images/books/drone-rotorcraft-families.png" alt="Rotorcraft families" loading="lazy"/><figcaption>Rotorcraft families</figcaption></figure>
  <figure><img src="/images/books/drone-vtol-families.png" alt="VTOL families" loading="lazy"/><figcaption>VTOL families</figcaption></figure>
  <figure><img src="/images/books/drone-three-concepts.png" alt="Three configuration concepts" loading="lazy"/><figcaption>Concept generation</figcaption></figure>
  <figure><img src="/images/books/drone-endurance-aircraft.png" alt="Endurance aircraft" loading="lazy"/><figcaption>Endurance</figcaption></figure>
  <figure><img src="/images/books/drone-read-the-airframe.png" alt="Read the airframe" loading="lazy"/><figcaption>Read the airframe</figcaption></figure>
</div>

## Status

This is a working manuscript, not a finished handbook. Chapters 1–77 are first-pass drafts with author review pending; the afterword is mine to write. The illustrations are conceptual plates, not validated assembly drawings. Consider this a look inside a book in progress.
