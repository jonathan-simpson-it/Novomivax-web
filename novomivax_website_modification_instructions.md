# NOVOMI VAX Website — Modification & Addition Instructions for OpenCode / DeepSeek

**Document purpose:** A structured, prioritised list of all modifications, fixes, and new modules to implement on the existing NOVOMI VAX website, based on client feedback (PDF print review) and the new How It Works science content (PPTX).

**Important note on "cannot see" feedback:** In several places the client says he "cannot see" sections clearly or that images/videos are blurry. This is a limitation of the printed-webpage PDF feedback method he used, NOT a bug in the actual live website. Do not remove or rewrite those sections based on this feedback. The live site renders them correctly. Where the client has requested video/image confirmation, flag those as items to discuss with the client separately — they do not require code changes.

---

## PART A — Bug Fixes & Existing Section Improvements

These are corrections to things already on the site.

---

### A1 — Contact Information Update

**Section:** Contact / Footer

**Change required:**
Update the contact details displayed on the site to match the following:

- **Name:** En He
- **Phone:** +852 84970818 / +86 17648143698
- **Email:** enhe00000@connect.hku.hk

**Implementation notes:**

- Ensure both phone numbers are displayed, separated by a slash or on separate lines
- The email should be a clickable `mailto:` link
- If there is a contact form, these details should appear alongside it as a direct contact option

---

### A2 — New Milestone: May 2026 Champion Award

**Section:** Timeline / Milestones / Our Journey

**Change required:**
Add a new milestone entry to the existing timeline:

- **Date:** May 2026
- **Event:** Champion Award, Great Bay Area Med Techthon, Asia Summit on Global Health

**Implementation notes:**

- This is the most recent milestone and should appear as the latest entry on the timeline (rightmost or bottommost depending on timeline orientation)
- Use the same styling and formatting as existing timeline nodes
- If the timeline uses numbered nodes, this becomes the next number in sequence

---

## PART B — New Modules to Add

These are entirely new sections that need to be built and integrated into the site.

---

### B1 — "How It Works" Science Section (MAJOR NEW MODULE)

**Section ID / anchor:** `#how-it-works` (already referenced in the site URL structure)

**Overview:**
Build a dedicated science explanation section that translates the PPTX slides into a web-native, visual, step-by-step explainer. This is the most important new module. It must be accessible, non-jargon-heavy at the surface level, and visually compelling for investors and clinical collaborators.

The PPTX contains four key conceptual stages. These must be presented as a sequential flow or tab structure.

---

#### Stage 1 — The Problem: Why Cold Tumours Cannot Be Treated

**Heading:** Novel Approach — Label Tumours to Provide Druggable Targets

**Content to communicate (simplified):**
Current immunotherapy fails for "cold" solid tumours because of three core problems:

1. **Heterogeneity, Antigen Escape & Adaptive Resistance** — tumour cells mutate and evade immune targeting
2. **No druggable target** — the immune system has nothing to latch onto
3. **Immunosuppressive Tumour Microenvironment (TME)** — the area around the tumour actively suppresses immune response

**Visual requirement:**

- Use a simple two-column or split layout showing "Current state = blocked" vs "What's needed = a druggable target"
- An animated or illustrated diagram showing a cold tumour with three labelled barrier points is ideal
- Source imagery from the PPTX concept: cold tumour → barriers → immune system unable to act

---

#### Stage 2 — The Solution: One Drug, Multiple Therapeutic Effects

**Heading:** One Drug with Multiple Therapeutic Effects — Druggable Target & Heterogeneity

**Content to communicate (simplified):**
NOVOMI VAX's mRNA vaccine platform addresses all three barriers simultaneously:

- Provides tumours with a **druggable target** (labels them so the immune system can recognise them)
- Overcomes **antigen heterogeneity** — works even when tumour cells vary
- Reprograms the **immunosuppressive TME** to become immune-permissive

