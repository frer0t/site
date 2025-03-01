import prisma, { ConnectDb } from "@/utils/prisma";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define the schema for input validation
const feedbackSchema = z.object({
  feedback: z.string().optional(),
  link: z.string().optional(),
  initials: z.string().min(1, { message: "Initials are required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  let token;
  const secret = process.env.SECRET_KEY as string;

  try {
    const body = await request.json();

    if (body?.token) {
      token = body.token as string;
      try {
        jwt.verify(token, secret);
      } catch {
        throw new JsonWebTokenError("Invalid token provided in request body");
      }
    } else {
      // If not in body, try to get from cookies
      token = cookieStore.get("iamdevtoo")?.value;
      if (!token) {
        throw new JsonWebTokenError(
          "Authentication failed! You don't have the magic token"
        );
      }

      try {
        jwt.verify(token, secret);
      } catch {
        throw new JsonWebTokenError("Invalid token provided in cookie");
      }
    }

    const validationResult = feedbackSchema.safeParse(body);

    if (!validationResult.success) {
      // Return validation errors
      return NextResponse.json(
        {
          success: false,
          message: "validation failed",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { feedback, link, initials, message } = validationResult.data;
    await ConnectDb();
    const data = await prisma.feebacks.create({
      data: { initials, message, feedback, link },
    });
    return NextResponse.json({
      message: "Woohoo! Thanks my VIP! 🎉",
      note: "Check out all the cool messages at /iamdevtoo on website!",
      data: {
        ...data,
      },
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          message: "Oops! Looks like you forgot some thing",
          hint: "make sure add request body",
        },
        {
          status: 400,
        }
      );
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return NextResponse.json(
        {
          message:
            "🔒 Authentication failed! Your magic token has expired or is invalid. ✨",
          error: error.message,
        },
        { status: 403 }
      );
    }
    return NextResponse.json(
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
