import Header from "@/components/Header";
import BlogList from "@/components/blog/BlogList";
import SubscribeSection from "@/components/blog/SubscribeSection";
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
      <div className="px-4 pb-10 md:px-6">
        <SubscribeSection />
      </div>
    </main>
  );
};

export default BlogPage;
