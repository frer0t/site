import { Skeleton } from "../Skeleton/Skeleton";
import { SkeletonLine } from "../Skeleton/SkeletonLine";

const FeedbackSkeleton = () => {
  const arr = Array.from({ length: 4 });
  return (
    <>
      {arr.map((_, index) => (
        <Skeleton
          key={index}
          className="rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 max-w-md border-2 border-dashed border-mygreen dark:border-myred overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6">
            <SkeletonLine className="h-12 w-12  rounded-full" />
            <SkeletonLine className="h-4  w-24" />
          </div>
          <div className="space-y-2 w-full">
            <SkeletonLine className="h-16 w-full" />
            <SkeletonLine className="h-16 w-full" />
            <SkeletonLine className="h-16 w-full" />
          </div>
        </Skeleton>
      ))}
    </>
  );
};

export default FeedbackSkeleton;
