import type {
  MonkeyTypeLastResult,
  MonkeyTypeResponse,
} from "@/types/monkeytype";

export class MonkeyTypeAPI {
  private baseURL = "https://api.monkeytype.com";
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async request<T>(endpoint: string): Promise<MonkeyTypeResponse<T>> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: {
        Authorization: `ApeKey ${this.apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `MonkeyType API error: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  }

  async getLastResult(): Promise<MonkeyTypeLastResult> {
    const response = await this.request<MonkeyTypeLastResult>("/results/last");
    return response.data;
  }
}

export const monkeyTypeAPI = new MonkeyTypeAPI(process.env.MONKEY_TYPE_KEY!);