**Visual requirement:**

- A three-point graphic showing how one intervention addresses all three problems
- Can use icons or a simple diagram
- The concept of "labelling" the tumour as the key novel mechanism should be visually prominent

---

#### Stage 3 — The Mechanism: Cold Tumour to Hot Tumour Transformation

**Heading:** Turn Cold Tumour into Hot Tumour

**Content to communicate (simplified):**
The vaccine reprograms the tumour microenvironment in three stages:

1. The mRNA vaccine is delivered into the tumour environment
2. It labels tumour cells to make them recognisable to the immune system
3. The immune system is activated — the tumour "heats up" and immune cells infiltrate and attack

**Visual requirement:**

- This is the centrepiece visual of the entire science section
- A **before/after split diagram** showing Cold Tumour (left) and Hot Tumour (right) is strongly recommended
- Should visually communicate the transformation: suppressed/cold → active/immune-infiltrated/hot
- A warm colour gradient (deep blue/grey → warm orange/red glow) can reinforce the "cold to hot" metaphor without being garish
- Label the key elements: TME suppression → mRNA vaccine entry → immune activation → tumour infiltration

---

#### Stage 4 — The Cascade Effect: Abscopal Effect Through Antigen Spreading

**Heading:** Abscopal Effect Through Antigen Spreading

**Content to communicate (simplified):**
Beyond the primary tumour, the platform triggers a cascade of broader immune activation:

1. **Elimination of labelled tumour cells** — the immune system destroys the initially targeted cells
2. **Antigen-spreading** — as tumour cells are destroyed, more tumour antigens are released and recognised
3. **Broader tumour-specific T cell generation** — the immune system learns more targets
4. **Systemic tumour elimination** — the body's immune system can now attack tumours beyond the original treatment site

This is called the "abscopal effect" — treating one area leads to systemic anti-tumour response.

**Visual requirement:**

- A horizontal or vertical flow diagram with four steps: Elimination → Antigen Spreading → Broader T Cells → Systemic Elimination
- Each step should have a short label and a brief description
- Use numbered steps or connected arrows to show the cascade nature of the process

---

#### How It Works — Section Design & UX Requirements

**Layout approach (choose one — recommend option A):**

**Option A (recommended): Vertical scroll narrative**

- Full-width section with the four stages presented as stacked panels
- User scrolls through Stage 1 → 2 → 3 → 4 in order
- Each stage has a left or right alternating text + visual layout
- Use subtle scroll-triggered animations (fade in / slide up) for each panel

**Option B: Horizontal tab navigation**

- Fixed tab bar at the top: Problem | Solution | Mechanism | Cascade
- Each tab reveals the corresponding stage content below
- Good for users who want to jump between sections

**General design rules for this section:**

- Use the existing NOVOMI VAX design system and colour palette
- Keep scientific terminology in small explanatory labels; lead with plain-language headings
- All diagrams should be custom SVG or CSS-based illustrations — do not use placeholder images
- Section heading at the top of the full module: "How It Works" or "Our Science"
- Add a subtle intro paragraph before Stage 1 that provides 1–2 sentences of context: "NOVOMI VAX is developing a broad-spectrum mRNA vaccine platform designed to reprogram the tumour microenvironment, turning 'cold' solid tumours into immunologically 'hot' ones — enabling the body's own immune system to fight back."
- Include a medical disclaimer line at the bottom of this section: "This content is provided for informational and research overview purposes only. It does not constitute medical advice and does not represent approved therapeutic claims."

---

### B2 — Funding / Investment Call-to-Action Module

**Section ID / anchor:** `#funding` or `#invest`

**Overview:**
Add a dedicated funding section to the site. Based on the client feedback review, the existing funding-related content was not clearly visible. This module should be a proper standalone section.

**Content to include:**

**Heading:** Partner With Us / Support Our Mission (use whichever fits the existing tone)

