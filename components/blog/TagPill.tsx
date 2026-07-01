import { cn } from "@/utils/cn";
import { BlogTag } from "@/types/blog";

const TAG_STYLES: Record<BlogTag, string> = {
  notes: "bg-slate-100 text-slate-600 dark:bg-slate-500/[0.18] dark:text-slate-400",
  ai: "bg-teal-100 text-teal-700 dark:bg-teal-500/[0.16] dark:text-teal-300",
};

const TagPill = ({ tag, className }: { tag: BlogTag; className?: string }) => (
  <span
    className={cn(
      "inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold",
      TAG_STYLES[tag],
      className
    )}
  >
    {tag}
  </span>
);

export default TagPill;
