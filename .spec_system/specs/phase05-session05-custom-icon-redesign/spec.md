# Session Specification

**Session ID**: `phase05-session05-custom-icon-redesign`
**Phase**: 05 - Retro-Futuristic Icon System (Chrome Deco)
**Status**: Not Started
**Created**: 2026-01-07

---

## 1. Session Overview

This session applies the Chrome Deco design language to all 38 custom SVG icons in the n8n design system. Building on the animation foundation (Session 01), variable stroke weight system (Session 02), Phosphor icon migration (Session 03), and chrome deco visual effects (Session 04), this session transforms the custom icon set into a cohesive art deco aesthetic with geometric precision, stepped edges, and chrome accents.

The custom icons serve critical UI functions including status indicators, node state visualization, workflow controls, and brand representations. Each icon must maintain visual clarity across all supported sizes (10px-40px) while embodying the retro-futuristic aesthetic. The redesign preserves backwards compatibility by maintaining existing file names and ensuring proper currentColor theming for light/dark mode support.

This penultimate session in Phase 05 delivers the visual heart of the Chrome Deco icon system, preparing for final integration and QA in Session 06.

---

## 2. Objectives

1. Document art deco design principles with specific guidelines for 45/60/90-degree angles, stepped edges, sunburst motifs, and chrome accent placement
2. Redesign all 38 custom SVG icons with consistent Chrome Deco aesthetic while maintaining visual clarity at all sizes
3. Ensure all redesigned SVGs use currentColor for fill/stroke to guarantee theming compatibility in both light and dark modes
4. Verify icon readability and visual balance at all supported sizes from xsmall (10px) to xxlarge (40px)

---

## 3. Prerequisites

### Required Sessions
- [x] `phase05-session01-icon-animation-foundation` - Animation props and keyframes established
- [x] `phase05-session02-variable-stroke-weight` - CSS transitions and weight tokens implemented
- [x] `phase05-session03-phosphor-migration` - 196 icons with native variable weight support
- [x] `phase05-session04-chrome-deco-effects` - Metallic shimmer, beveled edges, sunburst glow effects

### Required Tools/Knowledge
- SVG path optimization and geometric precision
- Art deco design principles (angular geometry, stepped patterns)
- CSS theming with currentColor
- Storybook for visual verification

### Environment Requirements
- pnpm installed for running Storybook
- Design system development environment functional
- Access to both light and dark mode themes

---

## 4. Scope

### In Scope (MVP)
- Art deco design principles documentation with visual examples
- Redesign of 7 status icons (completed, error, warning, waiting, canceled, new, unknown)
- Redesign of 9 node icons (play, power, success, dirty, ellipsis, execution-error, validation-error, pin, trash)
- Redesign of 4 workflow icons (continue, empty-output, retry, run-once)
- Review and update of 4 brand icons (anthropic, lovable, mcp, resolver) for theming compatibility
- Redesign of 14 UI icons (form, webhook, schema, json, binary, text, toolbox, spinner, pop-out, triangle, vector-square, grip-lines-vertical, filled-square, bolt-filled)
- Size clarity testing at all supported sizes (10px-40px)
- Light and dark mode visual verification

### Out of Scope (Deferred)
- Creating new icons - *Reason: Focus on redesigning existing set*
- Changing icon file names - *Reason: Maintain backwards compatibility*
- Animation integration - *Reason: Deferred to Session 06 integration*
- Phosphor icon styling - *Reason: Handled via CSS in Session 04*

---

## 5. Technical Approach

### Architecture
Each custom SVG follows a standardized 14x14 viewBox with currentColor-based fill/stroke for theming. The art deco redesign introduces geometric precision through:
- Hard angles at 45, 60, and 90 degrees
- Stepped/terraced edge patterns for depth
- Sunburst and radial motifs for visual interest
- Consistent stroke widths optimized per size category

### Design Patterns
- **Geometric Precision**: All curves replaced with angular segments at approved angles
- **Stepped Edges**: Terraced patterns create visual depth without gradients
- **currentColor Theming**: All colors derived from CSS custom property inheritance
- **Size-Responsive Detail**: Progressive detail levels based on rendering size

