import Header from "@/components/Header";
import SubscribeForm from "@/components/SubscribeForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog",
  description:
    "frérot ntwali's blog posts and articles about software engineering, web development and daily life",
};
const BlogPage = () => {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center text-center h-[60vh] gap-10 px-3">
        <h1 className="text-myblack dark:text-white text-lg font-bold md:max-w-[40%]">
          I will be writing some exciting blog posts soon. Join the waitlist to
          get notified when new content is available!
        </h1>
        <div className=" p-6 rounded-lg shadow-md border-2 border-dashed border-mygreen dark:border-myred ">
          <h2 className="text-xl  font-semibold mb-4">Join the Waitlist</h2>
          <SubscribeForm />
          <p className="text-xs text-gray-500 mt-3">
            I&apos;ll only send emails when new content is available. No spam.
          </p>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
