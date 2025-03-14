import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ hash: string }> }
) {
  const cookieStore = await cookies();
  const numberCookie = cookieStore.get("answer");
  const cookiehash = cookieStore.get("hash");
  const number = req.headers.get("x-developer-skill");
  const response = NextResponse;
  const hash = (await params).hash;
  if (cookiehash?.value !== hash) {
    return response.json({
      message:
        "🔒 Oopsie daisy! I told you to keep that treasure map safe! No magical shortcuts allowed on this adventure! ✨",
      hint: "Have you checked under the cookie 🍪 jar!",
    });
  }
  if (!number) {
    return response.json({
      error: "Missing x-developer-skill header",
      message:
        "Where's your binary magic wand? I need a sprinkle of 0s and 1s in the x-developer-skill header!",
    });
  }

  // Check if the number is a valid binary representation
  if (!/^[01]+$/.test(number)) {
    return response.json({
      error: "Invalid binary format",
      message:
        "Whoops! Your binary spell went wonky! Only 0s and 1s in this magical incantation, please!",
      hint: "Transform your decimal into binary the old-fashioned way - no sneaky shortcuts!",
    });
  }
  if (number !== numberCookie?.value) {
    return response.json({
      error: "Incorrect number in x-developer-skill header",
      message:
        "Almost there, coding wizard! If you're lost in the forest, try GET to /api/challenge2/<your_hash_from_challenge1> for a magic compass!",
    });
  }
  // Extract data from cookies
  const nameCookie = cookieStore.get("name");
  const languageCookie = cookieStore.get("language");
  // Ensure required cookies are provided
  if (!nameCookie?.value || !languageCookie?.value) {
    return response.json({
      message:
        "🧙‍♂️ By the ancient scrolls! How did you arrive here, wizard, without your name and language enchantments? 📜 Even the greatest sorcerers cannot proceed without these essential magical components! 🔮 I cannot grant you access to the mystical prize without these sacred tokens! 🏆",
    });
  }

  const name = nameCookie.value;
  const language = languageCookie.value;

  // Create JWT token

  const secret = process.env.SECRET_KEY as string;
  const tokenData = { name, language };

  // Sign the JWT
  const token = jwt.sign(tokenData, secret, {
    algorithm: "HS256",
    expiresIn: "1day",
  });
  cookieStore.set("iamdevtoo", token);
  cookieStore.set("mode", "true");
  return response.json(
    {
      message:
        "🎉 Woohoo! You did it, coding superstar! You've cracked the final puzzle! 🎁🔓",
      description:
        "Your magical token is all shiny and ready to use! Think of it as your VIP backstage pass! ✨🎭",
      info: "Here's what to do next: Take your token and POST to /api/iamdevtoo with your feedback and a fun shout-out!",
      warning:
        "⏰ Remember, if you don't use your magical token soon, it will *poof* disappear in a day! Magic doesn't last forever! ✨",
      next_steps:
        "1. POST to /api/iamdevtoo 2. Visit /iamdevtoo on the website to see your message displayed!",
      body: {
        feedback:
          "(Optional) Tell me your thoughts about this crazy coding adventure! to fellow developers",
        link: "(Optional) Share your website or social media if you want a shout-out",
        initials: "(Required) Your initials (like J.D.)",
        message: "(Required) Any fun message you want to share with the world!",
      },
      token,
    },
    {
      status: 200,
    }
  );
}
