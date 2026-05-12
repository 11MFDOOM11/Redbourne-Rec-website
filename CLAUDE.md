# CLAUDE.md — Redbourn Leisure Centre Website

## Project Overview

Build a multi-page website for **Redbourn Leisure Centre** (operated by Redbourn Recreation Centre & Playing Fields Trust — RRCPFT). The site should serve local community members, prospective members, and visitors. It should feel professional, community-focused, and energetic — aligned with a sports and leisure brand.

Target domain: **redbournleisure.co.uk**

---

## Tech Stack

- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts — use a clean, modern sans-serif. Recommended: `Archivo` or `DM Sans` for headings; `Inter` acceptable for body text only
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

---

## Brand & Design System

### Colour Palette
Strictly use these brand colours — they align with the existing logo:

```css
--color-primary:   #CC0000;   /* Brand Red */
--color-dark:      #1A1A1A;   /* Near-black for text and footer */
--color-mid:       #4A4A4A;   /* Dark grey for secondary text */
--color-light:     #F2F2F2;   /* Light grey background */
--color-white:     #FFFFFF;
```

### Typography
- **Headings**: Clean sans-serif (Archivo or DM Sans), **significantly reduced in size** — avoid the oversized headings visible in the reference screenshots. Headings should balance with surrounding content and images.
  - H1: `text-3xl` / `font-bold` (NOT full-viewport-filling text)
  - H2: `text-2xl` / `font-semibold`
  - H3: `text-xl` / `font-medium`
- **Body**: `text-base` (16px), line-height relaxed
- **Labels / Tags**: `text-sm uppercase tracking-widest`

### Spacing & Layout
- Use generous but not wasteful whitespace — avoid the excessive vertical gaps seen in the reference screenshots
- Max content width: `max-w-6xl mx-auto`
- Sections should be dense enough that users don't scroll through empty space

### CTA Buttons
- Text must always fit on **one single line** — use `whitespace-nowrap` where necessary
- Primary button: Red background (`bg-red-700`), white text, rounded (`rounded-full` or `rounded-md`)
- Secondary button: Outlined, red border and text
- Minimum padding: `px-5 py-2`
- Example correct label: `Check Out Our Updates` (not split across two lines)

---

## Site Structure & Pages

### 1. `/` — Home Page

**Sections (in order):**

1. **Hero** — Split layout: heading + subtext on left, facility image (gym/astroturf) on right
   - Headline: e.g. *"Redbourn Leisure Centre: The Future of Community Wellness"*
   - Subtext: brief description of the facility's mission
   - CTA: `Join Now` button (red) + `Book Online` (outlined)

2. **Our Amenities** — Icon cards or image tiles showcasing:
   - Gym / Fitness Suite
   - Astroturf Pitch
   - Reception & Café Bar (coming soon)
   - Community Spaces

3. **Development News Preview** — Teaser of the latest 2–3 news/blog posts with thumbnail, date, title, and a `Read More` link. CTA button: `Check Out Our Updates` (one line).

4. **Get In Touch** — Two-column layout:
   - Left: address, phone, email
   - Right: embedded Google Map
   - **IMPORTANT**: Address must NOT say "North Common, Redbourn" — use the correct address (to be confirmed; placeholder: `Redbourn Leisure Centre, Redbourn, St Albans, AL3 7PS`)
   - Phone: `01582 792471`
   - Email: `hello@redbournleisure.com`

5. **Footer** — Logo (left), nav links (centre), email `enquiries@redbournleisure.co.uk` (right), copyright line, Subscribe button

---

### 2. `/book` — Book Online

- Booking enquiry form or embedded third-party booking widget placeholder
- Fields: Name, Email, Activity/Facility, Date, Message
- CTA: `Send Booking Request` (one line)

---

### 3. `/history` — History

- Content describing the history of the Trust (authored by Helen Keeley — content to be provided separately)
- Also include a "Who Are We" section covering:
  - The Trust's relationship with Environment Agency (EA)
  - RRCPFT's role as a community-led organisation
  - Key milestones
- Optional: PDF download link for the full history document
- Layout: editorial long-form with pull quotes and imagery

---

