interface SkeletonTheme {
  base: string;
  animation: string;
  line: string;
}

const skeletonTheme: SkeletonTheme = {
  base: "w-full",
  animation: "animate-pulse",
  line: "w-full bg-metal-100 dark:bg-metal-800 rounded-xl",
};

export default skeletonTheme;
