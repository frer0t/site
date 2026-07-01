import { challengeCopy, CHALLENGE_SESSION_MAX_AGE } from "@/constants/challenge-responses";
import crypto from "crypto";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const BODY_HINT = 'send { "name": "...", "language": "..." }';

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();

  try {
    const body = await req.json();
    const name = body?.name;
    const language = body?.language;

    if (!name || !language) {
      return NextResponse.json(challengeCopy.register.missingFields(BODY_HINT), {
        status: 400,
      });
    }

    const hash = crypto.createHash("sha256").update(name).digest("hex");
    const cookieOpts = {
      httpOnly: true,
      sameSite: "strict" as const,
      maxAge: CHALLENGE_SESSION_MAX_AGE,
    };

    cookieStore.set("hash", hash, cookieOpts);
    cookieStore.set("name", name, cookieOpts);
    cookieStore.set("language", language, cookieOpts);
    cookieStore.set("startedAt", Date.now().toString(), cookieOpts);

    return NextResponse.json(
      challengeCopy.register.success(name, language, hash)
    );
  } catch (e) {
    if (e instanceof SyntaxError) {
      return NextResponse.json(challengeCopy.register.invalidJson(BODY_HINT), {
        status: 400,
      });
    }

    return NextResponse.json(challengeCopy.register.serverError, { status: 500 });
  }
}
