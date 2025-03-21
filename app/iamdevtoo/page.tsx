import FeedBacks from "@/components/FeedBacks";
import Header from "@/components/Header";
import FeedbackSkeleton from "@/components/Skeletons/FeedbackSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Devs",
  description: "a directory of best developers with their thoughts",
};
const page = () => {
  return (
    <main>
      <Header secretTitle="/devs 💻" />
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-5 px-3 overflow-y-hidden ">
        <Suspense name="devs" fallback={<FeedbackSkeleton />}>
          <FeedBacks />
        </Suspense>
      </div>
    </main>
  );
};
export const dynamic = 'force-dynamic'
export default page;
