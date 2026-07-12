# AGENTS.md — Answerable

## Purpose

This repository contains **Answerable**, a public GitHub Pages learning game about technoskepticism, technology ecology, AI governance, and pedagogical friction.

## Working rules

- Inspect `PROJECT_BRIEF.md`, `DECISIONS.md`, `AUDIT_TRAIL.md`, and `HANDOFF.md` before editing.
- Keep the project dependency-free unless a dependency is clearly justified and documented.
- Preserve the distinction between productive friction and exclusionary friction.
- Preserve the five-question sequence and the neutral, deliberative stance toward technology.
- Keep all player state browser-local and ephemeral.
- Do not add analytics, forms, databases, external APIs, or response collection.
- Do not fabricate citations, quotations, dates, or scholarly claims.
- Make small, focused changes and record material decisions in `DECISIONS.md`.

## Validation requirements

- Run `node --check game.js`.
- Run `git diff --check`.
- Test a complete playthrough and replay.
- Test at least one contrasting scenario path.
- Test keyboard-only operation.
- Test reduced-motion behavior and a phone-width viewport.
- Confirm no horizontal overflow or console errors.
- Verify the live GitHub Pages result after publishing.

## Handoff

Update `HANDOFF.md` and `AUDIT_TRAIL.md` before stopping with unfinished work. The handoff must state current commit, completed checks, known defects, exact next commands, and which files are safe to modify.

