import { challengeCopy } from "@/constants/challenge-responses";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  return NextResponse.json(challengeCopy.proof.get(num1, num2));
}

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();

  try {
    const body = await req.json();
    const num1 = body?.num1;
    const num2 = body?.num2;
    const header = req.headers.get("x-developer-skill");

    if (num1 === undefined || num2 === undefined) {
      return NextResponse.json(challengeCopy.proof.missingBody, { status: 400 });
    }

    if (!header) {
      return NextResponse.json(challengeCopy.proof.missingHeader, { status: 400 });
    }

    if (parseInt(header, 10) !== Number(num1) + Number(num2)) {
      return NextResponse.json(challengeCopy.proof.wrongSum, { status: 400 });
    }

    const hash = cookieStore.get("hash")?.value;
    if (!hash) {
      return NextResponse.json(
        {
          message: "no session — start at POST /api/challenge/register",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(challengeCopy.proof.success(hash));
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(challengeCopy.proof.invalidJson, { status: 400 });
    }

    return NextResponse.json(
      { message: "something broke on our end. try again." },
      { status: 500 }
    );
  }
}
