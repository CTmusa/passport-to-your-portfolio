
# Claudia Musa — Product Portfolio

A warm, human, editorial site built to feel senior and globally credible. Earthy palette, refined type, generous whitespace, personality-forward without being cutesy. Content rewritten from your PDF into outcome-led PM narratives (Problem → Action → Result), using only facts you already provided.

## Site map

```text
/                     Home / Hero + featured work + skills strip + CTA
/about                Story, working style, skills, certifications
/work                 Case studies index (2 cards for now, room to grow)
/work/lawma           LAWMA Billing & Enumeration case study
/work/softsuite       SoftSuite HR case study
/resume               On-page resume summary + download PDF
/contact              Email, LinkedIn, phone, simple contact block
```

Each route has its own `head()` metadata (title, description, og:title/description) — critical for recruiters sharing links.

## Design direction

- **Palette:** warm off-white background `#F7F3EC`, deep espresso ink `#2A2320`, terracotta accent `#C56A4A`, muted sage `#7A8B6F`, warm sand `#E8DBC6`. Not beige-boring — the terracotta carries all CTAs and stat highlights.
- **Type:** display serif with personality (Fraunces or Instrument Serif) paired with a clean humanist sans (Inter Tight or DM Sans). Large, confident headlines; generous line-height on body.
- **Layout:** editorial grid, asymmetric section breaks, a single portrait moment on the home hero, understated motion (fade+rise on scroll, no gimmicks).
- **Motif:** thin rule dividers + small kicker labels ("01 / CASE STUDY", "SELECTED WORK") to give it that "senior PM personal site" feel.
- **Dark mode:** yes, mirrored palette.
- **Mobile-first:** every layout designed for phone recruiters first.

## Content plan (rewrites)

I'll rewrite your PDF task lists into outcome-led narratives using only your existing facts. Example transformation:

- PDF: *"Facilitated and tracked all Scrum activities…"*
- Site: *"Ran sprint ceremonies end-to-end for a 3-PSP pilot, unblocking a launch that generated ₦20M+ in the first three months."*

Each case study follows this structure:

1. **Snapshot** — role, timeline, team, tools, product link
2. **Context** — what the organization does, why the product mattered
3. **Problem** — the four pain points, illustrated with icons
4. **My role & process** — what I owned, in narrative form
5. **Outcomes** — headline metrics as large stat blocks (₦20M+, 300+ estates, 15+ staff trained, 100+ user interviews, 50% cost reduction, 20% bug reduction)
6. **Reflection** — 2-3 lines of what I learned / would do next

## Assets

- Portrait from PDF (page 1 / page 2) — copied into `src/assets/`, used on Home hero + About + Contact.
- LAWMA + SoftSuite product screenshots from PDF — copied into `src/assets/`, used as case study covers.
- Logo marks + skill icons from PDF — extracted where useful; anything low-res or awkward gets replaced by clean SVG/Lucide equivalents.

## Technical notes

- TanStack Start file-based routes under `src/routes/`.
- Tailwind v4 tokens defined in `src/styles.css` (@theme + @theme inline for shadcn). Warm palette + custom `--font-display` / `--font-sans`.
- Fonts loaded via `<link>` in `__root.tsx` head (never `@import` a URL in CSS on this stack).
- Motion via `framer-motion` for scroll reveals only.
- SEO: per-route `head()`, JSON-LD `Person` schema on `/`, `og:image` on the leaf routes that have real cover images.
- Resume: place a PDF you send me at `public/claudia-musa-resume.pdf` (or I generate a print-styled `/resume` page you can Save-as-PDF from). Confirmed below.

## Open items before I build

1. **Resume PDF** — do you want to (a) upload the current PDF and I link it, or (b) let me generate a print-optimized `/resume` page you can Save-as-PDF from the browser? I'll default to (b) if you don't decide, since it stays in sync with the site.
2. **Contact form** — start with mailto/LinkedIn only (no backend), or wire a working form (needs Lovable Cloud enabled for submissions)? I'll default to mailto + LinkedIn for v1.
3. **Writing section** — you picked "Full portfolio" (no blog) — I'll leave a slot in the nav commented out so we can add it later without a redesign.

If those defaults are fine, say "go" and I'll build. Otherwise tell me which to change.
