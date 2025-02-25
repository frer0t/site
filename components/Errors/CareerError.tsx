"use client";
interface CareerErrorProps {
  error?: Error;
}

const CareerError: React.FC<CareerErrorProps> = ({ error }) => {
  return (
    <div className="flex flex-col min-h-[400px] p-4">
      <h4 className="text-2xl font-bold text-red-600 mb-4">
        Unable to load career information
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
  );
};

export default CareerError;
