export const officialReferenceMap = {
  advancement: {
    label: "Advancement and Awards",
    url: "https://www.scouting.org/programs/scouts-bsa/advancement-and-awards/advancement/"
  },
  guideToAdvancement: {
    label: "Guide to Advancement 2025",
    url: "https://www.scouting.org/resources/guide-to-advancement/"
  },
  guideToSafeScouting: {
    label: "Guide to Safe Scouting",
    url: "https://www.scouting.org/health-and-safety/gss/"
  },
  meritBadgeHub: {
    label: "Merit Badge Hub",
    url: "https://www.scouting.org/skills/merit-badges/all/"
  },
  firstAid: {
    label: "First Aid Merit Badge",
    url: "https://www.scouting.org/merit-badges/first-aid/"
  },
  camping: {
    label: "Camping Merit Badge",
    url: "https://www.scouting.org/merit-badges/camping/"
  },
  cooking: {
    label: "Cooking Merit Badge",
    url: "https://www.scouting.org/merit-badges/cooking/"
  },
  fireSafety: {
    label: "Fire Safety Merit Badge",
    url: "https://www.scouting.org/merit-badges/fire-safety/"
  },
  nature: {
    label: "Nature Merit Badge",
    url: "https://www.scouting.org/merit-badges/nature/"
  },
  mammalStudy: {
    label: "Mammal Study Merit Badge",
    url: "https://www.scouting.org/merit-badges/mammal-study/"
  },
  fishWildlife: {
    label: "Fish and Wildlife Management Merit Badge",
    url: "https://www.scouting.org/merit-badges/fish-wildlife-management/"
  },
  totinChip: {
    label: "Totin' Chip",
    url: "https://www.scouting.org/awards/awards-central/totin-chip/"
  },
  outdoorCode: {
    label: "Outdoor Code",
    url: "https://www.scouting.org/outdoor-programs/outdoor-ethics/outdoor-code/"
  },
  leaveNoTrace: {
    label: "Leave No Trace",
    url: "https://www.scouting.org/programs/scouts-bsa/resources/leave-no-trace/"
  }
};

function m(meeting) {
  return meeting;
}

