import Link from "next/link";
import { Mail, Facebook, Instagram } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/book", label: "Book Online" },
  { href: "/history", label: "History" },
  { href: "/news", label: "News" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="brightness-0 invert">
              <Logo />
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              A community sports and wellness facility in Redbourn, Hertfordshire — operated by RRCPFT.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
              Pages
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact + subscribe */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Contact
              </p>
              <a
                href="mailto:enquiries@redbournleisure.co.uk"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={14} aria-hidden="true" />
                enquiries@redbournleisure.co.uk
              </a>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href="[FACEBOOK URL — TBC]"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="[INSTAGRAM URL — TBC]"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Subscribe */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Newsletter
              </p>
              <Link
                href="/book"
                className="whitespace-nowrap inline-block bg-[#CC0000] hover:bg-red-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Redbourn Recreation Centre &amp; Playing Fields Trust. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            redbournleisure.co.uk
          </p>
        </div>
      </div>
    </footer>
  );
}
