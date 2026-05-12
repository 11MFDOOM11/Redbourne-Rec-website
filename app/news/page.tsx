import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";
import { newsPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Updates | Redbourn Leisure Centre",
  description:
    "Stay up to date with the latest news, development updates, and community stories from Redbourn Leisure Centre.",
};

const categories = [
  "All",
  "Astro Update",
  "Reception Plans",
  "Social Bar & Café Plans",
  "Energy Saving",
  "Talent X",
];

export default function NewsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#F2F2F2] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#CC0000] mb-2">
            Stay Informed
          </p>
          <h1 className="text-3xl font-bold text-[#1A1A1A] mb-3">
            News &amp; Updates
          </h1>
          <p className="text-base text-[#4A4A4A] max-w-xl leading-relaxed">
            The latest development news, facility updates, and community stories
            from Redbourn Leisure Centre.
          </p>
        </div>
      </section>

      {/* Category chips */}
      <section className="bg-white border-b border-gray-100 py-4 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`whitespace-nowrap text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full border transition-colors cursor-default ${
                  cat === "All"
                    ? "bg-[#CC0000] text-white border-[#CC0000]"
                    : "border-gray-300 text-[#4A4A4A]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* News grid */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsPosts.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Social CTA */}
          <div className="mt-12 bg-[#F2F2F2] rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-1">
                Follow Us on Social Media
              </h2>
              <p className="text-sm text-[#4A4A4A]">
                Get updates as they happen — follow us on Facebook and Instagram.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="[FACEBOOK URL — TBC]"
                className="whitespace-nowrap bg-[#CC0000] hover:bg-red-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                aria-label="Follow us on Facebook"
              >
                Facebook
              </a>
              <a
                href="[INSTAGRAM URL — TBC]"
                className="whitespace-nowrap border-2 border-[#CC0000] text-[#CC0000] hover:bg-[#CC0000] hover:text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                aria-label="Follow us on Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
