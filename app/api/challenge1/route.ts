import crypto from "crypto";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const response = NextResponse;
  const hint = "make sure add name and language in your request body";
  const cookieStore = await cookies();
  try {
    const body = await req.json();

    const name = body?.name;
    const language = body?.language;

    if (!name || !language) {
      return response.json(
        {
          message:
            "Oops! Missing ingredients in your coding potion! 🧪 We need both your 'name' and favorite 'language' to continue this adventure! 🚀",
          hint,
        },
        {
          status: 400,
        }
      );
    }

    const hash = crypto.createHash("sha256").update(name).digest("hex");

    cookieStore.set("hash", hash, {
      httpOnly: true,
      sameSite: "strict",
    });
    cookieStore.set("name", name, {
      httpOnly: true,
      sameSite: "strict",
    });

    return response.json({
      message: `Nice try, ${name}! But any one can click buttons! 🕹️ GET over to /api/verifydev to prove you're the real ${language} wizard! 🧙‍♂️✨`,
      hash,
      hint: "keep the hash safe you need it",
    });
  } catch (e) {
    if (e instanceof SyntaxError) {
      return response.json(
        {
          message: "Oops! Looks like you forgot some thing",
          hint,
        },
        {
          status: 400,
        }
      );
    }

    return response.json(
      {
        message: `Oops! My magical code cauldron just exploded! 🧪💥 Internal server error occurred. Even wizards have bad days!`,
        error: JSON.stringify(e),
      },
      {
        status: 500,
      }
    );
  }
}
