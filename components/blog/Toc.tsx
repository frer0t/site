"use client";

import type { BlogPost } from "@/types/blog";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

const Toc = ({ toc }: { toc: BlogPost["toc"] }) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const ids = toc.map((entry) => entry.url.replace(/^#/, ""));
    const headings = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    headings.forEach((heading) => observer.observe(heading));
    setActiveId(ids[0]);

    return () => observer.disconnect();
  }, [toc]);

  return (
    <nav
      aria-label="table of contents"
      className="sticky top-10 hidden w-[200px] shrink-0 lg:block"
    >
      <div className="mb-3.5 font-mono text-[11px] tracking-[0.14em] text-metal-400 uppercase dark:text-metal-500">
        on this page
      </div>
      <ul className="space-y-3">
        {toc.map((entry) => {
          const id = entry.url.replace(/^#/, "");
          const isActive = activeId === id;

          return (
            <li key={entry.url}>
              <a
                href={entry.url}
                className={cn(
                  "group flex items-baseline gap-2 font-mono text-[13px] leading-snug transition-colors",
                  isActive
                    ? "font-semibold text-mygreen dark:text-myred"
                    : "text-myblack/70 hover:text-mygreen dark:text-white/70 dark:hover:text-myred"
                )}
                aria-current={isActive ? "location" : undefined}
              >
                <span
                  className={cn(
                    isActive
                      ? "text-mygreen dark:text-myred"
                      : "text-mygreen/60 group-hover:text-mygreen dark:text-myred/60 dark:group-hover:text-myred"
                  )}
                >
                  –
                </span>
                <span>{entry.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Toc;
