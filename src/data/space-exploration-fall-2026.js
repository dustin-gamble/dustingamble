// Troop 308 Space Exploration merit badge series — Fall 2026.
// Three Monday-night 45-minute blocks (Aug 31, Sep 28, Oct 26) plus a Saturday
// launch day. Rendered by src/pages/scouts/space-exploration-fall-2026.astro.
//
// Requirement IDs referenced here match the `requirements` array on the
// space-exploration badge in src/lib/merit-badges.js.

export const series = {
    slug: "space-exploration-fall-2026",
    title: "Space Exploration — Fall 2026 Series",
    kicker: "Scouting America · Troop 308 · Merit Badge Series",
    badgeSlug: "space-exploration",
    summary:
        "Five Monday-night 45-minute blocks and a Saturday launch day the weekend before Thanksgiving, taking a Scout from “why do we go to space” to a rocket they built, predicted, flew, recovered, and analyzed. Every minute is mapped to a requirement, and the badge gets signed off with paperwork on a table — not on a tailgate in the wind.",
    groundRules: [
        "45 minutes per Monday. The meeting plan already owns 0:00–0:30 and 1:15–1:30 — this series takes 0:30–1:15 and gives it back on time.",
        "The troop buys every rocket kit. Scouts earn theirs by clearing the flight-readiness gate — no family pays for anything.",
        "Planning for 6–10 Scouts. One launch pad and one shared altimeter is enough at that size.",
        "Requirement 3 cannot be finished in a church parking lot on a Monday night. Launch day is the deliverable — the Mondays exist to make it safe and worth doing.",
        "Five Mondays, not seven. Scouts build at home when the kit arrives, which buys back two whole nights; the November 16 meeting runs a help desk for anyone whose build went sideways. The night that stays is the post-flight one, where the data actually gets analyzed and the badge actually gets signed.",
        "The Telemetry Rocket is NOT running this year. One counselor cannot carry eight requirements, a build, a range and a firmware project at once — and without a 1,000 ft field the big rocket cannot fly anyway. The Estes altimeter does the same teaching job for the Prediction Cup.",
    ],
    counselorFacts: [
        "5 Mondays × 45 min",
        "Launch day Sat Nov 21",
        "6–10 Scouts",
        "Reqs 1–8 covered",
        "Free to families — troop buys the kits",
        "Altimeter in every rocket",
    ],
    calendarNote:
        "Nov 16 currently carries Cooking or Camping in the troop meeting plan, and Nov 23 is already scheduled as a short gratitude-and-catch-up night. Space Exploration takes the merit badge block on both; the rank-focused first 30 minutes and last 15 stay exactly as written. Nov 23 is the natural debrief slot precisely because it was already meant to be a light night. Confirm both swaps with whoever owns the troop calendar.",
};

// ---------------------------------------------------------------------------
// Telemetry Rocket as a group project — the parallel track
// ---------------------------------------------------------------------------

export const telemetryTrack = {
    status: "deferred",
    statusLabel: "Not running in Fall 2026 — parked as a future project",
    statusWhy: [
        "One counselor cannot run eight requirements, a build, a range and a firmware project in the same term. Something gets done badly, and it would be the firmware — which is the part with no fallback.",
        "The telemetry payload is about 120 g and needs the Lil' Spite airframe on an E or F motor. NAR sets a 1,000 ft minimum site dimension for E and F. A college helipad apron almost certainly does not give you 1,000 ft clear in every direction, so the big rocket has nowhere to fly.",
        "Those two facts are really one fact. Without a 1,000 ft field there is no big rocket; without the big rocket there is nothing for the T-Beam to fly in. Cutting it is the honest call, not a retreat.",
    ],
    replacement:
        "Nothing is lost from the teaching. The Estes altimeter fits the Cosmic Cargo's payload bay, flies in every Scout's own rocket, and produces the one number the whole course is built around — measured apogee against the altitude they predicted and sealed. That is the Prediction Cup intact, with real instrument data, and zero firmware between a Scout and their result.",
    ifYouRunItAnyway:
        "Everything below still stands and is worth keeping for a future year — ideally as its own project with its own adult, running in parallel rather than on top of a merit badge course. If you do pick it up, the honest minimum is a second adult who owns the electronics and a field with 1,000 ft in every direction.",
    intro:
        "Running the Telemetry Rocket capstone as a group is the right call — it is much better as a crew project than as a solo one, because a real mission has a flight software person and a ground station person and they have to talk to each other. But be clear-eyed about the arithmetic before you promise it to the Scouts.",
    theMath: {
        headline: "Even five Mondays cannot contain this project.",
        detail:
            "The capstone as scoped is eight 90-minute sessions plus a launch day — about 14 hours. Five 45-minute Monday blocks is 3 hours 45 minutes, and every one of those minutes is committed to requirements 1 through 8 and a flight readiness review. There is also a practical problem: firmware debugging in 45-minute chunks is miserable. Half the block goes to laptops booting and cables being found, and you stop right when the crew has momentum.",
        answer:
            "So: the badge runs on Monday nights, and the telemetry build runs as three Saturday-morning crew sessions where three uninterrupted hours actually let people finish a thought. Mondays carry short checkpoints — enough to keep the whole troop bought in and to show the crew's progress to Scouts who aren't on the build. What the extended calendar does buy the crew is better spacing: five weeks between sessions 2 and 3, and session 3 landing exactly one week before launch instead of the night before.",
    },
    crewRoles: [
        {
            role: "Flight Software",
            n: "2 Scouts",
            owns: "T-Beam firmware. Read GPS and sensors, build the telemetry packet, transmit over LoRa.",
            stages: "Stages 1–3 of the six-stage build",
            badges: "AI 6, AI 7a, Programming 5a",
        },
        {
            role: "Ground Station",
            n: "2 Scouts",
            owns: "Heltec receiver firmware and the laptop side. Parse packets, log clean CSV, don't drop data.",
            stages: "Stages 4–5",
            badges: "AI 6, Programming 5b",
        },
        {
            role: "Payload Integration",
            n: "2 Scouts",
            owns: "The sled, the battery, the mounting, the mass and CG budget. Makes the electronics survive 15 g and land intact.",
            stages: "Runs parallel to 1–5",
            badges: "Engineering 3, Engineering 5",
        },
        {
            role: "Mission Ops & Data",
            n: "2–4 Scouts",
            owns: "Prediction sheet, flight cards, range calls on launch day, and the post-flight analysis that compares predicted to measured.",
            stages: "Stage 6",
            badges: "Engineering 4, Aviation 1e, Aviation 1h",
        },
    ],
    rolesNote:
        "Rotate one Scout between Flight Software and Ground Station halfway through. The bug that teaches the most is always at the interface between the two — the packet one side sends and the other side can't parse. Manufacture that moment on purpose.",
    sessions: [
        {
            when: "Saturday, September 19 · 3 hours",
            title: "Crew session 1 — Bench day",
            what: [
                "Assign crew roles and write them on a whiteboard that stays up.",
                "Unbox both T-Beams. One is the BENCH unit and never flies. One is the FLIGHT unit and never gets experimented on. Label them with tape, today.",
                "Toolchain: everyone installs the IDE and blinks an LED on the bench unit. Nobody moves on until every laptop in the room has compiled and flashed something.",
                "Stage 1: read GPS and sensor values, print to serial. AI-assisted, counselor in the room, every prompt logged.",
            ],
            gotcha: "Budget half this session for laptop and driver problems. It is always the drivers. Have two known-good USB-C cables — data cables, not charge-only.",
        },
        {
            when: "Saturday, October 17 · 3 hours",
            title: "Crew session 2 — Getting a packet across the room",
            what: [
                "Stage 2: package the readings into one comma-separated line. Decide the fields as a crew and write the format on the whiteboard — this is the interface contract.",
                "Stage 3 and 4: LoRa transmit on the T-Beam, receive on the Heltec. This is the moment the project becomes real.",
                "Stage 5: log to CSV on the laptop. Open it in a spreadsheet before anybody goes home.",
                "Range test: walk the T-Beam a quarter mile down the road and confirm packets still arrive. Note where they stop.",
            ],
            gotcha: "The interface bug will happen here. Let it. Then have the two crews debug it together at the whiteboard instead of fixing it for them.",
        },
        {
            when: "Saturday, November 14 · 3 hours",
            title: "Crew session 3 — Integration and flight readiness",
            what: [
                "Build the Lil' Spite airframe, or finish it if the counselor started it. Two hours of assembly, so pre-build it if the schedule is tight.",
                "Payload integration: sled, battery, mounting. Weigh everything. Find the CG with a string and mark it.",
                "Re-run the simulator with the REAL loaded mass. Pick the motor delay deliberately — this is the decision that E16-4 vs E16-6 comes down to.",
                "Shake test: tape it up, shake it hard, see what falls off. Whatever falls off on the bench would have fallen off at 15 g.",
                "Full dress rehearsal: power up, acquire GPS lock, transmit, receive, log — in the sequence and with the timing you'll use on the field.",
            ],
            gotcha: "GPS lock takes minutes from cold, outdoors, with sky view. Practice the countdown with a real lock time or you'll be standing at the pad watching a blinking LED with ten Scouts waiting.",
        },
    ],
    checkpoints: [
        { meeting: 1, minutes: "5 min", what: "Recruit the crew. Show the T-Beam and the Heltec, explain that this rocket carries a payload that talks to a laptop, and take names. Announce the September 19 crew session." },
        { meeting: 2, minutes: "5 min", what: "Live packet demo across the meeting room. One Scout holds the T-Beam at the back wall, the CSV fills up on the projector. This is the payoff for requirement 4d." },
        { meeting: 4, minutes: "informal", what: "Build night. The crew builds the Lil' Spite airframe at a fifth station while everyone else builds their own — same room, same night, visibly bigger rocket. Great recruiting for anyone who passed the first time." },
        { meeting: 6, minutes: "5 min", what: "Crew briefs the troop at the Flight Readiness Review: packet format, range-test result, measured payload mass, and which motor delay they picked and why. Three Scouts, three minutes." },
        { meeting: 7, minutes: "10 min", what: "Flight report at the debrief. Altitude trace, GPS track, and the three-way comparison of telemetry vs altimeter vs simulator. This is the crew's deliverable and it should feel like one." },
    ],
    badgeNote:
        "Because it's a group project, the crew roles do double duty: the same build satisfies the Artificial Intelligence badge's project requirement, gives Programming a two-environment req 5, feeds Engineering a full design cycle, and hands Aviation real flight data. Scouts on the crew should know that going in — it changes how seriously they keep their prompt logs and their notebooks.",
    honestRisk:
        "The most likely failure mode is not the code. It is that three Saturdays in the fall compete with soccer, band, and campouts, and the crew shows up half-strength. Fix it by naming a primary and a backup for every role at session 1, and by making the bench unit available to take home between sessions.",
};

// ---------------------------------------------------------------------------
// Critical path
// ---------------------------------------------------------------------------

export const timeline = [
    {
        window: "Now – Mon Aug 17",
        owner: "Counselor",
        what: "Place the troop order (pad, controller, altimeter, spare kits, spare motors, wadding). This has to ship before Aug 31 so Meeting 1 can show real hardware.",
        risk: "high",
    },
    {
        window: "Now – Fri Aug 21",
        owner: "Counselor",
        what: "Open the launch-site conversation: Central Coast Model Rocket Club / NAR contact, then Camp San Luis Obispo range access. Ask what insurance certificate they need and who it must name. The Thanksgiving-weekend date gives you slack you did not have before — use it, do not spend it.",
        risk: "high",
    },
    {
        window: "Fri Aug 21",
        owner: "Counselor",
        what: "Send the guest-speaker asks for the Nov 23 debrief slot. Cal Poly CubeSat Lab and CPSS both need ~4–6 weeks; Vandenberg Public Affairs needs 6–8. Nov 23 is the only night with real slack, and by then the Scouts have flown a rocket and will ask far better questions. Nothing on that night depends on the speaker, so a cancellation costs nothing.",
        risk: "med",
    },
    {
        window: "Fri Aug 28",
        owner: "Counselor",
        what: "Confirm the launch site. Measure the smallest clear dimension yourself — you need 400 ft for the C6-5 flights — and get written confirmation that no aircraft are scheduled that day.",
        risk: "high",
    },
    {
        window: "Mon Aug 31",
        owner: "Scouts",
        what: "Meeting 1 — Why We Go. Reqs 1a–d covered live. Req 2 and req 8 assigned. Flight-readiness gate published.",
        risk: "none",
    },
    {
        window: "Fri Sep 4",
        owner: "Counselor",
        what: "Place the kit order — one Cosmic Cargo + B6-4 pack + C6-5 pack per Scout, plus two or three spare sets. It has to be in hand by Sep 28, which is handout night.",
        risk: "high",
    },
    {
        window: "Mon Sep 28",
        owner: "Scouts",
        what: "Meeting 2 — How Rockets Work. Reqs 3(a–i) and 4a–d covered live. Trading cards due. Competition rules published.",
        risk: "none",
    },
    {
        window: "Mon Oct 26",
        owner: "Scouts",
        what: "Meeting 3 — Missions and Bases. Reqs 5 and 6 covered live, then the sample-return cards (5c) and the base-design charrette (req 7).",
        risk: "none",
    },
    {
        window: "Mon Nov 16",
        owner: "Scouts",
        what: "Meeting 4 — Mission Control and Flight Readiness Review. Every rocket inspected, every prediction sealed, every Scout passes the safety readback. Anyone who fails inspection has five days to fix it.",
        risk: "none",
    },
    {
        window: "Sat Nov 21",
        owner: "Everyone",
        what: "LAUNCH DAY. Req 3 completed, altimeters read out, Prediction Cup scored. Backup Sat Nov 28, second backup Sat Dec 5.",
        risk: "med",
    },
    {
        window: "Mon Nov 23",
        owner: "Scouts",
        what: "Meeting 5 — Post-flight debrief. Predicted vs measured, anomaly write-ups, awards, and badge sign-off with the paperwork on a table. Thanksgiving week was already a light night in the troop plan, which is exactly why this fits.",
        risk: "none",
    },
];

// ---------------------------------------------------------------------------
// Slide decks
// ---------------------------------------------------------------------------

