interface MonkeyTypeLastResult {
  _id: string;
  wpm: number;
  rawWpm: number;
  charStats: number[];
  acc: number;
  mode: string;
  mode2: string | number;
  timestamp: number;
  testDuration: number;
  language: string;
  restartCount: number;
  incompleteTestSeconds: number;
  afkDuration: number;
  tags: string[];
  consistency: number;
  keyConsistency: number;
  chartData: {
    wpm: number[];
    raw: number[];
    err: number[];
  };
  uid: string;
  keySpacingStats: any;
  keyDurationStats: any;
}

interface MonkeyTypeResponse<T> {
  message: string;
  data: T;
}
interface MonkeyTypeData {
  wpm: number;
  accuracy: number;
  mode: string;
  language: string;
  timestamp: number;
}
export type { MonkeyTypeData, MonkeyTypeLastResult, MonkeyTypeResponse };
