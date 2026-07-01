"use client";

import { BlogPostSummary, BlogTag } from "@/types/blog";
import { format } from "date-fns";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useMemo, useState } from "react";
import Badge from "@/components/Badge";

const TAG_ORDER: BlogTag[] = ["ai", "notes"];
const TAG_BADGE_COLOR: Record<BlogTag, Parameters<typeof Badge>[0]["color"]> = {
  notes: "gray",
  ai: "teal",
};

const BlogList = ({ posts }: { posts: BlogPostSummary[] }) => {
  const [active, setActive] = useState<Set<BlogTag>>(new Set());

  const tags = useMemo(
    () => TAG_ORDER.filter((tag) => posts.some((p) => p.tags.includes(tag))),
    [posts]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    posts.forEach((p) => p.tags.forEach((t) => (c[t] = (c[t] || 0) + 1)));
    return c;
  }, [posts]);

  const toggle = (tag: BlogTag) =>
    setActive((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });

  const filtered = useMemo(() => {
    if (active.size === 0) return posts;
    return posts.filter((p) => p.tags.some((t) => active.has(t)));
  }, [active, posts]);

  if (posts.length === 0) {
    return (
      <div className="mt-10 flex flex-col items-center gap-2 border-t border-black/10 px-6 py-16 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-black/30 dark:text-white/30">
          nothing here yet
        </span>
        <p className="font-mono text-[12px] text-black/40 dark:text-white/40">
          the first post is on its way. check back soon.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-0 z-40 flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 bg-metal-50 dark:bg-metal-900 border-b-2 border-metal-200 dark:border-metal-700">
        <span className="hidden xs:block font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-metal-500 dark:text-metal-400 pr-3 border-r-2 border-metal-200 dark:border-metal-700 shrink-0">
          filter
        </span>
        <div className="flex flex-wrap gap-1.5 md:gap-2 flex-1 min-w-0">
          {tags.map((tag) => {
            const isOn = active.has(tag);
            return (
              <button
                key={tag}
                onClick={() => toggle(tag)}
                className={`inline-flex items-center gap-[5px] md:gap-[7px] px-2.5 md:px-3 py-1 md:py-1.5 rounded-full font-mono text-[10px] md:text-[11px] font-medium lowercase tracking-[0.02em] border transition-all duration-150 cursor-pointer ${
                  isOn
                    ? "bg-mygreen dark:bg-myred text-white border-mygreen dark:border-myred shadow-sm"
                    : "bg-white dark:bg-metal-800 text-metal-600 dark:text-metal-300 border-metal-300 dark:border-metal-600 hover:border-mygreen dark:hover:border-myred hover:text-mygreen dark:hover:text-myred"
                }`}
              >
                {tag}
                <span
                  className={`text-[9px] md:text-[10px] tabular-nums ${
                    isOn ? "text-white/70" : "text-metal-400 dark:text-metal-500"
                  }`}
                >
                  {counts[tag] || 0}
                </span>
              </button>
            );
          })}
          {active.size > 0 && (
            <button
              onClick={() => setActive(new Set())}
              className="inline-flex items-center px-2.5 md:px-3 py-1 md:py-1.5 rounded-full font-mono text-[10px] md:text-[11px] font-medium lowercase tracking-[0.02em] text-myred border border-dashed border-myred cursor-pointer hover:bg-myred/10 transition-all duration-150"
            >
              clear ×
            </button>
          )}
        </div>
        <span className="hidden sm:block font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-metal-500 dark:text-metal-400 whitespace-nowrap shrink-0">
          <b className="text-metal-800 dark:text-metal-100 font-semibold">{filtered.length}</b> of{" "}
          {posts.length}
        </span>
      </div>

      {/* List */}
      <div className="mt-10 border-t border-black/10 dark:border-white/10">
        {filtered.length === 0 && (
          <div className="px-6 py-16 flex flex-col items-center gap-2 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-black/30 dark:text-white/30">
              no results
            </span>
            <p className="font-mono text-[12px] text-black/40 dark:text-white/40">
              nothing matches that combination — try removing a filter
            </p>
            <button
              onClick={() => setActive(new Set())}
              className="mt-2 px-3 py-1.5 rounded-full font-mono text-[11px] lowercase tracking-[0.02em] text-myred border border-dashed border-myred hover:bg-myred/10 transition-all duration-150 cursor-pointer"
            >
              clear filters
            </button>
          </div>
        )}
        {filtered.map((post, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            key={post.slug}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block border-b border-black/10 dark:border-white/10 hover:bg-black/[0.025] dark:hover:bg-white/[0.025] transition-colors duration-150 px-4 md:px-6 py-4 md:py-6"
            >
              <div className="grid grid-cols-[36px_1fr_auto] md:grid-cols-[44px_1fr_140px_56px] lg:grid-cols-[44px_1.4fr_2fr_140px_150px_56px] items-center gap-3 md:gap-4 lg:gap-5">
                {/* № index */}
                <span className="font-mono text-[10px] md:text-[11px] font-medium tracking-[0.1em] text-black/30 dark:text-white/30">
                  № {post.num}
                </span>

                {/* Title + mobile excerpt */}
                <div className="min-w-0">
                  <h2 className="text-lg md:text-xl lg:text-[22px] font-bold leading-[1.05] tracking-[-0.02em] text-black dark:text-white">
                    {post.title}
                  </h2>
                  <p className="lg:hidden mt-1 font-mono text-[11px] leading-[1.5] text-black/50 dark:text-white/40 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Excerpt — large desktop only */}
                <p className="hidden lg:block font-mono text-[12px] leading-[1.5] text-black/50 dark:text-white/50 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags — tablet + */}
                <div className="hidden md:flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag} color={TAG_BADGE_COLOR[tag]}>
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Date + read time — tablet + */}
                <div className="hidden md:block font-mono text-[10px] lg:text-[11px] font-medium tracking-[0.04em] text-black/50 dark:text-white/50">
                  {format(new Date(post.date), "MMM d, yyyy")} · {post.readTime}
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-end">
                  <span className="w-7 h-7 md:w-8 md:h-8 border border-black/20 dark:border-white/20 rounded-full inline-flex items-center justify-center text-black/50 dark:text-white/50 group-hover:bg-mygreen dark:group-hover:bg-myred group-hover:text-white group-hover:border-mygreen dark:group-hover:border-myred group-hover:-rotate-45 transition-all duration-200">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 11 L11 3" />
                      <path d="M5 3 H11 V9" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Mobile-only secondary row — tags + date */}
              <div className="md:hidden mt-2 ml-[48px] flex flex-wrap items-center gap-1.5">
                {post.tags.map((tag) => (
                  <Badge key={tag} color={TAG_BADGE_COLOR[tag]}>
                    {tag}
                  </Badge>
                ))}
                <span className="font-mono text-[10px] text-black/40 dark:text-white/40">
                  {format(new Date(post.date), "MMM d, yyyy")} · {post.readTime}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
