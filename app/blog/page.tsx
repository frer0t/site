import Header from "@/components/Header";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog",
  description:
    "frérot ntwali's blog posts and articles about software engineering, web development and daily life",
};
const page = () => {
  return (
    <main>
      <Header />
    </main>
  );
};

export default page;
