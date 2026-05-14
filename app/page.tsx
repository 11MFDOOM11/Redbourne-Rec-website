import Link from "next/link";
import {
  Dumbbell,
  Goal,
  Coffee,
  Users,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import NewsCard from "@/components/NewsCard";
import { newsPosts } from "@/lib/news";

const amenities = [
  {
    icon: <Dumbbell className="text-[#CC0000]" size={28} aria-hidden="true" />,
    title: "Gym & Fitness Suite",
    description:
      "A fully equipped gym with cardio machines, free weights, and resistance equipment for all fitness levels.",
  },
  {
    icon: <Goal className="text-[#CC0000]" size={28} aria-hidden="true" />,
    title: "Astroturf Pitch",
    description:
      "Brand-new 3G artificial turf pitch suitable for 5-a-side football, hockey, and more.",
  },
  {
    icon: <Coffee className="text-[#CC0000]" size={28} aria-hidden="true" />,
    title: "Reception & Café Bar",
    description:
      "A welcoming reception and café bar are coming soon — perfect for post-workout refreshments and community events.",
    tag: "Coming Soon",
  },
  {
    icon: <Users className="text-[#CC0000]" size={28} aria-hidden="true" />,
    title: "Community Spaces",
    description:
      "Flexible spaces available for hire — ideal for meetings, classes, events, and local group activities.",
  },
];

const previewPosts = newsPosts.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="bg-[#F2F2F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#CC0000] mb-3">
                Redbourn, Hertfordshire
              </p>
              <h1 className="text-3xl font-bold text-[#1A1A1A] leading-tight mb-4">
                Redbourn Leisure Centre:<br />
                The Future of Community Wellness
              </h1>
              <p className="text-base text-[#4A4A4A] leading-relaxed mb-6 max-w-md">
                A premium community facility fostering engagement through fitness,
                recreation, and modern amenities. We're building a state-of-the-art
                sports centre to empower every resident and strengthen our local bonds.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="whitespace-nowrap bg-[#CC0000] hover:bg-red-800 text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm"
                >
                  Join Now
                </Link>
                <Link
                  href="/book"
                  className="whitespace-nowrap border-2 border-[#CC0000] text-[#CC0000] hover:bg-[#CC0000] hover:text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm"
                >
                  Book Online
                </Link>
              </div>
            </div>

            {/* Right: image */}
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-300">
              <img
                src="/images/Image1.jpg"
                alt="Modern gym interior with workout equipment"
                className="w-full h-full object-cover"
             />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR AMENITIES ────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#CC0000] mb-1">
              What We Offer
            </p>
            <h2 className="text-2xl font-semibold text-[#1A1A1A]">Our Amenities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((item) => (
              <div
                key={item.title}
                className="bg-[#F2F2F2] rounded-lg p-6 flex flex-col gap-3"
              >
                <div>{item.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    {item.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-[#CC0000] text-white px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPMENT NEWS PREVIEW ─────────────────── */}
      <section className="bg-[#F2F2F2] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#CC0000] mb-1">
                Latest
              </p>
              <h2 className="text-2xl font-semibold text-[#1A1A1A]">
                Development News
              </h2>
            </div>
            <Link
              href="/news"
              className="whitespace-nowrap bg-[#CC0000] hover:bg-red-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            >
              Check Out Our Updates
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewPosts.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ─────────────────────────────── */}
      <section className="bg-white py-14" id="contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#CC0000] mb-1">
              Find Us
            </p>
            <h2 className="text-2xl font-semibold text-[#1A1A1A]">Get In Touch</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <MapPin className="text-[#CC0000] shrink-0 mt-0.5" size={18} aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A] mb-0.5">Address</p>
                  <address className="not-italic text-sm text-[#4A4A4A] leading-relaxed">
                    Redbourn Leisure Centre<br />
                    Redbourn<br />
                    St Albans, AL3 7PS
                  </address>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="text-[#CC0000] shrink-0 mt-0.5" size={18} aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A] mb-0.5">Phone</p>
                  <a
                    href="tel:01582792471"
                    className="text-sm text-[#4A4A4A] hover:text-[#CC0000] transition-colors"
                  >
                    01582 792471
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="text-[#CC0000] shrink-0 mt-0.5" size={18} aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A] mb-0.5">Email</p>
                  <a
                    href="mailto:hello@redbournleisure.com"
                    className="text-sm text-[#4A4A4A] hover:text-[#CC0000] transition-colors"
                  >
                    hello@redbournleisure.com
                  </a>
                </div>
              </div>
              <Link
                href="/book"
                className="whitespace-nowrap inline-flex items-center gap-2 bg-[#CC0000] hover:bg-red-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors self-start mt-2"
              >
                Make a Booking <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Embedded map */}
            <div className="rounded-xl overflow-hidden shadow border border-gray-100 aspect-[4/3]">
              <iframe
                title="Redbourn Leisure Centre location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.0!2d-0.3920!3d51.7990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUmVkYm91cm4!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
