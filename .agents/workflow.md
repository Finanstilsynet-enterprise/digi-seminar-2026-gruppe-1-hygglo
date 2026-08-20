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

---

## Git & GitHub Workflow

### Branching

- Ensure `main` is up to date before starting: `git pull origin main`
- Create a dedicated feature branch for the task
- If tied to a GitHub issue, prefix the branch name with the issue number: `5-frontend-view`, `12-add-validation`

### Committing

- Stage only files relevant to the task (`git add <files>`)
- Write clear, positive commit messages in English
- Reference the issue number in the commit message: `feat: (#5) add simple frontend view`

### Publishing

- Push the branch: `git push -u origin HEAD`
- Create a Pull Request immediately after pushing using `gh pr create` or the PR tools

Never commit directly to `main`.

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
