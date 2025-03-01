import { NextResponse } from "next/server";

export async function GET() {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const response = NextResponse;
  return response.json({
    message: `Ah, a challenger appears! 🧙‍♂️ Time to prove those dev skills! Calculate ${num1} + ${num2} and make a POST to /api/devonly with {"num1": ${num1}, "num2": ${num2}} and header "x-developer-skill" set to the sum. No wizardry shortcuts allowed! ✨`,
    num1,
    num2,
    hint: "Real devs know their arithmetic!",
  });
}
