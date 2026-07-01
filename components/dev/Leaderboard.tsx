import { getLeaderboard } from "@/lib/leaderboard";
import LeaderboardRow from "./LeaderboardRow";

const Leaderboard = async () => {
  let entries;
  try {
    entries = await getLeaderboard();
  } catch {
    return (
      <p className="py-12 text-center font-mono text-xs text-metal-500 dark:text-metal-400">
        couldn&apos;t load the leaderboard right now.
      </p>
    );
  }

  if (entries.length === 0) {
    return (
      <p className="py-12 text-center font-mono text-xs text-metal-500 dark:text-metal-400">
        no times yet — finish the challenge to claim #1
      </p>
    );
  }

  return (
    <ol className="w-full list-none">
      {entries.map((entry, index) => (
        <LeaderboardRow key={entry.id} entry={entry} rank={index + 1} />
      ))}
    </ol>
  );
};

export default Leaderboard;
