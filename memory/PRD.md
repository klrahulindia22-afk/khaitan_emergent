# Khaitan EduOps — Product Requirements Document

## Original Problem Statement
Build a website for a School Operating Company called 'Khaitan EduOps Pvt. Ltd.'
Core narrative: transitioning schools from person-dependent to system-driven.
Problem-centered landing highlighting Academic Inconsistency and Promoter Pain
Points, Notion-like flexibility (block-based, clean sidebar navigation), plus
7 Pillars, About and Contact pages. Award-worthy design with framer-motion +
lenis, kinetic hero, numbered manifesto, editorial marquee, parallax, and
premium motion.

## Persona
Primary: School Promoters / K-12 group operators.
Secondary: Heads of School, Coordinators, EduOps buyers.

## Core Requirements
- Landing page with 6 narrative sections + CTA
- Notion-style fixed sidebar navigation (desktop) + drawer (mobile)
- Detailed pages for each of the 7 Pillars (dynamic routing)
- About Us page (principles, leadership, origin)
- Contact page with two forms: Contact and Book-a-Demo
- Backend endpoints to store both submissions in MongoDB
- Award-worthy motion: masked line-by-line hero reveal, parallax, marquee,
  scroll reveals, micro-interactions
- Brand: NEW logo-based palette (see v3 below), Fraunces + Manrope + Nunito

## Implemented (Dec 2025 — v1)
- Frontend: Sidebar, kinetic Hero, Problem, Promoter Pain manifesto, Marquee,
  Compliance Gap, Differentiator, 7 Pillars grid + detail pages, CTA, Footer,
  About page, Contact page (contact + demo forms), Lenis + framer-motion
- Backend: POST/GET /api/contact, POST/GET /api/demo, /api/health; MongoDB
  storage in `contact_submissions` and `demo_submissions`

## Implemented (Feb 2026 — v2)
- Industry Leaders (Voices) section: 2x2 editorial grid, dummy video players
  (SVG placeholders pending real assets), expert names/quotes

## Implemented (Sep 2026 — v3, REBRAND)
- New logo (user-provided: navy + sky-blue leaf mark, "Khaitan EduOps"
  wordmark) processed into transparent assets: `src/assets/logo-full.png`,
  `logo-mark.png`, `logo-white.png`; exported via `src/data/brand.js`
  (LOGO_URL / LOGO_MARK_URL / LOGO_WHITE_URL). Used in Sidebar header, Footer,
  Differentiator ring badge (mark only). Favicon regenerated from the mark.
- Full colour re-theme to match logo (all via CSS vars in index.css):
  paper #ffffff (pure white, per user request), paper-warm #ebf1f7 kept for
  alternating section contrast, ink #0a1f38 (deep navy), navy #104080
  (logo navy),
  accent var `--orange` repurposed to sky blue #1289c6 (+ `--orange-bright`
  #2ba5de for small on-dark labels), shadcn HSL tokens updated.
  SVG illustration constants updated in AboutIllustration / VoiceIllustration /
  PillarIllustration. Verified: zero orange pixels on all pages (iteration_2).
- Earlier v2.5: rich pillar outcomes, contact details update, color founder
  photos, "Read the manifesto" → #differentiator, all demo links → /contact#demo
  with Lenis hash scroll in App.js

## Implemented (Sep 2026 — v3.1, Pillar 08)
- Added Pillar 08 "Online Coaching & Personalised Learning" (slug
  `online-coaching`) from user-provided docx: rich outcomes (Focused Support,
  Better Understanding w/ 7 explanation-mode bullets, Clear Direction for
  Parents, Progress That Updates Itself), 2 modules (Personal AI Tutor,
  Private Tutor), custom SVG illustration (`Online` in PillarIllustration.jsx)
- Updated counts site-wide: Hero "08 PILLARS" + hero grid now 8 cells
  (explore filler cell removed), SevenPillars "The 8 Pillars" / "Eight pillars."
- Verified: hero grid 4x2 clean, 8 pillar cards, /pillars/online-coaching
  detail page (4 outcomes, 2 modules, next-pillar loops to 01)

## Key Architecture Notes
- Theme = CSS vars in index.css; components use utility classes
  (text-ink, bg-paper, text-orange-brand = blue accent). Never hardcode hex.
- App.js manages hash routing → window.__lenis.scrollTo; preserve when adding
  hash links.
- pillars.js `outcomes` = objects {title, body, bullets[], footer}.
- Logo assets: never hotlink customer-assets URLs; use src/assets imports.

## Backlog / Next
- P0: Replace Industry Leaders dummy videos with real footage (user assets)
- P1: Division Landing Pages (7 divisions, like PillarDetail)
- P1: Voices Archive page with role filters
- P1: Wire real email notifications (Resend) on new submissions
- P1: Admin dashboard to review submissions
- P2: Case Studies / Group Portfolio page
- P2: Multilingual toggle (EN / HI)
- P2: Custom cursor + audio ambient toggle
- P2: Analytics + heat-map integration
- Chore: silence framer-motion useScroll non-static-position warning
