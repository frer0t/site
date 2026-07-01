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
          className="w-full pl-3.5 pr-[74px] py-2 text-sm border border-gray-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-mygreen dark:focus:ring-myred focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-80"
          name="email"
          id="email"
          disabled={pending}
          aria-disabled={pending}
        />
        <button
          type="submit"
          disabled={pending}
          className="absolute right-1 top-1 bottom-1 bg-mygreen dark:bg-myred text-white text-xs font-medium px-3 rounded-md hover:bg-mygreen/80 dark:hover:bg-myred/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "..." : "Subscribe"}
        </button>
      </div>

      {state.message && (
        <p
          className={`text-xs text-center animate-fade-in ${
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
