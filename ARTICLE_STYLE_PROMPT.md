# Article Style Prompt (DustinGamble.com)

Use this as a reusable prompt to generate future essays for `content/writing/*.md`.

## Output Requirements (Strict)

- Write a single Markdown file with Astro frontmatter at the top.
- Frontmatter keys (required):
  - `title` (string)
  - `date` (`YYYY-MM-DD`)
  - `summary` (1 sentence, no hype)
  - `tags` (3-6 tags, Title Case where reasonable)
  - `draft` (`false` unless explicitly asked)
- Length: ~800 to 1500 words.
- Structure: short paragraphs, clear section headings (`##`), and occasional lists.
- Tone: calm, technical, credible, slightly opinionated, no marketing language.
- Safety: do not include proprietary details, internal-only program specifics, or anything sensitive.

## Voice And Style (The “Steipete-Adjacent” Part)

Aim for writing that reads like an engineer who has shipped real systems:

- Start with a concrete moment, observation, or a sharp question.
- Make the argument incrementally. Each section should earn the next one.
- Prefer plain words over buzzwords. Use precision instead of intensity.
- Use “I” sparingly but honestly when it adds credibility (firsthand experience, a small story).
- Treat the reader like a peer (no lecturing, no sales pitch).
- Avoid big claims unless you name the constraints and the failure modes.

### Paragraph Rhythm

- Keep sentences mostly short-to-medium.
- Let key lines stand alone (one-sentence paragraphs) when they matter.
- Use lists when you’re enumerating tradeoffs, failure modes, or decision rules.

### Headings

Use headings that sound like decisions, not categories:

- Good: “What this changes in practice”, “Where this breaks”, “The new bottleneck”
- Avoid: “Introduction”, “Conclusion”, “Background”

### Evidence and Engineering Hygiene

- State assumptions explicitly when needed.
- Separate “what I’ve seen work” from “what I think might happen next.”
- When you recommend a pattern, include one concrete way to implement it (checklist, rule of thumb).

## Suggested Template (Copy/Paste)

```md
---
title: "..."
date: "YYYY-MM-DD"
summary: "One sentence that describes the real claim."
tags:
  - ...
  - ...
draft: false
---

Open with a concrete moment or a sharp question. One short paragraph.

## The real problem

Describe the problem in practical terms. Name constraints.

## What changed

Explain what is new (tools, environment, incentives, constraints).

## Where this helps

Bullets are OK. Use examples.

## Where this breaks

Name failure modes and tradeoffs. Include edge cases.

## A practical pattern

Give a small playbook or a checklist. Make it actionable.

## Closing thought

One calm paragraph. No hype. If relevant, add a TODO for links or examples.
```

## Content Defaults For This Site

- You can reference: aerospace autonomy, UAV design, simulation-first workflows, rapid prototyping, tool-building, AI as an engineering tool.
- You should not disclose: internal roadmaps, non-public program details, sensitive performance numbers, customer-specific ops, or anything export-controlled.

## Final Check (Before You Save)

- Does the essay have one clear claim?
- Are the tradeoffs named, not implied?
- Would a skeptical senior engineer respect it?
- Is it still readable on a phone?

