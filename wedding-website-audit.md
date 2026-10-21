# Wedding Website — Comprehensive Current-State Audit Report

**Audited Project:** Sethulekshmi & Aromal Wedding Website  
**Local Project Path:** `C:\Personal\WeddingWebsite`  
**Git Remote:** `https://github.com/nirmaltrdev/sethulekshmi-aromal-wedding.git`  
**Current Branch / Commit:** `main` @ `50125fc` (*"bug fix"*)  
**Target Production Domain:** `sethulekshmiwedsaromal.vercel.app`  
**Audit Date & Environment:** October 21, 2026 | Node.js v20.20.2 | npm 10.8.2 | Windows x64  
**Audit Mode:** Strict Inspection-Only (zero existing project files modified or deleted)

---

## 1. Executive Summary

A comprehensive forensic inspection, code review, static analysis, production build verification, and real-browser visual audit (desktop, tablet, mobile) were conducted on the local codebase.

### Key Highlights
- **Overall Quality & Aesthetics:** The website delivers a visually rich, bespoke wedding experience tailored to Kerala Hindu temple traditions. It features a Royal Emerald & Kasavu Gold palette (`#08201D`, `#D6B265`), authentic Malayalam invocations, traditional Lord Ganesha iconography, custom SVG monogram crests, high-resolution couple photography, interactive countdown timers, client-side calendar generators, and audio playback.
- **Build & Compilation Health:** The project compiles with **0 TypeScript errors** (`tsc -b && vite build` completed in 8.82s) and passes linting with **0 errors and 0 warnings** under `oxlint`.
- **Critical Production Defects Discovered:**
  1. **Mobile Viewport Disabled:** In the most recent commit (`50125fc`), `<meta name="viewport" ...>` in `index.html` (lines 5–6) was **commented out**. On real iOS Safari and Android Chrome devices, this causes the page to render at a 980px desktop viewport and scale down, breaking mobile-responsive layouts.
  2. **Broken Telephone Links:** In `src/components/CinematicEpilogue.tsx` (lines 473 and 516), the displayed phone numbers for the bride's father (`+91 94470 73184`) and groom's father (`+91 9447141979`) have hardcoded placeholder `tel:` URLs (`tel:+919447123456` and `tel:+919447234567`). Tapping to call dials fake numbers.
  3. **Architectural Data Decoupling:** The application contains two detailed data files (`src/data/weddingContent.ts` and `src/data/weddingData.ts`), but **neither is imported by any UI component**. All names, dates, times, and venue strings are hardcoded directly within individual TSX component files or `src/data/curatedAssets.ts`.
  4. **Pre-Wedding Event Conflict:** `src/components/CelebrationEvents.tsx` (lines 316–317) displays the Pre-Wedding venue as `Mavelil House, Elakolloor(po) Konni` at `3:00 PM Onwards`, but its built-in `.ics` calendar generator (lines 58–67) downloads `Suresh Bhavan, Achencovil, Kollam` starting at `6:00 PM IST` (`12:30 UTC`).

---

## 2. Actual Technology Stack & Project Structure

