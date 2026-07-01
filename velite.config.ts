import { defineCollection, defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";

const posts = defineCollection({
  name: "Post",
  pattern: "*.mdx",
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
      readTime: `${data.metadata.readingTime} min read`,
    })),
});

export default defineConfig({
  root: "content/blog",
  collections: { posts },
  mdx: {
    rehypePlugins: [rehypeSlug],
  },
});
