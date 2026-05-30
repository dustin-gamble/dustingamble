---
title: "The Agent Is the Tool"
date: "2026-05-29"
summary: "After building tools with AI, the next step is keeping an agent inside the tool — delegating judgment at runtime and letting the tool get smarter as the models do."
tags: ["AI", "Agents", "Tool Building", "Engineering Judgment", "Prompt Engineering"]
draft: false
featured: true
---

A few months ago I wrote that you should stop asking AI for answers and start asking it to build tools. I still believe that. But I was only describing half of the move.

Here is the part I missed.

The tools I built were frozen. They did exactly what I told them to do, and nothing else. The first time one of them met an input I had not planned for, it did not adapt — it returned a confident, wrong result, or nothing at all.

That is the limit I want to talk about.

![Infographic: The Agent Is the Tool — from building tools to putting live reasoning inside them](/images/writing/agent_infographic.png)

*The whole argument on one page.*

## What my last article left out

[The argument](/writing/build-the-tool-not-just-the-answer/) was clean: an answer saves you a few minutes, a tool saves you hours, so build the tool. Use AI as the programmer, then walk away with a reusable artifact.

What I treated as the finish line — "now you have a tool" — turned out to be a new starting line.

Because the artifact I walked away with was a pile of rules. Inputs in, my logic in the middle, outputs out. And my logic only covered the cases I thought of while I was prompting.

The agent had been the *author* of the tool. Then it left. What stayed behind was a set of equations.

## The ceiling of a frozen tool

A frozen tool is wonderful right up until reality hands it something off-script.

A rocket calculator on this site takes thrust, mass, and drag and returns an altitude. That is exactly what it should be — deterministic, checkable, the same answer every time. I would not want an agent improvising physics.

But most of my real problems are not physics. They are judgment.

"Given these five constraints, which one is actually the bottleneck?" "This input is weird — is it noise or a real signal?" "Rank these ideas the way I would, not the way a generic rule would."

You cannot enumerate those answers in advance. The moment you freeze judgment into a lookup table, you have built something confidently brittle: it always responds, and it is wrong exactly when the situation is unusual — which is exactly when you needed the help.

That is the ceiling. A tool made only of equations can only return what its author already knew.

## Put the agent in the judgment slot

So the next move is not "build a tool" or "ask an agent." It is both, in one structure.

Keep the chassis: the interface, the specific inputs you care about, the repeatable workflow, the deterministic math. Those are what made tools compound in the first place, and they should stay code.

Then, at the one or two points that actually need judgment, do not hardcode a rule. Call an agent at runtime.

The agent stops being the thing that *built* the tool and becomes a *component inside* the tool. The deterministic parts handle structure and arithmetic; the agent handles interpretation, edge cases, and the fuzzy translation between human intent and clean data.

The tool is the chassis. The agent is the engine. You are no longer shipping a frozen artifact — you are shipping a small harness wrapped around live reasoning.

That is what I mean when I say the agent is the tool.

![A circuit carrying signals from rigid mechanical gears and closed-form math on the left into a glowing neural core on the right](/images/writing/agent_engine.png)

*Closed math and fixed gears on one side, live reasoning on the other — the chassis stays, the engine thinks.*

## Where this earns its keep

The pattern pays off wherever the hard part is interpretation, not calculation:

- A planner that maps requirements to a schedule, where an agent reasons about *this* situation instead of replaying a fixed template.
- An intake form where you type a messy paragraph and an agent turns it into the five clean fields the rest of the tool expects.
- A review step that reads a draft and argues for a change, instead of a checklist that can only tick the boxes it was told about.
- A brainstorming board where the agent does not just hold your ideas but has an opinion about where they belong.

In each case the structure is fixed and trustworthy, and the open-ended part is handed to something that can actually reason about a case it has never seen.

## Where it breaks

This is not free, and pretending it is would make it useless advice.

**Determinism and trust.** An agent may not give the same answer twice. For anything you have to verify, audit, or repeat exactly — money, safety, physics — you want frozen equations, not a fresh opinion. Put the agent where variation is acceptable, not where it is dangerous.

**Cost and latency.** Every agent call costs time and money; a hardcoded rule costs neither. Drop an agent into a hot loop and you have built something slow and expensive to do what a regex could have done. The skill is choosing *which* slot gets the agent, and keeping it to one or two.

**Accountability.** A human still owns the output. The safe shape is *agent proposes, deterministic check disposes*: the agent suggests, the code validates against hard constraints, and a person stays responsible for what ships. That is the same line I drew in [an earlier piece](/writing/ai-wont-replace-engineers-but-it-will-change-how-we-build/) — the tools change, the accountability does not.

**Overkill.** If the problem genuinely fits in equations, equations win. Reaching for an agent because you can is just a more expensive way to be brittle.

## Build for the wave, not the waterline

Here is the part that changed how I build.

A frozen tool is as smart as the day you shipped it. It does not get better; it just gets older. Every improvement has to come from you going back in and rewriting rules.

A tool with an agent in the judgment slot is different. When the underlying model gets smarter, the tool gets smarter — without me touching it. The chassis stays exactly the same. I swap the engine, and the whole thing levels up for free.

That reframes the goal. You are not building for how capable the agent is today. You are building a structure that can ride the curve as it keeps climbing.

The mistake is to look at today's models, decide this is about as good as it gets, and freeze everything into rules to be safe. That locks you to the waterline at the moment you happened to build. The models are not standing still, and tools that can absorb the next jump will pull away from the ones that cannot.

So design the chassis to ride the wave: a stable interface and hard guardrails on the outside, a swappable agent on the inside. Freeze the parts that must never drift. Leave the judgment slot open so it can keep getting better than you are.

## The agent needs a home

There is a catch I kept running into. An agent in the judgment slot cannot live in a chat window. To be a real part of a tool, it needs somewhere to run.

Not just raw compute. A place to develop, to save state between runs, to build and host what it produces, to pull in fresh data and code when it needs them. A server. A home.

This is the unglamorous infrastructure sitting under everything above. A frozen tool can be a single file you email around. A tool with a live agent inside it has to live somewhere — with a URL, a little persistence, and permission to reach out and act.

Once tools have a home, the way we share work changes. You stop sending answers, and you stop sending files. You send a link.

"Here is the tool" becomes a URL to a living thing — one that reasons, remembers a little, and keeps getting better as the model behind it does. That is a different kind of artifact than a document. It is closer to handing someone a small colleague than a spreadsheet.

Less trading static outputs, then. More sharing links to tools we have built, each with an agent inside doing the part that used to need us.

## A rule of thumb

When I am deciding whether a step should be code or an agent, I ask one question:

*Do I need this to repeat exactly, or do I need it to handle a case I did not foresee?*

Freeze what you must repeat exactly and can verify. Delegate what needs judgment and changes every time.

Most useful tools are now a mix of both, and getting that boundary right is the actual engineering. It is the judgment the old article quietly assumed away.

## The part that surprised me

I noticed all of this while building, not while theorizing.

This site was put together by treating an agent as the tool — not asking it for snippets to paste in, but handing it the problem and staying in the loop while it worked. The agent was not upstream of the tool. It *was* the tool.

Once you have felt that, the old question — "should I build a tool for this?" — grows a second half:

"And where inside that tool does the agent belong?"

That second question is where the next round of leverage lives.
