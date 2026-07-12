# Continuation Handoff — Answerable

**Updated:** July 12, 2026
**Status:** Complete, published, and live-verified.
**Project folder:** `C:\Users\mminer\OneDrive - bpd3.org\Documents\New project 2\answerable-game-build-20260712\answerable`

## Objective

Finish, publish, and verify **Answerable**, a visual technology-ecology game teaching the five technoskeptical questions through four K–12 technology proposals.

## Read first

1. `AGENTS.md`
2. `PROJECT_BRIEF.md`
3. `DECISIONS.md`
4. `AUDIT_TRAIL.md`
5. `README.md`

## Current implementation

- `index.html` contains the complete semantic screen structure.
- `styles.css` contains the visual system, responsive breakpoints, ecosystem layout, and reduced-motion behavior.
- `game.js` contains all scenarios, lens mechanics, council state, charter generation, copy fallback, and replay.
- `assets/school-ecosystem-hero.jpg` is the optimized live hero.
- `assets/school-ecosystem-hero.png` is the archival source.

## Confirmed behavior

- Opening screen renders with original artwork.
- Proposal briefing and two-purpose charter work.
- AI writing scenario enters the ecosystem correctly.
- Price, Distribution, and Dependency lenses complete and enable their next controls.
- Ripple time slider reaches the one-year state and reveals response options.
- No console errors were observed during the completed local path.

## Maintenance state

No required implementation work remains. Future work should be treated as a new scoped phase. Reasonable extensions include a facilitator mode, additional governance scenarios, or a printable charter export, but none is required for the current release.

## High-risk areas

- Do not turn the game into an anti-technology verdict system.
- Do not imply that evidence tokens or charters are validated assessment results.
- Do not add analytics, storage, forms, or response transmission.
- Preserve all four scenarios when changing shared rendering code.
- Preserve productive versus exclusionary friction.
- Keep Postman/Civics attribution intact and do not fabricate quotations.

## Known technical notes

- Dynamic `[hidden]` elements require `[hidden] { display: none !important; }` because some interaction containers define their own display values.
- The range input was successfully changed through its native control; keyboard behavior still requires explicit HTTPS testing.
- `renderCouncil()` attaches the same named listener to persistent decision buttons. Browsers ignore duplicate registrations of the same function/options, but verify replay for repeated side effects.
- The project intentionally has no package manager or build step.

## Completion definition

- [x] Public game deployed and fully playable.
- [x] Four scenarios represented in the public briefing.
- [x] One full primary path and one contrasting branch verified.
- [x] Mobile, reduced-motion, replay, and copy fallback verified.
- [x] Games Hub updated and pushed.
- [x] Games Hub final public readback.
- [x] Repository documentation finalized; confirm clean state after committing this update.

