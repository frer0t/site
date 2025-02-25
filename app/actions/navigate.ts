"use server";

import { redirect, RedirectType } from "next/navigation";

export async function navigate(data: FormData) {
  const route = data.get("route");
  if (typeof route === "string") {
    const sanitizedRoute = route.trim().replace(/[^a-zA-Z0-9-_/]/g, "");
    if (
      !sanitizedRoute ||
      sanitizedRoute === "/home" ||
      sanitizedRoute === "home"
    ) {
      redirect("/", RedirectType.replace);
    }
    if (sanitizedRoute.startsWith("/")) {
      redirect(sanitizedRoute, RedirectType.replace);
    }
    redirect(`/${sanitizedRoute}`, RedirectType.replace);
  }
}
