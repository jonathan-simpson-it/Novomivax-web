# NOVOMI VAX — Website Progress Report

## What the site is about

NOVOMI VAX is a Hong Kong biotech startup building an mRNA vaccine platform to help the immune system attack solid tumours. The website is a single-page overview covering who they are, the team, their mission, how the science works, their timeline, partners, and how to get in touch.

This progress report follows the initial build and your feedback, which has now been implemented. Below is what's still outstanding.

---

## What's still needed

### Would you like to provide?

1. **Team photos (4)** — Each person's card currently shows a grey silhouette. If you have headshots for Prof. Jiandong Huang, Renhao Li, En He, and Dr. Jinquan Liu, those can be dropped in.

2. **Official partner logos** — Some partner logos may be placeholder images rather than official versions. Worth checking and swapping in the real files.

3. **Logo and favicon image assets** — The browser tab icon and site logo would benefit from properly sized and optimised versions (e.g. a small square favicon, a transparent header logo at the right dimensions).

### Would you like to review?

4. **All the words on the site** — The copy (headlines, bios, mission text, science explanations, disclaimers) was drafted for you and lives in one config file. You'll likely want to read through and tweak or approve everything.

5. **Mission section photo** — The current image is a stock photo of a microscope. You might prefer to use a real photo from your lab.

6. **Stage 3 video** — There's a video in the "How It Works" section that you may want to sign off on.

### Would you like to set up?

7. **Custom domain** — The site is ready for `https://novomivax.com`, but your DNS and GitHub Pages custom domain need to be configured.

8. **Social sharing previews** — No Open Graph or Twitter Card meta tags are set up yet, so shared links won't show a nice preview.

9. **Font check** — The Raleway font is self-hosted as a slim subset. Worth checking the rendering and deciding if you want a richer font setup.

10. **GitHub Pages deployment** — The site is built and ready at `https://jonathan-simpson-it.github.io/Novomivax-web/` but has not yet been pushed to GitHub Pages (the GitHub Actions workflow on `master` needs a first push to trigger deployment).

---

## Future scope

These would be separate pieces of work at additional cost.

### Marketing & Content

- **News / article blog** — A lightweight blog would help with SEO and give investors, partners, and collaborators a reason to keep coming back. You could post research updates, conference round-ups, team news, and industry commentary without relying on external platforms.

- **Newsletter signup** — A simple email capture form to build a mailing list. Useful for sharing investor updates, grant announcements, and milestone news directly with people who want to follow your progress.

- **Press kit page** — Downloadable logos, team bios, boilerplate copy, and key facts in one place. Makes life easier for journalists, conference organisers, and potential partners who need assets quickly.

- **Case studies / research briefs** — Plain-language summaries of the science written for non-specialists like investors, board members, or patient advocacy groups. Builds trust and helps people understand why your approach matters.

### Investor Relations

- **Pitch deck viewer** — An embedded or download-gated slide deck so investors can browse the pitch directly from the site without a back-and-forth email chain.

- **Investor portal** — A password-protected area hosting due diligence documents, financials, detailed clinical strategy, and governance materials. Keeps sensitive information secure but accessible to the right people, and saves you emailing PDFs to every interested party.

### Conversions & Growth

- **Real email sending (contact form)** — Replace the current `mailto:` link with a proper server-side form handler so messages land reliably in your inbox without opening an email client. More professional and less friction for enquirers.

- **Careers / jobs page** — Even a simple "We're hiring — get in touch" section signals growth and ambition. As the team expands, you'll have somewhere to point candidates and attract scientific and clinical talent.

### Reach & Audience

- **Multilingual support (Chinese / English)** — With your Hong Kong base and mainland China partnerships (Shenzhen hospitals, Zhida Pharma), a bilingual site would broaden your reach for both investors and collaborators in the region.

### Operations

- **CMS for self-editing content** — A simple content management system so you can update text, bios, and milestones yourself without needing to contact us each time. Good once the site content stabilises and you just want to tweak things.

- **Analytics & cookie consent** — Understand who's visiting, which sections they engage with, and where they come from. A privacy-respecting setup (no invasive tracking) gives you useful data without compromising trust.