### Technology Stack
- SVG (viewBox 0 0 14 14 standard)
- currentColor CSS inheritance
- Storybook 9 for visual verification

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/docs/ICON_DESIGN_PRINCIPLES.md` | Art deco design guidelines documentation | ~150 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/.../custom/status-completed.svg` | Art deco checkmark with diamond frame | ~10 |
| `design-system/.../custom/status-error.svg` | Geometric X with stepped border | ~10 |
| `design-system/.../custom/status-warning.svg` | Triangular alert with radiant edges | ~10 |
| `design-system/.../custom/status-waiting.svg` | Chrome hourglass design | ~10 |
| `design-system/.../custom/status-canceled.svg` | Slashed circle with beveled edge | ~10 |
| `design-system/.../custom/status-new.svg` | Sunburst star with geometric points | ~10 |
| `design-system/.../custom/status-unknown.svg` | Question mark with art deco frame | ~10 |
| `design-system/.../custom/node-play.svg` | Streamlined arrow with chrome accent | ~10 |
| `design-system/.../custom/node-power.svg` | Art deco power button with stepped ring | ~10 |
| `design-system/.../custom/node-success.svg` | Sunburst checkmark with radiating lines | ~10 |
| `design-system/.../custom/node-dirty.svg` | Asterisk with geometric precision | ~10 |
| `design-system/.../custom/node-ellipsis.svg` | Three dots with chrome bevels | ~10 |
| `design-system/.../custom/node-execution-error.svg` | Alert with stepped edges | ~10 |
| `design-system/.../custom/node-validation-error.svg` | Exclamation with geometric frame | ~10 |
| `design-system/.../custom/node-pin.svg` | Beveled pin with chrome head | ~10 |
| `design-system/.../custom/node-trash.svg` | Art deco trash can with terraced lid | ~10 |
| `design-system/.../custom/continue.svg` | Forward arrow with chrome gradient | ~10 |
| `design-system/.../custom/empty-output.svg` | Empty container with deco border | ~10 |
| `design-system/.../custom/retry.svg` | Circular arrows with geometric precision | ~10 |
| `design-system/.../custom/run-once.svg` | Single execution symbol with sunburst | ~10 |
| `design-system/.../custom/anthropic.svg` | Updated for currentColor theming | ~10 |
| `design-system/.../custom/lovable.svg` | Ensure theming compatibility | ~10 |
| `design-system/.../custom/mcp.svg` | Updated for currentColor theming | ~10 |
| `design-system/.../custom/resolver.svg` | Verify design consistency | ~10 |
| `design-system/.../custom/form.svg` | Document with art deco lines | ~10 |
| `design-system/.../custom/webhook.svg` | Hook symbol with chrome accent | ~10 |
| `design-system/.../custom/schema.svg` | Structure icon with geometric precision | ~10 |
| `design-system/.../custom/json.svg` | Braces with stepped edges | ~10 |
| `design-system/.../custom/binary.svg` | Binary symbol with chrome highlight | ~10 |
| `design-system/.../custom/text.svg` | Text symbol with deco serif | ~10 |
| `design-system/.../custom/toolbox.svg` | Toolbox with beveled corners | ~10 |
| `design-system/.../custom/spinner.svg` | Chrome gear with art deco teeth | ~10 |
| `design-system/.../custom/pop-out.svg` | Arrow with sunburst effect | ~10 |
| `design-system/.../custom/triangle.svg` | Geometric triangle with chrome edge | ~10 |
| `design-system/.../custom/vector-square.svg` | Square with corner accents | ~10 |
| `design-system/.../custom/grip-lines-vertical.svg` | Lines with chrome dots | ~10 |
| `design-system/.../custom/filled-square.svg` | Square with beveled border | ~10 |
| `design-system/.../custom/bolt-filled.svg` | Lightning with art deco angles | ~10 |

**Full Path Prefix**: `packages/frontend/@n8n/design-system/src/components/N8nIcon/`

---

## 7. Success Criteria

### Functional Requirements
- [ ] All 38 custom SVGs redesigned with Chrome Deco art deco aesthetic
- [ ] All SVGs use viewBox="0 0 14 14" consistently
- [ ] All SVGs use currentColor for fill/stroke (brand icons may preserve specific colors)
- [ ] Art deco geometric precision evident in all icon designs
- [ ] Stepped/terraced edge patterns applied where appropriate
- [ ] Chrome accent style consistent across icon set

### Testing Requirements
- [ ] All icons tested at xsmall size (10px) - core shape visible
- [ ] All icons tested at small size (12px) - primary features clear
- [ ] All icons tested at medium size (14px) - standard detail level
- [ ] All icons tested at large size (16px) - enhanced detail visible
- [ ] All icons tested at xlarge size (20px) - full detail displayed
- [ ] All icons tested at xxlarge size (40px) - fine accents visible
- [ ] All icons verified in light mode via Storybook
- [ ] All icons verified in dark mode via Storybook

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings in all SVG files
- [ ] Code follows project conventions (kebab-case file names)
- [ ] No visual regressions in existing UI
- [ ] Design principles documented for future contributors

---

## 8. Implementation Notes

