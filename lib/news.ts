export interface NewsPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  body: string;
  image: string;
}

export const newsPosts: NewsPost[] = [
  {
    slug: "astro-update",
    title: "Astroturf Pitch: Construction Update",
    category: "Astro Update",
    date: "2025-11-14",
    author: "RRCPFT Team",
    excerpt:
      "Our new 3G astroturf pitch is taking shape. Here's the latest on progress, timelines, and what to expect when it opens.",
    body: `
<p>We're thrilled to share the latest update on our new 3G astroturf pitch — one of the most exciting developments at Redbourn Leisure Centre in years.</p>
<p>Ground preparation works have been completed, with the base layer now fully installed. The artificial turf surface is scheduled for installation over the coming weeks, followed by line markings and floodlighting. Subject to final inspections, we anticipate the pitch being available for bookings in the new year.</p>
<p>The pitch will be suitable for 5-a-side and 7-a-side football, as well as hockey and other sports. Bookings will be managed through our online system — we'll share details as soon as it's live.</p>
<p>Thank you to everyone in the community who has supported this project. We can't wait to see it in action.</p>
    `,
    image: "/images/astro-placeholder.svg",
  },
  {
    slug: "reception-plans",
    title: "New Reception Development: Plans Revealed",
    category: "Reception Plans",
    date: "2025-10-02",
    author: "RRCPFT Team",
    excerpt:
      "Plans for our brand-new reception building have been submitted for planning approval. Take a look at what's coming.",
    body: `
<p>We're pleased to announce that planning permission has been submitted for a new dedicated reception building at Redbourn Leisure Centre.</p>
<p>The new structure will replace the current temporary entrance and provide a welcoming, accessible front-of-house for all visitors. The design incorporates a reception desk, waiting area, and accessible toilet facilities, with a modern aesthetic that reflects the community-first ethos of the Trust.</p>
<p>We anticipate a decision from the planning authority within the standard eight-week window. Once approved, construction will begin as soon as funding is confirmed.</p>
<p>We'll keep the community updated on every milestone.</p>
    `,
    image: "/images/reception-placeholder.svg",
  },
  {
    slug: "social-bar-cafe",
    title: "Social Bar & Café: Coming to Redbourn Leisure Centre",
    category: "Social Bar & Café Plans",
    date: "2025-09-18",
    author: "RRCPFT Team",
    excerpt:
      "We're planning a new social bar and café facility to serve the community. Find out what we've got in store.",
    body: `
<p>One of the most requested additions to Redbourn Leisure Centre has always been a social space where the community can gather, celebrate, and relax. We're delighted to share that plans for a dedicated social bar and café are now in development.</p>
<p>The proposed facility will include a licensed bar, hot and cold food service, and flexible seating suitable for both post-sport wind-downs and private hire events. We're working with local suppliers to ensure the menu reflects the best of what Hertfordshire has to offer.</p>
<p>More details — including a proposed opening timeline and booking information — will be shared later this year.</p>
    `,
    image: "/images/cafe-placeholder.svg",
  },
  {
    slug: "energy-saving",
    title: "Going Green: Solar Panel Installation Underway",
    category: "Energy Saving",
    date: "2025-08-05",
    author: "RRCPFT Team",
    excerpt:
      "Redbourn Leisure Centre is investing in solar energy to reduce costs and our environmental footprint. Here's what's happening.",
    body: `
<p>As part of our commitment to sustainability and reducing operating costs, Redbourn Leisure Centre has begun the installation of a solar panel array on the main building roof.</p>
<p>The 48-panel system will generate a significant portion of the electricity used by the gym and changing facilities, reducing our carbon footprint and helping keep membership fees affordable for the community.</p>
<p>Installation is expected to be completed within the next four weeks, with the system fully operational shortly after. We'll share energy generation data with the community once the system is live — watch this space!</p>
    `,
    image: "/images/solar-placeholder.svg",
  },
  {
    slug: "talent-x",
    title: "Talent X: Youth Programme & Holiday Clubs",
    category: "Talent X",
    date: "2025-07-22",
    author: "Laura (RRCPFT)",
    excerpt:
      "[TALENT X CONTENT — FROM LAURA, TBC] A placeholder for the Talent X youth programme and holiday club update.",
    body: `
<p>[TALENT X CONTENT — FROM LAURA, TBC]</p>
<p>This article will cover the Talent X youth programme, upcoming holiday clubs, and how young people in Redbourn can get involved.</p>
<p>Please contact us at <a href="mailto:hello@redbournleisure.com" class="text-[#CC0000] underline">hello@redbournleisure.com</a> for more information in the meantime.</p>
    `,
    image: "/images/talent-placeholder.svg",
  },
];

export function getPostBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 2): NewsPost[] {
  return newsPosts.filter((p) => p.slug !== currentSlug).slice(0, count);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
