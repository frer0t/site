import type { MonkeyTypeData } from "@/types/monkeytype";
// Simple client-side cache
let cachedMonkeyTypeData: MonkeyTypeData | null = null;
let lastFetchTime: number = 0;

// Cache for 30 minutes (server handles the main rate limiting)
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

// LocalStorage keys
const STORAGE_KEY = "monkeytype_data";
const STORAGE_META_KEY = "monkeytype_meta";

function loadFromStorage(): void {
  if (typeof window === "undefined") return;

  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    const storedMeta = localStorage.getItem(STORAGE_META_KEY);

    if (storedData && storedMeta) {
      const meta = JSON.parse(storedMeta);
      const now = Date.now();
      if (now - meta.lastFetchTime < CACHE_DURATION * 4) {
        cachedMonkeyTypeData = JSON.parse(storedData);
        lastFetchTime = meta.lastFetchTime;
      }
    }
  } catch (error) {
    console.error("Error loading MonkeyType data from storage:", error);
  }
}

// Save data to localStorage
function saveToStorage(): void {
  if (typeof window === "undefined") return;

  try {
    if (cachedMonkeyTypeData) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cachedMonkeyTypeData));
      localStorage.setItem(
        STORAGE_META_KEY,
        JSON.stringify({
          lastFetchTime,
        })
      );
    }
  } catch (error) {
    console.error("Error saving MonkeyType data to storage:", error);
  }
}

export async function getMonkeyTypeData(): Promise<MonkeyTypeData | null> {
  // Only run on client side
  if (typeof window === "undefined") {
    return null;
  }

  // Load cached data on first call
  if (!cachedMonkeyTypeData && !lastFetchTime) {
    loadFromStorage();
  }

  const now = Date.now();

  // Check if we have cached data that's still fresh
  if (cachedMonkeyTypeData && now - lastFetchTime < CACHE_DURATION) {
    console.log("📦 Using cached MonkeyType data");
    return cachedMonkeyTypeData;
  }

  try {
    console.log("🔄 Fetching MonkeyType data from secure API");

    // Fetch from our secure server-side API
    const response = await fetch("/api/monkeytype", {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();

    if (result.success && result.data) {
      cachedMonkeyTypeData = {
        wpm: result.data.wpm,
        accuracy: result.data.accuracy,
        mode: result.data.mode,
        language: result.data.language,
        timestamp: result.data.timestamp,
      };
      lastFetchTime = now;
      saveToStorage();

      console.log(
        `✅ MonkeyType data updated: ${cachedMonkeyTypeData.wpm} WPM`
      );
      return cachedMonkeyTypeData;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("❌ Failed to fetch MonkeyType data:", error);
  }

  // Return cached data if available, even if stale
  if (cachedMonkeyTypeData) {
    console.log("📦 Using stale cached data due to API error");
  }
  return cachedMonkeyTypeData;
}
// Simple force refresh function
export async function forceRefreshMonkeyTypeData(): Promise<MonkeyTypeData | null> {
  cachedMonkeyTypeData = null;
  lastFetchTime = 0;
  return getMonkeyTypeData();
}
