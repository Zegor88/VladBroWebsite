# Survival Nights — Interactive Web Portal 🎮

An interactive universe guide, survival book reader, and tactical hub for the upcoming indie game **Survival Nights** (created by Vlad & Dad).

![Survival Nights Banner](src/assets/images/hero_vlad_bunker_1787032082197.jpg)

---

## 🌟 Key Features

- 🌍 **Full i18n Localization:** Instant seamless switching between **English** (default), **Русский**, and **Srpski (`sr-Latn`)** with browser language persistence.
- 📖 **16-Chapter Survival Diary:** Interactive story reader chronicling Geek's adventure and survival journey on the mystery island.
- 🐙 **Interactive Monster Dossier:** Tactical cards for the 4 core creatures (Mimic, Fastener/Krep, Wrecker, and Hunter) with weaknesses, behaviors, loot, and survival tips.
- 🔨 **Bunker & Workbench:** Interactive item crafting, multi-tier workbench upgrades, and the Apex Flare signal rocket launch sequence.
- 🎮 **Mini-Games Hub:**
  - **Mimic Shadow Detector:** Flashlight-guided shadow detection game featuring animated stone throws, mimic escape sequences, and victory effects.
  - **Survival Quiz:** Island knowledge challenge with immediate feedback.
  - **Monster Creator:** Custom creature synthesizer with configurable parts and roar audio.
- 🚪 **Bunker Vault Teaser & Secret Terminal:** Interactive keypad lock modal and keyboard hotkey easter eggs (`DANCE`, `NOAH`, `GAME`, `APEX`, `VAULT`).

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS 4 (Neo-brutalism design style with playful paper aesthetic)
- **Icons & Animation:** Lucide React, Motion, Canvas Confetti
- **Audio:** Web Audio API sound synthesizer
- **Hosting / CI:** Vercel / Cloudflare Pages SPA

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ or 22+
- npm or pnpm

### Installation & Run:
```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev
```

### Type Checking & Building:
```bash
# Run TypeScript type check
npm run lint

# Build production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 Deployment (Vercel & Cloudflare Pages)

The project is pre-configured for continuous automatic deployments:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **SPA Fallback Routing:** Configured in `public/_redirects` and `vercel.json`

---

## 📄 License

Created with ❤️ by Vlad & Dad. All rights reserved.
