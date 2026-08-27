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
- Workshop work may be done directly on `main`. Use feature branches if explicitly asked to do so.
- Use the current working branch and its configured upstream branch for workshop work.
- Create a dedicated feature branch for the task when appropriate.

### Committing

- Stage only files relevant to the task (`git add <files>`)
- Write clear, positive commit messages in English
- Reference the issue number in the commit message: `feat: (#5) add simple frontend view`

### Publishing

- Once all checks pass, commit the changes with a descriptive commit message and push the current branch with `git push -u origin HEAD`.
- If merge conflicts occur, the AI agent must inspect and resolve them before pushing. Ensure the final merged state still passes all linting and validation checks.
- After the changes have been successfully pushed to the configured upstream branch, update the issue status. If the repository uses a pull request workflow, update the issue after the change is merged to `main`.
- When updating the issue, include a concise summary of:
	- What was changed.
	- Any important implementation decisions.
	- Which tests or validation checks were run.
	- The final outcome/status of the issue.
- An issue is not complete until the changes have been published to the configured workflow target and the issue has been updated.

### Workshop Support

- Assume that workshop operators may be inexperienced. Explain the next action clearly and provide step-by-step guidance when they need to run a command, review a change, resolve a conflict, or interpret a validation error.
- The AI agent should perform available repository operations directly when possible, while briefly stating what it is doing and why.
- Do not leave merge conflicts, failed checks, or unfinished Git operations for the operator to solve alone. Diagnose the problem, propose the smallest appropriate fix, and verify the result.
- When an operation could discard work or affect a shared branch, explain the impact and confirm the intended target before proceeding.

### Common Actions

Usually end responses with this short menu, adapted to the current situation:

**Vanlige handlinger nå:**
1. Se applikasjonen kjøre (`npm run dev`)
2. Oppdater utviklingsmiljøet med endringer fra hovedbranch (`git stash && git pull && git stash pop`, og løs eventuelle konflikter)
3. Oppdater hovedbranch med endringer fra utviklingsmiljøet (`git commit -m "<beskrivelse>" && git push -u origin HEAD`, og løs eventuelle feil)
4. Løs en GitHub-issue

- Treat a reply containing only a menu number as selecting that action.
- Treat a reply such as `4. løs issue 13` as a request to solve issue 13, then read the complete issue before changing code.
- Execute the selected action when possible. If it requires clarification, ask only for the missing information and keep the next step concrete.
- Do not display the menu when it would distract from an urgent error, a requested concise answer, or a response that is already a final status update.
- If user asks for a menu, provide this, and add options appropriate to previous context.
- Start new chats by displaying the menu


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
