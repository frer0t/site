import { challengeCopy } from "@/constants/challenge-responses";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(challengeCopy.entry);
}
