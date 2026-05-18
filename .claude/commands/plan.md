# Skill: Write Plan

You are now using the **writing-plans** skill. Announce this to the user.

## Step 0 — Load Spec (MANDATORY, do this before anything else)

1. List all files in `docs/superpowers/specs/` sorted by filename (filenames start with date YYYY-MM-DD).
2. Read the **most recent** spec file (latest date).
3. Confirm to the user: *"Loaded spec: `<filename>`"* and summarize the goal in one sentence.
4. Use this spec as your sole source of truth. Do NOT explore the codebase for context that is already in the spec.
5. Only read additional files if the spec references a specific file you need to inspect (e.g. to check current code before writing a replacement block).

## Purpose

Produce a detailed implementation plan before any code is written. Assume the engineer executing the plan has **zero context** about this codebase.

## Plan Structure

### Header (mandatory)
- Goal of the plan (from spec)
- Architecture overview
- Tech stack being used

### File Map
Before listing tasks, map which files will be **created** or **modified** and their responsibilities.

### Tasks
Each task must:
- Take **2–5 minutes** to complete (one atomic action)
- Include **exact file paths**
- Include **complete, working code blocks** (no placeholders like "add appropriate error handling" or "TBD")
- Include **precise commands** to run
- Include **expected output** to verify success

## Self-Review Checklist (run before presenting)

- [ ] Every task has exact file paths
- [ ] No placeholder phrases ("TBD", "appropriate", "etc.")
- [ ] Types are consistent throughout
- [ ] Each task is independently verifiable
- [ ] All spec requirements are covered

## After Writing the Plan

Save the plan to `docs/superpowers/plans/YYYY-MM-DD-<topic>-plan.md`.

Then present two execution paths:
1. **Subagent-driven** — Fresh agent per task with spec + quality reviews after each
2. **Inline execution** — Execute tasks in sequence with checkpoints

## Red Flags

- Tasks longer than 5 minutes (break them down)
- Any "TBD" or placeholder code
- Tasks that can't be individually verified
- Starting implementation before presenting the plan
