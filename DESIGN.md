You are DeepSeek v4 (code model) using the 2026 prompt guidelines.

Goal:
Build a production-quality, single-page marketing site for a biotech startup called NOVOMI VAX using Astro 6 and TypeScript. The site should feel like a modern, professional biotech site (visual reference: Hongene, clean corporate-science style) and be structured for future expansion, but for now it is one scrolling page at “/”.

High-level requirements:

- Framework: Astro 6
- Language: TypeScript strict mode for all .astro and .ts files
- Styling: Hand-written CSS using custom properties (no Tailwind, no CSS-in-JS)
- Interactivity: Vanilla JS only (no React/Vue/Svelte); minimal, focused on scroll-reveal animations and smooth anchor navigation
- Accessibility: Respect prefers-reduced-motion, good color contrast, semantic HTML, keyboard focus, alt text on media
- Performance: Autoplay hero video with muted inline playback and a static poster image; mostly static content; as little JS as possible

Brand and visuals:

- Primary brand color: #317FB3 (NOVOMI VAX logo blue)
- Palette: white and off-white surfaces, deep navy/slate for dark sections, #317FB3 for accents, optional very subtle warm accent only in micro-details (NOT as a main UI color)
- Typography: two-font system (you can choose appropriate modern, legible web fonts via Google Fonts or Fontshare), with a clear display-vs-body hierarchy
- Visual reference: professional biotech sites (like Hongene) – generous whitespace, clean dividers, minimal decoration, no gradient blobs or neon glows

Project structure:

- Use a standard Astro project layout:
  - src/layouts/BaseLayout.astro
  - src/pages/index.astro
  - src/components/header/HeaderNav.astro
  - src/components/footer/SiteFooter.astro
  - src/components/sections/Hero.astro
  - src/components/sections/WhoWeAre.astro
  - src/components/sections/Mission.astro
  - src/components/sections/HowItWorks.astro
  - src/components/sections/WhyItMatters.astro
  - src/components/sections/FundingPartners.astro
  - src/components/sections/ContactSection.astro
  - src/styles/global.css
  - src/data/siteConfig.ts (site-level config: title, description, nav items, contact email, social links, etc.)
- The home page (index.astro) should import the section components and render them in order, wrapping each in a <section> with an id anchor.

Anchors and navigation:

- Single-page layout with these anchors and sections:
  - #top – Hero
  - #who-we-are – Who We Are
  - #mission – Mission
  - #how-it-works – How It Works
  - #why-it-matters – Why It Matters
  - #funding – Funding and Strategic Partnerships
  - #contact – Contact and footer
- Header navigation:
  - Logo at left, horizontal nav items at desktop, a simple burger menu for mobile
  - Nav links scroll smoothly to section anchors when clicked (use CSS scroll-behavior: smooth plus anchor href attributes)
- Any CTA buttons that reference sections should use href="#section-id" to leverage the same scrolling behavior.

Hero section implementation:

- Use a full-width or split-layout hero at the top of the page
- Background media:
  - Use the Pexels medical video: https://www.pexels.com/video/close-up-footage-of-transferring-liquid-medicine-into-syringe-8486075/
  - Implement as a <video> element with:
    - autoplay
    - muted
    - loop
    - playsinline
    - controls="false"
  - Add a static poster image and a dark overlay so the white headline text has strong contrast
  - Provide an accessible fallback: if the video fails to load, show a static background image or gradient
- Content overlay:
  - Left-aligned text block with eyebrow, main heading, supporting paragraph, and two buttons
  - Primary CTA button scrolls to #contact
  - Secondary CTA button scrolls to #how-it-works

Scroll-reveal animation:

- Implement a single, reusable scroll-reveal system with IntersectionObserver:
  - JS script in a small module or inline in BaseLayout or index.astro
  - Observe elements with a class like .reveal-on-scroll
  - When they enter the viewport, add a class .is-visible
  - CSS:
    - Start state: opacity: 0; transform: translateY(16px)
    - Visible state: opacity: 1; transform: translateY(0); transition: 250–400ms
- Apply .reveal-on-scroll to section wrappers or key text blocks (headings and main text), not every line of text
- Respect prefers-reduced-motion:
  - In CSS, use @media (prefers-reduced-motion: reduce) to disable transitions and ensure elements are shown immediately
  - In JS, bail out early (do not set up IntersectionObserver) if prefers-reduced-motion is true

Section layouts and styling:

- Who We Are (#who-we-are):
  - Two-column layout on desktop, stacked on mobile
  - Left: heading and intro paragraph
  - Right: list of 3–4 key facts
  - Use subtle horizontal dividers and sparse lines inspired by Hongene’s about menu; keep it minimal
- Mission (#mission):
  - Use a light-tinted background band and a centered or slightly offset white card
  - Card contains heading, one mission statement paragraph, and three bullet points
  - The card should visually float above the background using a soft shadow and border radius
- How It Works (#how-it-works):
  - Section heading plus a short intro
  - 3 “step” cards with numbers (1–3) and text placeholders
  - Use a responsive grid: horizontal row on desktop, stacked on small screens
  - Cards should have consistent heights, simple borders, and small icon or number indicators
- Why It Matters (#why-it-matters):
  - Dark blue/navy background, white text
  - One main paragraph plus optional secondary paragraph
  - Optionally allow for future “stat blocks” (e.g., 2–3 numeric highlights) in a flex row
- Funding and Strategic Partnerships (#funding):
  - High-contrast but clean CTA section
  - Heading, 1–2 paragraphs, 2 buttons
  - Primary button: “Contact the Team” → scrolls to #contact
  - Secondary button: “Discuss Partnership” → mailto: link or also #contact
- Contact & Footer (#contact):
  - Contact block with:
    - Heading (“Contact”)
    - Short text
    - Email address (from siteConfig)
    - Optional simple form:
      - Name
      - Email
      - Message
  - Footer with:
    - Logo or wordmark placeholder
    - Copyright and year
    - Short disclaimer sentence (e.g., “Information provided is for general corporate overview only and does not constitute medical advice or product claims.”)
  - Form can be static (no backend) for now; just structure the HTML cleanly so a future /api/contact endpoint can be added

CSS and design system:

- Put global styles in src/styles/global.css and import from BaseLayout.astro
- Use CSS custom properties for:
  - Colors (primary, neutrals, dark backgrounds, accent)
  - Typography sizes (small, base, large, hero)
  - Spacing scale (4px-based)
  - Border radii and shadows
- Set font stacks via custom properties (e.g., --font-body, --font-display)
- Implement light/dark-mode support optionally, but main design should look great in the default (light) mode
- Ensure high text/background contrast, particularly on the hero and the dark “Why It Matters” band

Implementation details / constraints:

- Use semantic HTML: <header>, <nav>, <main>, <section>, <footer>, <h1>–<h3>, <p>, <button>, <a>, etc.
- Only one <h1> on the page (in the hero), then use <h2> for section headings
- Make all interactive elements keyboard accessible and provide focus styles
- Use CSS scroll-behavior: smooth on html/body to enable anchor smooth scrolling
- Do not introduce heavy dependencies (no GSAP, no large UI libraries, no React)
- Keep JavaScript small and in service of:
  - Scroll-reveal
  - Optional mobile nav toggle
- Leave copy text as placeholders (but with realistic, professional wording) – a separate prompt will be used to refine text later

Deliverables:

- A complete Astro project structure as described above
- All components wired up so index.astro renders the one-page layout with working anchors, hero video, and scroll-reveal text
- Clean, readable code with sensible file and component names
- All content clearly separated into either siteConfig or section components so that copy can be easily edited afterward
