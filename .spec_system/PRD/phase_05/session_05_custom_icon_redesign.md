# Session 05: Custom Icon Art Deco Redesign

**Phase**: 05 - Retro-Futuristic Icon System
**Status**: Not Started
**Estimated Tasks**: ~24

---

## Objectives

1. Document art deco design principles for icon creation (45/90 degree angles, stepped edges, sunburst motifs)
2. Redesign ALL 40 custom SVGs with chrome deco aesthetic
3. Ensure all SVGs use currentColor for theming compatibility
4. Test icons at all sizes (10px-40px) for clarity and visual balance
5. Maintain backwards compatibility with existing icon usage

---

## Tasks

### Design Principles Documentation

- [ ] Document art deco angle rules (45, 60, 90 degrees)
- [ ] Document stepped/terraced edge patterns
- [ ] Document sunburst and radial motifs
- [ ] Document chrome accent placement guidelines
- [ ] Create design template SVG with grid guides

### Status Icons Redesign (7 icons)

- [ ] Redesign `status-completed.svg` - Art deco checkmark with diamond frame
- [ ] Redesign `status-error.svg` - Geometric X with stepped border
- [ ] Redesign `status-warning.svg` - Triangular alert with radiant edges
- [ ] Redesign `status-waiting.svg` - Chrome hourglass with flowing sand
- [ ] Redesign `status-canceled.svg` - Slashed circle with beveled edge
- [ ] Redesign `status-new.svg` - Sunburst star with geometric points
- [ ] Redesign `status-unknown.svg` - Question mark with art deco frame

### Node Icons Redesign (9 icons)

- [ ] Redesign `node-play.svg` - Streamlined arrow with chrome accent
- [ ] Redesign `node-power.svg` - Art deco power button with stepped ring
- [ ] Redesign `node-success.svg` - Sunburst checkmark with radiating lines
- [ ] Redesign `node-dirty.svg` - Asterisk with geometric precision
- [ ] Redesign `node-ellipsis.svg` - Three dots with chrome bevels
- [ ] Redesign `node-execution-error.svg` - Alert with stepped edges
- [ ] Redesign `node-validation-error.svg` - Exclamation with geometric frame
- [ ] Redesign `node-pin.svg` - Beveled pin with chrome head
- [ ] Redesign `node-trash.svg` - Art deco trash can with terraced lid

### Workflow Icons Redesign (4 icons)

- [ ] Redesign `continue.svg` - Forward arrow with chrome gradient
- [ ] Redesign `empty-output.svg` - Empty container with deco border
- [ ] Redesign `retry.svg` - Circular arrows with geometric precision
- [ ] Redesign `run-once.svg` - Single execution symbol with sunburst

### Brand Icons Review (4 icons)

- [ ] Review `anthropic.svg` - Update colors to use currentColor
- [ ] Review `lovable.svg` - Ensure theming compatibility
- [ ] Review `mcp.svg` - Update colors to use currentColor
- [ ] Review `resolver.svg` - Verify design consistency

### UI Icons Redesign (16 icons)

- [ ] Redesign `form.svg` - Document with art deco lines
- [ ] Redesign `webhook.svg` - Hook symbol with chrome accent
- [ ] Redesign `schema.svg` - Structure icon with geometric precision
- [ ] Redesign `json.svg` - Braces with stepped edges
- [ ] Redesign `binary.svg` - Binary symbol with chrome highlight
- [ ] Redesign `text.svg` - Text symbol with deco serif
- [ ] Redesign `toolbox.svg` - Toolbox with beveled corners
- [ ] Redesign `spinner.svg` - Chrome gear with art deco teeth
- [ ] Redesign `pop-out.svg` - Arrow with sunburst effect
- [ ] Redesign `triangle.svg` - Geometric triangle with chrome edge
- [ ] Redesign `vector-square.svg` - Square with corner accents
- [ ] Redesign `grip-lines-vertical.svg` - Lines with chrome dots
- [ ] Redesign `filled-square.svg` - Square with beveled border
- [ ] Redesign `bolt-filled.svg` - Lightning with art deco angles

### Quality Assurance

- [ ] Verify all SVGs use `fill="currentColor"` or `stroke="currentColor"`
- [ ] Test all icons at xsmall size (10px)
- [ ] Test all icons at small size (12px)
- [ ] Test all icons at medium size (14px)
- [ ] Test all icons at large size (16px)
- [ ] Test all icons at xlarge size (20px)
- [ ] Test all icons at xxlarge size (40px)
- [ ] Verify icons render correctly in light mode
- [ ] Verify icons render correctly in dark mode

