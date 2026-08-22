---
name: Survival Nights
description: Interactive survival-diary companion site for the indie game Survival Nights, built by Vlad & Dad
colors:
  ink-black: "#1a1a1a"
  signal-orange: "#ff4e00"
  signal-orange-deep: "#e04500"
  hazard-yellow: "#ffdc00"
  hazard-yellow-bright: "#ffe633"
  cyan-alert: "#00e5ff"
  paper-cream: "#f4f1ea"
  paper-white: "#faf8f2"
  notebook-white: "#fcfbf7"
  paper-warm-white: "#fdfcf8"
  cream-highlight: "#fff9e6"
  forest-green: "#1b5e20"
  forest-green-mid: "#2e7d32"
  meadow-green-bg: "#e8f5e9"
  alarm-red: "#c62828"
  alarm-red-bg: "#ffebee"
  charcoal-panel: "#262626"
typography:
  heading:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 900
    letterSpacing: "-0.01em"
  story:
    fontFamily: "Newsreader, Georgia, serif"
    fontWeight: 600
    lineHeight: 1.6
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontWeight: 400
  hand:
    fontFamily: "Caveat, cursive"
    fontWeight: 600
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontWeight: 700
rounded:
  none: "0px"
  pill: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-orange-deep}"
  button-secondary:
    backgroundColor: "{colors.hazard-yellow}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-ghost:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  card:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    padding: "24px"
  badge:
    backgroundColor: "{colors.signal-orange}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "2px 8px"
---

# Design System: Survival Nights

## Overview

**Creative North Star: "The Field Journal Sticker Book"**

Survival Nights reads like a kid's field diary of surviving a mystery island, glued together with hand-cut paper stickers, marker-drawn warnings, and a dad's steady lettering. Every surface sits on warm, slightly speckled paper; every card and button is a cut-out sticker with a heavy black ink outline and a flat, hard-edged drop shadow — never soft, never blurred, because paper stickers don't cast soft shadows, they cast the shadow of the paper underneath. The tone is **playful DIY-comic**: confident, loud, a little scrappy, made by a kid and a dad rather than a studio. Headlines shout in bold uppercase; body copy tells the story in a warm storybook serif; UI chrome (badges, tags, danger levels) speaks in an all-caps monospace, like a game HUD stapled onto the diary page.

The system firmly rejects: soft neumorphism, blurred glassmorphism, rounded "friendly SaaS" corners, muted corporate palettes, or any gradient-heavy sheen. Nothing floats on ambient blur — everything sits flat on the page and is pinned down by a hard black line.

**Key Characteristics:**
- Heavy black ink outlines (2–4px) on every interactive surface and card.
- Flat, hard-edged offset shadows in solid color — no blur, ever (the "sticker" shadow).
- Warm paper backgrounds with a subtle dot-grid texture, never plain white.
- Three loud, saturated accent colors (orange, yellow, cyan) used as danger/action signals, not background fills.
- Type does three jobs with three faces: shout (heading), tell (serif story), label (mono).
- Nothing is rounded except the rare pill badge or circular icon chip; the default corner is a hard square.

## Colors

The palette is warm-neutral paper plus three loud signal colors, used sparingly and functionally — never as decoration.

### Primary
- **Signal Orange** (`#ff4e00`): the one true call-to-action color. Primary buttons, active nav state, key CTA icons, hover accents. Deepens to **Signal Orange Deep** (`#e04500`) on hover/press.

### Secondary
- **Hazard Yellow** (`#ffdc00`): the second action color, one register down from orange — used for secondary CTAs, the logo mark, hover fills, and "caution/craft" affordances. Brightens to `#ffe633` on hover.
- **Cyan Alert** (`#00e5ff`): a rare third signal, reserved for a specific pillar/feature (e.g. the defense/tech mechanic) so it stays special rather than becoming a fourth default action color.

### Neutral
- **Ink Black** (`#1a1a1a`): the universal outline, primary text, and shadow color. This is the line that holds every sticker together — borders, drop shadows, and body headings all resolve to this one black, not a design-system gray.
- **Paper Cream** (`#f4f1ea`): the default page background, always with the dot-grid texture.
- **Paper White** (`#faf8f2`) / **Notebook White** (`#fcfbf7`) / **Paper Warm White** (`#fdfcf8`): near-white card and panel backgrounds — pick the warmest one available rather than pure white; pure white (`#ffffff`) is reserved for cards that need to pop hardest against the cream page.
- **Cream Highlight** (`#fff9e6`): the hover-fill for white cards and buttons — a whisper of yellow, not a color change.
- **Charcoal Panel** (`#262626`): dark panel fills (e.g. dark mode chips), a step lighter than ink black.

### Functional
- **Forest Green** (`#1b5e20` / `#2e7d32`) on **Meadow Green tint** (`#e8f5e9`): success/safe states (e.g. "low danger", craft success).
- **Alarm Red** (`#c62828`) on **Alarm Red tint** (`#ffebee`): critical/danger states (e.g. "extreme danger" monster tier).

