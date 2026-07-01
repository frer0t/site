import { challengeCopy } from "@/constants/challenge-responses";
import {
  CHALLENGE_TOKEN_COOKIE,
  verifyChallengeTokenString,
} from "@/lib/challenge-auth";
import { formatSolveTime, getEntry, getRank, updateEntry } from "@/lib/leaderboard";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const submitSchema = z.object({
  feedback: z.string().optional(),
  link: z.string().optional(),
  initials: z
    .string()
    .min(2, { message: "initials must be 2 characters" })
    .max(2, { message: "initials must be 2 characters" }),
  message: z.string().min(1, { message: "message is required" }),
});

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();

  try {
    const body = await request.json();
    let payload;

    if (body?.token) {
      payload = verifyChallengeTokenString(body.token as string);
    } else {
      const token = cookieStore.get(CHALLENGE_TOKEN_COOKIE)?.value;
      if (!token) {
        return NextResponse.json(challengeCopy.submit.unauthorized, { status: 403 });
      }
      payload = verifyChallengeTokenString(token);
    }

    const validationResult = submitSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          ...challengeCopy.submit.validationFailed,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const existing = await getEntry(payload.hash);
    if (!existing) {
      return NextResponse.json(challengeCopy.submit.notFound, { status: 404 });
    }

    if (existing.message && existing.initials) {
      return NextResponse.json(challengeCopy.submit.alreadySubmitted, {
        status: 409,
      });
    }

    const { feedback, link, initials, message } = validationResult.data;
    const updated = await updateEntry(payload.hash, {
      initials,
      message,
      feedback,
      link,
    });

    const rank = (await getRank(payload.hash)) ?? 0;
    const solveTime = formatSolveTime(payload.solveTimeMs);

    return NextResponse.json({
      ...challengeCopy.submit.success(rank, solveTime),
      data: updated,
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(challengeCopy.submit.invalidJson, { status: 400 });
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return NextResponse.json(challengeCopy.submit.unauthorized, { status: 403 });
    }
    return NextResponse.json(challengeCopy.submit.serverError, { status: 500 });
  }
}
