"use server";
import resend from "@/utils/Resend";
import { z } from "zod";
const audienceId = process.env.RESEND_AUDIENCE_ID as string;
export default async function (prevState: object, data: FormData) {
  console.log(prevState);
  const schema = z.object({
    email: z.string().email(),
  });
  const email = data.get("email");
  try {
    schema.parse({ email });
  } catch (error) {
    console.error(error);
    return { message: "Invalid email", success: false };
  }

  if (typeof email === "string") {
    const reponse = await resend.contacts.create({
      email,
      audienceId,
    });
    console.log(reponse.error);
  }
  return { message: "Subscribed successfully", success: true };
}
