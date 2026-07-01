import { ChallengeTokenPayload } from "@/lib/challenge-auth";
import { formatSolveTime, getRank } from "@/lib/leaderboard";
import DevSubmitForm from "./DevSubmitForm";
import { cn } from "@/utils/cn";

const rankText: Record<number, string> = {
  1: "text-amber-500 dark:text-amber-400",
  2: "text-metal-400 dark:text-metal-300",
  3: "text-amber-700 dark:text-amber-600",
};

const VictoryBanner = async ({ session }: { session: ChallengeTokenPayload }) => {
  const rank = (await getRank(session.hash)) ?? 0;
  const solveTime = formatSolveTime(session.solveTimeMs);

  return (
    <div className="mb-8 w-full">
      <p className="font-mono text-sm text-myblack dark:text-white">
        your run:{" "}
        <span className="font-semibold text-mygreen dark:text-myred">{solveTime}</span>
        {rank > 0 && (
          <>
            {" "}
            ·{" "}
            <span className={cn("font-semibold", rankText[rank])}>#{rank}</span>
          </>
        )}
      </p>
      <DevSubmitForm session={session} />
    </div>
  );
};

export default VictoryBanner;
