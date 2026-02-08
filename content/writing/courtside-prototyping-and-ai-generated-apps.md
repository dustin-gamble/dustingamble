---
title: "Courtside Prototyping: AI-Generated Apps in Real Time"
date: "2026-02-08"
summary: "From a notepad idea during my daughter's basketball game to a working tracker in minutes, this experiment shows where AI-generated software is useful today and where engineering still matters."
tags:
  - AI
  - Prototyping
  - Personal Tools
  - Product Thinking
draft: false
---

Yesterday, during my daughter's basketball game, I started with a familiar problem: I wanted a quick way to log what was happening in real time.

I was planning to do it the old way in a text note. Dribbles, passes, rebounds, shots, scores. My first thought was just to use tally marks or put 1s under each category.

Then I had a second thought: this should be a tiny app.

I opened Gemini with Canvas and described what I wanted. In a short loop, I had a mobile-first scoreboard with big tap targets, undo, local save, import/export, and reset.

That immediate jump from idea to usable tool made me step back and ask a bigger question:

If AI can generate working apps on demand, do standalone apps start to matter less?

## The moment in one screenshot

![Olive basketball tracker app screenshot](/images/basketball_counter.png)

This is what I was using courtside: dark theme, large controls, and no extra friction.

## Prompt trail

This was the exact evolution from first thought to usable version.

### First prompt

> Build an html page for tracking olives basketball game. We want to just log her dribbles, pass, shots, and scores.
>
> Make it a download file so I can do it right now on my phone.

### Follow-up prompt 1

> Load in canvas and also provide export and import of values.

### Follow-up prompt 2

> Please also add a track object for rebounds

The pattern was simple: ask for something concrete, test it immediately, then tighten requirements in short iterations.

## Optimized prompt

After that, I consolidated the working requirements into one tighter prompt:

```text
Build a single-file, mobile-first HTML web application for tracking a basketball player's game stats. The app should be self-contained (HTML, CSS, and JS in one file) and use Tailwind CSS via CDN for styling.

Design Requirements:

Theme: Dark mode (dark gray/black background) to save battery and look good in gyms.

Layout:

Top: A header with the title "Olive's Stats," an "Undo" button, and a "Settings" (gear icon) button.

Scoreboard: A row immediately below the header showing current counts for Dribbles, Passes, Shots, Rebounds, and Points.

Controls: A large button grid filling the rest of the screen. Buttons must be large and easy to tap on a phone.

Button Colors:

Dribble: Blue

Pass: Cyan

Missed Shot: Pink

Rebound: Orange

SCORE!: Green (Make this button larger/prominent, spanning 2 columns if possible).

Functionality & Logic:

Stat Tracking:

Dribble / Pass / Rebound: simple +1 increment.

Missed Shot: +1 to "Shots" (attempts).

SCORE!: +2 to "Points" AND +1 to "Shots" (since a make is also an attempt).

Data Persistence:

Automatically save the stats to the browser's localStorage on every click so data isn't lost on refresh.

Undo: Allow the user to undo the last action (keep a history stack).

Settings Menu (Collapsible):

Export: A button to download the current stats as a .json file (e.g., olive_stats_timestamp.json).

Import: A button to load a previously saved .json file and restore stats.

Reset: A button to clear all stats to zero.

Technical Constraints:

Disable double-tap to zoom and text selection via CSS to make it feel like a native app.

Ensure the "Import" feature handles JSON parsing errors gracefully.

Use simple vanilla JavaScript (no external frameworks besides Tailwind).
```

## Why this was useful immediately

A few things were strong right away:

- The app fit the context. Large buttons, no account setup, no menu hunting.
- The logic matched game flow. A made basket increments both attempts and points.
- State was resilient. `localStorage` handled page refreshes, and JSON export/import made the data portable.
- Iteration cost was tiny. Requirements changed in minutes, not days.

For personal tools, this is a meaningful shift. The old default was "I should build this later." The new default can be "I can use this now."

## Are apps going away?

I do not think apps disappear.

I do think the center of gravity changes.

