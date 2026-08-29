# Portfolio — Single Source of Truth

> This document is the single source of truth for building the portfolio website.
> Every section, content decision, constraint, and deferred item is recorded here.
> Do not invent content not listed here. If something is marked DEFERRED, leave a placeholder and move on.
> If something is marked TBD, ask the owner before building.

---

## 1. Owner

| Field | Value |
|---|---|
| Name | [YOUR NAME] — replace before build |
| GitHub | https://github.com/HyperZx2O |
| Codeforces | [ADD LINK] |
| LinkedIn | [ADD LINK] |
| Email | [ADD EMAIL] — this is the primary contact |
| Institution | Islamic University of Technology (IUT), Dhaka |
| Degree | BSc in Computer Science & Engineering |

---

## 2. Goals & Audience

**Primary goals (all equally weighted):**
- Land internships and jobs
- Showcase work for hackathons and competitions
- Establish a general online presence

**Audiences:**
- Recruiters and HR
- Technical interviewers
- Fellow students and peers
- Hackathon judges and organizers

**Tone:** Creative and unconventional. Not corporate. Not generic. Personality should be visible in copy, micro-interactions, and section framing — not just the contact page.

---

## 3. Tagline & Hero Identity

**Primary tagline:**
> Serial hackathon survivor.

**Subtitle (shown directly under tagline):**
> CSE @ IUT · ML · Full-stack · Competitive Programming

These two lines must both appear on the hero. The tagline is the hook. The subtitle answers "what do you actually do" for the 3-second visitor.

**Hero structure:**
- Name (large)
- Tagline
- Subtitle
- Short intro paragraph (2–3 lines max, written in first person, conversational)
- Expandable "More about me" section with a longer personal story
- Quick-access links: GitHub, Codeforces, LinkedIn, Email

---

## 4. About Me

**Structure:** Short visible intro + expandable detail panel.

**Short intro (visible by default):** 2–3 sentences. Cover: who you are, what you do, what drives you. Written in your voice — not a resume summary.

**Expanded section (hidden behind toggle):** Longer personal story. Cover: IUT CSE journey, why you build things, what you're chasing, hackathon culture, and anything that makes you human. This is NOT a resume. It should read like a person talking.

> CONTENT NEEDED: Owner must write both the short intro and expanded version. Do not generate filler copy. Leave clearly marked placeholders.

---

## 5. Featured Projects (Homepage)

Displayed on the main page as a highlight reel. 2–3 projects maximum.

**Selection criteria:** Only projects where a real case study can be written — problem, what was built, owner's role, outcome. These are not just cards; they are stories.

**Status:** DEFERRED — owner will decide which projects are featured. Leave a placeholder section with 2–3 empty case-study card slots clearly labeled `[FEATURED PROJECT — TBD]`.

**Case study card structure (per project):**
- Project name
- One-line description
- Problem it solved
- What was built
- Owner's role in the team
- Tech stack (tags)
- Outcome (competition result, impact, etc.)
- Links: GitHub, Live demo (if available)
- Screenshot or demo gif

---

## 6. Projects Page (Full)

Dedicated `/projects` page listing all projects.

**Layout:** Filterable card grid.

**Filter tags:** ML, NLP, Web, Hackathon, Personal — use whatever tags fit the actual projects.

**Card structure (standard, non-featured):**
- Project name
- Short description (1–2 lines)
- Tech stack tags
- GitHub link
- Live link (if available)
- Screenshot (if available)

**Mix of presentation styles:**
- Major hackathon projects → link through to a full case study page or expanded modal
- Smaller projects → standard card only

> CONTENT NEEDED: Owner must supply full project list with descriptions, links, and tags. Do not invent projects.

---

## 7. Hackathons & Competitions

Dedicated section (not buried inside projects). Presented as a timeline or grid — treat it as a track record.

**Per entry:**
- Event name
- Date
- Team size and owner's role
- What was built (one line)
- Result (placement, shortlist, participation — be honest, no inflation)
- Event logo (if available)

