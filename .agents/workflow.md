# Workflow

## Issue Creation

When asked to create issues/tasks, always use `gh issue create`. Write issues in Norwegian.

Each issue must include:
- Clear requirements and MVP deliverables
- Guidelines for Norwegian-style mock data (names, terms)
- Expected TypeScript types
- Testing requirements (Vitest/React Testing Library scenarios)

Keep issues narrowly scoped and non-overlapping so an AI agent can implement them without confusion.

---

## Issue Implementation

1. Fully read the issue before making any changes
2. Implement only the requested scope — avoid unrelated refactoring
3. Prefer simple solutions over clever ones
4. Keep changes small and reviewable
5. Ensure the application builds successfully
6. Run tests before completing work
7. Run all applicable linting and validation checks before completing work

---

## Git & GitHub Workflow

### Branching

- Ensure `main` is up to date before starting: `git pull origin main`
- Workshop work may be done directly on `main`; do not create a feature branch unless explicitly requested.

### Committing

- Stage only files relevant to the task (`git add <files>`)
- Write clear, positive commit messages in English
- Reference the issue number in the commit message: `feat: (#5) add simple frontend view`

### Publishing

- Once all checks pass, commit the changes with a descriptive commit message and push them directly to the `main` branch.
- If merge conflicts occur, the AI agent must inspect and resolve them before pushing. Ensure the final merged state still passes all linting and validation checks.
- After the changes have been successfully pushed to `main`, update the issue status.
- When updating the issue, include a concise summary of:
	- What was changed.
	- Any important implementation decisions.
	- Which tests or validation checks were run.
	- The final outcome/status of the issue.
- An issue is not complete until the changes are pushed to `main` and the issue has been updated.

### Workshop Support

- Assume that workshop operators may be inexperienced. Explain the next action clearly and provide step-by-step guidance when they need to run a command, review a change, resolve a conflict, or interpret a validation error.
- The AI agent should perform available repository operations directly when possible, while briefly stating what it is doing and why.
- Do not leave merge conflicts, failed checks, or unfinished Git operations for the operator to solve alone. Diagnose the problem, propose the smallest appropriate fix, and verify the result.


---

## CI/CD

A GitHub Actions workflow **must** exist to validate pull requests by running all tests.
If no workflow exists, create one.

---

## Autonomy Guidance

- Use issue templates in `.github/`
- Make reasonable assumptions and continue without waiting for clarification
- Document assumptions in code comments when needed
- If multiple reasonable solutions exist, choose the simplest
- Goal: maximum autonomous progress
