# ADR-0000: Architecture Decision Record Template

**Status:** Template
**Date:** YYYY-MM-DD
**Deciders:** [List of people involved in decision]

## Context

What is the issue that we're seeing that is motivating this decision or change?

Describe the forces at play:
- Technical constraints
- Business requirements
- Timeline pressures
- Team capabilities

## Decision

What is the change that we're proposing and/or doing?

State the decision in full sentences, with an active voice:
"We will..."

## Consequences

What becomes easier or harder to do because of this change?

### Positive
- Benefit 1
- Benefit 2

### Negative
- Drawback 1
- Drawback 2

### Neutral
- Trade-off 1

## Alternatives Considered

### Alternative 1: [Name]
- Description
- Why rejected

### Alternative 2: [Name]
- Description
- Why rejected

## Related Decisions

- [ADR-XXXX](./XXXX-related.md)

---

## How to Create a New ADR

1. Copy this template to a new file: `NNNN-title.md`
2. Number sequentially (0001, 0002, etc.)
3. Use lowercase with hyphens for title: `0001-use-typescript.md`
4. Fill in all sections
5. Set status to: `Proposed`, `Accepted`, `Deprecated`, or `Superseded`
6. Update date
7. Commit and get review

## Status Definitions

- **Proposed**: Under discussion, not yet decided
- **Accepted**: Approved and should be followed
- **Deprecated**: No longer applies but kept for historical context
- **Superseded by [ADR-XXXX]**: Replaced by another ADR
