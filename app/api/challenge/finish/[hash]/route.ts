import { challengeCopy } from "@/constants/challenge-responses";
import {
  CHALLENGE_TOKEN_COOKIE,
  signChallengeToken,
} from "@/lib/challenge-auth";
import { formatSolveTime, recordCompletion } from "@/lib/leaderboard";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ hash: string }> }
) {
  const cookieStore = await cookies();
  const hash = (await params).hash;
  const cookiehash = cookieStore.get("hash");
  const number = req.headers.get("x-developer-skill");
  const numberCookie = cookieStore.get("answer");

  if (cookiehash?.value !== hash) {
    return NextResponse.json(challengeCopy.finish.hashMismatch, { status: 403 });
  }

  if (!number) {
    return NextResponse.json(challengeCopy.finish.missingHeader, { status: 400 });
  }

  if (!/^[01]+$/.test(number)) {
    return NextResponse.json(challengeCopy.finish.invalidBinary, { status: 400 });
  }

  if (number !== numberCookie?.value) {
    return NextResponse.json(challengeCopy.finish.wrongBinary, { status: 400 });
  }

  const name = cookieStore.get("name")?.value;
  const language = cookieStore.get("language")?.value;
  if (!name || !language) {
    return NextResponse.json(challengeCopy.finish.missingSession, { status: 400 });
  }

  const startedAtRaw = cookieStore.get("startedAt")?.value;
  if (!startedAtRaw) {
    return NextResponse.json(challengeCopy.finish.missingTimer, { status: 400 });
  }

  const startedAt = parseInt(startedAtRaw, 10);
  const solveTimeMs = Date.now() - startedAt;

  if (solveTimeMs > 3600_000 || solveTimeMs < 0) {
    return NextResponse.json(challengeCopy.finish.expiredTimer, { status: 400 });
  }

  try {
    const { rank } = await recordCompletion(hash, name, language, solveTimeMs);
    const solveTime = formatSolveTime(solveTimeMs);

    const token = signChallengeToken({ name, language, hash, solveTimeMs });

    cookieStore.set(CHALLENGE_TOKEN_COOKIE, token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 86400,
    });
    cookieStore.set("mode", "true", {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 86400,
    });
    cookieStore.delete("startedAt");

    return NextResponse.json(
      challengeCopy.finish.success(solveTime, solveTimeMs, rank)
    );
  } catch {
    return NextResponse.json(
      { message: "something broke saving your score. try again." },
      { status: 500 }
    );
  }
}
