# Development Standards

## Architecture

Keep the structure simple. Avoid premature abstraction — only extract reusable components when there is a clear need.

```
src/
  components/
  pages/
  features/
  services/
  mock/
  types/
  tests/
```

---

## Dependencies

Do not introduce new dependencies unless they:
- Clearly simplify the solution, or
- Provide significant user value

Prefer existing dependencies whenever possible.

---

## Testing

Every new feature must include tests.

**Required:**
- Unit tests for business logic
- Component tests where appropriate

**Stack:** Vitest + React Testing Library

**Tests must verify:**
- User-visible behavior
- Booking logic
- Filtering
- Validation

Avoid testing implementation details.
