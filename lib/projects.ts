import { projects } from "@/.velite";
import type { ProjectSummary } from "@/types/project";

export function getAllProjects(): ProjectSummary[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((project) => project.slug);
}

export function getProject(slug: string) {
  const all = getAllProjects();
  const index = all.findIndex((project) => project.slug === slug);
  if (index === -1) return null;

  return {
    project: all[index],
    prev: all[index - 1] ?? null,
    next: all[index + 1] ?? null,
  };
}
