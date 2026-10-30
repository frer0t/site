import Badge from "@/components/Badge";
import MDXContent from "@/components/blog/MDXContent";
import { blogMdxComponents } from "@/components/blog/mdxComponents";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { cn } from "@/utils/cn";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getProject(slug);
  if (!entry) return {};
  return {
    title: entry.project.name,
    description: entry.project.description,
  };
}

const linkButtonClass =
  "inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 font-mono text-[12px] text-black/70 transition-colors duration-200 hover:border-mygreen hover:bg-mygreen hover:text-white dark:border-white/20 dark:text-white/70 dark:hover:border-myred dark:hover:bg-myred";

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const entry = getProject(slug);
  if (!entry) notFound();

  const { project, prev, next } = entry;

  return (
    <main>
      <div className="mx-auto max-w-5xl px-4 pb-24 pt-6 md:px-6">
        <Link
          href="/portfolio"
          className="my-7 inline-flex items-center gap-2 font-mono text-sm text-metal-500 transition-colors hover:text-mygreen dark:text-metal-400 dark:hover:text-myred"
        >
          <span>←</span>
          <span>back to /portfolio</span>
        </Link>

        <div className="mb-4.5 flex flex-wrap gap-2">
          <Badge color="orange">{project.type}</Badge>
          <Badge color="green">{project.tech}</Badge>
          <Badge color="purple" className="uppercase">
            {project.size}
          </Badge>
          <span className="inline-flex items-center font-mono text-[11px] text-metal-500 dark:text-metal-400">
            {project.status === "shipped" ? "○ shipped" : "● in progress"}
          </span>
        </div>

        <h1 className="mb-5.5 max-w-[820px] text-3xl font-extrabold leading-[1.15] text-myblack sm:text-4xl md:text-[44px] dark:text-white">
          {project.name}
        </h1>

        <p className="mb-8 max-w-[680px] font-mono text-[14px] leading-[1.65] text-metal-500 dark:text-metal-400">
          {project.description}
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={linkButtonClass}
          >
            visit demo
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
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkButtonClass}
            >
              <FaGithub size={14} />
              source
            </a>
          )}
        </div>

        <article className="min-w-0 max-w-[720px]">
          <MDXContent code={project.code} components={blogMdxComponents} />
        </article>

        {(prev || next) && (
          <>
            <div className="my-10 border-t border-dashed border-mygreen/40 dark:border-myred/40" />
            <div className="flex flex-col gap-4 sm:flex-row">
              {prev && (
                <Link
                  href={`/portfolio/${prev.slug}`}
                  className="flex-1 rounded-2xl border border-mygreen/25 px-5.5 py-4.5 transition-colors hover:border-mygreen dark:border-myred/25 dark:hover:border-myred"
                >
                  <div className="mb-1.5 font-mono text-[11px] font-medium text-mygreen dark:text-myred">
                    ← previous
                  </div>
                  <div className="text-[15px] font-bold text-myblack dark:text-white">
                    {prev.name}
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  href={`/portfolio/${next.slug}`}
                  className={cn(
                    "flex-1 rounded-2xl border border-mygreen/25 px-5.5 py-4.5 text-right transition-colors hover:border-mygreen dark:border-myred/25 dark:hover:border-myred",
                    !prev && "sm:ml-auto"
                  )}
                >
                  <div className="mb-1.5 font-mono text-[11px] font-medium text-mygreen dark:text-myred">
                    next →
                  </div>
                  <div className="text-[15px] font-bold text-myblack dark:text-white">
                    {next.name}
                  </div>
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default ProjectPage;