export const decks = {
    "why-we-go": {
        id: "why-we-go",
        title: "Deck 1 — Why We Go",
        meeting: "Monday, August 31, 2026",
        runtime: "~22 min of slides inside a 45-min block",
        slides: [
            {
                type: "title",
                kicker: "Space Exploration Merit Badge · Night 1 of 5",
                image: "bootprint",
                heading: "Why We Go",
                sub: "Requirement 1 — the purpose of space exploration",
                notes:
                    "Open standing up, no slides for the first 60 seconds. Ask: 'Name one thing in this room that exists because somebody went to space.' Take three answers. Do not correct wrong ones yet — the benefits slide will do it for you.",
            },
            {
                type: "prompt",
                heading: "Warm-up",
                image: "bootprint",
                question: "Space is expensive and dangerous. Give me one honest reason a country spends money on it anyway.",
                art: "four-reasons",
                answer:
                    "There are four families of answers, and the badge wants all four: history and competition, specific scientific knowledge, benefits back on Earth, and getting along with other countries. That is literally requirement 1a through 1d.",
                notes:
                    "This is the spine of the whole night. Write the four words on the whiteboard — HISTORY / KNOWLEDGE / BENEFITS / COOPERATION — and point at them as you go. Scouts should be able to recite the four at the end.",
            },
            {
                type: "bullets",
                heading: "1a — Historical reasons",
                image: "apollo-crew",
                intro: "It did not start as science. It started as a race, and the science came along for the ride.",
                bullets: [
                    "1957 — the Soviet Union puts Sputnik in orbit. A metal ball that beeps, and the United States realises it is second.",
                    "1961 — Gagarin orbits the Earth. Kennedy responds by picking a goal the US could plausibly win: the Moon.",
                    "1962–69 — Apollo. At its peak it took 4% of the entire federal budget and about 400,000 people.",
                    "1975 — Apollo–Soyuz. The two rivals dock in orbit and shake hands, and the character of spaceflight changes.",
                ],
                note: "Be honest with them about the motive. Scouts find 'it was a Cold War contest and we got the science anyway' far more interesting than a tidy story about curiosity.",
                notes:
                    "Ask: 'What would make a country spend 4% of everything it had on this?' Steer to fear and prestige. Then the good question — was it worth it? There is no settled answer and they should know that. The photo on this slide is a real Apollo crew standing in front of the rocket that would carry them.",
            },
            {
                type: "bullets",
                heading: "1b — Immediate goals: what are we actually trying to learn?",
                image: "perseverance",
                intro: "Not 'explore space.' Name the question the mission is built to answer.",
                bullets: [
                    "Was Mars ever habitable, and is there preserved evidence of it? — Perseverance, sample caching",
                    "What is the Moon's south pole made of, and is there usable water ice? — Artemis",
                    "What is the interior of an asteroid like, and can we move one? — OSIRIS-REx, DART",
                    "How does the human body break down over years in microgravity? — ISS",
                    "What does the universe look like before the first galaxies formed? — JWST",
                ],
                note:
                    "Every one of these is a question with a yes/no or a number for an answer. That is what 'immediate goal in terms of specific knowledge' means in the requirement.",
                notes:
                    "Ask a Scout to pick one and say what a disappointing result would look like. Engineers plan for the boring answer. This is a two-minute slide — do not let it become ten.",
            },
            {
                type: "video",
                heading: "1c — Benefits on Earth",
                youtubeId: "z-bTkxza4I4",
                channel: "Museum of Science, Boston",
                videoTitle: "Space Exploration's Surprising Earthly Benefits!",
                play: "Short — play it straight through, then the second one.",
                notes:
                    "Both of these are shorts, so they cost you almost nothing. After the second one, kill the myth: Tang, Velcro, and Teflon are NOT NASA inventions. The real ones are less famous and more useful — memory foam, cordless tool motors, scratch-resistant lens coatings, water filtration, LED wound therapy, GPS, weather and crop imaging, and the CMOS camera sensor in every phone in this room.",
            },
            {
                type: "twocol",
                heading: "1c — The myth and the reality",
                image: "iss",
                art: "spinoff",
                left: {
                    h: "Did NOT come from NASA",
                    items: ["Tang (1957, pre-NASA)", "Velcro (Swiss, 1941)", "Teflon (DuPont, 1938)", "Microwave ovens"],
                },
                right: {
                    h: "Actually did",
                    items: [
                        "The CMOS image sensor in your phone (JPL)",
                        "Memory foam (Ames, for crash protection)",
                        "Cordless tool motors (Apollo drill)",
                        "Scratch-resistant lens coating",
                        "Modern water filtration and GPS",
                    ],
                },
                notes:
                    "Scouts love catching adults being wrong, so let them catch the world being wrong. This slide is the one they will repeat at dinner. That is how you know the requirement stuck.",
            },
            {
                type: "bullets",
                heading: "1d — International cooperation",
                image: "iss",
                intro: "The clearest example is over your head roughly every 90 minutes.",
                bullets: [
                    "American, Russian, Japanese, European and Canadian modules, bolted together and continuously crewed since November 2000.",
                    "It has stayed crewed through wars, sanctions and diplomatic freezes on the ground.",
                    "Nobody can afford it alone — and for years the only ride home was on the other country's spacecraft.",
                    "Fifteen countries had to agree on a common docking standard, a common language for procedures, and who fixes what.",
                ],
                note: "Ask the real question: why would countries that do not get along keep flying together? The answer is not friendship. It is that the alternative is not flying at all.",
                notes:
                    "Use Spot the Station — the ISS is genuinely visible from San Luis Obispo and knowing you can walk outside and watch it go over changes how real it feels. Look up the next pass before the meeting and tell them the time.",
            },
            {
                type: "bullets",
                heading: "Requirement 2 — the space pioneer card",
                image: "katherine-johnson",
                intro: "This is not something I made up — it is requirement 2, written into the badge: \u201cDesign a collector\u2019s card, with a picture on the front and information on the back, about your favorite space pioneer.\u201d Think a baseball card, but the person on it changed spaceflight.",
                bullets: [
                    "A \u201cspace pioneer\u201d is anyone who did something first, or made a first possible — engineers, mathematicians, designers and flight controllers count every bit as much as astronauts.",
                    "Pick tonight, on the sign-up sheet. No duplicates — first Scout to claim a name owns it.",
                    "Front: a picture you drew, printed, or cut out. Back: who they were, what they actually did, why it mattered, and one thing that surprised you.",
                    "Index card, cardstock, or printed — your call. Hand-drawn scores exactly the same as printed. This is a 30-minute job, not a project.",
                    "The catch is the second half of the requirement: you also have to talk with me about four OTHER pioneers. So pay attention to your patrol\u2019s cards — that is where the other four come from.",
                ],
                note:
                    "Stuck for a name? The Scout page has 26 pioneers, each with a link straight to a real biography — and the official online guide has its own twenty. Nobody has an excuse to sit there blank.",
                notes:
                    "Pass the clipboard during this slide, not after. If you wait until the end of the meeting, half of them will be out the door. Have the pioneer bench printed on the back of the sign-up sheet.",
            },
            {
                type: "bullets",
                heading: "The flight-readiness gate",
                image: "rocket-on-pad",
                art: "gate",
                intro: "You do not get to order a rocket until you have earned it. Four things:",
                bullets: [
                    "1. Tonight's requirement 1 discussion — done, you're sitting here.",
                    "2. Your space pioneer card turned in (req 2).",
                    "3. Pass the NAR Model Rocket Safety Code quiz — 8 out of 10, retakes allowed.",
                    "4. Your declared mission objective for launch #2, and a signed launch-day permission slip.",
                ],
                note: "Clear all four and I hand you your kit on September 28. The troop is buying — this costs your family nothing.",
                notes:
                    "Say the last line plainly — several of these families will be quietly relieved, and one of them needed to hear it. Then be equally plain that the gate is still real: the kit is free but it is earned. Hand out the permission slip and the safety code printout as they leave.",
            },
            {
                type: "title",
                kicker: "Next up · Monday, September 28",
                heading: "How Rockets Work",
                art: "third-law",
                sub: "Bring your pioneer card. Bring your rocket kit if it's arrived.",
                notes:
                    "Close by holding up the launch pad and the altimeter. Physical objects on the table at the end of night 1 are worth more than any slide. Tell them the altimeter is what scores the competition.",
            },
        ],
    },

    "how-rockets-work": {
        id: "how-rockets-work",
        title: "Deck 2 — How Rockets Work",
        meeting: "Monday, September 28, 2026",
        runtime: "~20 min of slides + 20 min hands-on",
        slides: [
            {
                type: "title",
                kicker: "Space Exploration Merit Badge · Night 2 of 5",
                image: "model-liftoff",
                heading: "How Rockets Work",
                sub: "Requirements 3 (parts) and 4 (principles of space flight)",
                notes:
                    "Have a fully built Cosmic Cargo and a spent motor on the table before anyone sits down. Tonight is the most hands-on night of the three — talk less, hand things around more.",
            },
            {
                type: "parts",
                heading: "Requirement 3 — name every part",
                intro: "Nine parts. The requirement says identify AND explain — so for each one you owe me what it does, not just what it's called.",
                notes:
                    "Run this as a relay, not a lecture. Two patrols, one built rocket each, a stack of nine labels. First patrol to place all nine correctly AND explain three of them wins. Then swap which three they have to explain. Every Scout ends up saying at least one out loud, which is what 'identify and explain' actually requires.",
            },
            {
                type: "bullets",
                heading: "4a — Action and reaction",
                image: "engine-test",
                art: "third-law",
                intro: "Newton's third law is the whole reason a rocket works in vacuum.",
                bullets: [
                    "Demo: balloon on a string across the room. Air goes back, balloon goes forward.",
                    "The common wrong answer: 'the exhaust pushes against the air.' It does not. There is no air in space and rockets work better there.",
                    "The right answer: the engine throws mass backward, hard. The reaction throws the rocket forward. Push on the propellant, the propellant pushes on you.",
                    "Skateboard version: stand on a skateboard, throw a medicine ball. You move. That is a rocket.",
                ],
                note: "Requirement 4 says 'discuss AND demonstrate.' The balloon is the demonstration. Do not skip it to save four minutes.",
                notes:
                    "Fishing line, a drinking straw, tape, and a long balloon. Set it up before the meeting. Let a younger Scout release it — the one who does will remember the third law forever.",
            },
            {
                type: "flightsim",
                sim: "launch",
                heading: "Fly it before you fly it",
                intro:
                    "Same airframe every Scout is building. Change the motor and the payload and watch what happens to thrust-to-weight — the number that decides whether it goes straight up or corkscrews off the rod.",
                notes:
                    "Run this on the projector with the room calling out predictions before you press Launch. Best sequence: C6-5 with no payload (clean), then drag the payload slider to 60 g and let them watch the thrust-to-weight fall under 5:1 and the verdict turn red. That is the whole 'why can't I just put my GoPro on it' conversation, answered in ten seconds.",
            },
            {
                type: "bullets",
                heading: "4b — How rocket engines work",
                image: "engine-test",
                intro: "Everything an engine does comes from one sentence: throw mass backwards, hard.",
                bullets: [
                    "Burn propellant to make a large volume of very hot gas in a small space.",
                    "Let it out through one hole — the nozzle throat — so it leaves fast and in one direction.",
                    "The reaction to throwing that gas backwards is what pushes the rocket forward.",
                    "No air needed. Rockets work better in vacuum, because there is nothing pushing back on the exhaust.",
                ],
                note: "A jet engine breathes air. A rocket carries its own oxidiser, which is why it works on the Moon and a jet does not.",
                notes:
                    "Pass a SPENT motor round while you say this — never a live one. Then go straight to the next slide, which is the cutaway, and let them find the four stages themselves. The cutaway does the work here; this slide is just the sentence you want them to leave with.",
            },
            {
                type: "motor",
                heading: "4b — Inside the motor, and what C6-5 means",
                intro:
                    "One cardboard tube does four jobs in sequence. Tap each stage — and notice that the two numbers in the motor code are two of those four jobs.",
                notes:
                    "Walk the four stages in order with a SPENT motor in your other hand so they can see the real thing next to the diagram. Then make them say the code back: 'letter is impulse, first number is thrust, second number is delay.' If they leave knowing only one thing tonight, this is the one.",
            },
            {
                type: "flightsim",
                sim: "recovery",
                heading: "Why the delay number matters",
                intro:
                    "The delay decides when the chute comes out. Drag it away from apogee in either direction and watch what happens to the rocket — and to your time aloft.",
                notes:
                    "Do this as a challenge, not a demo. 'Who can get the longest time aloft without shredding the chute?' Let three Scouts come up and try. They will discover on their own that ejection has to happen within about a second of apogee, and that a streamer keeps it close while a big chute walks away downwind. That discovery is worth more than you telling them, and it directly sets up two of the launch-day awards.",
            },
            {
                type: "calculator",
                heading: "Predict your flight",
                image: "wind-tunnel-model",
                art: "predicted-vs-measured",
                intro:
                    "Open the rocket calculator on the merit badge site, pick your airframe and motor, and write down your predicted apogee. That number goes on your competition card and you cannot change it after launch day starts.",
                notes:
                    "Run one live on the projector first — Cosmic Cargo on a B6-4, then on a C6-5. Ask them to predict which is higher and by how much before you press launch. Then let them do their own on phones. Sealed predictions are what make the competition an engineering contest instead of a spending contest.",
            },
            {
                type: "video",
                heading: "4c — How satellites stay in orbit",
                youtubeId: "IC1JQu9xGHQ",
                channel: "SciShow Space",
                videoTitle: "How Do Satellites Get & Stay in Orbit?",
                play: "Play through, ~4 min.",
                notes:
                    "The line that makes it click: orbit is not 'being far away from gravity,' it is falling and missing. Newton's cannonball. Fire it fast enough horizontally and the ground curves away as fast as you fall. The ISS is in about 90% of Earth's surface gravity — the crew is falling, not weightless.",
            },
            {
                type: "orbitsim",
                sim: "ascent",
                heading: "4c — Orbit is sideways, not up",
                intro:
                    "Launch it yourself. Straight up and it falls straight back, no matter how much fuel you burn. The only thing that puts you in orbit is horizontal speed — about 7.8 km/s.",
                notes:
                    "The killer demo, and it only works if you change ONE thing: leave Δv at 9.8 and drag pitch-over up to 60 km, so the rocket goes almost straight up. It climbs far higher than the default — and still comes straight back down, suborbital. Then drag pitch-over back to 12 km with exactly the same fuel and it settles into a clean orbit. Same Δv, opposite outcome. That is the single hardest idea in requirement 4c and the surprise does the teaching better than you can.",
            },
            {
                type: "missioncontrol",
                heading: "4d — How the pictures get home",
                image: "dsn-dish",
                intro:
                    "A camera on Mars is useless without the other five-sixths of the system. Tap any step: the top row is our rocket, and the same step on a planetary mission is underneath.",
                notes:
                    "Kill the myth first: there is no live video from Mars. Light takes 3 to 22 minutes each way depending on where both planets are. Then walk the six steps and point out that our rocket does every single one of them — the only difference is the size of the dish. If the T-Beam and Heltec are working by now, transmit one live packet across the room and show the CSV line appear on the laptop. That demo is worth the whole night.",
            },
            {
                type: "bullets",
                heading: "Before you leave",
                art: "checklist",
                bullets: [
                    "Pioneer card in the box (req 2). If it's not in the box, it isn't done.",
                    "Rocket kit on the table for inspection — sealed is fine, I just need to see it exists.",
                    "Predicted apogee written on your competition card and initialed by me.",
                    "Rocket built and painted before Monday, November 16. Bring it that night for inspection — that is the last time I see it before launch day.",
                    "Competition rules are on the site tonight. Read them — the prize is not for flying highest.",
                ],
                notes:
                    "Say 'the prize is not for flying highest' and then stop talking. Let them ask. Tell them it's for predicting best. That reframe is the most valuable thing in the entire series.",
            },
        ],
    },

    missions: {
        id: "missions",
        title: "Deck 3 — Missions",
        meeting: "Monday, October 26, 2026",
        runtime: "~30 min of slides + discussion in a 45-min block",
        slides: [
            {
                type: "title",
                kicker: "Space Exploration Merit Badge · Night 3 of 5",
                image: "voyager",
                heading: "Missions",
                sub: "Requirements 5 and 6 — robotic vs crewed, and one vehicle in real detail",
                notes:
                    "This night used to be crammed with requirement 7 as well. It isn't anymore, so slow down and let the comparison discussion breathe — the robotic-vs-crewed argument is the best conversation in the whole badge and it needs room to be an argument.",
            },
            {
                type: "bullets",
                heading: "Requirement 5 — pick TWO",
                image: "voyager",
                art: "timeline-series",
                intro: "You only have to do two of these three. Most Scouts should take 5a and 5c.",
                bullets: [
                    "5a — Discuss one robotic mission and one historic crewed mission with me: discoveries, importance, what we learned.",
                    "5b — Build a blog, website, slide show, or scrapbook about a current planetary mission.",
                    "5c — Design a robotic sample-return mission to a planet, moon, comet, or asteroid, and show how it survives that environment.",
                ],
                note: "5a we do tonight, out loud, as a group. 5c you do on your own card, later tonight — it is a separate requirement from the base, and it is a robot, not a place people live.",
                notes:
                    "Steer them to 5a + 5c. 5b sounds fun and then becomes a project nobody finishes. If a Scout is genuinely a builder, let them take 5b — but get a due date in writing tonight.",
            },
            {
                type: "video",
                heading: "5a — A robotic mission: Voyager",
                youtubeId: "uJpJ79AxrzI",
                channel: "NASA Jet Propulsion Laboratory",
                videoTitle: "Voyagers' Mission to the Outer Solar System (1977 Vintage Video)",
                play: "Play 2–3 min of the vintage footage.",
                notes:
                    "The hook: this was designed with less computing power than a modern key fob, launched in 1977, and both spacecraft are still transmitting from interstellar space. The Grand Tour alignment that let one probe hit four planets happens roughly every 175 years. They got the window.",
                backup: {
                    label: "Modern robotic alternative — great animation",
                    youtubeId: "0-oQRSViZQE",
                    channel: "Jared Owen",
                    videoTitle: "How does a Mars Rover work? (Perseverance)",
                },
            },
            {
                type: "video",
                heading: "5a — A crewed mission: Apollo",
                youtubeId: "jUW_1XlrWmg",
                channel: "S3 | Science, Startups, & Stories",
                videoTitle: "Putting Man on The Moon in 11 Years | The Apollo Program",
                play: "Play 3–4 min.",
                notes:
                    "Compare and contrast is the requirement. Robotic: cheap, patient, expendable, no lunch required, decades of operation. Crewed: expensive, fragile, slow, and irreplaceable at improvising when something breaks — Apollo 13 is the argument for people.",
                backup: {
                    label: "Modern crewed alternative",
                    youtubeId: "1gmvUPTdoP4",
                    channel: "C-SPAN",
                    videoTitle: "\"Let's light this candle.\" — NASA SpaceX Crew Dragon Launch",
                },
            },
            {
                type: "orbitsim",
                sim: "moon",
                heading: "Flying Apollo's trajectory yourself",
                intro:
                    "You are in a 300 km orbit. One burn stretches that circle out to the Moon — but the Moon is moving at a kilometre a second, so you have to aim at where it will be in three days, not where it is now.",
                notes:
                    "Start with the lead angle deliberately wrong — set it to 10° and burn. The path reaches the Moon's distance and sails through empty space, because the Moon has not arrived yet. Then walk the lead angle up until you get an encounter. This is the single best five minutes you can spend on why Apollo launches had a narrow window: miss the window and the Moon simply is not there. Ask: 'what happens if the engine fails halfway?' — that is Apollo 13, and the answer is the free-return trajectory.",
            },
            {
                type: "video",
                heading: "Requirement 6 — pick ONE: shuttle or ISS",
                image: "shuttle-launch",
                youtubeId: "w4FCkbPykdQ",
                channel: "Real Engineering",
                videoTitle: "How The Space Shuttle Worked | Full Documentary",
                play: "Clip only — 4 min from the launch-sequence section. Do not start it at 0:00 and hope.",
                notes:
                    "Requirement 6 wants purpose, operation, AND components. For the shuttle: orbiter, external tank, two solid rocket boosters, three main engines, payload bay, robotic arm. For the ISS: pressurized modules, truss, solar arrays, radiators, docking ports, life support. Have Scouts pick one and give you all three parts of the answer.",
                backup: {
                    label: "If you'd rather do ISS — see Spot the Station in the resources",
                    youtubeId: "_v7YgDum2Sg",
                    channel: "Jared Owen",
                    videoTitle: "How does the Soyuz Launch work? (and Reentry)",
                },
            },
            {
                type: "prompt",
                heading: "The argument worth having",
                question: "We could send ten robots to Mars for the price of one crewed landing. So why send people at all?",
                image: "apollo-crew",
                art: "robotic-vs-crewed",
                answer:
                    "There is no clean answer and Scouts should leave knowing that. Robots: cheap, patient, expendable, no lunch, decades of operation, no ride home needed. People: expensive, fragile, slow — and unmatched at improvising when something breaks in a way nobody planned for. Apollo 13 is the argument for people. Voyager is the argument against.",
                notes:
                    "Let this run. Take a show of hands, then ask two Scouts on opposite sides to defend it. This is the requirement-5 discussion happening naturally instead of you quizzing them. Do not resolve it — tell them working aerospace engineers still argue about this at lunch.",
            },
            {
                type: "bullets",
                heading: "Requirement 7 — setting up the design problem",
                image: "bootprint",
                intro: "Twelve people have stood on another world. Nobody has ever stayed. Your patrol is going to design the place that lets them stay.",
                bullets: [
                    "Vocabulary you will want: regolith (the dust and broken rock), ISRU (making what you need out of what is already there), radiation shielding, lava tube.",
                    "Lunar dust is glass-sharp and electrostatically clingy. It wrecked Apollo seals and suits in three days.",
                    "A lunar night is 14 Earth days long. Solar panels do not help you for two weeks.",
                    "Water ice sits in craters at the south pole that have not seen sunlight in two billion years. Water is drinking water, breathing oxygen, and rocket fuel.",
                ],
                note: "That bootprint is still there. No wind, no rain, nothing to erase it.",
                notes:
                    "Give them the vocabulary and then get out of the way — the charrette is where requirement 7 actually gets met. The four bullets above are deliberately problems, not facts: each one is something their base design has to answer.",
            },
            {
                type: "steps",
                heading: "5c — Your sample-return mission",
                image: "sample-return-capsule",
                art: "sample-return",
                intro:
                    "Six boxes, five minutes, your own card. A robot that goes somewhere, picks something up, and brings it home. This is NOT the base you design in a minute — that one has people in it. This one is a round trip with nobody aboard.",
                steps: [
                    { n: 1, title: "Name the place", detail: "Europa, Bennu, Phobos, comet 67P, Jezero Crater on Mars. The requirement says name it, so name it." },
                    { n: 2, title: "Say what you are bringing back", detail: "Rock core, ice, dust, gas. Then the hard part — what does having it on Earth answer that a photo could not?" },
                    { n: 3, title: "Say how you grab it", detail: "Drill, scoop, sticky pad, robot arm. Match the tool to the surface. On an asteroid, pushing down pushes you away." },
                    { n: 4, title: "Say how it survives there", detail: "This is the box that gets graded. Name the two things that would kill it, and what you did about each one." },
                    { n: 5, title: "Say how it gets back off the surface", detail: "You need a second rocket, and it has been sitting in the cold the whole way out. Everyone forgets this box." },
                    { n: 6, title: "Say how it lands here without wrecking the sample", detail: "How fast are you coming in, what stops you, and how do you keep the sample clean?" },
                ],
                note: "Requirement 5c in full: name the destination, and show how your design copes with the conditions of THAT environment. Both halves.",
                notes:
                    "Hand the cards out and run this silent and timed — it is the only individual written work in the whole night and it is the cleanest evidence you will get for 5c. Collect them at the end and initial them. Two questions that rescue a stuck Scout: 'what is the worst thing about that place?' and 'so what did you do about it?' Anyone who does not finish takes it home and brings it back on November 16.",
            },
            {
                type: "charrette",
                heading: "Base design charrette",
                image: "bootprint",
                art: "base-subsystems",
                intro:
                    "Patrols pick a location, then design a base and sell it in three minutes. Requirement 7 needs a drawing or model plus a plan for energy, construction, life support, and purpose. With a speaker: 15 minutes of design. Without: 30 minutes, and the drawings get genuinely good.",
                locations: [
                    { place: "Moon — south pole (Shackleton rim)", hook: "Near-permanent sunlight on the crater rim, permanently shadowed water ice a short drive away. Three days from home." },
                    { place: "Mars — Jezero Crater", hook: "Ancient river delta, thin CO₂ atmosphere you can make rocket fuel from. Eight months from help." },
                    { place: "Titan", hook: "Thick atmosphere, liquid methane lakes, −290 °F. The air is thick enough that you could strap on wings and fly." },
                    { place: "Europa", hook: "A liquid ocean under the ice. Also lethal radiation from Jupiter — you live under the ice or you don't live." },
                    { place: "Near-Earth asteroid", hook: "Almost no gravity. Everything has to be anchored, including the Scouts." },
                    { place: "Venus — cloud deck at 50 km", hook: "Earthlike pressure and temperature at altitude. Sulfuric acid rain. Your base is a blimp." },
                ],
                required: [
                    "7a — Source of energy. Solar, nuclear, or something local. Say how much, and say what happens at night.",
                    "7b — How it gets constructed. Shipped whole, inflated, 3D-printed from local dirt, or buried?",
                    "7c — Life support. Air, water, food, waste, radiation — and what fails first.",
                    "7d — Purpose and function. Why does this base exist, and who is paying for it?",
                ],
                notes:
                    "Butcher paper and markers per patrol, visible timer. Each Scout has their own Base Design Sheet with their own drawing, and owns one of the four subsystems out loud during the pitch — that is where the requirement actually gets met for that individual, not when the butcher paper goes up. Two questions to ask every patrol: 'What kills your crew first?' and 'What does this base do that a robot couldn't?' The second one ties straight back to last week's argument.",
            },
            {
                type: "bullets",
                heading: "Before you leave",
                art: "checklist",
                bullets: [
                    "Kits should have arrived by now. If yours hasn't, tell me tonight — not in November when there is no time left to fix it.",
                    "Build it at home at your own pace. Bring it to the November 16 meeting for inspection — and bring it earlier if you want help, that is what the help desk is for.",
                    "Do not build it at home first. Build night is more fun and your fins will be straighter.",
                    "Requirement 8 career research — keep chipping at it. We'll collect them on November 23.",
                ],
                notes:
                    "The 'do not build it at home first' line matters. A Scout who glues their fins on crooked at the kitchen table on Sunday cannot un-glue them. Say it twice.",
            },
        ],
    },

    "build-night": {
        id: "build-night",
        title: "Deck 4 — Build Night",
        meeting: "Build at home · help desk Monday, November 16",
        runtime: "~6 min of slides, then 38 minutes of hands",
        slides: [
            {
                type: "title",
                kicker: "Space Exploration Merit Badge · Build it at home",
                heading: "Build Night",
                image: "clean-room-build",
                sub: "Requirement 3 — build it, and build it straight",
                notes:
                    "Talk for six minutes maximum, then get out of the way. Set up four stations before anyone arrives and leave the build-sequence slide projected the whole night so nobody has to ask what step they're on.",
            },
            {
                type: "bullets",
                heading: "Three rules for tonight",
                image: "drop-test",
                bullets: [
                    "Dry-fit everything before glue touches anything. Every single piece. No exceptions.",
                    "Fins straight matters more than fins pretty. A crooked fin makes the rocket corkscrew and ruins your prediction — which is the thing you're actually being scored on.",
                    "If you're unsure, ask before you glue. Glue is a one-way door.",
                ],
                note: "Older Scouts who have built before are station leads tonight, not builders. That is a teaching assignment and it counts toward Star and Life.",
                notes:
                    "Assign station leads by name before the meeting so they arrive knowing. A First Class Scout running the fin-alignment station is worth more than another adult.",
            },
            {
                type: "steps",
                heading: "The build sequence",
                image: "clean-room-build",
                art: "build-order",
                intro: "Leave this projected all night. The Cosmic Cargo needs no glue for the main structure, so most of tonight is careful assembly, alignment, and finish.",
                steps: [
                    { n: 1, title: "Inventory", detail: "Open the bag and count every part against the parts list before you touch anything. Missing part found now is fixable; found on Nov 21 is not." },
                    { n: 2, title: "Body and payload section", detail: "Dry-fit the payload bay to the body tube. It should be snug and pull apart by hand — that is what lets the ejection charge work." },
                    { n: 3, title: "Fin alignment", detail: "Station 1. Use the alignment guide. Check with a straightedge from three angles before anything sets. This is the step that decides your flight." },
                    { n: 4, title: "Launch lug", detail: "Station 2. Must be parallel to the body tube. A lug even slightly off will bind on the rod and send the rocket sideways off the pad." },
                    { n: 5, title: "Recovery system", detail: "Station 3. Shock cord anchored properly, chute attached, then practice folding it loose three times. Tight folds don't open." },
                    { n: 6, title: "Nose cone fit check", detail: "Snug enough that it won't come off in flight, loose enough that you can pull it free with one hand. Test it ten times." },
                    { n: 7, title: "Mass and balance", detail: "Station 4. Weigh it on the kitchen scale and write the number on your competition card. You need the real mass for your prediction — the kit's spec sheet is not your rocket." },
                    { n: 8, title: "Finish", detail: "Paint or decorate at home. Craftsmanship gets judged November 21 before anything flies. Light coats — a heavy paint job adds mass and lowers your apogee." },
                ],
                notes:
                    "Step 7 is the sneaky-important one and it is easy to skip. Their measured mass feeds the simulator prediction they seal on Nov 16. A Scout who predicts using the box spec instead of their own painted rocket will be off by a hundred feet and won't know why — which, honestly, is also a good lesson.",
            },
            {
                type: "bullets",
                heading: "Before you leave",
                art: "checklist",
                bullets: [
                    "Rocket built, mass written on your competition card, initialed by me.",
                    "Paint at home. Bring it finished on November 16 for inspection.",
                    "Next up is November 16 — Mission Control. You will pick your launch-day crew position, rehearse the countdown, and seal your altitude prediction.",
                    "Anyone who did not finish tonight: we have fifteen minutes at the start of November 16, and that is the last chance before Flight Readiness Review.",
                ],
                notes:
                    "Name the catch-up window out loud so it exists. There is always one Scout who needs it, and offering it publicly means they take it instead of quietly showing up unbuilt on the 16th.",
            },
        ],
    },

    "mission-control": {
        id: "mission-control",
        title: "Deck 4 — Mission Control and Flight Readiness",
        meeting: "Monday, November 16, 2026",
        runtime: "~15 min of slides, 30 min of crew assignments, inspections and predictions",
        slides: [
            {
                type: "title",
                kicker: "Space Exploration Merit Badge · Night 4 of 5",
                heading: "Mission Control",
                image: "mission-control",
                sub: "Take a station, learn the calls, pass flight readiness. Five days to launch.",
                notes:
                    "Run this like a real FRR, because that is what it is. Every real launch has one, every real one has a go/no-go, and Scouts respond extremely well to being held to an adult standard. Say 'flight readiness review' every time, never 'checking your rockets.'",
            },
            {
                type: "launchops",
                heading: "You are not spectators \u2014 you are the range crew",
                intro:
                    "Eight positions, real callsigns, and a countdown that nobody gets to skip. Pick your station tonight and practise the calls, because on Saturday the count runs for real.",
                notes:
                    "This is the slide that turns launch day from 'watch an adult press a button' into something Scouts remember for years. Assign the eight positions by name tonight and write them on the whiteboard. Then run the countdown clock at 10x with the room doing the call-and-response \u2014 twice through and they have it. The go/no-go poll lands hardest: tell them plainly that any Scout saying NO-GO stops the count, no explanation required and no argument, exactly as it works at a real range. Then hand a Scout a reason to use it during the rehearsal so they know it is real.",
            },
            {
                type: "bullets",
                heading: "Build help desk \u2014 open all night",
                intro: "Your rocket should be built by now. If it is not, or something went wrong, this is the table to come to.",
                art: "build-order",
                bullets: [
                    "Fins crooked and already glued? Bring it. Usually fixable, occasionally not \u2014 far better to know tonight than Saturday morning.",
                    "Never started? Come to the side table and we will build it here. About 40 minutes, and I have spare kits.",
                    "Nose cone too tight or too loose? Two minutes with sandpaper or a wrap of tape.",
                    "Missing a part? Tell me tonight. I have spares of everything small.",
                ],
                note: "No judgement and no lecture. A Scout who turns up with an unbuilt kit and asks for help has done exactly the right thing.",
                notes:
                    "Staff this with an older Scout so you stay free to run inspections. Say the 'no judgement' line out loud \u2014 the Scout most likely to quietly not show up on Saturday is the one embarrassed about an unbuilt rocket.",
            },
            {
                type: "twocol",
                heading: "The inspection standard",
                image: "rocket-on-pad",
                art: "go-nogo",
                left: {
                    h: "GO",
                    items: [
                        "Fins straight, secure, no gaps at the root",
                        "Launch lug parallel and clear, slides freely on a spare rod",
                        "Shock cord anchored and undamaged",
                        "Chute unfolds cleanly when shaken out",
                        "Nose cone snug, pulls free with one hand",
                        "Mass measured and written on the card",
                    ],
                },
                right: {
                    h: "NO-GO — fix by Friday",
                    items: [
                        "Any fin that moves under thumb pressure",
                        "Lug that binds on the rod",
                        "Frayed or brittle shock cord",
                        "Chute folded tight or stuck together with paint",
                        "Nose cone so tight it needs two hands, or so loose it falls out",
                        "No motors purchased",
                    ],
                },
                note: "A NO-GO tonight is not a failure. It is five days of warning, which is the entire reason we do this on the 16th and not on the field.",
                notes:
                    "Physically hand back the NO-GO rockets with a written fix list. Text the parent the same night. The goal is zero surprises Saturday morning, and the way you get that is by being unambiguous on Monday.",
            },
            {
                type: "calculator",
                heading: "Seal your prediction",
                image: "wind-tunnel-model",
                intro:
                    "Open the altitude simulator, enter YOUR measured mass — not the box spec — pick your motor, and write the predicted apogee on your competition card. I initial it. It cannot change after tonight.",
                notes:
                    "Do this after the inspection so they use their real painted mass. Make the sealing ceremonial: they write it, you initial it, it goes in the envelope. A little theatre here makes the Prediction Cup feel like it matters, and it does.",
            },
            {
                type: "bullets",
                heading: "Safety readback — on your feet",
                image: "pad-at-night",
                intro: "I pick three rules from the NAR Model Rocket Safety Code at random. You tell me what they are. Everybody does this.",
                bullets: [
                    "Minimum safety distance from the pad, and who is allowed inside it",
                    "The misfire rule — how long you wait, and who approaches the pad",
                    "What conditions stop a launch: wind, dry grass, low cloud, people downrange",
                    "Launch angle — how far from vertical is allowed, and why never toward people",
                    "Recovery — what you do if it lands in a tree, on a road, or on the other side of a fence",
                ],
                note: "Can't answer? You get the printout and you answer me on the field Saturday before you fly. Nobody is embarrassed, and nobody flies unbriefed.",
                notes:
                    "Stand-up quiz, fast, round-robin. Thirty seconds per Scout. This is also your attendance record for who has been briefed — write down who answered, because the Scout who misses tonight needs briefing on the field.",
            },
            {
                type: "bullets",
                heading: "Saturday, November 21",
                image: "liftoff",
                art: "packing",
                bullets: [
                    "Range opens 8:30. Craftsmanship judging happens before anything flies, so arrive with it finished.",
                    "Bring: your rocket, your motors, closed-toe shoes, hat, water, sunscreen, a folding chair.",
                    "Weather call goes out Friday night. Backup is Saturday November 28, second backup December 5.",
                    "Permission slips due tonight. No slip, no launch — this one I cannot bend.",
                    "Requirement 8 career research: bring it on November 23, not Saturday. Saturday we fly.",
                ],
                notes:
                    "Collect the permission slips physically tonight and count them against the roster before anyone leaves. Chasing paper on Friday night is how a Scout ends up watching from the car.",
            },
        ],
    },

    debrief: {
        id: "debrief",
        title: "Deck 7 — Post-Flight Debrief",
        meeting: "Monday, November 23, 2026",
        runtime: "~15 min of slides + 30 min of analysis, awards, and sign-off",
        slides: [
            {
                type: "title",
                kicker: "Space Exploration Merit Badge · Night 5 of 5",
                image: "model-descent",
                heading: "What the Data Said",
                sub: "Predicted vs measured, the awards, and badge sign-off",
                notes:
                    "This is the night the badge actually gets finished, and it is the night most troops skip. Thanksgiving week was already scheduled as a light catch-up night, which makes it perfect — low pressure, high payoff, and Scouts leave the fall with a completed badge instead of a loose end.",
            },
            {
                type: "bullets",
                heading: "Predicted vs measured — the whole point",
                image: "mission-control-plot",
                art: "predicted-vs-measured",
                intro: "Put every Scout's numbers on the whiteboard: predicted, measured, percent error. All of them, together.",
                bullets: [
                    "Almost everyone will have flown LOWER than predicted. That is normal and it is the lesson.",
                    "Why: drag is always worse than the model thinks. Paint adds mass. Wind costs altitude. The rod tips you off vertical. Every one of those is real engineering.",
                    "Ask: whose was closest, and what did they do differently? Usually they weighed their actual rocket instead of trusting the box.",
                    "Ask: if you flew again tomorrow, what one number would you change in your prediction?",
                ],
                note: "A model that is consistently 15% high is not a broken model — it is a model with a known bias you can correct for. That sentence is most of what flight test engineering is.",
                notes:
                    "Resist the urge to explain it all. Put the numbers up, ask the four questions, and let them find the pattern. The moment a Scout says 'wait, everyone flew low' is worth more than anything you could have told them.",
            },
            {
                type: "bullets",
                heading: "What the altimeters told us",
                image: "mission-control-plot",
                art: "telemetry-trace",
                intro: "Every rocket flew with the altimeter in its payload bay. Put all the numbers on the projector at once and read the room's flight as one dataset.",
                bullets: [
                    "Predicted against measured, every Scout on one chart. Who was closest, and did they get lucky or were they right?",
                    "Two flights, same rocket, different motor. How much did the C actually buy you over the B?",
                    "Where the simulator was wrong, and in which direction. It is optimistic — say why, and the answer is drag.",
                    "What broke, what we'd change, and what we'd fly next.",
                ],
                note: "This same work can support a Scout who later takes up Engineering or Aviation — each of those badges has its own requirements and its own counselor sign-off, so nothing here is credit already earned. Tell the crew to keep their data and write-up.",
                notes:
                    "The Scouts whose predictions were badly wrong give the most useful slide of the night, so ask them first and ask them warmly. A rocket that went half as high as predicted has taught the room more about drag than any video will. Let them present the miss with their heads up.",
            },
            {
                type: "bullets",
                heading: "Awards and sign-off",
                art: "timeline-series",
                bullets: [
                    "Prediction Cup — lowest percent error. Read the top three numbers out loud.",
                    "Mission Accomplished — declared an objective, flew it, stated the result with a number and a unit.",
                    "Recovery Award — both flights recovered, rocket still flight-worthy.",
                    "Craftsmanship — judged pre-flight by a non-parent.",
                    "The Anomaly Award — best written explanation of why a flight went wrong. Read it aloud. It should get the biggest laugh and the most respect.",
                    "Requirement 8 career discussions, one-on-one, while others finish write-ups.",
                    "Blue cards signed. Tonight. On a table, with the paperwork, in the light.",
                ],
                notes:
                    "Have the blue cards filled out in advance except for the signature. The single most common way a merit badge dies is the counselor meaning to do the paperwork later. Do it here, in the room, before anyone goes home for Thanksgiving.",
            },
        ],
    },
};

