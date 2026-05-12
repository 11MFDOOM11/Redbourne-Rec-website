import type { Metadata } from "next";
import { Download, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "History | Redbourn Leisure Centre",
  description:
    "Learn about the history of Redbourn Recreation Centre & Playing Fields Trust — our roots, milestones, and community mission.",
};

export default function HistoryPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#F2F2F2] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#CC0000] mb-2">
            Our Story
          </p>
          <h1 className="text-3xl font-bold text-[#1A1A1A] mb-3">History of the Trust</h1>
          <p className="text-base text-[#4A4A4A] max-w-2xl leading-relaxed">
            For decades, Redbourn Recreation Centre &amp; Playing Fields Trust has
            been at the heart of the community — providing sport, leisure, and
            green space for residents of all ages.
          </p>
        </div>
      </section>

      {/* Who Are We */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
              Who Are We?
            </h2>
            <div className="prose prose-sm max-w-none text-[#4A4A4A] leading-relaxed space-y-4">
              <p>
                Redbourn Recreation Centre &amp; Playing Fields Trust (RRCPFT) is a
                community-led, not-for-profit organisation that manages and develops
                the leisure and playing fields facilities in the village of Redbourn,
                Hertfordshire. Our mission is simple: to provide accessible, high-quality
                sport and wellness facilities for everyone in the community.
              </p>
              <p>
                The Trust was established to ensure that the green open spaces and
                recreational facilities in Redbourn remain available for future
                generations. We operate on behalf of the local community, reinvesting
                all surpluses directly back into the maintenance and improvement of the
                facilities.
              </p>
            </div>
          </div>

          {/* EA relationship */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
              Our Relationship with the Environment Agency
            </h2>
            <div className="prose prose-sm max-w-none text-[#4A4A4A] leading-relaxed space-y-4">
              <p>
                A unique aspect of Redbourn Leisure Centre is its relationship with the
                Environment Agency (EA). The site sits within a designated area, and the
                Trust works closely with the EA to ensure that all development and
                operations are carried out in full compliance with environmental
                regulations and flood risk management requirements.
              </p>
              <p>
                This partnership means that every project — from the new astroturf pitch
                to the planned reception building — is developed with careful attention
                to environmental impact, drainage, and sustainability. It's a relationship
                the Trust is proud of.
              </p>
            </div>
          </div>

          {/* Pull quote */}
          <blockquote className="bg-[#F2F2F2] border-l-4 border-[#CC0000] rounded-r-lg px-6 py-5 my-8 flex gap-3">
            <Quote className="text-[#CC0000] shrink-0 mt-1" size={20} aria-hidden="true" />
            <div>
              <p className="text-base text-[#1A1A1A] font-medium leading-relaxed italic mb-2">
                "Redbourn's playing fields and leisure centre are more than just
                facilities — they're the beating heart of our community."
              </p>
              <p className="text-sm text-[#4A4A4A]">— RRCPFT Trustee</p>
            </div>
          </blockquote>

          {/* Key Milestones */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
              Key Milestones
            </h2>
            <div className="space-y-6">
              {[
                {
                  year: "1970s",
                  title: "Playing Fields Established",
                  description:
                    "The original playing fields and recreation ground were laid out, providing Redbourn's first dedicated community sports space.",
                },
                {
                  year: "1990s",
                  title: "Gym & Fitness Suite Opens",
                  description:
                    "The Trust opened a fully equipped gym facility, making fitness accessible to residents at affordable rates.",
                },
                {
                  year: "2000s",
                  title: "Trust Formally Incorporated",
                  description:
                    "RRCPFT was formally incorporated as a charitable trust, cementing its not-for-profit, community-first governance structure.",
                },
                {
                  year: "2020s",
                  title: "Redevelopment Programme Begins",
                  description:
                    "An ambitious programme to upgrade and expand the facility is launched, including the new 3G astroturf pitch, reception building, and solar energy installation.",
                },
              ].map((milestone) => (
                <div key={milestone.year} className="flex gap-5 items-start">
                  <div className="shrink-0 bg-[#CC0000] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full min-w-[64px] text-center">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1A1A1A] mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full history content placeholder */}
          <div className="bg-[#F2F2F2] rounded-lg p-6 mb-8 border border-dashed border-gray-300">
            <p className="text-sm text-[#4A4A4A] italic text-center">
              [HISTORY TEXT — PROVIDED BY HELEN KEELEY] — Full written history
              will be published here once received.
            </p>
          </div>

          {/* PDF download placeholder */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-[#CC0000] text-[#CC0000] hover:bg-[#CC0000] hover:text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
              aria-label="Download full history document (PDF)"
            >
              <Download size={15} aria-hidden="true" />
              Download Full History (PDF)
            </a>
            <span className="text-xs text-[#4A4A4A] italic">
              [PDF — TO BE UPLOADED]
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
