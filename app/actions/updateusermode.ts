"use server";
import { revalidatePath } from "next/cache";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export default async function updateUserMode(checked: boolean) {
  const cookieStore = await cookies();

  cookieStore.set("mode", checked.toString());
  if (checked === false) {
    redirect("/", RedirectType.replace);
  }
  revalidatePath("/");
}
