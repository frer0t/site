import Header from "@/components/Header";
import BlogList from "@/components/blog/BlogList";
import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog",
  description:
    "frérot ntwali's blog posts and articles about software engineering, web development and daily life",
};

const BlogPage = () => {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      <Header />
      <BlogList posts={posts} />
    </main>
  );
};

export default BlogPage;
