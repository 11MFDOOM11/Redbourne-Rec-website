"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const activities = [
  "Gym / Fitness Suite",
  "Astroturf Pitch — 5-a-side",
  "Astroturf Pitch — 7-a-side",
  "Community Space Hire",
  "Holiday Club",
  "Other",
];

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    activity: "",
    date: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-[#F2F2F2] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#CC0000] mb-2">
            Redbourn Leisure Centre
          </p>
          <h1 className="text-3xl font-bold text-[#1A1A1A] mb-3">Book Online</h1>
          <p className="text-base text-[#4A4A4A] max-w-xl leading-relaxed">
            Fill in the form below and our team will get back to you to confirm
            your booking. For urgent enquiries, call us on{" "}
            <a
              href="tel:01582792471"
              className="text-[#CC0000] hover:underline"
            >
              01582 792471
            </a>
            .
          </p>
          <p className="text-sm text-[#4A4A4A] mt-2 italic">
            [BOOKING SYSTEM — TO BE INTEGRATED] — currently accepting enquiries
            via the form below.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-white py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <CheckCircle className="text-[#CC0000]" size={48} aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-[#1A1A1A]">
                Request Received!
              </h2>
              <p className="text-[#4A4A4A] max-w-sm leading-relaxed">
                Thank you for your booking request. A member of the team will
                be in touch within 1–2 working days to confirm your session.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    email: "",
                    activity: "",
                    date: "",
                    message: "",
                  });
                }}
                className="whitespace-nowrap bg-[#CC0000] hover:bg-red-800 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors mt-2"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[#1A1A1A]"
                  >
                    Full Name <span className="text-[#CC0000]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#1A1A1A]"
                  >
                    Email Address <span className="text-[#CC0000]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Activity */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="activity"
                    className="text-sm font-semibold text-[#1A1A1A]"
                  >
                    Activity / Facility <span className="text-[#CC0000]">*</span>
                  </label>
                  <select
                    id="activity"
                    name="activity"
                    required
                    value={form.activity}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-transparent bg-white"
                  >
                    <option value="">Select an option…</option>
                    {activities.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="date"
                    className="text-sm font-semibold text-[#1A1A1A]"
                  >
                    Preferred Date <span className="text-[#CC0000]">*</span>
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[#1A1A1A]"
                >
                  Message / Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any additional information, preferred times, or questions…"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="whitespace-nowrap self-start bg-[#CC0000] hover:bg-red-800 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Send Booking Request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