### 4. `/news` — News & Blog

- Grid of news/blog post cards: thumbnail, category tag, date, title, excerpt, `Read More` link
- Categories / planned posts include:
  - **Astro Update** — progress on the astroturf pitch
  - **Reception Plans** — new reception development
  - **Social Bar & Café Plans** — upcoming café/bar facility
  - **Energy Saving** — Solar panel installation update
  - **Talent X** — youth programme and holiday clubs (content from Laura, TBC)
- Each post links to a dynamic detail page: `/news/[slug]`
- CTA to follow on social media (Facebook & Instagram links — TBC)

---

### 5. `/news/[slug]` — Individual Post Page

- Full post content with hero image, date, author, body text
- Related posts at the bottom
- Social share buttons (Facebook, Instagram)

---

## Navigation

```
Logo | Home | Book Online | History | News        [JOIN NOW]  [Log In]
```

- Logo: top-left
- Nav links: centre
- `JOIN NOW`: red pill button, top-right
- `Log In`: ghost/text button beside it
- Mobile: hamburger menu

---


Update the `pb=` coordinates once the correct Google Maps pin is confirmed.

---

## Component Checklist

| Component | Notes |
|---|---|
| `<Navbar />` | Sticky, mobile-responsive, red JOIN NOW button |
| `<Hero />` | Split layout, reduced heading size, single-line CTAs |
| `<AmenitiesGrid />` | Icon/image cards, 3–4 per row |
| `<NewsPreview />` | Latest 2–3 posts from `/news` |
| `<ContactSection />` | Address + embedded map |
| `<Footer />` | Logo, links, email, copyright, subscribe |
| `<NewsCard />` | Thumbnail, tag, date, title, excerpt |
| `<PostPage />` | Full article layout |
| `<BookingForm />` | Form with validation |

---

## Key Design Rules (DO / DON'T)

| ✅ DO 
|---|---|
| Use red, grey, black only 
| Keep headings proportionate to page content 
| Fit all CTA button text on one line 
| Use clean Arial/Archivo/DM Sans style fonts 
| Keep sections tight with meaningful content 
| Show correct address |


---

## Content Placeholders

Where final content is not yet available, use clearly labelled placeholders:

- `[ADDRESS — TO BE CONFIRMED]`
- `[GOOGLE MAPS PIN — TO BE UPDATED]`
- `[HISTORY TEXT — PROVIDED BY HELEN KEELEY]`
- `[TALENT X CONTENT — FROM LAURA, TBC]`
- `[FACEBOOK URL — TBC]`
- `[INSTAGRAM URL — TBC]`
- `[BOOKING SYSTEM — TO BE INTEGRATED]`

---

## Assets

- **Logo**: RRCPFT logo (red person figure with black text) — to be provided as SVG or PNG with transparent background
- **Photos**: Gym interior, astroturf aerial drone shot — provided as SVG or PNG with transparent background
- **Favicon**: Use logo mark (red figure)

---

## SEO & Meta

- Title: `Redbourn Leisure Centre | Community Sports & Fitness`
- Description: `Redbourn Leisure Centre — a community sports and wellness facility in Redbourn, Hertfordshire. Gym, astroturf, café bar and more.`
- OG image: Aerial drone photo of the site
- Sitemap: generate `/sitemap.xml`
- Robots: `robots.txt` allowing all crawlers

---

## Social Media

- Facebook: TBC (to be set up)
- Instagram: TBC (to be set up)
- Include social icons in footer once URLs confirmed
- News posts should be shareable and formatted to feed social content

---

## Notes for Developer

1. The existing Wix site (visible in screenshots) is the reference — **improve** on its layout, don't replicate it exactly
2. The biggest issues to fix from the current design:
   - Heading font too large (wastes vertical space)
   - CTA buttons with text wrapping to two lines
   - Incorrect address displayed
   - Excessive empty whitespace between sections
3. The Trust runs the facility on behalf of the local community — the tone should be **warm, active, and community-first**, not corporate
4. All pages should be fully **mobile responsive**
5. Accessibility: use semantic HTML, ARIA labels on interactive elements, sufficient colour contrast (white on red passes WCAG AA)
