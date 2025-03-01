import { Skeleton, SkeletonLine } from "@/components/Skeleton/";
const ProjectSkeleton = () => {
  const arr = Array.from({ length: 5 });
  return (
    <>
      {arr.map((_, index) => (
        <Skeleton
          key={index}
          className="w-full flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-myblack/95 border-l-2 border-dashed border-mygreen dark:border-myred backdrop-blur-sm h-fit"
        >
          <SkeletonLine className="h-40 w-full rounded-none" />
          <div className="space-y-2 my-4 px-1">
            <SkeletonLine className="h-3 w-9/12" />
            <SkeletonLine className="h-3 w-11/12" />
            <div className="flex gap-1">
              <SkeletonLine className="h-4 w-1/12" />
              <SkeletonLine className="h-4 w-2/12" />
            </div>
          </div>
        </Skeleton>
      ))}
    </>
  );
};

export default ProjectSkeleton;
