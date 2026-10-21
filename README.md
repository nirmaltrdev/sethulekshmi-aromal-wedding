# Sethulekshmi & Aromal — Royal Kerala Wedding Website

An extraordinary, bespoke digital wedding experience crafted for the matrimony of **Sethulekshmi S** & **Aromal Kurup**.

- **Auspicious Date**: Sunday, October 25, 2026 (Malayalam Era: 08, Thulam, 1201)
- **Sacred Muhurtham**: 12:08 PM – 12:30 PM IST (Nakshatram: Uthrattathi)
- **Primary Ceremony Venue**: Santhi Auditorium, Eliyarackal, Konni, Pathanamthitta, Kerala
- **Project Destination**: C:\\Personal\\WeddingWebsite

---

## 1. Creative Direction & Aesthetic Philosophy

Inspired by luxury editorial print publications, high-end destination wedding cinematography, and sacred Kerala temple heritage:

- **Bespoke Color Palette**: Warm Ivory (#FAF8F5), Deep Temple Obsidian (#100C0B), Antique Kasavu Gold (#D4AF37, #C5A059), Sacred Vermilion Maroon (#7A1D20), and Silk Charcoal (#1F1A18).
- **Typography Pairing**: *Cinzel Decorative* & *Cormorant Garamond* for regal editorial titles, paired with *Italianno* for calligraphic flourishes and *Plus Jakarta Sans* for modern, effortless readability.
- **Ambient Acoustic Architecture**: Authentic Indian classical Tanpura drone in D fundamental accompanied by gentle temple chimes, synthesized natively via the **Web Audio API** (zero external dependencies, zero copyrighted downloads, non-intrusive muted-by-default).
- **Subtle Motion Design**: Staggered typography reveals, organic floating Jasmine & Marigold petals with an on/off toggle, smooth modal zooms, and high-performance hardware-accelerated transitions.

---

## 2. Authentic Wedding Data & Lineage

All details have been extracted directly from the official wedding invitation materials (C:\\Users\\dell\\Downloads\\invitation):

- **The Bride**: **Sethulekshmi S**
  - *Parents*: Mrs. Bindhu M G & Mr. Suresh Madhavan Nair
  - *Ancestral Residence*: Suresh Bhavan, Achencovil, Kollam District, Kerala
  - *Grandparents*: Late Smt. Ponnamma & Late Shri Madhavan Nair; Smt. Radhamani & Shri Gangadhara Kurup
- **The Groom**: **Aromal Kurup**
  - *Parents*: Mrs. Jayasree & Mr. Santhosh Kurup
  - *Ancestral Residence*: Thempamkoottathil (H), Iravon, Konni, Pathanamthitta District, Kerala
  - *Family*: Renowned Kurup lineage of Iravon
- **Celebration Itinerary**:
  1. **Pre-Wedding Blessings & Family Gathering**: Saturday, Oct 24, 2026 | 6:00 PM onwards | Suresh Bhavan, Achencovil
  2. **The Sacred Wedding Ceremony (Muhurtham)**: Sunday, Oct 25, 2026 | 12:08 PM – 12:30 PM (Guest arrival from 11:00 AM) | Santhi Auditorium, Eliyarackal, Konni
  3. **The Traditional Kerala Sadhya**: Sunday, Oct 25, 2026 | 12:45 PM – 3:00 PM | Santhi Auditorium Dining Hall, Konni
  4. **Evening Reception & Dinner Feast**: Sunday, Oct 25, 2026 | 6:30 PM onwards | Thempamkoottathil (H), Iravon, Konni
- **Host Contacts**:
  - Mr. Suresh Madhavan Nair: +91 94470 73184
  - Mr. Santhosh Kurup: +91 9447141979

---

## 3. Photographic Asset Manifest

- **Source Collection**: C:\\Users\\dell\\Downloads\\selected pics (42 high-resolution 50MP Sony ILCE-1M2 RAW files).
- **Web Optimization**:
  - 40 unique couple photographs curated and downsampled to Full HD progressive JPEGs (1920x1280, ~300-600 KB each) and responsive thumbnails (600px, ~40-70 KB each).
  - Saved under public/assets/images/gallery/ and public/assets/images/gallery/thumb/.
  - Full metadata manifest preserved in public/assets/images/photo_manifest.json.
- **Authentic Invitation Card**: High-resolution scan preserved at public/assets/images/invitation_card.jpg and viewable via the interactive in-site modal.

---

## 4. Technology Stack

- **Runtime & Framework**: React 19 + TypeScript + Vite 8
- **Styling Architecture**: Custom Pure CSS Luxury Design System (src/styles/luxuryTheme.css & src/index.css)
- **Animation & Motion**: Motion for React (motion/react)
- **Interactive FX**: canvas-confetti (for guestbook blessings & RSVP submissions)
- **Audio Synthesis**: Native Browser Web Audio API (src/utils/audioSynthesizer.ts)
- **Icons**: Lucide React

---

## 5. Local Setup & Execution

### Prerequisites
- Node.js (v18 or newer)
- npm

### Installation & Development
`ash
# Navigate to the project
cd C:\Personal\WeddingWebsite

# Install dependencies (already pre-installed)
npm install

# Start development server
npm run dev
# The website will be available at http://localhost:5180 (or your configured port)
`

### Production Build & Preview
`ash
# Compile TypeScript and bundle production assets
npm run build

# Preview production build locally
npm run preview
`

---

## 6. Key Interactive Features

1. **Royal Envelope Prologue**: A gold-embossed wax seal opening ritual that transitions into the cinematic wedding experience.
2. **Authentic Invitation Modal**: Zoom into the actual physical invitation card artwork with high-definition rendering.
3. **Live Muhurtham Countdown**: Dynamic countdown dials to Sunday, October 25, 2026 at 12:08 PM IST, with calendar export options (.ics file generation and direct Google Calendar link).
4. **Editorial Master Gallery**: 40 authentic couple photos categorized into *All Curated*, *Portraits*, *Ceremony*, *Traditions*, and *Candids*. Includes a full-screen lightbox with keyboard arrow navigation, swipe gestures, and image counter.
5. **Interactive RSVP Generator**: Collects guest names, attendance, guest count, and selected events, generates instant pre-formatted WhatsApp RSVP messages to the fathers, and persists submissions in browser localStorage.
6. **Digital Guestbook & Blessings Wall**: Guests can leave personalized blessings and emoji reactions with festive confetti celebrations.
7. **Accessibility & Responsive Polish**: Full keyboard navigation, visible gold focus rings, prefers-reduced-motion fallbacks, and tailored layouts across mobile (375px), tablet, and desktop (1920px+).
