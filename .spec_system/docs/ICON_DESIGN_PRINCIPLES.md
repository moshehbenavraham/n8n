# Chrome Deco Icon Design Principles

**Created**: 2026-01-07
**Purpose**: Art deco design guidelines for n8n custom icon system
**Applies to**: All 38 custom SVG icons in the design system

---

## 1. Core Aesthetic: Chrome Deco

The Chrome Deco style combines art deco geometric precision with a modern chrome/metallic feel. This retro-futuristic aesthetic emphasizes clean angles, stepped patterns, and streamlined forms.

### Visual Characteristics
- **Angular Geometry**: Hard edges replace soft curves
- **Stepped Patterns**: Terraced/tiered elements create depth
- **Sunburst Motifs**: Radiating lines emanate from focal points
- **Chrome Accents**: Beveled edges suggest metallic reflections
- **Symmetry**: Balanced, often mirror-image compositions

---

## 2. Geometric Precision

### Approved Angles
All lines and edges must use one of these angle measures:
- **90 degrees**: Horizontal and vertical lines
- **45 degrees**: Primary diagonal
- **60 degrees**: Secondary diagonal (30 degree complement)

### Forbidden
- Arbitrary curves (use angular approximations)
- Random angles (snap to approved angles)
- Soft, rounded corners (use chamfered or stepped corners)

### Path Construction
```
Good: M 0 7 L 7 0 L 14 7 L 7 14 Z (45-degree diamond)
Bad:  M 0 7 Q 7 0 14 7 Q 7 14 0 7 Z (curved diamond)
```

---

## 3. Stepped Edge Patterns

Stepped edges create visual depth without gradients or shadows.

### Step Sizes
- **Micro steps**: 0.5px increments for fine detail (xlarge+ sizes)
- **Standard steps**: 1px increments for primary edges
- **Bold steps**: 2px increments for emphasis

### Implementation Pattern
```svg
<!-- Stepped corner (replacing rounded corner) -->
<path d="M 0 4 L 0 2 L 2 0 L 4 0" />

<!-- Terraced edge (3 steps) -->
<path d="M 0 6 L 2 6 L 2 4 L 4 4 L 4 2 L 6 2" />
```

---

## 4. Sunburst and Radial Motifs

Used for emphasis, success states, and call-to-action elements.

### Sunburst Guidelines
- Minimum 4 rays for recognition
- Maximum 8 rays for clarity at small sizes
- Rays originate from center or focal point
- Use 45-degree spacing for 8-ray bursts
- Use 60-degree spacing for 6-ray bursts

### Application
- Status indicators (success, new)
- Action buttons (play, execute)
- Emphasis states

---

## 5. SVG Technical Standards

### ViewBox
All icons use standardized viewBox:
```svg
viewBox="0 0 14 14"
```

### Color
All icons use CSS currentColor for theming:
```svg
fill="currentColor"
stroke="currentColor"
```

### Encoding
- ASCII characters only (0-127)
- Unix LF line endings
- No XML declaration needed
- Minimal namespace: `xmlns="http://www.w3.org/2000/svg"` only

### File Format
```svg
<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="..." />
</svg>
```

---

## 6. Size-Responsive Detail Strategy

Icons must remain clear and recognizable across all supported sizes.

### Size Categories

| Size | Pixels | Detail Level | Design Approach |
|------|--------|--------------|-----------------|
| xsmall | 10px | Minimal | Core shape only, no fine detail |
| small | 12px | Basic | Primary features visible |
| medium | 14px | Standard | Full design intent |
| large | 16px | Enhanced | Subtle accents visible |
| xlarge | 20px | Full | All details rendered |
| xxlarge | 40px | Maximum | Fine chrome accents visible |

### Detail Hierarchy

**Level 1 - Essential (visible at 10px)**:
- Primary shape silhouette
- Core identifying feature
- Must be distinguishable

**Level 2 - Primary (visible at 12px)**:
- Secondary shape elements
- Key visual metaphor

**Level 3 - Standard (visible at 14px)**:
- Stepped edges
- Basic sunburst rays
- Art deco framing

**Level 4 - Enhanced (visible at 16px+)**:
- Chrome bevels
- Fine stepped patterns
- Decorative accents

