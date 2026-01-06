# Lucide to Phosphor Icon Mapping

**Session**: phase05-session03-phosphor-migration
**Created**: 2026-01-07
**Total Icons**: 196

This document provides the complete mapping from Lucide icons to their Phosphor equivalents.

---

## Import Pattern Change

```typescript
// Before (Lucide)
import IconLucideHouse from '~icons/lucide/house';

// After (Phosphor)
import IconPhHouse from '~icons/ph/house';
```

---

## Complete Mapping Table

| # | Lucide Icon | Phosphor Icon | Notes |
|---|-------------|---------------|-------|
| 1 | align-right | text-align-right | Text alignment |
| 2 | archive | archive | Direct match |
| 3 | archive-restore | archive-tray | Similar concept |
| 4 | arrow-down | arrow-down | Direct match |
| 5 | arrow-left | arrow-left | Direct match |
| 6 | arrow-left-right | arrows-left-right | Plural form |
| 7 | arrow-right | arrow-right | Direct match |
| 8 | arrow-right-from-line | arrow-line-right | Different naming |
| 9 | arrow-right-to-line | arrow-line-left | Different naming |
| 10 | arrow-up | arrow-up | Direct match |
| 11 | arrow-up-right | arrow-up-right | Direct match |
| 12 | at-sign | at | Shortened |
| 13 | ban | prohibit | Different name |
| 14 | bell | bell | Direct match |
| 15 | book | book | Direct match |
| 16 | book-open | book-open | Direct match |
| 17 | bot | robot | Different name |
| 18 | box | cube | Different visual |
| 19 | braces | brackets-curly | Different naming |
| 20 | brain | brain | Direct match |
| 21 | bug | bug | Direct match |
| 22 | calculator | calculator | Direct match |
| 23 | calendar | calendar | Direct match |
| 24 | case-upper | text-aa | Different naming |
| 25 | chart-column-decreasing | chart-bar | Similar concept |
| 26 | check | check | Direct match |
| 27 | check-check | checks | Plural form |
| 28 | chevron-down | caret-down | Phosphor uses caret |
| 29 | chevron-left | caret-left | Phosphor uses caret |
| 30 | chevron-right | caret-right | Phosphor uses caret |
| 31 | chevron-up | caret-up | Phosphor uses caret |
| 32 | chevrons-down-up | caret-double-down | Double variant |
| 33 | chevrons-left | caret-double-left | Double variant |
| 34 | chevrons-up-down | caret-up-down | Combined variant |
| 35 | circle | circle | Direct match |
| 36 | circle-alert | warning-circle | Different naming |
| 37 | circle-check | check-circle | Word order swap |
| 38 | circle-dot | circle-dashed | Similar concept |
| 39 | circle-ellipsis | dots-three-circle | Different naming |
| 40 | circle-help | question | Simplified |
| 41 | circle-minus | minus-circle | Word order swap |
| 42 | circle-pause | pause-circle | Word order swap |
| 43 | circle-play | play-circle | Word order swap |
| 44 | circle-plus | plus-circle | Word order swap |
| 45 | circle-user-round | user-circle | Simplified |
| 46 | circle-x | x-circle | Word order swap |
| 47 | clipboard | clipboard | Direct match |
| 48 | clipboard-check | clipboard-text | Similar concept |
| 49 | clipboard-list | clipboard-text | Similar concept |
| 50 | clock | clock | Direct match |
| 51 | cloud | cloud | Direct match |
| 52 | cloud-download | cloud-arrow-down | Different naming |
| 53 | code | code | Direct match |
| 54 | cog | gear | Different name |
| 55 | columns-3-cog | columns | Simplified |
| 56 | contrast | circle-half | Different visual |
| 57 | copy | copy | Direct match |
| 58 | crosshair | crosshair | Direct match |
| 59 | database | database | Direct match |
| 60 | door-open | door-open | Direct match |
| 61 | dot | dot-outline | Different naming |
| 62 | earth | globe-hemisphere-west | Different naming |
| 63 | ellipsis | dots-three | Different naming |
| 64 | ellipsis-vertical | dots-three-vertical | Different naming |
| 65 | equal | equals | Plural form |
| 66 | expand | arrows-out | Different naming |
| 67 | external-link | arrow-square-out | Different visual |
| 68 | eye | eye | Direct match |
| 69 | eye-off | eye-slash | Different naming |
| 70 | file | file | Direct match |
| 71 | file-archive | file-zip | Different naming |
| 72 | file-code | file-code | Direct match |
| 73 | file-diff | files | Similar concept |
| 74 | file-down | file-arrow-down | Different naming |
| 75 | file-input | file-arrow-down | Similar concept |
| 76 | file-output | file-arrow-up | Different naming |
| 77 | file-text | file-text | Direct match |
| 78 | files | files | Direct match |
| 79 | fingerprint | fingerprint | Direct match |
| 80 | flask-conical | flask | Simplified |
| 81 | folder | folder | Direct match |
| 82 | folder-open | folder-open | Direct match |
| 83 | folder-plus | folder-plus | Direct match |
| 84 | funnel | funnel | Direct match |
| 85 | gem | diamond | Different visual |
| 86 | gift | gift | Direct match |
| 87 | git-branch | git-branch | Direct match |
| 88 | globe | globe | Direct match |
| 89 | graduation-cap | graduation-cap | Direct match |
| 90 | grid-2x2 | grid-four | Different naming |
| 91 | grip-vertical | dots-six-vertical | Different visual |
| 92 | hand-coins | hand-coins | Direct match |
| 93 | handshake | handshake | Direct match |
| 94 | hard-drive | hard-drives | Plural form |
| 95 | hard-drive-download | hard-drive | Simplified |
| 96 | hash | hash | Direct match |
| 97 | history | clock-counter-clockwise | Different naming |
| 98 | hourglass | hourglass | Direct match |
| 99 | house | house | Direct match |
| 100 | image | image | Direct match |
| 101 | inbox | tray | Different naming |
| 102 | info | info | Direct match |
| 103 | key-round | key | Simplified |
| 104 | languages | translate | Different naming |
| 105 | layers | stack | Different naming |
| 106 | lightbulb | lightbulb | Direct match |
| 107 | link | link | Direct match |
| 108 | list | list | Direct match |
| 109 | list-checks | list-checks | Direct match |
| 110 | lock | lock | Direct match |
| 111 | log-in | sign-in | Phosphor naming |
| 112 | log-out | sign-out | Phosphor naming |
| 113 | mail | envelope | Different naming |
| 114 | maximize | frame-corners | Different visual |
| 115 | maximize-2 | arrows-out-simple | Different naming |
| 116 | menu | list | Similar concept |
| 117 | message-circle | chat-circle | Different naming |
| 118 | message-square | chat | Simplified |
| 119 | message-square-plus | chat-text | Similar concept |
| 120 | messages-square | chats | Simplified |
| 121 | mic | microphone | Full name |
| 122 | milestone | signpost | Different visual |
| 123 | minimize-2 | arrows-in-simple | Different naming |
| 124 | minus | minus | Direct match |
| 125 | mouse-pointer | cursor | Different naming |
| 126 | network | network | Direct match |
| 127 | notebook-pen | notebook | Simplified |
| 128 | package-open | package | Simplified |
| 129 | palette | palette | Direct match |
| 130 | panel-left | sidebar | Different naming |
| 131 | panel-right | sidebar-simple | Different naming |
| 132 | paperclip | paperclip | Direct match |
| 133 | pause | pause | Direct match |
| 134 | pen | pen | Direct match |
| 135 | pencil | pencil | Direct match |
| 136 | pin | push-pin | Full name |
| 137 | play | play | Direct match |
| 138 | plug | plug | Direct match |
| 139 | plus | plus | Direct match |
| 140 | pocket-knife | knife | Simplified |
| 141 | power | power | Direct match |
| 142 | redo-2 | arrow-clockwise | Different naming |
| 143 | refresh-cw | arrows-clockwise | Different naming |
| 144 | remove-formatting | text-strikethrough | Different visual |
| 145 | rss | rss | Direct match |
| 146 | satellite-dish | broadcast | Different visual |
| 147 | save | floppy-disk | Different naming |
| 148 | scale | scales | Plural form |
| 149 | scissors | scissors | Direct match |
| 150 | search | magnifying-glass | Different naming |
| 151 | send | paper-plane-tilt | Different visual |
| 152 | server | hard-drive | Similar concept |
| 153 | settings | gear-six | Different naming |
| 154 | settings-2 | sliders | Different visual |
| 155 | share | share | Direct match |
| 156 | sliders-horizontal | sliders-horizontal | Direct match |
| 157 | smile | smiley | Different naming |
| 158 | sparkles | sparkle | Singular form |
| 159 | split | arrows-split | Different naming |
| 160 | square | square | Direct match |
| 161 | square-check | check-square | Word order swap |
| 162 | square-minus | minus-square | Word order swap |
| 163 | square-pen | pencil-simple | Different naming |
| 164 | square-plus | plus-square | Word order swap |
| 165 | sticky-note | note | Simplified |
| 166 | sun | sun | Direct match |
| 167 | table | table | Direct match |
| 168 | tags | tag | Singular form |
| 169 | terminal | terminal | Direct match |
| 170 | thumbs-down | thumbs-down | Direct match |
| 171 | thumbs-up | thumbs-up | Direct match |
| 172 | timer | timer | Direct match |
| 173 | toggle-right | toggle-right | Direct match |
| 174 | trash-2 | trash | Simplified |
| 175 | tree-pine | tree | Simplified |
| 176 | triangle-alert | warning | Different naming |
| 177 | type | text-t | Different naming |
| 178 | undo-2 | arrow-counter-clockwise | Different naming |
| 179 | unlink | link-break | Different naming |
| 180 | user | user | Direct match |
| 181 | user-check | user-check | Direct match |
| 182 | user-lock | user-circle-gear | Different visual |
| 183 | user-round | user | Simplified |
| 184 | users | users | Direct match |
| 185 | variable | brackets-curly | Different naming |
| 186 | vault | vault | Direct match |
| 187 | video | video | Direct match |
| 188 | volume-2 | speaker-high | Different naming |
| 189 | volume-x | speaker-x | Different naming |
| 190 | wand-sparkles | magic-wand | Different naming |
| 191 | waypoints | graph | Different visual |
| 192 | wrench | wrench | Direct match |
| 193 | x | x | Direct match |
| 194 | zap | lightning | Different naming |
| 195 | zoom-in | magnifying-glass-plus | Different naming |
| 196 | zoom-out | magnifying-glass-minus | Different naming |

