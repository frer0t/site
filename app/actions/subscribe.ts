"use server";
import WelcomeSubscriberEmail from "@/emails/WelcomeSubscriber";
import {baseurl} from "@/utils/staticurls";
import resend from "@/utils/Resend";
import { z } from "zod";
const audienceId = process.env.RESEND_AUDIENCE_ID as string;
const from_email = process.env.RESEND_FROM_EMAIL as string;

const subscribe = async function (prevState: object, data: FormData) {
  console.log(prevState);
  const schema = z.object({
    email: z.string().email(),
  });
  const email = data.get("email");
  try {
    schema.parse({ email });
    if (typeof email === "string") {
      const response = await resend.contacts.create({
        email,
        audienceId,
      });
      if (response.error) {
        return { message: response.error.message, success: false };
      }

      resend.emails.create({
        from: from_email,
        to: email,
        subject: "Welcome to the newsletter!",
        react: WelcomeSubscriberEmail({
          base_url: baseurl,
        }),
      });

      return { message: "Subscribed successfully", success: true };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { message: "Invalid email", success: false };
    }
    return { message: "An error occurred", success: false };
  }
  return { message: "An error occurred", success: false };
};
export default subscribe;
