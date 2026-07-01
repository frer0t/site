import Link from "next/link";
import { cn } from "@/utils/cn";
import { BlogPostSummary } from "@/types/blog";

const AdjacentPostCard = ({
  post,
  direction,
}: {
  post: BlogPostSummary;
  direction: "prev" | "next";
}) => (
  <Link
    href={`/blog/${post.slug}`}
    className={cn(
      "flex-1 rounded-2xl border border-mygreen/25 px-5.5 py-4.5 transition-colors hover:border-mygreen dark:border-myred/25 dark:hover:border-myred",
      direction === "next" && "text-right"
    )}
  >
    <div className="mb-1.5 font-mono text-[11px] font-medium text-mygreen dark:text-myred">
      {direction === "prev" ? "← previous" : "next →"}
    </div>
    <div className="text-[15px] font-bold text-myblack dark:text-white">{post.title}</div>
  </Link>
);

export default AdjacentPostCard;
