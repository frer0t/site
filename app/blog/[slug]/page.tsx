import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Metadata } from "next";
import { getPost, getPostSlugs } from "@/lib/posts";
import TagPill from "@/components/blog/TagPill";
import BlogImage from "@/components/blog/BlogImage";
import Toc from "@/components/blog/Toc";
import AdjacentPostCard from "@/components/blog/AdjacentPostCard";
import MDXContent from "@/components/blog/MDXContent";
import { blogMdxComponents } from "@/components/blog/mdxComponents";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPost(slug);
  if (!entry) return {};
  return { title: entry.post.title, description: entry.post.excerpt };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const entry = getPost(slug);
  if (!entry) notFound();

  const { post, prev, next } = entry;

  return (
    <main>
      <div className="mx-auto max-w-5xl px-4 pb-24 pt-6 md:px-6">
        <Link
          href="/blog"
          className="my-7 inline-flex items-center gap-2 font-mono text-sm text-metal-500 transition-colors hover:text-mygreen dark:text-metal-400 dark:hover:text-myred"
        >
          <span>←</span>
          <span>back to /blog</span>
        </Link>

        <div className="mb-4.5 flex gap-2">
          {post.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>

        <h1 className="mb-5.5 max-w-[820px] text-3xl font-extrabold leading-[1.15] text-myblack sm:text-4xl md:text-[44px] dark:text-white">
          {post.title}
        </h1>

        <div className="mb-8 flex flex-wrap items-center gap-3.5">
          <Image
            src="/me-light.jpg"
            width={36}
            height={36}
            alt="frérot ntwali"
            className="size-9 shrink-0 rounded-full object-cover object-top dark:hidden"
          />
          <Image
            src="/me-dark.jpg"
            width={36}
            height={36}
            alt="frérot ntwali"
            className="hidden size-9 shrink-0 rounded-full object-cover object-top dark:block"
          />
          <span className="font-mono text-[13.5px] text-metal-500 dark:text-metal-400">
            <span className="font-semibold text-mygreen dark:text-myred">frérot ntwali</span> ·{" "}
            {format(new Date(post.date), "MMM d, yyyy")} · {post.readTime}
          </span>
        </div>
          <BlogImage
            src={post.cover}
            alt={post.title}
            height={420}
            rounded={post.coverRounded ?? 24}
          />
        <div className="flex items-start gap-14">
          {post.toc.length > 0 && <Toc toc={post.toc} />}
          <article className="mx-auto min-w-0 max-w-[680px] flex-1">
            <MDXContent code={post.code} components={blogMdxComponents} />
          </article>
        </div>

        {(prev || next) && (
          <>
            <div className="my-14 border-t border-dashed border-mygreen/40 dark:border-myred/40" />
            <div className="flex flex-col gap-4 sm:flex-row">
              {prev && <AdjacentPostCard post={prev} direction="prev" />}
              {next && <AdjacentPostCard post={next} direction="next" />}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default BlogPostPage;
