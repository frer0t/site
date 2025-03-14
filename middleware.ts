import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get the mode cookie
  const modeCookie = request.cookies.get("mode");

  // Check if mode is explicitly set to false
  if (modeCookie?.value === "false" && request.nextUrl.pathname !== "/") {
    // Redirect to the root
    const randomMessages = [
      "Nice try. Come back after you've fixed that challange",
      "Challenge failed: Complete your work first",
      "Error 418: Developer not ready for break",
      "Access denied: Unfinished challenge detected",
      "Dev mode: Finish your API call to continue",
      "Sorry, this site requires completed challenges",
    ];
    const randomMessage =
      randomMessages[Math.floor(Math.random() * randomMessages.length)];
    const redirectUrl = new URL("/", request.url);
    redirectUrl.searchParams.set("message", randomMessage);
    return NextResponse.redirect(redirectUrl);
  }

  // Continue the request normally
  return NextResponse.next();
}

// Specify which paths this middleware should run on
export const config = {
  matcher: ["/portfolio", "/blog", "/identity", "/iamdevtoo"],
};
