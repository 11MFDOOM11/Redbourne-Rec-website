"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/book", label: "Book Online" },
  { href: "/history", label: "History" },
  { href: "/news", label: "News" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Redbourn Leisure Centre home">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4A4A4A] hover:text-[#CC0000] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/book"
              className="whitespace-nowrap bg-[#CC0000] hover:bg-red-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            >
              JOIN NOW
            </Link>
            <Link
              href="/login"
              className="whitespace-nowrap text-sm font-medium text-[#4A4A4A] hover:text-[#CC0000] px-3 py-2 transition-colors"
            >
              Log In
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-[#4A4A4A] hover:text-[#CC0000]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4A4A4A] hover:text-[#CC0000] py-2 border-b border-gray-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3">
              <Link
                href="/book"
                className="whitespace-nowrap bg-[#CC0000] hover:bg-red-800 text-white text-sm font-semibold px-5 py-2 rounded-full text-center transition-colors"
                onClick={() => setOpen(false)}
              >
                JOIN NOW
              </Link>
              <Link
                href="/login"
                className="whitespace-nowrap text-sm font-medium text-center text-[#4A4A4A] py-2 transition-colors"
                onClick={() => setOpen(false)}
              >
                Log In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
