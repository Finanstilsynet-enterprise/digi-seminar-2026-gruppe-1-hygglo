# Workflow

## Issue Creation

When asked to create issues/tasks, always use `gh issue create`. Write issues in Norwegian.

Each issue must include:
- Clear requirements and MVP deliverables
- Guidelines for Norwegian-style mock data (names, terms)
- Expected TypeScript types
- Testing requirements (Vitest/React Testing Library scenarios)

Keep issues narrowly scoped and non-overlapping so an AI agent can implement them without confusion.

### Minimizing merge conflicts across parallel issues

Since multiple groups may work on different issues at the same time, and all work is pushed
directly to `main` without PRs, issues must be designed so groups can work in parallel with
minimal risk of colliding edits:

- **Give each issue an explicit file ownership list** ("Filer denne oppgaven eier"): the files
  it is expected to create or modify. Prefer new files (new pages/components/services) over
  edits to files another open issue also needs to touch.
- **Extract shared contracts before splitting work.** If several issues need the same type,
  route, or service function, define that shared contract (TypeScript type, route skeleton,
  service function signature) once — in a prerequisite commit or the first issue touched —
  so later issues only *call* it instead of *defining* it.
- **Avoid having two open issues both edit the same "hub" file** (e.g. `App.tsx` routing,
  a shared service, a shared type file) unless unavoidable. If it can't be avoided, keep the
  edit additive (append a new route/function) rather than restructuring existing code.
- **State dependencies explicitly.** If an issue truly depends on another, say so under
  "Avhengigheter" and note that it can still be scaffolded with a placeholder/mock so it
  doesn't block starting.
- Prefer additive changes (new files, new functions) over edits to existing shared logic.

---

## Issue Implementation

1. Fully read the issue before making any changes
2. Implement only the requested scope — avoid unrelated refactoring
3. Prefer simple solutions over clever ones
4. Keep changes small and reviewable
5. **Minimize merge-conflict risk as a starting principle:** stick to the files the issue says
   it owns, prefer adding new files/functions over editing shared ones, and pull `main` right
   before you start so you build on the latest shared contracts (types, routes, services)
   other groups may have already added
6. Ensure the application builds successfully
7. Run tests before completing work
8. Run all applicable linting and validation checks before completing work

---

## Git & GitHub Workflow

There is no pull request workflow in this project. All work is committed directly to `main` and pushed to `origin`.

### Branching

- Ensure `main` is up to date before starting: `git pull origin main`
- Do all work directly on `main`. Do not create feature branches unless explicitly asked to do so.

### Committing

- Stage only files relevant to the task (`git add <files>`)
- Write clear, positive commit messages in English
- Reference the issue number in the commit message: `feat: (#5) add simple frontend view`

### Publishing

- Once all checks pass, commit the changes on `main` with a descriptive commit message and push directly with `git push origin main`.
- Before pushing, run `git pull origin main` to catch any changes made in the meantime and reduce the risk of conflicts.
- If merge conflicts occur, the AI agent must inspect and resolve them together with the user before pushing. Explain the conflicting changes in plain terms, propose the resolution, and confirm with the user before finalizing. Ensure the final merged state still passes all linting and validation checks.
- After the changes have been successfully pushed to `main`, update the issue status and close it.
- When updating the issue, include a concise summary of:
	- What was changed.
	- Any important implementation decisions.
	- Which tests or validation checks were run.
	- The final outcome/status of the issue.
- An issue is not complete until the changes have been pushed to `main` and the issue has been updated.

### Workshop Support

- Assume that workshop operators may be inexperienced. Explain the next action clearly and provide step-by-step guidance when they need to run a command, review a change, resolve a conflict, or interpret a validation error.
- The AI agent should perform available repository operations directly when possible, while briefly stating what it is doing and why.
- Do not leave merge conflicts, failed checks, or unfinished Git operations for the operator to solve alone. Diagnose the problem, propose the smallest appropriate fix, and verify the result.
- When an operation could discard work or affect a shared branch, explain the impact and confirm the intended target before proceeding.

---

## Autonomy Guidance

- Use issue templates in `.github/`
- Make reasonable assumptions and continue without waiting for clarification
- Document assumptions in code comments when needed
- If multiple reasonable solutions exist, choose the simplest
- Goal: maximum autonomous progress
