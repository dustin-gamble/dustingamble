---
title: "Ten Books, One Bottleneck"
date: "2026-11-07"
summary: "Seven weeks ago I started one book about drones. Now there are ten. What the method is, what it made, and the part that broke: me."
tags: ["AI", "Agents", "Books", "Drones", "Engineering Judgment"]
draft: false
featured: true
---

![Ink drawing of a production line. Robot arms turn out pages and drone drawings at speed, a review station stamps sheets and sends some back, and the line backs up into a tall queue in front of one engineer reading a single page at a workbench. Three finished books sit on a shelf behind him; seven more wait in a crate.](/images/writing/ten-books-one-bottleneck-line.webp)

*Every station got faster except one.*

In September I started writing a book about designing small drones. I wanted the field guide I wish I'd had when I started: the decisions, the numbers, and the rules of thumb, with their conditions attached.

Seven weeks later there are ten books. Three are on Amazon. The other seven are in progress, each with a print file and a cover.

That sounds like a brag. It isn't. It's the problem I want to write about.

<figure class="essay-covers">
<div class="essay-covers-grid">
<a href="https://gamble.systems/drone-field-guide/"><img src="/images/books/shelf/drone-field-guide.jpg" alt="Drone Field Guide" width="440" height="570" loading="lazy" /></a>
<a href="https://gamble.systems/drone-sketchbook/"><img src="/images/books/shelf/drone-sketchbook.jpg" alt="Drone Sketchbook" width="440" height="570" loading="lazy" /></a>
<a href="https://gamble.systems/drone-mechanisms/"><img src="/images/books/shelf/drone-mechanisms.jpg" alt="Drone Mechanisms" width="440" height="570" loading="lazy" /></a>
<a href="https://gamble.systems/drone-drag/"><img src="/images/books/shelf/drone-drag.jpg" alt="Drone Drag" width="440" height="570" loading="lazy" /></a>
<a href="https://gamble.systems/drone-elsewhere/"><img src="/images/books/shelf/drone-elsewhere.jpg" alt="Drone Elsewhere" width="440" height="570" loading="lazy" /></a>
<a href="https://gamble.systems/drone-assistant/"><img src="/images/books/shelf/drone-assistant.jpg" alt="Drone Assistant" width="440" height="570" loading="lazy" /></a>
<a href="https://gamble.systems/drone-underway/"><img src="/images/books/shelf/drone-underway.jpg" alt="Drone Underway" width="440" height="570" loading="lazy" /></a>
<a href="https://gamble.systems/drone-overland/"><img src="/images/books/shelf/drone-overland.jpg" alt="Drone Overland" width="440" height="570" loading="lazy" /></a>
<a href="https://gamble.systems/drone-small/"><img src="/images/books/shelf/drone-small.jpg" alt="Drone Small" width="440" height="570" loading="lazy" /></a>
<a href="https://gamble.systems/drone-propeller/"><img src="/images/books/shelf/drone-propeller.jpg" alt="Drone Propeller" width="440" height="570" loading="lazy" /></a>
</div>
<figcaption>The ten books, in the order I'm finishing them. The first three are out. Drag is next.</figcaption>
</figure>

## How it works

In February I wrote that you should [build the tool, not just the answer](/writing/build-the-tool-not-just-the-answer/). In May I wrote that [the agent is the tool](/writing/the-agent-is-the-tool/). The books are what happened when I pointed that idea at something big.

Each book is a small production line.

**Rules first.** Every book has a short rules file that the agents read before every session. A few from the drag book:

- Never invent test results. A value nobody has measured says so.
- Figures are generated from data with the source named, never drawn by eye.
- It must not read as AI-written.

Those rules do more work than any prompt I write.

**Makers and checkers are separate.** Agents draft chapters against an outline. For one book I ran twelve drafting agents at once, one per world. An image model draws the plates from written briefs. A different model acts as editor and checks every plate against its brief. It doesn't say "looks off." It says the spring and plunger, the parts that do the work, are about 190 by 70 pixels in a drawing taken up by two flat panels, so the mechanism only reads in the insets. Then it sends the plate back. One plate went to version ten. After that, an outside model audits the whole book, and the technical books get a cross-check against the primary sources.

**The build is the gate.** The print build refuses to run while any plate is still open. Nothing ships on a promise to fix it later.

**I make the calls.** What's true. What I've actually measured. Which laws stay. The chapter list, the cover, the price. And I read the proofs.

Across the ten books that adds up to about 2,700 pages and about 3,500 accepted illustrations. Roughly 790 of those were redrawn or replaced at least once. There are about 1,900 commits behind it.

## It's not really about drones

Ten books in, I noticed the drones were the subject, not the point.

What I'd built is a way to make learning books. It would work the same way on any subject where you can write the rules down, check the facts against sources, and judge a drawing.

The books also stopped being just books. Several come with a companion: the book's laws, decisions and checks, packaged so you can load them into your own AI assistant. You unlock it with something only a reader would know, like a law from the last page. That's the tool idea again. The book is the answer. The companion is the tool.

## What broke

Me.

Think of it as a factory. Every station got faster except one. Drafting is fast. Drawing is fast. Reviewing is fast. Inspection is me, and I didn't get faster.

When the upstream stations speed up and the bottleneck doesn't, you don't get more output. You get a longer queue in front of the bottleneck. Plates waiting for a look. Proofs waiting to be read. Decisions only I can make, on ten books at once.

AI made starting nearly free. Finishing costs exactly what it always did.

So I started more than I could finish. This week it got overwhelming, and I stopped to ask what I was actually doing.

## What I'm changing

The fix is old. Any production engineer would have told me on day one: limit work in progress.

- **One book at a time to the finish.** Drone Drag first, then Drone Elsewhere, then Drone Assistant.
- **Parked means parked.** The other books are on hold, and no new art gets queued for them.
- **Spend judgment on decisions only I can make.** If a machine can check it, a machine checks it. My time goes to what's true, what's measured, and what's worth a reader's time.
- **Write the method down** while I still remember why each rule is there.

## What I'd tell someone trying this

1. Write the rules before the first draft. They outlast every prompt.
2. Keep makers and checkers separate, and make the checker specific.
3. Compute figures from data. Don't let anyone, human or model, draw a chart by eye.
4. Your judgment is the scarce resource. Protect it.
5. Starting is free now. Count what you can finish, not what you can start.

The three finished books are on [gamble.systems](https://gamble.systems/books/). The next one out will be Drag. One at a time.