// ---------------------------------------------------------------------------
// Meetings
// ---------------------------------------------------------------------------

export const meetings = [
    {
        n: 1,
        date: "2026-08-31",
        dateLabel: "Monday, August 31, 2026",
        title: "Why We Go",
        block: "0:30–1:15 (45 min)",
        deck: "why-we-go",
        objective:
            "Cover requirement 1 completely, hand out requirement 2 and requirement 8, and publish the flight-readiness gate.",
        covers: [
            { id: "1a", how: "Video clip + discussion of the space race as a prestige and military contest." },
            { id: "1b", how: "Five current missions stated as a specific question each one exists to answer." },
            { id: "1c", how: "Two short videos plus the myth-vs-reality slide on spinoff technology." },
            { id: "1d", how: "Video plus the ISS discussion — why rivals keep flying together." },
            { id: "2", how: "Assigned tonight with a no-duplicates sign-up sheet. Due Sep 28." },
            { id: "8", how: "Assigned tonight. Collected at the Nov 23 debrief." },
        ],
        runOfShow: [
            ["0:30–0:33", "Stand-up hook: 'name one thing in this room that exists because somebody went to space.' Three answers, no corrections yet.", "Counselor"],
            ["0:33–0:36", "Frame the four reasons on the whiteboard: HISTORY / KNOWLEDGE / BENEFITS / COOPERATION.", "Counselor"],
            ["0:36–0:42", "History clip (stop at 3:30) + immediate goals.", "Counselor"],
            ["0:42–0:50", "Two benefit shorts + the myth-vs-reality slide. Highest-energy part of the night.", "Counselor"],
            ["0:50–0:55", "International cooperation clip + ISS discussion.", "Counselor"],
            ["0:55–1:02", "Pioneer draft. Clipboard goes around DURING this, not after.", "SPL runs the clipboard"],
            ["1:02–1:07", "Hold up the altimeter. THIS is what measures your flight — every rocket carries one, and the number it gives you is what the Prediction Cup is scored on.", "Counselor"],
            ["1:07–1:13", "Flight-readiness gate + permission slip + safety code printout. Kits handed out Sep 28 to whoever has cleared.", "Counselor"],
            ["1:13–1:15", "Show the launch pad and altimeter on the table. Walk the calendar. Release on time.", "Counselor"],
        ],
        materials: [
            "Projector or a large screen, HDMI cable, and the deck loaded before Scouts arrive",
            "Whiteboard + markers",
            "Pioneer sign-up clipboard with the pioneer bench printed on the back",
            "Printed launch-day permission slips (one per Scout, plus five spares)",
            "Printed NAR Model Rocket Safety Code, one per Scout",
            "The Porta-Pad II and the Estes altimeter, out of the box, on the table",
            "The Estes altimeter, out of the box, to hold up — small enough to pass round",
            "A printed one-page calendar: five Mondays, three Saturdays, one launch day",
        ],
        homework: [
            "Build your space pioneer card, due September 28 (req 2).",
            "Pass the NAR safety code quiz — take it at home, retakes allowed.",
            "Get the permission slip signed and bring it back — that plus the quiz and your card gets you a kit on September 28.",
            "Start looking at one space-related career for requirement 8.",
        ],
        risk: "Hand out the printed calendar. Five Mondays spread across three months is easy to lose track of, and a parent with the dates on the fridge is the difference between a Scout who finishes and one who drifts.",
    },
    {
        n: 2,
        date: "2026-09-28",
        dateLabel: "Monday, September 28, 2026",
        title: "How Rockets Work",
        block: "0:30–1:15 (45 min)",
        deck: "how-rockets-work",
        objective:
            "Cover requirement 3's nine parts and all of requirement 4 with hands-on demos and the simulators, collect the pioneer cards, and close the ordering gate this week.",
        covers: [
            { id: "3", how: "Parts identification relay against a built rocket. Nine labels, two patrols, explain-out-loud scoring." },
            { id: "4a", how: "Balloon-on-a-string demo plus the skateboard thought experiment." },
            { id: "4b", how: "Video clip, the interactive motor cutaway, and a spent Estes motor passed hand to hand." },
            { id: "4c", how: "Video plus the ground-to-orbit simulator — orbit is sideways, not up." },
            { id: "4d", how: "The mission-control diagram: the same six steps as a photograph from Mars." },
            { id: "2", how: "Cards collected and discussed. Each Scout must also speak to four others' pioneers." },
        ],
        runOfShow: [
            ["0:30–0:33", "Collect pioneer cards. Check off who has ordered a kit and chase who hasn't.", "SPL"],
            ["0:33–0:41", "Parts relay (req 3). Two patrols, nine labels, explain three each, then swap.", "SPL runs it, counselor judges"],
            ["0:41–0:46", "Balloon-on-a-string demo + action-reaction discussion (req 4a).", "Youngest Scout releases it"],
            ["0:46–0:52", "Motor cutaway + pass the spent motor. Decode C6-5 together (req 4b).", "Counselor"],
            ["0:52–0:58", "Launch simulator on the projector. Predict first, then press Launch. Add payload and watch T/W fall.", "Counselor"],
            ["0:58–1:03", "Recovery simulator as a challenge: longest time aloft without shredding the chute.", "Three Scouts try"],
            ["1:03–1:08", "Orbit simulator (req 4c): straight up with the same fuel still comes back down.", "Counselor"],
            ["1:08–1:13", "Mission-control diagram (req 4d). Trace the picture-to-Earth chain on the board.", "Counselor"],
            ["1:13–1:15", "Competition rules published. Gate closes Friday. Build it at home when it arrives. Release.", "Counselor"],
        ],
        materials: [
            "One fully built Cosmic Cargo (yours) as the reference rocket",
            "Two sets of nine part labels on cardstock with tape or clothespins",
            "Balloon-on-a-string rig: fishing line, drinking straw, tape, long balloons — assembled BEFORE the meeting",
            "At least two SPENT Estes motors (never a live one in a hand-to-hand demo)",
            "Competition cards, pre-printed, one per Scout",
            "Laptop + projector — the simulators carry most of this night",
            "The Estes altimeter and a spare, so Scouts can see what goes in the payload bay",
            "The ordering checklist — who has ordered and who hasn't",
            "Printed build instructions to take home, since building now happens at home",
        ],
        homework: [
            "Collect your kit tonight if you have cleared the gate. If you have not, clear it and I will have one for you on October 26.",
            "BUILD IT AT HOME when it arrives. Take your time, dry-fit everything, keep the fins straight.",
            "Stuck or unsure? Bring it to the November 16 meeting — there's a help desk and I have spare parts.",
            "Read the competition rules. The main prize is for the best prediction, not the highest flight.",
        ],
        risk: "Building moved home to save meeting time, which means nobody is watching the fin alignment. Push the printed instructions hard, tell them to dry-fit before glue, and make the November 16 help desk sound genuinely welcoming rather than a last resort.",
    },
    {
        n: 3,
        date: "2026-10-26",
        dateLabel: "Monday, October 26, 2026",
        title: "Missions and Bases",
        block: "0:30–1:15 (45 min)",
        deck: "missions",
        objective:
            "Cover requirements 5, 6 and 7 — the robotic-vs-crewed argument, one vehicle in detail, and a patrol base design.",
        covers: [
            { id: "5a", how: "Voyager and Apollo clips, then a structured debate with two Scouts defending opposite sides." },
            { id: "5c", how: "Its own five-minute activity: every Scout fills in a Sample Return Mission Card, names a destination, and says how the spacecraft survives there." },
            { id: "6", how: "Shuttle clip (or ISS), then each Scout gives purpose, operation and components." },
            { id: "7a", how: "Charrette: energy source, quantity, and what happens at night." },
            { id: "7b", how: "Charrette: shipped, inflated, printed from regolith, or buried." },
            { id: "7c", how: "Charrette: air, water, food, waste, radiation — and what fails first." },
            { id: "7d", how: "Charrette pitch: why this base exists and who pays for it." },
        ],
        runOfShow: [
            ["0:30–0:33", "Requirement 5 options. Steer most Scouts to 5a + 5c.", "Counselor"],
            ["0:33–0:40", "Voyager clip and Apollo clip. Discovery, importance, what we learned.", "Counselor"],
            ["0:40–0:44", "Orbit-to-Moon simulator: aim at where the Moon will be, not where it is.", "Counselor"],
            ["0:44–0:49", "THE ARGUMENT — robotic vs crewed. Show of hands, two Scouts defend opposite sides.", "Scouts"],
            ["0:49–0:54", "Shuttle or ISS (req 6). Each Scout owes purpose + operation + components.", "Counselor"],
            ["0:54–0:59", "SAMPLE RETURN CARDS (5c). Every Scout fills in their own. Six boxes, silent, timed.", "Scouts"],
            ["0:59–1:01", "Moon base video. Cut it the second they start having ideas.", "Counselor"],
            ["1:01–1:11", "Base design charrette (req 7) on butcher paper. Visible timer.", "Patrols"],
            ["1:11–1:15", "Three-minute pitches, then the build reminder for November 16.", "Patrols"],
        ],
        materials: [
            "Projector, deck loaded",
            "Whiteboard for the robotic-vs-crewed tally",
            "Butcher paper or flip-chart pad, one sheet per patrol, plus markers and a visible timer",
            "Printed location cards (six of them) and the requirement 7 subsystem prompts",
            "Printed Sample Return Mission Cards — one per Scout, plus spares. These get collected and initialled.",
            "Printed Base Design Sheets — one per Scout. The patrol shares butcher paper; the sheet is individual.",
            "The kit-arrival checklist — last chance to catch a missing kit with time to fix it",
            "Two spare Cosmic Cargo kits in the car",
        ],
        homework: [
            "Rocket built and painted at home, ready for inspection on November 16.",
            "Not built yet, or it went wrong? Bring it on November 16 — the help desk is open all night.",
            "Anyone taking 5b: your site or scrapbook is due November 16.",
            "Keep working requirement 8.",
        ],
        risk: "This is the fullest night of the five, and it now carries two separate design requirements — 5c on cards and 7 on butcher paper. If you are behind at 0:54, cut the Moon-base video and shorten the charrette to eight minutes; do NOT cut the sample-return cards, because 5c has no other home and a card is faster to finish than a base drawing. If a Scout does not finish their card, they take it home and bring it to November 16.",
    },
    {
        n: 4,
        date: "2026-11-16",
        dateLabel: "Monday, November 16, 2026",
        title: "Mission Control and Flight Readiness",
        block: "0:30–1:15 (45 min)",
        deck: "mission-control",
        objective:
            "Assign the range crew and rehearse the countdown, inspect every rocket, seal every prediction, and run the build help desk for anyone who needs it.",
        covers: [
            { id: "3", how: "Safety code compliance verified individually, plus the build help desk for unfinished rockets." },
            { id: "4", how: "Sealed prediction using their own measured mass — requirement 4 applied to their own vehicle." },
            { id: "8", how: "If a guest speaker lands on this night, their career path is live requirement-8 material." },
        ],
        runOfShow: [
            ["0:30–0:34", "Frame it as a real Flight Readiness Review. Go / no-go, and what no-go means.", "Counselor"],
            ["0:34–0:44", "Mission control: assign the eight range positions by name, then run the countdown clock at 10× with call-and-response.", "Everyone"],
            ["0:44–0:58", "Rocket inspections against the GO/NO-GO standard. Build help desk runs in parallel at a side table.", "Counselor + station lead"],
            ["0:58–1:06", "Prediction sealing. Simulator with their real measured mass, written, initialled, into the envelope.", "Scouts"],
            ["1:06–1:11", "Safety readback on your feet. Three random rules each, thirty seconds per Scout.", "Everyone"],
            ["1:11–1:15", "Permission slips counted against the roster. Weather call plan, packing list, range opens 8:30.", "Counselor"],
        ],
        altRunOfShow: {
            title: "If a guest speaker lands on this night",
            intro:
                "A speaker needs 20–30 minutes and this block is 45, so something has to give. Move the countdown rehearsal to the first 15 minutes of launch day itself — it works there, just with more wind. Never cut the inspections or the safety readback.",
            rows: [
                ["0:30–0:32", "Scout introduces the guest. Practised, 30 seconds.", "Introducer"],
                ["0:32–0:56", "Guest speaker + Q&A. Three primed questioners go first so the silence never happens.", "Guest"],
                ["0:56–1:08", "Rocket inspections and the build help desk, running together.", "Counselor"],
                ["1:08–1:13", "Prediction sealing.", "Scouts"],
                ["1:13–1:15", "Permission slips, packing list, and crew positions handed out on paper to read before Saturday.", "Counselor"],
            ],
        },
        materials: [
            "The GO / NO-GO standard printed large, plus one copy per Scout",
            "A spare launch rod for testing that each launch lug slides freely",
            "Kitchen scale that reads to 1 gram, for anyone who hasn't weighed their rocket",
            "Laptops or one projector for the simulator, run one Scout at a time",
            "Competition cards, an envelope to seal them in, and a pen that writes",
            "Permission slips and the roster to check them against",
            "Printed flight cards and the crew position list, one set per Scout",
            "Side table with glue, sandpaper, spare shock cord, spare parts and two spare kits for the help desk",
        ],
        homework: [
            "Fix anything on your no-go list by Friday. Text me a photo if you want it checked early.",
            "Learn your crew position and its calls. Saturday runs on the countdown card.",
            "Saturday November 21, range opens 8:30. Rocket, motors, closed-toe shoes, hat, water, chair.",
            "Requirement 8 career research — due November 23.",
        ],
        risk: "Two things run at once tonight — inspections and the help desk — so you need a second adult or a capable older Scout. Trying to do both yourself is how the safety readback gets skipped, and that is the one item that cannot be skipped.",
    },
    {
        n: 5,
        date: "2026-11-23",
        dateLabel: "Monday, November 23, 2026",
        title: "Post-Flight Debrief",
        block: "0:30–1:15 (45 min)",
        deck: "debrief",
        objective:
            "Analyse predicted vs measured as a group, give out the awards, and sign the blue cards before anyone leaves for Thanksgiving.",
        covers: [
            { id: "4", how: "Predicted vs measured across every Scout — requirement 4 tested against real data from their own rocket." },
            { id: "5", how: "Any remaining 5b projects presented and discussed." },
            { id: "8", how: "One-on-one career discussions: training, education, cost, prospects, salary, duties, advancement." },
        ],
        runOfShow: [
            ["0:30–0:42", "Whiteboard every Scout's predicted, measured and percent error. Ask the four questions. Let them find the pattern.", "Counselor + Scouts"],
            ["0:42–0:52", "Altimeter numbers on the projector. Every Scout's predicted vs measured, plotted together.", "Counselor + Scouts"],
            ["0:52–0:58", "Anomaly write-ups read aloud. The Anomaly Award should get the biggest laugh and the most respect.", "Scouts"],
            ["0:58–1:05", "Awards: Prediction Cup, Max Altitude, Time Aloft, Mission Accomplished, Recovery, Craftsmanship, Anomaly.", "Counselor"],
            ["1:05–1:13", "Requirement 8 career conversations one-on-one while others finish write-ups. Blue cards signed at the table.", "Counselor"],
            ["1:13–1:15", "Close. What we'd fly next, and who wants to do it again in the spring.", "Counselor"],
        ],
        materials: [
            "Whiteboard, wide, for the full predicted/measured/error table",
            "The altimeter readings, stopwatch times, and the sealed prediction envelope",
            "Laptop + projector with the telemetry CSV and a plot ready",
            "Award certificates — print them, they cost nothing and Scouts keep them",
            "BLUE CARDS, pre-filled except for the signature, one per Scout",
            "The requirement 8 discussion prompts, so each conversation takes three minutes not ten",
        ],
        homework: ["Nothing. The badge is done."],
        risk: "The most common way a merit badge dies is a counselor meaning to do the paperwork later. Pre-fill the blue cards, bring them, and sign them in the room. Thanksgiving is the perfect deadline — nobody wants a loose end going into a holiday.",
    },
];

