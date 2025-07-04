import { monkeyTypeAPI } from "@/services/monkeytype";
import { MonkeyTypeData } from "@/types/monkeytype";

// Server-side rate limiting and caching
let lastFetchTime: number = 0;
let cachedData: MonkeyTypeData | null = null;

// Cache for 1 hour to respect rate limits
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export async function GET() {
  try {
    const now = Date.now();

    // Return cached data if still fresh
    if (cachedData && now - lastFetchTime < CACHE_DURATION) {
      console.log("📦 Returning cached MonkeyType data");
      return Response.json({
        success: true,
        data: cachedData,
        fromCache: true,
      });
    }

    console.log(
      "🔄 Fetching fresh MonkeyType data...",
      new Date().toISOString()
    );

    // Fetch last result from MonkeyType API (server-side, secure)
    const lastResult = await monkeyTypeAPI.getLastResult();

    // Prepare the data
    const data = {
      wpm: lastResult.wpm,
      accuracy: lastResult.acc,
      mode: `${lastResult.mode} ${lastResult.mode2}`,
      language: lastResult.language,
      timestamp: lastResult.timestamp,
      fetchedAt: new Date().toISOString(),
    };

    // Cache the data
    cachedData = data;
    lastFetchTime = now;

    console.log("✅ MonkeyType data fetched:", {
      wpm: data.wpm,
      accuracy: data.accuracy,
      mode: data.mode,
    });

    return Response.json({
      success: true,
      data,
      fromCache: false,
    });
  } catch (error) {
    console.error("❌ Failed to fetch MonkeyType data:", error);

    // Return cached data if available, even on error
    if (cachedData) {
      console.log("📦 Returning stale cached data due to error");
      return Response.json({
        success: true,
        data: cachedData,
        fromCache: true,
        warning: "Using cached data due to API error",
      });
    }

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
