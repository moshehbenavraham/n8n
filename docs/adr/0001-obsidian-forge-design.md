# ADR-0001: Obsidian Forge Design Direction

**Status:** Accepted
**Date:** 2026-01-02
**Deciders:** Design team, Fork maintainers

## Context

The n8n custom fork requires a distinct visual identity that differentiates it from upstream n8n while maintaining usability and professional appearance.

Requirements:
- Distinguish from upstream n8n branding
- Support both light and dark modes equally
- Leverage existing token-based architecture
- Minimize disruption to workflow functionality
- Create memorable, cohesive aesthetic

## Decision

We will implement the "Obsidian Forge" design direction.

**Conceptual Vision:** Industrial luxury meets precision engineering. The aesthetic evokes a master craftsman's workshop - obsidian surfaces with warm amber and copper metallic accents.

**Core Palette:**
- Primary: Forge Amber `hsl(38, 92%, 55%)`
- Secondary: Steel Blue `hsl(215, 25%, 52%)`
- Success: Verdigris (oxidized copper) `hsl(168, 65%, 42%)`
- Danger: Ember Red `hsl(8, 78%, 54%)`
- Background (dark): Obsidian `hsl(220, 28%, 8%)`

**Design Principles:**
1. Dark-first philosophy with light mode parity
2. Warm accents against cool neutral backgrounds
3. Motion that feels mechanical/industrial, not playful
4. Typography with tight headings, generous body text

## Consequences

### Positive
- Distinct brand identity
- Warm, premium aesthetic
- Token architecture enables efficient implementation
- 14,300+ color usages will cascade from primitive changes

### Negative
- Requires updating ~550 hardcoded color instances
- Workflow canvas (42+ components) needs careful attention
- Element Plus overrides (38 files) need updates
- Cross-browser testing required

### Neutral
- Retains existing InterVariable and CommitMono fonts
- Maintains backwards-compatible token naming

## Alternatives Considered

### Alternative 1: Minimal Rebrand
- Only change primary color and logo
- Why rejected: Does not create sufficient differentiation

### Alternative 2: Complete UI Library Replacement
- Replace Element Plus with Reka-UI
- Why rejected: 3-6 month undertaking, out of scope

## Related Decisions

- Full design specification in [PRD](../../.spec_system/PRD/PRD.md)