// ---------------------------------------------------------------------------
// Flight-readiness gate
// ---------------------------------------------------------------------------

export const gate = {
    policyNote:
        "These are Troop 308 rules about handing out hardware and standing on a live range — not additional Space Exploration merit badge requirements. A counselor may not add to or subtract from the requirements as written (Guide to Advancement 7.0.1.4). A Scout who clears none of these still earns the badge on the requirements as written; what the gate controls is who gets a kit from the troop and who is on our range on November 21, which are budget and range-safety decisions, not advancement ones.",
    intro:
        "The troop buys the kits, so the handout is the leverage rather than the money. Four gates, all clearable in the four weeks between Meeting 1 and Meeting 2. Kits go out at Meeting 2 on September 28 to everyone who has cleared, which leaves seven weeks to build at home before the November 16 inspection. Anyone who clears late gets theirs at Meeting 3 on October 26 — after that there is not enough time and they fly a troop spare.",
    items: [
        {
            n: 1,
            title: "Show up for requirement 1",
            detail:
                "Attend Meeting 1, or catch up one-on-one with me on requirement 1a–d. This is the free one — it just means you're actually in the program.",
            maps: "Supports req 1 · troop rule",
        },
        {
            n: 2,
            title: "Turn in your space pioneer card",
            detail:
                "Front picture, back information: who they were, what they did, why it mattered, one surprising thing. Hand-drawn scores the same as printed. Due at Meeting 2 on September 28 — the same night the kits go out, so bring it if you want to walk out with a rocket.",
            maps: "Supports req 2 · troop rule",
        },
        {
            n: 3,
            title: "Pass the safety code quiz — 8 of 10",
            detail:
                "Ten questions straight out of the NAR Model Rocket Safety Code: materials, motors, ignition system, misfires, launch safety distance, flight conditions, recovery, and never approaching a rocket that hasn't launched. Open-book, unlimited retakes, but you pass it before I hand you a motor.",
            maps: "Supports req 3 · troop rule",
        },
        {
            n: 4,
            title: "Declared objective, and a signed permission slip",
            detail:
                "The Scout writes down their declared mission objective for launch #2, and a parent signs the launch-day permission slip. Requirement 3 says the second launch has to accomplish a specific objective; deciding it now is how it stops being an afterthought on the field. The permission slip is the ordinary troop one — no money on it, because the troop is buying the hardware.",
            maps: "Supports req 3 · troop rule",
        },
    ],
    objectiveExamples: [
        "Fly the same rocket on a bigger motor and measure how much higher it actually goes versus my prediction.",
        "Add nose weight and show whether it flies straighter or just lower.",
        "Carry a payload of a measured mass and record the altitude penalty per gram.",
        "Swap the parachute for a streamer and measure the difference in descent time and drift distance.",
        "Launch at a 10° angle into the wind and measure how far downwind it actually lands.",
        "Repeat the exact same flight and show how much two identical launches differ.",
    ],
    note:
        "Requirement 3 asks only that the second launch accomplish a specific objective — it does not require a measurement. Asking for a number is our house rule, because it is what makes the Prediction Cup work and it is a better piece of engineering. A Scout whose objective has no number in it still meets requirement 3.",
};

