# Skill: Feature Workflow

You are now running the **feature-superpower workflow**. Announce this to the user.

This is a guided, human-approved pipeline:

```
/brainstorm → /plan → /execute-plan → /verify → /finish-branch
```

Each step requires **explicit user approval** before proceeding to the next.

---

## How It Works

You will walk the user through each phase in order. At the end of each phase, stop and ask: *"Ready to move to the next step?"* Do not proceed until the user says yes.

---

## Phase 1 — Brainstorm

Invoke the `/brainstorm` skill behavior:
- Ask clarifying questions **one at a time**
- Propose 2–3 approaches with trade-offs
- Get user to pick one approach
- Design the solution incrementally, section by section
- Save approved spec to `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`

**Gate:** Do not proceed until spec file is saved and user has said "approve" or equivalent.

---

## Phase 2 — Plan

Invoke the `/plan` skill behavior:
- Read the spec file saved in Phase 1 (most recent file in `docs/superpowers/specs/`)
- Do NOT re-explore the codebase for context already in the spec
- Only read files the spec explicitly references
- Produce task list with exact file paths, complete code blocks, verify commands
- Save plan to `docs/superpowers/plans/YYYY-MM-DD-<topic>-plan.md`

**Gate:** Do not proceed until plan file is saved and user has approved it.

---

## Phase 3 — Execute

Invoke the `/execute-plan` skill behavior:
- Read the plan file saved in Phase 2 (most recent file in `docs/superpowers/plans/`)
- Create a feature branch (never work on master/main)
- Execute each task exactly as written
- Run the verification command after each task
- Commit after each passing task

**Gate:** Do not proceed until all tasks are committed and user confirms.

---

## Phase 4 — Verify

Invoke the `/verify` skill behavior:
- Run `npm run build` — must pass with zero errors
- Run `npm run lint` — must pass
- Start dev server and manually confirm the feature works in browser
- Report results with actual output, not assumptions

**Gate:** Do not proceed if build or lint fails. Fix first.

---

## Phase 5 — Finish Branch

Invoke the `/finish-branch` skill behavior:
- Summarize all commits on the branch
- Present the user with 4 options:
  1. Merge into main/master
  2. Push and open Pull Request
  3. Keep branch, do nothing
  4. Discard branch

**End of workflow.**

---

## Context Passing Rules

- Each phase reads the **output file** of the previous phase — never re-derives context from scratch.
- Spec → Plan: `/plan` reads `docs/superpowers/specs/` (latest file)
- Plan → Execute: `/execute-plan` reads `docs/superpowers/plans/` (latest file)
- No phase should ask the user to re-explain what was already decided.
