Troop 308 Scout Tracker data folder

The deployed tracker reads the sanitized JSON snapshot:
- scout-tracker-current.json  (first names only — no PII)

To update the live table:
1. Place a fresh CSV export into private-data/troop308/Troop0308BMBIPReport_current.csv
2. Run:  node scripts/generate-troop308-tracker-data.mjs
3. Commit and push.  Only the JSON is committed — the raw CSV stays local.

Tracker page:
- /projects/troop-308-new-scout-advancement-plan/meeting-guides/scout-tracker/
