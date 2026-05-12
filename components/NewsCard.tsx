import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { NewsPost, formatDate } from "@/lib/news";

interface NewsCardProps {
  post: NewsPost;
}

export default function NewsCard({ post }: NewsCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Image placeholder */}
      <div className="aspect-[16/9] bg-[#F2F2F2] flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Photo</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Category + Date */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">
            {post.category}
          </span>
          <time
            dateTime={post.date}
            className="flex items-center gap-1 text-xs text-[#4A4A4A]"
          >
            <Calendar size={11} aria-hidden="true" />
            {formatDate(post.date)}
          </time>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 leading-snug">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#4A4A4A] leading-relaxed flex-1 mb-4">
          {post.excerpt}
        </p>

        {/* Read More */}
        <Link
          href={`/news/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#CC0000] hover:text-red-800 transition-colors"
          aria-label={`Read more about ${post.title}`}
        >
          Read More <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