### 2.1 Installed Runtime, Framework, and Tooling
Verified from `package.json`, `node -v`, and `npm -v`:
- **Node.js:** `v20.20.2`
- **npm:** `10.8.2`
- **Framework & Core:** React `19.3.1`, React DOM `19.3.1`
- **Language & Type Checking:** TypeScript `~6.0.3` (configs: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`)
- **Build Tool / Dev Server:** Vite `^8.3.4` with `@vitejs/plugin-react` `^6.1.2`
- **Linter:** Oxlint `^1.88.0` (`.oxlintrc.json` configured)
- **Styling:** Vanilla CSS (`src/styles/luxury-theme.css`, `src/index.css`)
- **Icons:** `lucide-react` `^1.60.0`
- **Installed but Unused Dependencies:**
  - `motion` `^14.4.0` (zero imports in codebase)
  - `canvas-confetti` `^1.9.4` and `@types/canvas-confetti` `^1.9.0` (zero imports in codebase)

### 2.2 Git Status & Commit History
- **Branch:** `main` (clean working tree, up to date with `origin/main`)
- **Latest Commit:** `50125fc` (*"bug fix"*, Wed Oct 21 20:38:11 2026 +0530)
- **Recent Commits:**
  - `50125fc` bug fix (commented out viewport meta tag)
  - `eba058a` mobile number changes
  - `730f9a9` invitation page create mobile Responsiveness
  - `b3d44c3` invitation page create
  - `8ebe22b` location changes and music playing issuse
  - `2ebb8d6` song change
  - `3f37bae` hero section moble response and location change
  - `e4c96e6` error fix
  - `2808282` ui changes
  - `5bc66c8` ui

### 2.3 Verified Directory Layout
```
C:\Personal\WeddingWebsite\
├── index.html                   # HTML entry point (contains commented-out viewport tag)
├── package.json                 # Dependencies & scripts
├── vite.config.ts               # Vite configuration (react plugin)
├── tsconfig.json / .app / .node # TypeScript configurations
├── .oxlintrc.json               # Oxlint configuration
├── builder.py                   # Python base64 file writer script
├── process_photos.py            # Python photo downsampling/manifest script
├── scripts/
│   ├── fast_transpose_photos.py
│   ├── make_favicon_png.py
│   ├── make_preview.py
│   └── process_corrected_photos.py
├── public/
│   ├── favicon.svg, favicon.ico, favicon.png, favicon-32x32.png
│   ├── gallery_preview.html
│   └── assets/
│       ├── audio/
│       │   ├── weddingsong.mp3                 # Active track (720.9 KB, "Thandhaay Song")
│       │   ├── seetha_kalyana_vaibhogame.mp3   # Unused track (4.74 MB)
│       │   └── README.md
│       ├── fonts/
│       │   ├── england.woff (37.4 KB)
│       │   └── england.ttf (66.5 KB)
│       └── images/
│           ├── lord_ganesha_gold.png (27.3 KB)
│           ├── lord_ganesha.png (47.9 KB)
│           ├── sa_monogram_logo.png (973.1 KB)
│           ├── SA.png (2.12 MB, cartoon couple portrait)
│           ├── konni_kerala_landscape.jpg (1.00 MB)
│           ├── kerala_royal_sadya.jpg (994.5 KB)
│           ├── mandap_venue.jpg (1.12 MB)
│           ├── rings.jpg (773.9 KB)
│           ├── invitation_card.jpg (202.3 KB)
│           ├── photo_manifest.json (13.0 KB)
│           └── gallery/
│               ├── 41 full-res web JPEGs (photo_01 to photo_41)
│               └── thumb/ (41 matching thumbnail JPEGs)
└── src/
    ├── main.tsx                 # React DOM root entry
    ├── App.tsx                  # Master page container
    ├── index.css                # Global styles (imports luxury-theme.css)
    ├── App.css                  # ORPHANED: Unused default Vite boilerplate
    ├── components/
    │   ├── RoyalInvitationGate.tsx  # Initial full-screen opening modal
    │   ├── HeroSection.tsx          # Hero cover, invocation, countdown bar
    │   ├── UnionSpread.tsx          # Family lineage & invitation text
    │   ├── CelebrationEvents.tsx    # Itinerary cards, live countdown, calendar DL
    │   ├── VisualJourney.tsx        # 6-plate photo gallery & fullscreen lightbox
    │   ├── DestinationGuide.tsx     # Santhi Auditorium logistics & map toggle
    │   ├── CinematicEpilogue.tsx    # Closing medallion, gratitude, host directory
    │   ├── SoundtrackControl.tsx    # Floating audio toggle with equalizer
    │   └── WeddingMonogram.tsx      # Reusable vector SVG monogram crest
    ├── data/
    │   ├── curatedAssets.ts     # ACTIVE: Photo maps used by UI components
    │   ├── curatedPhotos.json   # Processed photo list
    │   ├── weddingContent.ts    # DORMANT: Not imported by any UI component
    │   └── weddingData.ts       # DORMANT: Not imported by any UI component
    ├── styles/
    │   ├── luxury-theme.css     # ACTIVE: Core design tokens, fonts, utility classes
    │   └── luxuryTheme.css      # ORPHANED: Legacy file, never imported
    ├── types/
    │   └── wedding.ts           # Interfaces (only imported by dormant data files)
    └── utils/
        ├── audioManager.ts      # Central HTMLAudioElement singleton
        └── calendar.ts          # ORPHANED: Utility functions, never imported
```

---

## 3. Complete Page and Section Inventory

The website is an uninterrupted Single Page Application (SPA). There are no secondary client-side routes (e.g., `/gallery` or `/rsvp`).

| Route / Section | Source Component | Purpose & Visible Content | Interactive Elements | Implementation Status | Observed UI / Responsive Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **0. Initial Gate** | `src/components/RoyalInvitationGate.tsx` | Full-screen modal overlay blocking page. Shows Lord Ganesha icon, `ഓം ശ്രീ ഗണേശായ നമഃ`, S&A circular logo, names, and golden lotus flourish. | "Open Invitation" button | **Implemented & Verified** | Fades out on click over 850ms, unlocks audio playback. Well-centered on mobile and desktop. |
| **1. Hero Section** | `src/components/HeroSection.tsx` | High-fashion couple hero photo (`photo_06_jis09198.jpg`), Ganesha invocation, couple names, date/muhurtham/venue pill bar, invitation text, scroll cue. | Clickable venue link to Google Maps, scroll down anchor (`#union`). | **Implemented & Verified** | Face protection spacer keeps couple visible on mobile; text anchors below faces cleanly. |
| **2. Sacred Union** | `src/components/UnionSpread.tsx` | Lineage of bride (Achencovil) and groom (Konni), ancestral residence details, photo diptych (landscape + inset portrait), formal guest invitation card. | S&A Monogram SVG crest, link to `#union`. | **Implemented & Verified** | 2-column asymmetric grid collapses into a single column on tablet/mobile cleanly. |
| **3. Celebration Events** | `src/components/CelebrationEvents.tsx` | 3 event cards: Pre-Wedding Gathering, The Sacred Muhurtham, and Royal Kerala Sadya Feast. Dress codes, live countdown timer. | "Save Date (.ICS)" client download, "Google Calendar" external link, "Get Directions" navigation links. | **Implemented with Content Bugs** | Live countdown ticks every second. Button styling clean. Venue conflict between card and ICS generator. |
| **4. Visual Journey** | `src/components/VisualJourney.tsx` | Curated exhibition gallery displaying 6 plates with title, plate number, lighting notes, and captions. | Click plate to open full-screen Lightbox. Next/Prev arrows, close button, `Esc` / Arrow keyboard events. | **Implemented & Verified** | Lightbox opens smoothly with backdrop blur. Arrow keys navigate accurately between plates 1–6. |
| **5. Destination Guide** | `src/components/DestinationGuide.tsx` | Santhi Auditorium address, GPS coords, transit guides (Chengannur/Thiruvalla railway, TRV/COK airports, valet parking). | "Panorama" / "Satellite Map" toggle button, Google Maps GPS link. | **Implemented & Verified** | Toggle switches between scenic landscape image and embedded Google Maps iframe reliably. |
| **6. Cinematic Epilogue** | `src/components/CinematicEpilogue.tsx` | Grand circular medallion (`SA.png`) with animated dashed ring and cardinal stars, gratitude message, family host directory, back-to-top button. | "Top" button (smooth scroll), Host telephone links (`tel:`). | **Implemented with Critical Bug** | Visuals look regal. Critical bug: `href="tel:..."` links point to fake dummy numbers. |
| **7. Floating Audio Widget** | `src/components/SoundtrackControl.tsx` | Fixed bottom-right pill showing track status, 3-bar animated equalizer, volume icon. | Play / Pause toggle button. | **Implemented & Verified** | Synchronized with `audioManager.ts`. On mobile, sits close to the bottom-right and can overlap footer elements. |

---

## 4. Design System, Typography, and Asset Inventory

### 4.1 Typography Stack
Configured in `index.html` (lines 20–28) and `src/styles/luxury-theme.css` (lines 50–57):
- **Calligraphy / Script Headings:** `Alex Brush`, `Great Vibes`, `England Hand DB` (loaded via CDN and preloaded via `/assets/fonts/england.woff`).
- **Editorial Headings:** `Playfair Display`, `Cormorant Garamond`, `Cinzel Decorative`.
- **Body & UI Text:** `Plus Jakarta Sans` (300, 400, 500, 600, 700, 800), `Syne`.
- **Malayalam Invocations:** `Noto Serif Malayalam`, `Manjari`, `Anek Malayalam` font-family fallbacks.

### 4.2 Color Palette & Design Tokens
- **Emerald & Teal:**
  - Deepest Canvas: `#08201D` (`--teal-deep`)
  - Royal Midtone: `#0C2B26` (`--teal-royal`)
  - Elevated Surface: `#123C35` (`--teal-surface`) / `#1B4F46` (`--teal-elevated`)
  - Accent / Borders: `rgba(168, 197, 189, 0.22)`
- **Luminous Cream:**
  - Background Pure: `#FAF7F0` (`--cream-pure`)
  - Warm Alabaster: `#F2ECE0` (`--cream-warm`)
  - Text Muted: `#4A635D` (`--cream-muted`)
- **Kasavu Gold:**
  - Champagne Gold: `#D6B265` (`--gold-champagne`)
  - Kasavu Traditional: `#C5A059` (`--gold-kasavu`)
  - Luminous Highlight: `#F3E6C8` (`--gold-luminous`)
  - Deep Bronze Gold: `#9E7B35` (`--gold-deep`)

### 4.3 Asset Audit
- **Photography Assets:**
  - All 41 curated photos exist in both Full HD web versions (`public/assets/images/gallery/`) and thumbnails (`public/assets/images/gallery/thumb/`).
  - `src/data/curatedAssets.ts` accurately references existing files without broken image links.
  - Large file size warning: `public/assets/images/SA.png` is **2.12 MB** and `public/assets/images/sa_monogram_logo.png` is **973 KB**. Neither is compressed or converted to WebP/AVIF.
- **Audio Assets:**
  - `public/assets/audio/weddingsong.mp3` (720.9 KB) — **Active, verified working**.
  - `public/assets/audio/seetha_kalyana_vaibhogame.mp3` (4.74 MB) — **Unused orphan asset**.
- **Vector Assets:**
  - Favicons: SVG, 32x32 PNG, apple-touch-icon, and ICO are present in `public/`.
  - Motifs: High-detail SVG lotus dividers, Ganesha emblems, and yantra geometry are rendered inline without external network dependencies.
- **Orphaned / Unused Files:**
  - `src/App.css`: 185 lines of default Vite template CSS.
  - `src/styles/luxuryTheme.css`: 97 lines of camelCase CSS containing unused classes (`.glass-luxury`, `.kasavu-divider`, `.text-gold-gradient`).
  - `src/utils/calendar.ts`: 55 lines of standalone calendar functions bypassed by inline code in `CelebrationEvents.tsx`.

---

## 5. Wedding Content and Event Details

### 5.1 Currently Displayed Wedding Content (Live UI)
- **Bride:** Sethulekshmi S (Daughter of Mrs. Bindhu M G & Mr. Suresh Madhavan Nair, Suresh Bhavan, Achencovil, Kollam)
- **Groom:** Aromal Kurup (Son of Mrs. Jayasree & Mr. Santhosh Kurup, Thempamkoottathil (H), Iravon, Konni, Pathanamthitta)
- **Date:** Sunday, October 25, 2026 (08, Thulam, 1201 Malayalam Era)
- **Muhurtham:** 12:08 PM – 12:30 PM IST (Guest arrival from 11:00 AM)
- **Primary Venue:** Santhi Auditorium, Eliyarackal, Konni, Pathanamthitta, Kerala 689691
- **Host Contacts:**
  - Bride's Father: Mr. Suresh Madhavan Nair (`+91 94470 73184`)
  - Groom's Father: Mr. Santhosh Kurup (`+91 9447141979`)

### 5.2 Content Inconsistencies & Mojibake Flags
1. **Pre-Wedding Venue Conflict:**
   - `src/components/CelebrationEvents.tsx` (lines 316–317): Venue is `Mavelil House`, Location is `Elakolloor(po) Konni, Pathanamthitta`, Time is `3:00 PM Onwards`.
   - `src/components/CelebrationEvents.tsx` (lines 58–67, ICS Download): Venue is `Suresh Bhavan, Achencovil, Kollam, Kerala`, Start is `12:30 UTC` (6:00 PM IST).
   - `src/data/weddingContent.ts` (lines 57–58): Venue is `Suresh Bhavan`, Location is `Achencovil, Kollam, Kerala`, Time is `6:00 PM onwards`.
2. **Corrupted Text in Dormant Data File:**
   - In `src/data/weddingContent.ts` (line 23): `malayalamTitle: "ଲுତுଯକ்ଷ்ମି & ଅଲோମଶଲ"` (corrupted Odia/Tamil mojibake instead of Malayalam `സേതുലക്ഷ്മി & ആരോമൽ`).
   - In `src/data/weddingContent.ts` (line 29): `sanskritShloka: "ମଂଗ़ଂଠ भदभुनं ୵ୟୟ્ે୆: | ..."` (corrupted character encoding).
   - In `src/data/weddingContent.ts` (lines 161 & 169): typo key `titestamp` instead of `timestamp`, and strange emoji reactions (`💨`, `🚰`, `☨`).
3. **Missing Evening Reception:**
   - Mentioned in `README.md` (line 39) as *"Evening Reception & Dinner Feast: Sunday, Oct 25, 2026 | 6:30 PM onwards | Thempamkoottathil (H), Iravon, Konni"*, but completely omitted from the live UI in `CelebrationEvents.tsx`.

---

## 6. Audio and Music Player Verification

### 6.1 Audio Architecture
- **Implementation:** `src/utils/audioManager.ts` instantiates a shared singleton `HTMLAudioElement`.
- **Audio Source:** `/assets/audio/weddingsong.mp3` (size: 720,906 bytes, format: MP3).
- **Settings:** `volume = 0.65`, `loop = true`, `preload = 'auto'`.
- **Listener Pattern:** Components subscribe to state changes via `subscribeToPlaybackState(listener)`.

### 6.2 Browser Autoplay Compliance
- **Policy Handling:** Modern browsers block unmuted audio autoplay without prior user interaction.
- **Verification Result:**
  - On page load, `audio.play()` is **not** called without user interaction.
  - The `RoyalInvitationGate` requires the user to click "Open Invitation" (`src/components/RoyalInvitationGate.tsx`, line 17), which immediately executes `await playSoundtrack()` within the user gesture callback.
  - **Browser Test:** Audio starts playing smoothly upon clicking "Open Invitation", satisfying autoplay restrictions on Chrome, Edge, and Safari without throwing browser autoplay exceptions.
- **Controls & UI Feedback:**
  - Clicking the floating widget toggles `pauseSoundtrack()` and `playSoundtrack()`.
  - Pause retains playback position (`currentTime`). Resume continues from that point.
  - Playing state renders an animated 3-bar equalizer and displays "Thandhaay Song".
  - Idle state has a subtle glowing pulse animation (`soundtrackGlowPulse`).
- **Discrepancy:** The track is named "Wedding Song" in the filesystem, "Thandhaay Song" in `src/components/SoundtrackControl.tsx` (line 68), and commented as "Seetha Kalyana Vaibhogame" in `src/App.tsx` (line 46).

---

## 7. Navigation, Interactions, and Accessibility

### 7.1 Interactive Elements Inventory
1. **Modal Dialogs:**
   - `RoyalInvitationGate`: Accessible dialog with `role="dialog"`, `aria-modal="true"`, and `aria-label="Royal Wedding Invitation"`.
   - `VisualJourney Lightbox`: Clickable modal backdrop, close button (`X`), Prev/Next navigation, keyboard `Escape`, `ArrowLeft`, `ArrowRight` listeners with cleanup on unmount.
2. **External Links:**
   - Venue Google Maps links in Hero, Celebration Events, and Destination Guide all have `rel="noopener noreferrer"` and `target="_blank"`.
   - Google Calendar URLs correctly encode title, details, and location.
3. **Calendar Download (`.ics`):**
   - Implemented via dynamic `Blob` generation with standard RFC 5545 VCALENDAR syntax. Downloads filename: `<Event_Title>_Sethulekshmi_and_Aromal.ics`.
4. **Satellite Map Toggle:**
   - Switches between image panorama and Google Maps `iframe` via local React state (`useState<'panorama' | 'map'>('panorama')`).

### 7.2 Accessibility (a11y) Findings
- **Focus Rings:** Buttons include `:focus-visible` styles with gold outline rings.
- **Text Contrast:** Luminous Cream sections use dark green `#08201D` text on `#FAF7F0` (contrast ratio > 12:1, exceeding WCAG AAA). Dark teal sections use `#FFFFFF` or `#D4E2DE` on `#08201D` (contrast ratio > 9:1, exceeding WCAG AAA).
- **Reduced Motion:** `src/styles/luxuryTheme.css` (lines 89–96) defines `@media (prefers-reduced-motion: reduce)`, but this file is **not imported**; `src/styles/luxury-theme.css` does **not** include a `prefers-reduced-motion` override for keyframes like `spinSlow` or `soundtrackEqBounce`.

---

## 8. Responsive Design & Browser Testing Results

Testing was performed live using an automated browser agent against `http://localhost:5173/`:

| Viewport Size | Device Profile | Visual & Functional Observations |
| :--- | :--- | :--- |
| **1280 x 800** | Desktop Laptop / PC | Initial `RoyalInvitationGate` renders centered and symmetrical. Clicking "Open Invitation" begins audio playback and smoothly reveals the Hero section. All 6 sections align cleanly. Lightbox opens full screen with blurred backdrop and navigates across all 6 plates without console errors. |
| **768 x 1024** | Tablet (iPad Portrait) | Two-column cards (Diptych in UnionSpread, Event cards in CelebrationEvents) adjust gracefully. Event photo frames maintain a 4:3 aspect ratio. Header titles wrap without horizontal overflow. |
| **390 x 844** | Mobile (iPhone 12/13/14/15) | The Hero section face protection spacer (`min-height: clamp(80px, 18vh, 180px)`) keeps the couple's faces clear of text overlays. Ganesha header scales down proportionally. Countdown cards wrap into a 4-column mini-grid. **Overlap issue:** Floating soundtrack button overlaps or crowds the "Explore Journey" chevron at the bottom of the viewport. |
| **Real Mobile Viewports** | Mobile Safari / Chrome on iOS & Android | **CRITICAL RISK:** Because `<meta name="viewport" ...>` is commented out in `index.html` (lines 5–6), real physical phones bypass responsive CSS media queries and render at a 980px virtual desktop canvas, rendering text microscopic unless the tag is restored. |

---

## 9. Build, Lint, Type-Check, and Test Results

Non-destructive automated verification commands executed:

### 9.1 Linter (`oxlint`)
- **Command:** `npm run lint` (`oxlint`)
- **Exit Code:** `0`
- **Output:**
  ```
  Found 0 warnings and 0 errors.
  Finished in 70ms on 18 files with 116 rules using 8 threads.
  ```

### 9.2 TypeScript & Production Bundle (`tsc -b && vite build`)
- **Command:** `npm run build`
- **Exit Code:** `0`
- **Build Duration:** `8.82s`
- **Bundle Output:**
  ```
  dist/index.html                   2.32 kB │ gzip:  1.06 kB
  dist/assets/index-DOFwCPz8.css    5.84 kB │ gzip:  1.98 kB
  dist/assets/index-C_Fk1Ma6.js   338.55 kB │ gzip: 95.38 kB
  ✓ built in 8.82s
  ```
- **Diagnostics:** Zero compile-time warnings, zero broken imports, zero type errors.

### 9.3 Test Suite
- **Configured Tests:** No test runner (such as Vitest or Jest) is configured in `package.json` (`scripts` contains only `dev`, `build`, `lint`, and `preview`).

---

## 10. Deployment and Domain Findings

- **Local Git Remote:** `https://github.com/nirmaltrdev/sethulekshmi-aromal-wedding.git`
- **Target Domain:** `sethulekshmiwedsaromal.vercel.app`
- **Local Deployment Configs:** No `vercel.json` file or `.vercel` folder exists in the workspace.
- **Build Output Directory:** Default Vite production output is `./dist`.
- **Vercel Integration Inference:** Standard Vercel deployment with Vite presets will automatically detect `npm run build` and serve from `dist`. If GitHub integration is enabled on Vercel for this repository, pushes to branch `main` trigger automatic deployments. The production bundle compiled above is ready for static deployment.

---

## 11. Comprehensive Issues Matrix

| Priority | Issue Description | Source Location | Impact |
| :---: | :--- | :--- | :--- |
| **CRITICAL** | **Viewport meta tag commented out** | `index.html` (lines 5–6) | On mobile devices, browsers render at 980px desktop resolution and scale down, completely breaking mobile responsiveness on physical phones. |
| **CRITICAL** | **Fake telephone numbers in `tel:` links** | `src/components/CinematicEpilogue.tsx` (lines 473 & 516) | Users tapping the call buttons on mobile dial dummy numbers (`+919447123456`, `+919447234567`) instead of the fathers' actual numbers. |
| **HIGH** | **Pre-Wedding venue & time conflict** | `src/components/CelebrationEvents.tsx` (lines 58–67 vs 316–317) | Card displays `Mavelil House, Elakolloor(po) Konni` at `3:00 PM`, while the downloaded `.ics` calendar file contains `Suresh Bhavan, Achencovil, Kollam` at `6:00 PM`. |
| **HIGH** | **Architectural data decoupling** | `src/data/weddingContent.ts`, `src/data/weddingData.ts` | Central data models are completely ignored by the UI. Any content edits made to these data files fail to reflect on the live website. |
| **HIGH** | **Uncompressed & heavy image assets** | `public/assets/images/SA.png` (2.12 MB), `public/assets/images/sa_monogram_logo.png` (973 KB) | Unnecessarily slows mobile initial asset loading and consumes guest data bandwidth. |
| **MEDIUM** | **Unused 4.74 MB audio asset** | `public/assets/audio/seetha_kalyana_vaibhogame.mp3` | Large media file bundled in `public/` that is never played, bloating the repository and build artifact. |
| **MEDIUM** | **Unused installed npm dependencies** | `package.json` (lines 14–16) | `motion` (14.4.0) and `canvas-confetti` (1.9.4) are installed in `dependencies` but never imported anywhere in `src/`. |
| **MEDIUM** | **Orphaned / dead code files** | `src/styles/luxuryTheme.css`, `src/App.css`, `src/utils/calendar.ts` | Dead code adds maintenance confusion; `prefers-reduced-motion` in `luxuryTheme.css` is never active. |
| **MEDIUM** | **Corrupted Malayalam & Sanskrit text** | `src/data/weddingContent.ts` (lines 23 & 29) | Text contains Odia/Tamil mojibake instead of valid Malayalam unicode strings. |
| **MEDIUM** | **Floating audio button overlaps UI on mobile** | `src/components/SoundtrackControl.tsx` (lines 50–54) | The fixed audio pill crowds the "Explore Journey" scroll indicator on viewports below 420px width. |
| **LOW** | **Audio title naming discrepancies** | Multiple files | File is `weddingsong.mp3`, widget displays `Thandhaay Song`, `App.tsx` comment says `Seetha Kalyana Vaibhogame`. |
| **LOW** | **Omission of Evening Reception** | `README.md` (line 39) | Reception at Thempamkoottathil (H) is listed in documentation but missing from the itinerary section. |

---

## 12. Missing Information & Inaccessible Checks

The following items cannot be verified from the local workspace files alone:
1. **Live Vercel Dashboard Settings:** Vercel environment variables, analytics, speed insights, SSL certificate configuration, and automated preview deployments cannot be inspected without access to the remote Vercel dashboard.
2. **True Mobile Hardware Audio Context:** While simulated mobile viewports in Chromium confirm autoplay trigger and audio playback, iOS Safari's native low-power mode audio policy requires manual confirmation on an actual iPhone device.
3. **Canonical Decision on Pre-Wedding Location:** Confirmation from the wedding couple/family is needed regarding whether the pre-wedding blessing will occur at **Mavelil House, Konni** or **Suresh Bhavan, Achencovil**, and whether the start time is **3:00 PM** or **6:00 PM**.

---

## 13. Recommended Next Steps (Prioritized Roadmap)

When you and ChatGPT are ready to plan and implement fixes, the recommended order of execution is:

### Phase 1: Immediate Critical Bug Fixes (High Impact, Low Effort)
1. **Restore Viewport Meta Tag:**
   Uncomment `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />` and `<meta charset="UTF-8" />` in `index.html`.
2. **Correct Phone Call Links in Host Directory:**
   In `src/components/CinematicEpilogue.tsx` (lines 473 & 516), change `href="tel:+919447123456"` to `href="tel:+919447073184"` and `href="tel:+919447234567"` to `href="tel:+919447141979"`.
3. **Reconcile Pre-Wedding Gathering Venue & Time:**
   Align the venue name, location, time string, countdown target date, and `.ics` download in `src/components/CelebrationEvents.tsx`.

### Phase 2: Architectural Data Binding & Cleanup (Medium Effort)
4. **Connect Centralized Data Store:**
   Refactor `src/components/CelebrationEvents.tsx`, `src/components/UnionSpread.tsx`, and `src/components/CinematicEpilogue.tsx` to consume verified details from a single canonical source (e.g. `src/data/weddingData.ts`), eliminating hardcoded duplicates and mojibake in `src/data/weddingContent.ts`.
5. **Delete Dead / Orphaned Code:**
   Remove unused stylesheets (`src/App.css`, `src/styles/luxuryTheme.css`) and merge the `prefers-reduced-motion` block into `src/styles/luxury-theme.css`. Remove or wire up `src/utils/calendar.ts`.
6. **Prune Unused Dependencies:**
   Run `npm uninstall motion canvas-confetti @types/canvas-confetti` (or implement the confetti / motion features if desired).

### Phase 3: Performance, Asset Optimization & UI Polish (Refinement)
7. **Compress Heavy Graphic Assets:**
   Convert `public/assets/images/SA.png` (2.12 MB) and `public/assets/images/sa_monogram_logo.png` (973 KB) to modern WebP/AVIF formats, reducing file size by ~80% without visible quality loss.
8. **Remove Unused Audio Asset:**
   Delete `public/assets/audio/seetha_kalyana_vaibhogame.mp3` (saving 4.74 MB of repository/bundle weight).
9. **Refine Mobile Z-Index & Spacing:**
   Add responsive padding or hide the Hero "Explore Journey" scroll arrow on short mobile viewports to prevent collision with the floating audio player widget.

---
*End of Current-State Audit Report.*
