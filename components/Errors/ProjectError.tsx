"use client";
interface ProjectErrorProps {
  error?: Error;
}
const ProjectError: React.FC<ProjectErrorProps> = ({ error }) => {
  return (
    <div className="flex items-center justify-center col-span-full">
      <div className="flex flex-col bg-white/90 dark:bg-myblack/95 p-4 ">
        <h4 className="text-2xl font-bold text-red-600 mb-4">
          Unable to load projects
        </h4>
        <p className="text-myblack/40 dark:text-white/20 mb-4">
          {error?.message ||
            "Something went wrong while loading the career data."}
        </p>

        <button
          onClick={() => window.location.reload()}
          className=" text-mygreen dark:myred no-underline hover:underline hover:decoration-wavy transition-colors"
        >
          try again
        </button>
      </div>
    </div>
  );
};

export default ProjectError;
