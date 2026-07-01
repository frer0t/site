import { challengeCopy } from "@/constants/challenge-responses";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ hash: string }> }
) {
  try {
    const cookieStore = await cookies();
    const cookiehash = cookieStore.get("hash");
    const hash = (await params).hash;

    if (cookiehash?.value !== hash) {
      return NextResponse.json(challengeCopy.binary.hashMismatch, { status: 403 });
    }

    const numbers = [4, 5, 6, 7, 8, 9];
    const number = numbers[hash.length % 2];

    cookieStore.set("answer", number.toString(2), {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 3600,
    });

    return NextResponse.json(challengeCopy.binary.prompt(number, hash));
  } catch {
    return NextResponse.json(challengeCopy.binary.serverError, { status: 500 });
  }
}
