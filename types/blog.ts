import type { Post } from "@/.velite";

export type BlogTag = "ai" | "notes";

export type BlogPost = Post;

export interface BlogPostSummary extends BlogPost {
  num: string;
}
