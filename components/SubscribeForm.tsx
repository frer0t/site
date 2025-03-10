"use client";
import subscribe from "@/app/actions/subscribe";
import { useActionState } from "react";
const SubscribeForm = () => {
  const initialState = { message: "", success: false };
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-3 " noValidate>
      <div className="relative">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mygreen dark:focus:ring-myred focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-80"
          name="email"
          id="email"
          disabled={pending}
          aria-disabled={pending}
        />
        <button
          type="submit"
          disabled={pending}
          className="absolute right-1.5 top-1.5 bg-mygreen dark:bg-myred text-white font-medium px-4 py-1.5 rounded-md hover:bg-mygreen/80 dark:hover:bg-myred/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "..." : "Subscribe"}
        </button>
      </div>

      {state.message && (
        <p
          className={`text-sm text-center mt-1 animate-fade-in ${
            state.success
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
};

export default SubscribeForm;