### Named Rules
**The One Black Rule.** All outlines, all drop shadows, and all primary body text resolve to `#1a1a1a`. Never introduce a second gray for borders or shadows — the single ink black is what makes every sticker feel cut from the same sheet.

**The Three-Signal Rule.** Only three colors ever act as a call-to-action or status signal: orange, yellow, and (rarely) cyan. A fourth "brand color" dilutes the system; new statuses should map onto the existing green/red functional pair before reaching for a new hue.

## Typography

**Display/Heading Font:** Outfit (with system sans-serif fallback)
**Body Font:** Plus Jakarta Sans (with system sans-serif fallback)
**Story Font:** Newsreader (with Georgia, serif fallback)
**Hand Font:** Caveat (with cursive fallback)
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** Five faces, each with one job — Outfit shouts (headlines, nav, buttons, always uppercase and black-weight), Newsreader tells the story (diary prose, monster quotes, warm and readable), Plus Jakarta Sans handles plain UI body copy, JetBrains Mono labels the HUD (badges, danger tags, timestamps, all-caps tracked-out), and Caveat is the rare handwritten aside — a marginal note, not a heading.

### Hierarchy
- **Display** (font-black/900, `text-4xl` to `text-7xl`, `leading-[1.05]`, uppercase, tracking-tight): hero titles only.
- **Headline** (font-black/900, `text-xl` to `text-2xl`, uppercase): section headers, card titles.
- **Story Body** (Newsreader, semibold/600, `text-base` to `text-2xl`, `leading-relaxed`): narrative copy — hero subtitle, chapter text, monster quotes.
- **UI Body** (Plus Jakarta Sans, regular): incidental interface copy where Newsreader would feel too literary.
- **Label** (JetBrains Mono, bold/700–800, `text-[9px]`–`text-xs`, `tracking-wider`, uppercase): badges, author tag, danger levels, chapter counters — always the smallest, always tracked out.

### Named Rules
**The Shout-or-Tell Rule.** A block of copy is either Outfit (shouting a heading) or Newsreader (telling the story) — never a third generic sans for anything that reads as content. Plus Jakarta Sans is reserved for incidental chrome, not narrative.

## Layout

Content sits in a centered `max-w-7xl` container with responsive horizontal padding (`px-4` mobile → `px-8` desktop). The grid is generous and paper-like: 1 column on mobile, opening to 2–4 columns on `sm`/`lg` breakpoints for card grids (monster teasers, feature pillars). Section rhythm is loose — `py-12`–`py-20` between major sections — so each "page" of the diary gets room to breathe. The sticky top navbar is compact and low-profile (`h-12`–`h-14`) so it reads as a page tab, not a heavy app chrome bar, and collapses to a full-width drawer menu below `lg`.

## Elevation & Depth

This system uses **flat, hard-edged offset shadows only — no blur, no ambient glow, no soft neumorphism.** Depth is conveyed the way a paper sticker sits on a page: a solid-color shape offset a few pixels down-and-right from its border, always sharp-edged (`shadow-[Npx_Npx_0px_0px_#COLOR]`). Larger, more important elements get a bigger offset (interactive buttons and hero cards: 5–8px; small badges and chips: 1–3px), and the offset grows on hover/press to read as the sticker lifting off the page, then settles back on `active`.

### Shadow Vocabulary
- **Sticker Small** (`shadow-[1px_1px_0px_0px_#1a1a1a]` to `shadow-[3px_3px_0px_0px_#1a1a1a]`): badges, small icon chips, compact buttons.
- **Sticker Medium** (`shadow-[4px_4px_0px_0px_#1a1a1a]` to `shadow-[5px_5px_0px_0px_#1a1a1a]`): cards, secondary buttons, nav active state.
- **Sticker Large** (`shadow-[6px_6px_0px_0px_#1a1a1a]` to `shadow-[8px_8px_0px_0px_#1a1a1a]`): hero cards, primary CTAs, feature pillars.
- **Sticker Accent** (`shadow-[Npx_Npx_0px_0px_#ff4e00]`): the same hard shadow in signal orange instead of black, used sparingly to make one specific element (e.g. a highlighted card) feel electrified rather than just outlined.

A reserved legacy shadow vocabulary (`.art-shadow`, `.art-shadow-sm`, `.art-shadow-lg`, `.art-shadow-orange` in `src/index.css`) predates the current inline Tailwind approach and is not wired into any component today. Treat it as a named reference for the same "sticker shadow" concept, not as dead weight to delete reflexively — but new work should use the inline `shadow-[…]` form shown above, which is what every current component actually does.

### Named Rules
**The No-Blur Rule.** Every shadow in this system has `0px` blur and `0px` spread — only x/y offset and a solid color. A soft or blurred shadow anywhere breaks the paper-sticker illusion.

## Shapes