### Key Considerations
- Maintain icon recognizability while adding art deco styling
- Balance decorative elements with clarity at small sizes
- Preserve semantic meaning of status and action icons
- Ensure consistent stroke width across size categories

### Potential Challenges
- **10px Clarity**: Minimizing detail while maintaining recognizability at xsmall size
- **Art Deco Balance**: Adding geometric complexity without cluttering icons
- **Brand Icons**: Preserving brand identity while ensuring theming compatibility
- **Consistency**: Maintaining uniform style across 38 diverse icons

### Relevant Considerations
- [P00] **Dark mode via data-theme attribute**: All SVG icons must render correctly with currentColor in both light (`body`) and dark (`body[data-theme='dark']`) themes
- [P00] **Storybook commands**: Use `pnpm storybook` in design-system package (port 6006) to verify icon rendering at all sizes
- [P00] **Design system well-organized**: 86 components, 404 Storybook stories - use existing N8nIcon stories for verification

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No smart quotes, em-dashes, or special Unicode characters in SVG content.

---

## 9. Testing Strategy

### Unit Tests
- SVG structure validation (viewBox, fill/stroke attributes)
- currentColor usage verification
- File encoding validation (ASCII-only)

### Integration Tests
- Icon rendering within N8nIcon component
- Theme switching behavior (light to dark)
- Size prop responsiveness

### Manual Testing
- Visual inspection at each size category in Storybook
- Side-by-side comparison of light and dark modes
- Comparison against design principles documentation
- Review of stepped edges and geometric precision

### Edge Cases
- Icons at minimum size (10px) remain distinguishable
- Icons with multiple elements maintain hierarchy at all sizes
- Spinner icon animation compatibility (if animated)
- Brand icons maintain recognizability with currentColor

---

## 10. Dependencies

### External Libraries
- None (pure SVG redesign)

### Internal Dependencies
- N8nIcon Vue component for rendering
- Storybook for visual verification
- Design system tokens for theming

### Other Sessions
- **Depends on**: Sessions 01-04 (animation, stroke weight, Phosphor migration, chrome deco effects)
- **Depended by**: Session 06 (Integration, QA & Documentation)

---

## Icon Categories Reference

### Status Icons (7)
| Icon | Purpose | Key Design Element |
|------|---------|-------------------|
| status-completed | Success state | Diamond frame checkmark |
| status-error | Error state | Stepped X symbol |
| status-warning | Warning state | Triangular alert |
| status-waiting | Pending state | Chrome hourglass |
| status-canceled | Canceled state | Beveled slashed circle |
| status-new | New item | Sunburst star |
| status-unknown | Unknown state | Art deco question mark |

### Node Icons (9)
| Icon | Purpose | Key Design Element |
|------|---------|-------------------|
| node-play | Trigger/execute | Streamlined arrow |
| node-power | Power toggle | Stepped ring |
| node-success | Success indicator | Sunburst checkmark |
| node-dirty | Modified state | Geometric asterisk |
| node-ellipsis | More options | Chrome beveled dots |
| node-execution-error | Execution failure | Stepped alert |
| node-validation-error | Validation issue | Geometric exclamation |
| node-pin | Pinned item | Beveled pin head |
| node-trash | Delete action | Terraced trash can |

### Workflow Icons (4)
| Icon | Purpose | Key Design Element |
|------|---------|-------------------|
| continue | Continue execution | Chrome forward arrow |
| empty-output | No output data | Deco bordered container |
| retry | Retry execution | Geometric circular arrows |
| run-once | Single execution | Sunburst with numeral |

### Brand Icons (4)
| Icon | Purpose | Key Design Element |
|------|---------|-------------------|
| anthropic | Anthropic brand | currentColor compatible |
| lovable | Lovable brand | Theming compatible |
| mcp | MCP protocol | currentColor compatible |
| resolver | Resolver brand | Design consistency |

### UI Icons (14)
| Icon | Purpose | Key Design Element |
|------|---------|-------------------|
| form | Form input | Art deco document |
| webhook | Webhook trigger | Chrome hook accent |
| schema | Data structure | Geometric precision |
| json | JSON data | Stepped braces |
| binary | Binary data | Chrome highlight |
| text | Text data | Deco serif |
| toolbox | Tools/utilities | Beveled corners |
| spinner | Loading state | Art deco gear teeth |
| pop-out | External link | Sunburst arrow |
| triangle | Directional | Chrome edge |
| vector-square | Vector/path | Corner accents |
| grip-lines-vertical | Drag handle | Chrome dots |
| filled-square | Filled state | Beveled border |
| bolt-filled | Quick action | Art deco lightning |

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.