export const troop308Meetings = [
  m({
    date: "2026-05-04",
    title: "Launch Night: Scout rank basics and patrol structure",
    phase: "May to June: Scout rank and Tenderfoot start",
    summary: "Set expectations, explain the advancement lane, and get every new Scout moving with a handbook and a short next-step goal.",
    rankFocus: "Scout rank orientation and early Tenderfoot setup",
    meritBadgeFocus: "First Aid: what first aid is, scene safety, and getting help",
    agenda: [
      ["0:00-0:10", "Opening, welcome families if present, explain the troop method, and introduce the slogan: First Class in the first year, merit badges along the way."],
      ["0:10-0:30", "Teach Scout rank basics: Oath, Law, sign, salute, handshake, buddy system, patrol method, and how signoffs work."],
      ["0:30-0:45", "Break into patrols, pair each new Scout with an older Scout or helper, and have them practice introductions, buddy pairing, and where requirements live in the handbook or Scoutbook."],
      ["0:45-1:15", "Start the First Aid merit badge block with scene safety, who to call, and how to get help from home versus an outdoor setting."],
      ["1:15-1:25", "Do the first handbook check, assign each Scout a next-three-requirements goal, and sign off anything clearly completed tonight."],
      ["1:25-1:30", "Close with next week's bring list: handbook, pencil, water bottle, and one piece of rope if they have it." ]
    ],
    prep: [
      "Print one simple advancement checklist for each new Scout.",
      "Bring extra handbooks or a sample handbook to point to rank requirements.",
      "Have one older Scout ready to explain patrol method and buddy system."
    ],
    leaderScript: "Keep this first night about confidence and momentum. The goal is that every Scout leaves knowing what success looks like next Monday.",
    references: ["advancement", "guideToAdvancement", "firstAid"]
  }),
  m({
    date: "2026-05-11",
    title: "Knots, buddy system, and hurry cases",
    phase: "May to June: Scout rank and Tenderfoot start",
    summary: "Use hands-on practice early so the meeting feels active and youth-led rather than lecture-driven.",
    rankFocus: "Tenderfoot knots, buddy system, and patrol teamwork",
    meritBadgeFocus: "First Aid: hurry cases, calling 911, and remote-area response",
    agenda: [
      ["0:00-0:10", "Opening and quick review of patrols, attendance, and the next-three-requirements target for each Scout."],
      ["0:10-0:30", "Teach square knot, two half-hitches, and taut-line hitch. Tie each to a real use case on a campout."],
      ["0:30-0:45", "Run a buddy-system relay where Scouts move stations in pairs and explain which knot fits which job."],
      ["0:45-1:15", "First Aid block: define hurry cases, how to stay calm, how to call for help, and what information to give to responders."],
      ["1:15-1:25", "Sign off knot work for Scouts who can demonstrate it cleanly and review any missed Scout-rank basics."],
      ["1:25-1:30", "Closing challenge: ask each patrol to teach one knot to a parent or sibling before next Monday." ]
    ],
    prep: [
      "Bring enough rope for patrol-size practice.",
      "Set up one simple scenario card for each patrol.",
      "Have phone script notes for emergency-call roleplay."
    ],
    leaderScript: "Move quickly from demonstration to repetition. New Scouts remember more when they tie, untie, and re-tie instead of watching adults talk.",
    references: ["advancement", "firstAid", "guideToSafeScouting"]
  }),
  m({
    date: "2026-05-18",
    title: "Personal first aid kits and common outdoor injuries",
    phase: "May to June: Scout rank and Tenderfoot start",
    summary: "Connect early rank work to real outdoor usefulness so the Scouts understand why these skills matter.",
    rankFocus: "Tenderfoot safety, preparedness, and personal gear awareness",
    meritBadgeFocus: "First Aid: cuts, scrapes, blisters, and basic wound care",
    agenda: [
      ["0:00-0:10", "Opening and quick patrol check on handbooks, uniforms, and whether each Scout brought a small day-hike style kit or pouch."],
      ["0:10-0:30", "Teach what belongs in a personal first aid kit, what does not, and why kit maintenance matters before every outing."],
      ["0:30-0:45", "Rotate through three short stations: blister care, cleaning a scrape, and covering a small cut."],
      ["0:45-1:15", "First Aid block on infection control, safe disposal, and simple treatment steps for common trail injuries."],
      ["1:15-1:25", "Inspect kits, sign off any related requirements, and note what Scouts still need to add before the first campout."],
      ["1:25-1:30", "Closing reminder: bring full water and wear shoes you can hike in next week." ]
    ],
    prep: [
      "Bring sample first aid supplies and an example personal kit.",
      "Prepare station materials: bandages, gauze, gloves, mock moleskin, and tape.",
      "Print a simple personal-kit checklist."
    ],
    leaderScript: "Emphasize neat, calm, methodical care. The tone you want is capable, not dramatic.",
    references: ["firstAid", "guideToSafeScouting", "advancement"]
  }),
  m({
    date: "2026-05-25",
    title: "Holiday buffer, uniform check, and advancement reset",
    phase: "May to June: Scout rank and Tenderfoot start",
    summary: "Use the holiday week as a lighter night that still moves people forward and catches anyone who fell behind in the first three meetings.",
    rankFocus: "Scout and Tenderfoot catch-up",
    meritBadgeFocus: "First Aid review and counselor questions",
    agenda: [
      ["0:00-0:10", "Opening, uniform check, and a quick explanation that tonight is a reset and review night rather than a heavy instruction night."],
      ["0:10-0:30", "Run three review stations: Scout basics, knots, and personal preparedness."],
      ["0:30-0:45", "Give every Scout a five-minute check-in on what is complete and what is still next."],
      ["0:45-1:15", "Use the merit badge block for open First Aid review, counselor questions, and make-up demonstrations."],
      ["1:15-1:25", "Enter signoffs, update the paper checklist or Scoutbook view, and make sure every Scout has one clear next requirement."],
      ["1:25-1:30", "Close with June preview: fitness, hiking, campsites, and cooking." ]
    ],
    prep: [
      "Print requirement checklists with room for notes.",
      "Bring a simple signoff roster for the adults and older Scouts.",
      "Have one experienced youth run each review station."
    ],
    leaderScript: "A buffer night prevents invisible drift. Keep it calm, positive, and specific.",
    references: ["advancement", "guideToAdvancement", "firstAid"]
  }),
  m({
    date: "2026-06-01",
    title: "Fitness baseline and hiking readiness",
    phase: "May to June: Scout rank and Tenderfoot start",
    summary: "Start the fitness conversation early and tie it to safety and confidence, not comparison.",
    rankFocus: "Tenderfoot fitness baseline and hiking preparation",
    meritBadgeFocus: "First Aid: bites, stings, poisonous plants, and allergic reactions",
    agenda: [
      ["0:00-0:10", "Opening and explain that fitness work is about personal growth and safety, not winning against other Scouts."],
      ["0:10-0:30", "Review the fitness baseline pieces and talk through hiking clothing, water, pace, and the ten essentials mindset."],
      ["0:30-0:45", "Run a short movement circuit or skill walk with water, pack fit, and pacing reminders."],
      ["0:45-1:15", "First Aid block on bites, stings, poisonous plants, and what to do when a reaction turns serious."],
      ["1:15-1:25", "Capture baseline data where needed and sign off any hiking prep items already demonstrated."],
      ["1:25-1:30", "Closing reminder: next week we build the campsite from the ground up." ]
    ],
    prep: [
      "Bring fitness tracking sheets or Scoutbook access.",
      "Have sample day-hike gear for a quick show-and-tell.",
      "Prepare local poisonous-plant examples relevant to your area."
    ],
    leaderScript: "Avoid embarrassment. Speak in terms of habits, safety, and steady improvement.",
    references: ["advancement", "firstAid", "guideToSafeScouting"]
  }),
  m({
    date: "2026-06-08",
    title: "Campsite setup, tents, and gear care",
    phase: "May to June: Scout rank and Tenderfoot start",
    summary: "Teach campsite basics before a campout so the real outing becomes reinforcement rather than first exposure.",
    rankFocus: "Tenderfoot campsite skills and outdoor readiness",
    meritBadgeFocus: "First Aid: sprains, strains, fractures, and moving carefully",
    agenda: [
      ["0:00-0:10", "Opening and explain tonight's goal: a safe, orderly campsite that new Scouts can help build, not just watch adults build."],
      ["0:10-0:30", "Teach site selection, tent setup basics, gear placement, and how to keep the campsite clean and walkable."],
      ["0:30-0:45", "Patrols pitch or simulate pitching tents, stage gear, and identify hazards in a model campsite."],
      ["0:45-1:15", "First Aid block on sprains, strains, fractures, and why moving too quickly can make an injury worse."],
      ["1:15-1:25", "Sign off any campsite-related requirements and identify which Scouts are ready to help lead setup on the next outing."],
      ["1:25-1:30", "Close with one question for each patrol: what makes a campsite feel organized?" ]
    ],
    prep: [
      "Bring one tent or use floor tape to mark a mock campsite.",
      "Bring sample gear to place inside and outside the tent area.",
      "Have splinting materials or demo items for first aid practice."
    ],
    leaderScript: "Teach orderliness as a safety skill. A tidy campsite reduces mistakes and stress for first-year Scouts.",
    references: ["advancement", "camping", "firstAid"]
  }),
  m({
    date: "2026-06-15",
    title: "Patrol cooking basics and kitchen sanitation",
    phase: "May to June: Scout rank and Tenderfoot start",
    summary: "Introduce camp cooking as a team responsibility, not just a fun extra.",
    rankFocus: "Tenderfoot cooking, duty rosters, and meal teamwork",
    meritBadgeFocus: "First Aid: burns, dehydration, heat, and cold reactions",
    agenda: [
      ["0:00-0:10", "Opening and patrol assignments for cook, assistant cook, cleanup, and gear roles."],
      ["0:10-0:30", "Teach stove area rules, basic sanitation, cross-contamination awareness, and what a simple duty roster does for a patrol."],
      ["0:30-0:45", "Run a menu-planning or kitchen-layout exercise where patrols build a simple meal workflow."],
      ["0:45-1:15", "First Aid block on burns, scalds, dehydration, heat exhaustion, and cold-related issues that can appear on outings."],
      ["1:15-1:25", "Review who is ready for cooking signoffs and who still needs repetition during the next campout."],
      ["1:25-1:30", "Close by previewing next week's scenario night and asking patrols to bring one menu idea." ]
    ],
    prep: [
      "Bring sample menu sheets and a patrol duty roster example.",
      "Set out cooking tools and ask Scouts to identify safe versus unsafe handling.",
      "Prepare quick dehydration and burn scenario cards."
    ],
    leaderScript: "Keep the discussion practical. New Scouts learn cooking best when they can picture a real camp meal from start to cleanup.",
    references: ["cooking", "camping", "firstAid"]
  }),
  m({
    date: "2026-06-22",
    title: "Tenderfoot checkoff and first aid scenario night",
    phase: "May to June: Scout rank and Tenderfoot start",
    summary: "Use scenarios to turn isolated lessons into decisions and action.",
    rankFocus: "Tenderfoot signoffs and confidence check",
    meritBadgeFocus: "First Aid wrap-up and counselor signoff preparation",
    agenda: [
      ["0:00-0:10", "Opening and explain that tonight is about showing what the Scouts can do, not just hearing more information."],
      ["0:10-0:30", "Run fast stations on knots, campsite skills, hiking prep, and basic first aid responses."],
      ["0:30-0:45", "Use two or three short patrol scenarios with one Scout acting as patient and one as leader."],
      ["0:45-1:15", "Finish the First Aid merit badge block with a review of open items, demonstrations, and counselor questions."],
      ["1:15-1:25", "Capture signoffs on Tenderfoot items that were clearly demonstrated tonight."],
      ["1:25-1:30", "Close with a June checkpoint: who is on pace for Tenderfoot and what is still missing?" ]
    ],
    prep: [
      "Prepare station cards and a quick scoring sheet.",
      "Bring signoff authority and a clear checklist for each Scout.",
      "Make sure the merit badge counselor or designee knows which items can be completed tonight."
    ],
    leaderScript: "Scenario nights reveal whether the skill is actually sticking. Keep feedback direct and encouraging.",
    references: ["firstAid", "advancement", "guideToAdvancement"]
  }),
  m({
    date: "2026-06-29",
    title: "Navigation basics and summer camp prep",
    phase: "May to June: Scout rank and Tenderfoot start",
    summary: "Bridge from early first-aid work into the outdoor and observation skills that dominate the summer months.",
    rankFocus: "Tenderfoot to Second Class transition",
    meritBadgeFocus: "First Aid catch-up or Nature introduction, depending on who is ready",
    agenda: [
      ["0:00-0:10", "Opening and summer camp preview: what first-year Scouts should expect, bring, and ask for help with."],
      ["0:10-0:30", "Introduce map symbols, orienting a map, and how navigation reduces stress on hikes."],
      ["0:30-0:45", "Run a simple map game around the room or outside using landmarks and direction calls."],
      ["0:45-1:15", "Use the merit badge block flexibly: wrap First Aid for Scouts who are close, and start Nature field-journal habits for the others."],
      ["1:15-1:25", "Set summer goals for each Scout: one rank target and one merit badge target."],
      ["1:25-1:30", "Close by reminding Scouts to bring notebooks or observation pages after camp." ]
    ],
    prep: [
      "Bring local map printouts or a camp map.",
      "Make a short summer camp checklist.",
      "Prepare both a First Aid catch-up station and a Nature kickoff station."
    ],
    leaderScript: "This is a transition night. Keep it flexible and use it to avoid losing momentum heading into summer.",
    references: ["advancement", "firstAid", "nature"]
  }),
  m({
    date: "2026-07-06",
    title: "Nature journaling and observation skills",
    phase: "July to September: Second Class momentum and outdoor observation",
    summary: "Teach Scouts how to notice, record, and discuss what they see instead of just walking past it.",
    rankFocus: "Second Class outdoor awareness and observation habits",
    meritBadgeFocus: "Nature: ecology basics and keeping a useful field journal",
    agenda: [
      ["0:00-0:10", "Opening and ask each patrol to share one thing they noticed outdoors during camp or the last outing."],
      ["0:10-0:30", "Teach what to write in a field journal: date, place, weather, species, habitat notes, and questions to investigate later."],
      ["0:30-0:45", "Take Scouts outside for a short observation walk or use prepared photos and specimens if weather is poor."],
      ["0:45-1:15", "Nature block: food webs, ecosystems, and why observation comes before memorization."],
      ["1:15-1:25", "Check that every Scout has a journal or observation sheet started."],
      ["1:25-1:30", "Close with a challenge: record one outdoor observation before next Monday." ]
    ],
    prep: [
      "Bring notebooks or printed observation sheets.",
      "Choose a short outdoor path near the meeting space if allowed.",
      "Bring a few example journal entries to show the level of detail you want."
    ],
    leaderScript: "Slow the pace down on purpose. The teaching point is that noticing is a skill.",
    references: ["nature", "leaveNoTrace", "outdoorCode"]
  }),
  m({
    date: "2026-07-13",
    title: "Leave No Trace and the Outdoor Code",
    phase: "July to September: Second Class momentum and outdoor observation",
    summary: "Tie outdoor ethics directly to the way the troop camps and hikes.",
    rankFocus: "Second Class outdoor ethics and practical application",
    meritBadgeFocus: "Nature: habitats, human impact, and ethical collection",
    agenda: [
      ["0:00-0:10", "Opening with the Outdoor Code and a quick discussion of what each line looks like on a real campout."],
      ["0:10-0:30", "Teach the seven Leave No Trace principles in plain language with local examples."],
      ["0:30-0:45", "Run patrol scenarios where Scouts choose the lower-impact decision and explain why."],
      ["0:45-1:15", "Nature block on habitats, human impact, and why ethical observation matters more than collecting things."],
      ["1:15-1:25", "Sign off any ethics-related or discussion-based items that were clearly completed."],
      ["1:25-1:30", "Close with one practical challenge for the next outing: what will your patrol do differently?" ]
    ],
    prep: [
      "Print the Outdoor Code and Leave No Trace principles.",
      "Prepare three scenario cards based on common troop mistakes.",
      "Bring one patrol-size map or campsite diagram to discuss impact choices."
    ],
    leaderScript: "Avoid making this abstract. Link every principle to one visible troop behavior.",
    references: ["leaveNoTrace", "outdoorCode", "nature"]
  }),
  m({
    date: "2026-07-20",
    title: "Trees, plants, soil, and local ecology",
    phase: "July to September: Second Class momentum and outdoor observation",
    summary: "Give Scouts a way to describe the outdoors around them with more precision.",
    rankFocus: "Second Class nature identification and outdoor understanding",
    meritBadgeFocus: "Nature: plant and tree observation",
    agenda: [
      ["0:00-0:10", "Opening and review journal entries from last week."],
      ["0:10-0:30", "Teach how to distinguish tree and plant traits, and how soil, water, and sunlight shape what grows where."],
      ["0:30-0:45", "Use a short identification walk or sample images to compare two or three common local species."],
      ["0:45-1:15", "Nature block on choosing one area of study, taking notes, and asking questions that lead to deeper observation."],
      ["1:15-1:25", "Check each Scout's notes and point them toward one simple species or habitat to keep following."],
      ["1:25-1:30", "Close by assigning one species sketch, photo, or note entry for next week." ]
    ],
    prep: [
      "Bring local field guides, photos, or ID cards.",
      "Choose a small set of species common to San Luis Obispo County.",
      "Have pencils and clipboards available for observation work."
    ],
    leaderScript: "Depth beats breadth here. Teach a few species well rather than many poorly.",
    references: ["nature", "leaveNoTrace", "advancement"]
  }),
  m({
    date: "2026-07-27",
    title: "Summer camp follow-through and observation plans",
    phase: "July to September: Second Class momentum and outdoor observation",
    summary: "Use the first meeting after camp to turn loose experiences into logged progress.",
    rankFocus: "Tenderfoot and Second Class catch-up after summer camp",
    meritBadgeFocus: "Nature: planning the observation work that remains",
    agenda: [
      ["0:00-0:10", "Opening and ask each Scout what they completed, started, or still need after camp."],
      ["0:10-0:30", "Review camp outcomes: rank items, swim checks, cooking exposure, and outdoor confidence gains."],
      ["0:30-0:45", "Have patrols build a simple plan for what they will finish before Labor Day."],
      ["0:45-1:15", "Nature block: identify any observation or writing pieces still open and set a finish plan for each Scout."],
      ["1:15-1:25", "Update records so summer progress does not get lost."],
      ["1:25-1:30", "Close with August focus: map, compass, cooking, and service." ]
    ],
    prep: [
      "Bring camp advancement reports if available.",
      "Prepare a board or sheet listing common unfinished items.",
      "Have a record-entry process ready that same night."
    ],
    leaderScript: "This night is administrative and motivational. The point is to capture momentum before it evaporates.",
    references: ["advancement", "guideToAdvancement", "nature"]
  }),
  m({
    date: "2026-08-03",
    title: "Map and compass part 1",
    phase: "July to September: Second Class momentum and outdoor observation",
    summary: "Introduce navigation as a confidence skill instead of a mystery.",
    rankFocus: "Second Class map and compass basics",
    meritBadgeFocus: "Nature: local ecology observations tied to location",
    agenda: [
      ["0:00-0:10", "Opening and quick question: how do you know where you are if your phone fails?"],
      ["0:10-0:30", "Teach map orientation, cardinal directions, and reading a simple route."],
      ["0:30-0:45", "Run patrol exercises using a map and set of destination clues."],
      ["0:45-1:15", "Nature block on how location, slope, water, and habitat affect what species Scouts notice."],
      ["1:15-1:25", "Check navigation understanding with a quick explain-back from each patrol."],
      ["1:25-1:30", "Close by previewing next week's pace count and bearings." ]
    ],
    prep: [
      "Bring compasses and simple maps.",
      "Lay out route cards ahead of time.",
      "Mark one or two nearby landmarks for examples."
    ],
    leaderScript: "Keep it intuitive. A first-year Scout should leave feeling capable of starting, not intimidated by technical terms.",
    references: ["advancement", "nature", "guideToSafeScouting"]
  }),
  m({
    date: "2026-08-10",
    title: "Map and compass part 2: bearings and pace count",
    phase: "July to September: Second Class momentum and outdoor observation",
    summary: "Move from theory into feet-on-the-ground navigation.",
    rankFocus: "Second Class bearings, pacing, and route confidence",
    meritBadgeFocus: "Nature: choosing a focus area for species study",
    agenda: [
      ["0:00-0:10", "Opening and quick recap of map orientation from last week."],
      ["0:10-0:30", "Teach basic bearings, following a direction, and how to estimate distance with pace count."],
      ["0:30-0:45", "Run a short outside course with two or three checkpoints if space allows."],
      ["0:45-1:15", "Nature block on narrowing a study area or category: birds, insects, plants, mammals, or habitat patterns."],
      ["1:15-1:25", "Sign off any navigation demonstrations that were done cleanly."],
      ["1:25-1:30", "Close with a reminder that camping and cooking return next week." ]
    ],
    prep: [
      "Measure a small course or checkpoint path.",
      "Bring clipboards for pacing notes.",
      "Have older Scouts lead one navigation station each."
    ],
    leaderScript: "This is a doing night. Minimize talking time and maximize walking time.",
    references: ["advancement", "nature", "guideToSafeScouting"]
  }),
  m({
    date: "2026-08-17",
    title: "Patrol cooking, duty rosters, and cleanup discipline",
    phase: "July to September: Second Class momentum and outdoor observation",
    summary: "Use repetition to make patrol cooking normal rather than exceptional.",
    rankFocus: "Second Class cooking and patrol responsibility",
    meritBadgeFocus: "Nature: food chains and the outdoor systems around camp",
    agenda: [
      ["0:00-0:10", "Opening and patrol role assignments."],
      ["0:10-0:30", "Teach duty-roster flow, sanitation sequence, and how to keep a cooking area orderly."],
      ["0:30-0:45", "Run a patrol planning exercise where Scouts sequence prep, cook, serve, and cleanup."],
      ["0:45-1:15", "Nature block on food chains, decomposition, and how campsites affect local animals."],
      ["1:15-1:25", "Review who is ready to take a larger role on the next outing meal."],
      ["1:25-1:30", "Close with one question: what part of patrol cooking still feels hardest?" ]
    ],
    prep: [
      "Bring a sample duty roster and menu card.",
      "Lay out a mock patrol box or cooking gear if possible.",
      "Prepare one simple campsite-cleanup scenario."
    ],
    leaderScript: "Cooking competence comes from repetition and ownership. Keep giving first-year Scouts real jobs.",
    references: ["cooking", "camping", "nature"]
  }),
  m({
    date: "2026-08-24",
    title: "Service, conservation, and being useful in camp",
    phase: "July to September: Second Class momentum and outdoor observation",
    summary: "Help younger Scouts see that advancement includes service and contribution, not just skill checkboxes.",
    rankFocus: "Second Class service mindset and patrol responsibility",
    meritBadgeFocus: "Nature: conservation action and human stewardship",
    agenda: [
      ["0:00-0:10", "Opening and discussion: what does it mean to be useful in your patrol without being asked twice?"],
      ["0:10-0:30", "Teach the connection between service, conservation, and good troop citizenship."],
      ["0:30-0:45", "Patrols plan a simple service or campsite improvement task."],
      ["0:45-1:15", "Nature block on conservation, habitat care, and how observation should lead to stewardship."],
      ["1:15-1:25", "Capture any service planning or rank-related discussion items completed tonight."],
      ["1:25-1:30", "Close by assigning a small patrol responsibility for the next outing or meeting." ]
    ],
    prep: [
      "Bring examples of simple troop service needs.",
      "Prepare one short conservation discussion prompt.",
      "Coordinate with the SPL or patrol leaders so youth own part of the teaching."
    ],
    leaderScript: "This is a culture night. Praise initiative and follow-through specifically.",
    references: ["advancement", "nature", "leaveNoTrace"]
  }),
  m({
    date: "2026-08-31",
    title: "Second Class review and Nature badge catch-up",
    phase: "July to September: Second Class momentum and outdoor observation",
    summary: "End the month by making progress visible and cleaning up loose ends.",
    rankFocus: "Second Class catch-up and readiness check",
    meritBadgeFocus: "Nature: counselor review and completion planning",
    agenda: [
      ["0:00-0:10", "Opening and a quick month-end check of who is close to Tenderfoot or Second Class completion."],
      ["0:10-0:30", "Run two review stations on navigation and cooking or outdoor ethics based on troop needs."],
      ["0:30-0:45", "Have older Scouts coach small groups through weak points."],
      ["0:45-1:15", "Use the merit badge block for journal review, observation review, and counselor discussions on missing pieces."],
      ["1:15-1:25", "Update records and assign a specific September goal to every Scout."],
      ["1:25-1:30", "Close with September preview: aquatics safety and fire safety." ]
    ],
    prep: [
      "Bring a current advancement snapshot for each new Scout.",
      "Set up review stations around the room.",
      "Coordinate with the merit badge counselor on who is completion-ready."
    ],
    leaderScript: "Use the end of each month to remove ambiguity. Scouts and parents should know where things stand.",
    references: ["advancement", "guideToAdvancement", "nature"]
  }),
  m({
    date: "2026-09-07",
    title: "Holiday buffer and Fire Safety kickoff",
    phase: "October to November: fire safety and stronger patrol competence",
    summary: "Use the holiday week as a lighter restart that still launches the next badge block cleanly.",
    rankFocus: "Uniform, handbook, and early Second Class review",
    meritBadgeFocus: "Fire Safety: introduction and scope",
    agenda: [
      ["0:00-0:10", "Opening and uniform or handbook check as a soft reset after summer schedules."],
      ["0:10-0:30", "Review where the troop stands on Tenderfoot and Second Class completion."],
      ["0:30-0:45", "Run a short game or relay tied to first-aid recall or camping basics."],
      ["0:45-1:15", "Kick off Fire Safety by explaining how the badge connects home safety, public buildings, and camp safety."],
      ["1:15-1:25", "Have Scouts start a home-fire-safety note sheet or checklist to bring back."],
      ["1:25-1:30", "Close by previewing next week's aquatics and safety tie-in." ]
    ],
    prep: [
      "Print a simple home-fire-safety worksheet.",
      "Bring attendance and advancement notes for a quick reset.",
      "If families are present, briefly explain what the Scouts should check at home."
    ],
    leaderScript: "Treat this as a reset night, not a lost night. The point is to re-establish rhythm.",
    references: ["fireSafety", "advancement", "guideToAdvancement"]
  }),
  m({
    date: "2026-09-14",
    title: "Aquatics safety and risk awareness",
    phase: "October to November: fire safety and stronger patrol competence",
    summary: "Even when no swim activity is happening that night, safety vocabulary and judgment can still advance.",
    rankFocus: "Second Class aquatics awareness and safe decision-making",
    meritBadgeFocus: "Fire Safety: fire science and hazard awareness",
    agenda: [
      ["0:00-0:10", "Opening and a short discussion on why many accidents begin with rushing or assumption."],
      ["0:10-0:30", "Teach core aquatics-safety concepts at a high level and talk about where troop activities require extra discipline."],
      ["0:30-0:45", "Run scenario cards where patrols identify hazards and the right next step."],
      ["0:45-1:15", "Fire Safety block on the fire tetrahedron, common fire causes, and why prevention matters more than response."],
      ["1:15-1:25", "Record any discussion-based advancement items completed."],
      ["1:25-1:30", "Close by assigning Scouts to look at one public-building fire feature before next meeting." ]
    ],
    prep: [
      "Prepare simple risk-assessment scenarios.",
      "Bring visuals for fire science basics.",
      "Coordinate with whoever handles aquatics at outings for local consistency."
    ],
    leaderScript: "This is about judgment. Keep asking, What is the hazard? What would you do first?",
    references: ["guideToSafeScouting", "fireSafety", "advancement"]
  }),
  m({
    date: "2026-09-21",
    title: "Home fire safety and public-building awareness",
    phase: "October to November: fire safety and stronger patrol competence",
    summary: "Help Scouts connect merit badge work to their actual houses, schools, and meeting spaces.",
    rankFocus: "Second Class safety awareness and practical observation",
    meritBadgeFocus: "Fire Safety: home and public-building fire prevention",
    agenda: [
      ["0:00-0:10", "Opening and check what features Scouts noticed at home or in public buildings during the week."],
      ["0:10-0:30", "Teach smoke alarms, exits, meeting points, and what makes public buildings safer than people sometimes realize."],
      ["0:30-0:45", "Patrols sketch a simple home escape plan or critique a sample layout."],
      ["0:45-1:15", "Fire Safety block on public-building equipment, precautions, and knowing exits without becoming anxious about it."],
      ["1:15-1:25", "Review worksheets and note who needs more home follow-through."],
      ["1:25-1:30", "Close with next week's campfire safety focus." ]
    ],
    prep: [
      "Print simple floor-plan templates.",
      "Bring photos of alarms, extinguishers, and exit signs.",
      "Have one adult ready to talk through calm evacuation habits."
    ],
    leaderScript: "Aim for practical awareness, not fear. Confidence comes from seeing exits and knowing the plan.",
    references: ["fireSafety", "guideToSafeScouting", "advancement"]
  }),
  m({
    date: "2026-09-28",
    title: "Campfire safety and outdoor fire lays",
    phase: "October to November: fire safety and stronger patrol competence",
    summary: "Turn fire from a novelty into a disciplined outdoor tool.",
    rankFocus: "Second Class outdoor fire awareness and camp readiness",
    meritBadgeFocus: "Fire Safety: outdoor fires, fire lays, and campsite safety",
    agenda: [
      ["0:00-0:10", "Opening and review the Outdoor Code line: be careful with fire."],
      ["0:10-0:30", "Teach where fires belong, when they should not be used, and three common fire lays at a high level."],
      ["0:30-0:45", "If allowed, set up a dry demonstration area or tabletop mock-up showing tinder, kindling, fuel, and spacing."],
      ["0:45-1:15", "Fire Safety block on campsite fire setup, extinguising thoroughly, and keeping the whole site safer."],
      ["1:15-1:25", "Sign off any discussion or demonstration items clearly completed."],
      ["1:25-1:30", "Close with reminder that next week includes stoves and ignition tools." ]
    ],
    prep: [
      "Bring a mock fire-lay setup or safe visual aids.",
      "Coordinate with church rules so no live flame appears indoors unless explicitly allowed.",
      "Have a water-bucket and fire-safety talk ready if doing any outdoor demo."
    ],
    leaderScript: "Treat fire as a tool that earns respect. Calm, deliberate language helps set the tone.",
    references: ["fireSafety", "outdoorCode", "guideToSafeScouting"]
  }),
  m({
    date: "2026-10-05",
    title: "Stove safety, matches, and ferro rods",
    phase: "October to November: fire safety and stronger patrol competence",
    summary: "Focus on the equipment new Scouts are most likely to actually use soon.",
    rankFocus: "Second Class camp-stove readiness and safe habits",
    meritBadgeFocus: "Fire Safety: safe ignition and camp-stove use",
    agenda: [
      ["0:00-0:10", "Opening and ask what mistakes cause the most trouble around stoves and open flames."],
      ["0:10-0:30", "Teach stove setup, fuel awareness, lighting sequence, and the difference between showing off and being competent."],
      ["0:30-0:45", "Demonstrate safe match use and, if allowed and equipped, spark-making tools at a controlled station."],
      ["0:45-1:15", "Fire Safety block on stove use, charcoal safety, and when a stove is the better choice than a fire."],
      ["1:15-1:25", "Review who can safely explain the lighting sequence back to you."],
      ["1:25-1:30", "Close with next week's link between teaching and leadership." ]
    ],
    prep: [
      "Bring an unloaded or inactive stove for demonstration if live use is not allowed.",
      "Set clear boundaries around fuel and flame handling.",
      "Have safety gear visible so Scouts see what prepared use looks like."
    ],
    leaderScript: "Precision matters. Make Scouts say the sequence back, not just watch it.",
    references: ["fireSafety", "guideToSafeScouting", "cooking"]
  }),
  m({
    date: "2026-10-12",
    title: "Knots, lashings, and teaching with EDGE",
    phase: "October to November: fire safety and stronger patrol competence",
    summary: "Build the habit that Scouts do not only learn skills, they teach them too.",
    rankFocus: "First Class knots, lashings, and teaching younger Scouts",
    meritBadgeFocus: "Fire Safety: teach-a-skill lesson planning",
    agenda: [
      ["0:00-0:10", "Opening and frame teaching as one of the best tests of whether a skill is really understood."],
      ["0:10-0:30", "Teach or review lashings and then walk through the EDGE method in simple terms."],
      ["0:30-0:45", "Pair Scouts to teach a knot or lashing to each other in a short timed round."],
      ["0:45-1:15", "Fire Safety block on building a short lesson plan to teach one safe fire or stove skill."],
      ["1:15-1:25", "Note which Scouts are ready to teach a station at a future meeting or campout."],
      ["1:25-1:30", "Close with next week's emergency scenario focus." ]
    ],
    prep: [
      "Bring rope and lashing spars or substitutes.",
      "Prepare a one-page EDGE explanation.",
      "Have one older Scout model a short teach-back."
    ],
    leaderScript: "This night should feel youth-led. Talk less after the first demonstration and let them practice explaining.",
    references: ["advancement", "fireSafety", "guideToAdvancement"]
  }),
  m({
    date: "2026-10-19",
    title: "Emergency scenarios and evacuation drill",
    phase: "October to November: fire safety and stronger patrol competence",
    summary: "Practice calm movement, communication, and leadership in structured scenarios.",
    rankFocus: "First Class problem-solving and emergency response mindset",
    meritBadgeFocus: "Fire Safety: evacuation and response planning",
    agenda: [
      ["0:00-0:10", "Opening and set the expectation that tonight is about calm, not speed alone."],
      ["0:10-0:30", "Review what good leadership looks like in an emergency: clear voice, simple tasks, buddy checks, and staying aware."],
      ["0:30-0:45", "Run one or two short evacuation or response drills appropriate to the space and your rules."],
      ["0:45-1:15", "Fire Safety block on escape plans, meeting points, and what makes a drill useful instead of chaotic."],
      ["1:15-1:25", "Debrief what worked and what broke down."],
      ["1:25-1:30", "Close by previewing cold-weather and cooking transition next week." ]
    ],
    prep: [
      "Coordinate any movement drill with the meeting-site rules.",
      "Prepare simple scenario cards with one leadership twist each.",
      "Have adults placed where they can observe without taking over."
    ],
    leaderScript: "Debrief matters as much as the drill. Ask what Scouts saw, not just what adults noticed.",
    references: ["fireSafety", "guideToSafeScouting", "guideToAdvancement"]
  }),
  m({
    date: "2026-10-26",
    title: "Cold-weather cooking prep and Fire Safety wrap-up",
    phase: "October to November: fire safety and stronger patrol competence",
    summary: "Use the end of the badge block to tie home safety, camp safety, and cooking discipline together.",
    rankFocus: "Second Class to First Class transition and camp preparedness",
    meritBadgeFocus: "Fire Safety: completion night and counselor review",
    agenda: [
      ["0:00-0:10", "Opening and quick review of all four Fire Safety themes: home, public buildings, campfires, and stoves."],
      ["0:10-0:30", "Teach the cold-weather side of camp meals: timing, warm drinks, cleanup discipline, and keeping hands functional."],
      ["0:30-0:45", "Patrols review one cold-weather or wet-weather cooking scenario."],
      ["0:45-1:15", "Use the merit badge block for Fire Safety completion, counselor questions, and documentation of open requirements."],
      ["1:15-1:25", "Capture completed items and identify who needs one more follow-up step."],
      ["1:25-1:30", "Close by previewing November's cooking and camping focus." ]
    ],
    prep: [
      "Bring a completion tracker for the Fire Safety badge.",
      "Prepare one or two foul-weather cooking scenarios.",
      "Coordinate with the counselor before the meeting so completion decisions are efficient."
    ],
    leaderScript: "Finish cleanly. Completion nights work best when the paperwork and expectations are ready ahead of time.",
    references: ["fireSafety", "cooking", "camping"]
  }),
  m({
    date: "2026-11-02",
    title: "Second Class closeout and menu planning",
    phase: "November to December: Second Class closeout and winter readiness",
    summary: "Shift from broad exposure into deliberate completion of the skills that tend to linger unfinished.",
    rankFocus: "Second Class completion and menu planning",
    meritBadgeFocus: "Cooking and Camping: planning lane",
    agenda: [
      ["0:00-0:10", "Opening with a status check on who is close to Second Class and what is still blocking them."],
      ["0:10-0:30", "Teach how good menus connect budget, nutrition, duty roster, and realistic patrol skill level."],
      ["0:30-0:45", "Patrols draft a simple outing menu and explain why it is practical."],
      ["0:45-1:15", "Use the merit badge block as a planning lane for Cooking or Camping pieces that can be advanced in writing or discussion."],
      ["1:15-1:25", "Record any planning-related completions and list what must happen on an outing rather than in the meeting room."],
      ["1:25-1:30", "Close with next week's patrol cooking challenge." ]
    ],
    prep: [
      "Bring menu templates and a patrol gear list.",
      "Have a sample inexpensive, realistic menu to critique.",
      "Print a list of items that must be completed outdoors versus indoors."
    ],
    leaderScript: "Planning is part of advancement too. Treat it as real work, not filler.",
    references: ["advancement", "cooking", "camping"]
  }),
  m({
    date: "2026-11-09",
    title: "Patrol cooking challenge",
    phase: "November to December: Second Class closeout and winter readiness",
    summary: "Use a controlled challenge to reveal where the patrol process is strong and where it still depends on adults.",
    rankFocus: "Second Class cooking and patrol execution",
    meritBadgeFocus: "Cooking: nutrition, food safety, and teamwork",
    agenda: [
      ["0:00-0:10", "Opening and assign patrol roles with minimal adult rescue."],
      ["0:10-0:30", "Review one last time how to sequence prep, cook, serve, and cleanup."],
      ["0:30-0:45", "Run the patrol challenge: menu walkthrough, kitchen layout, duty assignments, and timing plan."],
      ["0:45-1:15", "Cooking block on nutrition, food safety, and what makes a meal both safe and worth eating."],
      ["1:15-1:25", "Debrief where patrol coordination broke down and who is ready for more responsibility."],
      ["1:25-1:30", "Close with reminder that good cooking starts with good packing next week." ]
    ],
    prep: [
      "Set up a simple scoring or observation sheet for teamwork and sanitation.",
      "Bring menu cards and mock ingredients or labels.",
      "Have older Scouts judge and coach rather than adults doing all feedback."
    ],
    leaderScript: "Let patrols struggle a little without letting them fail dangerously. Productive friction teaches a lot.",
    references: ["cooking", "camping", "guideToSafeScouting"]
  }),
  m({
    date: "2026-11-16",
    title: "Cold-weather gear and camping hazards",
    phase: "November to December: Second Class closeout and winter readiness",
    summary: "Prepare first-year Scouts for colder outings by making gear choices visible and discussable.",
    rankFocus: "Camping preparation and hazard awareness",
    meritBadgeFocus: "Camping: gear lists and hazard planning",
    agenda: [
      ["0:00-0:10", "Opening and ask Scouts what changes between a warm-weather and cold-weather packing list."],
      ["0:10-0:30", "Teach layering, dry gear management, sleep systems, and simple hazard planning for wet and cold conditions."],
      ["0:30-0:45", "Use a gear-layout exercise where patrols identify missing or poor choices."],
      ["0:45-1:15", "Camping lane on hazard identification, clothing lists, and preparing for an overnight trip."],
      ["1:15-1:25", "Record any camping-planning progress made tonight."],
      ["1:25-1:30", "Close with Thanksgiving-week expectations and a lighter meeting next week." ]
    ],
    prep: [
      "Bring sample layers and sleeping gear if possible.",
      "Prepare a bad-packing example bag to critique.",
      "Use local weather examples so the teaching feels real."
    ],
    leaderScript: "The main message is dry, warm, and organized. Keep repeating those words.",
    references: ["camping", "guideToSafeScouting", "advancement"]
  }),
  m({
    date: "2026-11-23",
    title: "Short-format gratitude, review, and catch-up",
    phase: "November to December: Second Class closeout and winter readiness",
    summary: "Keep the holiday week simple while still protecting forward motion.",
    rankFocus: "Second Class catch-up and reflection",
    meritBadgeFocus: "Cooking and Camping catch-up",
    agenda: [
      ["0:00-0:10", "Opening with a brief gratitude reflection and what each Scout appreciates about the patrol this fall."],
      ["0:10-0:30", "Run one review station chosen by the troop's biggest gap area."],
      ["0:30-0:45", "Provide one-on-one requirement check-ins and record updates."],
      ["0:45-1:15", "Use the merit badge block for catch-up paperwork, planning, or counselor questions."],
      ["1:15-1:25", "Set one December goal for each new Scout."],
      ["1:25-1:30", "Close early if attendance is light, but leave with clear next steps." ]
    ],
    prep: [
      "Bring updated checklists.",
      "Have one station leader prepared for low or mixed attendance.",
      "Plan for flexibility rather than a heavy script."
    ],
    leaderScript: "Holiday weeks are not for huge ambition. Use them to keep momentum from slipping.",
    references: ["advancement", "guideToAdvancement", "cooking"]
  }),
  m({
    date: "2026-11-30",
    title: "Hiking safety and route planning",
    phase: "November to December: Second Class closeout and winter readiness",
    summary: "Bring hiking back into focus before winter outings narrow the schedule.",
    rankFocus: "Second Class hiking and trip planning",
    meritBadgeFocus: "Camping: trip planning and preparedness",
    agenda: [
      ["0:00-0:10", "Opening and ask what makes a hike feel easy versus stressful."],
      ["0:10-0:30", "Teach route planning, trail hazards, group pacing, and what good hiking leadership looks like."],
      ["0:30-0:45", "Patrols plan a short local route and identify water, turnaround points, and likely hazards."],
      ["0:45-1:15", "Camping lane on trip planning and how outing prep supports rank advancement."],
      ["1:15-1:25", "Sign off or note any planning steps complete tonight."],
      ["1:25-1:30", "Close with December's focus on leadership, review, and winter readiness." ]
    ],
    prep: [
      "Bring a local trail map or park map.",
      "Create one route-planning worksheet per patrol.",
      "Have older Scouts share one hiking lesson learned from experience."
    ],
    leaderScript: "Teach pacing and planning as leadership, not just logistics.",
    references: ["advancement", "camping", "guideToSafeScouting"]
  }),
  m({
    date: "2026-12-07",
    title: "Patrol leadership and task ownership",
    phase: "November to December: Second Class closeout and winter readiness",
    summary: "Make leadership concrete by focusing on the little tasks that keep meetings and campouts running.",
    rankFocus: "First Class leadership habits and patrol ownership",
    meritBadgeFocus: "Cooking: timing, sequencing, and team coordination",
    agenda: [
      ["0:00-0:10", "Opening and discussion on what a helpful patrol member does before being asked."],
      ["0:10-0:30", "Teach task ownership, duty follow-through, and how youth leaders can correct without humiliating."],
      ["0:30-0:45", "Patrols work through a breakdown scenario where timing, cleanup, or communication failed."],
      ["0:45-1:15", "Cooking lane on sequencing a meal so all parts are ready on time."],
      ["1:15-1:25", "Identify which Scouts can take on small leadership roles over the next month."],
      ["1:25-1:30", "Close with a reminder that review and teaching are next week's focus." ]
    ],
    prep: [
      "Bring one clear scenario where leadership made the difference.",
      "Have patrol leaders ready to share a real example.",
      "Prepare a short meal-timing exercise."
    ],
    leaderScript: "Leadership should feel practical and reachable. Avoid making it sound like a title instead of a behavior.",
    references: ["advancement", "guideToAdvancement", "cooking"]
  }),
  m({
    date: "2026-12-14",
    title: "First Class first aid refresh and teach-back night",
    phase: "November to December: Second Class closeout and winter readiness",
    summary: "Repetition and teaching help keep early first-aid learning from fading.",
    rankFocus: "First Class first aid review and teaching",
    meritBadgeFocus: "Catch-up lane for open merit badge items",
    agenda: [
      ["0:00-0:10", "Opening and explain that tonight the Scouts do most of the talking and demonstrating."],
      ["0:10-0:30", "Review the most-used first aid skills and have older or more prepared Scouts teach stations."],
      ["0:30-0:45", "Rotate new Scouts through the stations and require each one to explain a step back in their own words."],
      ["0:45-1:15", "Use the merit badge block for open-item catch-up across First Aid, Nature, Fire Safety, Cooking, or Camping as needed."],
      ["1:15-1:25", "Capture signoffs and note which Scouts are ready to teach on a campout."],
      ["1:25-1:30", "Close with next week's lighter celebration and relay format." ]
    ],
    prep: [
      "Choose two or three older Scouts to run teach-back stations.",
      "Bring visual station cards so the youth leaders do not need to improvise everything.",
      "Prepare a catch-up roster by badge and Scout."
    ],
    leaderScript: "Teach-back nights work best when adults quietly support and let the youth carry the visible teaching role.",
    references: ["firstAid", "guideToAdvancement", "advancement"]
  }),
  m({
    date: "2026-12-21",
    title: "Skills relay, weak-point review, and year-end morale night",
    phase: "November to December: Second Class closeout and winter readiness",
    summary: "End the calendar year with energy while still reinforcing key skills.",
    rankFocus: "Review and retention across early ranks",
    meritBadgeFocus: "Open catch-up lane",
    agenda: [
      ["0:00-0:10", "Opening with a positive recap of how far the new-Scout group has come since May."],
      ["0:10-0:30", "Run a fun relay or patrol challenge covering knots, safety, map basics, and campsite judgment."],
      ["0:30-0:45", "Pause for quick reteaching at the stations where scouts struggle the most."],
      ["0:45-1:15", "Use the merit badge block as an open catch-up and counselor-question period rather than new content."],
      ["1:15-1:25", "Set one January goal for each Scout before the break."],
      ["1:25-1:30", "Close with encouragement and a reminder to bring journals or observation materials back in January." ]
    ],
    prep: [
      "Set up relay stations ahead of time.",
      "Bring small recognition items if the troop uses them.",
      "Have year-end progress notes handy so praise is specific."
    ],
    leaderScript: "Fun is not a distraction here. It is how you keep first-year Scouts attached to the program through winter.",
    references: ["advancement", "guideToAdvancement", "meritBadgeHub"]
  }),
  m({
    date: "2026-12-28",
    title: "Winter break optional checklist night",
    phase: "November to December: Second Class closeout and winter readiness",
    summary: "If the troop does not hold a regular meeting this week, use this as an at-home checklist and planning marker.",
    rankFocus: "Personal review and self-management",
    meritBadgeFocus: "No new badge content; optional home follow-through",
    agenda: [
      ["0:00-0:10", "If the troop meets, open briefly and set expectations for a short, low-key night."],
      ["0:10-0:30", "Ask Scouts to review their handbook or checklist and circle the next three items they most want to finish."],
      ["0:30-0:45", "Have each Scout write one question to bring back in January."],
      ["0:45-1:15", "No new badge lesson. Use this block for optional counselor follow-up, paperwork, or simply no meeting if your troop is off."],
      ["1:15-1:25", "Confirm January return plans and who still needs record updates."],
      ["1:25-1:30", "Close early and release the week if attendance is light." ]
    ],
    prep: [
      "Decide ahead of time whether the troop is actually meeting.",
      "If not meeting, use this page as the at-home guide for families.",
      "If meeting, keep expectations intentionally light."
    ],
    leaderScript: "Do not force a heavy program into a week when many families are away. Protect the rhythm without overbuilding it.",
    references: ["advancement", "guideToAdvancement"]
  }),
  m({
    date: "2027-01-04",
    title: "Mammal Study kickoff: tracks, signs, and local species",
    phase: "January to February: First Class push and observation-based badge work",
    summary: "Start the new year with something fresh that gets Scouts back outside and noticing details again.",
    rankFocus: "First Class nature awareness and observation discipline",
    meritBadgeFocus: "Mammal Study: signs, tracks, and local species overview",
    agenda: [
      ["0:00-0:10", "Opening and ask what mammals Scouts have noticed recently, even around neighborhoods and parks."],
      ["0:10-0:30", "Teach the difference between seeing an animal and seeing evidence of an animal: tracks, scat, feeding signs, burrows, and paths."],
      ["0:30-0:45", "Use photos, casts, or local examples to compare common signs."],
      ["0:45-1:15", "Mammal Study block on selecting likely local species and setting up observation logs."],
      ["1:15-1:25", "Make sure every Scout has a mammal observation plan or worksheet."],
      ["1:25-1:30", "Close with one simple at-home or neighborhood observation assignment." ]
    ],
    prep: [
      "Bring local track and sign images.",
      "Prepare a simple observation log template.",
      "Choose two or three likely local mammals to emphasize."
    ],
    leaderScript: "This should feel fresh after the holidays. Curiosity is the right tone.",
    references: ["mammalStudy", "leaveNoTrace", "outdoorCode"]
  }),
  m({
    date: "2027-01-11",
    title: "Habitats, observation plans, and ethical field work",
    phase: "January to February: First Class push and observation-based badge work",
    summary: "Show Scouts how to observe animals without turning the outdoors into a disturbance project.",
    rankFocus: "First Class observation habits and outdoor ethics",
    meritBadgeFocus: "Mammal Study: habitat, timing, and patient observation",
    agenda: [
      ["0:00-0:10", "Opening and share any mammal signs or sightings from the week."],
      ["0:10-0:30", "Teach how habitat, water, cover, and time of day shape what Scouts are likely to find."],
      ["0:30-0:45", "Patrols design a short observation plan with place, time, and what evidence they expect to find."],
      ["0:45-1:15", "Mammal Study block on ethical observation, staying quiet, keeping distance, and recording useful notes."],
      ["1:15-1:25", "Review each Scout's plan so it is realistic and safe."],
      ["1:25-1:30", "Close by asking Scouts to complete one observation session before next week." ]
    ],
    prep: [
      "Bring habitat photos or maps.",
      "Prepare one observation-plan worksheet per patrol.",
      "Remind families if an at-home observation assignment is part of the plan."
    ],
    leaderScript: "Teach patience. Observation skills improve when Scouts stop trying to force a result.",
    references: ["mammalStudy", "leaveNoTrace", "guideToSafeScouting"]
  }),
  m({
    date: "2027-01-18",
    title: "Local species research and life-history work",
    phase: "January to February: First Class push and observation-based badge work",
    summary: "Balance outdoor observation with the research and writing that turn sightings into understanding.",
    rankFocus: "First Class communication and explanation skills",
    meritBadgeFocus: "Mammal Study: life history, habitat, and human impact",
    agenda: [
      ["0:00-0:10", "Opening and quick recap of which mammals Scouts are tracking or researching."],
      ["0:10-0:30", "Teach what a simple life history includes: habitat, food, predators, behavior, range, and human effects."],
      ["0:30-0:45", "Scouts work in pairs to outline one species and identify what information they still need."],
      ["0:45-1:15", "Mammal Study block on turning notes into a short report or explanation for the counselor."],
      ["1:15-1:25", "Check that every Scout has a species selected and a realistic next step."],
      ["1:25-1:30", "Close by previewing next week's observation debrief." ]
    ],
    prep: [
      "Bring field guides, printed species sheets, or approved online resources.",
      "Have paper and pencils ready for outlines.",
      "Pick a few species that are actually local and recognizable."
    ],
    leaderScript: "Do not overload them with research depth. The win is a clear, understandable profile of one species.",
    references: ["mammalStudy", "advancement", "guideToAdvancement"]
  }),
  m({
    date: "2027-01-25",
    title: "Observation debrief and Mammal Study progress night",
    phase: "January to February: First Class push and observation-based badge work",
    summary: "Use shared observations to teach that not seeing a big animal can still be successful field work.",
    rankFocus: "First Class persistence and evidence-based explanation",
    meritBadgeFocus: "Mammal Study: reviewing logs, signs, and reports",
    agenda: [
      ["0:00-0:10", "Opening and ask what Scouts found, what they did not find, and what signs still counted as useful evidence."],
      ["0:10-0:30", "Review observation logs and reinforce what makes notes credible and specific."],
      ["0:30-0:45", "Have patrols compare two logs and discuss what made one more useful."],
      ["0:45-1:15", "Mammal Study block for open writing, counselor questions, and progress review."],
      ["1:15-1:25", "Record who is close to completion and who needs another field session."],
      ["1:25-1:30", "Close with a February shift into First Class and conservation topics." ]
    ],
    prep: [
      "Ask Scouts to bring logs, sketches, or photos.",
      "Have a review checklist for common missing details.",
      "Coordinate with the counselor if any signoffs may happen."
    ],
    leaderScript: "Normalize partial progress. A good field notebook is often more important than a dramatic sighting.",
    references: ["mammalStudy", "guideToAdvancement", "advancement"]
  }),
  m({
    date: "2027-02-01",
    title: "Navigation review and route-planning refresh",
    phase: "January to February: First Class push and observation-based badge work",
    summary: "Bring First Class work back to the center while still using the merit badge block productively.",
    rankFocus: "First Class navigation and planning",
    meritBadgeFocus: "Mammal Study completion or Fish and Wildlife introduction, depending on progress",
    agenda: [
      ["0:00-0:10", "Opening and frame February as a month for finishing, not just starting."],
      ["0:10-0:30", "Review route planning, bearings, and the decisions that matter most on a real hike."],
      ["0:30-0:45", "Run a patrol route exercise with one hazard or change inserted mid-problem."],
      ["0:45-1:15", "Use the badge block flexibly: finish Mammal Study where possible, or introduce conservation problems for Scouts ready to move into Fish and Wildlife."],
      ["1:15-1:25", "Record which lane each Scout is in so the next weeks stay organized."],
      ["1:25-1:30", "Close with next week's cooking and nutrition focus." ]
    ],
    prep: [
      "Bring route-planning sheets and a map.",
      "Prepare two badge-lane tables if the group is splitting.",
      "Make sure no Scout is unclear which lane they should sit in."
    ],
    leaderScript: "This is a split-lane night. Clear organization matters more than ambitious content.",
    references: ["advancement", "mammalStudy", "fishWildlife"]
  }),
  m({
    date: "2027-02-08",
    title: "Camp cooking, nutrition, and food choices",
    phase: "January to February: First Class push and observation-based badge work",
    summary: "Keep cooking skill tied to health, practical planning, and patrol responsibility.",
    rankFocus: "First Class cooking and menu judgment",
    meritBadgeFocus: "Cooking or Fish and Wildlife lane, depending on scout progress",
    agenda: [
      ["0:00-0:10", "Opening and ask what makes a camp meal actually workable for a tired patrol."],
      ["0:10-0:30", "Teach nutrition at a practical level: energy, hydration, food safety, and simplicity."],
      ["0:30-0:45", "Patrols critique one menu that looks fun but is unrealistic, then improve it."],
      ["0:45-1:15", "Badge block: cooking-planning work for some Scouts, conservation-lane work for others."],
      ["1:15-1:25", "Review who still needs cooking-related rank items on an actual outing."],
      ["1:25-1:30", "Close with next week's leadership and service focus." ]
    ],
    prep: [
      "Bring menu cards with hidden problems built in.",
      "Prepare two work areas if badge lanes split.",
      "Have one older Scout help the newer Scouts stay on-task in the planning lane."
    ],
    leaderScript: "Keep it real. Food choices should be discussed like engineers discuss trade-offs: weight, mess, time, nutrition, and morale.",
    references: ["cooking", "camping", "fishWildlife"]
  }),
  m({
    date: "2027-02-15",
    title: "Leadership, service, and conservation problems",
    phase: "January to February: First Class push and observation-based badge work",
    summary: "Tie youth leadership to stewardship and contribution, not just troop titles.",
    rankFocus: "First Class leadership and service mindset",
    meritBadgeFocus: "Fish and Wildlife: conservation problems and local stewardship",
    agenda: [
      ["0:00-0:10", "Opening and discussion on where Scouts can lead without waiting for a patch or title."],
      ["0:10-0:30", "Teach service planning, communication, and how small leadership behaviors build trust."],
      ["0:30-0:45", "Patrols identify one local conservation issue or troop-level stewardship task."],
      ["0:45-1:15", "Fish and Wildlife block on conservation problems, local species, and how management choices affect habitats."],
      ["1:15-1:25", "Write down one service or stewardship action each patrol can actually execute."],
      ["1:25-1:30", "Close by previewing emergency readiness next week." ]
    ],
    prep: [
      "Bring one or two local stewardship examples.",
      "Prepare conservation discussion prompts tied to your area.",
      "Coordinate with the SPL so youth voice is central in the service discussion."
    ],
    leaderScript: "Leadership grows when Scouts are trusted with useful work. Give them a specific action, not a vague speech.",
    references: ["advancement", "fishWildlife", "guideToAdvancement"]
  }),
  m({
    date: "2027-02-22",
    title: "Emergency readiness and decision-making under pressure",
    phase: "January to February: First Class push and observation-based badge work",
    summary: "Use short scenarios to reinforce both rank growth and calm leadership.",
    rankFocus: "First Class emergency readiness and composure",
    meritBadgeFocus: "Fish and Wildlife: management practices and local issues",
    agenda: [
      ["0:00-0:10", "Opening and frame the night around calm thinking instead of dramatic rescue."],
      ["0:10-0:30", "Teach how patrols should communicate when plans change, weather shifts, or someone is struggling."],
      ["0:30-0:45", "Run a scenario where a patrol must reprioritize safely and explain its choices."],
      ["0:45-1:15", "Fish and Wildlife block on practical management choices and what conservation work looks like in real agencies and communities."],
      ["1:15-1:25", "Capture any open leadership or discussion-based requirements."],
      ["1:25-1:30", "Close by previewing March review stations and finish push." ]
    ],
    prep: [
      "Prepare one scenario focused on decision-making, not just skill recall.",
      "Bring short notes on local management examples.",
      "Have adults watch quietly until the debrief."
    ],
    leaderScript: "When Scouts feel pressure, shrink the problem into simple decisions. Model that tonight.",
    references: ["guideToSafeScouting", "advancement", "fishWildlife"]
  }),
  m({
    date: "2027-03-01",
    title: "Outdoor-skills review by stations",
    phase: "March to April: First Class finish and next-step planning",
    summary: "Start the final stretch by identifying weak spots early enough to still fix them.",
    rankFocus: "First Class review across multiple skills",
    meritBadgeFocus: "Fish and Wildlife project planning or badge catch-up",
    agenda: [
      ["0:00-0:10", "Opening and explain that March is the finish push month."],
      ["0:10-0:30", "Set up multi-skill review stations: knots, first aid, navigation, campsite judgment, and cooking decisions."],
      ["0:30-0:45", "Rotate patrols and have youth instructors note where scouts need one more repetition."],
      ["0:45-1:15", "Use the badge block for project planning, counselor review, or open catch-up based on each Scout's lane."],
      ["1:15-1:25", "Create a short finish list for each new Scout with dates and responsible adults or youth helpers."],
      ["1:25-1:30", "Close with next week's pioneering or gadget build." ]
    ],
    prep: [
      "Build concise station cards so youth can run them.",
      "Have signoff sheets ready but do not force signoff if the skill is not clean yet.",
      "Prepare a finish-list template."
    ],
    leaderScript: "This night is diagnostic. Be honest, kind, and specific about what still needs work.",
    references: ["advancement", "guideToAdvancement", "fishWildlife"]
  }),
  m({
    date: "2027-03-08",
    title: "Camp gadget build or simple pioneering night",
    phase: "March to April: First Class finish and next-step planning",
    summary: "Give Scouts something tangible to build so rope and lashing skills feel useful.",
    rankFocus: "First Class lashings and practical build confidence",
    meritBadgeFocus: "Fish and Wildlife observation or badge catch-up",
    agenda: [
      ["0:00-0:10", "Opening and explain the gadget or pioneering objective."],
      ["0:10-0:30", "Review the lashings needed and show the finished concept briefly."],
      ["0:30-0:45", "Patrols build a simple useful item or mock-up."],
      ["0:45-1:15", "Use the merit badge block for observation logs, counselor discussion, or other catch-up work."],
      ["1:15-1:25", "Debrief what build choices worked and which lashings still need practice."],
      ["1:25-1:30", "Close with board-of-review and conference prep for next week." ]
    ],
    prep: [
      "Bring spars, poles, or substitutes plus rope.",
      "Choose a build that fits the room and time available.",
      "Assign one experienced Scout to each patrol if possible."
    ],
    leaderScript: "Let the build be a teaching tool, not a perfection contest.",
    references: ["advancement", "camping", "fishWildlife"]
  }),
  m({
    date: "2027-03-15",
    title: "Scoutmaster conference and board-of-review readiness",
    phase: "March to April: First Class finish and next-step planning",
    summary: "Demystify the process so newer Scouts and parents see it as a checkpoint, not a test room.",
    rankFocus: "Conference and board-of-review readiness",
    meritBadgeFocus: "Fish and Wildlife career and stewardship discussion or open catch-up",
    agenda: [
      ["0:00-0:10", "Opening and explain the difference between skill signoff, Scoutmaster conference, and board of review."],
      ["0:10-0:30", "Walk through what Scouts should bring, how to reflect on growth, and what kind of questions they may hear."],
      ["0:30-0:45", "Run a light mock interview in pairs or small groups."],
      ["0:45-1:15", "Use the merit badge block for career discussion, stewardship reflection, or open badge completion work."],
      ["1:15-1:25", "Identify which scouts are ready to schedule a conference or review."],
      ["1:25-1:30", "Close with a reminder that next week is pure catch-up night." ]
    ],
    prep: [
      "Have adults aligned on how to describe the process clearly.",
      "Prepare two or three sample reflection questions.",
      "Bring current advancement status for the likely-ready Scouts."
    ],
    leaderScript: "Reduce anxiety by being plain and specific. Mystery creates stress; clarity lowers it.",
    references: ["guideToAdvancement", "advancement", "fishWildlife"]
  }),
  m({
    date: "2027-03-22",
    title: "Catch-up night for missing requirements",
    phase: "March to April: First Class finish and next-step planning",
    summary: "Dedicate a whole meeting to removing blockers instead of pretending everyone needs the same lesson.",
    rankFocus: "Personalized advancement catch-up",
    meritBadgeFocus: "Open catch-up across current badges",
    agenda: [
      ["0:00-0:10", "Opening and quickly sort Scouts by the one requirement or badge item they most need tonight."],
      ["0:10-0:30", "Run targeted small groups by need: knots, map, first aid, cooking plan, or writing help."],
      ["0:30-0:45", "Keep the targeted work going with older Scouts or adults assigned to each table."],
      ["0:45-1:15", "Use the badge block the same way: no new content, only clean-up of missing work."],
      ["1:15-1:25", "Update records before anyone leaves."],
      ["1:25-1:30", "Close with a clear statement of who is now on track and who still needs an outing or conference." ]
    ],
    prep: [
      "Prepare a live list of every scout's blockers.",
      "Assign adults or older scouts to the likely stations before the meeting starts.",
      "Keep blank worksheets available for writing-based merit badge items."
    ],
    leaderScript: "This is one of the highest-value meetings of the year. Specificity beats inspiration tonight.",
    references: ["advancement", "guideToAdvancement", "meritBadgeHub"]
  }),
  m({
    date: "2027-03-29",
    title: "Youth-led teaching night",
    phase: "March to April: First Class finish and next-step planning",
    summary: "Let more advanced Scouts teach the skills newer Scouts still need to own.",
    rankFocus: "Teaching, retention, and youth leadership",
    meritBadgeFocus: "Open merit badge catch-up",
    agenda: [
      ["0:00-0:10", "Opening and explain which youth instructors are leading which stations."],
      ["0:10-0:30", "Youth-led station round one."],
      ["0:30-0:45", "Youth-led station round two with scouts explaining skills back to the instructor."],
      ["0:45-1:15", "Use the merit badge block for individual catch-up while youth instructors and adults rotate where needed."],
      ["1:15-1:25", "Debrief what felt different when the teaching came from fellow Scouts."],
      ["1:25-1:30", "Close with April's finish-and-celebrate focus." ]
    ],
    prep: [
      "Coach youth instructors briefly before the meeting.",
      "Give them station cards so they are not improvising from memory alone.",
      "Tell adults to support quietly rather than re-take the floor."
    ],
    leaderScript: "A youth-led night can change the culture of a troop. Protect that by letting the youth be visible.",
    references: ["advancement", "guideToAdvancement", "guideToSafeScouting"]
  }),
  m({
    date: "2027-04-05",
    title: "First Class finish push and paperwork check",
    phase: "March to April: First Class finish and next-step planning",
    summary: "Make the last completion push concrete and administrative as well as instructional.",
    rankFocus: "First Class finish push",
    meritBadgeFocus: "No new badge; finish current work cleanly",
    agenda: [
      ["0:00-0:10", "Opening and identify which scouts are truly within reach of First Class this month."],
      ["0:10-0:30", "Target the one or two most common unfinished skills with a focused mini-lesson."],
      ["0:30-0:45", "Give time for demonstrations and signoffs where appropriate."],
      ["0:45-1:15", "Use the badge block as a paperwork and completion lane only."],
      ["1:15-1:25", "Check records against handbooks or Scoutbook so nothing is missing."],
      ["1:25-1:30", "Close by reminding families and scouts what must happen before the celebration month ends." ]
    ],
    prep: [
      "Bring record printouts and handbook access.",
      "Know ahead of time which skills are still common blockers.",
      "Have signoff authority present."
    ],
    leaderScript: "This is a precision night. Be accurate and calm; recordkeeping matters here.",
    references: ["advancement", "guideToAdvancement"]
  }),
  m({
    date: "2027-04-12",
    title: "Parent update and individual conference night",
    phase: "March to April: First Class finish and next-step planning",
    summary: "Keep families informed without turning advancement into parent-managed pressure.",
    rankFocus: "Communication, reflection, and readiness for next steps",
    meritBadgeFocus: "No new badge; individual progress conversations",
    agenda: [
      ["0:00-0:10", "Opening and explain that tonight is about clarity, not comparison between Scouts."],
      ["0:10-0:30", "Run short individual or family-facing updates while patrols do a light review or game."],
      ["0:30-0:45", "Continue conferences and answer process questions."],
      ["0:45-1:15", "Use the badge block only for individual completion conversations or counselor check-ins."],
      ["1:15-1:25", "Confirm next-step dates for conferences, boards, or outings."],
      ["1:25-1:30", "Close with final-signoff reminder for next week." ]
    ],
    prep: [
      "Have short written status notes ready for each new Scout.",
      "Prepare one patrol activity that can run with low adult attention.",
      "Keep the tone supportive and factual."
    ],
    leaderScript: "Families want clarity. Give them specifics without turning the meeting into a pressure session.",
    references: ["advancement", "guideToAdvancement"]
  }),
  m({
    date: "2027-04-19",
    title: "Final signoffs and reflection night",
    phase: "March to April: First Class finish and next-step planning",
    summary: "Use the final full working meeting to both finish and reflect on growth over the year.",
    rankFocus: "Final signoffs and personal reflection",
    meritBadgeFocus: "Last open-item follow-up only",
    agenda: [
      ["0:00-0:10", "Opening and explain that tonight is the final full work night before celebration and reset."],
      ["0:10-0:30", "Run targeted signoff stations for the most common remaining needs."],
      ["0:30-0:45", "Give each Scout a short reflection prompt: what skill felt hardest this year, and what skill now feels normal?"],
      ["0:45-1:15", "Use the merit badge block for last open-item follow-up and record entry."],
      ["1:15-1:25", "Confirm which scouts are ready for recognition or next-step planning."],
      ["1:25-1:30", "Close with a reminder that next week is about celebration and where we go from here." ]
    ],
    prep: [
      "Know exactly which items can still reasonably be completed tonight.",
      "Have reflection cards or prompts ready.",
      "Coordinate with whoever manages recognition or advancement reporting."
    ],
    leaderScript: "Reflection helps Scouts see growth they might otherwise miss. Make space for it.",
    references: ["advancement", "guideToAdvancement", "meritBadgeHub"]
  }),
  m({
    date: "2027-04-26",
    title: "Celebrate progress and plan the next lane",
    phase: "March to April: First Class finish and next-step planning",
    summary: "End the cycle by making progress visible and pointing Scouts toward their next meaningful goal.",
    rankFocus: "Recognition, confidence, and next-step planning",
    meritBadgeFocus: "Set the next badge lane rather than starting something new tonight",
    agenda: [
      ["0:00-0:10", "Opening and celebrate what the new-Scout group accomplished since the May launch."],
      ["0:10-0:30", "Recognize rank growth, skill growth, and service or leadership moments, not just badges."],
      ["0:30-0:45", "Have patrols discuss what badge or skill lane they should enter next: camping depth, cooking depth, conservation, aquatics, or something troop-specific."],
      ["0:45-1:15", "Use the final merit badge block as a planning conversation and record handoff, not a new lesson."],
      ["1:15-1:25", "Make sure each Scout leaves with one next target after this first-year lane."],
      ["1:25-1:30", "Close by thanking the youth leaders, parents, and counselors who made the lane work." ]
    ],
    prep: [
      "Bring a visible year-end summary if possible.",
      "Coordinate recognition with troop leadership.",
      "Prepare a short list of next-step badges or skill paths."
    ],
    leaderScript: "Finish by naming growth clearly. Recognition is part of retention.",
    references: ["advancement", "guideToAdvancement", "meritBadgeHub"]
  })
];
