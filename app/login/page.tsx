import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In | Redbourn Leisure Centre",
};

export default function LoginPage() {
  return (
    <section className="bg-[#F2F2F2] min-h-[60vh] flex items-center justify-center py-16">
      <div className="bg-white rounded-xl shadow p-8 w-full max-w-sm mx-4">
        <h1 className="text-2xl font-bold text-[#1A1A1A] mb-1">Log In</h1>
        <p className="text-sm text-[#4A4A4A] mb-6">
          Member portal coming soon. Please contact us for assistance.
        </p>
        <div className="bg-[#F2F2F2] border border-dashed border-gray-300 rounded-lg p-4 text-center">
          <p className="text-xs text-[#4A4A4A] italic">
            [MEMBER LOGIN — TO BE INTEGRATED]
          </p>
        </div>
        <a
          href="mailto:hello@redbournleisure.com"
          className="block mt-5 text-center text-sm text-[#CC0000] hover:underline"
        >
          Contact us for help
        </a>
      </div>
    </section>
  );
}