What may fade is the idea that every problem needs a permanently packaged app in an app store. For many narrow workflows, we can generate a fit-for-purpose interface in real time.

That changes the stack:

- Less emphasis on shipping one static UI for everyone.
- More emphasis on capturing intent, logic, and constraints.
- More emphasis on fast regeneration as needs evolve.

In that model, the durable artifact is not always the app binary. It is the prompt, the rules, the data model, and the test cases.

## Where engineering still matters

Even in this small example, there are real engineering questions:

- Data integrity: what happens with bad imports, mid-game reset mistakes, or conflicting saves?
- UX reliability: how do we prevent accidental taps under stress?
- Extensibility: can points be 1/2/3 by shot type? Can we track assists, steals, turnovers?
- Validation: do logs reflect what actually happened, and are we consistent across games?
- Privacy: where data is stored, and whether any data leaves the device.

AI can draft quickly, but judgment about correctness, edge cases, and long-term maintainability is still human work.

## Practical takeaway

For me, this was a concrete example of a broader trend:

- Start with a real, immediate need.
- Generate a first tool quickly.
- Iterate through direct use, not abstract planning.
- Preserve what worked: prompts, code, and data format.

That workflow blends well with engineering practice. It is still build-test-learn, just compressed.

And in that compression, more people can build useful software for themselves and their teams without waiting for a full product cycle.

## Full generated code

The code below is the working single-file app from this experiment.

<details>
<summary>Open full HTML code</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Olive's Game Tracker</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom tweaks for preventing zoom and selection on mobile tapping */
        body {
            touch-action: manipulation;
            -webkit-user-select: none;
            user-select: none;
            background-color: #121212;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        
        /* Button tap effects */
        .tap-effect:active {
            transform: scale(0.95);
            opacity: 0.9;
        }

        /* Hide file input */
        #file-input {
            display: none;
        }
    </style>
