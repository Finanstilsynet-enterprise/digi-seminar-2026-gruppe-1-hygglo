# AGENTS.md

## Project Overview

This repository contains a workshop/demo application.

The goal is to demonstrate AI-assisted software development, not to
build a production-ready system.

The application will be one of the following demo projects:
* Finanstilsynet internal Hygglo sharing site

Focus on:

* rapid iteration
* clear user experience
* realistic demo scenarios
* maintainable code
* autonomous execution of GitHub issues

---

# Working Principles

When creating issues:

1. **How to create issues**: When asked to create issues/tasks, always create them as GitHub Issues (using `gh issue create`).
2. **AI-ready description**: Write specific, clear instructions with a narrow scope so that an autonomous AI agent can read and implement it without confusion.
3. **Structured & Actionable**: Each issue should cover:
   - Clear requirements/MVP deliverables.
   - Specific guidelines for creating realistic Norwegian-style mock data (names, terms).
   - Expected TypeScript types.
   - Specific testing requirements (Vitest/React Testing Library specs, expected test scenarios).
4. **Independent Scopes**: Avoid overlap; keep tasks small and easily reviewable.

When implementing issues:

1. Fully read the issue before making changes.
2. Implement only the requested scope.
3. Avoid unrelated refactoring.
4. Prefer simple solutions over clever solutions.
5. Keep changes small and reviewable.
6. Always ensure the application builds successfully.
7. Run tests before completing work.

---

# Demo First

This project is intended for workshops and demonstrations.

Prioritize:

* visible functionality
* realistic user journeys
* polished UI
* believable sample data

Do not prioritize:

* scalability
* enterprise architecture
* advanced optimization

If there is a trade-off between demo value and technical perfection,
prefer demo value.

---

# Demo Data Requirements

Always provide realistic demo data, use Norwegian-style names.

Examples:

* Ola Nordmann
* Kari Hansen
* Per Johansen
* Anne Berg

Avoid:

* Lorem Ipsum
* User1
* Test User
* Placeholder values

Mock data should make the application feel alive.

---

# Data Storage

Use:

* localStorage
* in-memory mock data

Do not introduce:

* databases
* backend services
* cloud resources

unless explicitly requested by an issue.

---

# UI Guidelines

Prefer:

* simple layouts
* responsive design
* accessibility
* consistent spacing

The application should look professional enough to be shown
during a seminar.

---

# Testing Requirements

Every new feature should include tests.

Required:

* unit tests for business logic
* component tests where appropriate

Suggested stack:

* Vitest
* React Testing Library

Tests should verify:

* user-visible behavior
* booking logic
* filtering
* validation

Avoid testing implementation details.

---

# Issue Completion Checklist

Before completing an issue:

* Application builds successfully
* Lint passes
* Tests pass
* New functionality is covered by tests
* No obvious TypeScript errors exist

---

# Dependency Policy

Do not introduce new dependencies unless:

* they clearly simplify the solution
* they provide significant user value

Prefer existing dependencies whenever possible.

---

# Architecture Guidelines

Keep the structure simple.

Preferred structure:

src/
components/
pages/
features/
services/
mock/
types/
tests/

Avoid premature abstraction.

Only extract reusable components when there is a clear need.

---

# Git & GitHub Agent Workflow

This project is run as a workshop with untrained developers. As an AI agent, you must strictly follow this Git and GitHub workflow to help them manage their code correctly and autonomously:

1. **Branch Management**:
   - Before starting, if you are currently on the `main` branch, ensure `main` is updated (`git pull origin main`).
   - Create and check out a dedicated feature branch for the task.
   - If the task is tied to a GitHub issue, the branch name **must** contain the issue number as a prefix, e.g., `5-frontend-view` or `12-add-validation`.

2. **Commits**:
   - Add only the modified or newly created files relevant to the task (`git add <files>`).
   - Write positive, clear, and descriptive commit messages.
   - If handling a GitHub issue, you **must** reference the issue number in the commit message using parentheses, e.g., `feat: (#5) add simple frontend view` or `fix: (#12) prevent double booking`.

3. **Publishing & Pull Requests**:
   - Push the branch to the remote repository using `git push -u origin HEAD`.
   - Create a Pull Request (PR) on GitHub for the pushed branch immediately after pushing, using the provided PR creation tools or `gh pr create`.

Avoid committing directy to `main` or making multiple unrelated changes in a single branch. Keep the scope of the branch fully aligned with a single issue or task.

---

# Autonomy Guidance

When implementing an issue:

1. Use issue template in .github/
1. Make reasonable assumptions.
2. Continue implementation without waiting for clarification.
3. Document assumptions in code comments when needed.
4. Prefer delivering a working solution over asking questions.
5. If multiple reasonable solutions exist, choose the simplest.

The goal is maximum autonomous progress.
