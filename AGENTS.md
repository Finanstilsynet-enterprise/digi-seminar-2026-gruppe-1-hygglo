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

## Common Actions

Usually end responses with this short menu, adapted to the current situation. If user asks for a menu (norsk meny), provide this. Add options appropriate to previous context:

Text in parentheses like (`npm run dev`) is info to the agent. **Do not display menu content in (...) to the user**

**Vanlige handlinger nå:**
1. Se applikasjonen kjøre (`npm run dev`)
2. Oppdater utviklingsmiljøet med endringer fra hovedbranch (`git stash && git pull && git stash pop`, og løs eventuelle konflikter)
3. Oppdater hovedbranch med endringer fra utviklingsmiljøet (`git commit -m "<beskrivelse>" && git push -u origin HEAD`, og løs eventuelle feil)
4. Løs en GitHub-issue

- Treat a reply containing only a menu number as selecting that action.
- Treat a reply such as `4. løs issue 13` as a request to solve issue 13, then read the complete issue before changing code.
- Execute the selected action when possible. If it requires clarification, ask only for the missing information and keep the next step concrete.
- Do not display the menu when it would distract from an urgent error, a requested concise answer, or a response that is already a final status update.

---

## Detail Files

| Topic | File |
|---|---|
| Git workflow, issue creation/implementation, CI/CD, autonomy | [.agents/workflow.md](.agents/workflow.md) |
| Demo philosophy, data, storage, UI guidelines | [.agents/demo.md](.agents/demo.md) |
| Architecture, dependencies, testing | [.agents/development.md](.agents/development.md) |
