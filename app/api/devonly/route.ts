import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const response = NextResponse;
  try {
    const body = await req.json();
    const num1 = body?.num1;
    const num2 = body?.num2;
    const header = req.headers.get("x-developer-skill");
    if (!num1 || !num2) {
      return response.json(
        {
          message:
            "Oops! Looks like you forgot some numbers in your magic potion 🧪! Please include 'num1', and 'num2' fields in",
        },
        {
          status: 400,
        }
      );
    }
    if (!header) {
      return response.json(
        {
          message:
            "Uh-oh! Your request is missing its hat 🧢! Please add the 'x-developer-skill' header to complete the outfit.",
        },
        {
          status: 400,
        }
      );
    }
    if (parseInt(header) !== num1 + num2) {
      return response.json(
        {
          message:
            "Nice try, but your math wizardry needs some practice! 🧮❌ The 'x-developer-skill' value doesn't match the secret formula. 🔮✨",
        },
        {
          status: 400,
        }
      );
    }
    return response.json({
      message:
        "🎉 WOOHOO! You cracked the code! Your developer wizardry is off the charts! 🧙‍♂️✨ Ready for the final boss battle? before GET try magical self to /api/challenge2/<your_hash_from_challenge1> for more info and continue your quest!",
      hint: "this one won't be as easy! 😎",
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return response.json(
        {
          message: "Oops! Looks like you forgot some thing",
          hint: "make sure add num1 and num2 in your request body",
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
