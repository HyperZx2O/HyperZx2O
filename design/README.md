# Hermes Agent Design System Assets

Extracted design tokens and UI assets from https://hermes-agent.nousresearch.com/

## Contents

### `images/`
Hero/OG images, feature illustrations, platform badges, and brand assets.

| File | Purpose |
|------|---------|
| `og_image.png` | Open Graph / social sharing image |
| `docs_banner.png`, `docs_logo.png` | Documentation branding |
| `showcase.webp` | Product showcase screenshot |
| `portal_figure.webp` | Portal/landing figure |
| `badge.webp` | Brand badge |
| `nous_logo.webp` | Nous Research logo |
| `feature_*.webp` | Feature illustrations (automation, browse, connect, memory, sandbox, tasks) |
| `platform_*.webp` | OS download badges (linux, mac, windows) |

### `svgs/`
UI icons as inline-ready SVG code.

| Prefix | Purpose |
|--------|---------|
| `docs_*` | Documentation site icons (edit, extlink, home, lang, menu, search, sidebar, sun, tip) |
| `homepage_*` | Homepage icons (arrow, chevron, copy, discord, github, hermes badge/head/logo, twitter, window) |

All SVGs use `currentColor`, `stroke-linecap="round"`, and `stroke-linejoin="round"` for consistency.

### `output/hermes-agent.nousresearch.com/`
Raw extraction data from Dembrandt (v0.28.0, extracted 2026-08-28).

| File | Description |
|------|-------------|
| `hermes-agent-design-tokens.json` | W3C DTCG format design tokens (colors, typography, spacing, radius, borders, shadows) |
| `hermes-agent-design-system.md` | Human-readable design system summary |
| `hermes-agent-site-capture.json` | Full DOM extraction: colors, typography, spacing, motion, components, breakpoints, frameworks |
| `hermes-agent-brand-guide.pdf` | Generated brand guidelines PDF |

## Key Design Principles

### Colors
| Role | Hex | Usage |
|------|-----|-------|
| Primary | `#0000F2` | Interactive elements, links, buttons, site background |
| Accent | `#EDFF45` | Highlights, special callouts (lime/yellow) |
| Surface | `#FFD700` | Card/panel backgrounds (gold) |
| Text | `#F5F5F5` | Primary text on dark backgrounds |
| On Surface | `#1C1E21` | Text on light/surface backgrounds |

**Extended palette (10 colors):** `#0000F2`, `#003DFF`, `#EDFF45`, `#F5F5F5`, `#1C1E21`, `#7A5800`, `#9A968E`, `#606770`, `#5A5E9A`, `#9698C3`

### Typography
| Style | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| Display/Hero | displayFont (Sigurd Variable) | 107px - 466px | 300 | Large headers, uppercase |
| Heading | Inter | 32px - 48px | 600 | Section titles |
| Body | Inter | 16px | 400-600 | Paragraph text, 1.65 line-height |
| Code/Data | JetBrains Mono / Courier Prime | 14px | 400 | Code blocks, 1.45 line-height |
| Mono Labels | monoFont (Courier Prime) | 10px - 17px | 400-700 | All-caps mono labels |

**Font URLs (self-hosted):**
- `CourierPrime_Regular-s.p.0357340c9cxif.woff2`
- `RulesVariable-s.p.06y..a1h6bjwb.woff2`
- `Sigurd_Variable-s.p.092~ec~icx8ri.woff2`

### Spacing
8px base scale: `1.25px`, `1.6px`, `3.2px`, `4px`, `4.8px`, `5.12px`, `6px`, `6.4px`, `8px`, `16.27px`, `24px`

### Components
| Component | Style |
|-----------|-------|
| Buttons | `bg-[#F5F5F5]`, `text-[#0000F2]`, `px-[16.27px] py-[16.27px] pl-[55.32px]`, `rounded-none` |
| Shadows | `rgba(0,0,0,0.25) 0px 4px 14px 0px` |
| Border radius | `0px` (default), `4px`, `6.4px`, `8px` |
| Borders | 1px solid, primary blue or subtle gray |
| Icons | 2-stroke SVG, `currentColor`, 20-40px |

### Motion
| Property | Value |
|----------|-------|
| Duration | `0.001s` (1ms) for instant feedback |
| Easing | `ease`, `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0, 0, 0.2, 1)` |
| Animated props | color, background-color, border-color, outline-color, opacity |

### Framework
- **Tailwind CSS** (confirmed by arbitrary values like `top-[117px]`)
- **Breakpoints:** 767px, 768px, 1369px
- **No dark mode** implemented (light-on-dark primary)

## How to Use

Copy design tokens from `hermes-agent-design-tokens.json` into your project's design system, or reference `hermes-agent-design-system.md` for human-readable values.

### Quick Reference (CSS Variables)
```css
:root {
  --color-primary: #0000F2;
  --color-accent: #EDFF45;
  --color-surface: #FFD700;
  --color-text: #F5F5F5;
  --color-on-surface: #1C1E21;
  --font-display: 'Sigurd Variable', serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --space-base: 8px;
}
```

## Notes

- The massive display typography (up to 466px) is intended for hero sections only
- Use `lab()` color space for perceptually uniform hover states (see site-capture.json for examples)
- The "glitch" gradient (`linear-gradient(160deg, ...)`) is used sparingly for special sections
- Apply restraint: the system's strength is in its minimal, precise aesthetic