**Body copy:**
NOVOMI VAX is actively seeking investment and collaborative partnerships to advance the platform from early-stage research into clinical development.

**Three content blocks:**

1. **For Investors**
   - We are in active fundraising. We welcome conversations with life science VCs, family offices, and angel investors interested in oncology platform technology.
   - CTA button: "Request Investor Deck" → links to contact form or email

2. **For Pharma / Biotech Partners**
   - We are open to co-development, licensing, and research collaboration discussions with pharmaceutical and biotech companies.
   - CTA button: "Discuss Partnership" → links to contact form or email

3. **For Clinical & Academic Collaborators**
   - We are building our clinical network and welcome enquiries from hospital departments, academic research centres, and translational medicine experts.
   - CTA button: "Explore Collaboration" → links to contact form or email

**Design requirements:**

- Three equal-width cards or columns, one per audience type
- Each card: icon or label at top, heading, short paragraph, CTA button
- Use the primary accent colour for CTA buttons
- Keep the section clean and not over-designed — investor audiences respond better to restraint
- This section can live just before the Contact section at the bottom of the page

---

### B3 — Partners & Collaborators Logo Strip

**Section:** Partners / Collaborators (new, can go after Milestones or before Funding)

**Overview:**
Add a visual trust-building section displaying logos or names of institutional partners and collaborators.

**Content (from the existing site data and milestones):**

Confirmed partners/associations to display:

- University of Hong Kong (HKU)
- Hong Kong Science Park (HKSTP) — Ideation Programme
- HONOGENE
- Zhida Pharmaceutical
- University of Hong Kong–Shenzhen Hospital
- Shenzhen People's Hospital
- HK Techthon+ 2026 (Merit Award)
- UHK Deep Tech 100 Programme
- HKU iDendron Entrepreneurship Club

**Design requirements:**

- Horizontal logo/name strip with soft dividers or spacing between items
- If official logos are not available for all partners, display names in a clean typographic format with consistent styling
- Label the section: "Our Partners & Collaborators" or "Institutional Affiliations"
- Keep background subtle (light surface tone) so this does not compete with other sections
- On mobile: allow horizontal scroll or wrap to 2–3 items per row

---

## PART C — Content Already Correct (No Code Changes Needed)

The following sections were flagged as "cannot see" in the client's PDF feedback. These are rendering issues caused by printing a dynamic/animated webpage to PDF, not actual bugs. **Do not modify these sections unless the client separately confirms a live issue after reviewing the actual website:**

- The three-stage How It Works section details (client could not read in the printed PDF — this is a print/animation rendering issue)
- The "Why It Matters" section content (same issue — print only, not a live bug)
- The Funding section visibility (same issue)

**Action:** Share a screen recording or screenshots of the live site with the client so they can confirm the live version renders correctly.

---

## PART D — Implementation Priority Order

| Priority | Item                                 | Effort | Impact |
| -------- | ------------------------------------ | ------ | ------ |
| 1        | B1 — How It Works science section    | High   | High   |
| 2        | A2 — Add May 2026 milestone          | Low    | Medium |
| 3        | A1 — Update contact details          | Low    | High   |
| 4        | B2 — Funding / Investment CTA module | Medium | High   |
| 5        | B3 — Partners logo strip             | Medium | Medium |

---

## PART E — Technical Implementation Notes for OpenCode / DeepSeek

- **Do not rebuild the site.** Apply all changes as targeted modifications to the existing codebase.
- **Preserve the existing design system** — colours, fonts (Raleway headings + system body), spacing tokens, and component styles must remain consistent.
- **Anchor IDs** — ensure new sections have proper `id` attributes for in-page navigation linking (e.g., `id="how-it-works"`, `id="funding"`, `id="partners"`).
- **Responsive design** — all new sections must work at 375px (mobile), 768px (tablet), and 1280px+ (desktop).
- **Scroll animations** — if the existing site uses scroll-triggered animations, apply the same pattern to new sections. If not, add simple `opacity + translateY` fade-in on scroll for new major sections.
- **No external data fetching** for new sections — all content is static and should be hard-coded or data-driven from local files only.
- **Medical disclaimer** — include the disclaimer text in the How It Works section footer as specified in B1.
- **SVG diagrams** — the How It Works science diagrams should be built as CSS/SVG illustrations or abstract representations, not placeholder images. The actual PPTX diagrams cannot be used directly as they contain proprietary scientific imagery.

