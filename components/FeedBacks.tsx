import { IFeedback } from "@/types/constants";
import prisma, { ConnectDb } from "@/utils/prisma";
import { unstable_cache } from "next/cache";
import FeedBackError from "./Errors/FeedbackError";
import FeedbackCard from "./FeedbackCard";

const getFeedbacks = unstable_cache(
  async () => {
    await ConnectDb();
    const data = await prisma.feebacks.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return data.map((item) => ({
      initials: item.initials,
      message: item.message,
      feedback: item.feedback ?? undefined,
      link: item.link ?? undefined,
      created_at: item.created_at.toISOString(),
    }));
  },
  ["feedbacks"],
  {
    revalidate: 3600, // Cache for 1 hour
    tags: ["feedbacks"],
  }
);

const FeedBacks = async () => {
  let feedbacks: IFeedback[] = [];
  try {
    feedbacks = await getFeedbacks();
  } catch (error) {
    return <FeedBackError error={error as Error} />;
  }
  return (
    <>
      {feedbacks.map((feedback, index) => (
        <FeedbackCard key={index} data={feedback} index={index} />
      ))}
    </>
  );
};

export default FeedBacks;
