import { LeaderboardEntry } from "@/types/constants";
import { formatSolveTime } from "@/lib/leaderboard";
import Link from "next/link";
import { cn } from "@/utils/cn";

const rankText: Record<number, string> = {
  1: "text-amber-500 dark:text-amber-400",
  2: "text-metal-400 dark:text-metal-300",
  3: "text-amber-700 dark:text-amber-600",
};

const LeaderboardRow = ({
  entry,
  rank,
}: {
  entry: LeaderboardEntry;
  rank: number;
}) => {
  const { message, feedback, link, name, language, solveTimeMs } = entry;

  return (
    <li className="flex items-start justify-between gap-4 border-b border-black/10 py-4 last:border-0 dark:border-white/10">
      <div className="flex min-w-0 gap-3">
        <span
          className={cn(
            "w-7 shrink-0 font-mono text-sm font-bold tabular-nums",
            rankText[rank] ?? "text-metal-400 dark:text-metal-500"
          )}
        >
          #{rank}
        </span>
        <div className="min-w-0">
          <p className="font-mono text-sm text-myblack dark:text-white">
            <span className="font-semibold">{name}</span>
            <span className="text-metal-500 dark:text-metal-400"> · {language}</span>
          </p>
          {message && (
            <p className="mt-1 font-mono text-xs text-metal-600 dark:text-metal-300">{message}</p>
          )}
          {(feedback || link) && (
            <p className="mt-0.5 font-mono text-[11px] text-metal-400 dark:text-metal-500">
              {feedback}
              {feedback && link && " · "}
              {link && (
                <Link
                  href={link.startsWith("https") ? link : `https://${link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mygreen hover:underline dark:text-myred"
                >
                  {link.replace(/^https?:\/\//, "")}
                </Link>
              )}
            </p>
          )}
        </div>
      </div>

      <span className="shrink-0 font-mono text-sm font-semibold tabular-nums text-mygreen dark:text-myred">
        {formatSolveTime(solveTimeMs)}
      </span>
    </li>
  );
};

export default LeaderboardRow;
