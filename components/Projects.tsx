"use client";

import projects from "@/constants/projects";
import { cn } from "@/utils/cn";
import * as motion from "motion/react-client";
import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Badge from "./Badge";

const ALL_TAGS = Array.from(
  new Set([
    ...projects.map((p) => p.type),
    ...projects.map((p) => p.tech),
    ...projects.map((p) => p.status),
    ...projects.map((p) => `size:${p.size}`),
  ])
);

const COUNTS: Record<string, number> = {};
projects.forEach((p) => {
  COUNTS[p.type] = (COUNTS[p.type] || 0) + 1;
  COUNTS[p.tech] = (COUNTS[p.tech] || 0) + 1;
  COUNTS[p.status] = (COUNTS[p.status] || 0) + 1;
  const k = `size:${p.size}`;
  COUNTS[k] = (COUNTS[k] || 0) + 1;
});

const linkButtonClass =
  "inline-flex size-8 items-center justify-center rounded-full border border-black/20 text-black/50 transition-colors duration-200 hover:border-mygreen hover:bg-mygreen hover:text-white dark:border-white/20 dark:text-white/50 dark:hover:border-myred dark:hover:bg-myred";

const Projects = () => {
  const [active, setActive] = useState<Set<string>>(new Set());

  const toggle = (tag: string) =>
    setActive((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });

  const filtered = useMemo(() => {
    if (active.size === 0) return projects;
    return projects.filter((p) => {
      for (const f of active) {
        if (f.startsWith("size:")) {
          if (`size:${p.size}` !== f) return false;
        } else {
          if (p.type !== f && p.tech !== f && p.status !== f) return false;
        }
      }
      return true;
    });
  }, [active]);

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-0 z-40 flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 bg-metal-50 dark:bg-metal-900 border-b-2 border-metal-200 dark:border-metal-700">
        <span className="hidden xs:block font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-metal-500 dark:text-metal-400 pr-3 border-r-2 border-metal-200 dark:border-metal-700 shrink-0">
          filter
        </span>
        <div className="flex flex-wrap gap-1.5 md:gap-2 flex-1 min-w-0">
          {ALL_TAGS.map((tag) => {
            const isOn = active.has(tag);
            const label = tag.startsWith("size:") ? tag.replace("size:", "size · ") : tag;
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
                {label}
                <span className={`text-[9px] md:text-[10px] tabular-nums ${isOn ? "text-white/70" : "text-metal-400 dark:text-metal-500"}`}>
                  {COUNTS[tag] || 0}
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
          <b className="text-metal-800 dark:text-metal-100 font-semibold">{filtered.length}</b> of {projects.length}
        </span>
      </div>

      {/* List */}
      <div className="mt-10 border-t border-black/10 dark:border-white/10">
        {filtered.length === 0 && (
          <div className="px-6 py-16 flex flex-col items-center gap-2 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-black/30 dark:text-white/30">no results</span>
            <p className="font-mono text-[12px] text-black/40 dark:text-white/40">nothing matches that combination — try removing a filter</p>
            <button
              onClick={() => setActive(new Set())}
              className="mt-2 px-3 py-1.5 rounded-full font-mono text-[11px] lowercase tracking-[0.02em] text-myred border border-dashed border-myred hover:bg-myred/10 transition-all duration-150 cursor-pointer"
            >
              clear filters
            </button>
          </div>
        )}
        {filtered.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            key={project.name}
          >
            <div className="group border-b border-black/10 px-4 py-4 transition-colors duration-150 hover:bg-black/[0.025] dark:border-white/10 dark:hover:bg-white/[0.025] md:px-6 md:py-6">
              <div className="grid grid-cols-[36px_1fr_auto] items-center gap-3 md:grid-cols-[44px_1fr_160px_90px_88px] md:gap-4 lg:grid-cols-[44px_1.4fr_2fr_180px_100px_112px] lg:gap-5">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contents"
                  aria-label={`Visit ${project.name}`}
                >
                  <span className="font-mono text-[10px] font-medium text-black/30 md:text-[11px] dark:text-white/30">
                    № {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-[1.05] text-black transition-colors group-hover:text-mygreen md:text-xl lg:text-[22px] dark:text-white dark:group-hover:text-myred">
                      {project.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 font-mono text-[11px] leading-[1.5] text-black/50 lg:hidden dark:text-white/40">
                      {project.description}
                    </p>
                  </div>

                  <p className="hidden line-clamp-2 font-mono text-[12px] leading-[1.5] text-black/50 lg:block dark:text-white/50">
                    {project.description}
                  </p>

                  <div className="hidden flex-wrap gap-1 md:flex">
                    <Badge color="orange">{project.type}</Badge>
                    <Badge color="green">{project.tech}</Badge>
                    <Badge color="purple" className="uppercase">
                      {project.size}
                    </Badge>
                  </div>

                  <div className="hidden font-mono text-[10px] font-medium text-black/50 md:block lg:text-[11px] dark:text-white/50">
                    {project.status === "shipped" ? "○ shipped" : "● in progress"}
                  </div>
                </a>

                <div className="flex items-center justify-end gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} source on GitHub`}
                      className={linkButtonClass}
                    >
                      <FaGithub size={14} />
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className={cn(
                      linkButtonClass,
                      "group-hover:border-mygreen group-hover:bg-mygreen group-hover:text-white group-hover:-rotate-45 dark:group-hover:border-myred dark:group-hover:bg-myred"
                    )}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M3 11 L11 3" />
                      <path d="M5 3 H11 V9" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-2 ml-12 flex flex-wrap items-center gap-1.5 md:hidden">
                <Badge color="orange">{project.type}</Badge>
                <Badge color="green">{project.tech}</Badge>
                <span className="font-mono text-[10px] text-black/40 dark:text-white/40">
                  {project.status === "shipped" ? "○ shipped" : "● in progress"}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Projects;
