import { LeaderboardEntry } from "@/types/constants";
import { kvGet, kvPut } from "./cloudflare-kv";

const INDEX_KEY = "leaderboard:index";

type LeaderboardIndexItem = {
  id: string;
  solveTimeMs: number;
};

async function readIndex(): Promise<LeaderboardIndexItem[]> {
  const raw = await kvGet(INDEX_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as LeaderboardIndexItem[];
  } catch {
    return [];
  }
}

async function writeIndex(index: LeaderboardIndexItem[]) {
  const sorted = [...index].sort((a, b) => a.solveTimeMs - b.solveTimeMs);
  await kvPut(INDEX_KEY, JSON.stringify(sorted));
}

export function formatSolveTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes === 0) return `${seconds}s`;
  return `${minutes}m ${seconds}s`;
}

export async function getEntry(hash: string): Promise<LeaderboardEntry | null> {
  const raw = await kvGet(`entry:${hash}`);
  if (!raw) return null;
  return JSON.parse(raw) as LeaderboardEntry;
}

export async function getRank(hash: string): Promise<number | null> {
  const index = await readIndex();
  const pos = index.findIndex((item) => item.id === hash);
  if (pos === -1) return null;
  return pos + 1;
}

export async function recordCompletion(
  hash: string,
  name: string,
  language: string,
  solveTimeMs: number
): Promise<{ entry: LeaderboardEntry; rank: number; alreadyExists: boolean }> {
  const existing = await getEntry(hash);
  if (existing) {
    const rank = (await getRank(hash)) ?? 0;
    return { entry: existing, rank, alreadyExists: true };
  }

  const entry: LeaderboardEntry = {
    id: hash,
    name,
    language,
    solveTimeMs,
    completedAt: new Date().toISOString(),
  };

  const index = await readIndex();
  index.push({ id: hash, solveTimeMs });
  await writeIndex(index);
  await kvPut(`entry:${hash}`, JSON.stringify(entry));

  const rank = (await getRank(hash)) ?? index.length;
  return { entry, rank, alreadyExists: false };
}

export async function getLeaderboard(limit = 50): Promise<LeaderboardEntry[]> {
  const index = await readIndex();
  const slice = index.slice(0, limit);
  const entries = await Promise.all(slice.map((item) => getEntry(item.id)));
  return entries.filter((e): e is LeaderboardEntry => e !== null);
}

export async function updateEntry(
  hash: string,
  data: Pick<LeaderboardEntry, "initials" | "message" | "feedback" | "link">
): Promise<LeaderboardEntry | null> {
  const entry = await getEntry(hash);
  if (!entry) return null;

  const updated: LeaderboardEntry = {
    ...entry,
    ...data,
  };

  await kvPut(`entry:${hash}`, JSON.stringify(updated));
  return updated;
}
