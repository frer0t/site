import type { MonkeyTypeData } from "@/types/monkeytype";
import { formatDistanceToNow } from "date-fns";
export function getMonkeyTypeDisplayText(data: MonkeyTypeData | null): string {
  if (!data) {
    return "...";
  }

  return `${data.wpm} wpm`;
}
export function formatMonkeyTypeTimestamp(timestamp: number): string {
  try {
    return formatDistanceToNow(new Date(timestamp), {
      addSuffix: true,
    });
  } catch (error) {
    return "recently";
  }
}
export function getMonkeyTypeTimestampText(
  data: MonkeyTypeData | null
): string {
  if (!data) {
    return "recently";
  }

  return formatMonkeyTypeTimestamp(data.timestamp);
}