**Known entries to include:**
- SUST CSE Carnival 2026 Codex Community Hackathon → ContextForge (multi-agent AI knowledge graph system)
- অলীকবচন Datathon 2.0 → Bengali hallucination detection (owner's role: ML Engineer, M2)

> CONTENT NEEDED: Owner must supply the full list of hackathons and datathons with accurate details.

---

## 8. Competitive Programming

**Display:** Embedded visual — Codeforces rating badge or activity heatmap (Codeforces has a public API).

**Do not oversell.** Let the numbers speak. Show the embed, link to the profile, nothing more.

**Links:** Codeforces profile link.

> CONTENT NEEDED: Owner must supply Codeforces username/profile link.

---

## 9. Guides Section

**Section name:** Guides

**Framing copy (shown at top of section):**
> "I write guides when I figure something out worth sharing."

This signals it's ongoing, not a one-off dump.

**Current guides (2):**

### Guide 1 — Translucent Win11
- **Title:** Translucent Win11
- **Description:** A complete guide to giving Windows 11 a glassmorphism makeover — from system-level transparency tools to app-by-app configurations, all in one place.
- **GitHub:** https://github.com/HyperZx2O/Translucent-Win11
- **Stars:** 88 ⭐ — display this prominently on the card
- **Note:** Star count is the social proof here. Make it visible.

### Guide 2 — Agentic Development Workflow
- **Title:** Agentic Development Workflow
- **Description:** A phase-locked, prompt-driven system for AI-assisted hackathon development. Spec it, plan it, code it, review it — no more "what are we building again" at 3am.
- **GitHub:** https://github.com/HyperZx2O/agentic-development-workflow
- **Live site:** https://hyperzx2o.github.io/agentic-development-workflow/
- **Stars:** 5 ⭐

**Implementation note:** Do not duplicate guide content on the site. Link directly to GitHub. Pull title, description, and star count only. GitHub is the source of truth for the guides — the portfolio just surfaces them.

**Third guide:** DEFERRED. Owner will write it when ready. Leave the section extensible — adding a third card should require editing one data file only, not touching layout.

---

## 10. Photography Gallery

**Dedicated full section** — not a moodboard, not a sidebar. A proper gallery.

**Layout:** Bento grid with deliberate size variation. Must use at least 3 cell sizes (large, medium, small). A uniform grid is not acceptable — it must look intentional, not algorithmic.

**Curation:** No genre categories. Owner will supply photos. Show all of them.

**Minimum photos at launch:** 12–16. If owner cannot supply this many before launch, hold the section and launch without it rather than launching with a sparse grid.

**No captions required** unless owner wants them.

> CONTENT NEEDED: Owner supplies all photos. Do not use placeholders or stock images.

---

## 11. Resume

**Two forms:**
1. Downloadable PDF — visible button in the nav or hero area, not buried
2. Dedicated `/resume` page — resume rendered as a webpage

**Constraint:** Both must stay in sync. The PDF is the source of truth. The on-site page renders the same content. Do not let them diverge.

> CONTENT NEEDED: Owner supplies resume PDF.

---

## 12. Contact Section

**Primary action:** Email — big, bold, click-to-copy.

**Tone:** Fun and quirky. Not a boring form. Some direction: fake terminal prompt, oversized email with a witty line, "send a message in a bottle" framing — whatever fits the design theory. The aesthetic wraps the function; the function is always clear.

**Secondary links shown underneath email:**
- GitHub
- LinkedIn
- Codeforces

**No contact form required.** Email is sufficient.

---

## 13. 404 Page

Not an afterthought. The 404 page is a personality moment — design it with the same design theory as the rest of the site. It should feel like it belongs to the same person who made everything else.

> Owner has a design theory document locally. Apply it here too.

---

## 14. Update Strategy (Build Constraint)

This is a constraint for whoever builds the site, not an afterthought.

**Projects and hackathons:** Store in a JSON or markdown data file. Adding a new project or hackathon entry must require editing one file only — never touching layout, components, or markup. Build it data-driven from day one.

**Guides:** Pull title, description, and star count from GitHub. Do not store guide content locally on the site. Link out to GitHub.

**Resume:** Owner updates the PDF. The on-site `/resume` page should be easy to update alongside it.

**Goal:** Owner should be able to update the site after any hackathon or new project in under 5 minutes without touching code.

---

## 15. Navigation

Suggested nav items:
- Home
- Projects
- Hackathons
- Guides
- Gallery
- Resume
- Contact

Keep it minimal. No nested dropdowns. Mobile-friendly.

---

## 16. What NOT to Build

Do not include any of the following:
- Skills bar charts or skill percentage meters — meaningless. Skills show through projects.
- Testimonials section
- "Objective" or "Summary" paragraph block (resume filler)
- Hobbies section (cut entirely)
- Any filler placeholder copy — if content is missing, mark it clearly as `[PLACEHOLDER — OWNER TO SUPPLY]`

---

## 17. Open Items & Decisions Log

| Item | Status | Owner action needed |
|---|---|---|
| Featured projects selection (2–3) | DEFERRED | Owner decides which projects get case studies |
| Full project list with descriptions | NEEDED | Owner supplies |
| Full hackathons list with details | NEEDED | Owner supplies |
| Short intro + expanded about me copy | NEEDED | Owner writes |
| Codeforces profile link | NEEDED | Owner supplies |
| Email address | NEEDED | Owner supplies |
| LinkedIn link | NEEDED | Owner supplies |
| Photography — minimum 12–16 photos | NEEDED | Owner supplies |
| Resume PDF | NEEDED | Owner supplies |
| Third guide | DEFERRED | Owner writes when ready |
| Tagline refinement | DEFERRED | Owner revisit post-launch if needed |
| Design theory document | LOCAL | Owner has it — apply to all sections including 404 |

---

## 18. Acceptance Criteria

The portfolio is done when:

- [ ] Hero shows name, tagline, subtitle, short intro, expandable about, and quick links
- [ ] Featured projects section exists with 2–3 case study cards (or clearly marked TBD placeholders)
- [ ] `/projects` page lists all projects, filterable by tag
- [ ] Hackathons section shows as timeline or grid with all entries
- [ ] Codeforces embed is live and linked
- [ ] Guides section shows both guides with star counts, framed as ongoing
- [ ] Photography bento grid shows minimum 12 photos with deliberate size variation
- [ ] `/resume` page renders resume content; PDF download button is present
- [ ] Contact section has bold click-to-copy email as primary action
- [ ] 404 page exists and matches design language
- [ ] Adding a new project requires editing one data file only
- [ ] Site is mobile responsive
- [ ] No filler copy, stock images, or skills bar charts anywhere
