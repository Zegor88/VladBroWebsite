# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is family and friends of Vlad and his dad, plus Vlad himself — the site is shared with a close circle to showcase the indie game they are building together, not (yet) a public fan audience or a wide marketing push. Kids are among the actual visitors, so tone and content should stay kid-appropriate (see Accessibility & Inclusion).

## Product Purpose

An interactive web portal and survival-guide companion for **Survival Nights**, an indie game created by Vlad & Dad. It exists to bring the game's world to life ahead of release: a 16-chapter survival diary/story reader, a monster dossier, a craftable bunker/workbench, and a mini-games hub (shadow-detector game, survival quiz, monster creator). Success is a rich, playable, shareable universe that makes the in-progress game feel real and fun to explore with family/friends.

## Positioning

Not a marketing landing page for an app store listing — it's a lore/world-building companion site built ahead of the game itself, which a generic "game teaser page" template could not truthfully claim. The mechanism is depth of interactive content (full chapter reader, monster tactical cards, crafting sequences, mini-games) rather than a pitch for a download that doesn't exist yet.

## Operating Context

- The underlying game, Survival Nights, is still in development and has no release, store listing, or download link (no Steam/itch.io/app store presence exists). The site must not imply the game is playable or purchasable anywhere.
- Full i18n: English (default), Русский, and Srpski (`sr-Latn`), with browser language persistence (`src/i18n/`).
- Content lives largely in `src/i18n/locales/*` and `src/data/gameData.ts` — chapters, monster dossier entries, crafting/workbench data, and mini-game copy.
- Hosting/CI: Vercel and Cloudflare Pages (SPA), per `vercel.json` and `public/_redirects`.

## Capabilities and Constraints

- React 19 + TypeScript, Vite 6, Tailwind CSS 4 ("Neo-brutalism / playful paper aesthetic" per README), Lucide icons, Motion for animation, Canvas Confetti, Web Audio API sound synthesis.
- Existing interactive features: BookReader (16-chapter diary), MonsterGallery/MonsterCreator, BunkerWorkbench + BunkerVaultModal (crafting, Apex Flare launch sequence), GamesHub (ShadowDetectorGame, SurvivalQuiz), keyboard-hotkey easter eggs (`DANCE`, `NOAH`, `GAME`, `APEX`, `VAULT`).
- No backend/CMS observed — content is static/bundled; no analytics, accounts, or payment flows found.
- Undecided: whether/when the site will need to support a real release link, broader public audience, or marketing push once the game ships.

## Brand Commitments

- Name: **Survival Nights**, credited "Created with ❤️ by Vlad & Dad."
- Lore and character canon are fixed and must be preserved, not reinvented: the four core monsters — Mimic, Fastener/Krep, Wrecker, and Hunter — their behaviors, weaknesses, loot, and the 16-chapter story content already written in `src/i18n/locales/`.
- Visual identity already committed in code: neo-brutalism / playful paper aesthetic (per README and existing Tailwind implementation) — treat as incumbent design authority per [[EXISTING_VISUAL_SYSTEM]] guidance, not a decision to remake from scratch.

## Evidence on Hand

- Full chapter text, monster dossier content, crafting/workbench copy, and quiz content already exist in `src/i18n/locales/en.ts` (and ru/sr-Latn equivalents) and `src/data/gameData.ts` — real content, not placeholder.
- No testimonials, press, benchmarks, external store pages, or release evidence exist; future work must not fabricate a release date, store availability, or player reviews.

## Product Principles

1. Preserve canon: monster identities, chapter narrative, and crafting lore in the locale files are settled facts, not material to improvise over.
2. Never imply the game is released, downloadable, or purchasable — it is in development with no distribution channel yet.
3. Keep content and tone kid-appropriate: this is a family project visited by children, so scary/dark elements stay playful rather than graphic, and copy stays readable for a young audience.
4. The site's value is depth and interactivity (reading, crafting, playing, discovering easter eggs), not a conversion funnel — there is no download/purchase CTA to design toward yet.

## Accessibility & Inclusion

Primary and incidental audience includes children (family visitors). Copy, reading level, and any intense/scary content in the monster dossier or story chapters should stay age-appropriate and avoid graphic detail, consistent with existing tone.
