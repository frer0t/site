"use client";

import { useActionState } from "react";
import { ChallengeTokenPayload } from "@/lib/challenge-auth";

type SubmitState = {
  message: string;
  success: boolean;
};

async function submitMessage(
  _prev: SubmitState,
  formData: FormData
): Promise<SubmitState> {
  const initials = formData.get("initials");
  const message = formData.get("message");
  const feedback = formData.get("feedback");
  const link = formData.get("link");

  try {
    const res = await fetch("/api/challenge/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        initials,
        message,
        feedback: feedback || undefined,
        link: link || undefined,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        message: data.message ?? "something went wrong",
        success: false,
      };
    }

    return {
      message: data.message ?? "message saved",
      success: true,
    };
  } catch {
    return { message: "network error — try again", success: false };
  }
}

const inputClass =
  "rounded-md border border-metal-200 bg-white px-2.5 py-1.5 font-mono text-xs text-myblack placeholder:text-metal-400 focus:outline-none focus:ring-1 focus:ring-mygreen disabled:opacity-50 dark:border-metal-700 dark:bg-metal-900 dark:text-white dark:placeholder:text-metal-500 dark:focus:ring-myred";

const DevSubmitForm = ({ session: _session }: { session: ChallengeTokenPayload }) => {
  const initialState = { message: "", success: false };
  const [state, formAction, pending] = useActionState(submitMessage, initialState);

  return (
    <form action={formAction} className="mt-3 flex flex-col gap-2">
      <p className="font-mono text-[10px] text-metal-500 dark:text-metal-400">
        leave a message on the board
      </p>

      <div className="flex flex-wrap gap-2">
        <input
          type="text"
          name="initials"
          maxLength={2}
          required
          disabled={pending || state.success}
          className={`w-14 ${inputClass}`}
          placeholder="fn"
          aria-label="initials"
        />
        <input
          type="text"
          name="message"
          required
          disabled={pending || state.success}
          className={`min-w-[10rem] flex-1 ${inputClass}`}
          placeholder="your message"
          aria-label="message"
        />
        <button
          type="submit"
          disabled={pending || state.success}
          className="rounded-md bg-mygreen px-3 py-1.5 font-mono text-xs font-medium text-white hover:bg-mygreen/85 disabled:opacity-50 dark:bg-myred dark:hover:bg-myred/85"
        >
          {pending ? "…" : state.success ? "saved" : "submit"}
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <input
          type="text"
          name="feedback"
          disabled={pending || state.success}
          className={`min-w-[8rem] flex-1 ${inputClass}`}
          placeholder="feedback (optional)"
          aria-label="feedback"
        />
        <input
          type="text"
          name="link"
          disabled={pending || state.success}
          className={`min-w-[8rem] flex-1 ${inputClass}`}
          placeholder="link (optional)"
          aria-label="link"
        />
      </div>

      {state.message && (
        <p
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

export default DevSubmitForm;
