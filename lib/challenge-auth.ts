import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const CHALLENGE_TOKEN_COOKIE = "challenge_token";

export type ChallengeTokenPayload = {
  name: string;
  language: string;
  hash: string;
  solveTimeMs: number;
};

export function signChallengeToken(payload: ChallengeTokenPayload) {
  return jwt.sign(payload, process.env.SECRET_KEY as string, {
    algorithm: "HS256",
    expiresIn: "1day",
  });
}

export async function verifyChallengeToken(): Promise<ChallengeTokenPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(CHALLENGE_TOKEN_COOKIE)?.value;
  if (!token) return null;

  try {
    return jwt.verify(token, process.env.SECRET_KEY as string) as ChallengeTokenPayload;
  } catch {
    return null;
  }
}

export function verifyChallengeTokenString(token: string): ChallengeTokenPayload {
  return jwt.verify(token, process.env.SECRET_KEY as string) as ChallengeTokenPayload;
}
