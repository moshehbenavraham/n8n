# CONVENTIONS.md

## Guiding Principles

- Optimize for readability over cleverness
- Code is written once, read many times
- Consistency beats personal preference
- If it can be automated, automate it
- When writing code: Make NO assumptions. Do not be lazy. Pattern match precisely. Validate systematically.

## Naming

- Be descriptive over concise: `getUserById` > `getUser` > `fetch`
- Booleans read as questions: `isActive`, `hasPermission`, `shouldRetry`
- Functions describe actions: `calculateTotal`, `validateInput`, `sendNotification`
- Vue components: PascalCase (`UserProfile.vue`)
- Composables: camelCase with `use` prefix (`useDocumentTitle`, `useTheme`)
- CSS tokens: kebab-case with double-dash prefix (`--color--primary`, `--spacing--md`)
- SCSS variables: kebab-case with dollar prefix (`$sidebar-width`)

## Files & Structure

- One Vue component per file
- File names match component name: `N8nButton.vue` exports `N8nButton`
- Group by feature/domain: `/features/workflows/`, `/features/credentials/`
- Design system components: `packages/frontend/@n8n/design-system/src/components/`
- App components: `packages/frontend/editor-ui/src/app/components/`
- Feature components: `packages/frontend/editor-ui/src/features/{domain}/`

## Vue Components

- Use Composition API with `<script setup lang="ts">`
- Props use `defineProps<T>()` with TypeScript interfaces
- Emits use `defineEmits<T>()` with typed event signatures
- Prefer composables over mixins
- Keep templates readable; extract complex logic to computed properties
- Use `v-bind` shorthand (`:prop`) and `v-on` shorthand (`@event`)

## TypeScript

- Strict mode enabled; no `any` without justification
- Explicit return types on exported functions
- Use `interface` for object shapes, `type` for unions/intersections
- Prefer `unknown` over `any` for dynamic data
- Import types with `import type { }` syntax

## CSS Tokens & Theming

- Always use CSS custom properties (tokens) for colors, spacing, typography
- Never hardcode color values; use `var(--color--primary)` pattern
- Primitives define raw values: `--color--orange-500: hsl(7, 100%, 59%)`
- Tokens map to semantics: `--color--primary: var(--color--orange-300)`
- Support legacy format: `--color-primary` (single dash) via fallbacks
- Dark mode: tokens in `_tokens.dark.scss` under `body[data-theme='dark']`

## SCSS

- Component styles use scoped `<style lang="scss" scoped>`
- Global styles in `packages/frontend/editor-ui/src/app/css/`
- Import tokens via `@use` not `@import`
- Avoid deep nesting (max 3 levels)
- Use token variables, not raw values: `color: var(--color--text--base)`

## Design System Token Hierarchy

1. Primitives (`_primitives.scss`): raw color/spacing/font values
2. Tokens (`_tokens.scss`): semantic mappings for light mode
3. Dark tokens (`_tokens.dark.scss`): dark mode overrides
4. Component styles: consume tokens, never primitives directly

## Storybook

- Every design-system component has a story
- Stories live alongside components: `Button.stories.ts` next to `Button.vue`
- Use Controls addon for interactive props
- Document component variants and states
- Test both light and dark mode appearances

## Element Plus Overrides

- Override files in `packages/frontend/editor-ui/src/app/css/`
- Match Element Plus class names exactly
- Use tokens for all color/spacing values
- Test overrides in both light and dark modes

## Error Handling

- Use try/catch for async operations
- Errors should be actionable with context for debugging
- Toast notifications for user-facing errors
- Never swallow errors silently

## Testing

- Unit tests: Vitest for components and composables
- E2E tests: Playwright in `packages/testing/playwright/`
- Test behavior, not implementation
- Component tests use `@vue/test-utils`
- Visual changes require before/after screenshots

## Git & Version Control

- Commit messages: imperative mood, concise (`Add user validation`)
- One logical change per commit
- Branch names: `type/short-description` (e.g., `feat/dark-mode`, `fix/token-cascade`)
- Keep commits atomic enough to revert safely

## Pull Requests

- Small PRs get better reviews
- Description explains the what and why
- Include before/after screenshots for visual changes
- Link relevant tickets/context

## Dependencies

- Use pnpm for all package operations
- Fewer dependencies = less risk
- Pin versions; update intentionally
- Check Element Plus compatibility before upgrading

## n8n-Specific Conventions

### Package Structure
- Use pnpm workspaces for monorepo management
- Follow existing n8n package naming: `@n8n/package-name`
- Design system: `packages/frontend/@n8n/design-system/`
- Editor UI: `packages/frontend/editor-ui/`

### Logo & Branding
- Logo SVGs: `packages/frontend/@n8n/design-system/src/components/N8nLogo/`
- Favicon: `packages/frontend/editor-ui/public/favicon.ico`
- Brand text: `packages/frontend/@n8n/i18n/src/locales/en.json`
- Window title: `packages/frontend/editor-ui/src/app/composables/useDocumentTitle.ts`

### Canvas Components
- Workflow canvas: `packages/frontend/editor-ui/src/features/workflows/`
- Vue Flow customizations require careful inline style handling
- Test zoom/pan interactions after style changes
- Node styling affects visual identity significantly

### Docker
- Multi-stage builds for smaller images
- Use Alpine-based images where possible
- Pin specific versions in FROM statements
- Use non-root user in production images

### CI/CD

| Bundle | Status | Workflow |
|--------|--------|----------|
| Code Quality | configured | .github/workflows/ci-pull-requests.yml (lint, typecheck, format) |
| Build & Test | configured | .github/workflows/ci-pull-requests.yml (unit-test, e2e-tests) |
| Security | configured | .github/workflows/ci-security.yml (poutine, gitleaks, CodeQL, dependency-review) |
| Integration | configured | .github/workflows/playwright-test-ci.yml, ci-postgres-mysql.yml |
| Operations | configured | renovate.json, notify-pr-status.yml, release-*.yml |

**Platform:** GitHub Actions
**Repository Type:** Monorepo (pnpm workspaces + Turborepo)

- All PRs require passing tests
- Main branch is always deployable
- Use semantic versioning for releases

## Local Dev Tools

| Category | Tool | Config |
|----------|------|--------|
| Formatter | Prettier + Biome | .prettierrc.js, biome.json |
| Linter | ESLint + Biome | eslint.config.mjs |
| Type Safety | TypeScript | tsconfig.json |
| CSS Linter | Stylelint | @n8n/stylelint-config |
| Testing | Vitest + Playwright | vitest.config.ts |
| Observability | Winston | packages/@n8n/backend-common/src/logging/ |
| Git Hooks | Lefthook | lefthook.yml |
| Package Manager | pnpm | pnpm-workspace.yaml |
| Storybook | Storybook 9 | .storybook/ |
| Build | Turbo + Vite | turbo.json |

## When In Doubt

- Check existing patterns in the codebase first
- Consult design-system Storybook for component usage
- Test in both light and dark modes
- Ask before adding new dependencies
