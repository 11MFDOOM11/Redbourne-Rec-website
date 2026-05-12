import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#F2F2F2] min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#CC0000] mb-3">
          404
        </p>
        <h1 className="text-3xl font-bold text-[#1A1A1A] mb-3">
          Page Not Found
        </h1>
        <p className="text-base text-[#4A4A4A] mb-6 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="whitespace-nowrap bg-[#CC0000] hover:bg-red-800 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