Corners are hard by default: **The Square Corner Rule** — cards, buttons, badges, and panels use `rounded-none` (implicit, i.e. no radius utility at all). The only rounded shapes in the system are perfect circles (`rounded-full`), reserved for icon chips, the logo mark, and circular avatar-style images — a deliberate contrast that makes the rare circle read as a badge/seal rather than a softened rectangle. Borders are heavy and always ink black: `border-2` (2px) for compact chrome (badges, small icons), `border-3` (3px) for standard cards and buttons, `border-4` reserved for the most emphasized single elements (e.g. a hero frame). A thin (`border` / `border-t`) hairline in `ink-black/20` opacity is used only as an internal divider inside an already-bordered card, never as a standalone edge.

Two textured surface treatments exist in `src/index.css` as reserved vocabulary beyond today's implemented pages: `.artistic-paper` / `.notebook-paper` (the warm dot-grid, actively used inline via `index.html`'s body style and in `MonsterCreator`) and `.blueprint-grid` (a dark teal-on-navy schematic grid, not yet used by any component but held in reserve for a future technical/bunker-schematic surface — e.g. deeper inside the Bunker Workbench). Document it as available, not as something to build toward without a concrete need.

## Components

### Buttons
- **Shape:** hard square corners, no radius; heavy border (`border-3`, `#1a1a1a`).
- **Primary:** `bg-[#ff4e00]` / white text / `shadow-[5-6px_5-6px_0px_0px_#1a1a1a]`, uppercase, font-black, generous padding (`px-6-7 py-3.5-4`).
- **Secondary:** `bg-[#ffdc00]` / ink-black text, same border/shadow/type treatment as primary, one register quieter.
- **Ghost/Tertiary:** white background / ink-black text / same border and shadow — used when a button needs to feel present but not like the primary action.
- **Hover / Focus:** shadow offset increases by ~2px and the button lifts (`-translate-y-0.5` to `-translate-y-1`); background deepens (orange → `#e04500`) or brightens (yellow → `#ffe633`) or tints cream (white → `#fff9e6`). On `active`, translate resets to 0 so the button visibly "presses down" onto its own shadow.

### Badges / Tags
- **Style:** small solid-color chip (usually signal orange or neutral), `border` (thin, 1px) in ink black, uppercase JetBrains Mono label, tiny `shadow-[1px_1px_0px_0px_#000]`.
- **State:** active/selected badges invert to a light `bg-white/20` on colored backgrounds; inactive badges sit on `bg-neutral-100` with `text-neutral-600`.

### Cards / Containers
- **Corner Style:** hard square, no radius.
- **Background:** white or the warmest available near-white (`#faf8f2`/`#fcfbf7`), never plain gray.
- **Shadow Strategy:** Sticker Medium or Sticker Large per the Elevation vocabulary above; scales with card importance.
- **Border:** `border-3` ink black by default.
- **Internal Padding:** `p-3` (compact teaser cards) to `p-6` (feature/pillar cards).

### Navigation
- **Style:** sticky top bar, white background, `border-b-2` ink black, low-profile height (`h-12`–`h-14`). Active tab gets the full sticker treatment (orange fill, border, small offset shadow); inactive tabs are borderless until hover, when they fill hazard yellow. Mobile collapses to a bordered drawer of full-width sticker buttons, one per row. Icons always carry a text label — never icon-only.

### Monster / Danger Cards (signature component)
The tactical monster-dossier card is the system's signature piece: a bordered image frame with a JetBrains Mono danger-level badge pinned to its top-right corner (orange for standard threat, escalating via the functional green/red pair for safe vs. critical tiers), a black-weight uppercase name, and a Newsreader italic-style quote line beneath. The card's own border and offset shadow make it read as a trading card / dossier sticker rather than a generic content card.

## Do's and Don'ts

### Do:
- **Do** give every interactive surface a heavy ink-black border and a flat, unblurred offset shadow (Sticker Small/Medium/Large per Elevation).
- **Do** keep headings in Outfit, all uppercase, font-black weight; keep narrative copy in Newsreader; keep UI labels in tracked-out uppercase JetBrains Mono.
- **Do** reserve orange, yellow, and cyan as the only three action/signal colors; route new status types through the existing green (safe) / red (danger) functional pair first.
- **Do** lift a button/card 2–8px further on hover by increasing its shadow offset, and settle it back to flush on active/press.
- **Do** use `.artistic-paper`/`.notebook-paper`'s dot-grid texture (or its inline equivalent) for any new page background, and treat `.blueprint-grid` as the reserved surface for a future technical/schematic screen rather than reinventing a new texture.

### Don't:
- **Don't** introduce rounded corners on cards, buttons, or panels — the hard square corner is the system's signature; save `rounded-full` for genuine circular icon chips only.
- **Don't** use a blurred, soft, or ambient-glow shadow anywhere — every shadow in this system has zero blur and zero spread.
- **Don't** add a fourth default action color, a muted corporate neutral palette, or any gradient sheen — the palette is warm paper plus three loud signals, on purpose.
- **Don't** use icon-only navigation or unlabeled controls — this project is visited by kids, and every nav/action element carries a text label alongside its icon.
- **Don't** imply the underlying game is released, downloadable, or purchasable anywhere in copy or UI (see PRODUCT.md) — this is a visual guardrail as much as a content one: no store badges, no "Play Now" affordances styled as real download buttons.