// ---------------------------------------------------------------------------
// Ordering
// ---------------------------------------------------------------------------

export const orders = {
    intro:
        "Three separate orders with three separate owners. Prices checked against estesrockets.com and vendor listings in August 2026 — re-check at checkout, they move.",
    linkNote:
        "Every row has a buy link. Amazon first because most families already have an account and Prime shipping is the difference between a kit arriving in time to build it and not. Where a specific listing was verified, the link goes straight to it; otherwise it is an Amazon search that will always resolve even after a listing changes. The manufacturer link next to it is the authority on specs and the fallback when Amazon is out of stock — Estes ships direct and their education store sometimes has bulk pricing Amazon does not. Nothing here is an affiliate link.",
    groups: [
        {
            id: "scout",
            title: "Per Scout — the TROOP orders this, one set per Scout",
            owner: "Counselor · troop budget",
            deadline: "Order by Friday, September 4, 2026 — kits handed out Sep 28",
            intro:
                "One airframe for everybody. Same kit, same motor class, so the competition measures thinking instead of budget — and since the troop is buying, no Scout's flight depends on what their family can spend. The Cosmic Cargo is the pick because it is beginner-level, needs no glue, and — the part that matters — has a real payload bay, which makes requirement 3(g) something the Scout can point at instead of imagine. Multiply every row below by your Scout count and order it in one go: buying ten of each in a single order is cheaper and arrives together.",
            rows: [
                { item: "Estes Cosmic Cargo rocket kit", detail: "Skill level: beginner. 16.7 in long, 0.98 in dia, 1.27 oz. 12 in parachute. No glue needed. Payload bay.", qty: "1", price: "$16.99", buy: "https://www.amazon.com/s?k=Estes+Cosmic+Cargo+rocket+kit", mfr: "https://estesrockets.com/products/cosmic-cargo" },
                { item: "Estes B6-4 engine 3-pack", detail: "The safe first flight. Lower and slower — easier to track, easier to recover.", qty: "1", price: "~$12", buy: "https://www.amazon.com/s?k=Estes+B6-4+engines+3+pack", mfr: "https://estesrockets.com/products/b6-4-engines" },
                { item: "Estes C6-5 engine 3-pack", detail: "The competition flight. Recommended engines for this kit are A8-3, A8-5, B4-4, B6-6, C6-5, C6-7.", qty: "1", price: "~$12", buy: "https://www.amazon.com/s?k=Estes+C6-5+engines+3+pack", mfr: "https://estesrockets.com/products/c6-5-engines" },
                { item: "Recovery wadding", detail: "Or share the troop's. Do not fly without it — the ejection charge will melt a chute.", qty: "1 pack", price: "~$6", buy: "https://www.amazon.com/s?k=Estes+recovery+wadding", mfr: "https://estesrockets.com/products/recovery-wadding" },
            ],
            total: "≈ $47 per Scout · ≈ $470 for 10 Scouts, before tax and shipping",
            notes: [
                "Order every kit and both motor packs together. Split shipments are how you end up on September 28 with rockets and no motors, holding a handout night with nothing to hand out.",
                "Order two or three sets more than your headcount. Scouts join late, kits get damaged, and a spare is the difference between a Scout flying and a Scout watching.",
                "Starters are included with the engines. Extra starters are a good $6 of insurance.",
                "Scouts also need: white glue or plastic cement for the fins if they want a stronger build, sandpaper, and spray paint. Most families already have these.",
            ],
        },
        {
            id: "troop",
            title: "Troop / counselor — order this by Monday, August 17",
            owner: "Counselor",
            deadline: "Must ship before Meeting 1 on August 31",
            intro:
                "This is the order with the schedule risk. The pad and the altimeter need to be physically on the table at Meeting 1, and the altimeter is what scores the competition — it is the reason the whole thing is an engineering contest.",
            rows: [
                { item: "Estes Porta-Pad II + Electron Beam controller", detail: "1/8 in rod, blast deflector, 17 ft cable, safety key, adjustable to 30° from vertical. Handles every Scout rocket in this series.", qty: "1", price: "~$40", buy: "https://www.amazon.com/s?k=Estes+Porta+Pad+II+Electron+Beam+launch+controller", mfr: "https://estesrockets.com/products/porta-pad-ii-launch-pad-and-controller" },
                { item: "Estes Altimeter", detail: "0–9,999 ft, 4-digit LCD, stores 10 flights. Fits a payload section. This is the scoring instrument.", qty: "1", price: "$43.99", buy: "https://www.amazon.com/s?k=Estes+Altimeter+2246", mfr: "https://estesrockets.com/products/altimeter" },
                { item: "Second Estes Altimeter", detail: "Strongly recommended now that Max Altitude is a scored award — halves the swap time between flights and is your spare when the first one walks off in a pocket.", qty: "1", price: "$43.99", buy: "https://www.amazon.com/s?k=Estes+Altimeter+2246", mfr: "https://estesrockets.com/products/altimeter" },
                { item: "Two spare Cosmic Cargo kits, pre-built", detail: "One as the reference rocket for the Meeting 2 parts relay, one for the Scout whose kit never arrived. You will need it.", qty: "2", price: "~$34", buy: "https://www.amazon.com/s?k=Estes+Cosmic+Cargo+rocket+kit", mfr: "https://estesrockets.com/products/cosmic-cargo" },
                { item: "Spare B6-4 and C6-5 engines", detail: "Somebody will forget. Somebody else will misfire. Budget four spare flights.", qty: "2 packs", price: "~$24", buy: "https://www.amazon.com/s?k=Estes+model+rocket+engines+B6-4+C6-5", mfr: "https://estesrockets.com/collections/engines" },
                { item: "Recovery wadding, bulk", detail: "Cheap, and running out mid-launch-day ends the launch day.", qty: "2 packs", price: "~$12", buy: "https://www.amazon.com/s?k=Estes+recovery+wadding+bulk", mfr: "https://estesrockets.com/products/recovery-wadding" },
                { item: "Nine-part label set, laminated", detail: "Print the requirement 3 part names on cardstock and laminate. Reusable every year — this is the drill that makes 3(a–i) stick.", qty: "2 sets", price: "~$10" },
                { item: "Two stopwatches", detail: "Required for the Time Aloft award. Two adults time independently and the results get averaged — one timer turns every close call into an argument. Phones work.", qty: "2", price: "~$16 or free" , buy: "https://www.amazon.com/s?k=digital+stopwatch+sports+timer" },
                { item: "Range gear", detail: "Fire extinguisher or water bucket, first aid kit, orange cones, a bullhorn or a loud voice, and a folding table.", qty: "—", price: "on hand" },
            ],
            total: "≈ $210–$255",
            notes: [
                "Verify the Estes altimeter actually fits the Cosmic Cargo's 0.98 in payload bay the day it arrives, and definitely before November 16. If it doesn't, you fly the altimeter in your own reference rocket and score by matched flights instead. Check this the day it arrives, not the week of the launch.",
                "The Porta-Pad II uses a 1/8 in rod, which is all you need in 2026 — everything flying is a C6-5 or below. The 3/16 in Maxi rod in the next group only matters if you ever pick the big rocket back up.",
            ],
        },
        {
            id: "telemetry",
            title: "The big rocket — DO NOT ORDER FOR 2026",
            owner: "Deferred — kept here as a costed plan for a future year",
            deadline: "Nothing to order. This whole group is parked.",
            intro:
                "NOT ORDERING THIS IN 2026 — the telemetry track is deferred, and without a 1,000 ft field this airframe has nowhere to fly. Everything below is kept costed and researched so that picking it up in a future year is a decision, not a restart. This is the Lil' Spite build from the capstone page, scoped for a crew instead of one Scout. Be blunt about what the airframe is: 4 ft 4 in, rated intermediate, boxed for ages 18+, about two hours of assembly. Scouts build the payload, write the firmware, and run the ground station; an adult does the motor prep and presses the button. Quantities below assume a group — the single biggest change from the original one-Scout bill of materials is a second T-Beam so there is a bench unit that never flies and a flight unit that never gets experimented on.",
            rows: [
                { item: "Estes Pro Series II Lil' Spite", detail: "51.8 in long, 2.0 in dia, 10.3 oz (292 g) dry. Plywood fins, 29 mm mount, 18 in ripstop chute. ~1,200 ft on black powder.", qty: "1", price: "$59.99", buy: "https://www.amazon.com/Estes-9737-Designed-Intermediate-Flying-Rocket-Model/dp/B0G1Z9GVGX", mfr: "https://estesrockets.com/products/lil-spite" },
                { item: "Estes 3/16 in Maxi launch rod", detail: "THE ONE-PAD OPTION. Fits the Porta-Pad II you already have, and the Lil\u2019 Spite\u2019s 1/4 in lug slides onto it. Buy this instead of the PSII pad below if you want a single pad — see the notes for the stiffness caveat.", qty: "1", price: "~$10", buy: "https://www.amazon.com/s?k=Estes+3%2F16+maxi+launch+rod", mfr: "https://estesrockets.com/collections/launch-supplies" },
                { item: "Estes Pro Series II launch pad", detail: "OPTIONAL if you buy the 3/16 in Maxi rod above; buy this if you want a dedicated mid-power pad or the thinner rod flexes. Ships with a two-piece 1/4 in × 60 in steel rod, which is what this rocket needs. The Porta-Pad II is 1/8 in and cannot fly it.", qty: "1", price: "~$60–65", buy: "https://www.amazon.com/s?k=Estes+Pro+Series+II+launch+pad+rail", mfr: "https://estesrockets.com/collections/launch-supplies" },
                { item: "Estes E16-6 engines, 2-pack", detail: "33.68 N-s, 6 s delay. Estes's own recommendation for this kit unloaded. Includes 2 starters and 4 plugs.", qty: "1", price: "$31.99", buy: "https://www.amazon.com/EST1697-E16-6-PS-II-ENGINE-Estes/dp/B00G4DSFHW", mfr: "https://estesrockets.com/products/e16-6-engines" },
                { item: "Estes E16-4 engines, 2-pack", detail: "Same impulse, 4 s delay. This is the one to fly WITH the telemetry payload aboard — more mass means lower apogee means shorter coast to apogee.", qty: "1", price: "~$32", buy: "https://www.amazon.com/s?k=Estes+E16-4+29mm+engine", mfr: "https://estesrockets.com/products/e16-4-engines" },
                { item: "Estes F15-6 engines, 2-pack", detail: "Optional comparison flight. Needs a 1,000 ft minimum site dimension under the NAR safety code — Camp SLO, not a school field.", qty: "0–1", price: "~$32", buy: "https://www.amazon.com/EST1652-F15-6-29mm-PS-II-ENGINE/dp/B00G4DSDEC", mfr: "https://estesrockets.com/collections/engines" },
                { item: "Estes Pro Series II 29 mm motor retainer", detail: "Screw-on retention so motors swap fast between flights.", qty: "1", price: "~$10", buy: "https://www.amazon.com/s?k=Estes+Pro+Series+II+29mm+motor+retainer", mfr: "https://estesrockets.com/collections/launch-supplies" },
                { item: "LILYGO T-Beam Supreme (US915) ×2", detail: "ESP32-S3 + LoRa SX1262 + GPS + onboard sensors. BUY TWO: one bench unit the crew experiments on and takes home, one flight unit nobody touches. Street price swings $40–$52 and it goes out of stock — buy early.", qty: "2", price: "~$80–105", buy: "https://www.amazon.com/LILYGO-T-BeamSUPREME-Development-L76K-915Mhz/dp/B0CXJ71NB6", mfr: "https://lilygo.cc/en-us/products/t-beam-supreme-meshtastic-us0" },
                { item: "Heltec WiFi LoRa 32 V3 (US915) ×2", detail: "USB ground receivers — two so the ground-station pair can both develop. Note V4 now exists; buy V3 specifically or your pin mapping and half the example code won't match.", qty: "2", price: "~$50–70", buy: "https://www.amazon.com/Heltec-LoRa-32-V3-Meshtastic/dp/B0D1H1FN9Y", mfr: "https://store.rokland.com/products/heltec-wifi-lora-32v3" },
                { item: "Payload sled + mounting", detail: "Foam, zip ties, and a 3D-printed or cardboard sled. Weigh the finished payload — around 120 g — and re-run the simulator with that real mass before picking a motor delay.", qty: "—", price: "~$15" },
                { item: "USB-C data cables", detail: "Not charge-only cables. This wastes an hour of crew session 1 every single time. Buy three known-good ones.", qty: "3", price: "~$18", buy: "https://www.amazon.com/s?k=USB-C+data+cable+3+pack" },
                { item: "18650 Li-ion cells ×3 — NOT INCLUDED with the T-Beam", detail: "The T-Beam Supreme has an 18650 holder but ships with no cell. Without one it runs on USB only and loses GPS hot-start, so a cold lock at the pad takes minutes. Buy button-top protected cells — flat-top cells rattle loose in the holder under boost. Three: flight, bench, spare.", qty: "3", price: "~$24", buy: "https://www.amazon.com/s?k=18650+button+top+protected+battery+3500mAh", buy: "https://www.amazon.com/s?k=18650+battery+holder+foam+zip+ties" },
            ],
            total: "≈ $395–$500 for the group build",
            notes: [
                "CAN ONE PAD FLY BOTH ROCKETS? Yes, but not the way round you would expect — and not with the Pro Series II pad. Lug and rod only fit one direction: a big lug slides onto a thin rod with some slop, but a thin lug will never go onto a fat rod. The Cosmic Cargo\u2019s lug is 1/8 in, so it can NEVER fly on the PSII pad\u2019s 1/4 in rod. Going the other way works: keep the Porta-Pad II, buy the 3/16 in Maxi rod Estes sells for it, and the Lil\u2019 Spite\u2019s 1/4 in lug will slide onto that 3/16 in rod. One pad, two rod sizes, swap between them. That saves you about $65.",
                "The honest caveat on the one-pad route: rod diameter is not just about fit, it is about stiffness. A 60 in 3/16 in rod carrying a 400 g rocket will flex more than the 1/4 in rod Estes specifies for the Lil\u2019 Spite, and rod whip at the moment of liftoff sends a rocket off-heading. Watch the first launch closely. If the rod visibly bends or the rocket leaves the pad crooked, stop and buy the PSII pad before flying it again. Two pads is still the better answer if the budget allows — not for fit, but because two pads means two rockets prepped at once, which is what gets ten Scouts through two flights each before lunch.",
                "HOW HIGH DOES THE CAPSTONE ROCKET GO? Lower than you would expect once it is loaded. Unloaded on F15-6 it is about 1,120 ft. With the ~120 g telemetry payload aboard: F15-6 about 820 ft, E16-6 about 500 ft, E12-4 about 350 ft. Recommendation: fly E16-6 with the full payload, for roughly 500 ft. High enough to be a real flight, low enough to keep it in sight, in the field, and recoverable on foot. Check it yourself in the launch simulator — pick the Lil' Spite airframe and drag the payload slider.",
                "One caveat on going lower still: the NAR minimum site dimension is set by motor impulse class, not by how high you actually fly. An E motor needs 1,000 ft of field whether it reaches 500 ft or 1,500 ft. Only dropping to a D shrinks that to 500 ft — and with the payload aboard a D leaves thrust-to-weight too low to be safe. So fly E16-6, take the lower altitude, and still book the big field.",
                "The badge page previously estimated $167–$170 for the core setup. That number is stale even for one Scout — it leaves out the PSII pad, the retainer, the battery, and the payload sled. For a crew build with a spare board set, budget $400.",
                "The bench-unit / flight-unit split is the most valuable $50 in this order. Without it, the crew will be debugging on the article that has to fly, and someone will brick it the week before launch.",
                "Delay selection is a real decision, not a typo: Estes recommends -6 for this kit empty, and -4 is the right call once you add 60–100 g of payload. Run both through the simulator with the real mass and pick deliberately.",
                "The F15 flights need a 1,000 ft minimum launch site dimension. That single line is why the launch site conversation starts in August.",
            ],
        },
    ],
};

