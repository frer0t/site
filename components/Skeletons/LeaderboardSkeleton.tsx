import { SkeletonLine } from "../Skeleton/SkeletonLine";

const LeaderboardSkeleton = () => (
  <div className="space-y-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <SkeletonLine key={i} className="h-10 w-full" />
    ))}
  </div>
);

export default LeaderboardSkeleton;
