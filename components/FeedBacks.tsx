import { IFeedback } from "@/types/constants";
import prisma from "@/utils/prisma";
import { unstable_cache } from "next/cache";
import FeedBackError from "./Errors/FeedbackError";
import FeedbackCard from "./FeedbackCard";

const getFeedbacks = unstable_cache(
  async () => {
    const data = await prisma.feebacks.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return data.map((item) => ({
      feedback_id: item.feedback_id,
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
        <FeedbackCard
          key={feedback.feedback_id}
          data={feedback}
          index={index}
        />
      ))}
    </>
  );
};

export default FeedBacks;