// ---------------------------------------------------------------------------
// Competition
// ---------------------------------------------------------------------------

export const competition = {
    name: "The Troop 308 Prediction Cup",
    tagline: "The prize is not for flying highest. It's for knowing how high you'll fly.",
    why:
        "An altitude contest rewards whoever bought the biggest motor. A prediction contest rewards whoever thought hardest. Every Scout flies the same airframe from the same pad, so the only variable left is how well they modeled their own rocket — which is exactly what requirement 4 is trying to teach. It also means the youngest Scout can beat the oldest, and does, about a third of the time.",
    howItWorks: [
        "Every Scout flies the same kit — the Cosmic Cargo — so nobody buys an advantage.",
        "Scouts learn the simulator at Meeting 2 and practise with it. The real prediction gets sealed at the Flight Readiness Review on November 16, using the mass of their own built and painted rocket — not the number on the box. Counselor initials it, it goes in an envelope, and it cannot change.",
        "Flight 1 on launch day is the shakedown. It doesn't score. It proves the rocket flies and comes back.",
        "Flight 2 is the scored flight: altimeter aboard, declared mission objective, sealed prediction.",
        "Score is percent error, not feet. |predicted − measured| ÷ measured × 100. Lowest wins.",
        "Nothing is scored on the field. Numbers get recorded November 21, compiled at home, and announced at the November 23 debrief — where the whole troop sees every prediction and every result on one whiteboard.",
    ],
    scoring: [
        { place: "Prediction Cup", basis: "Lowest percent error between the sealed prediction and the altimeter reading on flight 2.", weight: "Primary award", measured: "Altimeter + sealed card" },
        { place: "Max Altitude", basis: "Highest measured apogee. Everyone flies the same airframe and the same motor class, so this is a build-quality contest — straight fins, light paint, clean finish — not a spending contest.", weight: "Measured", measured: "Estes altimeter" },
        { place: "Time Aloft", basis: "Longest time from liftoff to touchdown. Rewards getting ejection right at apogee and picking the right recovery device. Timed by two adults with stopwatches; the two times get averaged.", weight: "Measured", measured: "Two stopwatches, averaged" },
        { place: "Mission Accomplished", basis: "Declared a specific objective at the gate, flew it, and can state the result with a number and a unit.", weight: "Judged", measured: "Competition card" },
        { place: "Recovery Award", basis: "Both flights recovered, rocket still flight-worthy at the end of the day. Rewards the boring virtues that actually win engineering programs.", weight: "Judged", measured: "Post-flight inspection" },
        { place: "Craftsmanship", basis: "Judged before the first launch by a non-parent: fin alignment, finish, and originality of paint scheme.", weight: "Judged pre-flight", measured: "Non-parent judge" },
        { place: "The Anomaly Award", basis: "Best written explanation of why a flight went wrong. Deliberately the most fun award to win.", weight: "Honorary", measured: "Written on the field" },
    ],
    tension:
        "Max Altitude and Time Aloft pull in opposite directions, and that is the point. Altitude wants a light rocket and a streamer that drops fast; Time Aloft wants a big parachute that then drifts halfway across the field and threatens the Recovery Award. No single build wins all three, so every Scout has to decide what they are optimising for and defend it. That trade is the most grown-up engineering conversation available on a Saturday morning, and the recovery simulator in Deck 2 lets them explore it three weeks before they have to commit.",
    gearNote:
        "The measured awards need equipment: the Estes altimeter for the Prediction Cup and Max Altitude, and two stopwatches for Time Aloft. Two adults time independently and the results get averaged — one stopwatch and one timer means every close call becomes an argument. Phones work as stopwatches. A second altimeter is worth the $44 at ten Scouts: it halves the swap time between flights and it is your spare when the first one walks off in someone's pocket.",
    penalties: [
        "Unsafe pad procedure — approaching a rocket that didn't launch before the 60-second wait — is an automatic scratch for that flight. No exceptions, no arguing, and say so at Meeting 2 so nobody is surprised.",
        "Changing your prediction after launch day starts is a scratch from the Prediction Cup. You keep every other award.",
        "A rocket that fails inspection doesn't fly until it's fixed. Bring glue.",
    ],
    note:
        "The Anomaly Award exists on purpose. The Scout whose chute didn't deploy will learn more in ten minutes of writing up why than the winner learns all day — and it keeps a bad flight from becoming a bad memory.",
};

// ---------------------------------------------------------------------------
// Guest speakers
// ---------------------------------------------------------------------------

export const speakers = {
    intro:
        "Ranked by what a Scout actually gets out of it, not by title. The slot is Monday, November 23 — the debrief night, the only one with real slack. Nothing that night depends on the speaker, so a cancellation costs you nothing. By November the Scouts have built rockets and can ask real questions instead of 'have you met an astronaut.' Send the asks by August 21 anyway: a university lab needs four to six weeks, a military public affairs office needs six to eight, and the good ones book out.",
    options: [
        {
            rank: 1,
            name: "Cal Poly CubeSat Laboratory / PolySat",
            org: "Cal Poly San Luis Obispo, Aerospace Engineering",
            distance: "~10 minutes from the meeting site",
            what:
                "Student-run satellite lab. Cal Poly co-invented the CubeSat standard with Stanford in 1999, and the lab has flown real spacecraft that launched from Vandenberg.",
            why:
                "The single best fit. They have a dedicated education and outreach team that explicitly wants to visit local schools, the students are close enough in age that Scouts actually talk to them, and a flight-spare CubeSat you can hold is more persuasive than any slide. Ask them to bring hardware.",
            ask: "30 minutes: 15 on what a CubeSat is and what theirs did, 10 of hardware passed around, 5 of Q&A.",
            contact: "cubesat@calpoly.edu · (805) 756-5087",
            url: "https://aero.calpoly.edu/cubesat-and-polysat/",
            lead: "4–6 weeks. Academic calendar matters — early November is mid-quarter at Cal Poly and workable, but it is also close to finals prep, so ask early.",
        },
        {
            rank: 2,
            name: "Cal Poly Space Systems (CPSS)",
            org: "Cal Poly student rocketry club",
            distance: "~10 minutes",
            what:
                "Student high-power rocketry club. Members design, build, and fly their own rockets and earn Tripoli certifications. Everything they fly is student-built.",
            why:
                "The closest thing to a peer group the Scouts have. These are 19-year-olds doing at scale exactly what the troop is doing in miniature, and a college student holding a 10-foot airframe is a very effective argument for staying in engineering. Also the best possible source of a launch-day mentor.",
            ask: "20 minutes plus bring one airframe. Or better — ask if a member will come to the November 21 launch as a range mentor.",
            contact: "cpss@calpoly.edu",
            url: "https://aero.calpoly.edu/cpss/",
            lead: "3–4 weeks. Students respond faster than departments.",
        },
        {
            rank: 3,
            name: "Vandenberg Space Force Base — Public Affairs",
            org: "U.S. Space Force, Space Launch Delta 30",
            distance: "~1 hour drive; they run a community speaker series off-base",
            what:
                "Vandenberg already takes a 'Mission Update' speaker series out into Central Coast communities. Speaker requests go through the base Public Affairs Office.",
            why:
                "It is the launch site the Scouts can see from the coast, and a Guardian who works a real launch pad answers requirement 8 career questions better than any website. The catch is lead time and the possibility of a last-minute mission conflict — always have a backup plan for the night.",
            ask: "20–25 minutes on what actually happens on launch day at a national range, plus career paths.",
            contact: "Vandenberg SFB Public Affairs Office — speaker request",
            url: "https://www.vandenberg.spaceforce.mil/About-Us/Fact-Sheets/Display/Article/338356/public-affairs-office/",
            lead: "6–8 weeks, and confirm again the week of. Mission tempo trumps outreach.",
        },
        {
            rank: 4,
            name: "STEMtoSpace — Guardian to Classroom",
            org: "Department of the Air Force STEM",
            distance: "Virtual",
            what:
                "Free 20–30 minute virtual connection between a group and an assigned Space Force Guardian, scientist, or engineer, followed by Q&A. Scout units and nonprofit youth groups are explicitly eligible.",
            why:
                "Zero cost, zero travel, and 20–30 minutes is a precise fit for the block. The honest downside: it is virtual, and a face on a projector lands softer than a person in the room. Treat it as the backup that saves the night, not the headline. 1:1 connections have hit capacity in past cycles, so get on the list early.",
            ask: "Request a connection for the November 23 block. Use whatever video platform the troop already uses.",
            contact: "Register via the DAF STEM site; newsletter announces when cycles open",
            url: "https://dafstem.us/stemtospace/",
            lead: "Register as early as possible — cycles fill and close.",
        },
        {
            rank: 5,
            name: "NASA/JPL Solar System Ambassador",
            org: "NASA Science Mission Directorate, managed by JPL",
            distance: "Varies — 1,100+ volunteers nationally, several on the Central Coast",
            what:
                "Trained volunteers who give NASA-supplied presentations on current missions. Free, and they do this because they want to.",
            why:
                "Lowest-friction option on this list and a genuinely good fit for requirement 5. Quality varies with the individual, so ask what they've presented before. Find one nearby through the program's events page.",
            ask: "20 minutes on a current planetary mission — pairs directly with requirement 5a.",
            contact: "Find a local ambassador via the SSA events directory",
            url: "https://science.nasa.gov/engage/solar-system-ambassadors/",
            lead: "2–4 weeks.",
        },
        {
            rank: 6,
            name: "The one you already have",
            org: "In-house",
            distance: "Already in the room",
            what:
                "A Technical Fellow at Lockheed Martin with a B.S. and M.S. in aerospace engineering is standing at the front of the room running the meeting.",
            why:
                "Worth saying out loud because it's easy to overlook: if no outside speaker lands, requirement 8 is still fully covered by the counselor. Book a guest to add a second voice and a different path into the field — not because the night needs rescuing.",
            ask: "10 minutes on how you actually got here, including the parts that weren't a straight line.",
            contact: "—",
            url: null,
            lead: "None.",
        },
    ],
};

// ---------------------------------------------------------------------------
// Launch day
// ---------------------------------------------------------------------------

