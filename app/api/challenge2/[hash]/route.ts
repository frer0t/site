import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ hash: string }> }
) {
  const response = NextResponse;
  try {
    const cookieStore = await cookies();
    const cookiehash = cookieStore.get("hash");
    const hash = (await params).hash;

    if (cookiehash?.value !== hash) {
      return response.json({
        message:
          "🔒 Uh-oh! i told you keep it somewhere safe, No some magic shortcuts allowed here! ✨",
        hint: "check under the cookie 🍪 jar you can",
      });
    }
    const numbers = [4, 5, 6, 7, 8, 9];
    const number = numbers[hash.length % 2];
    cookieStore.set("answer", String(number.toString(2)), {
      httpOnly: true,
      sameSite: "strict",
    });
    return response.json({
      message: `🧩 Gold medal time! Can you crack this code? What's the binary version of ${number}? 🤔 POST to /api/finalboss/<your_hash_from_challenge1> and set the "x-developer-skill" header to the binary of ${number}. No magic shortcuts allowed! ✨`,
      number,
      hint: "Real coding ninjas count in 0s and 1s! 🥷",
      info: "You've reached the FINAL BOSS challenge! 🏆",
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return response.json(
        {
          message: "Oops! Looks like you forgot some thing",
        },
        {
          status: 400,
        }
      );
    }
    return response.json(
      {
        message: `Oops! My magical code cauldron just exploded! 🧪💥 Internal server error occurred. Even wizards have bad days!`,
        error: JSON.stringify(error),
      },
      {
        status: 500,
      }
    );
  }
}