### Design Strategy
Design for medium (14px) first, then verify:
1. Simplifies correctly at smaller sizes
2. Enhances appropriately at larger sizes

---

## 7. Icon Categories

### Status Icons
Visual indicators for workflow and execution states.
- **Shape Language**: Geometric frames (diamond, circle, triangle)
- **Interior Symbol**: Clear semantic indicator (check, X, !)
- **Detail**: Stepped borders, beveled edges

| Icon | Shape | Symbol | Key Feature |
|------|-------|--------|-------------|
| completed | Diamond | Checkmark | Angular check at 45 degrees |
| error | Octagon | X | Stepped X with beveled frame |
| warning | Triangle | ! | Sunburst-edge triangle |
| waiting | Diamond | Hourglass | Chrome hourglass silhouette |
| canceled | Circle | Slash | Beveled slash through circle |
| new | Star | Burst | 8-point sunburst star |
| unknown | Diamond | ? | Deco question mark frame |

### Node Icons
Controls and indicators for workflow nodes.
- **Shape Language**: Action-oriented, dynamic
- **Style**: Streamlined chrome with directional emphasis

| Icon | Primary Element | Chrome Accent |
|------|----------------|---------------|
| play | Arrow | Beveled edge |
| power | Circle with gap | Stepped ring |
| success | Checkmark | Sunburst rays |
| dirty | Asterisk | Geometric points |
| ellipsis | Three dots | Chrome spheres |
| execution-error | Alert | Stepped frame |
| validation-error | Exclamation | Deco border |
| pin | Pin shape | Beveled head |
| trash | Can shape | Terraced lid |

### Workflow Icons
Execution flow control indicators.
- **Shape Language**: Directional, motion-implied
- **Style**: Arrows and circular motifs

### Brand Icons
Third-party service identifiers.
- **Requirement**: currentColor compatibility
- **Style**: Simplified from original for theming

### UI Icons
Interface elements and data type indicators.
- **Shape Language**: Functional, clear
- **Style**: Minimal chrome, maximum clarity

---

## 8. Path Optimization

### Coordinate Precision
- Use integer coordinates where possible
- Maximum 1 decimal place when needed
- Round to .5 for sub-pixel alignment

### Path Efficiency
```svg
<!-- Prefer combined paths -->
<path d="M 0 0 L 14 0 L 14 14 L 0 14 Z M 2 2 L 12 2 L 12 12 L 2 12 Z" />

<!-- Over multiple paths -->
<path d="M 0 0 L 14 0 L 14 14 L 0 14 Z" />
<path d="M 2 2 L 12 2 L 12 12 L 2 12 Z" />
```

### Fill Rules
- Use `fill-rule="evenodd"` for complex shapes with holes
- Default fill rule for simple shapes

---

## 9. Testing Checklist

Before finalizing any icon:

- [ ] ViewBox is "0 0 14 14"
- [ ] Uses currentColor for fill/stroke
- [ ] ASCII-only content
- [ ] Unix LF line endings
- [ ] Recognizable at 10px
- [ ] Full detail at 14px
- [ ] Works in light mode
- [ ] Works in dark mode
- [ ] Angles are 45/60/90 degrees only
- [ ] No arbitrary curves

---

## 10. Reference Examples

### Diamond Frame Pattern
```svg
<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M 7 0 L 14 7 L 7 14 L 0 7 Z M 7 2 L 12 7 L 7 12 L 2 7 Z" fill-rule="evenodd" />
</svg>
```

### Stepped Edge Pattern
```svg
<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M 0 14 L 0 10 L 2 10 L 2 6 L 4 6 L 4 2 L 6 2 L 6 0 L 14 0 L 14 14 Z" />
</svg>
```

### 8-Point Sunburst
```svg
<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M 7 0 L 8 5 L 14 7 L 8 9 L 7 14 L 6 9 L 0 7 L 6 5 Z" />
</svg>
```

---

## 11. Changelog

| Date | Change |
|------|--------|
| 2026-01-07 | Initial Chrome Deco principles documented |

---

*This document guides all custom icon design work for the n8n design system Chrome Deco aesthetic.*