export const launchDay = {
    date: "Saturday, November 21, 2026",
    backup: "Saturday, November 28, 2026 (Thanksgiving weekend), then Saturday, December 5, 2026",
    intro:
        "This is where requirement 3 actually gets finished, and it is the only part of the plan with an external dependency. Start the site conversation in August, not October — the extra time before Thanksgiving is margin for the site to say no once and for you to find another, not permission to start late.",
    whyThisDate:
        "The Saturday before Thanksgiving beats the Saturday after it. Nov 28 has families off work, which sounds ideal until half of them are out of town — and a launch day at 60% attendance is a launch day you run twice. Nov 21 has better attendance, it is still a school week so nobody has left yet, and it leaves Nov 28 free as a genuine weather backup rather than burning your only spare Saturday. If the weather scrubs both, Dec 5 still lands before the December meeting schedule gets crowded. Central Coast weather in late November is usually fine; the thing that scrubs a launch here is wind, not rain.",
    siteRule: {
        intro:
            "The NAR Model Rocket Safety Code sets a minimum launch site dimension by motor class. This one table decides which field you need:",
        rows: [
            { motor: "A", dim: "100 ft", use: "—" },
            { motor: "B", dim: "200 ft", use: "Scout flight 1 (B6-4)" },
            { motor: "C", dim: "400 ft", use: "Scout flight 2 (C6-5)" },
            { motor: "D", dim: "500 ft", use: "—" },
            { motor: "E", dim: "1,000 ft", use: "Not flying in 2026" },
            { motor: "F", dim: "1,000 ft", use: "Not flying in 2026" },
        ],
        note:
            "Read the table as a single question: what is the SMALLEST dimension of your field? Everything we are flying in 2026 is a C6-5 or below, so the answer has to be at least 400 ft. That is a manageable number and it is why the big rocket got cut — an E or F needs 1,000 ft, roughly a quarter mile in every direction, and there is no point holding out for a field that large when nothing we own has to fly on one.",
    },
    sites: [
        {
            name: "Cuesta College — helipad / open apron area",
            status: "Primary — needs a facilities request and two measurements",
            detail:
                "Close, familiar to families, and flat. Two things decide whether it works, and neither is a phone call you can skip. First, measure it: pace or map the SMALLEST clear dimension of the apron and everything you would be willing to walk into. A C6-5 needs 400 ft, and 400 ft is bigger than most people's guess — it is about 130 paces. Second, it is a helipad, which means it may see aircraft. You need to know from the college whether anything flies in or out that day, and you do not launch if the answer is 'sometimes'. A model rocket on a C motor is FAA Class 1 and needs no notification, but the NAR code is explicit that you do not launch near aircraft, and that is the rule that matters here.",
            actions: [
                "Find the right office — campus facilities or risk management, not the front desk — and ask what a community group needs to use the area on a Saturday morning.",
                "Ask directly: does anything fly in or out of that pad, who schedules it, and can we get written confirmation that nothing is scheduled on November 21?",
                "Measure the smallest clear dimension yourself before you commit. If it is under 400 ft, the site is a no for the C6-5 flights and you either drop to B motors or find another field.",
                "Ask about the surface and the surroundings: dry grass anywhere downrange is a Cal Fire question, and a parking lot full of cars is a recovery problem.",
                "Get the insurance certificate request into Los Padres Council as soon as you know who it must name — council paperwork is the long pole, not the field.",
            ],
        },
        {
            name: "Camp San Luis Obispo — O'Sullivan Field",
            status: "Backup — more space, more paperwork",
            detail:
                "The Central Coast Model Rocket Club has historically launched from the heliport landing area at Camp San Luis Obispo, a California National Guard installation north of town. Low-power through mid-power, wind permitting. Reported requirements include a $2M insurance certificate and roughly three days of access paperwork — but treat that as a starting point and confirm current requirements yourself, because club activity has been intermittent over the years.",
            actions: [
                "Contact the NAR club locator for the current Central Coast section contact.",
                "Ask exactly who the insurance certificate must name and in what format.",
                "Request the certificate from Los Padres Council as soon as you have that answer — council paperwork is the long pole, not the field.",
                "Confirm the date in writing and ask about range hours and any live-fire conflicts.",
            ],
            url: "https://www.nar.org/find-a-local-club/nar-club-locator/",
        },
        {
            name: "A large private ranch or ag field",
            status: "Backup — needs a landowner and a phone call",
            detail:
                "Plenty of open acreage around Santa Margarita and the Edna Valley. What you need is written permission, 400+ ft in every direction with no dry brush, no livestock in the flight path, and vehicle access. A troop family with land, or a family that knows someone with land, is often the fastest path to a field.",
            actions: [
                "Ask at a troop committee meeting in September. Somebody usually knows somebody.",
                "Get permission in writing, even informally by text.",
                "Check Cal Fire conditions the week of — November is usually past peak, but check.",
            ],
            url: null,
        },
        {
            name: "City and county parks",
            status: "Check first — usually restricted",
            detail:
                "Most municipal parks prohibit rocketry outright or require a permit that takes longer than you have. Worth one phone call to SLO County Parks, but do not build the plan around it, and never launch from a park on the assumption that nobody will mind.",
            actions: ["One call to SLO County Parks and Recreation. If it isn't a clear yes in September, move on."],
            url: null,
        },
    ],
    scheduleNote:
        "Because the debrief now has its own night on November 23, launch day is purely a flying day. No scoring math in the wind, no career interviews on a tailgate, no paperwork on a car hood. Fly, recover, record the numbers, go home. It is a better day and a shorter one.",
    schedule: [
        ["8:00", "Adults arrive. Set the range: pad, cones at the safety distance, table, first aid, water, extinguisher. Check the wind and commit to a go/no-go."],
        ["8:30", "Scouts arrive. Craftsmanship judging happens now, by a non-parent, before anything flies and gets scuffed."],
        ["8:45", "Range safety brief. Everybody, including parents. Safety distances, the 60-second misfire rule, who calls the range hot and cold."],
        ["9:00", "Flight 1 — shakedown, B6-4, one at a time. Unscored. Recover, inspect, repack, and fix anything that shook loose."],
        ["10:15", "Break. Repack chutes, swap motors, reset. Read out the altimeters from flight 1 and write the numbers on the board."],
        ["10:45", "Flight 2 — scored. C6-5, altimeter aboard, sealed prediction read aloud before launch. Measured altitude recorded on the card by a second adult."],
        ["12:00", "Telemetry rocket demo flight. Adult flies it, the crew runs the ground station, everyone watches the CSV fill up live."],
        ["12:30", "Lunch. Anomaly write-ups started on paper while the memory is fresh — this is the only paperwork that happens on the field."],
        ["1:00", "Range cleanup. Everything that came out goes back. Walk the field for debris before anyone leaves."],
        ["1:15", "Done. Scores get compiled at home; awards happen Monday November 23."],
    ],
    checklist: [
        "Signed permission slips for every Scout",
        "Certificate of insurance, if the site required one — printed, in hand",
        "Launch pad, controller, fresh batteries, spare launch rod",
        "Altimeter(s), fresh battery, and the manual",
        "Two stopwatches (or two phones) for the Time Aloft award, and a second adult to run one",
        "Spare motors, starters, and wadding — more than you think",
        "First aid kit, fire extinguisher or a full water bucket, and a shovel",
        "Cones or flags for the safety distance perimeter",
        "Competition cards, clipboard, and a pen that works in the wind",
        "The counselor's built spare rocket, for whoever's didn't survive flight 1",
        "Shade, water, and lunch — a launch day is four hours in an open field",
    ],
    safety: [
        "Read the NAR Model Rocket Safety Code out loud at the range brief. Not a summary — the actual text.",
        "Minimum safety distance from the pad for everyone not launching. Cones mark it and nobody crosses.",
        "Misfire rule: 60 seconds, safety key removed, and the counselor is the only person who approaches the pad.",
        "No launches into dry grass, no launches with a wind above about 20 mph, and no launches at anything but near-vertical.",
        "Two-deep leadership and Guide to Safe Scouting standards apply on the field exactly as they do at a meeting.",
    ],
};

// ---------------------------------------------------------------------------
// Corrections found while reviewing the existing badge page
// ---------------------------------------------------------------------------

export const corrections = [
    {
        what: "Capstone requirement mapping was wrong",
        detail:
            "The Telemetry Rocket capstone claimed it covered Space Exploration requirement 4 for 'identify rocket parts' and requirement 5 for 'safety code and NAR rules.' Parts identification is requirement 3(a–i), and safety code compliance also lives in requirement 3. Requirement 4 is principles of space flight and requirement 5 is missions — neither is what the capstone was claiming. Fixed, and the capstone now maps to 3, 4a, and 4b for the reasons it actually earns them.",
        status: "fixed",
    },
    {
        what: "Motor delay guidance was ambiguous",
        detail:
            "The page recommended E16-4 and F15-4. Estes's own recommendation for the Lil' Spite is D12-3, E12-4, E16-6, and F15-6. Both delays are real products and the shorter one is defensible once you add payload mass — but the page stated it without explanation. Now stated as a deliberate choice with the reasoning.",
        status: "fixed",
    },
    {
        what: "Cost estimate was stale and incomplete",
        detail:
            "The $167–$170 core-setup figure omitted the Pro Series II launch pad (required — the standard Porta-Pad II uses a 1/8 in rod and cannot fly this rocket), the motor retainer, the battery, and the payload sled. Realistic budget is closer to $300.",
        status: "fixed",
    },
    {
        what: "The Lil' Spite was framed as a Scout kit",
        detail:
            "The page described it as 'lighter than the larger Estes options,' which is true of its 292 g dry mass but undersells that it is 4 ft 4 in long, rated intermediate, boxed for ages 18+, and about two hours of assembly. It is the counselor's demonstration rocket, not a Scout's requirement-3 build. Reframed.",
        status: "fixed",
    },
    {
        what: "Ground station board has a newer revision",
        detail:
            "Heltec has released the WiFi LoRa 32 V4. The plan specifies V3, which is still the right call — better documented, and most example code assumes it — but it is now easy to order V4 by accident and get a different pin mapping. Noted on the order list.",
        status: "noted",
    },
    {
        what: "All 21 video links verified",
        detail:
            "Every YouTube resource on the badge page was checked against the oEmbed API on August 11, 2026. All 21 are live and correctly attributed.",
        status: "verified",
    },
];

export function getMeetingByDate(date) {
    return meetings.find((m) => m.date === date);
}

// ---------------------------------------------------------------------------
// Calendar — every date in one place
// ---------------------------------------------------------------------------

export const calendarEvents = [
    { date: "2026-08-31", label: "Mon Aug 31", kind: "meeting", title: "Meeting 1 — Why We Go", note: "Claim your space pioneer. Pick up the permission slip and the safety code." },
    { date: "2026-09-04", label: "Fri Sep 4", kind: "deadline", title: "Troop places the kit order", note: "Counselor task. Kits must be in hand for handout night on September 28." },
    { date: "2026-09-28", label: "Mon Sep 28", kind: "meeting", title: "Meeting 2 — How Rockets Work", note: "Pioneer card due tonight. KITS HANDED OUT to everyone who cleared the gate." },
    { date: "2026-10-26", label: "Mon Oct 26", kind: "meeting", title: "Meeting 3 — Missions and Bases", note: "Robotic vs crewed, flying Apollo's trajectory, and designing a base." },
    { date: "2026-11-16", label: "Mon Nov 16", kind: "meeting", title: "Meeting 4 — Mission Control + Flight Readiness", note: "Bring your finished rocket, motors and permission slip. Build help desk open all night." },
    { date: "2026-11-21", label: "Sat Nov 21", kind: "launch", title: "LAUNCH DAY", note: "Range opens 8:30. Rocket, motors, closed-toe shoes, hat, water, chair." },
    { date: "2026-11-23", label: "Mon Nov 23", kind: "meeting", title: "Meeting 5 — Debrief and awards", note: "Bring your requirement 8 career research. Badges get signed tonight." },
    { date: "2026-11-26", label: "Thu Nov 26", kind: "holiday", title: "Thanksgiving", note: "No meeting." },
    { date: "2026-11-28", label: "Sat Nov 28", kind: "backup", title: "Backup launch date", note: "Only if Nov 21 is scrubbed for weather." },
    { date: "2026-12-05", label: "Sat Dec 5", kind: "backup", title: "Second backup launch date", note: "Last resort." },
];

// ---------------------------------------------------------------------------
// The Scout-facing view
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Scouting America's Digital Resource Guide
//
// New since this plan was first written: Scouts now have a free, official,
// always-current online guide, one page per requirement. It replaces the
// pamphlet as the thing a Scout reads. Every URL below was fetched and
// returned 200 in August 2026.
// ---------------------------------------------------------------------------

const DRG_BASE = "https://www.scouting.org/skills/merit-badges/digital-resource-guides/space-exploration/";

