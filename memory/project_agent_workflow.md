---
name: Agent workflow — landing page
description: CLAUDE.md + CONTEXT.md pipeline for lab-system-landing, roles and skills per agent
type: project
---

CLAUDE.md and CONTEXT.md created 2026-04-29. Same pipeline pattern as main lab-system but adapted for frontend/design.

**Why:** Landing needs structured agent collaboration like the app — Designer replaces Architect, no backend concerns.

**Roles:**
- Designer → proposes (DESIGN.md + PRODUCT.md + brainstorming skill)
- Frontend Dev → implements (executing-plans + verification-before-completion skills)
- Reviewer → validates (code-review + impeccable skills)
- Context Manager → captures state (finishing-a-development-branch on sprint close)

**How to apply:** Each new conversation for landing work → read CONTEXT.md first, identify role, invoke mapped skill before acting.

**Skills mapped in CLAUDE.md** — each agent role has a table of when to invoke which skill.
