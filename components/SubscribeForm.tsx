"use client";
import subscribe from "@/app/actions/subscribe";
import { useActionState } from "react";

const SubscribeForm = () => {
  const initialState = { message: "", success: false };
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-1.5" noValidate>
      <div className="relative">
        <input
          type="email"
          placeholder="you@email.com"
          className="w-full rounded-md border border-metal-200 bg-white py-1.5 pl-3 pr-14 font-mono text-xs text-myblack placeholder:text-metal-400 focus:outline-none focus:ring-1 focus:ring-mygreen disabled:cursor-not-allowed disabled:opacity-70 dark:border-metal-700 dark:bg-metal-900 dark:text-white dark:placeholder:text-metal-500 dark:focus:ring-myred"
          name="email"
          id="email"
          disabled={pending}
          aria-disabled={pending}
          aria-invalid={state.message && !state.success ? true : undefined}
          aria-describedby={state.message ? "subscribe-message" : undefined}
        />
        <button
          type="submit"
          disabled={pending}
          className="absolute right-1 top-1 bottom-1 rounded bg-mygreen px-2.5 font-mono text-[10px] font-medium text-white hover:bg-mygreen/85 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-myred dark:hover:bg-myred/85"
        >
          {pending ? "…" : "join"}
        </button>
      </div>

      {state.message && (
        <p
          id="subscribe-message"
          role="status"
          className={`font-mono text-[10px] ${
            state.success
              ? "text-mygreen dark:text-myred"
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