You are DeepSeek v4 inside OpenCode.

Task:
Apply targeted fixes to the existing "How It Works" (HIW) section and the Partners section. Do not rebuild these sections. Only make the specific changes described below. Preserve all existing content, design system, colours, typography, and layout for everything not mentioned here.

---

WRITING STYLE RULE — APPLIES TO ALL CODE AND COMMENTS:
Do not use em-dashes (—) or double-dashes (--) anywhere in the codebase, including in HTML text content, CSS comments, JavaScript comments, or any other file. Replace any existing em-dashes or double-dashes with a single hyphen (-) or rewrite the sentence to avoid them entirely. This includes any text strings, aria labels, or placeholder copy. This is a hard rule with no exceptions.

---

HIW SECTION — FIX 1: Stage 01 Diagram (Problem / Current State vs What's Needed)

Current issue:
The diagram has line connectors and labels that are jumbled, overlapping, and poorly spaced. The overall layout feels cramped and unclear.

Required fixes:

- Audit every SVG line, connector, and label in this diagram
- Ensure all lines start and end at clearly defined anchor points — no floating or mid-air lines
- Increase spacing between labelled callout lines so they do not overlap or cross each other
- If lines connect to a central circle/tumour icon, space the connection points evenly around the circumference — do not cluster them all on one side
- Ensure all labels ("Heterogeneity", "No Target", "Suppressive TME") are clearly legible and positioned with sufficient margin from both the diagram element and the diagram boundary
- The "VS" separator and the right-side "Druggable Target" box should be clearly separated from the left diagram — add horizontal spacing between them
- The overall diagram should feel structured and readable, not crowded
- Do not change the diagram's concept or content — only fix layout, spacing, and line positioning

---

HIW SECTION — FIX 2: Stage 02 Diagram (Three Icons / Cards — Druggable Target, Overcomes Heterogeneity, Reprograms TME)

Current issue:
The three vertical icon cards on the left are too tall, and there are stray/random lines appearing above them (likely connector artefacts or SVG overflow).

Required fixes:

- Reduce the height of the three cards so they are more compact and proportionate
- Remove all stray lines or artefacts appearing above the card stack — audit SVG or CSS for any connector lines that extend beyond the intended diagram boundary
- Ensure there is a clean, clearly visible divider or gap between the NOVOMI VAX circle node at the top and the first card — no overlapping
- Tighten the vertical spacing between the three cards slightly so the stack does not feel overly stretched
- Keep the icons, labels, and descriptions within each card — only adjust sizing and spacing
- The right-side text panel (02 heading and bullet points) should align vertically with the centre of the card stack, not the top

---

HIW SECTION — FIX 3: Stage 03 Video / Animation Panel (Cold to Hot Tumour)

Current issue:
There is a text overlay on the video showing "Cold Tumour" and "Hot Tumour" as toggle-style buttons or labels overlaid directly on the video frame. This is not needed and clutters the visual.

Required fix:

- Remove the "Cold Tumour" and "Hot Tumour" text overlay buttons/labels from the video panel entirely
- Also remove the text overlay that reads "Imagine a world where cancer treatment is innovative and effective. Our approach begins with building up systemic immunity using BSTCV intramuscular vaccination." from inside the video frame area if it is an HTML overlay (not part of the video file itself)
- The video or animation should display cleanly without any HTML text overlaid on top of it
- The left-side text content (03 heading, three numbered steps) should remain completely unchanged
- Do not modify the video source file, only remove HTML overlay elements

---

HIW SECTION — FIX 4: Stage 04 Cascade Cards (Abscopal Effect)

Current issue:
The four-card horizontal row (Elimination, Antigen Spreading, Broader T Cells, Systemic Elimination) is too wide. The arrow connectors between cards are taking up disproportionate space.

Required fixes:

- Reduce the width allocated to the arrow connectors between cards — they should be slim and visually minimal (a simple thin arrow, ~20-30px wide)
- The cards themselves should be the dominant visual element, not the spacing between them
- Reduce overall section padding or constrain the container max-width so the four cards fit more naturally without excessive horizontal stretch
- Keep all card content (number badge, bold title, description text) exactly as is
- The bottom caption line ("This is called the 'abscopal effect'...") should remain centred and clearly visible below the cards
- On tablet and mobile, cards should stack or scroll as they currently do

---

PARTNERS SECTION — Full Rebuild of Display Logic

Current issue:
Partners are displayed as static text or basic layout. They need to show actual logos and be presented as a continuously scrolling horizontal reel (marquee/ticker style).

Required changes:

1. Logo assets:
   Source the official logos for each partner from their public websites and save them as local files in the project's assets/images/partners/ directory:
   - University of Hong Kong (HKU): https://www.hku.hk
   - Hong Kong Science Park (HKSTP): https://www.hkstp.org
   - HONOGENE: https://www.hongene.com
   - Zhida Pharmaceutical: source from their official site
   - University of Hong Kong-Shenzhen Hospital: source official logo
   - Shenzhen People's Hospital: source official logo
   - HK Techthon+ 2026: source from competition/organiser site
   - UHK Deep Tech 100 Programme: source from HKU or programme site
   - HKU iDendron Entrepreneurship Club: source from HKU

   If a logo cannot be sourced programmatically, insert a clearly named placeholder image file (e.g., "zhida-placeholder.png") and add a code comment indicating the logo needs to be manually replaced. Do not use text as a substitute for a logo.

2. Scrolling reel implementation:
   - Replace the existing static partner display with a continuously auto-scrolling horizontal logo strip
   - The scroll should be infinite and seamless — duplicate the logo set so the reel loops without a visible gap or jump
   - Scroll direction: left (standard marquee direction)
   - Scroll speed: slow and smooth — approximately 30-40 seconds per full loop
   - Logos should be grayscale by default and transition to full colour on hover
   - All logos should be the same height (approximately 40-48px) and maintain their natural aspect ratio — do not stretch or crop
   - Space logos evenly with consistent horizontal gaps (approximately 60-80px between each logo)
   - The reel should pause on hover (CSS: animation-play-state: paused on hover)
   - No scroll arrows or navigation controls needed
   - The reel should be contained within the section's existing max-width container with overflow: hidden on the outer wrapper

3. Section structure:
   - Keep the existing section heading ("Our Partners and Collaborators" or equivalent)
   - The scrolling reel sits directly below the heading with standard section spacing
   - No other layout changes to this section

4. Accessibility:
   - Add aria-label="Partner logos" to the scrolling container
   - Each logo image should have a descriptive alt text (e.g., alt="University of Hong Kong")
   - Respect prefers-reduced-motion — if the user has reduced motion enabled, display logos in a static wrapping grid instead of the auto-scroll animation

---

GENERAL RULES:

- Do not change any section other than HIW and Partners
- Do not alter any existing content (text, headings, data) in HIW or Partners
- Do not change the colour palette, typography, or spacing tokens
- Do not introduce any new npm packages unless absolutely necessary for the scrolling reel
- Prefer pure CSS animation for the reel over JavaScript where possible
- All changes must be responsive — test at 375px, 768px, and 1280px breakpoints
- After making changes, do a full pass and remove any em-dashes (—) or double-dashes (--) found anywhere in the modified files
