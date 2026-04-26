// Data for /scouts/activities/[slug] pages.
// Each activity is rendered by src/pages/scouts/activities/[slug].astro.
//
// Section types supported by the renderer:
//   { type: "prose",      heading?, paragraphs: string[] }
//   { type: "list",       heading?, intro?, items: string[], muted? }
//   { type: "blockquote", heading?, text }
//   { type: "code",       heading?, text }
//   { type: "table",      heading?, intro?, columns: [{key,label}], rows, footerNote? }

export const activities = [
    {
        slug: "first-aid-corner-relay",
        external: true, // already has its own custom page; just list it on the index
        title: "First Aid Corner Relay",
        icon: "🩹",
        duration: "45 min",
        summary:
            "Four-corner first-aid relay. Each corner is a patient with a scenario card; responders rotate, diagnose, treat, and explain prevention. Built around a simple Stop · Check · Ask · Treat · Call · Prevent pattern.",
        advances: [
            "Tenderfoot 4a/4b/4c",
            "Second Class 6a/6b/6c",
            "First Class 7a/7b/7c",
            "First Aid MB practice",
            "Star/Life teaching",
        ],
    },
    {
        slug: "knot-board-relay",
        title: "Knot Board Relay",
        icon: "🪢",
        duration: "60 min",
        summary:
            "Four knot stations + a uses-of-the-knot quiz. Patrols rotate on a timer; older Scouts judge. Designed so every Scout ties every required knot under pressure at least twice.",
        advances: [
            "Tenderfoot 3a (square knot, two half-hitches, taut-line)",
            "Second Class 2f (sheet bend, bowline)",
            "First Class 3a/3d (whipping, fusing, lashings prep)",
            "Pioneering MB practice",
        ],
        sections: [
            {
                type: "prose",
                heading: "Why this format",
                paragraphs: [
                    "Knots are the single most-tested rank skill across Tenderfoot, Second Class, and First Class. A relay is the fastest way to get every Scout to the 'tied it cleanly under pressure' bar — which is what 'Demonstrate' actually means in the rank requirements.",
                    "The room is set up with four tables (or four corners with rope coils on the floor). Each table is one knot family. Patrols rotate every 10 minutes. At each table they tie, explain a use case, and untie.",
                ],
            },
            {
                type: "table",
                heading: "60-minute meeting plan",
                columns: [{ key: "time", label: "Time" }, { key: "activity", label: "Activity" }],
                rows: [
                    { time: "0–5 min", activity: "Opening, gather lines, brief on the relay rules" },
                    { time: "5–10 min", activity: "Demo of all six knots by SPL/ASPL" },
                    { time: "10–50 min", activity: "Four 10-minute station rotations by patrol" },
                    { time: "50–57 min", activity: "Mystery-knot challenge: judge calls a knot, every Scout ties under 30 sec" },
                    { time: "57–60 min", activity: "Debrief, sign off, recognize the fastest patrol" },
                ],
            },
            {
                type: "table",
                heading: "The four stations",
                columns: [
                    { key: "station", label: "Station" },
                    { key: "knots", label: "Knots taught" },
                    { key: "use", label: "Real-world use" },
                    { key: "advancement", label: "Advancement helped" },
                ],
                rows: [
                    {
                        station: "1. Joining lines",
                        knots: "Square knot, sheet bend",
                        use: "Tying two ropes of the same / different size",
                        advancement: "Tenderfoot 3a, Second Class 2f",
                    },
                    {
                        station: "2. Tying to objects",
                        knots: "Two half-hitches, clove hitch",
                        use: "Securing a tarp guy line, lashing start",
                        advancement: "Tenderfoot 3a, First Class 3a",
                    },
                    {
                        station: "3. Adjustable & loops",
                        knots: "Taut-line hitch, bowline",
                        use: "Tarp ridgeline tension, rescue loop",
                        advancement: "Tenderfoot 3a, Second Class 2f",
                    },
                    {
                        station: "4. Rope care",
                        knots: "Whipping, fusing, coiling",
                        use: "Stop frayed ends, store rope cleanly",
                        advancement: "First Class 3a (rope care)",
                    },
                ],
            },
            {
                type: "table",
                heading: "Per-Scout scorecard",
                intro: "One scorecard per Scout. A station chief signs each row only when the Scout ties cleanly without coaching.",
                columns: [
                    { key: "knot", label: "Knot" },
                    { key: "tied", label: "Tied cleanly" },
                    { key: "use", label: "Stated a use" },
                    { key: "untied", label: "Untied & coiled" },
                ],
                rows: [
                    { knot: "Square knot", tied: "☐", use: "☐", untied: "☐" },
                    { knot: "Two half-hitches", tied: "☐", use: "☐", untied: "☐" },
                    { knot: "Taut-line hitch", tied: "☐", use: "☐", untied: "☐" },
                    { knot: "Sheet bend", tied: "☐", use: "☐", untied: "☐" },
                    { knot: "Bowline", tied: "☐", use: "☐", untied: "☐" },
                    { knot: "Clove hitch", tied: "☐", use: "☐", untied: "☐" },
                    { knot: "Whipping or fusing", tied: "☐", use: "☐", untied: "☐" },
                ],
            },
            {
                type: "table",
                heading: "Supplies",
                columns: [{ key: "item", label: "Item" }, { key: "qty", label: "Quantity" }],
                rows: [
                    { item: "Working lines (~6 ft, ¼–⅜ in)", qty: "12–16" },
                    { item: "Heavier line for bowline rescue demo", qty: "2" },
                    { item: "Whipping twine", qty: "1 spool" },
                    { item: "Lighter or hot-knife for fusing (adult only)", qty: "1" },
                    { item: "Knot diagrams (laminated)", qty: "4" },
                    { item: "Clipboards + scorecards + pens", qty: "1 per Scout" },
                    { item: "Stopwatch / phone timer", qty: "1" },
                ],
            },
            {
                type: "list",
                heading: "Older-Scout leadership layer",
                items: [
                    "SPL or ASPL = event captain, runs the timer and rotates patrols.",
                    "One Star/Life Scout per station as 'station chief' — they teach, then judge.",
                    "Adults only watch and sign off. Adults do NOT teach the knots — that's the EDGE practice the older Scouts need for Star req 5 and Life req 5.",
                ],
            },
            {
                type: "list",
                heading: "Sources",
                items: [
                    "Scouting America — Tenderfoot Rank Requirements (2025)",
                    "Scouting America — Scouts BSA Rank Requirements (2025)",
                    "Pioneering merit badge pamphlet — knot families and uses",
                ],
            },
        ],
    },
    {
        slug: "compass-course",
        title: "Compass Course in the Parking Lot",
        icon: "🧭",
        duration: "60 min",
        summary:
            "Five numbered stakes laid out in the church parking lot. Each Scout walks a bearing-and-distance card with a compass to find the next stake. Pace count is verified at the end.",
        advances: [
            "Second Class 3a (compass parts/use)",
            "Second Class 3b (orient a map)",
            "Second Class 3d (5-mile hike on map)",
            "First Class 4a/4b (orienteering course)",
        ],
        sections: [
            {
                type: "prose",
                heading: "Why this format",
                paragraphs: [
                    "Most Scouts know what a compass is. Far fewer can hold a bearing while walking. This drill closes that gap in one meeting using only the parking lot.",
                    "Five stakes are placed in advance. Each Scout gets a numbered route card listing 4 legs (bearing + distance in paces). They start at stake 1, follow the card, and should end at stake 5 within 3 paces. Adults at the start verify pace count first.",
                ],
            },
            {
                type: "table",
                heading: "60-minute meeting plan",
                columns: [{ key: "time", label: "Time" }, { key: "activity", label: "Activity" }],
                rows: [
                    { time: "0–5 min", activity: "Opening, brief safety, parts of a compass (3 things: housing, needle, base plate)" },
                    { time: "5–15 min", activity: "Pace-count calibration: each Scout walks 100 ft and records their pace count" },
                    { time: "15–25 min", activity: "Bearing demo: 'shoot' a bearing to a known landmark; cross-check with a partner" },
                    { time: "25–50 min", activity: "Run the course — Scouts staggered 60 sec apart so they don't follow each other" },
                    { time: "50–55 min", activity: "Map-orient drill: lay map on hood, align with compass" },
                    { time: "55–60 min", activity: "Debrief, signoff, log who needs a re-run next week" },
                ],
            },
            {
                type: "table",
                heading: "Sample course card",
                intro: "Distances scaled to a typical Scout's pace (~24 in / step). Adjust per Scout if their calibration is off.",
                columns: [
                    { key: "leg", label: "Leg" },
                    { key: "from", label: "From" },
                    { key: "bearing", label: "Bearing" },
                    { key: "distance", label: "Distance" },
                ],
                rows: [
                    { leg: "1", from: "Stake 1", bearing: "045° (NE)", distance: "30 paces" },
                    { leg: "2", from: "Stake 2", bearing: "135° (SE)", distance: "20 paces" },
                    { leg: "3", from: "Stake 3", bearing: "225° (SW)", distance: "30 paces" },
                    { leg: "4", from: "Stake 4", bearing: "315° (NW)", distance: "20 paces" },
                ],
                footerNote:
                    "If the Scout finishes within 3 paces of stake 5, they pass. Outside 3 paces, they re-run with a coach.",
            },
            {
                type: "table",
                heading: "Per-Scout scorecard",
                columns: [
                    { key: "skill", label: "Skill" },
                    { key: "demo", label: "Demonstrated" },
                ],
                rows: [
                    { skill: "Named the parts of a compass", demo: "☐" },
                    { skill: "Calibrated pace count to 100 ft", demo: "☐" },
                    { skill: "Shot a bearing to a landmark", demo: "☐" },
                    { skill: "Walked a 4-leg course within 3 paces", demo: "☐" },
                    { skill: "Oriented a map with compass", demo: "☐" },
                ],
            },
            {
                type: "table",
                heading: "Supplies",
                columns: [{ key: "item", label: "Item" }, { key: "qty", label: "Quantity" }],
                rows: [
                    { item: "Baseplate compasses (Suunto A-10 or similar)", qty: "1 per Scout" },
                    { item: "Numbered stakes / cones", qty: "5" },
                    { item: "100-ft tape (for pace calibration)", qty: "1" },
                    { item: "Course cards (printed, one per Scout)", qty: "1 each" },
                    { item: "Local topo map", qty: "2" },
                    { item: "Clipboards + pens", qty: "1 per Scout" },
                    { item: "Stopwatch", qty: "1" },
                ],
            },
            {
                type: "list",
                heading: "Sources",
                items: [
                    "Scouting America — Second Class Rank Requirements (2025)",
                    "Scouting America — First Class Rank Requirements (2025)",
                    "Orienteering merit badge pamphlet — bearings and pace count",
                ],
            },
        ],
    },
    {
        slug: "backpack-pack-out",
        title: "Backpack Pack-Out",
        icon: "🎒",
        duration: "60 min",
        summary:
            "30 items on a table. Patrols pack a real overnight pack inside 15 minutes and defend their choices to the SPL. Built around the 10 essentials, hike planning, and weight discipline.",
        advances: [
            "Tenderfoot 1b (gear list, presentation)",
            "Second Class 1b (10 essentials)",
            "Second Class 1c (hike preparation)",
            "First Class 1a (overnight plan)",
        ],
        sections: [
            {
                type: "prose",
                heading: "Why this format",
                paragraphs: [
                    "Most new Scouts pack their first overnight by copying a parent. They don't actually own the gear list. This drill makes them defend each item under time pressure, with patrol mates watching.",
                    "Lay 30 items on a table — about half are essential, the rest are 'troop-camp distractions' (like a folding chair, second flashlight, or family-size tent). Each patrol gets one pack and 15 minutes to pack for a one-night April backpacking trip in the Santa Lucia range.",
                ],
            },
            {
                type: "table",
                heading: "60-minute meeting plan",
                columns: [{ key: "time", label: "Time" }, { key: "activity", label: "Activity" }],
                rows: [
                    { time: "0–10 min", activity: "Brief on the 10 essentials and the hypothetical trip (route, weather, water sources)" },
                    { time: "10–25 min", activity: "Patrol pack-out — 15-minute timer" },
                    { time: "25–40 min", activity: "Each patrol presents their pack to the SPL and one adult; defend each item" },
                    { time: "40–50 min", activity: "Weigh each pack; compare to 20% of body weight rule of thumb" },
                    { time: "50–60 min", activity: "Debrief, what they'd swap, signoff" },
                ],
            },
            {
                type: "table",
                heading: "The 30-item table (mix of essential and distractor)",
                intro: "Distractors marked ✗ — Scouts should leave them on the table.",
                columns: [
                    { key: "item", label: "Item" },
                    { key: "verdict", label: "Pack?" },
                    { key: "why", label: "Why" },
                ],
                rows: [
                    { item: "Map (paper, in zip-lock)", verdict: "✓", why: "Navigation — 10 essentials" },
                    { item: "Compass", verdict: "✓", why: "Navigation — 10 essentials" },
                    { item: "Sun hat or brimmed cap", verdict: "✓", why: "Sun protection" },
                    { item: "Sunscreen (travel size)", verdict: "✓", why: "Sun protection" },
                    { item: "Insulation layer (fleece or puffy)", verdict: "✓", why: "Insulation — Sierra cold nights" },
                    { item: "Rain jacket", verdict: "✓", why: "Insulation / weather" },
                    { item: "Headlamp + spare batteries", verdict: "✓", why: "Illumination" },
                    { item: "Personal first aid kit", verdict: "✓", why: "First aid supplies" },
                    { item: "Lighter + waterproof matches", verdict: "✓", why: "Fire" },
                    { item: "Multitool or pocketknife (with Totin' Chip)", verdict: "✓", why: "Repair / tools" },
                    { item: "Trail food (lunch + snacks)", verdict: "✓", why: "Nutrition" },
                    { item: "Dinner + breakfast (one-pot meal)", verdict: "✓", why: "Nutrition" },
                    { item: "Water bottles or bladder (2–3 L)", verdict: "✓", why: "Hydration" },
                    { item: "Water filter or treatment", verdict: "✓", why: "Hydration" },
                    { item: "Emergency shelter (bivy or tarp)", verdict: "✓", why: "Emergency shelter" },
                    { item: "Sleeping bag (rated for 30 °F)", verdict: "✓", why: "Sleep" },
                    { item: "Sleeping pad", verdict: "✓", why: "Sleep / insulation from ground" },
                    { item: "Tent or share shelter", verdict: "✓", why: "Shelter" },
                    { item: "Stove + fuel canister", verdict: "✓", why: "Cook" },
                    { item: "Pot + spoon", verdict: "✓", why: "Cook / eat" },
                    { item: "Toiletries (toothbrush, paste, TP, hand sanitizer)", verdict: "✓", why: "Hygiene" },
                    { item: "Trowel + WAG bag", verdict: "✓", why: "LNT cathole / pack-out" },
                    { item: "Whistle", verdict: "✓", why: "Signal" },
                    { item: "Trash bag (gallon)", verdict: "✓", why: "LNT pack-out" },
                    { item: "Duct tape (wrapped on bottle)", verdict: "✓", why: "Repair" },
                    { item: "Folding camp chair", verdict: "✗", why: "Distractor — too heavy, not needed" },
                    { item: "Family-size tent (10-person)", verdict: "✗", why: "Distractor — wrong tent" },
                    { item: "Second flashlight", verdict: "✗", why: "Distractor — headlamp + batteries is enough" },
                    { item: "Bluetooth speaker", verdict: "✗", why: "Distractor — LNT, batteries" },
                    { item: "Cast-iron skillet", verdict: "✗", why: "Distractor — backpacking, not car-camp" },
                ],
            },
            {
                type: "table",
                heading: "Per-Scout scorecard",
                columns: [
                    { key: "skill", label: "Skill" },
                    { key: "demo", label: "Demonstrated" },
                ],
                rows: [
                    { skill: "Listed all 10 essentials", demo: "☐" },
                    { skill: "Packed without the 5 distractors", demo: "☐" },
                    { skill: "Pack weight ≤ 20% body weight", demo: "☐" },
                    { skill: "Defended each item to SPL", demo: "☐" },
                    { skill: "Stated water plan (sources + treatment)", demo: "☐" },
                ],
            },
            {
                type: "list",
                heading: "Sources",
                items: [
                    "Scouting America — Tenderfoot, Second Class, First Class Rank Requirements (2025)",
                    "Camping merit badge pamphlet — gear and pack list",
                    "Scouting America — Outdoor Code & Leave No Trace 7 principles",
                ],
            },
        ],
    },
    {
        slug: "stove-fuel-lab",
        title: "Stove & Fuel Lab",
        icon: "🔥",
        duration: "75 min",
        summary:
            "Four stoves (canister, liquid, alcohol, twig). Light, boil one cup of water, document fuel use. Scouts compare boil times, fuel weight, and weather sensitivity. Adults supervise lighting at every station.",
        advances: [
            "Second Class 2c (lightweight cooking method)",
            "First Class 2d (cooking comparison)",
            "Cooking MB practice",
            "Fire safety / fuel handling sign-off",
        ],
        sections: [
            {
                type: "prose",
                heading: "Why this format",
                paragraphs: [
                    "Most Scouts only ever use the stove their family bought. A 75-minute side-by-side lab forces them to think about why we pick one stove for backpacking and a different one for car-camping.",
                    "Each station has one stove + one cup of water + one timer. Adult supervisor lights, then steps back to coach. Scouts log boil time, fuel used (weigh canister or measure mL), and rate weather sensitivity (wind, cold).",
                ],
            },
            {
                type: "table",
                heading: "75-minute meeting plan",
                columns: [{ key: "time", label: "Time" }, { key: "activity", label: "Activity" }],
                rows: [
                    { time: "0–10 min", activity: "Safety brief: fuel handling, fire blankets, full water bucket at every station" },
                    { time: "10–55 min", activity: "Four 10-min station rotations + 5-min reset between" },
                    { time: "55–65 min", activity: "Compare data on the whiteboard, vote on best stove for: backpacking, car camp, winter, summer" },
                    { time: "65–75 min", activity: "Debrief, sign off, store fuel safely in adult vehicle" },
                ],
            },
            {
                type: "table",
                heading: "The four stations",
                columns: [
                    { key: "station", label: "Station" },
                    { key: "stove", label: "Example stove" },
                    { key: "fuel", label: "Fuel" },
                    { key: "best", label: "Best for" },
                    { key: "watch", label: "Watch out for" },
                ],
                rows: [
                    {
                        station: "1. Canister",
                        stove: "Pocket Rocket / MSR / Snow Peak",
                        fuel: "Iso-butane mix",
                        best: "Backpacking, fast boil, summer",
                        watch: "Cold weather (canister pressure drops below 20 °F)",
                    },
                    {
                        station: "2. Liquid fuel",
                        stove: "MSR Whisperlite",
                        fuel: "White gas",
                        best: "Winter, high altitude, group cooking",
                        watch: "Priming flare-up; spill control; adult only refuel",
                    },
                    {
                        station: "3. Alcohol",
                        stove: "Trangia or DIY soda-can",
                        fuel: "Denatured alcohol",
                        best: "Lightest pack, simple",
                        watch: "Invisible flame in daylight; no flame adjustment",
                    },
                    {
                        station: "4. Twig / wood-gas",
                        stove: "Solo Stove / BioLite",
                        fuel: "Sticks, pinecones",
                        best: "No-fuel-resupply trips, fire restrictions only when allowed",
                        watch: "Smoke + scorched ground; check fire restrictions FIRST",
                    },
                ],
            },
            {
                type: "table",
                heading: "Per-station data sheet",
                intro: "Fill in one row per station per Scout pair.",
                columns: [
                    { key: "station", label: "Station" },
                    { key: "ignite", label: "Time to ignite" },
                    { key: "boil", label: "Time to boil 1 cup" },
                    { key: "fuel", label: "Fuel used" },
                    { key: "score", label: "Score 1–5" },
                ],
                rows: [
                    { station: "Canister", ignite: "____", boil: "____", fuel: "____", score: "____" },
                    { station: "Liquid", ignite: "____", boil: "____", fuel: "____", score: "____" },
                    { station: "Alcohol", ignite: "____", boil: "____", fuel: "____", score: "____" },
                    { station: "Twig", ignite: "____", boil: "____", fuel: "____", score: "____" },
                ],
            },
            {
                type: "table",
                heading: "Supplies",
                columns: [{ key: "item", label: "Item" }, { key: "qty", label: "Quantity" }],
                rows: [
                    { item: "One stove of each type", qty: "4" },
                    { item: "Fuel for each stove", qty: "1 each" },
                    { item: "Pots (1L)", qty: "4" },
                    { item: "Insulated cup or measuring cup", qty: "4" },
                    { item: "Stopwatch", qty: "4" },
                    { item: "Water buckets (full, for fire)", qty: "4" },
                    { item: "Fire blanket", qty: "4" },
                    { item: "Wind shield (foil)", qty: "4" },
                    { item: "Whiteboard + markers", qty: "1" },
                    { item: "Adult supervisor at each station", qty: "4" },
                ],
            },
            {
                type: "list",
                heading: "Safety rules (read aloud at start)",
                items: [
                    "Adult lights every stove. Scouts may turn knobs, prime, and feed once lit.",
                    "Full water bucket within arm's reach at every station.",
                    "No fuel within 10 ft of any stove. Refuel at the adult's vehicle only.",
                    "If anything flares, step back, call the adult, do not blow on it.",
                    "Long sleeves and closed shoes for everyone.",
                ],
            },
            {
                type: "list",
                heading: "Sources",
                items: [
                    "Scouting America — Second Class & First Class Rank Requirements (2025)",
                    "Cooking merit badge pamphlet — stove types and fuel handling",
                    "Guide to Safe Scouting — fuels and flames policy",
                ],
            },
        ],
    },
    {
        slug: "fire-building-quad",
        title: "Fire-Building Quad",
        icon: "🔥",
        duration: "60 min",
        summary:
            "Four fire-lay styles (teepee, lean-to, log-cabin, upside-down) built and lit with one match each. Tinder, kindling, and fuel are sorted before lighting. Held in the church fire ring (or a portable fire pan).",
        advances: [
            "Tenderfoot 3d (fire safety, tinder/kindling/fuel)",
            "Tenderfoot 3e (fire lay & light)",
            "Second Class 2b (fire pan / Leave No Trace)",
            "Firem'n Chit",
        ],
        sections: [
            {
                type: "prose",
                heading: "Why this format",
                paragraphs: [
                    "The Tenderfoot fire requirement is one of the few rank skills where a Scout has to actually produce a result — a fire that burns. Practicing four lay styles back-to-back is the fastest way to teach the variables: airflow, fuel size, wind, moisture.",
                    "Run the meeting outside in a safe fire ring or in a portable steel fire pan on gravel. Each patrol builds one lay, lights with one match, and keeps it burning long enough to boil a cup of water. Then they put it cold-out before rotating.",
                ],
            },
            {
                type: "table",
                heading: "60-minute meeting plan",
                columns: [{ key: "time", label: "Time" }, { key: "activity", label: "Activity" }],
                rows: [
                    { time: "0–10 min", activity: "Safety brief, demo of tinder / kindling / fuel sorting, Firem'n Chit review" },
                    { time: "10–20 min", activity: "Patrols sort their fuel pile into 3 bins" },
                    { time: "20–50 min", activity: "Two 15-min lay rotations: each Scout lights at least one lay" },
                    { time: "50–55 min", activity: "Cold-out demo: drown, stir, drown, stir, hand-check" },
                    { time: "55–60 min", activity: "Debrief, sign off, restock fuel for next meeting" },
                ],
            },
            {
                type: "table",
                heading: "The four lays",
                columns: [
                    { key: "lay", label: "Lay" },
                    { key: "shape", label: "Shape" },
                    { key: "best", label: "Best for" },
                    { key: "watch", label: "Watch out for" },
                ],
                rows: [
                    { lay: "Teepee", shape: "Cone of kindling around tinder bundle", best: "Quick warmth, light wind", watch: "Collapses if built too tight; airflow at the base" },
                    { lay: "Lean-to", shape: "Long stick + kindling leaning against it over tinder", best: "Wind from one direction", watch: "Place windbreak so wind feeds the tinder, not blows past it" },
                    { lay: "Log cabin", shape: "Stacked logs in a square with teepee inside", best: "Long-burn cooking fire", watch: "Don't pack too tight — needs gaps for airflow" },
                    { lay: "Upside-down (top-down)", shape: "Logs on bottom, kindling middle, tinder on top", best: "Long unattended burn, low smoke", watch: "Counter-intuitive; teach why it works (flame falls down)" },
                ],
            },
            {
                type: "table",
                heading: "Per-Scout scorecard",
                columns: [
                    { key: "skill", label: "Skill" },
                    { key: "demo", label: "Demonstrated" },
                ],
                rows: [
                    { skill: "Sorted tinder / kindling / fuel correctly", demo: "☐" },
                    { skill: "Built a lay that lit on the first match", demo: "☐" },
                    { skill: "Kept fire burning long enough to boil water", demo: "☐" },
                    { skill: "Cold-out check: drown, stir, hand-check", demo: "☐" },
                    { skill: "Stated 3 fire-safety rules from Firem'n Chit", demo: "☐" },
                ],
            },
            {
                type: "table",
                heading: "Supplies",
                columns: [{ key: "item", label: "Item" }, { key: "qty", label: "Quantity" }],
                rows: [
                    { item: "Fire pan or established ring", qty: "1" },
                    { item: "Tinder (cotton balls + petroleum jelly, fatwood, dryer lint)", qty: "1 bag" },
                    { item: "Kindling (pencil-thick dry sticks)", qty: "1 bundle/patrol" },
                    { item: "Fuel wood (wrist-thick split)", qty: "1 bundle/patrol" },
                    { item: "Strike-anywhere matches", qty: "1 box/patrol" },
                    { item: "Water buckets (full)", qty: "2" },
                    { item: "Shovel + leather gloves", qty: "1 set" },
                    { item: "Cup of water (the boil test)", qty: "1/patrol" },
                ],
            },
            {
                type: "list",
                heading: "Sources",
                items: [
                    "Scouting America — Tenderfoot Rank Requirements (2025)",
                    "Scouting America — Firem'n Chit",
                    "Guide to Safe Scouting — fires policy",
                ],
            },
        ],
    },
    {
        slug: "lashings-tower",
        title: "Lashings Tower Build",
        icon: "🪵",
        duration: "75 min",
        summary:
            "Patrols build a freestanding tripod or A-frame in 30 minutes using square, diagonal, and shear lashings. Tower has to support a Scout's weight at the end. Hands-on, loud, photo-worthy.",
        advances: [
            "First Class 3b (square lashing)",
            "First Class 3c (diagonal lashing)",
            "First Class 3d (shear lashing on tripod)",
            "Pioneering MB practice",
        ],
        sections: [
            {
                type: "prose",
                heading: "Why this format",
                paragraphs: [
                    "Lashings are the requirement that intimidates new Scouts the most because they involve more than one person and more than one rope. Building one real, weight-bearing structure in 30 minutes makes them click.",
                    "Pick a structure the troop can actually use later — a tripod for a flagpole, a chippewa kitchen for the patrol box, or a low A-frame trestle for the campout obstacle course. The fact that the build is real is what makes the lashings real.",
                ],
            },
            {
                type: "table",
                heading: "75-minute meeting plan",
                columns: [{ key: "time", label: "Time" }, { key: "activity", label: "Activity" }],
                rows: [
                    { time: "0–10 min", activity: "Safety brief, demo of square + diagonal + shear lashing by older Scout" },
                    { time: "10–25 min", activity: "Each Scout ties one of each lashing on a practice rack — judged before they touch the tower" },
                    { time: "25–55 min", activity: "Patrol builds the assigned structure" },
                    { time: "55–65 min", activity: "Load test: a Scout climbs / hangs from the structure" },
                    { time: "65–75 min", activity: "Debrief, disassemble, coil and store" },
                ],
            },
            {
                type: "table",
                heading: "Three lashings, three uses",
                columns: [
                    { key: "lashing", label: "Lashing" },
                    { key: "joins", label: "Joins" },
                    { key: "use", label: "Use case" },
                ],
                rows: [
                    { lashing: "Square", joins: "Two spars at right angles", use: "Frame corners, deck supports" },
                    { lashing: "Diagonal", joins: "Two spars crossing diagonally", use: "X-bracing for sway resistance" },
                    { lashing: "Shear", joins: "Two parallel spars (with a frap)", use: "Tripod legs, A-frame top" },
                ],
            },
            {
                type: "table",
                heading: "Per-Scout scorecard",
                columns: [
                    { key: "skill", label: "Skill" },
                    { key: "demo", label: "Demonstrated" },
                ],
                rows: [
                    { skill: "Tied a square lashing — wraps + frapping turns", demo: "☐" },
                    { skill: "Tied a diagonal lashing — timber hitch start", demo: "☐" },
                    { skill: "Tied a shear lashing — spread legs after", demo: "☐" },
                    { skill: "Helped raise the structure safely", demo: "☐" },
                    { skill: "Coiled rope cleanly at the end", demo: "☐" },
                ],
            },
            {
                type: "table",
                heading: "Supplies",
                columns: [{ key: "item", label: "Item" }, { key: "qty", label: "Quantity" }],
                rows: [
                    { item: "Spars (1.5–2 in × 6–8 ft)", qty: "12+" },
                    { item: "Lashing rope (¼ in manila, 15 ft)", qty: "12+" },
                    { item: "Practice rack (pair of spars on sawhorses)", qty: "1 per patrol" },
                    { item: "Mallet (for setting frapping)", qty: "1 per patrol" },
                    { item: "Work gloves", qty: "1 pair per Scout" },
                    { item: "Camera (for the photo on the troop site)", qty: "1" },
                ],
            },
            {
                type: "list",
                heading: "Safety rules",
                items: [
                    "No one climbs the structure until an adult and the SPL have each pulled hard on every leg.",
                    "Hard hats if you have them. If you don't, no climbing higher than 4 ft.",
                    "Spotter on every side during raise.",
                    "Knife/saw users have Totin' Chip.",
                ],
            },
            {
                type: "list",
                heading: "Sources",
                items: [
                    "Scouting America — First Class Rank Requirements (2025)",
                    "Pioneering merit badge pamphlet — lashings and structures",
                ],
            },
        ],
    },
    {
        slug: "tarp-shelter-olympics",
        title: "Tarp Shelter Olympics",
        icon: "⛺",
        duration: "60 min",
        summary:
            "Five tarp configurations (A-frame, lean-to, plow point, diamond, fly). Wind/rain test with a leaf-blower and a spray bottle. Patrols compete on speed, tension, and dryness.",
        advances: [
            "Tenderfoot 1c (camping gear)",
            "Second Class 1b (overnight gear)",
            "First Class 2a (campsite plan)",
            "Camping MB practice",
            "Wilderness Survival MB practice",
        ],
        sections: [
            {
                type: "prose",
                heading: "Why this format",
                paragraphs: [
                    "A tarp + line + 4 stakes is the cheapest, lightest, most-versatile shelter a Scout owns — and almost no new Scout has actually pitched one alone. This 60-minute format gets every Scout pitching at least two configurations.",
                    "Run it outside on the church lawn. Each patrol gets one 8x10 tarp, 50 ft of line, 6 stakes, and 2 trekking poles or guy points. Use a leaf-blower for the wind test and a spray bottle for the rain test.",
                ],
            },
            {
                type: "table",
                heading: "60-minute meeting plan",
                columns: [{ key: "time", label: "Time" }, { key: "activity", label: "Activity" }],
                rows: [
                    { time: "0–10 min", activity: "Brief: tarp anatomy (ridge, eaves, guy-out, stake angle), taut-line hitch refresh" },
                    { time: "10–20 min", activity: "Demo of A-frame and lean-to by older Scout" },
                    { time: "20–45 min", activity: "Five 5-min pitch sprints; rotate the configuration each round" },
                    { time: "45–55 min", activity: "Wind + rain test on each patrol's final pitch" },
                    { time: "55–60 min", activity: "Debrief, signoff, dry-fold the tarps" },
                ],
            },
            {
                type: "table",
                heading: "The five configurations",
                columns: [
                    { key: "config", label: "Configuration" },
                    { key: "best", label: "Best for" },
                    { key: "watch", label: "Watch out for" },
                ],
                rows: [
                    { config: "A-frame ridge", best: "All-around rain shelter, two-person", watch: "Needs a tight ridgeline; sag = puddle" },
                    { config: "Lean-to", best: "One-side wind, fire reflector", watch: "Open side must face downwind" },
                    { config: "Plow point", best: "Wind from one direction (point into wind)", watch: "Stake the point hard" },
                    { config: "Diamond fly (½ + ½)", best: "Solo + pack-cover, lightest", watch: "Low headroom; orient point upwind" },
                    { config: "Flat fly (over hammock or bivy)", best: "Mixed weather, hammock camping", watch: "Drip lines on guy-outs prevent water tracking down" },
                ],
            },
            {
                type: "table",
                heading: "Per-pitch judging card",
                intro: "1 = poor, 5 = excellent",
                columns: [
                    { key: "criterion", label: "Criterion" },
                    { key: "score", label: "Score" },
                ],
                rows: [
                    { criterion: "Ridgeline taut (no sag)", score: "____" },
                    { criterion: "Stakes at 45° leaning away", score: "____" },
                    { criterion: "Guy-outs taut, no flapping", score: "____" },
                    { criterion: "Wind test held (leaf-blower 30 sec)", score: "____" },
                    { criterion: "Rain test (no drip inside, 60 sec spray)", score: "____" },
                ],
            },
            {
                type: "table",
                heading: "Supplies",
                columns: [{ key: "item", label: "Item" }, { key: "qty", label: "Quantity" }],
                rows: [
                    { item: "8×10 tarps", qty: "1 per patrol" },
                    { item: "Paracord (50 ft hank)", qty: "1 per patrol" },
                    { item: "Stakes", qty: "8 per patrol" },
                    { item: "Trekking poles or 6 ft sticks", qty: "2 per patrol" },
                    { item: "Leaf-blower", qty: "1" },
                    { item: "Spray bottle", qty: "1" },
                    { item: "Stopwatch", qty: "1" },
                    { item: "Camera", qty: "1" },
                ],
            },
            {
                type: "list",
                heading: "Sources",
                items: [
                    "Scouting America — Tenderfoot, Second Class, First Class Rank Requirements (2025)",
                    "Camping merit badge pamphlet — tarps and shelters",
                    "Wilderness Survival merit badge pamphlet — improvised shelters",
                ],
            },
        ],
    },
    {
        slug: "water-treatment-bench",
        title: "Water Treatment Bench",
        icon: "💧",
        duration: "60 min",
        summary:
            "Three stations: filter, chemical, boil. Each Scout treats a cup of 'creek water' (use food coloring + leaves) and explains contamination types. Builds the muscle memory that makes hike-day water decisions automatic.",
        advances: [
            "Second Class 1b (water treatment)",
            "First Class 1a/1b (overnight water plan)",
            "Public Health & Hiking MB practice",
        ],
        sections: [
            {
                type: "prose",
                heading: "Why this format",
                paragraphs: [
                    "Most Scouts know 'filter' is a thing but cannot describe the difference between filtering for protozoa and treating for viruses. This 60-minute bench makes them touch all three methods and pick the right one for a stated trip.",
                    "Make a 5-gallon bucket of 'creek water' before the meeting: tap water + a few drops of food coloring + a handful of grass clippings + crushed leaves. Looks gross. Is safe.",
                ],
            },
            {
                type: "table",
                heading: "60-minute meeting plan",
                columns: [{ key: "time", label: "Time" }, { key: "activity", label: "Activity" }],
                rows: [
                    { time: "0–10 min", activity: "Brief: 4 contaminant types (debris, protozoa, bacteria, viruses); what each method handles" },
                    { time: "10–45 min", activity: "Three 10-minute station rotations + 5-min reset" },
                    { time: "45–55 min", activity: "Trip-card drill: Scouts read 4 trip scenarios and pick a method for each" },
                    { time: "55–60 min", activity: "Debrief, signoff, store gear" },
                ],
            },
            {
                type: "table",
                heading: "The three stations",
                columns: [
                    { key: "station", label: "Station" },
                    { key: "method", label: "Method" },
                    { key: "handles", label: "Handles" },
                    { key: "watch", label: "Watch out for" },
                ],
                rows: [
                    {
                        station: "1. Filter",
                        method: "Sawyer Squeeze, Katadyn BeFree, MSR pump",
                        handles: "Debris, protozoa, bacteria",
                        watch: "Does NOT remove viruses (rare in U.S. backcountry, common abroad). Backflush after every trip.",
                    },
                    {
                        station: "2. Chemical",
                        method: "Aquatabs (chlorine dioxide), iodine drops",
                        handles: "Bacteria, viruses, most protozoa (with longer wait)",
                        watch: "30-min wait minimum, 4 hr for Crypto. Doesn't help with debris — pre-filter through a bandana.",
                    },
                    {
                        station: "3. Boil",
                        method: "Rolling boil 1 minute (3 min above 6,500 ft)",
                        handles: "Everything biological",
                        watch: "Doesn't fix chemical contamination (mining runoff). Uses fuel; not great for hiking.",
                    },
                ],
            },
            {
                type: "table",
                heading: "Trip-card drill",
                intro: "Scouts pick the best method for each scenario.",
                columns: [
                    { key: "trip", label: "Scenario" },
                    { key: "answer", label: "Best method" },
                    { key: "why", label: "Why" },
                ],
                rows: [
                    {
                        trip: "Day hike in Big Sur, refilling from a clear-running creek",
                        answer: "Filter",
                        why: "Fast, no wait, handles the realistic threats (Giardia, Crypto)",
                    },
                    {
                        trip: "Backpacking trip, 4 days, weight-conscious",
                        answer: "Chemical (primary) + filter as backup",
                        why: "Chlorine dioxide is grams; filter is backup if you find a dirtier source",
                    },
                    {
                        trip: "Snow camping, water from melted snow",
                        answer: "Boil",
                        why: "You're already running a stove; chemical works slowly in cold",
                    },
                    {
                        trip: "International high-adventure (Philmont-style abroad)",
                        answer: "Filter + chemical (or boil)",
                        why: "Need virus-level kill that filters alone don't give",
                    },
                ],
            },
            {
                type: "table",
                heading: "Supplies",
                columns: [{ key: "item", label: "Item" }, { key: "qty", label: "Quantity" }],
                rows: [
                    { item: "5-gallon bucket of 'creek water'", qty: "1" },
                    { item: "Sawyer Squeeze or BeFree", qty: "1" },
                    { item: "Pump filter", qty: "1" },
                    { item: "Aquatabs / chlorine-dioxide tabs", qty: "1 sheet" },
                    { item: "Iodine drops", qty: "1 bottle" },
                    { item: "Stove + pot for boil station", qty: "1" },
                    { item: "Bandanas (pre-filter)", qty: "4" },
                    { item: "Cups for treated samples", qty: "1 per Scout" },
                    { item: "Trip-card scenarios (printed)", qty: "1 per Scout" },
                ],
            },
            {
                type: "list",
                heading: "Sources",
                items: [
                    "Scouting America — Second Class & First Class Rank Requirements (2025)",
                    "CDC — Drinking Water Treatment Methods for Backcountry and Travel Use",
                    "Hiking & Public Health merit badge pamphlets",
                ],
            },
        ],
    },
    {
        slug: "cpr-aed-sprint",
        title: "CPR & AED Sprint",
        icon: "❤️‍🩹",
        duration: "60 min",
        summary:
            "Rotate compressions on a manikin, practice rescue breaths, AED pad placement. Final scenario: collapse in the mess hall. Best run with a Red Cross / AHA-trained instructor, but valuable as practice even without certification.",
        advances: [
            "First Class 7c (heart attack signs, CPR/AED)",
            "First Aid MB requirement 9 (CPR demonstration)",
            "Emergency Preparedness MB requirement 8 (CPR)",
            "Lifesaving MB practice",
        ],
        sections: [
            {
                type: "prose",
                heading: "Why this format",
                paragraphs: [
                    "CPR is the highest-stakes skill in the rank book. Most adults don't refresh it more than once every two years. Doing it on a real manikin with feedback is the only honest way to teach it.",
                    "If you have a Red Cross or AHA instructor in the troop, this can be a proper certification class. If not, this is a practice-only meeting. Be clear with the Scouts: practice does not equal certification, but it does count for First Class 7c.",
                ],
            },
            {
                type: "table",
                heading: "60-minute meeting plan",
                columns: [{ key: "time", label: "Time" }, { key: "activity", label: "Activity" }],
                rows: [
                    { time: "0–10 min", activity: "Brief: signs of heart attack vs. cardiac arrest; chain of survival" },
                    { time: "10–20 min", activity: "Compression-only practice on manikin (everyone gets 2 min)" },
                    { time: "20–35 min", activity: "Rescue breaths + 30:2 cycle practice" },
                    { time: "35–45 min", activity: "AED placement + voice-prompt walkthrough on training AED" },
                    { time: "45–55 min", activity: "Mess-hall scenario: Scout collapses; PL takes charge, calls 911, assigns roles" },
                    { time: "55–60 min", activity: "Debrief, signoff per Scout, recommend Red Cross course for cert" },
                ],
            },
            {
                type: "table",
                heading: "5 most common heart-attack signs (req 7c language)",
                columns: [{ key: "n", label: "#" }, { key: "sign", label: "Sign" }],
                rows: [
                    { n: "1", sign: "Chest pain or discomfort (pressure, squeezing)" },
                    { n: "2", sign: "Pain radiating to arm, jaw, neck, or back" },
                    { n: "3", sign: "Shortness of breath" },
                    { n: "4", sign: "Cold sweat, nausea, or lightheadedness" },
                    { n: "5", sign: "Unusual fatigue (especially in women)" },
                ],
            },
            {
                type: "table",
                heading: "Compression spec to teach",
                columns: [{ key: "k", label: "Spec" }, { key: "v", label: "Target" }],
                rows: [
                    { k: "Hand position", v: "Center of chest, lower half of sternum" },
                    { k: "Depth", v: "≥ 2 in for adults (do not exceed 2.4 in)" },
                    { k: "Rate", v: "100–120 per minute (think 'Stayin' Alive')" },
                    { k: "Recoil", v: "Full chest recoil between compressions" },
                    { k: "Cycle", v: "30 compressions : 2 breaths if trained, otherwise compression-only" },
                    { k: "Switch", v: "Rotate compressors every 2 minutes to prevent fatigue" },
                ],
            },
            {
                type: "table",
                heading: "AED steps (any model)",
                columns: [{ key: "step", label: "Step" }, { key: "what", label: "What to do" }],
                rows: [
                    { step: "1", what: "Turn on. Follow voice prompts." },
                    { step: "2", what: "Bare the chest; dry it; shave heavy hair if a razor is in the kit." },
                    { step: "3", what: "Place pads — upper right, lower left side. Diagrams on every pad." },
                    { step: "4", what: "Stand clear. Let it analyze. Don't touch." },
                    { step: "5", what: "If shock advised, clear, push button. If not, resume compressions." },
                    { step: "6", what: "Continue 2-min cycles until EMS arrives or victim moves." },
                ],
            },
            {
                type: "table",
                heading: "Per-Scout scorecard",
                columns: [{ key: "skill", label: "Skill" }, { key: "demo", label: "Demonstrated" }],
                rows: [
                    { skill: "Listed 5 heart-attack signs", demo: "☐" },
                    { skill: "Compressions at correct depth/rate for 2 min", demo: "☐" },
                    { skill: "30:2 cycle with rescue breaths", demo: "☐" },
                    { skill: "AED pad placement and voice-prompt follow", demo: "☐" },
                    { skill: "Took charge in mess-hall scenario", demo: "☐" },
                ],
            },
            {
                type: "table",
                heading: "Supplies",
                columns: [{ key: "item", label: "Item" }, { key: "qty", label: "Quantity" }],
                rows: [
                    { item: "CPR manikins (adult)", qty: "2–4" },
                    { item: "Training AED", qty: "1" },
                    { item: "Pocket masks / face shields", qty: "1 per Scout" },
                    { item: "Disinfectant wipes", qty: "1 pack" },
                    { item: "Phone for 911 simulation", qty: "1" },
                    { item: "CPR steps poster", qty: "1" },
                ],
            },
            {
                type: "list",
                heading: "Important — practice vs. certification",
                items: [
                    "This meeting counts for First Class 7c (Tell + Demonstrate) when a Scoutmaster watches and signs off.",
                    "It does NOT count as Red Cross / AHA certification, which is required for some merit badges (e.g. Lifesaving) and for many camp staff jobs.",
                    "Recommend Scouts age 12+ take a real CPR course at least once — it's the most useful 4 hours of their year.",
                ],
            },
            {
                type: "list",
                heading: "Sources",
                items: [
                    "Scouting America — First Class Rank Requirements (2025)",
                    "American Heart Association — 2020 CPR Guidelines",
                    "Red Cross — Adult CPR/AED course outline",
                    "First Aid & Emergency Preparedness merit badge pamphlets",
                ],
            },
        ],
    },
    {
        slug: "orienteering-score-o",
        title: "Orienteering Mini-Score-O",
        icon: "🗺️",
        duration: "75 min",
        summary:
            "Eight controls hidden on Grace Church property. Each Scout gets a punch card and 30 minutes to find as many controls as they can. Most controls in 30 minutes wins. Builds map-reading reps no classroom can match.",
        advances: [
            "Second Class 3a/3b (compass, map orientation)",
            "First Class 4a/4b/4c (orienteering course, 5-mi hike planning)",
            "Orienteering MB practice",
        ],
        sections: [
            {
                type: "prose",
                heading: "Why this format",
                paragraphs: [
                    "A score-O is the friendliest version of orienteering for new Scouts: there's no fixed order, no penalty for missing controls, and the hardest controls just give more points. Slow Scouts still finish.",
                    "Print a hand-drawn map of the church property in advance. Place 8 numbered controls (orange-and-white markers, painted PVC, or printed cards stapled to stakes) with letter codes. Scouts copy the letter into the matching box on their punch card to prove they were there.",
                ],
            },
            {
                type: "table",
                heading: "75-minute meeting plan",
                columns: [{ key: "time", label: "Time" }, { key: "activity", label: "Activity" }],
                rows: [
                    { time: "0–10 min", activity: "Brief: parts of the map, declination, control codes, safety boundary" },
                    { time: "10–20 min", activity: "Demo control hunt: SPL leads everyone to control #1 together" },
                    { time: "20–25 min", activity: "Plan: each Scout circles their planned route and stamps start time" },
                    { time: "25–55 min", activity: "Run the score-O — 30-minute timer, hard cutoff" },
                    { time: "55–65 min", activity: "Score cards, recognize fastest Scout and most controls found" },
                    { time: "65–75 min", activity: "Debrief, recover all controls, signoff" },
                ],
            },
            {
                type: "table",
                heading: "Sample 8-control set (point values)",
                columns: [
                    { key: "id", label: "Control" },
                    { key: "where", label: "Hint" },
                    { key: "pts", label: "Points" },
                ],
                rows: [
                    { id: "1", where: "Northeast corner of the parking lot", pts: "10" },
                    { id: "2", where: "Behind the dumpster enclosure", pts: "10" },
                    { id: "3", where: "Base of the largest tree on the south lawn", pts: "20" },
                    { id: "4", where: "Halfway down the west fence line", pts: "20" },
                    { id: "5", where: "At the property's farthest survey marker", pts: "30" },
                    { id: "6", where: "Corner where the storm drain enters", pts: "30" },
                    { id: "7", where: "Behind the AC compressor on the east wall", pts: "20" },
                    { id: "8", where: "Inside the playground border, NW corner", pts: "10" },
                ],
                footerNote: "Scouts can hit them in any order. Late finishers lose 5 pts per minute.",
            },
            {
                type: "table",
                heading: "Per-Scout scorecard",
                columns: [{ key: "skill", label: "Skill" }, { key: "demo", label: "Demonstrated" }],
                rows: [
                    { skill: "Oriented the map with compass", demo: "☐" },
                    { skill: "Planned a route before starting", demo: "☐" },
                    { skill: "Found ≥ 4 controls in 30 min", demo: "☐" },
                    { skill: "Stayed inside the safety boundary", demo: "☐" },
                    { skill: "Returned on time", demo: "☐" },
                ],
            },
            {
                type: "table",
                heading: "Supplies",
                columns: [{ key: "item", label: "Item" }, { key: "qty", label: "Quantity" }],
                rows: [
                    { item: "Hand-drawn property map (printed)", qty: "1 per Scout" },
                    { item: "Numbered control markers (PVC, cone, or stake)", qty: "8" },
                    { item: "Letter-code cards at each control", qty: "8" },
                    { item: "Punch cards (or just pencils + boxes)", qty: "1 per Scout" },
                    { item: "Compasses", qty: "1 per Scout" },
                    { item: "Stopwatch (mass start)", qty: "1" },
                    { item: "Whistle (recall signal — 3 short blasts)", qty: "1" },
                    { item: "Adult roving the property boundary", qty: "1" },
                ],
            },
            {
                type: "list",
                heading: "Safety rules",
                items: [
                    "Define a hard boundary; anyone who hits it stops, returns to start, and re-plans.",
                    "Buddy system if any Scout is uncomfortable solo.",
                    "3-whistle recall = come back NOW, no questions.",
                    "Phones in pockets; emergency only.",
                ],
            },
            {
                type: "list",
                heading: "Sources",
                items: [
                    "Scouting America — Second Class & First Class Rank Requirements (2025)",
                    "Orienteering merit badge pamphlet — score-O format and control descriptions",
                    "U.S. Orienteering Federation — youth event guidelines",
                ],
            },
        ],
    },
];

export function getActivities() {
    return activities;
}

export function getActivity(slug) {
    return activities.find((a) => a.slug === slug);
}
