# AGENTS.md

Agent instructions for this repository. Read this file first, then follow links to detail files for each topic.

---

## Language Rules

| Context | Language |
|---|---|
| Responses to user | Same language as the question |
| GitHub issues | Norwegian (unless otherwise specified) |
| UI text | Norwegian (unless otherwise specified) |
| Demo data | Norwegian |
| Code (variables, functions, comments) | English |
| Commit messages | English |

---

## Project Overview

A workshop/demo application to demonstrate AI-assisted software development.

**Current project:** Finanstilsynet internal Hygglo sharing site

**Goals:** rapid iteration · clear UX · realistic demo scenarios · maintainable code

---

## Issue Completion Checklist

Before completing any issue:

- [ ] Application builds successfully (`npm run build`)
- [ ] Lint passes
- [ ] Tests pass
- [ ] New functionality is covered by tests
- [ ] No TypeScript errors

---

## Detail Files

| Topic | File |
|---|---|
| Git workflow, issue creation/implementation, CI/CD, autonomy | [.agents/workflow.md](.agents/workflow.md) |
| Demo philosophy, data, storage, UI guidelines | [.agents/demo.md](.agents/demo.md) |
| Architecture, dependencies, testing | [.agents/development.md](.agents/development.md) |
