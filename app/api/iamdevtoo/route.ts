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
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the input using Zod
    const validationResult = feedbackSchema.safeParse(body);

    if (!validationResult.success) {
      // Return validation errors
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Process the validated data
    const { feedback, link, initials, message } = validationResult.data;

    return NextResponse.json({
      message: "Woohoo! Thanks my VIP! 🎉",
      note: "Check out all the cool messages at /iamdevtoo on website!",
      data: {
        feedback,
        link,
        initials,
        message,
      },
    });
  } catch (error) {
    console.error("Error processing feedback:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
