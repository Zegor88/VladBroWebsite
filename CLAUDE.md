# CLAUDE.md — VladBroWebsite (Public Web Portal)

This repo is the **public interactive web portal** for *Survival
Nights* — a survival diary, monster dossier, and mini-games hub for the
game co-designed by Влад (10 y.o.) & dad. It is a standalone React app;
it does not contain the Godot game or the planning/design documents.

## The 3-repo ecosystem

| Repo | Purpose | Where |
|---|---|---|
| **[VladBroProject](https://github.com/Zegor88/VladBroProject)** | GDD, architecture, epics/stories, UX specs, narrative canon — source of truth for game content and story | sibling repo |
| **[VladBroGame](https://github.com/Zegor88/VladBroGame)** | Godot 4.7.1 game source | sibling repo |
| **VladBroWebsite** (this repo) | Public web portal, deployed | this checkout |

Locally these three may live as sibling/nested directories, but each is
its own git repo with its own remote and history — this repo is
gitignored from VladBroProject on purpose.

**Before writing new narrative/monster/item copy for the site**, check
VladBroProject's canon and GDD first — this repo's `src/data/gameData.ts`
should reflect that source of truth, not invent parallel lore. If a
requested change conflicts with what's in VladBroProject, flag it rather
than silently diverging.

## Tech stack

- **React 19** + **TypeScript**, bundled with **Vite 6**.
- **Tailwind CSS 4** — neo-brutalism / playful paper aesthetic (see
  `DESIGN.md` in this repo for the full visual spine).
- Icons: **lucide-react**. Animation: **motion**. Confetti:
  **canvas-confetti**. Audio: Web Audio API synth (no audio files).
- i18n: English (default), Русский, Srpski (`sr-Latn`), browser-persisted.
- Hosting: Vercel / Cloudflare Pages, SPA.

## Commands

```bash
npm install       # install deps
npm run dev       # dev server, port 3000
npm run lint      # tsc --noEmit type check
npm run build     # production build to dist/
npm run preview   # preview production build locally
```

## In-repo docs worth reading first

- **`README.md`** — feature overview (survival diary, monster dossier,
  mini-games: Mimic Shadow Detector, Survival Quiz, Monster Creator;
  bunker vault keypad + keyboard easter eggs).
- **`PRODUCT.md`** — product framing.
- **`DESIGN.md`** — visual system (colors, type, components) for this
  site specifically; not the same document as VladBroProject's game
  `DESIGN.md`/`EXPERIENCE.md` — those describe the *game's* UI, this
  describes the *website's*. Keep them conceptually related (same
  universe, same brand) but don't assume they're identical specs.

## Git workflow

Solo/family project, no PR review process. Branch for a chunk of work,
commit, fast-forward-merge into `main`, push. Keep this repo's history
scoped to the website — game mechanics/design changes belong in
VladBroProject, game code changes belong in VladBroGame.
