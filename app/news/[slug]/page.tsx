import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Facebook, Instagram } from "lucide-react";
import NewsCard from "@/components/NewsCard";
import {
  newsPosts,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
} from "@/lib/news";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Redbourn Leisure Centre News`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);

  return (
    <>
      {/* Hero image */}
      <div className="w-full bg-gradient-to-br from-gray-300 to-gray-500 h-48 md:h-64 flex items-center justify-center">
        <span className="text-white opacity-60 text-sm uppercase tracking-widest">
          Article Photo
        </span>
      </div>

      {/* Article */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm text-[#4A4A4A] hover:text-[#CC0000] mb-6 transition-colors"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to News
          </Link>

          {/* Category */}
          <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000] block mb-2">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold text-[#1A1A1A] leading-tight mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#4A4A4A] mb-8 pb-6 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} aria-hidden="true" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} aria-hidden="true" />
              {post.author}
            </span>
          </div>

          {/* Body */}
          <div
            className="prose prose-sm max-w-none text-[#4A4A4A] leading-relaxed
              prose-headings:text-[#1A1A1A] prose-headings:font-semibold
              prose-a:text-[#CC0000] prose-a:no-underline hover:prose-a:underline
              prose-p:mb-4"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Social share */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-4">
            <span className="text-sm font-semibold text-[#1A1A1A]">Share:</span>
            <a
              href={`[FACEBOOK URL — TBC]`}
              aria-label="Share on Facebook"
              className="text-[#4A4A4A] hover:text-[#CC0000] transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href={`[INSTAGRAM URL — TBC]`}
              aria-label="Share on Instagram"
              className="text-[#4A4A4A] hover:text-[#CC0000] transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-[#F2F2F2] py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">
              More Updates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <NewsCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
