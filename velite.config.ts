import { defineCollection, defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(160),
      date: s.isodate(),
      tags: s.array(s.enum(["ai", "notes"])),
      excerpt: s.string().max(320),
      cover: s.string().optional(),
      coverRounded: s.number().optional(),
      toc: s.toc(),
      metadata: s.metadata(),
      code: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^blog\//, ""),
      readTime: `${data.metadata.readingTime} min read`,
    })),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      name: s.string().max(120),
      description: s.string().max(500),
      demo: s.string(),
      github: s.string().optional(),
      type: s.enum(["client", "oss", "product"]),
      tech: s.enum([
        "web",
        "backend",
        "mobile",
        "devops/cloud",
        "ai/ml",
        "package",
      ]),
      size: s.enum(["s", "m", "l"]),
      status: s.enum(["in-progress", "shipped"]),
      order: s.number(),
      cover: s.string().optional(),
      toc: s.toc(),
      metadata: s.metadata(),
      code: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^projects\//, ""),
    })),
});

export default defineConfig({
  root: "content",
  collections: { posts, projects },
  mdx: {
    rehypePlugins: [rehypeSlug],
  },
});
