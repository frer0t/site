import { Skeleton, SkeletonLine } from "../Skeleton";
const CareerLoader = () => {
  return (
    <>
      <Skeleton className="min-w-[35rem] space-y-2.5 py-2">
        <SkeletonLine className="h-4 w-full" />
        <SkeletonLine className="h-2 w-6/12" />
        <div className="ml-4 mt-3 space-y-2">
          <SkeletonLine className="h-2 w-10/12" />
          <SkeletonLine className="h-2 w-10/12" />
          <SkeletonLine className="h-2 w-10/12" />
        </div>
        <SkeletonLine className="h-2 w-6/12" />
      </Skeleton>
      <Skeleton className="min-w-[35rem] space-y-2.5 py-2">
        <SkeletonLine className="h-4 w-full" />
        <SkeletonLine className="h-2 w-6/12" />
        <div className="ml-4 mt-3 space-y-2">
          <SkeletonLine className="h-2 w-10/12" />
          <SkeletonLine className="h-2 w-10/12" />
          <SkeletonLine className="h-2 w-10/12" />
        </div>
        <SkeletonLine className="h-2 w-6/12" />
      </Skeleton>
    </>
  );
};

export default CareerLoader;