</head>
<body class="h-screen flex flex-col overflow-hidden">

    <!-- Header / Top Bar -->
    <header class="bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center shrink-0">
        <div>
            <h1 class="text-xl font-bold text-white tracking-tight">Olive's Stats</h1>
            <p class="text-xs text-gray-400" id="game-time">Ready to play</p>
        </div>
        <div class="flex gap-2">
            <button onclick="undo()" class="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition tap-effect">
                ↺ Undo
            </button>
            <button onclick="toggleMenu()" class="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition tap-effect">
                ⚙️
            </button>
        </div>
    </header>

    <!-- Settings Menu (Hidden by default) -->
    <div id="settings-menu" class="hidden bg-gray-800 border-b border-gray-700 p-4 absolute top-[70px] w-full z-50 shadow-xl">
        <div class="flex flex-col gap-3">
            <p class="text-sm text-gray-400 uppercase font-semibold">Data Management</p>
            <div class="flex gap-2">
                <button onclick="exportData()" class="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold tap-effect">
                    ⬇️ Save to File
                </button>
                <button onclick="document.getElementById('file-input').click()" class="flex-1 bg-purple-600 text-white py-3 rounded-lg font-bold tap-effect">
                    ⬆️ Load File
                </button>
                <input type="file" id="file-input" accept=".json" onchange="importData(this)">
            </div>
            <hr class="border-gray-700 my-1">
            <button onclick="resetGame()" class="w-full bg-red-900/50 text-red-400 border border-red-900 py-3 rounded-lg font-bold tap-effect">
                ✖ Reset All Stats
            </button>
        </div>
    </div>

    <!-- Scoreboard Display -->
    <div class="grid grid-cols-5 gap-1 p-2 bg-gray-900 shrink-0">
        <div class="flex flex-col items-center p-2 rounded bg-gray-800">
            <span class="text-[10px] text-gray-400 uppercase">Dribbles</span>
            <span id="display-dribbles" class="text-xl font-mono font-bold text-blue-400">0</span>
        </div>
        <div class="flex flex-col items-center p-2 rounded bg-gray-800">
            <span class="text-[10px] text-gray-400 uppercase">Passes</span>
            <span id="display-passes" class="text-xl font-mono font-bold text-cyan-400">0</span>
        </div>
        <div class="flex flex-col items-center p-2 rounded bg-gray-800">
            <span class="text-[10px] text-gray-400 uppercase">Shots</span>
            <span id="display-shots" class="text-xl font-mono font-bold text-pink-400">0</span>
        </div>
        <div class="flex flex-col items-center p-2 rounded bg-gray-800">
            <span class="text-[10px] text-gray-400 uppercase">Rebounds</span>
            <span id="display-rebounds" class="text-xl font-mono font-bold text-orange-400">0</span>
        </div>
        <div class="flex flex-col items-center p-2 rounded bg-gray-800 border border-green-900/50">
            <span class="text-[10px] text-green-400 uppercase font-bold">Points</span>
            <span id="display-score" class="text-xl font-mono font-bold text-green-400">0</span>
        </div>
    </div>

    <!-- Main Action Buttons -->
    <!-- Updated to 3 rows to accommodate Rebounds and make Score bigger -->
    <main class="flex-1 grid grid-cols-2 grid-rows-3 gap-3 p-3 pb-6">
        
        <!-- Dribble -->
        <button onclick="addStat('dribbles')" class="tap-effect relative rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-500/50 hover:bg-blue-500/30 flex flex-col items-center justify-center group">
            <span class="text-3xl mb-1">🏀</span>
            <span class="text-xl font-bold text-blue-200">Dribble</span>
            <span class="text-xs text-blue-400/70 mt-1">Tap to log</span>
        </button>

        <!-- Pass -->
        <button onclick="addStat('passes')" class="tap-effect relative rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border-2 border-cyan-500/50 hover:bg-cyan-500/30 flex flex-col items-center justify-center">
            <span class="text-3xl mb-1">✋</span>
            <span class="text-xl font-bold text-cyan-200">Pass</span>
            <span class="text-xs text-cyan-400/70 mt-1">Tap to log</span>
        </button>

        <!-- Shot (Miss) -->
        <button onclick="addStat('shots')" class="tap-effect relative rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-2 border-pink-500/50 hover:bg-pink-500/30 flex flex-col items-center justify-center">
            <span class="text-3xl mb-1">❌</span>
            <span class="text-xl font-bold text-pink-200">Missed Shot</span>
            <span class="text-xs text-pink-400/70 mt-1">Attempt</span>
        </button>

        <!-- Rebound (New) -->
        <button onclick="addStat('rebounds')" class="tap-effect relative rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-2 border-orange-500/50 hover:bg-orange-500/30 flex flex-col items-center justify-center">
            <span class="text-3xl mb-1">🔄</span>
            <span class="text-xl font-bold text-orange-200">Rebound</span>
            <span class="text-xs text-orange-400/70 mt-1">Grabbed board</span>
        </button>

        <!-- Score (Make) - Spans 2 columns -->
        <button onclick="addStat('score')" class="col-span-2 tap-effect relative rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/10 border-2 border-green-500/50 hover:bg-green-500/30 flex flex-col items-center justify-center">
            <span class="text-4xl mb-1">✅</span>
            <span class="text-3xl font-bold text-green-200">SCORE!</span>
            <span class="text-sm text-green-400/70 mt-1">+2 Pts & +1 Attempt</span>
        </button>

    </main>

    <script>
        // --- Game State ---
        // Default structure
        const defaultStats = {
            dribbles: 0,
            passes: 0,
            shots: 0, // Total attempts
            score: 0,  // Total points
            rebounds: 0,
            startTime: new Date().toISOString()
        };

        let stats = { ...defaultStats };
        let historyStack = []; // For undo functionality

        // --- Logic ---

        function updateUI() {
            document.getElementById('display-dribbles').innerText = stats.dribbles || 0;
            document.getElementById('display-passes').innerText = stats.passes || 0;
            document.getElementById('display-shots').innerText = stats.shots || 0;
            document.getElementById('display-rebounds').innerText = stats.rebounds || 0;
            document.getElementById('display-score').innerText = stats.score || 0;
            
            // Save to local storage automatically
            localStorage.setItem('oliveStats_v2', JSON.stringify(stats));
        }

        function addStat(type) {
            // Save state for undo
            historyStack.push({...stats});
            if (historyStack.length > 50) historyStack.shift();

            if (type === 'dribbles') stats.dribbles = (stats.dribbles || 0) + 1;
            if (type === 'passes') stats.passes = (stats.passes || 0) + 1;
            if (type === 'rebounds') stats.rebounds = (stats.rebounds || 0) + 1;
            
            if (type === 'shots') {
                // Missed shot: adds to attempts, 0 points
                stats.shots = (stats.shots || 0) + 1;
            }
            
            if (type === 'score') {
                // Made shot: adds to attempts AND points
                stats.shots = (stats.shots || 0) + 1;
                stats.score = (stats.score || 0) + 2;
            }

            updateUI();
            triggerFeedback(type);
        }

        function undo() {
            if (historyStack.length === 0) return;
            stats = historyStack.pop();
            updateUI();
        }

        function resetGame() {
            if (confirm("Reset all stats to zero?")) {
                stats = { ...defaultStats, startTime: new Date().toISOString() };
                historyStack = [];
                updateUI();
                toggleMenu(); // Close menu
            }
        }

        function toggleMenu() {
            const menu = document.getElementById('settings-menu');
            menu.classList.toggle('hidden');
        }

        // --- Visual Feedback ---
        function triggerFeedback(type) {
            // Simple visual feedback if needed, currently handled by CSS :active
        }

        // --- Init ---
        // Load from local storage if exists
        const saved = localStorage.getItem('oliveStats_v2');
        if (saved) {
            try {
                const loaded = JSON.parse(saved);
                // Merge with defaults to ensure 'rebounds' exists if loading old save
                stats = { ...defaultStats, ...loaded };
                document.getElementById('game-time').innerText = "Resumed Game";
            } catch(e) {
                console.error("Save file corrupted");
            }
        }
        updateUI();

        // --- Export / Import Logic ---

        function exportData() {
            // Changed MIME type to application/json for better compatibility
            const dataStr = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(stats));
            const downloadAnchorNode = document.createElement('a');
            const date = new Date();
            const filename = `olive_stats_${date.getHours()}-${date.getMinutes()}.json`;
            
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", filename);
            document.body.appendChild(downloadAnchorNode); // required for firefox
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
            
            toggleMenu();
        }

        function importData(inputElement) {
            const file = inputElement.files[0];
            if (!file) return;

            const reader = new FileReader();
            
            reader.onload = function(e) {
                try {
                    const content = e.target.result;
                    const loadedStats = JSON.parse(content);
                    
                    // Validation: Check for minimal required fields (dribbles or startTime)
                    if (loadedStats && (typeof loadedStats.dribbles === 'number' || loadedStats.startTime)) {
                        // Push current state to undo stack before overwriting
                        historyStack.push({...stats});
                        
                        // Merge loaded stats with default structure to handle missing fields (like adding rebounds to old file)
                        stats = { ...defaultStats, ...loadedStats };
                        
                        updateUI();
                        document.getElementById('game-time').innerText = "Stats Loaded!";
                        alert("Stats loaded successfully!");
                    } else {
                        alert("Error: The file does not appear to contain valid game stats.");
                    }
                } catch (err) {
                    console.error("Import Error:", err);
                    alert("Error reading the file. Please make sure it is a valid JSON file.");
                }
                
                // Clear the input value so the same file can be selected again if needed
                inputElement.value = '';
            };
            
            reader.onerror = function() {
                alert("Failed to read the file.");
                inputElement.value = '';
            }

            reader.readAsText(file);
            toggleMenu();
        }

    </script>
</body>
</html>
```

</details>

## What I want to test next

- Add one-tap event timelines (not just counters) so game flow can be replayed.
- Add per-quarter splits and shot zone notes.
- Add a lightweight post-game summary generated from the event stream.

These are small features, but they point to a bigger idea: a lot of software may become "situational," generated for a specific moment and refined in context.

That does not remove engineering. It changes where the leverage is.

TODO: Add a public gist link for this exact HTML file if you want others to reuse it directly.
