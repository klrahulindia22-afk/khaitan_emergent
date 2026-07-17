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
- Brand: dark ink navy + cream paper + orange accent, Fraunces + Manrope fonts

## Implemented (Dec 2025 — v1)
- Frontend
  - Sidebar (desktop + mobile drawer) with active-section tracking
  - Kinetic Hero with masked reveal, parallax spotlight image, ambient rings
  - Problem section (3 cards)
  - Promoter Pain Points (numbered manifesto rows on dark ink)
  - Editorial Marquee (slow, italic Fraunces)
  - Compliance & Volume Gap (data-viz block, parallax card)
  - Differentiator (EdTech vs ERP vs EduOps table)
  - 7 Pillars grid with clipped-corner cards, per-pillar detail page
  - CTA section + Footer (mega wordmark)
  - About page (origin, principles, leadership grid)
  - Contact page (contact form + demo booking form)
  - Lenis smooth scroll, framer-motion animations
- Backend
  - POST /api/contact, GET /api/contact
  - POST /api/demo, GET /api/demo
  - GET /api/health, GET /api/
  - MongoDB storage in `contact_submissions` and `demo_submissions`

## Backlog / Next
- P1: Wire real email notifications (Resend) on new submissions
- P1: Admin dashboard to review submissions
- P2: Add Case Studies / Group Portfolio page
- P2: Add multilingual toggle (EN / HI)
- P2: Custom cursor + audio ambient toggle for award submission
- P2: Analytics + heat-map integration
