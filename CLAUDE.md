# CLAUDE.md

The guidance for this repository lives in **[AGENTS.md](AGENTS.md)** — one
file so it cannot drift out of sync with itself.

Read it before working here. The short version:

- **Push to `main` is the deploy.** GitHub Actions builds and publishes to
  Pages; nothing is uploaded by hand.
- **Pages `build_type` must stay `workflow`.** `legacy` makes it serve the
  committed repo root and silently publish a stale site.
- Work in the worktree you were given, never the main checkout, and never use
  bare `git stash` — the stack is shared.
