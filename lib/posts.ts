import { posts } from "@/.velite";
import { BlogPostSummary } from "@/types/blog";

export function getAllPosts(): BlogPostSummary[] {
  const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return sorted.map((post, index) => ({
    ...post,
    num: String(index + 1).padStart(2, "0"),
  }));
}

export function getPostSlugs(): string[] {
  return posts.map((post) => post.slug);
}

export function getPost(slug: string) {
  const all = getAllPosts();
  const index = all.findIndex((post) => post.slug === slug);
  if (index === -1) return null;

  return {
    post: all[index],
    prev: all[index - 1] ?? null,
    next: all[index + 1] ?? null,
  };
}
