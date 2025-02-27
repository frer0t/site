import Header from "@/components/Header";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "identity",
  description:
    "frérot ntwali's identity verification, where you find social media links, and more",
};
const page = () => {
  return (
    <main>
      <Header />
    </main>
  );
};

export default page;
