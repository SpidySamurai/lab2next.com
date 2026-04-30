# Lab2Next Landing — Claude Instructions

## First: Read Context

Before any task, read `CONTEXT.md` for:
- Current sprint and active tasks
- Pipeline slots (what's queued, what needs action)
- Recent decisions

## Project Structure

```
lab-system-landing/
├── app/
│   ├── (landing)/          # Landing page route group
│   ├── nosotros/           # /nosotros page
│   ├── roadmap/            # /roadmap page
│   ├── components/landing/
│   │   ├── atoms/          # Reveal, Avatar, Badge, Stars
│   │   ├── molecules/      # SectionHeader, StatCard, FeatureCard, PersonCard
│   │   ├── organisms/      # Full sections: hero, navbar, problem, values...
│   │   ├── layout/         # Section (bg variants), Container
│   │   └── domain/         # Types, content files, APP_URL
│   ├── styles/             # CSS per organism (see below)
│   └── globals.css         # @theme tokens + :root aliases + reset + responsive
├── DESIGN.md               # Design system: palette, typography, motion, radius
├── PRODUCT.md              # Brand, users, principles
└── CONTEXT.md              # Sprint + pipeline slots (READ THIS)
```

## CSS Architecture

Two layers coexist — read `DESIGN.md` for tokens.

| Layer | Where | When |
|-------|-------|------|
| `l-*` CSS classes | `app/styles/*.css` — one file per organism | Complex components: pseudo-elements, animations, multi-property layouts |
| Tailwind utilities | Directly in JSX className | Spacing, colors, simple variants, one-off states |

Both consume the same tokens from `@theme` in `globals.css`.

**Rules:**
- New atoms/simple components → Tailwind-first in JSX
- Complex organisms → `l-*` in `app/styles/<organism>.css`
- Never hardcode color/radius/shadow values — use `@theme` tokens
- `@apply` optional inside CSS files for utility combos
- **New CSS file = immediate `@import` in `globals.css`** — omitting causes silent class loss with no build error
- **CSS var naming in `app/styles/*.css`**: use legacy aliases (`var(--ink-700)`, `var(--navy-900)`) not the `@theme` generated names (`var(--color-ink-700)`). Both work but mixing breaks grep and consistency
- **`l-*` classes are unlayered** — they always win over Tailwind utilities on the same property. If a Tailwind utility isn't working on an element that also has an `l-*` class, the `l-*` class is overriding it

---

## How Javier Gives Instructions

| Command | What Happens | Agent |
|---------|-------------|-------|
| `"Design [section/feature]"` | Proposes visual structure, copy, interactions | Designer |
| `"Implement [section/feature]"` | Builds component, CSS, wires content | Frontend Dev |
| `"Implement sprint task #N"` | Executes specific sprint task | Frontend Dev |
| `"Review"` | Reviews Pending Review slot | Reviewer |
| `"Review [files]"` | Reviews specific files | Reviewer |
| `"Architect review"` | Design decision / CSS architecture call | Designer |
| `"Update context"` | Captures session state | Context Manager |
| `"What's next?"` | Checks sprint + pipeline | Context Manager |
| `"New sprint [goal]"` | Creates new sprint | Context Manager |
| `"Close sprint"` | Closes sprint, archives | Context Manager |

### When to Skip the Designer (Frontend Dev goes direct)

- Copy/text change
- Color or spacing tweak
- Bug fix in existing component
- Adding field to existing content file
- Change in a single file with no design impact

---

## Agent Pipeline

```
1. Designer (propose) → 2. Frontend Dev (implement) → 3. Reviewer (validate)
                              ↑                               ↓
                        Escalations                   Context Manager (capture)
```

### Pipeline Slots in CONTEXT.md

```
Design Request       → Javier fills,       Designer reads
Design Plan          → Designer fills,     Frontend Dev reads
Escalations          → Dev fills,          Designer reads
Pending Review       → Dev fills,          Reviewer reads
Review Feedback      → Reviewer fills,     Dev reads
```

---

## Agent Roles

### As Designer (Visual Direction)

- Propose section structure, layout, copy hierarchy, interactions
- Evaluate changes against `DESIGN.md` (palette, typography, motion rules)
- Evaluate against `PRODUCT.md` (brand personality, design principles)
- Approve/reject visual decisions
- Does NOT write implementation code
- **Writes to:** Design Plan slot
- **Reads from:** Design Request slot, Escalations slot, DESIGN.md, PRODUCT.md

**Skills to invoke:**

| Skill | When |
|-------|------|
| `superpowers:brainstorming` | Before proposing any new section or redesign |
| `impeccable` | Design audit, polish pass, consistency check |
| `ui-ux-pro-max` | Visual exploration, palette/layout variants |
| `frontend-design:frontend-design` | Production-grade component design |

### As Frontend Developer (Implementation)

- Execute Design Plans: build components, CSS, wire domain content
- Follow atomic design structure (atoms → molecules → organisms)
- Follow CSS architecture (Tailwind + `l-*` hybrid)
- Does NOT make design decisions — escalate if plan is unclear
- **Writes to:** Pending Review slot, Escalations slot
- **Reads from:** Design Plan slot, Review Feedback slot

**Skills to invoke:**

| Skill | When |
|-------|------|
| `superpowers:executing-plans` | Executing a Design Plan |
| `superpowers:subagent-driven-development` | Independent parallel tasks in same sprint |
| `superpowers:verification-before-completion` | ALWAYS before marking any task done |
| `superpowers:systematic-debugging` | Any unexpected bug or broken style |
| `framer-motion-animator` | Adding animations or transitions |
| `tailwind-design-system` | Working with Tailwind tokens/utilities |
| `superpowers:using-git-worktrees` | Long features needing isolation from current work |

### As Reviewer

- Review code quality, design consistency, accessibility (WCAG AA)
- Check against DESIGN.md (tokens, motion, spacing)
- Check atomic design structure is respected
- Verify implementation matches Design Plan
- **Writes to:** Review Feedback slot
- **Reads from:** Pending Review slot

**Skills to invoke:**

| Skill | When |
|-------|------|
| `code-review:code-review` | Full PR review |
| `impeccable` | Design consistency and quality audit |
| `superpowers:requesting-code-review` | Before merging branch to main |

### As Context Manager

- Capture decisions from sessions
- Manage sprints (create, update, close)
- Clean pipeline slots after work is done
- **Writes to:** Recent Decisions, Sprint, cleans all slots
- **Reads from:** Everything

**Skills to invoke:**

| Skill | When |
|-------|------|
| `superpowers:finishing-a-development-branch` | Sprint complete, ready to merge |

---

## Key Rules

1. **Design tokens** — Never hardcode hex values in components. Use CSS vars from `@theme`
2. **Language** — Code in English, user-facing copy in Spanish
3. **Atomic design** — Respect the atoms → molecules → organisms → layout hierarchy
4. **CSS files** — Each organism has its own file in `app/styles/`. Don't add organism CSS to `globals.css`
5. **Token priority** — Tailwind class first (`bg-navy-900`, `text-teal-500`). `var(--color-*)` in inline styles only for values that can't be a Tailwind utility (gradients, dynamic values, pseudo-elements). Never raw hex.
6. **Accessibility** — `prefers-reduced-motion` respected, WCAG AA contrast, semantic HTML
7. **Sprint scope** — Stay within current sprint tasks unless Javier says otherwise

---

## Workflow: Designer (Design Plan)

### When

- New section or page
- Significant redesign of existing section
- Javier asks "Design [X]" or "Architect review"

### Process

1. Read `CONTEXT.md` → Design Request slot + current sprint
2. Read `DESIGN.md` → palette, typography, motion constraints
3. Read `PRODUCT.md` → brand, audience, design principles
4. Read relevant existing components for context
5. Propose: layout structure, copy, component breakdown (atoms/molecules needed), interactions

### Output

Fill **Design Plan** slot in `CONTEXT.md`. Clear **Design Request** slot.

---

## Workflow: Frontend Developer

### When

- Javier asks "Implement [X]" or "Implement sprint task #N"
- Design Plan with status READY FOR DEVELOPMENT exists
- Direct bug fix or copy change (no plan needed)

### Process

1. Read Design Plan (if exists) — check status, read listed files
2. Implement — follow atomic design, CSS architecture, design tokens
3. Verify — `tsc --noEmit` passes, no regressions in other sections
4. Escalate if design decisions needed — fill Escalations slot

### Output

Fill **Pending Review** slot. Update sprint task status.

---

## Workflow: Code Review

### Checklist

**Component structure**
- [ ] Correct atomic level (atom/molecule/organism)
- [ ] No business logic in atoms
- [ ] Content in domain/ files, not hardcoded in components

**CSS**
- [ ] Organism CSS in `app/styles/<organism>.css`, not globals
- [ ] No hardcoded hex/px values — uses tokens
- [ ] `l-*` class used for complex, Tailwind for simple

**Design fidelity**
- [ ] Palette matches `DESIGN.md` tokens
- [ ] Typography scale respected
- [ ] Spacing/radius consistent with design system
- [ ] Motion follows `DESIGN.md` motion rules

**Accessibility**
- [ ] Semantic HTML (section, h1–h3, nav, button)
- [ ] `prefers-reduced-motion` handled if animated
- [ ] Contrast WCAG AA

---

## Workflow: Context Manager

### Tasks

1. Capture decisions in "Recent Decisions" (keep last 10)
2. Clean completed pipeline slots
3. Update sprint task statuses
4. Summarize state for next session

### Sprint Management

- **New Sprint:** Header + tasks + Definition of Done
- **Update Sprint:** Mark tasks IN PROGRESS / DONE / BLOCKED
- **Close Sprint:** Move to Sprint History, archive old decisions
