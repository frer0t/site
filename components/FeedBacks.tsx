import FeedBackError from "./Errors/FeedbackError";
import FeedbackCard from "./FeedbackCard";

const FeedBacks = async () => {
  let feedbacks: IFeedback[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/iamdevtoo`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    feedbacks = await response.json();
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
