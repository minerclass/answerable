# Answerable

**Answerable** is a visual technology-ecology game for practicing the five technoskeptical questions in education.

> Install a technology. Watch the school change. Decide what must remain answerable to people.

## Learning purpose

Players examine a school-technology proposal through five lenses:

1. What does society give up?
2. Who is harmed and who benefits?
3. What does the technology need?
4. What unintended changes follow?
5. Why is it difficult to imagine the world without it?

The game connects the Civics of Technology adaptation of Neil Postman's propositions with Micah Miner's pedagogical-friction framework. It presents technoskepticism as disciplined inquiry rather than automatic rejection or adoption.

## Scenarios

- AI writing assistant
- Automated tutoring platform
- Predictive attendance dashboard
- Phone-management system

## Run locally

No build step or dependency installation is required. Serve the repository with any static web server.

```powershell
python -m http.server 8878
```

Then visit `http://127.0.0.1:8878/`.

## Files

- `index.html` — semantic interface and screen structure
- `styles.css` — visual system, responsive layout, and motion controls
- `game.js` — scenario content, state, interactions, charter generation, and replay
- `assets/` — original hero artwork and optimized delivery derivative
- `PROJECT_BRIEF.md` — controlling product and conceptual scope
- `DECISIONS.md` — material design and architecture decisions
- `AUDIT_TRAIL.md` — chronological implementation and QA record
- `HANDOFF.md` — current continuation state
- `HANDOFF_CLAUDE_CODE.md` — Claude Code continuation prompt
- `HANDOFF_GOOGLE_ANTIGRAVITY.md` — Google Antigravity continuation prompt
- `AGENTS.md` — repository rules for coding agents

## Privacy

The game does not collect, store, or transmit player decisions. The generated charter exists only in the current page session unless the player copies it manually.

## Scholarly boundary

The game is a teaching synthesis and public-scholarship artifact. It is not a primary source, validated assessment instrument, research-data system, legal review, or endorsed district policy.

## Attribution

- Postman, N. (1998). *Five things we need to know about technological change* [Address].
- Civics of Technology. (n.d.). *Curriculum: The five technoskeptical questions* (D. Krutka & S. Metzger, adapt.). <https://www.civicsoftechnology.org/curriculum>
- Miner, M. J. (2026). Pedagogical Friction Framework and related public scholarship. <https://minerclass.github.io/technoskepticism-primer/>

