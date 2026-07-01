import Header from "@/components/Header";
import Leaderboard from "@/components/dev/Leaderboard";
import VictoryBanner from "@/components/dev/VictoryBanner";
import LeaderboardSkeleton from "@/components/Skeletons/LeaderboardSkeleton";
import { verifyChallengeToken } from "@/lib/challenge-auth";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Devs",
  description: "dev challenge leaderboard — fastest solvers top the board",
};

export const dynamic = "force-dynamic";

const DevsPage = async () => {
  const session = await verifyChallengeToken();

  return (
    <main className="min-h-screen">
      <Header secretTitle="/devs 💻" />
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-2 md:px-6">
        <p className="mb-6 font-mono text-xs text-metal-500 dark:text-metal-400">
          fastest solve wins
        </p>

        {session && <VictoryBanner session={session} />}

        <Suspense fallback={<LeaderboardSkeleton />}>
          <Leaderboard />
        </Suspense>
      </div>
    </main>
  );
};

export default DevsPage;