---

## Files to Modify

All 40 files in:
`packages/frontend/@n8n/design-system/src/components/N8nIcon/custom/`

### Complete File List

```
status-completed.svg
status-error.svg
status-warning.svg
status-waiting.svg
status-canceled.svg
status-new.svg
status-unknown.svg
node-play.svg
node-power.svg
node-success.svg
node-dirty.svg
node-ellipsis.svg
node-execution-error.svg
node-validation-error.svg
node-pin.svg
node-trash.svg
continue.svg
empty-output.svg
retry.svg
run-once.svg
anthropic.svg
lovable.svg
mcp.svg
resolver.svg
form.svg
webhook.svg
schema.svg
json.svg
binary.svg
text.svg
toolbox.svg
spinner.svg
pop-out.svg
triangle.svg
vector-square.svg
grip-lines-vertical.svg
filled-square.svg
bolt-filled.svg
```

---

## Technical Reference

### Art Deco Design Principles

**Angular Rules**
- Primary angles: 45, 90 degrees
- Secondary angles: 60, 30 degrees
- Avoid organic curves; use geometric arcs

**Stepped Edges**
```svg
<!-- Example: Stepped border pattern -->
<path d="M0 0 L4 0 L4 2 L6 2 L6 4 L8 4 L8 8 L0 8 Z" />
```

**Sunburst Motif**
```svg
<!-- Example: Radial lines emanating from center -->
<g transform="translate(7, 7)">
  <line x1="0" y1="-6" x2="0" y2="-4" />
  <line x1="0" y1="-6" x2="0" y2="-4" transform="rotate(45)" />
  <line x1="0" y1="-6" x2="0" y2="-4" transform="rotate(90)" />
  <!-- ... repeat for 8 rays -->
</g>
```

**Chrome Accent Placement**
- Top-left highlight (light source)
- Bottom-right shadow
- Center gradient for metallic sheen

### SVG Template

```svg
<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
  <!-- Use currentColor for theming -->
  <path fill="currentColor" d="..." />
  <!-- Or stroke-based -->
  <path stroke="currentColor" stroke-width="1.5" fill="none" d="..." />
</svg>
```

### Size Clarity Guidelines

| Size | Detail Level | Stroke Width |
|------|--------------|--------------|
| 10px | Minimal - core shape only | 1px |
| 12px | Basic - primary features | 1.25px |
| 14px | Standard - all features | 1.5px |
| 16px | Enhanced - subtle details | 1.5px |
| 20px | Full - all decorative elements | 2px |
| 40px | Maximum - fine chrome accents | 2.5px |

### Before/After Example: status-completed.svg

**Before (Current)**
```svg
<svg viewBox="0 0 14 14">
  <circle cx="7" cy="7" r="7" fill="currentColor"/>
  <path fill="white" d="M3.5 7 L6 9.5 L10.5 5 L9.5 4 L6 7.5 L4.5 6 Z"/>
</svg>
```

**After (Art Deco)**
```svg
<svg viewBox="0 0 14 14">
  <!-- Outer diamond frame with stepped corners -->
  <path fill="currentColor" opacity="0.15"
        d="M7 0 L14 7 L7 14 L0 7 Z"/>
  <!-- Inner octagon -->
  <path fill="currentColor"
        d="M7 1 L11 3 L13 7 L11 11 L7 13 L3 11 L1 7 L3 3 Z"/>
  <!-- Geometric checkmark with 45-degree angles -->
  <path fill="var(--color--background)"
        d="M3 7 L4 6 L6 8 L10 4 L11 5 L6 10 Z"/>
</svg>
```

---

## Acceptance Criteria

- [ ] All 40 custom SVGs redesigned with art deco aesthetic
- [ ] All SVGs use currentColor for fill/stroke (except brand logos with specific colors)
- [ ] Icons maintain visual clarity at 10px (xsmall)
- [ ] Icons display full detail at 20px+ (xlarge)
- [ ] Art deco geometric precision evident in all icons
- [ ] Chrome accent style consistent across icon set
- [ ] Icons render correctly in both light and dark modes
- [ ] No visual regressions in existing UI
- [ ] Design principles documented for future contributors