export const drg = {
    url: DRG_BASE,
    contents: DRG_BASE + "contents/",
    what:
        "One page per requirement, written by Scouting America, free, and updated when the requirements are. Each page carries the requirement text verbatim, a few hundred words of plain explanation, embedded videos, and links out to NASA. For the newest badges it explicitly replaces the pamphlet — no purchase needed.",
    useItFor: [
        "The thing you point Scouts at instead of a pamphlet. It is free, it is on their phone, and it cannot go out of date the way a printout does.",
        "Requirement 2. The guide has linked biographies for twenty pioneers, which turns 'pick someone' from a blank page into a menu.",
        "Your own backstop. If a Scout asks something mid-meeting and you are not sure, the answer is on the requirement's own page.",
        "Catching up. A Scout who misses a night has an official read-through of exactly what they missed.",
    ],
    dontUseItFor: [
        "The meeting itself. It is a reference, not a lesson plan — no timings, no run-of-show, no facilitation, and nothing for a Scout to physically do.",
        "Requirement 4. The requirement says 'discuss and DEMONSTRATE', and the guide explains the physics well but does not demonstrate anything. The balloon, the spent motor and the simulators are still what meet that word.",
        "Evidence of individual completion. Reading a page is not a Scout telling you something in their own words. That is what the checkout sheet is for.",
    ],
    verdict:
        "Scrolling through it live would be a bad 45 minutes — it is prose, it is linear, and reading a website aloud is the opposite of the night you have built. Assign it as the reading, keep the room for the doing.",
    pages: [
        { req: "Intro", title: "Introduction & overview", url: DRG_BASE },
        { req: "1", title: "Why explore space?", url: DRG_BASE + "req1", subs: [
            { id: "1a", title: "Historical reasons", url: DRG_BASE + "req1a" },
            { id: "1b", title: "Immediate goals", url: DRG_BASE + "req1b" },
            { id: "1c", title: "Benefits back on Earth", url: DRG_BASE + "req1c" },
            { id: "1d", title: "International cooperation", url: DRG_BASE + "req1d" },
        ] },
        { req: "2", title: "Space pioneers — twenty linked biographies", url: DRG_BASE + "req2" },
        { req: "3", title: "Build a model rocket", url: DRG_BASE + "req3", subs: [
            { id: "3 alt", title: "Alternative, if launching is prohibited", url: DRG_BASE + "req3alt" },
        ] },
        { req: "4", title: "Space exploration science", url: DRG_BASE + "req4", subs: [
            { id: "4a", title: "Action–reaction", url: DRG_BASE + "req4a" },
            { id: "4b", title: "How rocket engines work", url: DRG_BASE + "req4b" },
            { id: "4c", title: "How satellites stay in orbit", url: DRG_BASE + "req4c" },
            { id: "4d", title: "How space pictures are made and sent", url: DRG_BASE + "req4d" },
        ] },
        { req: "5", title: "Space missions", url: DRG_BASE + "req5", subs: [
            { id: "5a", title: "A robotic and a crewed mission", url: DRG_BASE + "req5a" },
            { id: "5b", title: "Blog, site or scrapbook", url: DRG_BASE + "req5b" },
            { id: "5c", title: "Design a sample-return mission", url: DRG_BASE + "req5c" },
        ] },
        { req: "6", title: "Spaceships and space stations", url: DRG_BASE + "req6", subs: [
            { id: "6a", title: "Crewed orbital vehicle", url: DRG_BASE + "req6a" },
            { id: "6b", title: "International Space Station", url: DRG_BASE + "req6b" },
        ] },
        { req: "7", title: "Design a space base", url: DRG_BASE + "req7" },
        { req: "8", title: "Space exploration careers", url: DRG_BASE + "req8" },
        { req: "Extra", title: "Extended learning — space junk, patches, the future", url: DRG_BASE + "extended-learning/" },
    ],

    // Requirement 2 asks the Scout to discuss FOUR pioneers besides their own.
    //
    // These 26 are exactly the ones on the printed "Pick Your Space Pioneer"
    // handout, in the same order and with the same numbering, so a Scout
    // holding the paper and a Scout on their phone are looking at the same
    // thing. Every URL is the one embedded in that PDF; all 26 were checked
    // and return 200.
    pioneers: [
        { n: 1, cat: "Foundations & engineering", name: "Katherine Johnson", role: "NASA mathematician", country: "U.S.", life: "1918–2020", src: "NASA", url: "https://science.nasa.gov/people/katherine-johnson/",
          did: "Calculated flight paths for Alan Shepard, John Glenn and Apollo. Before Glenn flew, he specifically asked for Johnson to check the new electronic computer's orbital calculations by hand.",
          angle: "Math that made human spaceflight possible" },
        { n: 2, cat: "Foundations & engineering", name: "Margaret Hamilton", role: "Software engineer", country: "U.S.", life: "born 1936", src: "NASA", url: "https://science.nasa.gov/people/margaret-hamilton/",
          did: "Led the MIT team that developed Apollo guidance software. Her team designed software that could prioritise critical tasks when the Apollo 11 computer became overloaded during the lunar landing.",
          angle: "How software helped save the Moon landing" },
        { n: 3, cat: "Foundations & engineering", name: "Robert H. Goddard", role: "Rocket pioneer", country: "U.S.", life: "1882–1945", src: "NASA", url: "https://www.nasa.gov/dr-robert-h-goddard-american-rocketry-pioneer",
          did: "Built and launched the first liquid-fuelled rocket in 1926. He tested pumps, gyroscopes and steerable rocket systems long before spaceflight was practical, despite public ridicule of his ideas.",
          angle: "The experiments behind modern rockets" },
        { n: 4, cat: "Foundations & engineering", name: "Konstantin Tsiolkovsky", role: "Rocket theorist", country: "Russia", life: "1857–1935", src: "Britannica", url: "https://www.britannica.com/biography/Konstantin-Eduardovich-Tsiolkovsky",
          did: "Published the rocket equation in 1903 and showed mathematically why high-speed rockets need to throw mass backward. He also wrote about multistage rockets and living in space decades before they existed.",
          angle: "The mathematics of reaching space" },
        { n: 5, cat: "Foundations & engineering", name: "Sergei Korolev", role: "Chief rocket designer", country: "Soviet Union", life: "1907–1966", src: "NASA", url: "https://www.nasa.gov/history/sputnik/korolev.html",
          did: "Directed the programme behind Sputnik, the first satellite, and Vostok 1, the first human spaceflight. During his lifetime the Soviet government kept his identity so secret he was known publicly only as the \u201cChief Designer.\u201d",
          angle: "The hidden engineer behind major space firsts" },
        { n: 6, cat: "Foundations & engineering", name: "Wernher von Braun", role: "Rocket engineer", country: "Germany/U.S.", life: "1912–1977", src: "NASA", url: "https://www.nasa.gov/people/wernher-von-braun",
          did: "Led development work that culminated in NASA's Saturn V Moon rocket. His earlier work on Nazi Germany's V-2 programme, including its use of forced labour, makes his legacy scientifically important and morally difficult.",
          angle: "Saturn V — and the complicated history behind it" },

        { n: 7, cat: "First flyers & astronauts", name: "Yuri Gagarin", role: "Cosmonaut", country: "Soviet Union", life: "1934–1968", src: "Britannica", url: "https://www.britannica.com/biography/Yuri-Gagarin",
          did: "Became the first human in space on April 12, 1961. Vostok 1 completed one orbit of Earth in about 108 minutes, proving a person could launch, experience orbit and return safely.",
          angle: "The first human voyage beyond Earth" },
        { n: 8, cat: "First flyers & astronauts", name: "Alan Shepard", role: "Astronaut/test pilot", country: "U.S.", life: "1923–1998", src: "NASA", url: "https://www.nasa.gov/former-astronaut-alan-shepard",
          did: "Became the first American in space on Freedom 7 in 1961. Ten years later he commanded Apollo 14, walked on the Moon and famously used a makeshift club to hit golf balls on the lunar surface.",
          angle: "From a 15-minute flight to walking on the Moon" },
        { n: 9, cat: "First flyers & astronauts", name: "John Glenn", role: "Astronaut/test pilot", country: "U.S.", life: "1921–2016", src: "NASA", url: "https://www.nasa.gov/former-astronaut-john-h-glenn",
          did: "Became the first American to orbit Earth aboard Friendship 7 in 1962. He returned to space on the shuttle Discovery in 1998 at age 77, becoming the oldest space traveller at that time.",
          angle: "Two spaceflights separated by 36 years" },
        { n: 10, cat: "First flyers & astronauts", name: "Neil Armstrong", role: "Astronaut/test pilot", country: "U.S.", life: "1930–2012", src: "NASA", url: "https://www.nasa.gov/humans-in-space/astronauts/former-astronauts/former-astronaut-neil-a-armstrong",
          did: "Commanded Apollo 11 and became the first person to step onto the Moon in 1969. Before NASA he flew experimental aircraft as a test pilot; as a youth he earned the Eagle Scout rank.",
          angle: "Test pilot, Eagle Scout and first Moon walker" },
        { n: 11, cat: "First flyers & astronauts", name: "Gus Grissom", role: "Astronaut/test pilot", country: "U.S.", life: "1926–1967", src: "NASA", url: "https://www.nasa.gov/former-astronaut-virgil-i-grissom/",
          did: "One of the original Mercury Seven, Grissom flew Mercury-Redstone 4 and commanded Gemini 3. He and crewmates Ed White and Roger Chaffee died in the Apollo 1 ground-test fire, leading to major spacecraft safety changes.",
          angle: "Exploration, risk and lessons from Apollo 1" },
        { n: 12, cat: "First flyers & astronauts", name: "Valentina Tereshkova", role: "Cosmonaut", country: "Soviet Union", life: "born 1937", src: "Britannica", url: "https://www.britannica.com/biography/Valentina-Tereshkova",
          did: "Became the first woman in space aboard Vostok 6 in 1963. A former textile worker and amateur parachutist, she spent nearly three days in orbit and remains the only woman to have flown a solo space mission.",
          angle: "The first woman — and a solo mission" },
        { n: 13, cat: "First flyers & astronauts", name: "Sally Ride", role: "Astronaut/physicist", country: "U.S.", life: "1951–2012", src: "NASA", url: "https://www.nasa.gov/former-astronaut-sally-ride",
          did: "Became the first American woman in space aboard Challenger in 1983. A physicist, she later served on the investigations of both the Challenger and Columbia accidents and became a major science-education advocate.",
          angle: "Astronaut, physicist and safety investigator" },
        { n: 14, cat: "First flyers & astronauts", name: "Guion Bluford", role: "Astronaut/aerospace engineer", country: "U.S.", life: "born 1942", src: "NASA", url: "https://www.nasa.gov/former-astronaut-guion-bluford/",
          did: "Became the first African American in space aboard Challenger in 1983. An Air Force pilot and aerospace engineer, he flew four shuttle missions and helped establish a new era of more diverse astronaut crews.",
          angle: "Engineering, flying and a barrier-breaking first" },
        { n: 15, cat: "First flyers & astronauts", name: "Mae Jemison", role: "Astronaut/physician", country: "U.S.", life: "born 1956", src: "NASA", url: "https://www.nasa.gov/people/mae-jemison-m-d",
          did: "Became the first African American woman in space aboard Endeavour in 1992. She is also a physician who served in the Peace Corps and has worked to connect science, medicine, technology and education.",
          angle: "A career combining medicine and spaceflight" },
        { n: 16, cat: "First flyers & astronauts", name: "Ellen Ochoa", role: "Astronaut/engineer", country: "U.S.", life: "born 1958", src: "NASA", url: "https://www.nasa.gov/former-astronaut-ellen-ochoa/",
          did: "Became the first Hispanic woman in space in 1993. An electrical engineer and optical-systems researcher, she flew four shuttle missions and later became director of NASA's Johnson Space Center.",
          angle: "From engineering laboratory to NASA leadership" },
        { n: 17, cat: "First flyers & astronauts", name: "Eileen Collins", role: "Astronaut/test pilot", country: "U.S.", life: "born 1956", src: "Britannica", url: "https://www.britannica.com/biography/Eileen-Collins",
          did: "Became the first woman to pilot a Space Shuttle in 1995 and the first woman to command one in 1999. She later commanded the 2005 Return to Flight mission after the Columbia accident.",
          angle: "Breaking barriers in spacecraft command" },

        { n: 18, cat: "Mission builders & explorers", name: "Steve Squyres", role: "Planetary scientist", country: "U.S.", life: "born 1956", src: "NASA", url: "https://science.nasa.gov/people/steve-squyres",
          did: "Led the science team for NASA's Spirit and Opportunity Mars rovers. Each rover was designed for about 90 Martian days, but Spirit worked for years and Opportunity explored Mars for nearly fifteen years.",
          angle: "How a 90-day rover mission lasted for years" },
        { n: 19, cat: "Mission builders & explorers", name: "Homer Hickam", role: "Engineer/author", country: "U.S.", life: "born 1943", src: "homerhickam.com", url: "https://homerhickam.com/about-homer/",
          did: "As a teenager in a West Virginia coal town, Hickam and his friends taught themselves to build rockets — the story told in Rocket Boys and the film October Sky. He later became a NASA engineer.",
          angle: "A teenager building rockets on the way to NASA" },

        { n: 20, cat: "Visionaries", name: "Jules Verne", role: "Novelist", country: "France", life: "1828–1905", src: "Britannica", url: "https://www.britannica.com/biography/Jules-Verne",
          did: "His 1865 novel From the Earth to the Moon imagined a crewed Moon voyage more than a century before Apollo. Some details were remarkably suggestive of the future, including a Florida launch region and ocean recovery.",
          angle: "How imagination anticipated real spaceflight" },
        { n: 21, cat: "Visionaries", name: "Arthur C. Clarke", role: "Writer/futurist", country: "U.K.", life: "1917–2008", src: "Britannica", url: "https://www.britannica.com/biography/Arthur-C-Clarke",
          did: "In 1945 Clarke described how satellites in geostationary orbit could relay communications around Earth. The concept became fundamental to modern satellite communications; he later wrote 2001: A Space Odyssey.",
          angle: "Predicting the communications-satellite age" },
        { n: 22, cat: "Visionaries", name: "Robert A. Heinlein", role: "Science-fiction writer", country: "U.S.", life: "1907–1988", src: "Britannica", url: "https://www.britannica.com/biography/Robert-A-Heinlein",
          did: "Heinlein wrote technically minded stories about rockets, lunar travel and future societies when human spaceflight was still imaginary. His books helped make space travel feel achievable to generations of young readers.",
          angle: "How stories can inspire engineers and explorers" },

        { n: 23, cat: "Commercial space", name: "Burt Rutan", role: "Aerospace designer", country: "U.S.", life: "born 1943", src: "Britannica", url: "https://www.britannica.com/biography/Burt-Rutan",
          did: "Designed SpaceShipOne, which in 2004 became the first privately funded crewed spacecraft to reach space and won the Ansari X Prize. Its air-launched, reusable approach challenged traditional spacecraft design.",
          angle: "The first privately funded crewed spacecraft" },
        { n: 24, cat: "Commercial space", name: "Elon Musk", role: "SpaceX founder", country: "U.S.", life: "born 1971", src: "Britannica", url: "https://www.britannica.com/biography/Elon-Musk",
          did: "Founded SpaceX in 2002. Falcon 9 made landing and reflying orbital-class boosters a regular part of launch operations, while Dragon spacecraft began carrying cargo and astronauts to the International Space Station.",
          angle: "Making orbital rocket reuse routine" },
        { n: 25, cat: "Commercial space", name: "Jeff Bezos", role: "Blue Origin founder", country: "U.S.", life: "born 1964", src: "Britannica", url: "https://www.britannica.com/biography/Jeff-Bezos",
          did: "Founded Blue Origin in 2000 with a long-term goal of expanding human activity in space. The company developed reusable New Shepard suborbital vehicles and the much larger New Glenn orbital rocket.",
          angle: "A different strategy for reusable spaceflight" },
        { n: 26, cat: "Commercial space", name: "Richard Branson", role: "Virgin Galactic founder", country: "U.K.", life: "born 1950", src: "Britannica", url: "https://www.britannica.com/biography/Richard-Branson",
          did: "Founded Virgin Galactic to pursue commercial suborbital human spaceflight. In 2021 he flew aboard VSS Unity on a suborbital mission, becoming one of the company founders to fly on his own space system.",
          angle: "Turning suborbital flight into a passenger experience" },
    ],

    pickHelp: {
        favourite: [
            "Pick the person whose story you would actually enjoy telling.",
            "Look for a \u201cfirst,\u201d a hard problem, a surprising fact or a major risk.",
            "Your card can focus on one achievement — it does not need their entire life.",
        ],
        others: [
            "Know what they did and why it mattered.",
            "Know one mission, invention, discovery or important event.",
            "Have one memorable fact you can explain in your own words.",
        ],
    },
};

export const scoutGuide = {
    intro:
        "Everything you personally have to do, in the order you have to do it. The counselor's side of this page has the run-of-shows and the gear lists — you don't need any of that. You need this.",
    theDeal:
        "Eight requirements. Come to five Monday sessions, make a space pioneer card, build your rocket, research a career, and come to launch day on November 21. Everything else we do together in the room. Three things happen on your own time — the pioneer card, the build, and the career research — and none of them takes more than an evening.",

    buyList: {
        heading: "What you get — and it costs you nothing",
        total: "$0. The troop buys your kit, both motor packs, and your wadding.",
        deadline: "Kits handed out Monday, September 28 — earn yours first.",
        why:
            "Everybody flies the same rocket on purpose. The competition is scored on how well you predict your own flight, not on who spent the most, so an identical airframe makes it a fair fight — and now nobody's flight depends on what their family can spend. You do not order anything. You earn your kit by clearing the four things below, and I hand it to you.",
        items: [
            { item: "Estes Cosmic Cargo kit", price: "Provided", note: "Beginner level, no glue needed for the main structure, and it has a real payload bay. Yours to keep." },
            { item: "Estes B6-4 engines, 3-pack", price: "Provided", note: "Your first flight. Lower and slower, so it's easier to track and easier to get back." },
            { item: "Estes C6-5 engines, 3-pack", price: "Provided", note: "Your scored competition flight." },
            { item: "Recovery wadding", price: "Provided", note: "Protects the parachute from the ejection charge. Never fly without it." },
        ],
        alsoNeed:
            "The only things you need from home are sandpaper, masking tape, and spray paint if you want to decorate it. White glue helps but isn't required for this kit. Nothing here costs you anything — if you are missing something, ask me and it appears.",
    },

    study: {
        heading: "What to study",
        intro:
            "You do not have to watch any of this. But if you show up to a night having watched the video for it, that night is more fun and you'll finish the requirement faster. Everything here is short.",
        blocks: [
            {
                req: "Req 1",
                title: "Why we go to space",
                forMeeting: "Meeting 1 · Aug 31",
                doNow: "Nothing to prepare. Just show up.",
                videos: [
                    { t: "The History of Space Exploration", ch: "SpaceXVideos", id: "TL__l9gC1Ss" },
                    { t: "Space Exploration's Surprising Earthly Benefits!", ch: "Museum of Science, Boston", id: "z-bTkxza4I4" },
                    { t: "International Cooperation in Space", ch: "Space Tech Insider", id: "TS27Br2-XgY" },
                ],
            },
            {
                req: "Req 2",
                title: "Your space pioneer card",
                forMeeting: "Due Meeting 2 · Sep 28",
                doNow: "This is requirement 2, straight out of the badge: a collector\u2019s card — like a baseball card — about a \u201cspace pioneer.\u201d That means anyone who did something first or made a first possible: engineers, mathematicians and flight controllers count as much as astronauts. Claim a name at Meeting 1 (no duplicates) — the pioneer list further up this page has 26 to choose from, each one linked to a real biography — then make the card. Front: a picture. Back: who they were, what they actually did, why it mattered, and one thing that surprised you. Hand-drawn scores the same as printed — it is a 30-minute job. Then be ready to talk about four OTHER pioneers, which you pick up from your patrol\u2019s cards.",
                videos: [
                    { t: "Here's How I Make Custom Trading Cards!", ch: "Wax Museum Podcast", id: "PkCCLH_f1us" },
                    { t: "How to Make Trading Cards By Hand", ch: "ChaosGalaxyTCG", id: "vYbeo4iS1Pc" },
                ],
            },
            {
                req: "Reqs 3 + 4",
                title: "How rockets work",
                forMeeting: "Meeting 2 · Sep 28",
                doNow: "Read the NAR safety code before this meeting — you have to pass a quiz on it before I hand you a kit. Play with the launch and recovery simulators on this page; they are the same physics you'll be predicting on launch day.",
                videos: [
                    { t: "Rocket Engines Explained", ch: "Martian Wolf", id: "gz8L1i0ODeA" },
                    { t: "How Do Satellites Get & Stay in Orbit?", ch: "SciShow Space", id: "IC1JQu9xGHQ" },
                ],
            },
            {
                req: "Reqs 5 + 6",
                title: "Missions and spacecraft",
                forMeeting: "Meeting 3 · Oct 26",
                doNow: "Pick one robotic mission and one crewed mission you actually find interesting. You'll be asked what each one discovered and why it mattered — so pick ones you want to talk about.",
                videos: [
                    { t: "Voyagers' Mission to the Outer Solar System", ch: "NASA JPL", id: "uJpJ79AxrzI" },
                    { t: "Putting Man on The Moon in 11 Years", ch: "S3 | Science, Startups & Stories", id: "jUW_1XlrWmg" },
                    { t: "How does a Mars Rover work? (Perseverance)", ch: "Jared Owen", id: "0-oQRSViZQE" },
                    { t: "How The Space Shuttle Worked", ch: "Real Engineering", id: "w4FCkbPykdQ" },
                ],
            },
            {
                req: "Req 7",
                title: "Design a base somewhere else",
                forMeeting: "Meeting 3 · Oct 26",
                doNow: "Think about where you'd want to live: the Moon, Mars, Titan, Europa, an asteroid, or floating in the clouds of Venus. You'll design it with your patrol.",
                videos: [
                    { t: "How NASA Will Build A City On The Moon", ch: "The Space Race", id: "ATgwz_hS3Qg" },
                ],
            },
            {
                req: "Req 8",
                title: "A career in space",
                forMeeting: "Due Meeting 5 · Nov 23",
                doNow: "Pick ONE job — not 'astronaut' unless you mean it. Find out: the training and education it needs, what that costs, whether anyone is hiring, what it pays, what you'd actually do all day, and where it leads. Then the part people forget: be ready to tell me what about that job makes it interesting to YOU. Half a page is plenty. You can research it online, at the library, or by interviewing someone who does it — ask a parent first if you are contacting anyone.",
                videos: [],
            },
        ],
    },

    gate: {
        heading: "How you earn your kit",
        intro:
            "Four things. Clear them and the kit is yours on September 28. These are Troop 308 rules about who gets handed hardware and who stands on our range — they are not extra merit badge requirements, and missing one does not stop you earning the badge.",
        items: [
            "Show up to Meeting 1 on August 31 (or catch up with the counselor on requirement 1).",
            "Turn in your space pioneer card.",
            "Pass the NAR Model Rocket Safety Code quiz — 8 out of 10, open book, retake it as many times as you want.",
            "Write down your mission objective for launch #2, and have a parent sign the launch-day permission slip.",
        ],
        objective:
            "Your 'mission objective' is what you're trying to find out on your second flight. It has to produce a NUMBER. Good ones: how much altitude do I lose per gram of nose weight; how much farther does a streamer drift than a chute; how different are two supposedly identical flights. Bad one: 'launch it again.'",
    },

    launchDay: {
        heading: "Launch day — Saturday, November 21",
        bring: [
            "Your rocket, finished and painted",
            "Your motors (both packs) and your wadding",
            "Closed-toe shoes — no sandals, this is a field with a hot pad on it",
            "Hat, sunscreen, water bottle",
            "A folding chair, and a parent if you'd like one",
            "Your competition card with your sealed prediction on it",
        ],
        timing: "Range opens 8:30 a.m. Craftsmanship gets judged before anything flies, so arrive finished. Done by about 1:15.",
        rules: [
            "Never approach a rocket that didn't launch. Wait 60 seconds. The counselor is the only person who goes to the pad.",
            "Stay behind the cones when the range is hot.",
            "If your rocket lands somewhere awkward — a tree, a road, the other side of a fence — you tell an adult. You do not go get it.",
        ],
    },
};