---

## Key Naming Differences

### Directional Arrows
- Lucide `chevron-*` -> Phosphor `caret-*`
- Lucide `chevrons-*` -> Phosphor `caret-double-*`

### Settings/Gear
- Lucide `cog` -> Phosphor `gear`
- Lucide `settings` -> Phosphor `gear-six`
- Lucide `settings-2` -> Phosphor `sliders`

### Authentication
- Lucide `log-in` -> Phosphor `sign-in`
- Lucide `log-out` -> Phosphor `sign-out`

### Search
- Lucide `search` -> Phosphor `magnifying-glass`
- Lucide `zoom-in` -> Phosphor `magnifying-glass-plus`
- Lucide `zoom-out` -> Phosphor `magnifying-glass-minus`

### Messaging
- Lucide `message-*` -> Phosphor `chat-*`
- Lucide `messages-square` -> Phosphor `chats`

### Navigation/Expand
- Lucide `expand` -> Phosphor `arrows-out`
- Lucide `maximize` -> Phosphor `frame-corners`
- Lucide `minimize-2` -> Phosphor `arrows-in-simple`

### File Operations
- Lucide `save` -> Phosphor `floppy-disk`
- Lucide `file-archive` -> Phosphor `file-zip`

### Circular Variants
Most Lucide `circle-*` icons swap word order in Phosphor:
- Lucide `circle-check` -> Phosphor `check-circle`
- Lucide `circle-plus` -> Phosphor `plus-circle`
- Lucide `circle-x` -> Phosphor `x-circle`

### Square Variants
Similar to circles, word order swaps:
- Lucide `square-check` -> Phosphor `check-square`
- Lucide `square-plus` -> Phosphor `plus-square`

---

## Weight Variants

Phosphor provides 6 weight variants for each icon:
- `icon-name` (regular)
- `icon-name-thin`
- `icon-name-light`
- `icon-name-bold`
- `icon-name-fill`
- `icon-name-duotone`

For this migration, we use the regular weight (no suffix) to match Lucide's default appearance.

---

## Notes

1. All mappings verified against @iconify-json/ph v1.2.2
2. Direct matches: ~85 icons (43%)
3. Name differences: ~111 icons (57%)
4. Visual differences are minimal - icons serve same purpose
